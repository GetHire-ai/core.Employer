import React, { useEffect, useState } from "react";
import { GetApi, PutApi } from "Api/Api_Calling";
import { CircularProgressbar } from "react-circular-progressbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaListUl } from "react-icons/fa";
import JobSidebar from "pages/Jobs/JobsApplication/JobSidebar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import FilterScreen from "./FiltersScreen";
import SuggestedCandidates from "./SuggestedCandidates";

const DashboardTwoPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("All Applicants");
  const [filterData, setFilterData] = useState({});
  const [selectedView, setSelectedView] = useState("Board");
  const [side1, setSide1] = useState(false);
  const [loading, setLoading] = useState(true);
  const [filterAppl, setFilterAppl] = useState([]);
  const [interviewModal, setInterviewModal] = useState(false);
  const [ShortlistedApplication, setShortlistedApplication] = useState([]);
  const [selectedid, setselectedid] = useState("");
  const [AllApplication, setAllApplication] = useState([]);
  const [ScheduleInterview, setScheduleInterview] = useState([]);
  const [SelectedStudents, setAllSelectedStudents] = useState([]);
  const [job, setJob] = useState(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [rejectedApplication, setAllrejectedApplication] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [students, setStudents] = useState([]);
  const [Interviewdetail, setInterviewdata] = useState({
    type: "",
    date: "",
    Time: "",
    location: "",
    notes: "",
  });
  const [candidates, setCandidates] = useState([]);

  const getInvitedStudents = async () => {
    try {
      let res = await GetApi(`api/CompanyRoutes/getinvited/${job._id}`);
      setCandidates(res?.data?.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getStudents = async () => {
    try {
      let res = await GetApi(`api/adminroutes/GetAllStudents`);
      setStudents(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getJob = async () => {
    try {
      const res = await GetApi(`api/AdminRoutes/GetAJobs/${id}`);
      setJob(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllApplication = async () => {
    try {
      const res = await GetApi(`api/CompanyRoutes/GetAllStudentsofajob/${id}`);
      // console.log(res.data.data[0].StudentId.JobDetails);
      const usersWithAverageScores = res.data.data.map((user) => {
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
      setFilterAppl(rankedUsers);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetScheduleInterview = async () => {
    try {
      const res = await GetApi(
        `api/CompanyRoutes/GetAllScheduleInterviewofajob/${id}`
      );
      setScheduleInterview(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetShortlistedApplication = async () => {
    try {
      const res = await GetApi(
        `api/CompanyRoutes/GetAllshortlistStudentsofajob/${id}`
      );
      setShortlistedApplication(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAllSelectedStudents = async () => {
    try {
      const res = await GetApi("api/CompanyRoutes/GetAllSelectedStudents");
      const selected = res.data.data.filter((data) => data.JobId._id === id);
      setAllSelectedStudents(selected);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllrejectedApplication = async () => {
    try {
      const res = await GetApi(
        `api/CompanyRoutes/GetAllRejectedStudentsofajob/${id}`
      );
      setAllrejectedApplication(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const Scheduleinterviewapi = async () => {
    try {
      const interviewData = {
        type: Interviewdetail.type,
        date: Interviewdetail.date,
        Time: Interviewdetail.Time,
        location: Interviewdetail.location,
        notes: Interviewdetail.notes,
      };
      const response = await PutApi(
        `api/CompanyRoutes/ScheduleInterview/${selectedid}`,
        { interviewSchedule: interviewData }
      );
      console.log(response);
      setInterviewModal(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  const ShortlistApplication = async (id) => {
    try {
      const res = await PutApi(
        `api/CompanyRoutes/shortlistJobApplication/${id}`
      );
      alert("Application Shortlisted");
      GetAllApplication();
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  const RejectApplication = async (id) => {
    try {
      await PutApi(`api/CompanyRoutes/RejectJobApplication/${id}`);
      alert("Application Rejected");
      GetAllApplication();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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

  useEffect(() => {
    getJob();
    getStudents();
    GetAllApplication();
    GetScheduleInterview();
    GetAllSelectedStudents();
    GetShortlistedApplication();
    GetAllrejectedApplication();
  }, []);

  useEffect(() => {
    if (job) {
      getInvitedStudents();
    }
  }, [job]);

  useEffect(() => {
    const applyFilters = () => {
      let filteredList = [];
      // Filter On Stage
      if (filterData?.stage?.includes("Shortlisted")) {
        console.log("Shortlisted");
        filteredList = filteredList.concat(ShortlistedApplication);
      }
      if (filterData?.stage?.includes("Interview")) {
        console.log("Interview");
        filteredList = filteredList.concat(ScheduleInterview);
      }
      if (filterData?.stage?.includes("Hired")) {
        console.log("Hired");
        filteredList = filteredList.concat(SelectedStudents);
      }
      if (filterData?.stage?.includes("Rejected")) {
        console.log("Rejected");
        filteredList = filteredList.concat(rejectedApplication);
      }
      if (filterData?.name !== "") {
        filteredList = filteredList.filter((student) =>
          student.StudentId?.Name.toLowerCase().includes(
            filterData?.name.toLowerCase()
          )
        );
      }
      // Filter On Name
      if (filterData?.skills?.length !== 0) {
        filteredList = filteredList.filter((student) =>
          filterData.skills.every((filterSkill) =>
            student.StudentId?.Skill_Set?.some((skill) =>
              skill.Skill.toLowerCase().includes(filterSkill.toLowerCase())
            )
          )
        );
      }
      console.log(filteredList[0]?.StudentId?.Experience);
      console.log(filteredList[0]?.StudentId?.Expected_Salary);
      console.log(filteredList[0]?.StudentId?.Current_Salary);
      console.log(filteredList[0]?.StudentId?.locations);
      setFilterAppl(filteredList);
    };

    applyFilters();
  }, [filterData]);

  useEffect(() => {
    if (activeTab === "All Applicants") setFilterAppl(AllApplication);
    if (activeTab === "Shortlisted") setFilterAppl(ShortlistedApplication);
    if (activeTab === "Interview") setFilterAppl(ScheduleInterview);
    if (activeTab === "Hired") setFilterAppl(SelectedStudents);
    if (activeTab === "Rejected") setFilterAppl(rejectedApplication);
  }, [activeTab]);

  const openSideBar = (index = null) => {
    setSide1(index !== null ? true : !side1);
    setOpenIndex(index);
  };
  return (
    <>
      <div className="container mx-auto">
        {loading && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-10 z-50">
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <div
          className="font-[poppins] mr-[6px] sm:mr-0 h-screen flex flex-col"
          style={{
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <div>
            <h1 className="font-[400] text-[18px] mb-[16px] ml-[10px]">
              Application for {job?.positionName}
            </h1>
          </div>
          <div className="flex justify-between gap-5 pr-3">
            <div className="flex justify-start gap-5 my-1 ml-3">
              <button
                key={"Relevant Applicants"}
                onClick={() => setActiveTab("Relevant Applicants")}
                className={`pb-2 text-sm px-2 border-b-2 ${
                  activeTab === "Relevant Applicants"
                    ? "border-[#a2bbd0] text-[#a2bbd0]"
                    : "border-transparent text-gray-800 hover:text-[#a2bbd0]"
                }`}
              >
                {"Relevant Applicants"}{" "}
              </button>
              <button
                key={"All Applicants"}
                onClick={() => setActiveTab("All Applicants")}
                className={`pb-2 text-sm px-2 border-b-2 ${
                  activeTab === "All Applicants"
                    ? "border-[#a2bbd0] text-[#a2bbd0]"
                    : "border-transparent text-gray-800 hover:text-[#a2bbd0]"
                }`}
              >
                {"All Applicants"}{" "}
                <span className="bg-gray-200 text-gray-800 rounded-full p-1 px-3">
                  {AllApplication?.length}
                </span>
              </button>
              <button
                key={"Shortlisted"}
                onClick={() => setActiveTab("Shortlisted")}
                className={`pb-2 text-sm px-2 border-b-2 ${
                  activeTab === "Shortlisted"
                    ? "border-[#a2bbd0] text-[#a2bbd0]"
                    : "border-transparent text-gray-800 hover:text-[#a2bbd0]"
                }`}
              >
                {"Shortlisted"}{" "}
                <span className="bg-gray-200 text-gray-800 rounded-full p-1 px-3">
                  {ShortlistedApplication?.length}
                </span>
              </button>
              <button
                key={"Interview"}
                onClick={() => setActiveTab("Interview")}
                className={`pb-2 text-sm px-2 border-b-2 ${
                  activeTab === "Interview"
                    ? "border-[#a2bbd0] text-[#a2bbd0]"
                    : "border-transparent text-gray-800 hover:text-[#a2bbd0]"
                }`}
              >
                {"Interview"}{" "}
                <span className="bg-gray-200 text-gray-800 rounded-full p-1 px-3">
                  {ScheduleInterview?.length}
                </span>
              </button>
              <button
                key={"Hired"}
                onClick={() => setActiveTab("Hired")}
                className={`pb-2 text-sm px-2 border-b-2 ${
                  activeTab === "Hired"
                    ? "border-[#a2bbd0] text-[#a2bbd0]"
                    : "border-transparent text-gray-800 hover:text-[#a2bbd0]"
                }`}
              >
                {"Hired"}{" "}
                <span className="bg-gray-200 text-gray-800 rounded-full p-1 px-3">
                  {SelectedStudents?.length}
                </span>
              </button>
              <button
                key={"Rejected"}
                onClick={() => setActiveTab("Rejected")}
                className={`pb-2 text-sm px-2 border-b-2 ${
                  activeTab === "Rejected"
                    ? "border-[#a2bbd0] text-[#a2bbd0]"
                    : "border-transparent text-gray-800 hover:text-[#a2bbd0]"
                }`}
              >
                {"Rejected"}{" "}
                <span className="bg-gray-200 text-gray-800 rounded-full p-1 px-3">
                  {rejectedApplication?.length}
                </span>
              </button>
            </div>
            {/* <div className="flex gap-[10px] ms-auto">
              <button
                className={`${
                  selectedView === "List"
                    ? " text-[#fff] bg-blue-400"
                    : "bg-white text-blue-500"
                } text-[16px] font-[400] p-[5px] px-3 gap-[16px] flex justify-center items-center rounded-[6px]`}
                onClick={() => setSelectedView("List")}
              >
                <FaListUl />
                List
              </button>
              <button
                className={`${
                  selectedView === "Board"
                    ? " text-[#fff] bg-blue-400"
                    : "bg-white text-blue-500"
                } text-[16px] font-[400] p-[5px] px-3 gap-[16px] flex justify-center items-center rounded-[6px]`}
                onClick={() => setSelectedView("Board")}
              >
                <img src="images/img_boardsvgrepocom.svg" alt="" />
                Board
              </button>
            </div> */}
          </div>
          <div className="flex gap-2 p-1 flex-grow overflow-hidden max-h-[90vh]">
            <div
              className="border rounded w-3/4 p-3 flex flex-col gap-3 overflow-y-auto bg-gray-100"
              style={{
                scrollbarWidth: "none",
                "-ms-overflow-style": "none",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {activeTab === "Relevant Applicants" ? (
                <SuggestedCandidates job={job} candidates={candidates} />
              ) : (
                <>
                  {filterAppl?.length === 0 ? (
                    <>No Data Available</>
                  ) : (
                    <>
                      {selectedView === "Board" && (
                        <>
                          {filterAppl?.map((application, index) => (
                            <div
                              key={index}
                              className={`border rounded-xl bg-white p-1`}
                              style={{
                                scrollbarWidth: "none",
                                "-ms-overflow-style": "none",
                              }}
                            >
                              <div className="p-1 font-semibold text-gray-600 text-xl">
                                <div className="flex gap-3 justify-between items-center">
                                  <span className="flex gap-3 justify-start items-center">
                                    <img
                                      src={application?.StudentId?.Image}
                                      className="h-[40px] w-[40px] rounded-full"
                                    />{" "}
                                    <div>
                                      <span className="text-sm">
                                        rank: #{application?.rank}
                                      </span>
                                      <br />
                                      {application?.StudentId?.Name}
                                      <div className="text-xs text-gray-400 pl-2">
                                        {application?.StudentId?.Address}
                                      </div>
                                    </div>
                                  </span>
                                  <div className="flex flex-col justify-center items-center ">
                                    <div
                                      style={{ width: 75, height: 75 }}
                                      className="pt-5"
                                    >
                                      <CircularProgressbar
                                        value={84}
                                        text={`84%`}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-5 justify-start p-3">
                                <span className="text-gray-500 font-[500] text-md w-1/4">
                                  Education :
                                </span>
                                <span className="text-gray-800  text-md ml-3">
                                  {application?.StudentId?.Education?.map(
                                    (edu) => (
                                      <>
                                        {edu?.Degree} <br />
                                        <span className="text-gray-800  text-xs">
                                          {edu?.CollegeName}
                                        </span>
                                      </>
                                    )
                                  )}
                                </span>
                              </div>
                              <div className="flex gap-5 justify-start p-3">
                                <span className="text-gray-500 font-[500] text-md w-1/4">
                                  Experince
                                </span>
                                <span className="text-gray-800  text-md ml-3">
                                  {application?.StudentId?.JobDetails?.map(
                                    (exp) => (
                                      <>
                                        {exp?.Profile &&
                                          exp?.Organization &&
                                          exp?.Start_date &&
                                          exp?.End_date && (
                                            <span>
                                              <span className="font-semibold">
                                                {exp?.Profile} at{" "}
                                                {exp?.Organization}
                                              </span>
                                              <br />
                                              <span className="text-sm text-gray-500">
                                                {exp?.Start_date} to{" "}
                                                {exp?.End_date}
                                              </span>{" "}
                                            </span>
                                          )}
                                      </>
                                    )
                                  )}
                                </span>
                              </div>
                              <div className="flex gap-5 justify-start p-3">
                                <span className="text-gray-500 font-[500] text-md w-1/4">
                                  Skills
                                </span>
                                <span className="text-gray-800  text-md ml-3 flex flex-wrap gap-3">
                                  {application?.StudentId?.Skill_Set?.map(
                                    (skill) => (
                                      <div className="py-1 px-3 bg-blue-300 rounded-3xl text-white mx-2 flex items-center">
                                        <span className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-sm">
                                          {skill?.score}%
                                        </span>
                                        <span className="ml-2">
                                          {skill?.Skill}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </span>
                              </div>
                              <div className="flex gap-5 justify-start p-3">
                                <span className="text-gray-500 font-[500] text-md w-1/4">
                                  Availability
                                </span>
                                <span className="text-gray-800  text-md ml-3 ">
                                  {application?.Your_availability}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <div className="flex justify-start items-center gap-2">
                                  <span
                                    className="text-sm font-[500] text-[#0ba1dc] ml-2 mt-5 cursor-pointer hover:text-blue-500"
                                    onClick={() => {
                                      openSideBar(index);
                                    }}
                                  >
                                    View full Application
                                  </span>
                                  <span className="text-sm font-[500] text-[#0ba1dc] ml-2 mt-5 cursor-pointer hover:text-blue-500">
                                    <i className="fa-regular fa-clipboard"></i>{" "}
                                    &nbsp;Add Notes
                                  </span>
                                </div>
                                <div className="flex justify-end mt-5 mr-10 relative">
                                  {!application?.isshortlisted &&
                                    !application?.isrejected && (
                                      <button
                                        disabled={
                                          application.isrejected ||
                                          application.isshortlisted
                                        }
                                        className="bg-red-50 text-red-500 border-blue-500 rounded p-1 px-3 font-[600] m-1 text-sm"
                                        onClick={() => {
                                          RejectApplication(application?._id);
                                        }}
                                      >
                                        Not Interested
                                      </button>
                                    )}
                                  {!application?.isshortlisted &&
                                    !application?.isrejected && (
                                      <button
                                        disabled={
                                          application.isrejected ||
                                          application.isshortlisted
                                        }
                                        className="bg-blue-50 text-blue-500 border-blue-500 rounded p-1 px-3 font-[600] m-1 text-sm"
                                        onClick={() => {
                                          ShortlistApplication(
                                            application?._id
                                          );
                                        }}
                                      >
                                        Shortlist
                                      </button>
                                    )}
                                  {application?.isshortlisted &&
                                    activeTab === "Shortlisted" && (
                                      <div className="relative">
                                        <button
                                          onClick={() => (index) => {
                                            setOpenDropdownIndex(
                                              openDropdownIndex === index
                                                ? null
                                                : index
                                            );
                                          }}
                                          className="bg-[#0ba1dc] text-white border-[#0ba1dc] rounded p-1 px-7 font-[600] m-1 text-sm"
                                        >
                                          Next &nbsp;{" "}
                                          <i className="fa-solid fa-caret-up"></i>
                                        </button>
                                        {openDropdownIndex === index && (
                                          <div className="absolute bottom-full mb-2 bg-white border border-gray-300 rounded shadow-lg">
                                            <ul className="py-2 px-1 w-[9.5rem]">
                                              <li
                                                className="text-xs px-1 py-1 hover:bg-gray-100 cursor-pointer hover:text-[#0ba1dc]"
                                                onClick={() => {
                                                  setselectedid(
                                                    application._id
                                                  );
                                                  setInterviewModal(true);
                                                }}
                                              >
                                                <i className="fa-solid fa-clipboard-question"></i>
                                                &nbsp; Schedule Interview
                                              </li>
                                              <li
                                                className="text-xs px-1 py-1 hover:bg-gray-100 cursor-pointer hover:text-[#0ba1dc]"
                                                onClick={() =>
                                                  navigate("/chat")
                                                }
                                              >
                                                <i className="fa-regular fa-comment-dots"></i>
                                                &nbsp; Start Chat
                                              </li>
                                              <li
                                                className="text-xs px-1 py-1 hover:bg-gray-100 cursor-pointer hover:text-[#0ba1dc]"
                                                onClick={() =>
                                                  alert("it will not work now")
                                                }
                                              >
                                                <i className="fa-solid fa-user-plus"></i>
                                                &nbsp; Hire
                                              </li>
                                            </ul>
                                          </div>
                                        )}
                                      </div>
                                    )}
                                </div>
                                {application.isrejected && (
                                  <div className="flex justify-end mt-5 mr-10 relative">
                                    <div className="">
                                      <span className="inline-block bg-red-500 text-white px-2 py-2 rounded-md text-xs font-semibold uppercase">
                                        Rejected
                                      </span>
                                    </div>
                                  </div>
                                )}
                                {application.isshortlisted &&
                                  activeTab === "All Applicants" && (
                                    <div className="flex justify-end mt-5 mr-10 relative">
                                      <div className="">
                                        <span className="inline-block bg-green-500 text-white px-2 py-2 rounded-md text-xs font-semibold uppercase">
                                          Shortlisted
                                        </span>
                                      </div>
                                    </div>
                                  )}
                              </div>
                            </div>
                          ))}
                        </>
                      )}
                      {selectedView === "List" && (
                        <div className="w-full">
                          <table className="w-full rounded-[20px]">
                            <thead className="bg-blue-400 text-[16px] text-center lg:text-left rounded-[20px]">
                              <tr>
                                <th className="p-2 text-white text-md text-center font-semibold">
                                  Name
                                </th>
                                <th className="p-2 text-white text-md text-start font-semibold">
                                  Application stage
                                </th>
                                <th className="p-2 text-white text-md text-start font-semibold">
                                  Score Card
                                </th>
                                <th className="p-2 text-white text-md text-center font-semibold">
                                  Applied Date
                                </th>
                                <th className="p-2 text-white text-md text-center font-semibold">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-[16px] bg-[#fff] relative font-[500] text-center lg:text-left">
                              {filterAppl?.map((application, index) => (
                                <tr
                                  key={index}
                                  className={`${
                                    application.isshortlisted ? "" : ""
                                  }
                        ${application.isrejected ? "" : ""}
                        `}
                                >
                                  <td className="p-1 text-gray-700 text-sm text-center font-semibold">
                                    {application?.StudentId?.Name}
                                    <br />
                                    rank: #{application?.rank}
                                  </td>
                                  {application.assessment.length > 0 ? (
                                    <>
                                      <td className="p-1 text-gray-700 text-sm text-center font-semibold">
                                        {application.assessment.map(
                                          (item, i) => (
                                            <React.Fragment key={i}>
                                              <td className="p-2 flex gap-[5px] items-center">
                                                {item?.Round || "Round 1"}
                                              </td>
                                            </React.Fragment>
                                          )
                                        )}
                                      </td>
                                      <React.Fragment>
                                        {application.assessment.map(
                                          (item, assessmentIndex) => (
                                            <React.Fragment
                                              key={assessmentIndex}
                                            >
                                              <td className="p-1 text-gray-700 text-sm text-center font-semibold flex items-center pt-3 gap-2">
                                                <ProgressBar
                                                  completed={
                                                    item?.scorePercentage || 0
                                                  }
                                                  bgColor="#6f34f5"
                                                  color="#e6f3ff"
                                                  height="10px"
                                                  customLabel="."
                                                  width="70px"
                                                />
                                                {item?.scorePercentage ||
                                                  "0.00"}
                                                %
                                              </td>
                                            </React.Fragment>
                                          )
                                        )}
                                      </React.Fragment>
                                    </>
                                  ) : (
                                    <React.Fragment>
                                      <td className="p-2 text-[#5956e9]">
                                        Round 1
                                      </td>
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

                                  <td className="p-1 text-gray-700 text-sm text-center font-semibold">
                                    {formatDate(application?.createdAt)}
                                  </td>
                                  <td className="relative cursor-pointer p-1 text-gray-700 text-sm text-center font-semibold pl-3">
                                    <BsThreeDotsVertical
                                      onClick={() => (index) => {
                                        setOpenIndex(
                                          index === openIndex ? null : index
                                        );
                                      }}
                                    />
                                    {openIndex === index && (
                                      <div className="absolute bg-white w-[120px] right-[0px] z-10 top-[36px] h-[146px] shadow-lg rounded-[10px] font-[500] text-[11px] p-2 flex flex-col justify-center items-start pl-[8px]">
                                        <p
                                          className="hover:text-blue-600 text-[12px]"
                                          onClick={() => openSideBar(index)}
                                        >
                                          Notes
                                        </p>
                                        <p className="hover:text-blue-700 text-[12px]">
                                          Hiring Pipeline
                                        </p>
                                        <p className="hover:text-blue-700 text-[12px]">
                                          Send
                                        </p>
                                        <p className="hover:text-blue-700 text-[12px]">
                                          Share
                                        </p>
                                        <p className="hover:text-blue-700 text-[12px]">
                                          Request
                                        </p>
                                        <p className="hover:text-blue-700 text-[12px]">
                                          Drop
                                        </p>
                                        <p className="hover:text-blue-700 text-[12px]">
                                          Delete
                                        </p>
                                      </div>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
            <div className="w-1/4 border rounded p-1 overflow-y-auto">
              <FilterScreen setFilterData={setFilterData} />
            </div>
          </div>
        </div>
        <CreateJob
          isOpen={interviewModal}
          onClose={() => setInterviewModal(false)}
          Interviewdata={Interviewdetail}
          setInterviewdata={setInterviewdata}
          Scheduleinterviewapi={Scheduleinterviewapi}
        />
        <JobSidebar
          side1={side1}
          openSideBar={openSideBar}
          selectedApplication={AllApplication[openIndex]}
        />
        {openIndex !== null && (
          <div
            className="fixed inset-0 z-1 bg-black opacity-0 cursor-pointer"
            onClick={() => {
              setOpenIndex(null);
            }}
          />
        )}
      </div>
    </>
  );
};

const CreateJob = ({
  isOpen,
  onClose,
  Interviewdata,
  setInterviewdata,
  Scheduleinterviewapi,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 relative">
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-semibold text-black">
            Schedule Interview
          </p>
          <button
            onClick={() => onClose()}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close Modal"
          >
            <img
              src="/images/cancel-svgrepocom.svg"
              className="w-8 h-8"
              alt="Close"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="type">
              Interview Type
            </label>
            <select
              id="type"
              onChange={(e) =>
                setInterviewdata({ ...Interviewdata, type: e.target.value })
              }
              name="type"
              value={Interviewdata.type}
              className="bg-gray-100 w-full rounded-md py-2 px-3"
            >
              <option value="">Select Type</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="date">
              Date
            </label>
            <input
              id="date"
              className="bg-gray-100 w-full rounded-md py-2 px-3"
              type="date"
              value={Interviewdata.date}
              onChange={(e) =>
                setInterviewdata({ ...Interviewdata, date: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="time">
              Time
            </label>
            <input
              id="time"
              className="bg-gray-100 w-full rounded-md py-2 px-3"
              type="time"
              value={Interviewdata.Time}
              onChange={(e) =>
                setInterviewdata({ ...Interviewdata, Time: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Address if applicable"
              disabled={
                Interviewdata.type === "online" || Interviewdata.type === ""
              }
              className="bg-gray-100 w-full rounded-md py-2 px-3"
              value={Interviewdata.location}
              onChange={(e) =>
                setInterviewdata({ ...Interviewdata, location: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="notes">
              Notes
            </label>
            <input
              id="notes"
              type="text"
              placeholder="Notes for Student"
              className="bg-gray-100 w-full rounded-md py-2 px-3"
              value={Interviewdata.notes}
              onChange={(e) =>
                setInterviewdata({ ...Interviewdata, notes: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => Scheduleinterviewapi()}
            className="bg-black rounded-md px-6 py-2 text-white text-lg font-medium"
          >
            Schedule Interview
          </button>
        </div>
      </div>
    </div>
  );
};
export default DashboardTwoPage;
