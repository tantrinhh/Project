import vitri from "../../assets/contact/vitri.png";
import phone from "../../assets/contact/phone.png";
import time from "../../assets/contact/time.png";

const Main = () => {
  return (
    <>
      <div>
        <div className=" text-center my-32">
          <div className="text-[#000000] font-semibold md:text-4xl text-3xl leading-[54px]">
            Get In Touch With Us
          </div>
          <div className="max-md:hidden text-[#9F9F9F] md:text-lg text-base md:leading-6 leading-5 font-normal max-w-[645px] mx-auto">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </div>
          <div className="md:hidden text-[#9F9F9F]  text-base  leading-5 font-normal max-w-[645px] mx-auto px-5">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email.
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 max-w-[1060px] mx-auto  mb-20  ">
            {" "}
            <div className="grid col-span-1 gap-y-8 max-w-[395px] px-8 text-[#000000] ">
              <div className="flex gap-5">
                <div className="mt-2">
                  <img src={vitri} alt="" />
                </div>
                <div>
                  <div className=" font-medium text-2xl leading-9">Address</div>
                  <div className="text-base font-normal leading-6">
                    236 5th SE Avenue, New York NY10000, United States
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2">
                  {" "}
                  <img src={phone} alt="" />{" "}
                </div>
                <div>
                  <div className=" font-medium text-2xl leading-9"> Phone</div>
                  <div className="text-base font-normal leading-6">
                    Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="mt-2">
                  <img src={time} alt="" />
                </div>
                <div>
                  <div className=" font-medium text-2xl leading-9">
                    Working Time
                  </div>
                  <div className="text-base font-normal leading-6">
                    Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 -
                    21:00
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 grid max-w-[635px] px-10 ml-20  gap-y-8  ">
              <div className="items-center ">
                <label className="   text-xl font-normal leading-[30px] text-[#000000]">
                  Your name
                </label>
                <div className="mt-2">
                  <input
                    className=" w-full px-4 h-14 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#9F9F9F] placeholder:text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Abc"
                  />
                </div>
              </div>
              <div className="items-center ">
                <label className="   text-xl font-normal leading-[30px] text-[#000000]">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className=" w-full px-4 h-14 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#9F9F9F] placeholder:text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Abc@def.com"
                  />
                </div>
              </div>
              <div className="items-center  ">
                <label className="   text-xl font-normal leading-[30px] text-[#000000]">
                  Subject
                </label>
                <div className="mt-2">
                  <input
                    className=" w-full px-4 h-14 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#9F9F9F] placeholder:text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="This is an optional"
                  />
                </div>
              </div>
              <div className="items-center  ">
                <label className="   text-xl font-normal leading-[30px] text-[#000000]">
                  Message
                </label>
                <div className="mt-2">
                  <input
                    className=" w-full px-4 h-14 rounded-md border-0 py-1.5 text-[#000000] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#9F9F9F] placeholder:text-xl focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Hi! i’d like to ask about"
                  />
                </div>
              </div>
              <div className="text-base font-normal max-w-[237px] h-[55px] text-center py-4 leading-6 bg-[#a98329] rounded-md text-[#fff]">
                <button className="">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
