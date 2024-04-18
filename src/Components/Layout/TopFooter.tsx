import React from "react";
import Group from "../../assets/top-footer/Group.png";
import guarantee from "../../assets/top-footer/guarantee.png";
import Vector1 from "../../assets/top-footer/Vector1.png";

import Vector2 from "../../assets/top-footer/Vector2.png";

const TopFooter = () => {
  return (
    <>
      <div className="bg-[#FAF3EA] md:py-24 py-20">
        <div className="md:flex gap-24 md:mx-20 mx-10">
          <div className="flex md:gap-24 gap-7  ">
            <div className="flex">
              <div className="mt-1">
                <img src={Group} alt="" />
              </div>
              <div className="ml-3">
                <div className="font-semibold  md:text-2xl text-xl  leading-[38px] text-[#242424]">
                  High Quality
                </div>

                <div className="text-[#898989] md:text-xl text-md font-medium leading-[30px]">
                  crafted from top materials
                </div>
              </div>
            </div>
            <div className="flex max-md:max-w-[170px]">
              <div className="md:mt-2 mt-5">
                <img src={guarantee} alt="" />
              </div>
              <div className="ml-3">
                <div className=" font-semibold md:text-2xl text-xl md:leading-[38px] text-[#242424]">
                  Warranty Protection
                </div>
                <div className="text-[#898989] md:text-xl text-md font-medium leading-[30px]">
                  Over 2 years
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:gap-24 gap-7 max-md:mt-8">
            {" "}
            <div className="flex">
              <div className="md:mt-2 mt-3">
                <img src={Vector1} alt="" />
              </div>
              <div className="ml-3">
                <div className=" font-semibold md:text-2xl text-xl md:leading-[38px] text-[#242424]">
                  Free Shipping
                </div>
                <div className="text-[#898989] md:text-xl text-md font-medium leading-[30px]">
                  Order over 150 $
                </div>
              </div>
            </div>
            <div className="flex max-md:max-w-[170px]">
              <div className="md:mt-2 mt-5">
                <img src={Vector2} alt="" />
              </div>
              <div className="ml-3">
                <div className=" font-semibold md:text-2xl text-xl md:leading-[38px] text-[#242424]">
                  24 / 7 Support
                </div>
                <div className="text-[#898989] md:text-xl text-md font-medium leading-[30px]">
                  Dedicated support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopFooter;
