import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../index.css";
import { productSelectors } from "../../services/redux/slices/product";
import "./styles.css";
import HomeProduct from "./HomeProduct";
import SupHome from "./SupHome";

const HomePage = () => {
  const productsSelector = useSelector(productSelectors.selectAll);
  console.log(productsSelector, "productsSelector");
  return (
    <>
      <div>
        <SupHome />
        <HomeProduct />
        <div className="bg-[#FCF8F3] mt-20 flex">
          <div className="ml-20 mr-32 mt-10">
            <h1 className="w-[422px] h-[96px] leading-[48px] font-bold text-[40px]">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="w-[368px] h-[48px] font-medium leading-[24px] text-[16px] mt-1">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire
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
      </div>
    </>
  );
};

export default HomePage;
