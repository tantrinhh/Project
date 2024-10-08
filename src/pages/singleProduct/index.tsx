import LayoutChildren from "../../Components/Layout/LayoutChildren";

import Main from "../../Components/SingleProduct/Main";

const SingleProduct = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <LayoutChildren>
        <div className="mt-[130px]"></div>
        <Main />
      </LayoutChildren>
    </div>
  );
};

export default SingleProduct;
