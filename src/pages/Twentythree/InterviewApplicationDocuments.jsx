import React from "react";
import { IoIosStar, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { interviewApplicationLink } from "./interviewLink";

const InterviewApplicationDocuments = () => {
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
              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] ">Basic Information</p>
                    <div className="flex gap-[6px]">
                      <img
                        src="images/img_user.svg"
                        className="w-[15px] h-[15px]"
                        alt=""
                      />
                      <p className="text-[11px] font-[500] ">Edit Info</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[17px] flex-col lg:flex-row py-[17px] px-[26px] justify-between lg:gap-[158px]">
                  <div className=" flex flex-col w-full lg:w-[25%] gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Name
                      </p>
                      <p className="text-[11px] font-[500]">Amir Shaikh</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Origin
                      </p>
                      <p className="text-[11px] font-[500]">Sourced</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Candidate ID
                      </p>
                      <p className="text-[11px] font-[500]">TM_3_CFP</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Address
                      </p>
                      <p className="text-[11px] font-[500]">
                        882 Coventry court, Gulfport, USA, Mississippi, 39501
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-[75%] gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Email
                      </p>
                      <p className="text-[11px] font-[500]">
                        AmirShaikh@gmail.com
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Phone
                      </p>
                      <p className="text-[11px] font-[500]">4596357896</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Website
                      </p>
                      <p className="text-[11px] font-[500]">
                        www.hello-cody.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
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
                  </div> */}

              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] ">Basic Information</p>
                    <div className="flex gap-[6px]">
                      <img
                        src="images/img_user.svg"
                        className="w-[15px] h-[15px]"
                        alt=""
                      />
                      <p className="text-[11px] font-[500] ">Edit Info</p>
                    </div>
                  </div>
                </div>
                <div className="flex py-[17px] px-[26px] gap-[45px]">
                  <div className=" flex flex-col gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Current job Title
                      </p>
                      <p className="text-[11px] font-[500]">UI/UX Designer</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Expected Salary
                      </p>
                      <p className="text-[11px] font-[500]">20,000</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Experience in years
                      </p>
                      <p className="text-[11px] font-[500]">3 years</p>
                    </div>
                    <div className="flex-wrap flex">
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Additional Info
                      </p>
                      <p className="text-[11px] font-[500]">
                        Highly knowledgeable about the companys applications
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Highest Qualification held
                      </p>
                      <p className="text-[11px] font-[500]">
                        Bachelors in Engineering
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Current Salary
                      </p>
                      <p className="text-[11px] font-[500]">20,000</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Joining Date
                      </p>
                      <p className="text-[11px] font-[500]">17-02-2023</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181]">
                        Skill Set
                      </p>
                      <div className="flex gap-[7px] flex-wrap">
                        <p className="text-[11px] rounded-[12px] px-[6px] py-[3px] bg-[#c8daf9] font-[400]">
                          UI Design
                        </p>
                        <p className="text-[11px] rounded-[12px] px-[6px] py-[3px] bg-[#c8daf9] font-[400]">
                          Communication
                        </p>
                        <p className="text-[11px] rounded-[12px] px-[6px] py-[3px] bg-[#c8daf9] font-[400]">
                          Sketching
                        </p>
                        <p className="text-[11px] rounded-[12px] px-[6px] py-[3px] bg-[#c8daf9] font-[400]">
                          Design Thinking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewApplicationDocuments;
