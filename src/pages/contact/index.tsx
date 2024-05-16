import React from "react";
import SubContact from "../../Components/Contact/SubContact";
import Main from "../../Components/Contact/Main";
import LayoutPage from "../../Components/Layout/Layout_Page";

const contact = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutPage title="Fashion Shop | Contact">
        <SubContact />
        <Main />
      </LayoutPage>
    </div>
  );
};

export default contact;
