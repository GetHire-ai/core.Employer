import React, { useEffect, useState } from "react";
import { JobsApplicationEmployeeDeta } from "../JobsLinks";
import { Button } from "components";
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from "react-icons/io";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import HiringPipline from "./HiringPipline";
import { GetApi, PostApi, PutApi } from "Api/Api_Calling";

// importing cirsular bar
import { CircularProgressbar } from "react-circular-progressbar";
// importing the logo's
import { SiGooglemessages } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function JobSidebar({ side1, openSideBar, selectedApplication }) {
  const navigate = useNavigate();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(false);
  const [buttonN, setButtonN] = useState("Details");
  const [skillsResult, setSkillsResult] = useState("");
  const [aiResult, setAiResult] = useState("");

  // this is for we have to take the avg value from the child
  const [skillAverage, setSkillAverage] = useState(0);
  const handleSkillAverage = (average) => {
    setSkillAverage(average);
  };

  let getResult = async () => {
    try {
      let res = await GetApi(
        `api/testRoutes/result/bystudentid/${selectedApplication?.StudentId._id}/${selectedApplication?.JobId._id}`
      );
      setSkillsResult(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  let getAiResult = async () => {
    try {
      let res = await GetApi(
        `api/testRoutes/result/aitestresult/bystudentid/${selectedApplication.StudentId._id}/${selectedApplication?.JobId._id}`
      );
      setAiResult(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (selectedApplication != undefined) {
      getResult();
      getAiResult();
    }
  }, [selectedApplication]);
  const toggleDropdown = () => {
    setOpenDropdownIndex(!openDropdownIndex);
  };

  // interview modal
  const [interviewModal, setInterviewModal] = useState(false);
  const [selectedid, setselectedid] = useState("");
  const [loading, setLoading] = useState(true);
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
      console.log(response);
      setInterviewModal(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="w-full">
        <div
          className="overlay"
          style={side1 ? { right: 0 } : { right: "100%" }}
          onClick={openSideBar}
        ></div>

        <div
          className="sidebar-list"
          style={side1 ? { right: 0 } : { right: "-60%" }}
        >
          <div
            className="w-[29px] absolute top-[50%] h-[29px] left-[-2%] flex justify-center items-center mr-[-10px] hover:cursor-pointer"
            onClick={() => openSideBar()}
          >
            <img src="/images/sidebar-arrow.svg" alt="" />
          </div>

          <div className="p-[27px] flex flex-col lg:flex-row gap-[20px] lg:gap-0 justify-between items-center w-full">
            <div className="flex gap-[6px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={selectedApplication?.StudentId?.Image}
                  className="w-[64px] h-[64px] rounded-[50%]"
                  alt=""
                />
                <div className="w-[49px] bg-white justify-center items-center gap-[6px] h-[16px] flex rounded-[17px]">
                  <IoIosStar size={"9px"} color="#fca120" />
                  <p className="text-[9px] font-[400]">4.0</p>
                </div>
              </div>
              <div>
                <div className="flex gap-[6px] justify-center items-center">
                  <p className="text-[20px] font-[500]">
                    {selectedApplication?.StudentId?.Name}
                  </p>
                  <div className="border-[1px] rounded-[3px] bg-[#e6f3f2] text-center border-[#53c9a2] w-[47px] h-[17px]">
                    <p className="text-[12px] font-[400] text-[#53c9a3]">
                      Active
                    </p>
                  </div>
                </div>
                <p className="text-[12px] font-[400] text-[#7a7a7a]">
                  Design Team. UI Designer
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transition-transform transform hover:scale-105"
                    // onClick={}
                  >
                    <SiGooglemessages className="text-[24px]" />
                  </button>
                  <button
                    className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transition-transform transform hover:scale-105"
                    // onClick={}
                  >
                    <IoIosMail className="text-[24px]" />
                  </button>
                  <button
                    className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transition-transform transform hover:scale-105"
                    // onClick={}
                  >
                    <IoCallOutline className="text-[24px]" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center">
                  <CircularProgressbar
                    value={skillAverage}
                    text={`${skillAverage}%`}
                    styles={{
                      path: { stroke: "#4F46E5", strokeWidth: "6px" },
                      text: {
                        fill: "#4F46E5",
                        fontSize: "18px",
                        fontWeight: "bold",
                      },
                    }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-600 mt-2">
                  Average Assessment
                  <br /> Score
                </p>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="flex gap-[8px]">
                <IoIosArrowBack
                  className="w-[29px] h-[29px] bg-white rounded-[50%] hover:cursor-pointer"
                  color="#5956e9"
                  width={"5.8px"}
                />
                <IoIosArrowForward
                  className="w-[29px] h-[29px] bg-white rounded-[50%] hover:cursor-pointer"
                  color="#5956e9"
                  width={"5.8px"}
                />
              </div>
            </div>
          </div>

          <div className="bg-white w-full flex justify-between items-center">
            <div className="text-[14px] border-b-[2px] border-[#e8e8e8] px-[49px] py-[10px] lg:py-0 font-[500] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-between items-center text-[#9b9b9b] w-full ">
              {JobsApplicationEmployeeDeta.map((e) => {
                return (
                  <>
                    <Button
                      onClick={() => setButtonN(e?.name)}
                      key={e?.name}
                      className={`${
                        buttonN === e?.name
                          ? "  lg:border-[#5956e9] text-[#5956e9] font-[Poppins] font-[600] text-[14px] lg:py-[15px] lg:border-b-[3px]"
                          : "font-[600] text-[14px] font-[Poppins]   hover:text-blue-600 hover:scale-110 duration-300"
                      }`}
                    >
                      {e?.name}
                    </Button>
                  </>
                );
              })}
              <div className="relative inline-block">
                <button
                  onClick={() => toggleDropdown()}
                  className="bg-[#0ba1dc] text-white border-[#0ba1dc] rounded-md py-4 px-3 font-medium text-xs flex items-center gap-1 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0ba1dc]"
                >
                  Approve <i className="fa-solid fa-caret-up text-sm"></i>
                </button>

                {openDropdownIndex && (
                  <div className="absolute bottom-full mb-2 bg-white border border-gray-300 rounded shadow-lg z-10 w-40 transform -translate-x-20">
                    <ul className="py-1 px-2 space-y-1">
                      <li
                        className="flex items-center text-xs px-2 py-1 bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer hover:text-[#0ba1dc] transition duration-150 rounded"
                        onClick={() => {
                          if (selectedApplication.isinterviewScheduled) {
                            toast.error(
                              "interview already scheduled for this application",
                              { autoClose: 2000 }
                            );
                            setOpenDropdownIndex(null);
                            return;
                          }
                          setInterviewModal(true);
                          setselectedid(selectedApplication?._id);
                          setOpenDropdownIndex(null);
                        }}
                      >
                        <i className="fa-solid fa-clipboard-question mr-2"></i>
                        Schedule Interview
                      </li>
                      <li
                        className="flex items-center text-xs px-2 py-1 bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer hover:text-[#0ba1dc] transition duration-150 rounded"
                        onClick={() => navigate("/chat")}
                      >
                        <i className="fa-regular fa-comment-dots mr-2"></i>
                        Start Chat
                      </li>
                      <li
                        className="flex items-center text-xs px-2 py-1 bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer hover:text-[#0ba1dc] transition duration-150 rounded"
                        onClick={() => alert("It will not work now")}
                      >
                        <i className="fa-solid fa-user-plus mr-2"></i>
                        Hire
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {buttonN === "Details" && (
            <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] ">Basic Information</p>
                  </div>
                </div>
                <div className="flex py-[17px] px-[26px] justify-between lg:gap-[158px]">
                  <div className=" flex flex-col gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Name
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Name}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Source
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        Sourced
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Application Stage
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        Round 1
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Email
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Email}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Phone
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Number}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Website
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Website}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] ">
                      Educational Information
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 py-[17px] px-[26px] gap-[45px]">
                  <div className="flex flex-col gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Current job Title
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {
                          selectedApplication?.StudentId?.JobDetails[0]
                            ?.Designation
                        }
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Expected Salary
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Expected_Salary}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Experience in years
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Experience}
                      </p>
                    </div>
                    <div className="flex-wrap flex">
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Additional Info
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Additional_Info}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col w-full gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Highest Qualification held
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.highestQualification}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Current Salary
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Current_Salary}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Joining Date
                      </p>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                        {selectedApplication?.StudentId?.Joining_Date}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                        Skill Set
                      </p>
                      <div className="flex gap-[7px] flex-wrap">
                        {selectedApplication?.StudentId?.Skill_Set.map(
                          (skill, index) => (
                            <p
                              key={index}
                              className="text-[11px] rounded-[12px] px-[6px] py-[3px] bg-[#c8daf9] font-[400]"
                            >
                              {skill.Skill}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {buttonN === "Resume" && (
            <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
              <p className="text-[14px] font-[600]">Resume</p>
              <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={selectedApplication?.Custom_resume}
                    plugins={[defaultLayoutPlugin]}
                  />
                </Worker>
              </div>
            </div>
          )}
          {buttonN === "Ai ScoreCard" && (
            <HiringPipline
              aiResult={aiResult}
              skillsResult={skillsResult}
              profile={selectedApplication}
              // this below is the props that passed by HiringPipline
              onSkillAverage={handleSkillAverage}
            />
          )}
          <InterviewModal
            isOpen={interviewModal}
            onClose={() => setInterviewModal(false)}
            Interviewdata={Interviewdetail}
            setInterviewdata={setInterviewdata}
            Scheduleinterviewapi={Scheduleinterviewapi}
          />
        </div>
      </div>
    </>
  );
}

export default JobSidebar;

const InterviewModal = ({
  isOpen,
  onClose,
  Interviewdata,
  setInterviewdata,
  Scheduleinterviewapi,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-90 flex justify-center items-center">
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
