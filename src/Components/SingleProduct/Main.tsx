import { useState } from "react";
import {
  AiFillHeart,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineHeart,
  AiOutlineRight,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook,FaCartPlus  } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import stars from "../../assets/ProductComparison/stars.png";
import Group94 from "../../assets/single-product/Group94.png";
import Group96 from "../../assets/single-product/Group96.png";
import Group97 from "../../assets/single-product/Group97.png";
import Group98 from "../../assets/single-product/Group98.png";
import sofa from "../../assets/single-product/sofa.png";

import { addProduct } from "../../services/redux/slices/cart";
import { productSelectors } from "../../services/redux/slices/product";
import ColorTabSelect from "../Common/ColorSelect";
import SizeTabSelect from "../Common/SizeSelect";
import {
  addToComparison,
  removeFromComparison,
} from "../../services/redux/slices/compare/compare";
import { RootState } from "../../services/redux/RootReducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToFavorites, removeFromFavorites } from "../../services/redux/slices/favorite";

const Main = () => {
  const productsSelector = useSelector(productSelectors.selectAll);

  const params: any = useParams();
  // console.log(params);
  // console.log(productsSelector, "productsSelector");
  const itemDetail = productsSelector.filter(
    (item: any) => parseInt(item.id) === parseInt(params.id)
  );
  console.log(itemDetail, "itemDetail");

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const handleDetailProduct = (id: any) => {
    navigate(`/product/${id}`);
  };

  const today: Date = new Date();
  function isProductNew(product: any): boolean {
    const productAddedDate: Date = new Date(product.dateAdded); // Chuyển đổi chuỗi thành Date
    const daysDifference: number = Math.ceil(
      (today.getTime() - productAddedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysDifference <= 7;
  }
  const handleSizeSelect = (size: any) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (item: any) => {
    setSelectedColor(item);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const handleCart = () => {
    const actionCart: any = {
      id: itemDetail[0].id,
      image: itemDetail[0].image,
      name: itemDetail[0].name,
      description: itemDetail[0].description,
      price: itemDetail[0].price,
      discount: itemDetail[0].discount,
      dateAdded: itemDetail[0].dateAdded,
      count: count,
      sizes: selectedSize,
      colors: selectedColor,
    };
    if (selectedSize !== null && selectedColor !== null) {
      dispatch(addProduct(actionCart));
      setTimeout(() => {
        navigate("/cart");
      }, 2000)  
      toast("Thêm thành công");
    } else {
      toast("Vui lòng thêm kích cỡ và màu sắc của sản phẩm");
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt lên đầu trang
    });
  };
  const { comparedProducts } = useSelector((state: RootState) => state.compare);
  const favorites = useSelector((state: RootState) => state.favorite.list);
  return (
    <>
      <div className="product-content">
        <div className="bg-[#FAF3EA] py-5 px-20  mb-10">
          <div className="flex gap-8 items-center text-center">
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              Home
            </div>
            <div className="mt-2 text-[#000000]">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              Shop
            </div>
            <div className="mt-2 text-[#000000]">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              |
            </div>
            <div className="text-[#000000] font-medium text-base leading-6">
              {itemDetail[0].name}
            </div>
          </div>
        </div>
        <div className="md:flex justify-between md:mx-20 mx-14">
          <div className="flex gap-8">
            <div className="flex flex-col gap-10 max-md:hidden">
              <div>
                {" "}
                <img src={Group94} alt="" />
              </div>
              <div>
                {" "}
                <img src={Group96} alt="" />
              </div>
              <div>
                {" "}
                <img src={Group97} alt="" />
              </div>
              <div>
                {" "}
                <img src={Group98} alt="" />
              </div>
            </div>
            <div className="">
              {" "}
              <img src={itemDetail[0].image} alt="" className="bg-[#F9F1E7] w-96" />
            </div>
          </div>
          <div className="max-w-[610px] md:px-10">
            <div className=" font-medium text-[42px] leading-[63px] text-[#000000]">
              {itemDetail[0].name}
            </div>
            <div className="text-[#9F9F9F] font-medium text-2xl leading-9">
              Rs.
              {itemDetail[0].price.toLocaleString()}
            </div>
            <div className="flex gap-4 my-5">
              <div>
                <img
                  src={stars}
                  alt=""
                  className="w-[124px] h-[20px] top-[718px] left-[428px] mt-1"
                />
              </div>
              <div className="text-[13px] text-[#9F9F9F] leading-[30px]">|</div>
              <div className="text-[13px] text-[#9F9F9F] leading-[30px]">
                5 Customer Review
              </div>
            </div>
            <div>
              <p className="max-w-[424px]">{itemDetail[0].description}</p>{" "}
            </div>
            <div>
              <div className=" font-normal text-sm text-[#9F9F9F] mt-6 mb-3">
                Size
              </div>
              <SizeTabSelect
                sizes={itemDetail[0].sizes}
                onSelect={handleSizeSelect}
              />
            </div>
            <div>
              <div className="font-normal text-sm text-[#9F9F9F] mt-6 mb-3">
                Color
              </div>
              <ColorTabSelect
                colors={itemDetail[0].colors}
                onSelect={handleColorSelect}
              />
            </div>
            <div className="flex items-center gap-14 max-md:justify-center  font-normal text-xl leading-[30px] text-[#000000]">
              <div className="quantity-buttons">
                <div className="quantity-button flex flex-row rounded-md space-x-2">
                  <button
                    type="button"
                    onClick={() => setCount(count - 1)}
                    className="quantity-button__btn"
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                    className="quantity-button__btn"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="h-10 max-md:hidden  px-5 border border-[#000000] pt-1.5 rounded-md">
                {" "}
                <button 
                  onClick={() => {
                    handleCart();
                  }}
                >
                  Add To Cart
                </button>
              </div>
              <div className="h-10 md:hidden  px-4 border border-[#000000] pt-1.5 rounded-md">
                {" "}
                <button className=""
                  onClick={() => {
                    handleCart();
                  }}
                >
                      <FaCartPlus style={{ width: "28px", height: "28px" }}/>
                </button>
              </div>
        
            </div>
            <div>
              <div className="border-t border border-[#9F9F9F] mt-20"></div>
            </div>
            <div className="flex  my-10">
              <div className="mr-5 font-normal text-base text-[#9F9F9F] flex flex-col gap-y-2 ">
                <div>SKU</div>
                <div>Category</div>
                <div>Tags</div>
                <div>Share</div>
              </div>
              <div className="gap-5  flex flex-col gap-y-2 ">
                <div className="font-normal text-base text-[#9F9F9F]">
                  : SS001
                </div>
                <div className="font-normal text-base text-[#9F9F9F]">
                  : Sofas
                </div>
                <div className="font-normal text-base text-[#9F9F9F]">
                  : Sofa, Chair, Home, Shop
                </div>
                <div className="flex">
                  :
                  <div className="ml-2">
                    <FaFacebook style={{ width: "20px", height: "20px" }} />
                  </div>
                  <div className="mx-5">
                    <AiFillInstagram
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div>
                    <AiFillTwitterCircle
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="border-t border border-[#9F9F9F]"></div>
        <div className=" ">
          <div className="flex max-w-[650px] mx-auto gap-10 justify-between font-medium text-2xl leading-9 my-14">
            <div className="text-[#000000]">Description</div>
            <div className="text-[#9F9F9F]">Additional Information</div>
            <div className="text-[#9F9F9F]">Reviews [5]</div>
          </div>
          <div className="max-w-[1026px] mx-auto mb-10 text-[#9F9F9F] font-normal  text-base leading-6">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <br />
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-14">
            <div className="bg-[#F9F1E7]">
              <img src={sofa} alt="" />
            </div>
            <div className="bg-[#F9F1E7]">
              <img src={sofa} alt="" />
            </div>
          </div>
        </div>
        <div className="border-t border border-[#9F9F9F]"></div>
        <div>
          <div className="text-center font-medium text-4xl leading-[54px] text-[#000000] mb-5 mt-14">
            Related Products
          </div>
          <div>
            {" "}
            <div className="mb-20 container">
              <div className="grid md:grid-cols-4 grid-cols-1 max-md:ml-14 gap-y-14 ">
                {productsSelector.slice(0, 4).map((product: any) => {
                  const isProductInComparison = comparedProducts.some(
                    (p: any) => p.id === product.id
                  );
                  const disableComparison =
                    comparedProducts.length >= 2 && !isProductInComparison;
                  const isProductInFavorites = favorites.some((item) => item.id === product.id);
                  return (
                    <div key={product.id}>
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
                            <div className="flex cursor-pointer" onClick={() => {
                        if (isProductInFavorites) {
                          dispatch(removeFromFavorites(product));
                          toast("Đã xóa khỏi danh sách yêu thích")
                        } else {
                          dispatch(addToFavorites(product));
                          toast("Đã thêm vào danh sách yêu thích")
                        }
                      }}>
                      {isProductInFavorites ? (
          <AiFillHeart className="mt-1" />
        ) : (
          <AiOutlineHeart className="mt-1" />
        )}
                              <div>Like</div>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <img
                            src={product.image}
                            alt=""
                            className="w-[285px] h-[200px]"
                          />
                          {product.discount > 0 && (
                            <div className="absolute top-6 right-20 text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171]">
                              -{product.discount}%
                            </div>
                          )}
                          {isProductNew(product) && (
                            <div className="absolute top-6 right-20 bg-[#2EC1AC] text-white rounded-full w-10 h-10 items-center text-center pt-2">
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
          </div>
          <div></div>
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};

export default Main;
