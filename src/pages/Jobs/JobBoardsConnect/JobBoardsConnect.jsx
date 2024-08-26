
import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const JobBoardsConnect = () => {
  const navigate = useNavigate();
  const handleGoBackButton = () => {
    navigate(-1);
  };

  const [selectOptions, setSelectOptions] = useState("Receive");

  const handleSelectOptions = (option) => {
    setSelectOptions(option);
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
        <div className="flex  py-[30px]">
          <div className="bg-white lg:w-[637px] rounded-[20px] border-[1px] px-[22px] py-[30px] border-[#cccccc]">
            <p className="text-[24px] font-[500]">Job Boards Connect</p>
            <p className="text-[16px] lg:w-[409px] font-[500] mt-[17px] text-[#7e7e7e]">
              Job Boards Connect enables you to receive applications from job
              boards directly in Skillgenic.
            </p>
            <div className="flex flex-col gap-[6px] mt-[53px]">
              {selectOptions && (
                <div
                  onClick={() => handleSelectOptions("Receive")}
                  className={`flex text-[16px] cursor-pointer py-[26px] px-[14px] rounded-[20px] border-[1px] ${
                    selectOptions === "Receive" ? "border-[#5956e9]" : ""
                  } font-[500] bg-[#f6f9fe] justify-between items-center`}
                >
                  <p>Receive job boards Connect</p>
                  <p>setup</p>
                  <IoIosArrowForward color="#5956e9" size={"28px"} />
                </div>
              )}
              {selectOptions && (
                <div
                  onClick={() => handleSelectOptions("Create")}
                  className={`flex text-[16px] cursor-pointer py-[26px] px-[14px] rounded-[20px] border-[1px] ${
                    selectOptions === "Create" ? "border-[#5956e9]" : ""
                  } font-[500] bg-[#f6f9fe] justify-between items-center`}
                >
                  <p>Create Candidate via Email</p>
                  <p>setup</p>
                  <IoIosArrowForward color="#5956e9" size={"28px"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobBoardsConnect;
