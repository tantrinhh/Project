import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import {
  getProduct,
  productSelectors,
} from "../../services/redux/slices/product";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/RootReducer";
import { BiGitCompare } from "react-icons/bi";
import {
  addToComparison,
  removeFromComparison,
} from "../../services/redux/slices/compare/compare";
const ModalAdd = (props: any) => {
  const { show, handleClose } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const productsSelector = useSelector(productSelectors.selectAll);
  const { comparedProducts } = useSelector((state: RootState) => state.compare);

  // Khi sử dụng disableComparison, hãy đảm bảo rằng isProductInComparison và comparedProducts đã được khai báo trước đó
  const isProductInComparison = comparedProducts.some(
    (p: any, product: any) => p.id === product.id
  );
  const disableComparison =
    comparedProducts.length >= 2 && !isProductInComparison;
  const today: Date = new Date();
  function isProductNew(productsSelector: any): boolean {
    const productAddedDate: Date = new Date(productsSelector.dateAdded); // Chuyển đổi chuỗi thành Date
    const daysDifference: number = Math.ceil(
      (today.getTime() - productAddedDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysDifference <= 30;
  }
  const handleComparisonAndClose = (product: any) => {
    if (!disableComparison) {
      if (isProductInComparison) {
        dispatch(removeFromComparison(product));
      } else {
        if (comparedProducts.length < 2) {
          dispatch(addToComparison(product));
          if (comparedProducts.length === 1) {
            navigate("/productcomparison");
            handleClose();
          }
        }
      }
    }
  };
  return (
    <>
      <div
        className={` z-50 fixed top-12  mx-36 bg-white ${show ? "block" : "hidden"
          }`}
      >
        <div className=" ">
          <div className=" mt-5 pr-10 w-full mx-auto px-10    overflow-y-auto max-h-[500px] items-center ">
            <div className="grid max-md: justify-center  md:grid-cols-4 ">
              {productsSelector?.map((product: any) => {
                return (
                  <div key={product.id}>
                    <div className="relative border border-gray-500 z-10 cursor-pointer">
                      <div className="w-[285px]   absolute inset-0 z-10 bg-[#3A3A3A] text-center flex flex-col gap-8 items-center justify-center opacity-0 hover:opacity-100 bg-opacity-50 duration-300">
                        <div className="flex justify-center text-[#FFFFFF] text-base leading-6 font-semibold">
                          <div className="flex">
                            <div className="mt-1">
                              <BiGitCompare />
                            </div>

                            <div
                              className={`cursor-pointer ${disableComparison
                                  ? "opacity-50 pointer-events-none"
                                  : ""
                                }`}
                              onClick={() => handleComparisonAndClose(product)}
                            >
                              {isProductInComparison ? "Remove" : "Compare"}
                            </div>
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
                          <div className="absolute top-6 right-10 text-white rounded-full w-10 h-10 items-center text-center pt-2 bg-[#E97171]">
                            -{product.discount}%
                          </div>
                        )}
                        {isProductNew(product) && (
                          <div className="absolute top-6 right-10 bg-[#2EC1AC] text-white rounded-full w-10 h-10 items-center text-center pt-2">
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
                                Rp {product.price}
                              </h3>
                              <span className="text-[16px] text-[#B0B0B0] line-through ml-3">
                                Rp{" "}
                                {(
                                  product.price +
                                  product.price * (product.discount / 100)
                                )}
                              </span>
                            </div>
                          ) : (
                            <h3 className="font-bold text-[20px] text-[#3A3A3A]">
                              Rp {product.price}
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
          <div className="text-center w-40 py-2 mx-auto mb-10  text-xl text-black mt-10 border-2 border-red-500">
            <button className="text-center" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
