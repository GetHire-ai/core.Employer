import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const JobPublishToCollege = () => {
  let { id } = useParams();
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
          <div className="bg-white p-[21px] py-[30px] rounded-[20px] border-[1px] border-[#cccccc] w-full">
            <p className="text-[24px] font-[500]">Publish to College Campus</p>
            <p className="text-[16px] lg:pr-[75px] font-[500] mt-[17px] text-[#9b9b9b]">
              The Job Boards Connect feature allows you to receive applications
              from job boards where you have manually posted job ads. For each
              job ad you have posted, you will need to set the job board to send
              applicants to an email address unique to this job. Applicants will
              then be created and added automatically to the job.
            </p>
            <p className="text-[16px] lg:pr-[75px] font-[500] mt-[12px] text-[#9b9b9b]">
              You will find below guides on how to receive candidates for some
              of the major job boards, but this feature works for almost any job
              board. Feel free to review our documentation at the link below for
              more in-depth explanations.
            </p>
            <p className="text-[16px font-[500] mt-[19px]">
              Search for a job board to learn how to have applications sent to
              Manatal
            </p>
            <div className="flex gap-[22px] mt-[17px] items-center">
              <div className="bg-[#f5f8fe]  lg:w-[411px] rounded-[12px] flex p-[8px] gap-[8px]">
                <IoSearchOutline size={"24px"} color="#b5b7c0" />
                <input
                  placeholder="Search"
                  className="w-full bg-[#f5f8fe] outline-none"
                />
              </div>
              <img
                src="/images/filter.svg"
                className="w-[38px] cursor-pointer h-[38px] rounded-[50%]"
                alt=""
              />
            </div>

            <div className="mt-[24px] gap-[20px] lg:w-[752px] grid  lg:grid-cols-3">
              <div className="bg-white rounded-[20px] border-[0.5px] border-[#cccccc] p-[12px]">
                <div className="flex gap-[17px] justify-start items-center">
                  <img
                    src="/images/indeed.png"
                    className="w-[106px] h-[80px] rounded-[6px] "
                    alt=""
                  />
                  <div className="flex flex-col gap-[9px]">
                    <p className="text-[20px] font-[600]">prestige college</p>
                    <Link className="text-[11px] font-[500]">Learn More</Link>
                  </div>
                </div>
                <p className="text-[12px] font-[500] text-[#7e7e7e] pt-[16px] pb-[29px]">
                  Indeed is the #1 job site in the world with over 250 millions
                  unique visitors every..
                </p>
                <button className="bg-black w-full text-white rounded-[12px] border-[0.5px] border-[#cccccc] p-[13px]">
                  Invite
                </button>
              </div>
              <div className="bg-white rounded-[20px] border-[0.5px] border-[#cccccc] p-[12px]">
                <div className="flex gap-[17px] justify-start items-center">
                  <img
                    src="/images/indeed.png"
                    className="w-[106px] h-[80px] rounded-[6px] "
                    alt=""
                  />
                  <div className="flex flex-col gap-[9px]">
                    <p className="text-[20px] font-[600]">prestige college</p>
                    <Link className="text-[11px] font-[500]">Learn More</Link>
                  </div>
                </div>
                <p className="text-[12px] font-[500] text-[#7e7e7e] pt-[16px] pb-[29px]">
                  Indeed is the #1 job site in the world with over 250 millions
                  unique visitors every..
                </p>
                <button className="bg-black w-full text-white rounded-[12px] border-[0.5px] border-[#cccccc] p-[13px]">
                  Invite
                </button>
              </div>
              <div className="bg-white rounded-[20px] border-[0.5px] border-[#cccccc] p-[12px]">
                <div className="flex gap-[17px] justify-start items-center">
                  <img
                    src="/images/indeed.png"
                    className="w-[106px] h-[80px] rounded-[6px] "
                    alt=""
                  />
                  <div className="flex flex-col gap-[9px]">
                    <p className="text-[20px] font-[600]">prestige college</p>
                    <Link className="text-[11px] font-[500]">Learn More</Link>
                  </div>
                </div>
                <p className="text-[12px] font-[500] text-[#7e7e7e] pt-[16px] pb-[29px]">
                  Indeed is the #1 job site in the world with over 250 millions
                  unique visitors every..
                </p>
                <button className="bg-black w-full text-white rounded-[12px] border-[0.5px] border-[#cccccc] p-[13px]">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPublishToCollege;
