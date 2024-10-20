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
      </div>
      {/* Browse The Range */}
      <div className="mt-20 text-center justify-center items-center container">
        <h1 className="text-[32px] font-bold">Khám phá ngay</h1>
        <p className="text-[20px]">
          Bộ sưu tập của chúng tôi có rất nhiều lựa chọn và tiên ích dành cho bạn
        </p>
        <div className="md:flex gap-20 mt-20 max-md:mx-10">
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/originals_fw23_spezial_mainline_tcc_d_49746f84cc.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Quần Jean</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/football_ss23_arsenal_maharishi_onsite_tcc_1_d_7ecc4236c7.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Áo Jecket</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src={
                "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/training_fw23_les_mills_always_on_hp_glp_teaser_carousel_d_ace430c003.jpg"
              }
              alt=""
            />
            <p className="font-bold mt-5 text-[24px]">Áo Polo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupHome;
