import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { AiFillLock } from "react-icons/ai";

const board = [
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
  {
    name: "indeed",
    boardImg: "/images/indeed.png",
    desc: "Indeed is the #1 job site in the world with over 250 millions unique visitors every..",
  },
];

const JobsPublishToJobBoards = () => {
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
        <div className="flex flex-col gap-[24px] mt-[24px] w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-[24px] font-[500]">
              Publish to job boards <span>(31 Total)</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-[20px]">
            {board?.map((e, i) => {
              return (
                <>
                  <div
                    key={i + "m"}
                    className="bg-white border-[0.5px] border-[#CCCCCC] flex flex-col gap-[16px] rounded-[20px] p-[12px] "
                  >
                    <div className="flex gap-[17px]">
                      <img
                        src={e?.boardImg}
                        alt=""
                        className="w-[106px] h-[80px] rounded-[6px]"
                      />
                      <div className="flex justify-center items-start gap-[2px] flex-col">
                        <p className="font-[600] capitalize text-[20px]">{e?.name}</p>
                        <Link className="text-[11px] font-[500] text-[#5956e9]">
                          Learn More
                        </Link>
                      </div>
                    </div>
                    <p className="text-[12px] font-[Poppins] font-[500] text-[#7e7e7e]">
                      {e?.desc}
                    </p>
                    <button className="bg-black flex  items-center justify-center h-[50px] gap-[10px] text-white rounded-[12px] text-[16px] font-[600]">
                      Enabled <AiFillLock size={"19px"} />
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPublishToJobBoards;
