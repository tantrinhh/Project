import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vector1 from "../../assets/shop/Vector1.png";
import Vector2 from "../../assets/shop/Vector2.png";
import Vector3 from "../../assets/shop/Vector3.png";
import { useAppDispatch } from "../../hooks/redux";

import {
  addToComparison,
  removeFromComparison,
} from "../../services/redux/slices/compare/compare";
import { RootState } from "../../services/redux/RootReducer";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../services/redux/slices/favorite";
import {
  getProduct,
  productSelectors,
} from "../../services/redux/slices/product";
import "react-toastify/dist/ReactToastify.css";
import "../Home/styles.css";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const productsSelector = useSelector(productSelectors.selectAll);
  const [searchTerm, setSearchTerm] = useState("");
  const handleDetailProduct = (id: any) => {
    navigate(`/product/${id}`);
  };
  const { comparedProducts } = useSelector((state: RootState) => state.compare);
  const today: Date = new Date();
  function isProductNew(productsSelector: any): boolean {
    const productAddedDate: Date = new Date(productsSelector.dateAdded); // Chuyển đổi chuỗi thành Date
    const daysDifference: number = Math.ceil(
      (today.getTime() - productAddedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysDifference <= 300;
  }
  const [productPerPage, setProductPerPage] = useState<number | string>(10); // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = Math.ceil(
    productsSelector.length / (+productPerPage || 1)
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 25000000]);
  // Sử dụng cả hai bộ lọc

  const productPerPageNumber = +productPerPage || 1; // Chuyển đổi productPerPage thành số và mặc định là 1 nếu không hợp lệ
  const indexOfLastProduct = currentPage * productPerPageNumber;
  const indexOfFirstProduct = indexOfLastProduct - productPerPageNumber;

  const filteredProducts = productsSelector
    .filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (searchTerm
          ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
          : true)
    )
    .slice(indexOfFirstProduct, indexOfLastProduct);
  // Xử lý khi người dùng chuyển trang
  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Xử lý nút "Previous"
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt lên đầu trang
    });
  };
  const handlePriceRangeChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    if (Array.isArray(newValue)) {
      setPriceRange(newValue as [number, number]);
    }
  };
  const favorites = useSelector((state: RootState) => state.favorite.list);

  // Handle search term change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="bg-[#FAF3EA] py-5 md:px-16 mb-10">
        <div className="flex md:justify-between max-md:flex-col justify-center items-center text-center">
          <div className="flex gap-x-5 items-center text-center">
            <div className="mt-1">
              <img src={Vector1} alt="" />
            </div>
            <p className="text-xl font-normal leading-[30px] text-[#000000]">
              Filter
            </p>
            <div className="mt-1">
              <img src={Vector2} alt="" />
            </div>
            <div className="">
              <img src={Vector3} alt="" />
            </div>
            <div>|</div>
            <div className="text-base font-normal leading-6 text-[#000000]">
              Showing 1–16 of 32 results
            </div>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Price Range Selector
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="off"
              min={0}
              max={25000000} // Set the maximum price value
            />
            <Typography>
              Price Range: RP {priceRange[0].toLocaleString()} - RP{" "}
              {priceRange[1].toLocaleString()}
            </Typography>
          </div>
          <div className="flex gap-x-5 max-md:mt-4  ">
            <div className="flex items-center gap-x-2">
              <label className="  text-xl font-normal leading-[30px] text-[#000000]">
                Show
              </label>
              <div className="mt-2">
                <input
                  type="number" // Sử dụng type="number"
                  className="md:w-14 w-11 md:h-14 h-10 md:px-3 px-1 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder=""
                  value={productPerPage}
                  onChange={(e) => {
                    const inputValue = parseInt(e.target.value, 10); // Chuyển đổi giá trị nhập thành số nguyên
                    if (!isNaN(inputValue)) {
                      // Nếu giá trị là một số hợp lệ
                      const maxProductPerPage = productsSelector.length; // Giới hạn tối đa là tổng số sản phẩm
                      let newProductPerPage = Math.min(
                        inputValue,
                        maxProductPerPage
                      ); // Chọn giá trị nhỏ hơn hoặc bằng tổng số sản phẩm
                      if (newProductPerPage < 1) {
                        // Nếu giá trị nhỏ hơn 1, đặt giá trị mới thành 1
                        newProductPerPage = 1;
                      }
                      setProductPerPage(newProductPerPage);
                    }
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2 ">
              <label className="text-xl font-normal leading-[30px] text-[#000000]">
                Short by
              </label>
              <div className="mt-2">
                <input
                  className=" max-w-[148px] md:px-4 px-2 md:h-10 h-8 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#9F9F9F] placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Default"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 container gap-x-5 gap-y-7 ">
        <div className="grid max-md: justify-center md:grid-cols-4  gap-y-14 ">
          {filteredProducts.map((product: any) => {
            const isProductInComparison = comparedProducts.some(
              (p: any) => p.id === product.id
            );
            const disableComparison =
              comparedProducts.length >= 2 && !isProductInComparison;
            const opacityClass = disableComparison ? " opacity-50" : "";

            const isProductInFavorites = favorites.some(
              (item) => item.id === product.id
            );

            return (
              <div key={product.id} className={`   ${opacityClass}`}>
                <div className="relative z-10 cursor-pointer">
                  <div className="w-[285px] absolute inset-0 z-10 bg-[#3A3A3A] text-center flex flex-col gap-8 items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                    <div className="px-8 py-2 rounded bg-[#FFFFFF] text-[#B88E2F] cursor-pointer">
                      <button
                        onClick={(event: any) => {
                          event.preventDefault();
                          handleDetailProduct(product.id);
                          scrollToTop();
                        }}
                      >
                        View product
                      </button>
                    </div>
                    <div className="flex gap-5 text-[#FFFFFF] text-base leading-6 font-semibold">
                      <div className="flex">
                        <div className="mt-1">
                          <CiShare2 />
                        </div>
                        <div>Share</div>
                      </div>
                      <div className="flex">
                        <div className="mt-1">
                          <BiGitCompare />
                        </div>

                        <div
                          className={`cursor-pointer ${
                            disableComparison
                              ? "opacity-50 pointer-events-none"
                              : ""
                          }`}
                          onClick={() => {
                            if (!disableComparison) {
                              if (isProductInComparison) {
                                dispatch(removeFromComparison(product));
                              } else {
                                if (comparedProducts.length < 2) {
                                  dispatch(addToComparison(product));
                                  if (comparedProducts.length === 1) {
                                    navigate("/productcomparison");
                                    scrollToTop();
                                  }
                                }
                              }
                            }
                          }}
                        >
                          {isProductInComparison ? "Remove" : "Compare"}
                        </div>
                      </div>
                      <div
                        className="flex cursor-pointer"
                        onClick={() => {
                          if (isProductInFavorites) {
                            dispatch(removeFromFavorites(product));
                            toast("Đã xóa khỏi danh sách yêu thích");
                          } else {
                            dispatch(addToFavorites(product));
                            toast("Đã thêm vào danh sách yêu thích");
                          }
                        }}
                      >
                        {isProductInFavorites ? (
                          <span className="mt-1 inline-block">
                            <AiFillHeart className="text-red-500" />
                          </span>
                        ) : (
                          <span className="mt-1 inline-block animate-heartbeat">
                            <AiOutlineHeart />
                          </span>
                        )}
                        <div className="ml-0.5">Like</div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative ${
                      isProductInComparison
                        ? "border-2 border-red-500 w-[288px] animate-pulse"
                        : "opacity-100"
                    }`}
                  >
                    <img src={product.image} alt="" className="w-[285px] " />
                    {product.discount > 0 && (
                      <div
                        className={`absolute top-6  text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171] ${
                          isProductInComparison
                            ? "absolute right-8"
                            : "absolute right-8 md:right-20"
                        }`}
                      >
                        -{product.discount}%
                      </div>
                    )}
                    {isProductNew(product) && (
                      <div
                        className={`absolute top-6  text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171] ${
                          isProductInComparison
                            ? "absolute right-8"
                            : "absolute right-8 md:right-20"
                        }`}
                      >
                        New
                      </div>
                    )}
                    <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                      <h2 className=" font-semibold leading-7 text-[#3A3A3A] pt-5 text-[24px]">
                        {product.name}
                      </h2>
                      <p className="text-[16px] font-medium leading-6 text-[#898989]">
                        {product.description}
                      </p>
                      {product.discount > 0 ? (
                        <div className="flex items-center">
                          <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                            Rp {product.price.toLocaleString()}
                          </h3>
                          <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                            Rp{" "}
                            {(
                              product.price +
                              product.price * (product.discount / 100)
                            ).toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                          Rp {product.price.toLocaleString()}
                        </h3>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-4 my-20">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 mx-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#B88E2F] text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* Hiển thị các nút trang */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-[#B88E2F] text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 mx-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-[#B88E2F] text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Main;
