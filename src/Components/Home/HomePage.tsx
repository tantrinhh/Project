import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppDispatch } from "../../hooks/redux";
import "../../index.css";
import { RootState } from "../../services/redux/RootReducer";
import {
  addToComparison,
  removeFromComparison,
} from "../../services/redux/slices/compare/compare";
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

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const productsSelector = useSelector(productSelectors.selectAll);
  console.log(productsSelector, "productsSelector");
  const { comparedProducts } = useSelector((state: RootState) => state.compare);
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
    <>
      {/* Sub header */}
      <div>
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/originals_fw23_spezial_mainline_mh_d_476d0205fd.jpg"
          className="w-screen"
          alt=""
        />

        <div className="absolute bg-[#FFF3E3] md:max-w-[643px]  md:px-5 px-3 md:py-10 py-5  rounded-md md:top-[253px] top-[84px] right-2 md:left-[739px] space-y-3 space-x-5">
          <p className="md:text-[16px] text-sm md:mt-7 font-bold mx-5">
            New Arrival
          </p>
          <h1 className="md:text-[52px] md:leading-[60px] text-xl text-[#B88E2F] font-bold">
            Discover Our
            <br /> New Collection
          </h1>
          <p className=" max-md:hidden text-lg  leading-6 font-medium pb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <p className=" md:hidden text-sm leading-5 font-medium ">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
          <div className="md:mt-20">
            <button className="bg-[#B88E2F] rounded-sm md:py-[25px] py-2 md:px-[72px] px-6 text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Browse The Range */}
      <div className="mt-20 text-center justify-center items-center container">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="md:flex gap-20 mt-20 max-md:mx-10">
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/originals_fw23_spezial_mainline_tcc_d_49746f84cc.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Dining</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/football_ss23_arsenal_maharishi_onsite_tcc_1_d_7ecc4236c7.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Living</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/training_fw23_les_mills_always_on_hp_glp_teaser_carousel_d_ace430c003.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Bedroom</p>
          </div>
        </div>
      </div>

      <div className="my-20 container gap-x-5 gap-y-7">
        <h1 className="text-center text-[40px] font-bold mb-5">Our Products</h1>
        <div className="grid max-md: justify-center md:grid-cols-4  gap-y-14">
          {productsSelector?.map((product: any) => {
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
                    <img
                      src={product.image}
                      alt=""
                      className="w-[285px] h-[290px] "
                    />
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
                            Rp {product.price.toLocaleString()} $
                          </h3>
                          <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                            Rp{" "}
                            {(
                              product.price +
                              product.price * (product.discount / 100)
                            ).toLocaleString()}{" "}
                            $
                          </span>
                        </div>
                      ) : (
                        <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                          Rp {product.price.toLocaleString()} $
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
      <button className="w-[245px] max-md:mx-[25%] h-[48px] text-[#B88E2F] text-[16px] mt-10 font-bold border-solid border-2 border-[#B88E2F] mx-[41%]">
        Show More
      </button>
      <div className="bg-[#FCF8F3] mt-20 flex">
        <div className="ml-20 mr-32 mt-10">
          <h1 className="w-[422px] h-[96px] leading-[48px] font-bold text-[40px]">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="w-[368px] h-[48px] font-medium leading-[24px] text-[16px] mt-1">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire
          </p>
          <button className="bg-[#B88E2F] text-[#FFFFFF] w-[176px] h-[48px] mt-10">
            Explore More
          </button>
        </div>
        <Swiper
          slidesPerView={2.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {" "}
          <SwiperSlide>
            <img
              src={
                "https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/t/s/tsn231460._7.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/q/g/qg242423.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSE1lSqa1N4Dp7wlOUsdBs75bZyDl51EZuw&s"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/t/s/tsn231460._7.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://owen.cdn.vccloud.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/q/g/qg242423.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://img.lazcdn.com/g/p/0b5e877ceb05076da71319b8f02c0f94.jpg_720x720q80.jpg"
              }
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <p className="text-center text-[20px] leading-7 font-semibold mt-20">
        Share your setup with
      </p>
      <h1 className="text-center text-[40px] leading-10 font-bold">
        #FuniroFurniture
      </h1>
      <div className="flex gap-x-7 justify-between mb-20">
        <div className="flex flex-col gap-7">
          <div className="flex gap-7">
            <div>
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/df109777-ac34-4ac1-bfed-2fb11177b19b/club-fleece-mens-patch-pullover-hoodie-sDQP5j.png"
                alt=""
              />
            </div>
            <div className=" flex items-end">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c0a7ad05-82c8-40fd-b52c-114bdde21c32/club-fleece-mens-fleece-pants-76pmqC.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div>{/* <img src={Rectangle37} alt="" /> */}</div>
            <div>
              <img
                src={
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/172b372c-6cf6-4af9-a0e0-d3e2283dbda8/sportswear-club-fleece-mens-crew-neck-holiday-sweatshirt-KdZ25W.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center">
          <div className="">
            <img
              src={
                "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d00741a9-096a-48a3-861d-286b21ca1269/sportswear-club-fleece-holiday-pants-cBqrxB.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex gap-7">
            <div className=" flex items-end">
              <img
                src={
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d00741a9-096a-48a3-861d-286b21ca1269/sportswear-club-fleece-holiday-pants-cBqrxB.png"
                }
                alt=""
              />
            </div>
            <div>
              <img
                src={
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/382c56f3-6770-4035-a5bf-14f1a81ff454/primary-mens-dri-fit-short-sleeve-versatile-top-XK77j1.png"
                }
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div>
              <img
                src={
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc7aaf0c-34cf-43b5-9c12-074a6fba2a9d/jordan-essentials-holiday-fleece-pants-cTR1jG.png"
                }
                alt=""
              />
            </div>
            <div>
              <img
                src={
                  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f7aa16ea-1b77-4427-a4ba-849941261f28/jordan-essentials-holiday-fleece-pullover-hoodie-xvw5bV.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
