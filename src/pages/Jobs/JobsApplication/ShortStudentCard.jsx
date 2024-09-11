import React, { useEffect, useState, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import JobSidebar from "pages/Jobs/JobsApplication/JobSidebar";
import { GetApi } from "Api/Api_Calling";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ShortStudentCard = ({ job, index, openModal }) => {
  const navigate = useNavigate();
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [side1, setSide1] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [skillsResult, setSkillsResult] = useState("");
  const [aiResult, setAiResult] = useState("");
  const [skillAverage, setSkillAverage] = useState(0);

  const getResult = async () => {
    try {
      let res = await GetApi(
        `api/testRoutes/result/bystudentid/${job?.StudentId._id}/${job?.JobId._id}`
      );
      setSkillsResult(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAiResult = async () => {
    try {
      let res = await GetApi(
        `api/testRoutes/result/aitestresult/bystudentid/${job.StudentId._id}/${job?.JobId._id}`
      );
      setAiResult(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (job != undefined) {
      getResult();
      getAiResult();
    }
  }, [job]);

  let skillMcqAverage = () => {
    if (!job?.StudentId?.Skill_Set || job.StudentId.Skill_Set.length === 0) {
      console.log("No skills available");
      return;
    }

    let total = 0;
    job.StudentId.Skill_Set.forEach((skill) => {
      total += skill?.score || 0;
    });
    let averageSkillScore = total / job.StudentId.Skill_Set.length;
    let assessmentScore = skillsResult?.scorePercentage || 0;
    let weightedAverage = 0.4 * averageSkillScore + 0.6 * assessmentScore;
    setSkillAverage(weightedAverage);
    return weightedAverage;
  };

  useEffect(() => {
    skillMcqAverage();
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const openSideBar = (index = null) => {
    setSide1(index !== null ? true : !side1);
    setOpenIndex(index);
  };

  //  ---------------
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenDropdownIndex(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-center items-start w-full p-4 rounded-lg ${
          index % 2 === 0 ? "bg-gray-100" : "bg-white"
        }`}
        ref={dropdownRef}
      >
        <img
          src={job?.StudentId?.Image}
          className="w-[5rem] rounded-full mr-2"
          alt=""
        />
        <div className="w-full">
          <div className="w-full flex gap-10 justify-between">
            <div className="w-full">
              <h2 className="text-xl font-semibold text-gray-800">
                {job?.StudentId?.Name}
              </h2>
              <h2 className="text-md font-semibold text-gray-600">
                {job?.JobId?.positionName}
              </h2>
              <h2 className="text-md font-semibold text-gray-600">
                {job?.JobId?.location}
              </h2>
            </div>
            <div style={{ width: 85, height: 85 }}>
              <CircularProgressbar
                value={skillAverage || 0}
                text={`${skillAverage || 0}%`}
              />
              <div>Ai Score</div>
            </div>
          </div>
          <div className="mt-5 flex justify-start items-center w-full gap-5">
            <button
              className="text-white bg-[#0ba1dc] hover:scale-105 hover:shadow-slate-500 hover:bg-blue-600 py-2 px-3 m-1 font-semibold rounded-md transition duration-300 shadow-md flex items-center justify-center"
              onClick={() => openSideBar(index)}
            >
              Review
            </button>

            <div className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="bg-[#0ba1dc] text-white hover:scale-105 hover:shadow-xl border-[#0ba1dc] hover:bg-blue-600 py-2 px-4 m-1 font-semibold rounded-md transition duration-300 shadow-md flex items-center justify-center"
              >
                Approve <i className="fa-solid fa-caret-up ml-2"></i>
              </button>

              {openDropdownIndex === index && (
                <div className="absolute bottom-full mb-2 bg-white border border-gray-300 rounded shadow-lg z-10 w-40">
                  <ul className="py-1 px-2 space-y-1">
                    <li
                      className="flex items-center text-xs px-2 py-1 bg-white border border-gray-200 hover:bg-gray-100 cursor-pointer hover:text-[#0ba1dc] transition duration-150 rounded"
                      onClick={() => {
                        if (job.isinterviewScheduled) {
                          toast.error(
                            "interview already scheduled for this application",
                            { autoClose: 2000 }
                          );
                          setOpenDropdownIndex(null);
                          return;
                        }
                        openModal(job._id);
                        setOpenDropdownIndex(null);
                      }}
                    >
                      <i className="fa-solid fa-clipboard-question mr-2  "></i>
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
                      onClick={() => {
                        navigate("/onboarding-process", {
                          state: {
                            jobId: job.JobId._id,
                            studentId: job.StudentId._id,
                            companyId: job.CompanyId,
                          },
                        });
                      }}
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
      </div>
      <JobSidebar
        side1={side1}
        openSideBar={openSideBar}
        selectedApplication={job}
      />
    </>
  );
};

export default ShortStudentCard;
