import React from "react";

const SupHome = () => {
  return (
    <div>
      {/* Sub header */}
      <div>
        <img
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/originals_fw23_spezial_mainline_mh_d_476d0205fd.jpg"
          className="w-screen"
          alt=""
        />

        <div className="absolute bg-[#FFF3E3] md:max-w-[643px]  md:px-5 px-3 md:py-10 py-5  rounded-md md:top-[253px] top-[84px] right-2 md:left-[739px] space-y-3 space-x-5">
          <p className="md:text-[16px] text-sm md:mt-7 font-bold mx-5">
            New Arrival
          </p>
          <h1 className="md:text-[52px] md:leading-[60px] text-xl text-[#B88E2F] font-bold">
            Discover Our
            <br /> New Collection
          </h1>
          <p className=" max-md:hidden text-lg  leading-6 font-medium pb-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <p className=" md:hidden text-sm leading-5 font-medium ">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
          <div className="md:mt-20">
            <a href="/shop">
              {" "}
              <button className="bg-[#B88E2F] rounded-sm md:py-[25px] py-2 md:px-[72px] px-6 text-white">
                BUY NOW
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Browse The Range */}
      <div className="mt-20 text-center justify-center items-center container">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="md:flex gap-20 mt-20 max-md:mx-10">
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/originals_fw23_spezial_mainline_tcc_d_49746f84cc.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Dining</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/football_ss23_arsenal_maharishi_onsite_tcc_1_d_7ecc4236c7.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Living</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/training_fw23_les_mills_always_on_hp_glp_teaser_carousel_d_ace430c003.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupHome;
