import React from "react";
import { IoIosStar, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { JobsApplicationEmployeeDeta } from "../JobsLinks";
// import { GiNotebook } from "react-icons/gi";
import { FaRegCommentDots } from "react-icons/fa";

const JobsApplicationEmployeeHiringPipeline = () => {
  const path = useLocation();
  const pathName = path?.pathname;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-50 font-[Poppins] flex">
        <div className="md:w-1/2 bg-black opacity-50 flex justify-end items-center ">
          <div className="w-[29px] h-[29px] flex justify-center items-center mr-[-10px] border-[2px] border-black bg-white rounded-[50%]">
            <IoIosArrowForward
              color="#5956e9"
              size={"25px"}
              onClick={() => handleGoBack()}
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
              <div className="flex flex-col gap-[21px]">
                <p className="text-[14px] font-[400px]">
                  {" "}
                  Stage of:
                  <span className="text-[14px] font-[600]">
                    {" "}
                    Design Team. UI Designer
                  </span>
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                  <div className="relative text-center">
                    <img src="/images/Vector 65.png" alt="" />
                    <p className="absolute w-full top-[18px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Basic Screening
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 66.png" alt="" />
                    <p className="absolute w-full top-[18px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Skill Assesment
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 67.png" alt="" />
                    <p className="absolute w-full top-[18px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Video Round
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 68.png" alt="" />
                    <p className="absolute w-full top-[18px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Final Round
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 69.png" alt="" />
                    <p className="absolute w-full top-[18px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Hired
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] ">Detail</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-[28px] py-[17px] px-[10px] lg:justify-between">
                  <div className="lg:w-full">
                    <img
                      src="/images/img_image69.png"
                      className="w-[248px] h-[150px] rounded-[10px]"
                      alt=""
                    />
                  </div>
                  <div className=" flex flex-col w-full gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Current status
                      </p>
                      <div className="flex gap-[3px]">
                        <div className="w-[47px] h-[17px] rounded-[16px] bg-[#53c9a2] text-white text-center text-[11px] font-[400]">
                          Active
                        </div>
                        <p className="text-[11px] font-[500] text-[#53c9a2]">
                          (View Workflow)
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Stage:
                      </p>
                      <p className="text-[11px] font-[500]">Interview</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Date:
                      </p>
                      <p className="text-[11px] font-[500]">14-16-2023</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Assignee:
                      </p>
                      <div className="flex gap-[4px]">
                        <img
                          src="/images/img_ellipse3978.png"
                          className="w-[18px] h-[18px] rounded-[50%]"
                          alt=""
                        />
                        <p className="text-[11px] font-[500]">
                          Andri R. Herdiansyah
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Owner:
                      </p>
                      <div className="flex gap-[4px]">
                        <img
                          src="/images/img_ellipse799.png"
                          className="w-[18px] h-[18px] rounded-[50%]"
                          alt=""
                        />
                        <p className="text-[11px] font-[500]">Bogus Fikri</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Skills:
                      </p>
                      <p className="text-[11px] font-[500]">
                        App, Administrative, android, Word press, Design
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center p-[8px]">
                  <button className="border-[1px] border-black text-[11px] font-[500] bg-white rounded-[6px] py-[8px] px-[18px]">
                    Move Next Status
                  </button>
                </div>
              </div>

              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] ">Notes</p>

                    <p className="text-[11px] font-[500] ">Recent First</p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex justify-between items-center px-[26px]  border-[#d9d9d9] border-b-[1px] py-[17px]">
                    <div className=" flex flex-col  gap-[17px] ">
                      <p className="text-[11px] font-[600] text-[#5956e9]">
                        Add Note
                      </p>
                      <div className="flex gap-[8px]">
                        <img
                          src="/images/img_ellipse799.png"
                          className="w-[40px] h-[40px] rounded-[50%]"
                          alt=""
                        />
                        <div className="flex flex-col gap-[8px]">
                          <p className="text-[11px] font-[500]">
                            Bogus Fikri{" "}
                            <span className="text-[9px] font-[400]">
                              13 march 2021 _ 04:23 Pm
                            </span>
                          </p>
                          <p className="text-[9px] text-[#696969] font-[400]">
                            Candidate successfull interview for this stages.
                          </p>
                          <p className="text-[9px] font-[500] text-[#5956e9]">
                            2 Reply
                          </p>
                        </div>
                      </div>
                    </div>
                    <FaRegCommentDots size={"16px"} />
                  </div>
                  <div className="flex justify-between items-center px-[26px]  border-[#d9d9d9] border-b-[1px] py-[17px]">
                    <div className="flex gap-[8px]">
                      <img
                        src="/images/img_ellipse799.png"
                        className="w-[40px] h-[40px] rounded-[50%]"
                        alt=""
                      />
                      <div className="flex flex-col gap-[8px]">
                        <p className="text-[11px] font-[500]">
                          Bogus Fikri{" "}
                          <span className="text-[9px] font-[400]">
                            13 march 2021 _ 04:23 Pm
                          </span>
                        </p>
                        <p className="text-[9px] text-[#696969] font-[400]">
                          Candidate successfull interview for this stages.
                        </p>
                        <p className="text-[9px] font-[500] text-[#5956e9]">
                          2 Reply
                        </p>
                      </div>
                    </div>
                    <FaRegCommentDots size={"16px"} />
                  </div>
                  <div className="flex flex-col gap-[17px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsApplicationEmployeeHiringPipeline;
