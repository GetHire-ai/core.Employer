import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Text } from "components";
import "react-circular-progressbar/dist/styles.css";
import { GetApi, PostApi } from "Api/Api_Calling";
import JobSidebar from "pages/Jobs/JobsApplication/JobSidebar";

const TwentytwoPage = () => {
  const [AllShortlistedStudents, setAllShortlistedStudents] = useState([]);
  const [AllinterviewSchedule, setAllinterviewSchedule] = useState([]);
  const [completedInterview, setCompletedInterview] = useState([]);
  const [AllApplicationonhold, setAllApplicationonhold] = useState([]);
  const [side1, setSide1] = useState(false);
  const [Selected, setSelected] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  const openSideBar = (index = null, data) => {
    setSide1(index !== null ? true : !side1);
    setOpenIndex(index);
    setSelected(data);
  };

  const GetAllShortlistedStudents = async () => {
    try {
      const res = await GetApi("api/CompanyRoutes/GetAllShortlistedStudents");
      setAllShortlistedStudents(
        res.data.data.filter((data) => !data?.isinterviewScheduled)
      );
      setCompletedInterview(
        res.data.data.filter(
          (data) => data.isinterviewScheduled && data.isInterviewcompleted
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllinterviewSchedule = async () => {
    try {
      const res = await GetApi("api/CompanyRoutes/GetAllUpcomingInterviews");
      setAllinterviewSchedule(
        res.data.data.filter(
          (data) => data.isinterviewScheduled && !data.isInterviewcompleted
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllapplicationonhold = async () => {
    try {
      const Getalljobs = await GetApi("api/CompanyRoutes/Resultonpending");
      setAllApplicationonhold(Getalljobs?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [AllSelectedStudents, setAllSelectedStudents] = useState([]);

  const GetAllSelectedStudents = async () => {
    try {
      const Getalljobs = await GetApi(
        "api/CompanyRoutes/GetAllSelectedStudents"
      );
      setAllSelectedStudents(Getalljobs?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [AllJobs, setAllJobs] = useState([]);

  const GetAllJobs = async () => {
    try {
      const Getalljobs = await GetApi(
        "api/CompanyRoutes/GetAllJobswithApplication"
      );
      setAllJobs(Getalljobs?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllShortlistedStudents();
    GetAllinterviewSchedule();
    GetAllapplicationonhold();
    GetAllSelectedStudents();
    GetAllJobs();
  }, []);

  const hire = async (data) => {
    try {
      const res = await GetApi(
        `api/CompanyRoutes/selectAndAddStudentToTeam/${data._id}`
      );
      if (res.ok) {
        alert("Candidate Selected for job successfully !");
        GetAllShortlistedStudents();
        GetAllinterviewSchedule();
        GetAllapplicationonhold();
        GetAllSelectedStudents();
        GetAllJobs();
      }
    } catch (error) {
      alert("Error in Selected for job !");
      console.log(error);
    }
  };

  const [countdowns, setCountdowns] = useState([]);

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date().getTime();
      const updatedCountdowns = AllinterviewSchedule.map((interview) => {
        const interviewDate = new Date(
          `${interview.interviewSchedule.date}T${interview.interviewSchedule.Time}`
        ).getTime();
        const distance = interviewDate - now;

        if (distance < 0) return "Interview Passed";

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
      });
      setCountdowns(updatedCountdowns);
    };

    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [AllinterviewSchedule]);

  const updateInterview = async (id) => {
    try {
      let res = await GetApi(
        `api/companyroutes/interview/interviewcomplete/${id}`
      );
      GetAllShortlistedStudents();
      GetAllinterviewSchedule();
      GetAllapplicationonhold();
      GetAllSelectedStudents();
      GetAllJobs();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center font-[Poppins] w-full">
        <div className="flex p-[16px] w-full">
          <Text className="text-[24px] text-black" size="txtPoppinsMedium24">
            Overview
          </Text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] px-[30px] w-full">
          <div className="bg-white flex items-center justify-between rounded-xl w-full p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="flex flex-col w-1/2">
              <div className="flex items-start">
                <div className="bg-[#f1edfe] h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-inner transition-transform duration-300 hover:scale-110">
                  {/* Add any icon or text inside this circle */}
                </div>
              </div>
              <div className="mt-4 text-gray-800 font-semibold text-lg">
                Shortlisted
              </div>
              <div className="mt-2 text-gray-900 font-bold text-2xl">
                {AllShortlistedStudents?.length}
              </div>
            </div>
            <div className="relative h-[80px] w-[80px] flex items-center justify-center bg-white rounded-full shadow-md p-2 transition-transform duration-300 hover:scale-110">
              <CircularProgressbar
                value={28}
                strokeWidth={10}
                styles={buildStyles({
                  trailColor: "#E6E6FA",
                  pathColor: "#6A5ACD",
                  pathTransitionDuration: 0.5,
                })}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="bg-white flex items-center justify-between rounded-xl w-full p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <div className="flex flex-col w-1/2">
              <div className="flex items-start">
                <div className="bg-[#f1edfe] h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-inner transition-transform duration-300 hover:scale-110">
                  {/* Add any icon or text inside this circle */}
                </div>
              </div>
              <div className="mt-4 text-gray-800 font-semibold text-lg">
                Pending Interviews
              </div>
              <div className="mt-2 text-gray-900 font-bold text-2xl">
                {AllinterviewSchedule?.length}
              </div>
            </div>
            <div className="relative h-[80px] w-[80px] flex items-center justify-center bg-white rounded-full shadow-md p-2 transition-transform duration-300 hover:scale-110">
              <CircularProgressbar
                value={28}
                strokeWidth={10}
                styles={buildStyles({
                  trailColor: "#E6E6FA",
                  pathColor: "#6A5ACD",
                  pathTransitionDuration: 0.5,
                })}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="bg-white flex items-center justify-between rounded-xl w-full p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            {/* Icon Circle */}
            <div className="flex flex-col w-1/2">
              <div className="flex items-start">
                <div className="bg-[#e7f6f2] h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-inner transition-transform duration-300 hover:scale-110">
                  {/* Add any icon or text inside this circle */}
                </div>
              </div>
              <div className="mt-4 text-gray-800 font-semibold text-lg">
                Result Awaited
              </div>
              <div className="mt-2 text-gray-900 font-bold text-2xl">
                {AllApplicationonhold?.length}
              </div>
            </div>

            {/* Circular Progress Bar */}
            <div className="relative h-[80px] w-[80px] flex items-center justify-center bg-white rounded-full shadow-md p-2 transition-transform duration-300 hover:scale-110">
              <CircularProgressbar
                value={28}
                strokeWidth={10}
                styles={buildStyles({
                  trailColor: "#E6E6FA",
                  pathColor: "#6A5ACD",
                  pathTransitionDuration: 0.5,
                })}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="bg-white flex items-center justify-between rounded-xl w-full p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            {/* Left Section */}
            <div className="flex flex-col w-full items-start">
              <div className="bg-[#fff4e4] h-[52px] w-[52px] rounded-full flex items-center justify-center shadow-inner transition-transform duration-300 hover:scale-110">
                {/* Add any icon or text inside this circle */}
              </div>
              <div className="mt-[11px] text-black font-[500] text-[14px]">
                Selected
              </div>
              <div className="mt-[5px] text-black font-[700] text-[20px]">
                {AllSelectedStudents?.length}
              </div>
            </div>
            {/* Circular Progress Bar */}
            <div className="relative h-[75px] w-[95px] flex items-center justify-center bg-white rounded-full shadow-md p-2 transition-transform duration-300 hover:scale-110">
              <CircularProgressbar
                value={28}
                strokeWidth={10}
                styles={buildStyles({
                  trailColor: "#E6E6FA",
                  pathColor: "#ff8600",
                  pathTransitionDuration: 0.5,
                })}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        <div className="flex gap-[16px] px-[30px] py-[16px] w-full">
          <div className="bg-white w-3/5 rounded-[20px] shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 font-[poppins]">
              <div className="mb-2 flex justify-between items-center h-10">
                <h1 className="font-[500] text-[20px] text-gray-800">
                  Line Up
                </h1>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-300 text-[12px] rounded-[20px]">
                    <tr>
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Job</th>
                      <th className="text-left p-2">Status</th>
                      <th className="text-left p-2">view</th>
                    </tr>
                  </thead>
                  <tbody className="text-[12px] font-[500] text-center">
                    {AllShortlistedStudents.map((student, index) => (
                      <tr
                        key={index}
                        className="mt-[6px] bg-[#f6f9fe] hover:bg-gray-200 transition-colors duration-200"
                      >
                        <td className="p-2 text-left">
                          {student?.StudentId?.Name}
                        </td>
                        <td className="p-2 text-left">
                          {student?.JobId?.positionName}{" "}
                        </td>
                        <td className="p-2 text-left">{student?.status} </td>
                        <td className="p-2 text-left">
                          <button onClick={() => openSideBar(index, student)}>
                            view
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="bg-white w-3/6 rounded-[20px] shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 font-[poppins]">
              <div className="mb-2 flex justify-between items-center h-10">
                <h1 className="font-[500] text-[20px] text-gray-800">
                  Upcoming Interviews
                </h1>
              </div>
              <div className="overflow-x-auto">
                <div className="w-full p-2">
                  {AllinterviewSchedule.map((upcomingInterview, index) => (
                    <div
                      key={index}
                      className="text-[12px] bg-[#f6f9fe] font-[500] flex justify-between items-center p-3 rounded-xl"
                    >
                      <div className="flex gap-2 justify-start items-center w-3/4">
                        <img
                          src={upcomingInterview?.StudentId?.Image}
                          className="w-[53px] h-[53px] rounded-full"
                          alt=""
                        />
                        <div>
                          <span className="text-lg text-gray-600">
                            {" "}
                            {upcomingInterview?.StudentId?.Name}
                          </span>
                          <br />
                          <span className="text-md text-gray-500">
                            {upcomingInterview?.JobId?.positionName}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center text-red-500 text-md w-1/3">
                        <span>
                          {upcomingInterview?.interviewSchedule?.date} -{" "}
                          {upcomingInterview?.interviewSchedule?.Time}
                        </span>
                        {countdowns[index] && <span>{countdowns[index]}</span>}
                        <button
                          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                          onClick={() => updateInterview(upcomingInterview._id)}
                        >
                          complete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-[16px]">
          <h1 className="text-[24px] font-[500]">Completed Interviews</h1>
        </div>
        <div className="w-full font-[500]">
          <div className="overflow-x-auto px-[30px]">
            <table className="w-full rounded-[20px] ">
              <thead className="bg-blue-400 text-[16px] rounded-[20px]">
                <tr>
                  <th className="text-left font-[500] p-2">Candidate Id</th>
                  <th className="text-left font-[500] p-2">Candidate Name</th>
                  <th className="text-left font-[500] p-2">interview Date</th>
                  <th className="text-left font-[500] p-2">Job Role</th>
                  <th className="text-left font-[500] p-2">Status</th>
                  <th className="text-left font-[500] p-2">Notes</th>
                  <th className="font-[500] p-2">Actions</th>
                </tr>
              </thead>
              <tbody className="text-[12px] bg-[#fff] font-[500] text-center hover:bg-gray-200">
                {completedInterview.map((interviewInProcess, index) => (
                  <tr key={index}>
                    <td className="p-2 text-left ">
                      {interviewInProcess._id?.slice(0, 10)}
                    </td>
                    <td className="p-2 text-left  flex items-center justify-start gap-[5px]">
                      <img
                        src={interviewInProcess?.StudentId?.Image}
                        className="w-[28px] h-[28px]"
                        alt=""
                      />
                      {interviewInProcess?.StudentId?.Name}
                    </td>
                    <td className="p-2 text-left ">
                      {interviewInProcess?.interviewSchedule?.date}
                    </td>
                    <td className="p-2 text-left">
                      {interviewInProcess?.JobId?.positionName}
                    </td>
                    <td className="p-2 text-left text-[#31c65b]">
                      {interviewInProcess.status}
                    </td>
                    <td className=" p-2 text-left pl-5">
                      {interviewInProcess?.interviewSchedule?.notes}
                    </td>
                    <td className=" p-2">
                      <button
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                        onClick={() => hire(interviewInProcess)}
                      >
                        Select For Job
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {side1 && (
        <JobSidebar
          side1={side1}
          openSideBar={openSideBar}
          selectedApplication={Selected}
        />
      )}
    </>
  );
};

export default TwentytwoPage;
