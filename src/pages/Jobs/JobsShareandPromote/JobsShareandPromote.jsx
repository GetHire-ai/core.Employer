import { SelectBox } from "components/SelectBox";
import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";

const JobsShareandPromote = () => {
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

  const chooseShareOptionsList = [
    { label: "Upload", value: "Upload" },
    { label: "Link", value: "Link" },
    { label: "Whatsapp", value: "Whatsapp" },
  ];

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
              className="bg-[#000] text-white cursor-pointer flex justify-center items-center border-[1px] rounded-[4px] p-[4px] border-[#000] text-[12px] w-[227px] font-[600]"
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
            <p className="text-[24px] font-[500]">Share & Promotes</p>
            <SelectBox
              className="border bg-[#000] text-white w-[127px] font-[600] text-[12px] text-left "
              placeholderClassName="text-white"
              isMulti={false}
              name="groupTen"
              options={chooseShareOptionsList}
              isSearchable={false}
              placeholder={
                <span className="flex gap-[7px] items-center">
                  <FaShareAlt className="inline-block mr-1 w-[14px] h-[14px]" />
                  Share
                </span>
              }
              shape="round"
              size="xs"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-[900px] gap-[20px]">
            <div className="border-[1px] flex gap-[30px] w-full lg:w-[436px] bg-[#FFFFFF] border-[#000] rounded-[20px] p-[34px] lg:pr-[0px] relative">
              <div className="absolute right-[14px] top-[14px]">
                <label className="switch">
                  <input type="checkbox" />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label>
              </div>
              <img
                src="/images/job-search-symbol-of-suitcase-and-curriculum-paper-svgrepo-com.png"
                className="w-[84px] h-[84px]"
                alt=""
              />
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">Free Job Posting</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  Published your job to enabled job boards for free
                </p>
              </div>
            </div>
            {/* <div className="border-[1px] flex gap-[30px] lg:w-[436px] bg-[#FFFFFF] border-[#000] rounded-[20px] p-[34px] pr-[0px] relative">
              <div className="absolute right-[14px] top-[14px]">
                <label className="switch">
                  <input type="checkbox" />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label>
              </div>
              <img
                src="/images/job-post-svgrepo-com.png"
                className="w-[84px] h-[84px]"
                alt=""
              />
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">Job Board Connect</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  connect and receive candidates from job boards directly in
                  Skillgenic.
                </p>
              </div>
            </div> */}
            <div className="border-[1px] flex gap-[30px] lg:w-[436px] border-[#000] rounded-[20px] p-[34px] pr-[0px] bg-[#ffffff] relative">
              <div className="absolute right-[14px] top-[14px]">
                <label className="switch">
                  <input type="checkbox" />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label>
              </div>
              <img
                src="/images/college-svgrepo-com.png"
                className="w-[84px] h-[84px]"
                alt=""
              />
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">College Campus</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  Published your job to enabled job boards for free.
                </p>
              </div>
            </div>
            {/* <div className="border-[1px] flex gap-[30px] lg:w-[436px] border-[#000] rounded-[20px] p-[34px] pr-[0px] bg-[#FFFFFF] relative ">
              <div className="absolute right-[14px] top-[14px]">
                <label className="switch">
                  <input type="checkbox" />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label>
              </div>
              <img
                src="/images/job-transition-svgrepo-com.png"
                className="w-[84px] h-[84px]"
                alt=""
              />
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">Share Job Link</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  connect and receive candidates from job boards directly in
                  Skillgenic.
                </p>
              </div>
            </div> */}
            <div className="border-[1px] flex gap-[30px] lg:w-[436px] border-[#000] rounded-[20px] p-[34px] pr-[0px] bg-[#FFFFFF] relative">
              <div className="absolute right-[14px] top-[14px]">
                <label className="switch">
                  <input type="checkbox" />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label>
              </div>
              <img
                src="/images/community-group-public-svgrepo-com.png"
                className="w-[84px] h-[84px]"
                alt=""
              />
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">Share With Community</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  Published your job to enabled job boards for free
                </p>
              </div>
            </div>
            <div className="border-[1px] flex gap-[30px] lg:w-[436px] border-[#000] rounded-[20px] p-[34px] pr-[0px] bg-[#FFFFFF] relative">
              <div className="absolute right-[14px] top-[14px]">
                <label className="switch">
                  <input type="checkbox" />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label>
              </div>
              <img
                src="/images/social-media-svgrepo-com.png"
                className="w-[84px] h-[84px]"
                alt=""
              />
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">Share on Social Media</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  connect and receive candidates from job boards directly in
                  Skillgenic.
                </p>
              </div>
            </div>
            {/* <div className="border-[1px] flex gap-[30px] lg:w-[436px] border-[#000] rounded-[20px] p-[34px] pr-[0px] bg-[#FFFFFF] relative">
              <div className="absolute right-[14px] top-[14px]">
                <label className="switch">
                  <input type="checkbox" />
                  <div className="slider"></div>
                  <div className="slider-card">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back"></div>
                  </div>
                </label>
              </div>
              <div className="w-[84px] h-[84px]"></div>
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">Import Resume</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  Published your job to enabled job boards for free
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsShareandPromote;
