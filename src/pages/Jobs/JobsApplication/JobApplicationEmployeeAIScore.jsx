import React from "react";
import { IoIosStar, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { JobsApplicationEmployeeDeta } from "../JobsLinks";
import AIScorechartOne from "./AIScorechartOne";
import AIScorechartTwo from "./AIScorechartTwo";
import AIScorechartThree from "./AIScorechartThree";

const JobApplicationEmployeeAIScore = () => {
  const path = useLocation();
  const pathName = path?.pathname;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-50 font-[Poppins] flex">
        <div className="md:w-1/2 bg-black opacity-50 flex justify-end items-center ">
          <div className="w-[29px] h-[29px] flex justify-center items-center mr-[-10px] border-[2px] border-black bg-white rounded-[50%]">
            <IoIosArrowForward
              color="#5956e9"
              size={"25px"}
              onClick={() => window.history.back()}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-[#f3f6f9]">
          <div className=" w-full">
            <div className="p-[27px] flex flex-col lg:flex-row gap-[20px] lg:gap-0 justify-between items-center w-full">
              <div className="flex gap-[6px]">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/images/img_ellipse799.png"
                    className="w-[64px] h-[64px] rounded-[50%]"
                    alt=""
                  />
                  <div className="w-[49px] bg-white justify-center items-center gap-[6px] h-[16px] flex rounded-[17px]">
                    <IoIosStar size={"9px"} color="#fca120" />
                    <p className="text-[9px] font-[400]">4.0</p>
                  </div>
                </div>
                <div>
                  <div className="flex gap-[6px] justify-center items-center">
                    <p className="text-[20px] font-[500]">Amir Shaikh</p>
                    <div className="border-[1px] rounded-[3px] bg-[#e6f3f2] text-center border-[#53c9a2] w-[47px] h-[17px]">
                      <p className="text-[12px] font-[400] text-[#53c9a3]">
                        Active
                      </p>
                    </div>
                  </div>
                  <p className="text-[12px] font-[400] text-[#7a7a7a]">
                    Design Team. UI Designer
                  </p>
                  <div className="flex gap-[3px]">
                    <div className="bg-[#fe9f47] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]">
                      1
                    </div>
                    <div className="bg-[#fe9f47] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]">
                      2
                    </div>
                    <div className="bg-[#fe9f47] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]">
                      3
                    </div>
                    <div className="bg-[#cdcdcd] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]"></div>
                    <div className="bg-[#cdcdcd] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex gap-[8px]">
                  <IoIosArrowBack
                    className="w-[29px] h-[29px] bg-white rounded-[50%]"
                    color="#5956e9"
                    width={"5.8px"}
                  />
                  <IoIosArrowForward
                    className="w-[29px] h-[29px] bg-white rounded-[50%]"
                    color="#5956e9"
                    width={"5.8px"}
                  />
                </div>
                <div className="fle gap-[9px]">
                  <button className="text-[9px] pl-[31px] pr-[7px] py-[9px] bg-white font-[400] border-[1px] border-[#ebebeb] rounded-[4px] ">
                    Send Message
                  </button>
                  <button className="text-[9px] pl-[31px] pr-[7px] py-[9px] bg-white font-[400] border-[1px] border-[#ebebeb] rounded-[4px] ">
                    Send Email
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white w-full">
              <div className="text-[14px] border-b-[2px] border-[#e8e8e8] py-[10px] lg:py-0 px-[49px] font-[500] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
                {JobsApplicationEmployeeDeta.map((e) => {
                  return (
                    <>
                      <Link
                        key={e?.link}
                        className={`${
                          pathName === e?.link
                            ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                            : ""
                        }`}
                        to={e?.link}
                      >
                        {e?.name}
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
              <div className="flex text-[14px] font-[600] justify-between items-center">
                <p>AI Score</p>
                <Link className="text-[#5956e9]" to="">
                  Add Schedule Interview
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center px-[70px] py-[39px] gap-[24px]">
                <div className="flex flex-col justify-center items-center w-full h-[200px]">
                  <AIScorechartOne />
                  <p className="text-[14px] font-[600]">1 Round</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-[200px]">
                  <AIScorechartTwo />
                  <p className="text-[14px] font-[600]">2 Round</p>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-[200px]">
                  <AIScorechartThree />
                  <p className="text-[14px] font-[600]">3 Round</p>
                </div>
              </div>
              <div className="flex justify-center items-center lg:gap-[209px]">
                <div className="flex flex-col gap-[146px]">
                  <p className="text-[14px] rounded-[6px] font-[600] border-[1px] border-black bg-white px-[11px] py-[8px]">
                    Skill Assesment
                  </p>
                  <p className="text-[14px] text-center rounded-[6px] font-[600] border-[1px] border-black bg-white px-[11px] py-[8px]">
                    AI Video
                  </p>
                </div>
                <div className="flex flex-col gap-[146px] mt-[154px]">
                  <p className="text-[14px] rounded-[6px] font-[600] border-[1px] border-black bg-white px-[11px] py-[8px]">
                    Technical Interview
                  </p>
                  <p className="text-[14px] text-center rounded-[6px] font-[600] border-[1px] border-black bg-white px-[11px] py-[8px]">
                    Final Round
                  </p>
                </div>
              </div>
              <div className="flex justify-start mt-[157px] items-center">
                <button className="bg-black text-[14px] text-white font-[500] rounded-[6px] px-[38px] py-[12px] ">
                  Schedule Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplicationEmployeeAIScore;
