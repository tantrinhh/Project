import React, { useEffect, useRef } from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./HeaderTop.css";

const HeaderTop: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMarqueeWidth = () => {
      if (marqueeRef.current) {
        const marqueeContent = marqueeRef.current;
        const contentWidth = marqueeContent.scrollWidth;
        marqueeContent.style.setProperty(
          "--content-width",
          `${contentWidth}px`
        );
      }
    };

    // Update width on component mount and window resize
    updateMarqueeWidth();
    window.addEventListener("resize", updateMarqueeWidth);

    return () => {
      window.removeEventListener("resize", updateMarqueeWidth);
    };
  }, []); // Chạy chỉ một lần sau khi component đã được render

  return (
    <div className="bg-white sm:block px-8 border border-black fixed z-50 top-0">
      <div className="container py-2 flex justify-center">
        <div className="flex justify-between">
          <div
            className="flex gap-96 items-center text-black marquee"
            ref={marqueeRef}
          >
            <div className="marquee-content flex gap-96">
              <div className="flex gap-5">
                <div className="text-black text-subheading text-[12px] flex gap-x-2">
                  <b className="text-black underline">MIỄN PHÍ VẬN CHUYỂN</b>
                  <p>ĐƠN HÀNG TRONG TUẦN NÀY TRÊN - 1.000.000đ</p>
                  <b>NỀN TẢNG TỐT NHẤT CHO THƯƠNG MẠI ĐIỆN TỬ</b>
                </div>
                <div className="hidden lg:flex gap-1">
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsFacebook />
                  </div>
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsTwitter />
                  </div>
                  <div className="header_top__icon_wrapper text-violet-800 ">
                    <BsInstagram />
                  </div>
                  <div className="header_top__icon_wrapper text-[#7f2f2f] ">
                    <BsLinkedin />
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-black text-subheading text-[12px] flex gap-x-2">
                <b className="text-black underline">MIỄN PHÍ VẬN CHUYỂN</b>
                  <p>ĐƠN HÀNG TRONG TUẦN NÀY TRÊN - 1.000.000đ</p>
                  <b>NỀN TẢNG TỐT NHẤT CHO THƯƠNG MẠI ĐIỆN TỬ</b>
                </div>
                <div className="hidden lg:flex gap-1">
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsFacebook />
                  </div>
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsTwitter />
                  </div>
                  <div className="header_top__icon_wrapper text-violet-800 ">
                    <BsInstagram />
                  </div>
                  <div className="header_top__icon_wrapper text-[#7f2f2f] ">
                    <BsLinkedin />
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-black text-subheading text-[12px] flex gap-x-2">
                <b className="text-black underline">MIỄN PHÍ VẬN CHUYỂN</b>
                  <p>ĐƠN HÀNG TRONG TUẦN NÀY TRÊN - 1.000.000đ</p>
                  <b>NỀN TẢNG TỐT NHẤT CHO THƯƠNG MẠI ĐIỆN TỬ</b>
                </div>
                <div className="hidden lg:flex gap-1">
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsFacebook />
                  </div>
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsTwitter />
                  </div>
                  <div className="header_top__icon_wrapper text-violet-800 ">
                    <BsInstagram />
                  </div>
                  <div className="header_top__icon_wrapper text-[#7f2f2f] ">
                    <BsLinkedin />
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="text-black text-subheading text-[12px] flex gap-x-2">
                <b className="text-black underline">MIỄN PHÍ VẬN CHUYỂN</b>
                  <p>ĐƠN HÀNG TRONG TUẦN NÀY TRÊN - 1.000.000đ</p>
                  <b>NỀN TẢNG TỐT NHẤT CHO THƯƠNG MẠI ĐIỆN TỬ</b>
                </div>
                <div><div><div></div>
                <div></div>
                <div></div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div></div>
                <div className="hidden lg:flex gap-1">
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsFacebook />
                  </div>
                  <div className="header_top__icon_wrapper text-blue-500">
                    <BsTwitter />
                  </div>
                  <div className="header_top__icon_wrapper text-violet-800 ">
                    <BsInstagram />
                  </div>
                  <div className="header_top__icon_wrapper text-[#7f2f2f] ">
                    <BsLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
