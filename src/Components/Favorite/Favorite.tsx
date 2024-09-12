import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/RootReducer";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Favorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorite.list);

  return (
    <div className="mb-10 mt-32 space-y-5 mx-10">
      <h1 className="text-center font-bold text-[30px]">
        Your Favorite Products
      </h1>
      <div className="grid max-md: justify-center md:grid-cols-4 gap-y-14">
        {favorites.map((product) => {
          // Đặt biến kiểm tra xem sản phẩm có trong danh sách so sánh không
          // const isProductInComparison = false; // Bạn cần cung cấp logic kiểm tra sản phẩm có trong danh sách so sánh hay không

          return (
            <div key={product.id}>
              <div className="relative z-10 cursor-pointer">
                <div className="w-[285px] absolute inset-0 z-10 bg-[#3A3A3A] text-center flex flex-col gap-8 items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                  <div className="px-8 py-2 rounded bg-[#FFFFFF] text-[#B88E2F] cursor-pointer">
                    <Link to={`/product/${product.id}`}>View product</Link>
                  </div>
                  <div className="flex gap-5 text-[#FFFFFF] text-base leading-6 font-semibold">
                    <div className="flex">
                      <div className="">
                        <AiFillHeart className="mt-1" />
                      </div>
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
  );
};

export default Favorites;
