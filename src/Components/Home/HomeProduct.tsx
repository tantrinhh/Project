import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../../hooks/redux";
import "../../index.css";
import { RootState } from "../../services/redux/RootReducer";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../services/redux/slices/favorite";
import {
  getProduct,
  productSelectors,
} from "../../services/redux/slices/product";
import { Product } from "../../services/redux/slices/product/type";
import "./styles.css";
import { useEffect } from "react";
const HomeProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const productsSelector = useSelector(productSelectors.selectAll);
  const handleDetailProduct = (id: Product) => {
    navigate(`/product/${id}`);
  };
  const today: Date = new Date();
  function isProductNew(productsSelector: any): boolean {
    const productAddedDate: Date = new Date(productsSelector.dateAdded); // Chuyển đổi chuỗi thành Date
    const daysDifference: number = Math.ceil(
      (today.getTime() - productAddedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysDifference < 15;
  }
  //const [comparisonDone, setComparisonDone] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt lên đầu trang
    });
  };
  const favorites = useSelector((state: RootState) => state.favorite.list);
  return (
    <div>
      <h1 className="text-center text-[40px] font-bold mb-5 mt-10">KHÁM PHÁ BỘ SƯU TẬP</h1>
      <div className="p-10 text-center  ">
        <p className="text-3xl mb-3"><span className="text-[#19d7f8] ">CÁC SẢN PHẨM </span> MỚI VỀ</p>
        <div className="text-xl">Xem ngay nào ...</div>
      </div>
      <div >
        <div className="my-10 container gap-x-5 gap-y-7"> <div className="grid max-md: justify-center md:grid-cols-4 gap-y-14">
        {productsSelector
          ?.filter((product: any) => isProductNew(product)) // Filter for new products
          .slice(0,4)
          .map((product: any) => (
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
                    <div
                      className="flex cursor-pointer"
                      onClick={() => {
                        if (favorites.some((item) => item.id === product.id)) {
                          dispatch(removeFromFavorites(product));
                          toast("Đã xóa khỏi danh sách yêu thích");
                        } else {
                          dispatch(addToFavorites(product));
                          toast("Đã thêm vào danh sách yêu thích");
                        }
                      }}
                    >
                      {favorites.some((item) => item.id === product.id) ? (
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
                <div className="relative">
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: "285px", height: "290px" }}
                  />
                
                  {isProductNew(product) && (
                    <div className=" top-6 text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171] absolute right-20">
                      New
                    </div>
                  )}
                  <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                    <h2 className="font-semibold leading-7 text-[#3A3A3A] pt-5 text-[24px]">
                      {product.name}
                    </h2>
                    {product.discount > 0 ? (
                      <div className="flex items-center">
                        <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                          Rp {product.price.toLocaleString()} ₫
                        </h3>
                        <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                          Rp {(product.price + product.price * (product.discount / 100)).toLocaleString()} $
                        </span>
                      </div>
                    ) : (
                      <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                        Rp {product.price.toLocaleString()} ₫
                      </h3>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
       <div className="p-10 text-center  ">
        <p className="text-3xl mb-3"><span className="text-[#19d7f8] ">CÁC SẢN PHẨM </span> GIẢM GIÁ</p>
        <div className="text-xl">Xem ngay nào ...</div>
      </div>
        <div className="my-10 container gap-x-5 gap-y-7">
          <div className="grid max-md: justify-center md:grid-cols-4 gap-y-14">
      {productsSelector
      ?.filter((product: any) => product.discount >0) // Filter for new products
      .slice(0,4)
      .map((product: any) => (
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
                <div
                  className="flex cursor-pointer"
                  onClick={() => {
                    if (favorites.some((item) => item.id === product.id)) {
                      dispatch(removeFromFavorites(product));
                      toast("Đã xóa khỏi danh sách yêu thích");
                    } else {
                      dispatch(addToFavorites(product));
                      toast("Đã thêm vào danh sách yêu thích");
                    }
                  }}
                >
                  {favorites.some((item) => item.id === product.id) ? (
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
            <div className="relative">
              <img
                src={product.image}
                alt=""
                 className="w-[285px] h-[290px] object-cover"
              />
              {product.discount > 0 && (
                <div className=" top-6 text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171] absolute right-20">
                  -{product.discount}%
                </div>
              )}
              <div className="bg-[#F4F5F7] w-[285px] h-[145px] space-y-3 pl-5">
                <h2 className="font-semibold leading-7 text-[#3A3A3A] pt-5 text-[24px]">
                  {product.name}
                </h2>
                {product.discount > 0 ? (
                  <div className="flex items-center">
                    <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                      Rp {product.price.toLocaleString()}đ
                    </h3>
                    <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                      Rp {(product.price + product.price * (product.discount / 100)).toLocaleString()}đ
                    </span>
                  </div>
                ) : (
                  <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                    Rp {product.price.toLocaleString()}đ
                  </h3>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
  </div> 
        </div>
      </div>
      <div>
        <a   href="/shop">
        <button className="w-[245px] max-md:mx-[25%] h-[48px] text-[#B88E2F] text-[16px] mt-10 font-bold border-solid border-2 border-[#B88E2F] mx-[41%]">
          Hiển thị thêm
        </button>
        </a>
    </div>
  </div>
  );
};

export default HomeProduct;
