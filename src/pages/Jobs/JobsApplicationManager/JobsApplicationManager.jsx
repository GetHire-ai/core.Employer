import React, { useEffect, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { GetApi, GetApiwithouttoken, PutApi } from "Api/Api_Calling";
import { Button } from "components";

const JobsApplicationManager = () => {
  const { id } = useParams();
  const Id = id;

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
  const [AllShortlistedApplication, setAllShortlistedApplication] = useState(
    []
  );
  const [AllrejectedApplication, setAllrejectedApplication] = useState([]);
  const [AllScheduleInterviewApplication, setAllScheduleInterviewApplication] =
    useState([]);
  const [loading, setLoading] = useState(true);

  const [Jobsummary, setJobsummary] = useState({});

  const GetJobDetail = async () => {
    try {
      const Getjobdata = await GetApiwithouttoken(
        `api/AdminRoutes/GetAJobs/${id}`
      );
      console.log(Getjobdata?.data);
      setJobsummary(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAllApplication = async () => {
    try {
      const Getjobdata = await GetApi(
        `api/CompanyRoutes/GetAllStudentsofajob/${id}`
      );
      // console.log(Getjobdata?.data)
      setAllApplication(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAllShortlistedApplication = async () => {
    try {
      const Getjobdata = await GetApi(
        `api/CompanyRoutes/GetAllshortlistStudentsofajob/${id}`
      );
      // console.log(Getjobdata?.data)
      setAllShortlistedApplication(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const GetAllrejectedApplication = async () => {
    try {
      const Getjobdata = await GetApi(
        `api/CompanyRoutes/GetAllRejectedStudentsofajob/${id}`
      );
      // console.log(Getjobdata?.data)
      setAllrejectedApplication(Getjobdata?.data?.data);
      setLoading(false);
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

  useEffect(() => {
    GetJobDetail();
    GetAllApplication();
    GetAllShortlistedApplication();
    GetAllrejectedApplication();
    GetAllScheduleInterviewApplication();
  }, [id]);

  useEffect(() => {
    setAllApplicatant(AllApplication);
  }, [AllApplication]);

  const [Selectedslide, setSelectedslide] = useState("AllCandidates");
  const [AllApplicatant, setAllApplicatant] = useState([]);

  useEffect(() => {
    if (Selectedslide === "AllCandidates") {
      setAllApplicatant(AllApplication);
    }
    if (Selectedslide === "Shortlisted") {
      setAllApplicatant(AllShortlistedApplication);
    }
    if (Selectedslide === "Rejected") {
      setAllApplicatant(AllrejectedApplication);
    }
    if (Selectedslide === "SchedulingInterview") {
      setAllApplicatant(AllScheduleInterviewApplication);
    }
    if (Selectedslide === "HrInterview") {
      setAllApplicatant(AllApplication);
    }
  }, [Selectedslide]);

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

  const [modal1, setModal1] = useState(false);
  const [selectedid, setselectedid] = useState("");

  const Openmodel = (id) => {
    setselectedid(id);
    setModal1(true);
  };

  function handleModal1() {
    setModal1(!modal1);
  }

  const [Interviewdetail, setInterviewdata] = useState({
    type: "",
    date: "",
    Time: "",
    location: "",
    notes: "",
  });

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
      console.log(response.data);
      handleModal1();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
        <div className="flex flex-col gap-[32px] mt-[32px] w-full">
          <div className="flex gap-[9px]">
            <p className="text-[20px] font-[500]">Total Candidates</p>
            <div className="bg-[#1c212d] text-white flex justify-center items-center w-[31px] h-[31px] rounded-[50%]">
              {AllApplication?.length}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[30px] flex-col md:flex-row justify-center overflow-x-auto items-center w-full">
              <div
                style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
                className="flex flex-col rounded-[6px] mb-[16px] shadow-lg bg-white w-full"
                onClick={() => {
                  setSelectedslide("AllCandidates");
                }}
              >
                <div className="bg-[#9fc184] rounded-tl-[6px] rounded-tr-[6px] h-[4px]"></div>
                <div
                  className={`flex justify-between items-center px-[7px] cursor-pointer ${
                    Selectedslide === "AllCandidates" ? "bg-blue-200" : ""
                  } `}
                >
                  <p className="text-[12px] px-[7px] py-[13px] font-[500]">
                    New Candidates
                  </p>
                  <div className="bg-[#eceef0] text-[#B2B2B2] w-[31px] h-[31px] text-[16px] font-[500] flex justify-center items-center rounded-[50%]">
                    {AllApplication?.length}
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col rounded-[6px] mb-[16px] shadow-lg bg-white w-full"
                style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
                onClick={() => {
                  setSelectedslide("Shortlisted");
                }}
              >
                <div className="bg-[#386C68] rounded-tl-[6px] rounded-tr-[6px] h-[4px]"></div>
                <div
                  className={`flex justify-between items-center px-[7px] cursor-pointer ${
                    Selectedslide === "Shortlisted" ? "bg-blue-200" : ""
                  } `}
                >
                  <p className="text-[12px] px-[7px] py-[13px] font-[500] cursor-pointer">
                    Shortlisted
                  </p>
                  <div className="bg-[#eceef0] text-[#B2B2B2] w-[31px] h-[31px] text-[16px] font-[500] flex justify-center items-center rounded-[50%]">
                    {AllShortlistedApplication?.length}
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
                className="flex flex-col mb-[16px] rounded-[6px] shadow-lg bg-white w-full"
                onClick={() => {
                  setSelectedslide("Rejected");
                }}
              >
                <div className="bg-[#FF8504] rounded-tl-[6px] rounded-tr-[6px] h-[4px]"></div>
                <div
                  className={`flex justify-between items-center px-[7px] cursor-pointer ${
                    Selectedslide === "Rejected" ? "bg-blue-200" : ""
                  } `}
                >
                  <p className="text-[12px] px-[7px] py-[13px] font-[500]">
                    Rejected
                  </p>
                  <div className="bg-[#eceef0] text-[#B2B2B2] w-[31px] h-[31px] text-[16px] font-[500] flex justify-center items-center rounded-[50%]">
                    {AllrejectedApplication?.length}
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
                className="flex flex-col rounded-[6px] mb-[16px] shadow-lg bg-white w-full"
                onClick={() => {
                  setSelectedslide("SchedulingInterview");
                }}
              >
                <div
                  className={`flex justify-between items-center px-[7px] cursor-pointer ${
                    Selectedslide === "SchedulingInterview" ? "bg-blue-200" : ""
                  } `}
                >
                  <p className="text-[12px] px-[7px] py-[13px] font-[500]">
                    Scheduling Interview
                  </p>
                  <div className="bg-[#eceef0] text-[#B2B2B2] w-[31px] h-[31px] text-[16px] font-[500] flex justify-center items-center rounded-[50%]">
                    {AllScheduleInterviewApplication?.length}
                  </div>
                </div>
              </div>
              <div
                style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
                className="flex flex-col mb-[16px] rounded-[6px] shadow-lg bg-white w-full"
                onClick={() => {
                  setSelectedslide("HrInterview");
                }}
              >
                <div className="bg-[#FFD835] rounded-tl-[6px] rounded-tr-[6px] h-[4px]"></div>
                <div
                  className={`flex justify-between items-center px-[7px] cursor-pointer ${
                    Selectedslide === "HrInterview" ? "bg-blue-200" : ""
                  } `}
                >
                  <p className="text-[12px] px-[7px] py-[13px] font-[500]">
                    Hr Interview
                  </p>
                  <div className="bg-[#eceef0] text-[#B2B2B2] w-[31px] h-[31px] text-[16px] font-[500] flex justify-center items-center rounded-[50%]">
                    0
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center overflow-x-auto gap-[30px] w-full">
              {AllApplicatant.map((application) => (
                <div className="bg-white w-full p-[10px] flex flex-col gap-[10px] border-[0.5px] border-[#e6e6e6] rounded-[6px]">
                  <div
                    className="flex gap-[10px] cursor-pointer"
                    onClick={
                      Selectedslide === "Shortlisted"
                        ? () => Openmodel(application?._id)
                        : undefined
                    }
                  >
                    <img
                      src={application?.StudentId?.Image}
                      className="w-[42px] h-[42px] rounded-[50%]"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px] font-[400]">
                        {application?.StudentId?.Name}
                      </p>
                      <p className="text-[14px] font-[400]">
                        {application?.StudentId?.Email}
                      </p>
                    </div>
                  </div>
                  <div className="flex border-[#e0e0e0] border-t-[1px] pt-[7px] justify-between items-center">
                    <div className="flex justify-center items-center">
                      <IoIosStar color="#fca120" size={"9px"} />
                      <IoIosStar color="#fca120" size={"9px"} />
                      <IoIosStar color="#fca120" size={"9px"} />
                      <IoIosStar color="#fca120" size={"9px"} />
                      <IoIosStar color="#fca120" size={"9px"} />
                    </div>
                    <div className="flex justify-center items-center gap-[3px]">
                      <MdOutlineWatchLater size={"11px"} color="#5956e9" />
                      <p className="text-[11px] font-[400] text-[#7e7e7e]">
                        {formatDate(application?.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CreateJob
        isOpen={modal1}
        onClose={handleModal1}
        Interviewdata={Interviewdetail}
        setInterviewdata={setInterviewdata}
        Scheduleinterviewapi={Scheduleinterviewapi}
      />
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

export default JobsApplicationManager;
