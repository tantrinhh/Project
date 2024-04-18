import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Rectangle1 from "../../assets/shop/Rectangle1.png";
const SubShop = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <img src={Rectangle1} className="w-full" alt="" />
          <div className="absolute -translate-x-2/4 md:top-32 top-10 left-1/2   -mt-6  item-center">
            {" "}
            <img src={Logo} className="w-10" alt="" />
          </div>
          <div className="absolute -translate-x-2/4 top-1/2 left-1/2   -mt-7  item-center text-center  text-[#000000]  ">
            <p className="md:text-5xl text-2xl leading-[72px] font-medium">
              Shop
            </p>
          </div>
          <div className="flex absolute  -translate-x-2/4  md:bottom-24 bottom-1 left-1/2   lg:py-4  justify-between  text-base   leading-6  ">
            <button className="text-[#000000] lg:font-medium mr-2">
              <Link to="/">Home</Link>
            </button>
            <div className="mt-2">
              {" "}
              <AiOutlineRight style={{ width: "12px", height: "12px" }} />
            </div>
            <button className=" font-light ml-2">Shop</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubShop;
