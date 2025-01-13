import { useState } from "react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineRight,
} from "react-icons/ai";
import { FaFacebook, FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import stars from "../../assets/ProductComparison/stars.png";
import { addProduct } from "../../services/redux/slices/cart";
import { productSelectors } from "../../services/redux/slices/product";
import ColorTabSelect from "../Common/ColorSelect";
import SizeTabSelect from "../Common/SizeSelect";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  return (
    <>
      <div className="product-content">
        <div className="bg-[#FAF3EA] py-5 px-20  mb-10">
          <div className="flex gap-8 items-center text-center">
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              Trang chủ
            </div>
            <div className="mt-2 text-[#000000]">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <div className="text-[#9F9F9F] font-normal text-base leading-6">
              Sản phẩm
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
        <div className="md:flex justify-center gap-32 md:mx-20 mx-14">
          <div className="flex gap-8">
            {/* <div className="flex flex-col gap-10 max-md:hidden">
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
            </div> */}
            <div className="w-[650px] h-[700px] bg-[#F9F1E7] overflow-hidden">
              <img
                src={itemDetail[0].image}
                alt=""
                className="w-[650px] h-[700px] object-cover"
              />
            </div>
          </div>
          <div className="max-w-[610px] md:px-10 ">
            <div className="flex items-center gap-3"> <div className="text-2xl">Sản phẩm :</div>
              <div className=" font-medium text-[38px] leading-[63px] text-[#000000]">
                {itemDetail[0].name}
              </div></div>

            <div className="text-[#9F9F9F] font-medium text-2xl leading-9">
              Giá :
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
                Đánh giá 5 sao
              </div>
            </div>
            <div>
              <div className=" font-normal text-sm text-[#9F9F9F] mt-6 mb-2 ">
                Mô tả :
              </div>
              <p className="max-w-[424px]">{itemDetail[0].description}</p>{" "}
            </div>
            <div>
              <div className=" font-normal text-sm text-[#9F9F9F] mt-6 ">
                Kích thước :
              </div>
              <SizeTabSelect
                sizes={itemDetail[0].sizes}
                onSelect={handleSizeSelect}
              />
            </div>
            <div>
              <div className="font-normal text-sm text-[#9F9F9F] mt-3">
                Màu sắc :
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
                  <FaCartPlus style={{ width: "28px", height: "28px" }} />
                </button>
              </div>

            </div>
            <div>
              <div className="border-t border border-[#9F9F9F] mt-20"></div>
            </div>
            <div className="flex  my-10">
              <div className="mr-5 font-normal text-base text-[#9F9F9F] flex flex-col gap-y-2 ">

                <div>Share</div>
              </div>
              <div className="gap-5  flex flex-col gap-y-2 ">

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

        <ToastContainer autoClose={3000} />
      </div>
    </>
  );
};

export default Main;
