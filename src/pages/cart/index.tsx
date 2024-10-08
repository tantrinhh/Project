import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import SubCart from "../../Components/Cart/SubCart";
import MainCart from "../../Components/Cart/Cart";

const Cart = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutPage title="Fashion Shop | Cart">
        <div className="mt-[130px]"></div>
        <SubCart />
        <MainCart />
      </LayoutPage>
    </div>
  );
};
export default Cart;
