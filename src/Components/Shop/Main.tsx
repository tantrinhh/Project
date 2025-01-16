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
import { FiSearch } from "react-icons/fi";
import Search from "../Common/Search";

const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const productsSelector = useSelector(productSelectors.selectAll);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedPriceOrder, setselectedPriceOrder] = useState<number | null>(null);
  const handleDetailProduct = (id: any) => {
    navigate(`/product/${id}`);
  };
  const handleCollectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCollection(Number(event.target.value)); // Chuyển value thành số
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setselectedPriceOrder(Number(event.target.value)); // Chuyển value thành số
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value); // Chuyển value thành số
  };
  const handleBrandsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedBrands(event.target.value);
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  };
  const { comparedProducts } = useSelector((state: RootState) => state.compare);
  const today: Date = new Date();
  function isProductNew(productsSelector: any): boolean {
    const productAddedDate: Date = new Date(productsSelector.dateAdded); // Chuyển đổi chuỗi thành Date
    const daysDifference: number = Math.ceil(
      (today.getTime() - productAddedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysDifference < 10;
  }
  const [productPerPage, setProductPerPage] = useState<number | string>(8); // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const totalPages = Math.ceil(
    productsSelector.length / (+productPerPage || 1)
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  // Sử dụng cả hai bộ lọc
  const [isShowModalSearch, setIsShowModalSearch] = useState(false);
  const productPerPageNumber = +productPerPage || 1; // Chuyển đổi productPerPage thành số và mặc định là 1 nếu không hợp lệ
  const indexOfLastProduct = currentPage * productPerPageNumber;
  const indexOfFirstProduct = indexOfLastProduct - productPerPageNumber;

  const filteredProducts = productsSelector
    .filter(
      (product) =>

        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (selectedCollection === null || product.collection === selectedCollection) && // Lọc collection
        (selectedSize === null || product.sizes.includes(selectedSize)) && // Lọc size
        (selectedColor === null || product.colors.includes(selectedColor)) && // Lọc color
        (selectedBrands === null || product.brands.includes(selectedBrands)) && // Lọc color

        (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
    )
    .sort((a, b) => {
      if (selectedPriceOrder === priceRange[0]) {
        return a.price - b.price; // Sắp xếp giá từ thấp đến cao
      } else if (selectedPriceOrder === priceRange[1]) {
        return b.price - a.price; // Sắp xếp giá từ cao đến thấp
      }
      return 0; // Nếu không chọn sắp xếp, không làm gì cả
    })
    .slice(indexOfFirstProduct, indexOfLastProduct);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const noProductsFound = filteredProducts.length === 0;
  const handleClearSearch = () => {
    setSearchTerm(""); // Xóa dữ liệu trong ô tìm kiếm
  };
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

  const handleSearch = () => {
    setIsShowModalSearch(true);
  };
  const handleClose = () => {
    setIsShowModalSearch(false);
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
              Lọc
            </p>
            <div className="mt-1">
              <img src={Vector2} alt="" />
            </div>
            <div className="">
              <img src={Vector3} alt="" />
            </div>
            <div>|</div>
            <div className="text-base font-normal leading-6 text-[#000000]">
              Hiển thị 1–8 trong số tất cả kết quả
            </div>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Bộ Chọn Phạm Vi Giá
            </Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceRangeChange}
              valueLabelDisplay="off"
              min={0}
              max={500000} // Set the maximum price value
            />
            <Typography>
              Phạm Vi Giá:  {priceRange[0]} đ - {" "}
              {priceRange[1]} đ
            </Typography>
          </div>
          <div className="flex gap-x-5 max-md:mt-4  ">
            <div className="flex items-center gap-x-2">
              <label className="  text-xl font-normal leading-[30px] text-[#000000]">
                Hiển thị
              </label>
              <div className="mt-2">
                <input
                  type="number" // Sử dụng type="number"
                  className="md:w-14 w-11 md:h-10 h-10 md:px-3 px-1 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <div className="flex items-center gap-x-2 my-auto">
              <label className="text-xl font-normal leading-[30px] text-[#000000]">
                Tìm Kiếm
              </label>
              <div className="mt-10 items-center">
                <input
                  className=" max-w-[148px] md:pr-4 md:pl-7 px-2 md:h-10 h-8 items-center my-auto -mt-5 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#000] cursor-pointer placeholder:text-lg focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // placeholder="Default"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div
                  onClick={() => handleSearch()}
                  className="-top-[30px] max-md:-top-6 relative left-2 w-[23px] cursor-pointer"
                >
                  <FiSearch style={{ width: "18px", height: "18px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-20 flex">
        <div className="w-80  mr-10 ml-14 max-h-max border-2 rounded-lg border-[#000]">
          <div className="px-5">
            <div className="text-xl font-semibold mb-4 ">Danh sách sản phẩm </div>
            <div>
              <div className="flex items-center mb-4">
                <input
                  id="collection"
                  type="radio"
                  value=""
                  name="collection"
                  checked={selectedCollection === null}
                  onChange={() => setSelectedCollection(null)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="collection"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer">
                  Tất cả
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="collection-1"
                  type="radio"
                  value="1"
                  name="collection"
                  checked={selectedCollection === 1}
                  onChange={handleCollectionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="collection-1"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer">
                  Áo Polo
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="collection-2"
                  type="radio"
                  value="2"
                  name="collection"
                  checked={selectedCollection === 2}
                  onChange={handleCollectionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="collection-2" className="ml-2 text-sm font-medium text-[#000] cursor-pointer">
                  Áo Jacket
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="collection-3"
                  type="radio"
                  value="3"
                  name="collection"
                  checked={selectedCollection === 3}
                  onChange={handleCollectionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="collection-3"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Áo T-Shirt
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="collection-4"
                  type="radio"
                  value="4"
                  name="collection"
                  checked={selectedCollection === 4}
                  onChange={handleCollectionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="collection-4"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Quần Tây
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="collection-5"
                  type="radio"
                  value="5"
                  name="collection"
                  checked={selectedCollection === 5}
                  onChange={handleCollectionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="collection-5"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Quần Jean
                </label>
              </div>
            </div>
          </div>
          <div className="border mb-5  border-[#000]"></div>
          <div className="px-5">
            <div className="text-xl font-semibold mb-4">Thương hiệu</div>
            <div>
              <div className="flex items-center mb-4">
                <input
                  id="brands"
                  type="radio"
                  value=""
                  name="brands"
                  checked={selectedBrands === null}
                  onChange={() => setSelectedBrands(null)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="brands" className="ml-2 text-sm font-medium text-[#000] cursor-pointer">
                  Tất cả
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="brands-GUCCI"
                  type="radio"
                  value="GUCCI"
                  name="brands"
                  checked={selectedBrands === "GUCCI"}
                  onChange={handleBrandsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="brands-GUCCI" className="ml-2 text-sm font-medium text-[#000] cursor-pointer">

                  GUCCI
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="brands-VIETTIEP"
                  type="radio"
                  value="VIETTIEP"
                  name="brands" checked={selectedBrands === "VIETTIEP"}
                  onChange={handleBrandsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="brands-VIETTIEP"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  VIETTIEP
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="brands-DIOR"
                  type="radio"
                  value="DIOR"
                  name="brands"
                  checked={selectedBrands === "DIOR"}
                  onChange={handleBrandsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="brands-DIOR"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  DIOR
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="brands-CHANEL"
                  type="radio"
                  value="CHANEL"
                  name="brands"
                  checked={selectedBrands === "CHANEL"}
                  onChange={handleBrandsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="brands-CHANEL"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  CHANEL
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="brands-PRADA"
                  type="radio"
                  value="PRADA"
                  name="brands"
                  checked={selectedBrands === "PRADA"}
                  onChange={handleBrandsChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="brands-PRADA"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  PRADA
                </label>
              </div>
            </div>
          </div>
          <div className="border mb-5  border-[#000]"></div>
          <div className="px-5">
            <div className="text-xl font-semibold mb-4">Kích thước</div>
            <div>
              <div className="flex items-center mb-4">
                <input
                  id="sizes"
                  type="radio"
                  value=""
                  name="sizes"
                  checked={selectedSize === null}
                  onChange={() => setSelectedBrands(null)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="sizes" className="ml-2 text-sm font-medium text-[#000] cursor-pointer">
                  Tất cả
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="sizes-XXL"
                  type="radio"
                  value="XXL"
                  name="sizes"
                  checked={selectedSize === "XXL"}
                  onChange={handleSizeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="sizes-XXL" className="ml-2 text-sm font-medium text-[#000] cursor-pointer">

                  XXL
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="sizes-XL"
                  type="radio"
                  value="XL"
                  name="sizes" checked={selectedSize === "XL"}
                  onChange={handleSizeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="sizes-XL"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  XL
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="sizes-L"
                  type="radio"
                  value="L"
                  name="sizes"
                  checked={selectedSize === "L"}
                  onChange={handleSizeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="sizes-L"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  L
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="sizes-M"
                  type="radio"
                  value="M"
                  name="sizes"
                  checked={selectedSize === "M"}
                  onChange={handleSizeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="sizes-M"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  M
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="sizes-S"
                  type="radio"
                  value="S"
                  name="sizes"
                  checked={selectedSize === "S"}
                  onChange={handleSizeChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F] focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-[#9F9F9F] focus:ring-2 dark:bg-[#9F9F9F] dark:border-[#9F9F9F]"
                />
                <label
                  htmlFor="sizes-S"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  S
                </label>
              </div>
            </div>
          </div>
          <div className="border mb-5  border-[#000]"></div>
          <div className="px-5">
            <div className="text-xl font-semibold mb-4">Màu sắc</div>
            <div>
              <div className="flex items-center mb-4">
                <input

                  id="colors"
                  type="radio"
                  value=""
                  name="colors"
                  checked={selectedColor === null}
                  onChange={() => setSelectedColor(null)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="colors"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Tất cả
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="colors-Green"
                  type="radio"
                  value="Green"
                  name="colors"
                  checked={selectedColor === "Green"}
                  onChange={handleColorChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="colors-Green"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Xanh
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="colors-Black"
                  type="radio"
                  value="Black"
                  name="colors"
                  checked={selectedColor === "Black"}
                  onChange={handleColorChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="colors-Black"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Black
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="colors-Red"
                  type="radio"
                  value="Red"
                  name="colors"
                  checked={selectedColor === "Red"}
                  onChange={handleColorChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="colors-Red"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Red
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="colors-Yellow"
                  type="radio"
                  value="Yellow"
                  name="colors"
                  checked={selectedColor === "Yellow"}
                  onChange={handleColorChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="colors-Yellow"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Yellow
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="colors-Purple"
                  type="radio"
                  value="Purple"
                  name="colors"
                  checked={selectedColor === "Purple"}
                  onChange={handleColorChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-[#9F9F9F]"
                />
                <label htmlFor="colors-Purple"
                  className="ml-2 text-sm font-medium text-[#000] cursor-pointer"
                >
                  Purple
                </label>
              </div>
            </div>
          </div>

        </div>
        <div>
          <div>
            <div className="flex gap-10">
              <div>
                <select
                  id="price"
                  value={selectedPriceOrder || ""}
                  onChange={handlePriceChange}
                  className="block w-44 p-2 mb-10 border border-gray-300 rounded-lg text-[#000] cursor-pointer"
                >
                  <option value="">Chọn giá</option>
                  <option value={priceRange[0].toString()}>Giá từ thấp đến cao</option>
                  <option value={priceRange[1].toString()}>Giá từ cao đến thấp </option>
                </select>
              </div>
            </div>
          </div>
          <div className=" flex gap-x-5 gap-y-7 ">

            {noProductsFound ? (
              <p
                className="text-center text-red-500 cursor-pointer"
                onClick={handleClearSearch}
              >
                Không tìm thấy sản phẩm
              </p>
            ) : (
              <div className="grid max-md: justify-center md:grid-cols-3  gap-y-14 gap-x-10  ">
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
                    <div key={product.id} className={`border border-[#000] rounded-lg ${opacityClass}`}>
                      <div className="relative  z-10 cursor-pointer">
                        <div className="w-[285px]   absolute inset-0 z-10 bg-[#3A3A3A] text-center flex flex-col gap-8 items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300 rounded-lg">
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
                                className={`cursor-pointer ${disableComparison
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
                          className={`relative ${isProductInComparison
                            ? "border-2 border-red-500 w-[288px] animate-pulse"
                            : "opacity-100"
                            }`}
                        >
                          <div className="w-[285px] h-[290px] "><img
                            src={product.image}
                            alt=""
                            className="w-[285px] h-[290px] rounded-lg "
                          /></div>
                          {product.discount > 0 && (
                            <div
                              className={`absolute top-6  text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171] ${isProductInComparison
                                ? "absolute right-8"
                                : "absolute right-8 md:right-10"
                                }`}
                            >
                              -{product.discount}%
                            </div>
                          )}
                          {isProductNew(product) && (
                            <div
                              className={`absolute top-6  text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171] ${isProductInComparison
                                ? "absolute right-8"
                                : "absolute right-8 md:right-10"
                                }`}
                            >
                              New
                            </div>
                          )}
                          <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5 rounded-b-lg">
                            <h2 className=" font-semibold leading-7 text-[#3A3A3A] pt-5 text-[24px]">
                              {product.name}
                            </h2>

                            {product.discount > 0 ? (
                              <div className="flex items-center">
                                <div className="flex text-[20px]"><div>Giá :</div> <div className="mt-[2px] ml-1 font-semibold leading-7 text-[#3A3A3A]  ">
                                  {product.price} ₫
                                </div></div>
                                <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                                  Giá :{" "}
                                  {(
                                    product.price +
                                    product.price * (product.discount / 100)
                                  )}{" "}
                                  ₫
                                </span>
                              </div>
                            ) : (
                              <div className="flex text-[20px]"><div>Giá :</div> <div className="mt-[2px] ml-1 font-semibold leading-7 text-[#3A3A3A]  ">
                                {product.price} ₫
                              </div></div>
                            )}



                            <div className="flex text-[20px]"><div> Số lượng :</div> <div className="mt-[2px] ml-1 font-semibold leading-7 text-[#3A3A3A]  ">
                              {product.quantity}
                            </div></div>

                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div></div>

      </div>
      <div className="flex justify-center mt-4 my-20">
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 mx-2 rounded-lg ${currentPage === 1
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
            className={`px-4 py-2 mx-2 rounded-lg ${currentPage === index + 1
              ? "bg-[#B88E2F] text-white"
              : "bg-gray-200"
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 mx-2 rounded-lg ${currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-[#B88E2F] text-white"
            }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      {isShowModalSearch && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black opacity-90" />
      )}
      {isShowModalSearch && (
        <Search
          show={isShowModalSearch}
          handleClose={handleClose}
          handleSearchChange={handleSearchChange} // Truyền đúng hàm xử lý tìm kiếm
          searchTerm={searchTerm}
        />
      )}
    </>
  );
};

export default Main;
