import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { useNavigate, Link } from "react-router-dom";
import { GetApi, DeleteApi, PostApi } from "Api/Api_Calling";
import moment from "moment";
import "./modal.css";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const navigate = useNavigate();
  const jobImg = "images/img_image41_31x44.png";
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [AllJobs, setAllJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [link, setlink] = useState("");
  const [loading, setloading] = useState(true);
  let company = JSON.parse(localStorage.getItem("companydata"));
  const [activeTab, setActiveTab] = useState("Active Jobs");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setOpenSnackbar(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  function handleModal1() {
    setModal1(!modal1);
  }
  function handleModal2() {
    setModal2(!modal2);
    setModal1(false);
  }
  const handleOverlayClick1 = (e) => {
    if (e.target === e.currentTarget) {
      handleModal1();
    }
  };
  const handleButtonClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const handleToggle = (id) => {
    setLinkModal(!linkModal);
    setlink(`https://get-hire-student.vercel.app/blank/JobViewDetails/${id}`);
    // if (null) {
    // } else {
    //   setlink(null);
    // }
  };

  const GetAllJobs = async () => {
    try {
      const Getalljobs = await GetApi(
        "api/CompanyRoutes/GetAllJobswithApplication"
      );
      setAllJobs(Getalljobs?.data?.data);
      const filtd = Getalljobs?.data?.data.filter((job) => job?.JobActive);
      console.log(filtd);
      setFilteredJobs(filtd);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const shareLinkedin = async (id) => {
    try {
      const res = await PostApi(`api/CompanyRoutes/share-linkedin/${id}`, {});
      console.log(res);
      toast.success("posted on linkedin", { autoClose: 1000 });
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
      toast.error("error in post on linkedin", { autoClose: 1000 });
    }
  };

  const deleteJob = async (id) => {
    try {
      setloading(true);
      const res = await DeleteApi(`api/CompanyRoutes/DeleteJob`, id);
      GetAllJobs();
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    } finally {
      setloading(true);
    }
  };

  const ActiveInactiveJobs = async (id) => {
    try {
      const active = await GetApi(`api/CompanyRoutes/ActiveInactiveJob/${id}`);
      GetAllJobs();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAllJobs();
  }, []);

  const showActive = () => {
    let filtd;
    if (activeTab === "Active Jobs") {
      filtd = AllJobs?.filter((job) => job?.JobActive);
    }
    if (activeTab === "InActive Jobs") {
      filtd = AllJobs?.filter((job) => job?.JobActive === false);
    }
    setFilteredJobs(filtd);
  };

  useEffect(() => {
    showActive();
  }, [activeTab]);

  const ViewJob = async (job) => {
    console.log("Navigate");
    navigate(`/jobsSummary/${job?._id}`);
  };

  return (
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
      <>
        <div className="text-gray-600 text-xl font-semibold w-full p-2  mb-3">
          Hello {company?.firstName} {company?.lastName} Welcome to your
          Dashboard !
        </div>
        <div className="bg-[#f3f6f9] flex flex-col font-[poppins] px-[10px] items-center justify-start w-full">
          <div className="flex flex-col md:flex-row md:gap-5 md:justify-start gap-[14px] w-full">
            <div className="flex justify-center md:items-center md:justify-start w-full">
              <Text
                className="md:mt-0 mt-[3px] text-[24px] font-[500] text-black sm:text-xl"
                size="txtPoppinsMedium24"
              >
                All Jobs
              </Text>
              <div className="flex justify-center items-center ml-10 gap-10">
                {["Active Jobs", "InActive Jobs"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={` text-[15px] font[500] cursor-pointer ${
                      activeTab === tab
                        ? " text-blue-300 border-b border-blue-400 duration-500"
                        : " hover:text-blue-900   "
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-between">
              <div
                className="cursor-pointer flex justify-center items-center font-medium w-full md:w-[167px] h-[40px] md:ml-0 rounded-lg text-sm border  text-[#9469cc] bg-gradient-to-r from-[#e0f2ff] to-[#f0faff]  hover:text-fuchsia-800 hover:bg-blue-700 hover:border-[#8534db18] hover:shadow-slate-500  shadow-xl transition duration-500 ease-in-out"
                onClick={() => navigate("/search-candidate")}
              >
                <i className="fa-solid fa-magnifying-glass mr-2"></i>
                Search Candidate
              </div>

              <div
                onClick={handleModal1}
                className="cursor-pointer flex justify-center items-center font-[500] w-full md:w-[167px] h-[40px] md:ml-[0] rounded-[8px] text-[14px] text-[#9469cc] bordertext-[#9469cc] bg-gradient-to-r from-[#e0f2ff] to-[#f0faff]  hover:text-fuchsia-800 hover:bg-blue-700 hover:border-[#8534db18] hover:shadow-slate-500  shadow-xl transition duration-500 ease-in-out"
              >
                <i className="fa-solid fa-plus mr-2"></i>
                Post New Job
              </div>
            </div>
          </div>
          {filteredJobs?.map((job, index) => (
            <div className="w-full border rounded-2xl flex justify-center items-center p-6 m-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col gap-6 justify-center items-start w-1/3 border-r p-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {job?.positionName}
                  </h2>
                  <p className="text-sm text-gray-600 mt-2">
                    Posted {moment(job?.createdAt).fromNow()} ago
                  </p>
                </div>
                <div className="flex flex-wrap w-full text-gray-600">
                  <span className="w-1/2 mt-3 flex items-center">
                    <i className="fa-solid fa-indian-rupee-sign mr-2"></i> 3-6
                    LPA
                  </span>
                  <span className="w-1/2 mt-3 flex items-center">
                    <i className="fa-solid fa-briefcase mr-2"></i> {job?.minExp}
                    -{job?.maxExp} Years
                  </span>
                  <span className="w-1/2 mt-3 flex items-center">
                    <i className="fa-solid fa-location-dot mr-2"></i>{" "}
                    {job?.location}
                  </span>
                  <span className="w-1/2 mt-3 flex items-center">
                    <i className="fa-solid fa-hourglass-start mr-2"></i> on hold
                  </span>
                </div>

                <div className="mt-3">
                  <p className="text-gray-600 text-sm">Share On:</p>
                  <div className="flex gap-4 mt-3">
                    <button
                      className="text-gray-500 hover:text-blue-600 hover:scale-150 transition-transform duration-300"
                      onClick={() => {
                        if (job?.postedLinkedin) {
                          toast.error("Job is already Posted on linkedin", {
                            autoClose: 1000,
                          });
                        } else {
                          shareLinkedin(job?._id);
                        }
                      }}
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 hover:scale-150 transition-transform duration-300">
                      <i className="fa-brands fa-facebook"></i>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 hover:scale-150 transition-transform duration-300">
                      <i className="fa-brands fa-twitter"></i>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 hover:scale-150 transition-transform duration-300">
                      <i className="fa-solid fa-link"></i>
                    </button>
                    <button className="text-gray-500 hover:text-blue-600 hover:scale-150 transition-transform duration-300">
                      <i className="fa-solid fa-qrcode"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 justify-center items-start w-3/4 p-4 relative">
                {openIndex === index && (
                  <div className="absolute right-[-1rem] top-8 bg-white shadow-xl flex flex-col items-start justify-center p-2 rounded-md w-[122px] z-10">
                    <div className="flex flex-col items-start justify-center w-full">
                      <div
                        className="text-sm font-medium text-black cursor-pointer hover:text-blue-500 transition duration-150"
                        onClick={() => ViewJob(job)}
                      >
                        View Job
                      </div>
                      <div
                        className="text-sm font-medium text-black cursor-pointer hover:text-blue-500 transition duration-150 mt-1"
                        onClick={() => {
                          navigate("/edit-job", { state: { job } });
                        }}
                      >
                        Edit
                      </div>
                      {!job.JobActive && (
                        <div
                          className="text-sm font-medium text-black cursor-pointer hover:text-blue-500 transition duration-150 mt-1"
                          onClick={() => ActiveInactiveJobs(job._id)}
                        >
                          Active
                        </div>
                      )}
                      <div
                        className="text-sm font-medium text-black cursor-pointer hover:text-blue-500 transition duration-150 mt-1"
                        onClick={() => navigate("/settings")}
                      >
                        Setting
                      </div>
                      <div
                        className="text-sm font-medium text-black cursor-pointer hover:text-blue-500 transition duration-150 mt-1"
                        onClick={() => alert("Don't know where to route")}
                      >
                        Report
                      </div>
                      {job.JobActive && (
                        <div
                          className="text-sm font-medium text-black cursor-pointer hover:text-blue-500 transition duration-150 mt-1"
                          onClick={() => ActiveInactiveJobs(job._id)}
                        >
                          Close
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="w-full flex justify-between items-start mb-5">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Applications
                  </h2>
                  <div
                    className="cursor-pointer px-2"
                    onClick={() => handleButtonClick(index)}
                  >
                    <img
                      className="h-5"
                      src="images/img_group23860.svg"
                      alt="group23862"
                    />
                  </div>
                </div>

                {/* <div className="flex justify-between w-full text-gray-600 mb-5 h-14  divide-x divide-gray-300">
                  <div
                    className="cursor-pointer -mr-7 px-6"
                    // onClick={() => navigate(`/jobsApplication/${job._id}`)}
                    onClick={() =>
                      navigate(`/jobsApplicationManager2/${job._id}`)
                    }
                  >
                    <span className="border-orange-500 py-3">
                      {job?.totalApplicationCount}
                    </span>
                    <h2 className="mt-2">Applications</h2>
                  </div>
                  <div className="-mr-5 px-6">
                    <span className="border-blue-500 py-3">
                      {job?.shortlistedApplicationCount}
                    </span>
                    <h2 className="mt-2">In Process</h2>
                  </div>
                  <div className="px-6 mr-2">
                    <span className="border-green-500 py-3">
                      {job?.selectedStudentCount}
                    </span>
                    <h2 className="mt-2">Hired</h2>
                  </div>
                </div> */}
                {/* <div className="flex justify-between w-full text-gray-600 mb-5 h-14">
                      <div
                        className="flex flex-col items-center cursor-pointer px-6"
                        onClick={() => navigate(`/jobsApplicationManager2/${job._id}`)}
                      >
                        <span className="text-2xl font-semibold text-orange-500">
                          {job?.totalApplicationCount}
                        </span>
                        <h2 className="mt-1 border-t-2 border-orange-500 w-full text-center">
                          Applications
                        </h2>
                      </div>
                      <div className="flex flex-col items-center px-6">
                        <span className="text-2xl font-semibold text-blue-500">
                          {job?.shortlistedApplicationCount}
                        </span>
                        <h2 className="mt-1 border-t-2 border-blue-500 w-full text-center">
                          In Process
                        </h2>
                      </div>
                      <div className="flex flex-col items-center px-6">
                        <span className="text-2xl font-semibold text-green-500">
                          {job?.selectedStudentCount}
                        </span>
                        <h2 className="mt-1 border-t-2 border-green-500 w-full text-center">
                          Hired
                        </h2>
                      </div>
                    </div> */}
                {/* <div className="flex justify-between w-full text-gray-600 mb-5 h-14">
                    <div
                      className="flex flex-col items-center cursor-pointer px-6"
                      onClick={() => navigate(`/jobsApplicationManager2/${job._id}`)}
                      >
                      <span className="text-xl font-semibold">{job?.totalApplicationCount}</span>
                      <div className="w-full border-t-2 border-orange-500 mt-1" />
                      <h2 className="text-sm mt-1">Applications</h2>
                    </div>
                    <div className="flex flex-col items-center px-6">
                      <span className="text-xl font-semibold">{job?.shortlistedApplicationCount}</span>
                      <div className="w-full border-t-2 border-blue-500 mt-1" />
                      <h2 className="text-sm mt-1">In Process</h2>
                    </div>
                    <div className="flex flex-col items-center px-6">
                      <span className="text-xl font-semibold">{job?.selectedStudentCount}</span>
                      <div className="w-full border-t-2 border-green-500 mt-1" />
                      <h2 className="text-sm mt-1">Hired</h2>
                    </div>
                  </div> */}
                <div className="flex justify-between w-full text-gray-600 mb-5">
                  <div
                    className="flex flex-col items-center cursor-pointer px-6"
                    onClick={() =>
                      navigate(`/jobsApplicationManager2/${job._id}`)
                    }
                  >
                    <span className="text-xl font-medium">
                      {job?.totalApplicationCount}
                    </span>
                    <div className="w-32 border-t-2 border-orange-500 mt-2" />
                    <h2 className="text-sm mt-4">Applications</h2>
                  </div>
                  <div className="flex flex-col items-center px-6">
                    <span className="text-xl font-medium">
                      {job?.shortlistedApplicationCount}
                    </span>
                    <div className="w-32 border-t-2 border-blue-500 mt-2" />
                    <h2 className="text-sm mt-4">In Process</h2>
                  </div>
                  <div className="flex flex-col items-center px-6">
                    <span className="text-xl font-medium">
                      {job?.selectedStudentCount}
                    </span>
                    <div className="w-32 border-t-2 border-green-500 mt-2" />
                    <h2 className="text-sm mt-4">Hired</h2>
                  </div>
                </div>

                <div className="w-full flex justify-end items-center gap-4">
                  {!job?.JobActive && (
                    <div className="text-gray-400 px-5 border-b border-gray-600 border-dashed">
                      This Job is not Active
                    </div>
                  )}
                  <Link
                    to={`/smartsourcing/${job._id}`}
                    className="border border-blue-400 rounded-lg px-4 py-2 text-blue-500 hover:bg-blue-400 hover:scale-110 hover:text-white transition duration-200"
                  >
                    Smart Sourcing
                  </Link>
                  <button
                    className="border border-blue-400 rounded-lg px-4 py-2 text-blue-500 hover:bg-blue-400 hover:scale-110 hover:text-white transition duration-150"
                    onClick={() =>
                      navigate(`/jobsApplicationManager2/${job._id}`)
                    }
                  >
                    Application Manager
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredJobs.length === 0 && !loading && (
            <div className="text-center w-[100%]">
              No Job/Internship Posted By You
            </div>
          )}
        </div>
        <CreateJob
          isOpen={modal1}
          onOverlayClick={handleOverlayClick1}
          onClose={handleModal1}
          openAnotherModal={handleModal2}
          AllJobs={AllJobs}
        />
      </>
      <Modal
        open={linkModal}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "1px transperent #000",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share this Job
          </Typography>
          <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
            <Typography
              id="modal-modal-description"
              sx={{ flex: 1, overflowWrap: "break-word" }}
              className="text-xs"
            >
              {link}
            </Typography>
            <IconButton onClick={handleCopyClick} sx={{ ml: 2 }}>
              <CopyAllIcon />
            </IconButton>
          </Box>

          <div className="flex gap-4 mt-3">
            <button>
              <i className="fa-brands fa-linkedin text-gray-500"></i>
            </button>
            <button>
              <i className="fa-brands fa-facebook text-gray-500"></i>
            </button>
            <button>
              <i className="fa-brands fa-twitter text-gray-500"></i>
            </button>
            <button>
              <i className="fa-solid fa-link text-gray-500"></i>
            </button>
            <button>
              <i className="fa-solid fa-qrcode"></i>
            </button>
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DashboardPage;

const CreateJob = ({ isOpen, onClose, onOverlayClick, AllJobs }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const gocreate = () => {
    navigate("/jobcreatemanual");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onOverlayClick}>
      <div className="bg-white p-6 rounded-[30px] shadow-md w-[96%] md:w-[80%] lg:w-[981px] overflow-y-auto">
        <div className="flex justify-between">
          <div className="lg:w-[95%] items-center flex justify-center">
            <p className="text-[32px] text-black font-[600]">Create a job</p>
          </div>
          <div className="lg:w-[5%] flex justify-end hover:cursor-pointer">
            <img
              onClick={onClose}
              src="/images/cancel-svgrepocom.svg"
              className="w-[40px] h-[40px]"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#f6f9fe] mt-[29px] rounded-[30px] p-[30px] flex flex-col md:flex-row justify-center items-center gap-[30px]">
          <div className="bg-white flex justify-center hover:border-blue-700 items-center flex-col gap-[17px] p-[24px] rounded-[12px] border-[1px] hover:cursor-pointer hover:shadow-slate-500 shadow-xl hover:shadow-xl transition-shadow duration-300">
            <img
              src="/images/manual.svg"
              alt=""
              className="w-[88px] h-[88px] transition-transform transform hover:scale-105"
            />
            <p className="text-[#4a90e2] text-[17px] font-[600]">
              Post Job With AI
            </p>
          </div>
          <Button
            onClick={gocreate}
            className="bg-white flex justify-center items-center flex-col gap-[17px] p-[24px] rounded-[12px] border-[1px] hover:shadow-slate-500 shadow-xl transition-shadow duration-300 hover:border-blue-700"
          >
            <img
              src="/images/template.svg"
              alt=""
              className="w-[88px] h-[88px] transition-transform transform hover:scale-105"
            />
            <p className="text-[#9b9b9b] text-[17px] font-[600] hover:text-blue-700">
              Post New Job
            </p>
          </Button>
          <Button
            onClick={openModal}
            className="bg-white flex justify-center items-center flex-col gap-[17px] p-[24px] rounded-[12px] border-[1px] hover:shadow-slate-500 shadow-xl transition-shadow duration-300 hover:border-blue-700"
          >
            <img
              src="/images/template.svg"
              alt=""
              className="w-[88px] h-[88px] transition-transform transform hover:scale-105"
            />
            <p className="text-[#9b9b9b] text-[17px] font-[600] hover:text-blue-700">
              Post Job With Prev Template
            </p>
          </Button>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-transparent backdrop-filter backdrop-blur-sm">
          <div className="modal-content w-[96%] md:w-[80%] lg:w-[981px] bg-blue-100 min-h-[50vh] rounded-lg shadow-lg p-6">
            <div className="flex justify-between">
              <div className="lg:w-[95%] items-center flex justify-center">
                <p className="text-[32px] text-black font-[600]">
                  Select Templete
                </p>
              </div>
              <div className="lg:w-[5%] flex justify-end">
                <img
                  onClick={closeModal}
                  src="/images/cancel-svgrepocom.svg"
                  className="w-[40px] h-[40px]"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-[#f6f9fe] mt-[29px] rounded-[30px] p-[30px] flex flex-col gap-3 justify-center items-center">
              <div className="flex flex-col justify-center items-start gap-3">
                {AllJobs?.map((job) => (
                  <div
                    key={job._id}
                    className={`p-2 px-4 rounded-xl cursor-pointer ${
                      selectedId === job._id && "bg-blue-200"
                    }`}
                    onClick={() => setSelectedId(job._id)}
                  >
                    {job.positionName}
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-end">
                <button
                  onClick={() => navigate(`/jobcreatemanual/${selectedId}`)}
                  className="font-[600] px-5 h-[40px] md:ml-[0] rounded-[8px] text-[16px] border border-[#6d9bcd]  text-[#6d9bcd] hover:bg-blue-500 hover:text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
