import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { BiUserPlus } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import "./styles.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "../../services/redux/slices/cart";
import { RootState } from "../../services/redux/RootReducer";
import { BsBagX } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt lên đầu trang
    });
  };
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const removeFromCart = (productId: any) => {
    dispatch(removeProduct(productId));
  };
  const priceTotal = () => {
    let totalPrice = 0;

    if (cartItems.length > 0) {
      cartItems.map((item: any) => (totalPrice += item.price * item.count));
    }

    return totalPrice;
  };
  const handleCartHover = () => {
    setIsCartOpen(true);
  };

  const handleCartLeave = () => {
    setIsCartOpen(false);
  };
  const handleDecrementQuantity = (productId: any) => {
    dispatch(decrementQuantity(productId));
  };

  const handleIncrementQuantity = (productId: any) => {
    dispatch(incrementQuantity(productId));
  };
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.count, 0);
  };
  const totalItems = cartItems.length;

  return (
    <>
      <div className="md:mb-[100px] mb-20 mt-14">
        <div className="fixed z-40 w-full bg-[#FFFFFF] justify-between md:h-[100px] h-20 top-8 flex items-center px-10 ">
          <a href="/">
            {" "}
            <div className="flex">
              <div className="mt-1">
                <img src={Logo} alt="" />
              </div>
              <div className="ml-1 font-bold text-[34px] leading-10">
                Furniro
              </div>
            </div>
          </a>
          <div className="hidden md:flex">
            <ul className="list-none flex gap-x-10 justify-between font-medium text-lg leading-6">
              <div className="hover:text-[#B88E2F]">
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </div>
              <div className="hover:text-[#B88E2F]">
                <Link to="/shop" onClick={scrollToTop}>
                  Shop
                </Link>
              </div>
              <div className="hover:text-[#B88E2F]">
                <Link to="/blog" onClick={scrollToTop}>
                  Blog
                </Link>
              </div>

              <div className="hover:text-[#B88E2F]">
                <Link to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </div>
            </ul>
          </div>
          <div className="hidden md:flex gap-x-8">
            <div>
              <Link to="/favorite" onClick={scrollToTop}>
                {" "}
                <AiOutlineHeart style={{ width: "23px", height: "23px" }} />
              </Link>
            </div>
            <div
              className="cart-container"
              onMouseEnter={handleCartHover}
              onMouseLeave={handleCartLeave}
            >
              <Link to="/cart" onClick={scrollToTop}>
                <AiOutlineShoppingCart
                  style={{ width: "23px", height: "23px" }}
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                    {totalItems}
                  </span>
                )}
              </Link>
              <div className={`cart-products ${isCartOpen ? "active" : ""}`}>
                <div className="bg-[#FFFFFF]  px-10">
                  <div className="flex justify-between mt-10">
                    <h1 className="font-semibold text-[24px] leading-[36px]">
                      Shopping Cart
                    </h1>
                    <div
                      className="mt-3 w-[16.63px] h-[19px]"
                      style={{ color: "#9F9F9F" }}
                    >
                      <BsBagX />
                    </div>
                  </div>
                  <div className="w-full  mt-8">
                    <div className="border-b border-[#D9D9D9]"></div>
                  </div>
                  <div className="overflow-y-auto max-h-64">
                    {" "}
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <tbody>
                        {cartItems.map((item, index) => {
                          const totalPrice = item.price * item.count;
                          return (
                            <tr
                              className="bg-white border-b dark:border-gray-700 overflow-y-auto h-32 "
                              key={index}
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                              >
                                <img
                                  src={item.image}
                                  className="rounded-md w-10 h-10"
                                  alt=""
                                />
                              </th>
                              <td className="px-6 py-4">{item.name}</td>
                              <td className="px-6 py-4">
                                <div
                                  style={{
                                    backgroundColor: item.colors,
                                  }}
                                  className={`cursor-pointer p-4 border rounded-md `}
                                ></div>
                              </td>
                              <td className="px-6 py-4 uppercase">
                                {item.sizes}
                              </td>
                              <td className="px-6 py-4">
                                Rs. {item.price.toLocaleString()}
                              </td>
                              <td className="px-6 py-4">
                                <div className="quantity-buttons">
                                  <div className="quantity-button flex flex-row rounded-md space-x-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleDecrementQuantity(item.id)
                                      }
                                      className="quantity-button__btn"
                                    >
                                      -
                                    </button>
                                    <span>{item.count}</span>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleIncrementQuantity(item.id)
                                      }
                                      className="quantity-button__btn"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td>Rs. {totalPrice.toLocaleString()}</td>
                              <td>
                                {" "}
                                <TiDelete
                                  onClick={() => {
                                    removeFromCart(item);
                                  }}
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "#9F9F9F",
                                    cursor: "pointer",
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between mt-10">
                    <p className="text-base font-normal">Total item</p>
                    <p className="font-semibold text-[#B88E2F] text-base">
                      {calculateTotalQuantity()}
                    </p>
                  </div>
                  <div className="flex justify-between mt-5">
                    <p className="text-base font-normal">Total price</p>
                    <p className="font-semibold text-[#B88E2F] text-base">
                      Rs. {priceTotal().toLocaleString()}
                    </p>
                  </div>
                  <div className="w-full mt-5">
                    <div className="border-b border-[#D9D9D9]"></div>
                  </div>
                  <div className="flex justify-center">
                    <Link to="/checkout" onClick={scrollToTop}>
                      <button className="rounded-[50px] px-4 py-2  bg-white mt-6 mb-4 border border-[#000000]">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to="">
                <FaUserCircle style={{ width: "23px", height: "23px" }} />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`transform ${
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              } transition-transform duration-300 ease-in-out`}
            >
              <HiOutlinePlus
                style={{
                  width: "35px",
                  height: "35px",
                }}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed z-50   right-0 flex flex-col items-end h-full max-h-full">
            <div className=" pb-5 pt-3 h-full w-56 rounded-l-lg text-white  bg-black">
              <div className="flex justify-between mx-2">
                {" "}
                <div className="flex mx-auto">
                  <div className="mt-1">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="ml-2 mt-1 font-bold text-3xl leading-10">
                    Furniro
                  </div>
                </div>
           
              </div>
              <ul className="list-none pt-5 flex flex-col items-center gap-y-7 font-medium text-lg leading-6">
                <div className="hover:text-[#B88E2F]">
                  <Link to="/" onClick={scrollToTop}>
                    Home
                  </Link>
                </div>
                <div className="hover:text-[#B88E2F]">
                  <Link to="/shop" onClick={scrollToTop}>
                    Shop
                  </Link>
                </div>
                <div className="hover:text-[#B88E2F]">
                  <Link to="/blog" onClick={scrollToTop}>
                    Blog
                  </Link>
                </div>
                <div className="hover:text-[#B88E2F]">
                  <Link to="/contact" onClick={scrollToTop}>
                    Contact
                  </Link>
                </div>
              </ul>
              <div className=" flex flex-col items-center gap-y-7 mt-4">
                {" "}
                <div>
                  <BiUserPlus style={{ width: "26px", height: "26px" }} />
                </div>
                <div>
                  <FiSearch style={{ width: "23px", height: "23px" }} />
                </div>
                <div>
                  <Link to="/favorite" onClick={scrollToTop}>
                    {" "}
                    <AiOutlineHeart style={{ width: "23px", height: "23px" }} />
                  </Link>
                </div>
                <div>
                  <Link to="/cart" onClick={scrollToTop}>
                    {" "}
                    <AiOutlineShoppingCart
                      style={{ width: "26px", height: "26px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
