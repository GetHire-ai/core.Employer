import React, { useEffect, useState } from "react";
import { Button, Text } from "components";
import TinyChart from "./TinyChart";
import DoughnutChart from "./DoughnutChart";
import RecentJobPost from "./RecentJobPost";
import UpcomingInterview from "./UpcomingInterview";
import { GetApi, PutApi } from "Api/Api_Calling";
import { useNavigate } from "react-router-dom";
// for importing modal
import Modal from "react-modal";
Modal.setAppElement("#root");

const DashboardThirteenPage = () => {
  const navigate = useNavigate();
  // State for managing visibility of each modal
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);

  // Handlers to open and close modals
  const openModal1 = () => setModalIsOpen1(true);
  const closeModal1 = () => setModalIsOpen1(false);

  const openModal2 = () => setModalIsOpen2(true);
  const closeModal2 = () => setModalIsOpen2(false);

  const openModal3 = () => setModalIsOpen3(true);
  const closeModal3 = () => setModalIsOpen3(false);

  const openModal4 = () => setModalIsOpen4(true);
  const closeModal4 = () => setModalIsOpen4(false);

  const [AllJobs, setAllJobs] = useState([]);
  const [AllApplication, setAllApplication] = useState([]);
  const [AllinterviewSchedule, setAllinterviewSchedule] = useState([]);
  const [AllApplicationonhold, setAllApplicationonhold] = useState([]);
  const [AllShortlistedStudents, setAllShortlistedStudents] = useState([]);
  const [AllSelectedStudents, setAllSelectedStudents] = useState([]);
  const [AllRejectedStudents, setAllRejectedStudents] = useState([]);

  const GetAllJobs = async () => {
    try {
      const response = await GetApi("api/CompanyRoutes/GetAllJobs");
      setAllJobs(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const calculatePercentage = (data) => {
    const today = new Date(); // Current date
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 2); // 2 days ago from today

    // Filter data based on createdAt date within the last 2 days
    const newDataLastTwoDays = data.filter((item) => {
      const createdAtDate = new Date(item.createdAt);
      return createdAtDate >= twoDaysAgo && createdAtDate < today;
    });

    // Calculate percentage of new data compared to total data count
    const percentage = (newDataLastTwoDays.length / data.length) * 100;

    // Return the calculated percentage
    return Math.floor(percentage);
  };

  const GetAllApplication = async () => {
    try {
      const response = await GetApi(
        "api/CompanyRoutes/GetAllApplicationofacompany"
      );
      setAllApplication(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllinterviewSchedule = async () => {
    try {
      const response = await GetApi(
        "api/CompanyRoutes/GetAllUpcomingInterviews"
      );
      setAllinterviewSchedule(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllShortlistedStudents = async () => {
    try {
      const response = await GetApi(
        "api/CompanyRoutes/GetAllShortlistedStudents"
      );
      setAllShortlistedStudents(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllapplicationonhold = async () => {
    try {
      const response = await GetApi("api/CompanyRoutes/Resultonpending");
      setAllApplicationonhold(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllSelectedStudents = async () => {
    try {
      const response = await GetApi("api/CompanyRoutes/GetAllSelectedStudents");
      setAllSelectedStudents(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllRejectedStudents = async () => {
    try {
      const response = await GetApi("api/CompanyRoutes/GetAllRejectedStudents");
      setAllRejectedStudents(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllJobs();
    GetAllApplication();
    GetAllinterviewSchedule();
    GetAllapplicationonhold();
    GetAllShortlistedStudents();
    GetAllSelectedStudents();
    GetAllRejectedStudents();
  }, []);

  useEffect(() => {
    GetAllJobs();
    GetAllApplication();
    GetAllinterviewSchedule();
    GetAllapplicationonhold();
    GetAllShortlistedStudents();
    GetAllSelectedStudents();
    GetAllRejectedStudents();
  }, []);

  const totalApplicants = AllApplication.length;
  const rejectedCount = AllRejectedStudents.length;
  const shortlistedCount = AllShortlistedStudents.length;
  const interviewCount = AllinterviewSchedule.length;
  const hiredCount = AllSelectedStudents.length;

  const doughnutData = [
    rejectedCount,
    shortlistedCount,
    interviewCount,
    hiredCount,
  ];

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
    <div className="w-full min-h-screen relative">
      <InterviewModal
        isOpen={interviewModal}
        onClose={() => setInterviewModal(false)}
        Interviewdata={Interviewdetail}
        setInterviewdata={setInterviewdata}
        Scheduleinterviewapi={Scheduleinterviewapi}
      />
      <div className="bg-gray-100 font-[Poppins] w-full">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <Text className="font-semibold text-[24px] md:text-[22px] text-gray-800 pl-[10px]">
            Overview
          </Text>
          <Button
            className="bg-blue-400 hover:bg-blue-500 text-white flex items-center justify-center mr-0 md:mr-[16px] px-[24px] md:px-[38px] py-[10px] md:py-[12px] rounded-lg transition duration-300 shadow-lg hover:shadow-slate-600"
            onClick={() => {
              navigate("/jobcreatemanual");
            }}
          >
            <Text className="text-base font-medium text-[14px] md:text-[16px]">
              Create Job
            </Text>
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full mt-[20px] pl-[26px] pr-[32px] sm:flex-row gap-[30px]">
        <div className="flex flex-col gap-[16px] w-full">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            <div className="bg-white p-[16px] rounded-[4px]">
              <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                Job Posts
              </h1>
              <div>
                <div
                  className="bg-white p-[16px] rounded-[4px] cursor-pointer"
                  onClick={openModal}
                 >
                  <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                    Job Posts
                  </h1>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                        {AllJobs?.length}
                      </p>
                      <p className="text-[#6FCF97] font-[700] font-[Montserrat] text-[20px]">
                        +{calculatePercentage(AllJobs) || 0}%
                      </p>
                    </div>
                    <div className="w-[94px] h-[92px]">
                      <TinyChart />
                    </div>
                  </div>
                </div>
 
                  <Modal
                      isOpen={modalIsOpen1}
                      onRequestClose={closeModal}
                      contentLabel="Job Posts Detail"
                      className="modal fixed inset-0 flex items-center justify-center"
                      overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50"
                    >
                      <div className="bg-white p-8 rounded-xl shadow-2xl w-[400px] max-w-full transition-transform transform scale-90 hover:scale-105 duration-300">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Posts Detail</h2>
                        <p className="text-md text-gray-700 mb-4">
                          Total Job Posts: <span className="font-semibold">{AllJobs?.length}</span>
                        </p>
                        <p className="text-md text-gray-700 mb-4">
                          Percentage Increase: <span className="font-semibold">+{calculatePercentage(AllJobs) || 0}%</span>
                        </p>
                        <div className="w-full h-[200px] mb-6 transition-transform transform scale-90 hover:scale-105 duration-300">
                          <TinyChart />
                        </div>
                        <button
                          onClick={closeModal}
                          className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
                        >
                          Close
                        </button>
                      </div>
                  </Modal>

              </div> 

            </div>


            <div className="bg-white p-[16px] rounded-[4px]">
              <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                Total Application
              </h1>
              <div className="flex items-center justify-between">
                <div className="">
                  <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                    {AllApplication?.length}
                  </p>
                  <p className="text-[#6FCF97] font-[700] font-[Montserrat] text-[20px]">
                    +{calculatePercentage(AllApplication) || 0}%
                  </p>
                </div>
                <div className="w-[94px] h-[92px]">
                  <TinyChart />
                </div>
              </div>
            </div>

             
  
 








            <div className="bg-white p-[16px] rounded-[4px]">
              <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                Interview Schedule
              </h1>
              <div className="flex items-center justify-between">
                <div className="">
                  <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                    {AllinterviewSchedule?.length}
                  </p>
                  <p className="text-[#FA976C] font-[700] font-[Montserrat] text-[20px]">
                    +{calculatePercentage(AllinterviewSchedule) || 0}%
                  </p>
                </div>
                <div className="w-[94px] h-[92px]">
                  <TinyChart />
                </div>
              </div>
            </div>


            <div className="bg-white p-[16px] rounded-[4px]">
              <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                Shortlisted
              </h1>  
              <div className="flex items-center justify-between">
                <div className="">
                  <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                    {shortlistedCount}
                  </p>
                  <p className="text-[#6FCF97] font-[700] font-[Montserrat] text-[20px]">
                    +{calculatePercentage(AllShortlistedStudents)|| 0}%
                  </p>
                </div>
                <div className="w-[94px] h-[92px]">
                  <TinyChart />
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]"> */}

          {/* Job Posts Section */}
          {/* <div className="bg-white p-[16px] rounded-[4px]">
                      <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                        Job Posts
                      </h1>
                      <div
                        className="bg-white p-[16px] rounded-[4px] cursor-pointer"
                        onClick={openModal1}
                      >
                        <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                          Job Posts
                        </h1>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                              {AllJobs?.length}
                            </p>
                            <p className="text-[#6FCF97] font-[700] font-[Montserrat] text-[20px]">
                              +{calculatePercentage(AllJobs) || 0}%
                            </p>
                          </div>
                          <div className="w-[94px] h-[92px]">
                            <TinyChart />
                          </div>
                        </div>
                      </div>
                      <Modal
                          isOpen={modalIsOpen1}
                          onRequestClose={closeModal1}
                          contentLabel="Job Posts Detail"
                          className="modal fixed inset-0 flex items-center justify-center"
                          overlayClassName="overlay fixed inset-0 bg-black bg-opacity-60"
                        >
                          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl w-[500px] max-w-full transition-transform transform scale-95 hover:scale-105 duration-300">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Job Posts Detail</h2>
                            <p className="text-lg text-gray-800 mb-4">
                              Total Job Posts: <span className="font-semibold text-gray-900">{AllJobs?.length}</span>
                            </p>
                            <p className="text-lg text-gray-800 mb-4">
                              Percentage Increase: <span className="font-semibold text-green-500">+{calculatePercentage(AllJobs) || 0}%</span>
                            </p>
                            <div className="w-full h-[250px] mb-6 transition-transform transform scale-95 hover:scale-105 duration-300">
                              <TinyChart />
                            </div>
                            <button
                              onClick={closeModal1}
                              className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
                            >
                              Close
                            </button>
                          </div>
                        </Modal>
                    </div> */}

          {/* Total Application Section */}
          {/* <div className="bg-white p-[16px] rounded-[4px]">
                      <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                        Total Application
                      </h1>
                      <div
                        className="bg-white p-[16px] rounded-[4px] cursor-pointer"
                        onClick={openModal2}
                      >
                        <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                          Total Application
                        </h1>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                              {AllApplication?.length}
                            </p>
                            <p className="text-[#6FCF97] font-[700] font-[Montserrat] text-[20px]">
                              +{calculatePercentage(AllApplication) || 0}%
                            </p>
                          </div>
                          <div className="w-[94px] h-[92px]">
                            <TinyChart />
                          </div>
                        </div>
                      </div>
                      <Modal
                        isOpen={modalIsOpen2}
                        onRequestClose={closeModal2}
                        contentLabel="Total Application Detail"
                        className="modal fixed inset-0 flex items-center justify-center"
                        overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50"
                      >
                        <div className="bg-white p-8 rounded-xl shadow-2xl w-[400px] max-w-full transition-transform transform scale-90 hover:scale-105 duration-300">
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">Total Application Detail</h2>
                          <p className="text-md text-gray-700 mb-4">
                            Total Applications: <span className="font-semibold">{AllApplication?.length}</span>
                          </p>
                          <p className="text-md text-gray-700 mb-4">
                            Percentage Increase: <span className="font-semibold">+{calculatePercentage(AllApplication) || 0}%</span>
                          </p>
                          <div className="w-full h-[200px] mb-6 transition-transform transform scale-90 hover:scale-105 duration-300">
                            <TinyChart />
                          </div>
                          <button
                            onClick={closeModal2}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
                          >
                            Close
                          </button>
                        </div>
                      </Modal>
                    </div> */}

          {/* Interview Schedule Section */}
          {/* <div className="bg-white p-[16px] rounded-[4px]">
                      <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                        Interview Schedule
                      </h1>
                      <div
                        className="bg-white p-[16px] rounded-[4px] cursor-pointer"
                        onClick={openModal3}
                      >
                        <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                          Interview Schedule
                        </h1>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                              {AllinterviewSchedule?.length}
                            </p>
                            <p className="text-[#FA976C] font-[700] font-[Montserrat] text-[20px]">
                              +{calculatePercentage(AllinterviewSchedule) || 0}%
                            </p>
                          </div>
                          <div className="w-[94px] h-[92px]">
                            <TinyChart />
                          </div>
                        </div>
                      </div>
                      <Modal
                        isOpen={modalIsOpen3}
                        onRequestClose={closeModal3}
                        contentLabel="Interview Schedule Detail"
                        className="modal fixed inset-0 flex items-center justify-center"
                        overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50"
                      >
                        <div className="bg-white p-8 rounded-xl shadow-2xl w-[400px] max-w-full transition-transform transform scale-90 hover:scale-105 duration-300">
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">Interview Schedule Detail</h2>
                          <p className="text-md text-gray-700 mb-4">
                            Total Interviews Scheduled: <span className="font-semibold">{AllinterviewSchedule?.length}</span>
                          </p>
                          <p className="text-md text-gray-700 mb-4">
                            Percentage Increase: <span className="font-semibold">+{calculatePercentage(AllinterviewSchedule) || 0}%</span>
                          </p>
                          <div className="w-full h-[200px] mb-6 transition-transform transform scale-90 hover:scale-105 duration-300">
                            <TinyChart />
                          </div>
                          <button
                            onClick={closeModal3}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
                          >
                            Close
                          </button>
                        </div>
                      </Modal>
                    </div> */}

          {/* Shortlisted Section */}
          {/* <div className="bg-white p-[16px] rounded-[4px]">
                      <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                        Shortlisted
                      </h1>
                      <div
                        className="bg-white p-[16px] rounded-[4px] cursor-pointer"
                        onClick={openModal4}
                      >
                        <h1 className="text-[16px] font-[Montserrat] text-[#333333] font-[400] ">
                          Shortlisted
                        </h1>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-[700] text-[28px] font-[Montserrat] text-[#666666] mt-[12px] mb-[32px]">
                              {shortlistedCount}
                            </p>
                            <p className="text-[#6FCF97] font-[700] font-[Montserrat] text-[20px]">
                              +{calculatePercentage(AllShortlistedStudents) || 0}%
                            </p>
                          </div>
                          <div className="w-[94px] h-[92px]">
                            <TinyChart />
                          </div>
                        </div>
                      </div>
                      <Modal
                        isOpen={modalIsOpen4}
                        onRequestClose={closeModal4}
                        contentLabel="Shortlisted Detail"
                        className="modal fixed inset-0 flex items-center justify-center"
                        overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50"
                      >
                        <div className="bg-white p-8 rounded-xl shadow-2xl w-[400px] max-w-full transition-transform transform scale-90 hover:scale-105 duration-300">
                          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shortlisted Detail</h2>
                          <p className="text-md text-gray-700 mb-4">
                            Total Shortlisted: <span className="font-semibold">{shortlistedCount}</span>
                          </p>
                          <p className="text-md text-gray-700 mb-4">
                            Percentage Increase: <span className="font-semibold">+{calculatePercentage(AllShortlistedStudents) || 0}%</span>
                          </p>
                          <div className="w-full h-[200px] mb-6 transition-transform transform scale-90 hover:scale-105 duration-300">
                            <TinyChart />
                          </div>
                          <button
                            onClick={closeModal4}
                            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-300"
                          >
                            Close
                          </button>
                        </div>
                      </Modal>
                    </div> */}

          {/* </div>  */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            {/* Job Posts */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate("/jobs")}
            >
              <h1 className="text-xl font-semibold text-gray-800">Job Posts</h1>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-700 mb-1">
                    {AllJobs?.length}
                  </p>
                  <p className="text-green-500 text-xl font-semibold">
                    +{calculatePercentage(AllJobs) || 0}%
                  </p>
                </div>
                <div className="w-24 h-24">
                  <TinyChart />
                </div>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen1}
              onRequestClose={closeModal1}
              contentLabel="Job Posts Detail"
              className="modal fixed inset-0 flex items-center justify-center"
              overlayClassName="overlay fixed inset-0 bg-black bg-opacity-60"
            >
              <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-3xl shadow-2xl w-[500px] max-w-full transition-transform transform scale-95 hover:scale-105 duration-300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Job Posts Detail
                </h2>
                <p className="text-lg text-gray-800 mb-4">
                  Total Job Posts:{" "}
                  <span className="font-semibold text-gray-900">
                    {AllJobs?.length}
                  </span>
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  Percentage Increase:{" "}
                  <span className="font-semibold text-green-500">
                    +{calculatePercentage(AllJobs) || 0}%
                  </span>
                </p>
                <div className="w-full h-[250px] mb-6 transition-transform transform scale-95 hover:scale-105 duration-300">
                  <TinyChart />
                </div>
                <button
                  onClick={closeModal1}
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </Modal>
            {/* Total Application */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              // onClick={openModal2}
              onClick={() => navigate("/all-applications")}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                Total Application
              </h1>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-700 mb-1">
                    {AllApplication?.length}
                  </p>
                  <p className="text-teal-500 text-xl font-semibold">
                    +{calculatePercentage(AllApplication) || 0}%
                  </p>
                </div>
                <div className="w-24 h-24">
                  <TinyChart />
                </div>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen2}
              onRequestClose={closeModal2}
              contentLabel="Total Application Detail"
              className="modal fixed inset-0 flex items-center justify-center"
              overlayClassName="overlay fixed inset-0 bg-black bg-opacity-60"
            >
              <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-green-50 p-8 rounded-3xl shadow-2xl w-[500px] max-w-full transition-transform transform scale-95 hover:scale-105 duration-300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Total Application Detail
                </h2>
                <p className="text-lg text-gray-800 mb-4">
                  Total Applications:{" "}
                  <span className="font-semibold text-gray-900">
                    {AllApplication?.length}
                  </span>
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  Percentage Increase:{" "}
                  <span className="font-semibold text-teal-500">
                    +{calculatePercentage(AllApplication) || 0}%
                  </span>
                </p>
                <div className="w-full h-[250px] mb-6 transition-transform transform scale-95 hover:scale-105 duration-300">
                  <TinyChart />
                </div>
                <button
                  onClick={closeModal2}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </Modal>

            {/* Interview Schedule */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              // onClick={openModal3}
              onClick={() => navigate("/onboarding")}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                Interview Schedule
              </h1>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-700 mb-1">
                    {AllinterviewSchedule?.length}
                  </p>
                  <p className="text-orange-500 text-xl font-semibold">
                    +{calculatePercentage(AllinterviewSchedule) || 0}%
                  </p>
                </div>
                <div className="w-24 h-24">
                  <TinyChart />
                </div>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen3}
              onRequestClose={closeModal3}
              contentLabel="Interview Schedule Detail"
              className="modal fixed inset-0 flex items-center justify-center"
              overlayClassName="overlay fixed inset-0 bg-black bg-opacity-60"
            >
              <div className="bg-gradient-to-r from-orange-100 via-red-100 to-yellow-100 p-8 rounded-3xl shadow-2xl w-[500px] max-w-full transition-transform transform scale-95 hover:scale-105 duration-300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Interview Schedule Detail
                </h2>
                <p className="text-lg text-gray-800 mb-4">
                  Total Interviews:{" "}
                  <span className="font-semibold text-gray-900">
                    {AllinterviewSchedule?.length}
                  </span>
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  Percentage Increase:{" "}
                  <span className="font-semibold text-orange-500">
                    +{calculatePercentage(AllinterviewSchedule) || 0}%
                  </span>
                </p>
                <div className="w-full h-[250px] mb-6 transition-transform transform scale-95 hover:scale-105 duration-300">
                  <TinyChart />
                </div>
                <button
                  onClick={closeModal3}
                  className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </Modal>

            {/* Shortlisted */}
            <div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              // onClick={openModal4}
              onClick={() => navigate("/onboarding")}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                OnBoarding
              </h1>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-700 mb-1">
                    {shortlistedCount}
                  </p>
                  <p className="text-green-500 text-xl font-semibold">
                    +{calculatePercentage(AllShortlistedStudents) || 0}%
                  </p>
                </div>
                <div className="w-24 h-24">
                  <TinyChart />
                </div>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen4}
              onRequestClose={closeModal4}
              contentLabel="Shortlisted Detail"
              className="modal fixed inset-0 flex items-center justify-center"
              overlayClassName="overlay fixed inset-0 bg-black bg-opacity-60"
            >
              <div className="bg-gradient-to-r from-green-50 via-blue-50 to-teal-50 p-8 rounded-3xl shadow-2xl w-[500px] max-w-full transition-transform transform scale-95 hover:scale-105 duration-300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Shortlisted Detail
                </h2>
                <p className="text-lg text-gray-800 mb-4">
                  Total Shortlisted:{" "}
                  <span className="font-semibold text-gray-900">
                    {shortlistedCount}
                  </span>
                </p>
                <p className="text-lg text-gray-800 mb-4">
                  Percentage Increase:{" "}
                  <span className="font-semibold text-green-500">
                    +{calculatePercentage(AllShortlistedStudents) || 0}%
                  </span>
                </p>
                <div className="w-full h-[250px] mb-6 transition-transform transform scale-95 hover:scale-105 duration-300">
                  <TinyChart />
                </div>
                <button
                  onClick={closeModal4}
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>

          <div className="bg-white row-span-2 rounded-[4px] pt-[16px] pl-[16px] pr-[10px] pb-[25px] ">
            <RecentJobPost />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] w-full">
          <div className="bg-white rounded-[20px] py-[14px] px-[13px] ">
            <UpcomingInterview
              AllShortlistedStudents={AllShortlistedStudents}
              openModal={(id) => {
                setInterviewModal(true);
                setselectedid(id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardThirteenPage;

const InterviewModal = ({
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
