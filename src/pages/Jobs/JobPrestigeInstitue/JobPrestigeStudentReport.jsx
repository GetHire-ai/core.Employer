import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobPrestigeLink, JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import DepartmentwiseStudentChart from "./DepartmentwiseStudentChart";
import JobWiseChart from "./JobWiseChart";

const JobPrestigeStudentReport = () => {
  const navigate = useNavigate();
  const handleGoBackButton = () => {
    navigate(-1);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    switch (value) {
      case "Publish":
        navigate("/jobsPublishToJobBoards");
        break;
      case "Connect":
        navigate("/jobBoardsConnect");
        break;
      case "Receive":
        navigate("/jobReceiveJobBoardApplication");
        break;
      case "CollegeCampus":
        navigate("/jobPublishToCollege");
        break;
      case "PrestigeInstitue":
        navigate("/jobPrestigeInstitue");
        break;
      default:
        break;
    }
  };
  const path = useLocation();
  const pathName = path?.pathname;

  return (
    <>
      <div className="font-[poppins] px-[18px] flex flex-col gap-[32px] lg:gap-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] lg:gap-0  lg:justify-between">
          <div
            onClick={handleGoBackButton}
            className="flex gap-[16px] justify-center"
          >
            <IoIosArrowDropleft size={"30px"} color="#5956e9" />
            <div>
              <h1 className="font-[500] text-[24px]">
                Senior Product Designer
              </h1>
              <p className="font-[400] text-[14px] text-[#686868]">
                Indore: Full-time
              </p>
            </div>
          </div>
          <div className="font-[600] text-[12px] flex flex-col lg:flex-row gap-[12px]">
            <div className="bg-[#ffe2e5] w-[173px] p-[9px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#fa5a7d] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p>Applications</p>
            </div>
            <div className="bg-[#fff4de] p-[9px] w-[173px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#ff947a] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p>Interview Schedule</p>
            </div>
            <div className="bg-[#dcfce7] p-[9px] w-[173px]  rounded-[12px] flex justify-start items-center gap-[6px] ">
              <div className="bg-[#3cd856] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p>Selected</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center border-b-[2px] border-[#9b9b9b] gap-[10px] lg:gap-0 w-full">
          <div className="text-[14px] font-[600] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
            {JobsLinks.map((e) => {
              return (
                <>
                  <Link
                    key={e?.link}
                    className={`lg:py-[15px] ${
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
          <div className="flex gap-[10px] justify-center lg:justify-end mb-[8px]">
            <Link
              to="/jobsShareandPromote"
              className=" cursor-pointer flex justify-center items-center border-[1px] rounded-[4px] p-[4px] border-[#000] text-[12px] w-[227px] font-[600]"
            >
              Share & Promote
            </Link>
            <select
              className="border bg-[#000] text-white h-[32px] w-full rounded-[4px] font-[600] text-[12px] text-left"
              value={selectedOption}
              onChange={handleSelectOption}
            >
              <option value="">Published</option>
              <option value="Publish">Publish</option>
              <option value="Connect">Connect</option>
              <option value="Receive">Receive</option>
              <option value="CollegeCampus">CollegeCampus</option>
              <option value="PrestigeInstitue">PrestigeInstitue</option>
            </select>
          </div>
        </div>
        <div className="flex  py-[30px] lg:pr-[66px]">
          <div className="bg-white rounded-[20px] w-full p-[10px] lg:p-[32px] border-[1px] border-[#cccccc]">
            <div className="flex flex-col gap-[20px] lg:gap-0 lg:flex-row justify-center lg:justify-between items-center lg:items-end">
              <div className="flex gap-[9px]">
                <img
                  src="/images/apple.png"
                  className="w-[77px] h-[77px] rounded-[50%]"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="text-[24px] font-[Lato] font-[600]">Apple</p>
                  <p className="text-[#606060] text-[16px] font-[600] font-[Lato]">
                    @Apple
                  </p>
                  <p className="text-[11px] font-[Lato] font-[600]">
                    Everyone has a story to tell.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-[14px] mt-[20px] font-[600] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
              {JobPrestigeLink.map((e) => {
                return (
                  <>
                    <Link
                      key={e?.link}
                      className={`${
                        pathName === e?.link
                          ? " lg:border-[#5956e9] text-[#5956e9] lg:border-b-[3px]"
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
            <div className="bg-[#f8fafe] flex flex-col gap-[23px] rounded-[20px] mb-[166px] mt-[20px] p-[20px]">
              <p className="text-[20px] font-[600]">Overview</p>
              <div className="sm:flex-col flex-row gap-5 grid lg:grid-cols-3 grid-cols-1 justify-center w-full">
                <div className="bg-white flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-200 p-[15px] rounded-[16px] w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start my-0.5 w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-[#e7efff] rounded-[50%] flex flex-col h-[49px] items-center justify-start mt-2 p-[9px] w-[50px]">
                        <p className="text-black text-[20px] font-[600]">1</p>
                      </div>
                      <img
                        className="h-[50px] mb-[7px] w-[50px]"
                        src="images/img_candidatefore.svg"
                        alt="candidatefore"
                      />
                    </div>
                    <p className="text-[#151d48] text-[20px] font-[600]">
                      Total Students
                    </p>
                  </div>
                </div>
                <div className="bg-white flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-200 p-[15px] rounded-[16px] w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start my-0.5 w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-[#e7efff] rounded-[50%] flex flex-col h-[49px] items-center justify-start mt-2 p-[9px] w-[50px]">
                        <p className="text-black text-[20px] font-[600]">1</p>
                      </div>
                      <img
                        className="h-[50px] mb-[7px] w-[50px]"
                        src="images/img_candidatefore.svg"
                        alt="candidatefore"
                      />
                    </div>
                    <p
                      className="text-[#151d48] text-[20px] font-[600]"
                      size="txtPoppinsSemiBold20Bluegray900"
                    >
                      Student List
                    </p>
                  </div>
                </div>
                <div className="bg-white flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-200 p-[15px] rounded-[16px] w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start my-0.5 w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="bg-[#e7efff] rounded-[50%] flex flex-col h-[49px] items-center justify-start mt-2 p-[9px] w-[50px]">
                        <p
                          className="text-black text-[20px] font-[600]"
                          size="txtPoppinsSemiBold20Black900"
                        >
                          1
                        </p>
                      </div>
                      <img
                        className="h-[50px] mb-[7px] w-[50px]"
                        src="images/img_candidatefore.svg"
                        alt="candidatefore"
                      />
                    </div>
                    <p
                      className="text-[#151d48] text-[20px] font-[600]"
                      size="txtPoppinsSemiBold20Bluegray900"
                    >
                      Candidate Dropped
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center justify-start ml-1 md:ml-[0] pb-[37px] rounded-[16px] w-full">
                <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                  <div className="bg-black flex flex-col lg:flex-row gap[10px] lg:gap-[33px] items-center justify-start px-[22px] py-[11px] rounded-tl-[16px] rounded-tr-[16px] w-full">
                    <p className=" text-white text-[20px] font-[600]">
                      Department wise student
                    </p>
                    <input
                      placeholder="Select Date Range"
                      className="leading-[normal] p-[14px] w-[216px] h-[38px] rounded-[8px] bg-white placeholder:text-[#b5b7c0] text-left text-[#b5b7c0] text-[14px] tracking-[-0.14px]"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row md:gap-10 items-start justify-between w-full">
                    <div className="w-full h-[228px] flex justify-center items-center">
                      <DepartmentwiseStudentChart />
                    </div>
                    <div className="w-full flex font-[500] text-[16px] flex-col gap-[13px] lg:py-[57px] px-[10px] lg:px-[77px] justify-center items-center">
                      <div className="flex w-full gap-[11px] justify-between items-center">
                        <p className="mr-[28px]">Sourced</p>
                        <p>1</p>
                        <div className="w-full">
                          <ProgressBar
                            completed={90}
                            customLabel="."
                            bgColor="#ffd831"
                            height="8px"
                          />
                        </div>
                        <p>90%</p>
                      </div>
                      <div className="flex w-full gap-[11px] justify-between items-center">
                        <p className="mr-[28px]">Applied</p>
                        <p>0</p>
                        <div className="w-full">
                          <ProgressBar
                            completed={0}
                            customLabel="."
                            bgColor="#ffd831"
                            height="8px"
                          />
                        </div>
                        <p>0%</p>
                      </div>
                      <div className="flex w-full gap-[11px] justify-between items-center">
                        <p className="mr-[28px]">Referred</p>
                        <p>0</p>
                        <div className="w-full">
                          <ProgressBar
                            completed={0}
                            customLabel="."
                            bgColor="#ffd831"
                            height="8px"
                          />
                        </div>
                        <p>0%</p>
                      </div>
                      <div className="flex w-full gap-[11px] justify-between items-center">
                        <p className="mr-[28px]">Agency</p>
                        <p>0</p>
                        <div className="w-full">
                          <ProgressBar
                            completed={0}
                            customLabel="."
                            bgColor="#ffd831"
                            height="8px"
                          />
                        </div>
                        <p>0%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white flex flex-col items-center justify-start ml-1 md:ml-[0] pb-[37px] rounded-[16px] w-full">
                <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                  <div className="bg-black flex flex-col lg:flex-row gap-[10px] lg:gap-[85px] items-center justify-start px-[22px] py-[11px] rounded-tl-[16px] rounded-tr-[16px] w-full">
                    <p
                      className=" text-white text-[20px] font-[600]"
                      size="txtPoppinsSemiBold20WhiteA700"
                    >
                      Job wise
                    </p>
                    <input
                      placeholder="Select Date Range"
                      className="leading-[normal] p-[14px] w-[216px] h-[38px] rounded-[8px] bg-white placeholder:text-[#b5b7c0] text-left text-[#b5b7c0] text-[14px] tracking-[-0.14px]"
                    />
                  </div>
                  <div className="flex h-[177px] p-[41px] items-start justify-center w-full">
                    <JobWiseChart />
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

export default JobPrestigeStudentReport;
