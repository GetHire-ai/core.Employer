import React, { useEffect, useState } from "react";
import { GetApiwithouttoken } from "Api/Api_Calling";
import { useParams } from "react-router-dom";
import { SelectBox } from "components/SelectBox";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobsLinks } from "pages/Jobs/JobsLinks";
import { Link } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";

const SmartSource = () => {
  const { id } = useParams();
  const [job, setJob] = useState("");
  const [loading, setLoading] = useState(false);

  const GetJobDetail = async () => {
    try {
      const Getjobdata = await GetApiwithouttoken(
        `api/AdminRoutes/GetAJobs/${id}`
      );
      setJob(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    GetJobDetail();
  }, []);

  const postOnLinkedin = async (id) => {
    const data = {
      elements: [
        {
          integrationContext: "urn:li:organization:2414183",
          companyApplyUrl: "http://linkedin.com",
          description: job?.description,
          employmentStatus: "Full_TIME",
          externalJobPostingId: id,
          listedAt: id,
          jobPostingOperationType: "CREATE",
          title: job?.positionName,
          location: job?.location,
          workplaceTypes: ["remote"],
        },
      ],
    };
    try {
      const response = await fetch("https://api.linkedin.com/v2/jobPostings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"token"}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const result = await response.json();
      console.log("Job posted successfully:", result);
    } catch (error) {
      console.log("Error posting job on LinkedIn:", error);
    }
  };

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
        <div
          onClick={handleGoBackButton}
          className="flex gap-[16px] justify-start items-center cursor-pointer"
         >
          <IoIosArrowDropleft size={"30px"} color="#5956e9" />
          Go Back !
        </div>
        <div className="flex flex-col gap-[24px] mt-[24px] w-full">
          <div className="flex justify-between items-center w-full">
            <p className="text-[24px] font-[500]">Share & Promotes</p>
            <SelectBox
              className="border bg-blue-100 text-white w-[127px] font-[600] text-[12px] text-left hover:cursor-pointer"
              placeholderClassName="text-white"
              isMulti={false}
              name="groupTen"
              options={chooseShareOptionsList}
              isSearchable={false}
              placeholder={
                <span className="flex text-blue-600 gap-[7px] items-center">
                  <FaShareAlt className="inline-block  mr-1 w-[14px] h-[14px]" />
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
                <label className="switch ">
                  <input type="checkbox" className="" />
                  <div className="slider "></div>
                  <div className="slider-card  ">
                    <div className="slider-card-face slider-card-front"></div>
                    <div className="slider-card-face slider-card-back "></div>
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
            <div className="border-[1px] flex gap-[30px] lg:w-[436px] bg-[#FFFFFF] border-[#000] rounded-[20px] p-[34px] pr-[0px] relative">
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
            </div>
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
            <div className="border-[1px] flex gap-[30px] lg:w-[436px] border-[#000] rounded-[20px] p-[34px] pr-[0px] bg-[#FFFFFF] relative ">
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
              <div className="w-[84px] h-[84px]"></div>
              <div className="flex flex-col gap-[9px]">
                <p className="text-[20px] font-[600]">Import Resume</p>
                <p className="text-[14px] font-[500] text-[#7e7e7e]">
                  Published your job to enabled job boards for free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartSource;
