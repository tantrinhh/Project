import React from "react";
import SubShop from "../../Components/Shop/SubShop";
import Main from "../../Components/Shop/Main";
import LayoutPage from "../../Components/Layout/Layout_Page";
import GoToTop from "../../Components/Common/GoToTop";

const shop = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <GoToTop />
      <LayoutPage>
        <SubShop />
        <Main />
      </LayoutPage>
    </div>
  );
};

export default shop;
