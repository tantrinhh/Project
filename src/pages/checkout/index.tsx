import React from "react";
import LayoutPage from "../../Components/Layout/Layout_Page";
import SubCheckout from "../../Components/Checkout/SubCheckout";
import CheckOut from "../../Components/Checkout/Checkout";

const checkout = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutPage title="Fashion Shop | Checkout">
        <div className="mt-[130px]"></div>
        <SubCheckout />
        <CheckOut />
      </LayoutPage>
    </div>
  );
};

export default checkout;
