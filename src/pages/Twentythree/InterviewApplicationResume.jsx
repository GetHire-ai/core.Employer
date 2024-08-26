import React from "react";
import { IoIosStar, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { interviewApplicationLink } from "./interviewLink";

const InterviewApplicationResume = () => {
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
              <div className="text-[14px] border-b-[2px] border-[#e8e8e8] px-[49px] py-[10px] lg:py-0 font-[500] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
                {interviewApplicationLink.map((e) => {
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
              <p className="text-[14px] font-[600]">Amir Shaikh_Resume.Pdf</p>
              <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={"/images/resume.pdf"}
                    plugins={[defaultLayoutPlugin]}
                  />
                </Worker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewApplicationResume;
