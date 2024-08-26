import React, { useEffect, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import { JobsLinks } from "../JobsLinks";
import { FaListUl } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { ImBriefcase } from "react-icons/im";
import { IoIosStar } from "react-icons/io";
import JobSidebar from "./JobSidebar";
import { GetApi, GetApiwithouttoken, PutApi } from "Api/Api_Calling";

const JobsApplication = () => {
  const { id } = useParams();
  const Id = id;

  const [selectedOption, setSelectedOption] = useState("");
  const [side1, setSide1] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [AllScheduleInterviewApplication, setAllScheduleInterviewApplication] =
    useState([]);

  const handleButtonClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const handleClickOutside = () => {
    setOpenIndex(null);
  };

  function openSideBar(index = null) {
    setSide1(index !== null ? true : !side1);
    setOpenIndex(index);
  }
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

  const navigate = useNavigate();
  const handleGoBackButton = () => {
    navigate(-1);
  };
  const path = useLocation();
  const pathName = path?.pathname;

  const [selectedView, setSelectedView] = useState("List");

  const handleViewSelection = (view) => {
    setSelectedView(view);
  };

  const [AllApplication, setAllApplication] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetAllApplication = async () => {
    try {
      const Getjobdata = await GetApi(
        `api/CompanyRoutes/GetAllStudentsofajob/${id}`
      );
      const usersWithAverageScores = Getjobdata.data.data.map((user) => {
        const totalScore = user.assessment.reduce(
          (sum, assessment) => sum + assessment.scorePercentage,
          0
        );
        const averageScore = totalScore / user.assessment.length;
        return {
          ...user,
          averageScore: averageScore,
        };
      });
      const rankedUsers = usersWithAverageScores
        .sort((a, b) => b.averageScore - a.averageScore)
        .map((user, index) => ({
          ...user,
          rank: index + 1,
        }));

      setAllApplication(rankedUsers);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const RejectApplication = async (id) => {
    try {
      const Getjobdata = await PutApi(
        `api/CompanyRoutes/RejectJobApplication/${id}`
      );
      // console.log(Getjobdata?.data)
      alert("Application Rejected");
      GetAllApplication();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const ShortlistApplication = async (id) => {
    try {
      const Getjobdata = await PutApi(
        `api/CompanyRoutes/shortlistJobApplication/${id}`
      );
      // console.log(Getjobdata?.data)
      alert("Application Shortlisted");
      GetAllApplication();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAllScheduleInterviewApplication = async () => {
    try {
      const Getjobdata = await GetApi(
        `api/CompanyRoutes/GetAllScheduleInterviewofajob/${id}`
      );
      // console.log(Getjobdata?.data)
      setAllScheduleInterviewApplication(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const [Jobsummary, setJobsummary] = useState({});

  const GetJobDetail = async () => {
    try {
      const Getjobdata = await GetApiwithouttoken(
        `api/AdminRoutes/GetAJobs/${id}`
      );
      // console.log(Getjobdata?.data);
      setJobsummary(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllScheduleInterviewApplication();
    GetJobDetail();
    GetAllApplication();
  }, [id]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${months[monthIndex]} ${day < 10 ? "0" + day : day}, ${year}`;
  };

  const formatDate1 = (timestamp) => {
    const [day, month, year] = timestamp?.split("-");

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
  };

  function renderStars(rate) {
    switch (rate) {
      case "Intermediate":
        return (
          <>
            <IoIosStar color="#fbbc05" size={"21px"} />
            <IoIosStar color="#fbbc05" size={"21px"} />
            <IoIosStar color="#fbbc05" size={"21px"} />
          </>
        );
      case "Advanced":
        return (
          <>
            <IoIosStar color="#fbbc05" size={"21px"} />
            <IoIosStar color="#fbbc05" size={"21px"} />
            <IoIosStar color="#fbbc05" size={"21px"} />
            <IoIosStar color="#fbbc05" size={"21px"} />
          </>
        );
      default:
        return null;
    }
  }

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
                className={`${
                  pathName === `/jobsSummary/${Id}`
                    ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                    : ""
                }`}
                to={`/jobsSummary/${Id}`}
              >
                Summary
              </Link>
              <Link
                className={`${
                  pathName === `/jobsApplication/${Id}`
                    ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                    : ""
                }`}
                to={`/jobsApplication/${Id}`}
              >
                Application
              </Link>
              <Link
                className={`${
                  pathName === `/jobsApplicationManager/${Id}`
                    ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                    : ""
                }`}
                to={`/jobsApplicationManager/${Id}`}
              >
                Application Manager
              </Link>
              <Link
                className={`${
                  pathName === `/jobReports/${Id}`
                    ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                    : ""
                }`}
                to={`/jobReports/${Id}`}
              >
                Reports
              </Link>
              <Link
                className={`${
                  pathName === `/jobsSettings/${Id}`
                    ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                    : ""
                }`}
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
              className="border bg-[#1C212D] border-[#000000] text-white h-[32px] w-full rounded-[4px] font-[600] text-[12px] text-left"
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
        <div className="flex gap-[16px] mt-[32px] flex-col ">
          <div className="flex gap-[6px]">
            <button
              className={`${
                selectedView === "List"
                  ? " text-[#fff] bg-black"
                  : "bg-white text-black"
              } text-[16px] font-[400] p-[12px] w-[118px] h-[50px] gap-[16px] flex justify-center items-center rounded-[6px]`}
              onClick={() => handleViewSelection("List")}
            >
              <FaListUl />
              List
            </button>
            <button
              className={`${
                selectedView === "Board"
                  ? " text-[#fff] bg-black"
                  : "bg-white text-black"
              } text-[16px] font-[400] p-[12px] w-[118px] h-[50px] gap-[16px] flex justify-center items-center rounded-[6px]`}
              onClick={() => handleViewSelection("Board")}
            >
              <img src="images/img_boardsvgrepocom.svg" alt="" />
              Board
            </button>
          </div>
          {selectedView === "List" && (
            <div className="w-full">
              <table className="w-full rounded-[20px]">
                <thead className="bg-yellow-400 text-[16px] text-center lg:text-left rounded-[20px]">
                  <tr>
                    <th className="p-2 flex gap-[12px]">
                      <input type="checkbox" />
                      Name
                    </th>
                    <th className="p-2">Application stage</th>
                    <th className="p-2">Score Card</th>
                    <th className="p-2">Applied Date</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-[16px] bg-[#fff] relative font-[500] text-center lg:text-left">
                  {AllApplication?.map((application, index) => (
                    <tr key={index}>
                      <td className="p-2 flex gap-[10px]">
                        <input type="checkbox" />
                        <img
                          className="w-[28px] h-[28px]"
                          src={application?.StudentId?.Image}
                          alt=""
                        />
                        {application?.StudentId?.Name}
                        <br />
                        rank: #{application?.rank}
                      </td>
                      {application.assessment.length > 0 ? (
                        <>
                          <td className="">
                            {application.assessment.map((item, i) => (
                              <React.Fragment key={i}>
                                <td className="p-2 flex gap-[5px] items-center">
                                  {item?.Round || "Round 1"}
                                </td>
                              </React.Fragment>
                            ))}
                          </td>
                          <React.Fragment>
                            {application.assessment.map(
                              (item, assessmentIndex) => (
                                <React.Fragment key={assessmentIndex}>
                                  <td className="p-2 flex gap-[5px] items-center">
                                    <ProgressBar
                                      completed={item?.scorePercentage || 0}
                                      bgColor="#6f34f5"
                                      color="#e6f3ff"
                                      height="10px"
                                      customLabel="."
                                      width="100px"
                                    />
                                    {item?.scorePercentage || "0.00"}%
                                  </td>
                                </React.Fragment>
                              )
                            )}
                          </React.Fragment>
                        </>
                      ) : (
                        <React.Fragment>
                          <td className="p-2 text-[#5956e9]">Round 1</td>
                          <td className="p-2 flex gap-[5px] items-center">
                            <ProgressBar
                              completed={0}
                              bgColor="#6f34f5"
                              color="#e6f3ff"
                              height="10px"
                              customLabel="."
                              width="100px"
                            />
                            0.00%
                          </td>
                        </React.Fragment>
                      )}

                      <td className="p-2">
                        {formatDate(application?.createdAt)}
                      </td>
                      <td className="p-2 relative cursor-pointer">
                        <BsThreeDotsVertical
                          onClick={() => handleButtonClick(index)}
                        />
                        {openIndex === index && (
                          <div className="absolute bg-white w-[138px] right-[0px] z-10 top-[0px] h-[171px] shadow-lg rounded-[10px] font-[500] text-[11px] flex flex-col justify-center items-start pl-[8px]">
                            <p onClick={() => openSideBar(index)}>Notes</p>
                            <p>Hiring Pipeline</p>
                            <p>Send</p>
                            <p>Share</p>
                            <p>Request</p>
                            <p>Drop</p>
                            <p>Delete</p>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <JobSidebar 
          side1={side1}
          openSideBar={openSideBar}
          selectedApplication={AllApplication[openIndex]}
        />
        {selectedView === "Board" &&
          AllApplication?.map((application, index) => (
            <div className="bg-white mt-[17px] flex flex-col gap-[23px] rounded-[20px] p-[17px]">
              <div className="flex flex-col lg:flex-row gap-[10px] justify-between items-center">
                <div className="flex justify-center gap-[12px] items-center">
                  <input type="checkbox" />
                  <img
                    src={application?.StudentId?.Image}
                    className="w-[40px] h-[40px] rounded-[50%]"
                    alt=""
                  />
                  <div className="flex flex-col gap-[10px]">
                    <p className="font-[500] text-[16px]">
                      {application?.StudentId?.Name}
                    </p>
                    <div className="flex gap-[12px]">
                      <div className=" text-[#747474] flex gap-[11px] font-[500] text-[12px]">
                        <ImLocation2 size={"18px"} color="#5956e9" />
                        <p>{application?.StudentId?.Address}</p>
                      </div>
                      <div className="flex gap-[11px] text-[#747474] font-[500] text-[12px]">
                        <ImBriefcase size={"18px"} color="#5956e9" />
                        <p>
                          Total work Experience:{" "}
                          {application?.StudentId?.Experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mr-[74px] text-[#5956e9] text-[16px] font-[500]">
                  <p>{formatDate(application?.createdAt)}</p>
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                {/* <div className="flex flex-col lg:flex-row p-[20px] lg:gap-[106px] items-center text-[16px] bg-[#f6f9fe] rounded-[16px] ">
                  <p className="font-[400]">Experience</p>
                  <p className="font-[500]">
                    {application?.StudentId?.JobDetails[0]?.Designation} at{" "}
                    {application?.StudentId?.JobDetails[0]?.Organization} -{" "}
                    {formatDate1(
                      application?.StudentId?.JobDetails[0]?.Start_date
                    )}{" "}
                    -{" "}
                    {formatDate1(
                      application?.StudentId?.JobDetails[0]?.End_date
                    )}{" "}
                    -{" "}
                    {application?.StudentId?.JobDetails[0]?.Currentlyworking &&
                      "Currently working "}{" "}
                    {application?.StudentId?.JobDetails[0]?.Type}
                  </p>
                </div> */}
                <div className="flex flex-col lg:flex-row p-[20px] lg:gap-[155px] items-center text-[16px] bg-[#f6f9fe] rounded-[16px] ">
                  <p className="font-[400]">Skills</p>
                  <div className="font-[500] flex-wrap flex-col lg:flex-row flex gap-[10px]">
                    {application?.StudentId?.Skill_Set.map((skill, index) => (
                      <p key={skill._id} className="flex">
                        {renderStars(skill.Rate)}
                        {skill.Skill}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row p-[20px] lg:gap-[96px] items-center text-[16px] bg-[#f6f9fe] rounded-[16px] ">
                  <p className="font-[400]">Cover Letter</p>
                  <p className="font-[500] pl-[50px]">
                    {application?.Coverletter}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row p-[20px] lg:justify-between items-center text-[16px] bg-[#f6f9fe] rounded-[16px] ">
                  <div className="flex flex-col lg:flex-row lg:gap-[50px] items-center">
                    <p className="font-[400]">Application Stage</p>
                    <p className="font-[500]">
                      {application?.Application_stage}
                    </p>
                  </div>
                  <Link className="font-[500] text-[16px] text-[#5956e9] border-b-2 border-[#5956e9]">
                    View Hiring Pipeline
                  </Link>
                </div>
                <div className="flex flex-col lg:flex-row p-[20px] lg:gap-[106px] items-center text-[16px] bg-[#f6f9fe] rounded-[16px] ">
                  <p className="font-[400]">Availability</p>
                  <p className="font-[500]">{application?.Your_availability}</p>
                </div>
              </div>
              <div className="text-[14px] font-[700] gap-[9px] lg:gap-0 flex justify-center flex-col lg:flex-row lg:justify-between items-center ">
                <div className="lg:w-full">
                  <button className="bg-black rounded-[4px] font-[700] text-white w-[146px] h-[36px]">
                    View Full
                  </button>
                </div>
                <div className="flex gap-[9px] flex-col lg:flex-row lg:w-full">
                  <button
                    disabled={
                      application.isrejected || application.isshortlisted
                    }
                    onClick={() => {
                      RejectApplication(application?._id);
                    }}
                    className="bg-[#e21b1b] font-[700] rounded-[4px] bg-opacity-[30%] w-[146px] h-[36px]  text-[#e21b1b]"
                  >
                    {application.isrejected ? "Rejectted" : "Reject"}
                  </button>
                  <button
                    disabled={
                      application.isrejected || application.isshortlisted
                    }
                    onClick={() => {
                      ShortlistApplication(application?._id);
                    }}
                    className="bg-[#5956e9] rounded-[4px] font-[700] bg-opacity-[64%] w-[146px] h-[36px]  text-[#fff]"
                  >
                    {application.isshortlisted ? "Shortlisted" : "Shortlist"}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-1 bg-black opacity-0 cursor-pointer"
          onClick={handleClickOutside}
        />
      )}
    </>
  );
};

export default JobsApplication;
