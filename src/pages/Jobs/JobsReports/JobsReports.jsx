import React, { useEffect, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { Img, Text } from "components";
import SourceOfCandidate from "./SourceOfCandidate";
import ProgressBar from "@ramonak/react-progress-bar";
import NewCandidateChart from "./NewCandidateChart";
import { GetApi, GetApiwithouttoken } from "Api/Api_Calling";
import img_candidatefore from '../../../assets/AllImages/img_candidatefore.svg';

const JobsReports = () => {

  const { id } = useParams();
  const Id = id
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


  const [AllApplication, setAllApplication] = useState([]);
  const [AllShortlistedApplication, setAllShortlistedApplication] = useState([]);
  const [AllrejectedApplication, setAllrejectedApplication] = useState([]);
  const [AllScheduleInterviewApplication, setAllScheduleInterviewApplication] = useState([]);
  const [loading, setLoading] = useState(true);


  const [Jobsummary, setJobsummary] = useState({});

  const GetJobDetail = async () => {
    try {
      const Getjobdata = await GetApiwithouttoken(`api/AdminRoutes/GetAJobs/${id}`)
      console.log(Getjobdata?.data)
      setJobsummary(Getjobdata?.data?.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }


  const GetAllApplication = async () => {
    try {
      const Getjobdata = await GetApi(`api/CompanyRoutes/GetAllStudentsofajob/${id}`)
      // console.log(Getjobdata?.data)
      setAllApplication(Getjobdata?.data?.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  const GetAllShortlistedApplication = async () => {
    try {
      const Getjobdata = await GetApi(`api/CompanyRoutes/GetAllshortlistStudentsofajob/${id}`)
      // console.log(Getjobdata?.data)
      setAllShortlistedApplication(Getjobdata?.data?.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  const GetAllrejectedApplication = async () => {
    try {
      const Getjobdata = await GetApi(`api/CompanyRoutes/GetAllRejectedStudentsofajob/${id}`)
      // console.log(Getjobdata?.data)
      setAllrejectedApplication(Getjobdata?.data?.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }
  const GetAllScheduleInterviewApplication = async () => {
    try {
      const Getjobdata = await GetApi(`api/CompanyRoutes/GetAllScheduleInterviewofajob/${id}`)
      // console.log(Getjobdata?.data)
      setAllScheduleInterviewApplication(Getjobdata?.data?.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }


  useEffect(() => {
    GetJobDetail();
    GetAllApplication();
    GetAllShortlistedApplication();
    GetAllrejectedApplication();
    GetAllScheduleInterviewApplication();
  }, [id]);



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
              {Jobsummary?.positionName}
              </h1>
              <p className="font-[400] text-[14px] text-[#686868]">
              {Jobsummary?.addlocation} {Jobsummary?.contractDetails}
              </p>
            </div>
          </div>
          <div className="font-[600] text-[12px] flex flex-col lg:flex-row gap-[12px]">
            <div className="bg-[#ffe2e5] w-[173px] p-[9px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#fa5a7d] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
              {AllApplication?.length}
              </div>
              <p>Applications</p>
            </div>
            <div className="bg-[#fff4de] p-[9px] w-[173px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#ff947a] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
              {AllScheduleInterviewApplication?.length}
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
            <>
              <Link
                className={`${pathName === `/jobsSummary/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsSummary/${Id}`}
              >
                Summary
              </Link>
              <Link
                className={`${pathName === `/jobsApplication/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsApplication/${Id}`}
              >
                Application
              </Link>
              <Link
                className={`${pathName === `/jobsApplicationManager/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsApplicationManager/${Id}`}
              >
                Application Manager
              </Link>
              <Link
                className={`${pathName === `/jobReports/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobReports/${Id}`}
              >
                Reports
              </Link>
              <Link
                className={`${pathName === `/jobsSettings/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsSettings/${Id}`}
              >
                Settings
              </Link>
            </>
          </div>
          <div className="flex gap-[10px] justify-center lg:justify-end mb-[8px]">
            <Link
              to="/jobsShareandPromote"
              className="bg-[#fff] cursor-pointer flex justify-center items-center border-[1px] rounded-[4px] p-[4px] border-[#000] text-[12px] w-[227px] font-[600]"
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

        <div className="flex flex-col gap-[20px] mt-[32px] items-start justify-start ml-[undefinedpx] md:px-5 w-full z-[1]">
          <div className="flex flex-col justify-center items-center lg:flex-row gap-[27px] lg:items-start lg:justify-start ml-1 md:ml-[0] w-full">
            <Text
              className=" text-[#5956e9] font-[Poppins] text-[20px] font-[600]"
              size="txtPoppinsSemiBold20"
            >
              Overview
            </Text>
            <Text className="text-[20px] font-[Poppins] font-[600]" size="txtPoppinsMedium20">
              Candidate By Source
            </Text>
            <Text className="text-[20px] font-[Poppins] font-[600]" size="txtPoppinsMedium20">
              Pipe line Performance
            </Text>
            <Text className="text-[20px] font-[Poppins] font-[600]" size="txtPoppinsMedium20">
              History
            </Text>
          </div>
          <div className="sm:flex-col flex-row gap-5 grid lg:grid-cols-3 grid-cols-1 justify-center w-full">
            <div className="bg-white flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-[gray-200] p-[15px] rounded-[16px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start my-0.5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="bg-[#e7efff] rounded-[50%] flex flex-col h-[49px] items-center justify-start mt-2 p-[9px] w-[50px]">
                    <Text
                      className="text-black text-[20px] font-[600]"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      {AllShortlistedApplication?.length}
                    </Text>
                  </div>
                  <Img
                    className="h-[50px] mb-[7px] w-[50px]"
                    src={img_candidatefore}
                    alt="candidatefore"
                  />
                </div>
                <Text
                  className="text-[#151d48] text-[20px] font-[600]"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Candidate in Pipeline
                </Text>
              </div>
            </div>
            <div className="bg-white flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-200 p-[15px] rounded-[16px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start my-0.5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="bg-[#e7efff] rounded-[50%] flex flex-col h-[49px] items-center justify-start mt-2 p-[9px] w-[50px]">
                    <Text
                      className="text-black text-[20px] font-[600]"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      0
                    </Text>
                  </div>
                  <Img
                    className="h-[50px] mb-[7px] w-[50px]"
                    src={img_candidatefore}
                    alt="candidatefore"
                  />
                </div>
                <Text
                  className="text-[#151d48] text-[20px] font-[600]"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Candidate Hired
                </Text>
              </div>
            </div>
            <div className="bg-white flex flex-1 flex-col items-center justify-start outline outline-[0.5px] outline-gray-200 p-[15px] rounded-[16px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start my-0.5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="bg-[#e7efff] rounded-[50%] flex flex-col h-[49px] items-center justify-start mt-2 p-[9px] w-[50px]">
                    <Text
                      className="text-black text-[20px] font-[600]"
                      size="txtPoppinsSemiBold20Black900"
                    >
                      {GetAllrejectedApplication?.length}
                    </Text>
                  </div>
                  <Img
                    className="h-[50px] mb-[7px] w-[50px]"
                    src={img_candidatefore}
                    alt="candidatefore"
                  />
                </div>
                <Text
                  className="text-[#151d48] text-[20px] font-[600]"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Candidate Dropped
                </Text>
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col items-center justify-start ml-1 md:ml-[0] pb-[37px] rounded-[16px] w-full">
            <div className="flex flex-col gap-[38px] items-center justify-start w-full">
              <div className="bg-black flex flex-col lg:flex-row gap[10px] lg:gap-[33px] items-center justify-start px-[22px] py-[11px] rounded-tl-[16px] rounded-tr-[16px] w-full">
                <Text
                  className=" text-white text-[20px] font-[600]"
                  size="txtPoppinsSemiBold20WhiteA700"
                >
                  source Of Candidate
                </Text>
                <input
                  placeholder="Select Date Range"
                  className="leading-[normal] p-[14px] w-[216px] h-[38px] rounded-[8px] bg-white placeholder:text-[#b5b7c0] text-left text-[#b5b7c0] text-[14px] tracking-[-0.14px]"
                />
              </div>
              <div className="flex flex-col lg:flex-row md:gap-10 items-start justify-between w-full">
                <div className="w-full h-[228px] flex justify-center items-center">
                  <SourceOfCandidate />
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
                <Text
                  className=" text-white text-[20px] font-[600]"
                  size="txtPoppinsSemiBold20WhiteA700"
                >
                  New Candidate
                </Text>
                <input
                  placeholder="Select Date Range"
                  className="leading-[normal] p-[14px] w-[216px] h-[38px] rounded-[8px] bg-white placeholder:text-[#b5b7c0] text-left text-[#b5b7c0] text-[14px] tracking-[-0.14px]"
                />
              </div>
              <div className="flex h-[177px] p-[41px] items-start justify-center w-full">
                <NewCandidateChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsReports;
