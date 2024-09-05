import { Img } from "components";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { FiAlignRight } from "react-icons/fi";
import ChatModal from "components/ChatBox/ChatModal";
import { GetApi } from "Api/Api_Calling";

// importing database logo
import { BsDatabase } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const Sidebar = () => {
  const path = useLocation();
  const Navigate = useNavigate();
  const pathName = path?.pathname;
  const [chatModal, setChatModal] = useState(false);
  const [interviewApplication, setInterviewApplication] = useState(false);
  const handleInterviewApplication = () => {
    setInterviewApplication(!interviewApplication);
  };
  const [newHireApplication, setNewHireApplication] = useState(false);
  const handleNewHireApplication = () => {
    setNewHireApplication(!newHireApplication);
  };
  const [balance, setBalance] = useState(0);
  const [toggelNavbar, setToggleNavbar] = useState(false);
  const handleToggelNavbar = () => {
    setToggleNavbar(!toggelNavbar);
  };

  const toggleRefInterviews = useRef(null);
  const toggleRefNewHire = useRef(null);
  const toggleRefNavbar = useRef(null);

  const getBalance = async () => {
    try {
      let res = await GetApi(`api/companyroutes/wallet/balance`);
      setBalance(res.data.data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
    const handleClickOutsidelinkHire = (event) => {
      if (
        toggleRefNewHire.current &&
        !toggleRefNewHire.current.contains(event.target)
      ) {
        setNewHireApplication(false);
      }
    };
    const handleClickOutsidelinkInterview = (event) => {
      if (
        toggleRefInterviews.current &&
        !toggleRefInterviews.current.contains(event.target)
      ) {
        setInterviewApplication(false);
      }
    };
    const handleClickOutside = (event) => {
      if (
        toggleRefNavbar.current &&
        !toggleRefNavbar.current.contains(event.target)
      ) {
        setToggleNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsidelinkHire);
    document.addEventListener("mousedown", handleClickOutsidelinkInterview);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsidelinkHire);
      document.removeEventListener(
        "mousedown",
        handleClickOutsidelinkInterview
      );
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div
        style={{
          minWidth: "80px",
          backgroundColor: "white",
          display: isCollapsed ? "none" : "",
        }}
      ></div>
      <div
        className="text-gray-900 md:m-0 p-4 flex justify-start md:flex-col items-center md:items-start md:gap-2 overflow-x-auto w-full bg-white"
        style={{
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          width: isCollapsed ? "80px" : "220px",
          transition: "width 0.5s ease, opacity 0.3s ease",
          position: isCollapsed ? "" : "fixed",
          minHeight: isCollapsed ? "" : "100vh",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
      >
        <div className="flex justify-between w-full font-semibold text-2xl">
          <div className="flex gap-1 cursor-pointer"
           onClick={()=>Navigate('/')} >
            <Img
              className={`w-[120px] mb-3`}
              src={
                // "https://gethire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg" ||
                "https://get-hire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
              }
              alt="logo"
            />
          </div>
          <FiAlignRight
            size={30}
            onClick={handleToggelNavbar}
            className="md:hidden cursor-pointer "
          />
          <FiAlignRight
            size={30}
            onClick={toggleSidebar}
            className="sm:hidden cursor-pointer"
          />
        </div>
        <div className="hidden md:flex-col md:flex md:w-full">
          <Link
            className={`flex justify- items-center ${
              pathName === "/" ? "bg-[#0ba1dc] text-white" : "text-gray-600"
            }
            ${!isCollapsed ? " justify-between " : " justify-center "}
            rounded-[8px] p-2 mb-3`}
            to="/"
          >
            <div
              className={`flex justify-center items-center font-[Poppins] font-[500] text-[14px] gap-[14px]`}
            >
              <i className="fa-solid fa-house"></i>
              {!isCollapsed && "Home"}
            </div>
            {!isCollapsed && <MdKeyboardArrowRight />}
          </Link>
          <Link
            className={`flex justify-between items-center h-10 ${
              pathName === "/jobs" ? "bg-[#0ba1dc] text-white" : "text-gray-600"
            }
            ${
              !isCollapsed ? " justify-between " : " justify-center "
            } rounded p-2 mb-3`}
            to="/jobs"
          >
            <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
              <Img
                className="h-6 w-6"
                src="images/img_jobsvgrepocom.svg"
                alt="grid"
              />
              {!isCollapsed && "Jobs"}
            </div>
            {!isCollapsed && <MdKeyboardArrowRight />}
          </Link>
          <div
            ref={toggleRefInterviews}
            className={`flex w-full gap-[20px] flex-col ${
              interviewApplication ? "h-[85px]" : "h-10"
            } ${
              pathName === "/interviews"
                ? "bg-[#0ba1dc] text-white"
                : "text-gray-600"
            } 
            ${!isCollapsed ? " justify-between " : " justify-center "}
            rounded p-2 mb-3`}
          >
            <Link
              onClick={(event) => {}}
              className="flex justify-between items-center"
              to="/interviews"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_interview5svgrepocom.svg"
                  alt="grid"
                />
                {!isCollapsed && "Interviews"}
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  // handleInterviewApplication();
                }}
              >
                {interviewApplication ? (
                  <>{!isCollapsed && <MdKeyboardArrowDown />}</>
                ) : (
                  <>{!isCollapsed && <MdKeyboardArrowRight />}</>
                )}
              </div>
            </Link>
            {/* {!interviewApplication ? null : (
              <div className="flex w-full items-center ml-[30px]">
                <Link
                  to="/interviews-application"
                  className="font-[Poppins] text-[14px] font-[500]"
                >
                  {!isCollapsed && "Application"}
                </Link>
              </div>
            )} */}
          </div>
          <div
            ref={toggleRefNewHire}
            className={`flex w-full gap-[20px] flex-col ${
              newHireApplication ? "h-[85px]" : "h-10"
            } ${
              pathName === "/onboarding"
                ? "bg-[#0ba1dc] text-white"
                : "text-gray-600"
            } 
            ${!isCollapsed ? " justify-between " : " justify-center "}
            rounded p-2 mb-3`}
          >
            <Link
              onClick={(event) => {}}
              to="/onboarding"
              className="flex justify-between items-center"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_discountshape1.svg"
                  alt="grid"
                />
                {!isCollapsed && "Onboarding"}
              </div>
              <div
                onClick={(event) => {
                  event.preventDefault();
                  // handleNewHireApplication();
                }}
              >
                {newHireApplication ? (
                  <>{!isCollapsed && <MdKeyboardArrowDown />}</>
                ) : (
                  <>{!isCollapsed && <MdKeyboardArrowRight />}</>
                )}
              </div>
            </Link>
            {/* {!newHireApplication ? null : (
              <div className="flex w-full items-center ml-[30px]">
                <Link
                  to="/onboarding-application"
                  className="font-[Poppins] text-[14px] font-[500]"
                >
                  {!isCollapsed && "Application"}
                </Link>
              </div>
            )} */}
          </div>
          <Link
            className={`flex justify-between items-center h-10 ${
              pathName === "/company-profile"
                ? "bg-[#0ba1dc] text-white"
                : "text-gray-600"
            } ${
              !isCollapsed ? " justify-between " : " justify-center "
            } rounded p-2 mb-3`}
            to="/company-profile"
          >
            <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
              <Img
                className="h-6 w-6"
                src="images/img_companygroupa.svg"
                alt="grid"
              />
              {!isCollapsed && "Company Profile"}
            </div>
            {!isCollapsed && <MdKeyboardArrowRight />}
          </Link>
          <Link
            className={`flex justify-between items-center h-10 ${
              pathName === "/my-team"
                ? "bg-[#0ba1dc] text-white"
                : "text-gray-600"
            } ${
              !isCollapsed ? " justify-between " : " justify-center "
            } rounded p-2 mb-3`}
            to="/my-team"
          >
            <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
              <Img
                className="h-6 w-6"
                src="images/img_teamaddsvgrepocom.svg"
                alt="grid"
              />
              {!isCollapsed && "Team"}
            </div>
            {!isCollapsed && <MdKeyboardArrowRight />}
          </Link>
          {/* <Link
          className={`flex justify-between items-center h-10 ${
            pathName === "community"
              ? "bg-[#0ba1dc] text-white"
              : "text-gray-600"
          } rounded p-2 mb-3`}
          to="/community"
        >
          <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
            <Img
              className="h-6 w-6"
              src="images/img_communitysvgrepocom.svg"
              alt="grid"
            />
            {!isCollapsed && "Community"}
          </div>
          {!isCollapsed && <MdKeyboardArrowRight />}
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            pathName === "/hr-tool-box"
              ? "bg-[#0ba1dc] text-white"
              : "text-gray-600"
          } rounded p-2 mb-3`}
          to="/hr-tool-box"
        >
          <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
            <Img
              className="h-6 w-6"
              src="images/img_toolboxsvgrepocom.svg"
              alt="grid"
            />
            {!isCollapsed && "HR Tool Box"}
          </div>
          {!isCollapsed && <MdKeyboardArrowRight />}
        </Link>
        <Link
          className={`flex justify-between items-center h-10 ${
            pathName === "/reports" ? "bg-[#0ba1dc] text-white" : "text-gray-600"
          } rounded p-2 mb-3`}
          to="/reports"
        >
          <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
            <Img
              className="h-6 w-6"
              src="images/img_reportssvgrepocom.svg"
              alt="grid"
            />
            {!isCollapsed && "Reports"}
          </div>
          {!isCollapsed && <MdKeyboardArrowRight />}
        </Link> */}
          <Link
            className={`flex justify-between items-center h-10 ${
              pathName === "/imported-applications"
                ? "bg-[#0ba1dc] text-white"
                : "text-gray-600"
            } rounded p-2 mb-3`}
            to="/imported-applications"
          >
            <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
              {/* <Img className="h-6 w-6" src="images/img_search.svg" alt="grid" /> */}
              <p>
                <BsDatabase size={23} color="grey" />
              </p>
              {!isCollapsed && "Database"}
            </div>
            {!isCollapsed && <MdKeyboardArrowRight />}
          </Link>
          <Link
            className={`flex justify-between items-center h-10 ${
              pathName === "/settings"
                ? "bg-[#0ba1dc] text-white"
                : "text-gray-600"
            } rounded p-2 mb-3`}
            to="/settings"
          >
            <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
              <Img className="h-6 w-6" src="images/img_search.svg" alt="grid" />
              {!isCollapsed && "Settings"}
            </div>
            {!isCollapsed && <MdKeyboardArrowRight />}
          </Link>
        </div>
        <div className="bottom-0" style={{ position: "fixed", bottom: "2rem" }}>
          {!isCollapsed && (
            <div className="flex flex-col mb-3 gap-1">
              {/* <span className="text-gray-500 text-xs p-1 bg-red-100 w-1/2 rounded-xl">
                low Balance
              </span>
              <span className="text-gray-500 text-sm">
                Current Balance : {balance || 0}
              </span> */}
              {/* <button
                className="w-full mx-2 border rounded p-2 hover:text-blue-500"
                onClick={() => Navigate("/wallet")}
               >
                <i class="fa-solid fa-wallet mr-2"></i>Add Funds
              </button> */}
              {/* <button
                class="btn relative inline-flex items-center justify-start overflow-hidden  font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5"
                onClick={() => Navigate("/wallet")}
              >
                <span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-700 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full ml-5 text-left text-indigo-600 transition-colors duration-200 ease-in-out flex items-center group-hover:text-white">
                  Add Funds
                  <FaArrowRight
                    size={15}
                    className="ml-2 mt-1 transition-colors text-indigo-100 duration-200 ease-in-out group-hover:text-white"
                  />
                </span>
              </button> */}
            </div>
          )}
          {!isCollapsed && (
            <div
              className="hidden md:flex md:flex-col"
              onClick={() => {
                setChatModal(!chatModal);
              }}
            >
              <Link to="/">Need Help?</Link>
              <p className="text-gray-500">Open over help center</p>
            </div>
          )}
          {isCollapsed && (
            <div className="hidden md:flex md:flex-col">
              <Link to="/">Help?</Link>
            </div>
          )}
        </div>
        {toggelNavbar ? (
          <div
            ref={toggleRefNavbar}
            className="bg-black w-60 absolute h-screen top-[68px] p-5 right-0 z-10 md:hidden"
          >
            <Link
              className={`flex  items-center h-10 ${
                pathName === "home"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {}}
              to="/"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img className="h-6 w-6" src="images/img_grid.svg" alt="grid" />
                Home
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "chat"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/chat"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_chatunreadsvgrepocom.svg"
                  alt="grid"
                />
                Chat
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "activities"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/activities"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_activitysvgrepocom.svg"
                  alt="grid"
                />
                Activities
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <h1 className="text-gray-500 text-sm font-semibold">RECRUITMENT</h1>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "jobs"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/jobs"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_jobsvgrepocom.svg"
                  alt="grid"
                />
                Jobs
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <div
              ref={toggleRefInterviews}
              className={`flex w-full gap-[20px] flex-col ${
                interviewApplication ? "h-[85px]" : "h-10"
              } ${
                pathName === "interviews"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
            >
              <Link
                className="flex justify-between items-center"
                onClick={(event) => {
                  event.preventDefault();
                  handleInterviewApplication();
                }}
                to="/interviews"
              >
                <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_interview5svgrepocom.svg"
                    alt="grid"
                  />
                  Interviews
                </div>
                <div>
                  {interviewApplication ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowRight />
                  )}
                </div>
              </Link>
            </div>
            <div
              ref={toggleRefNewHire}
              className={`flex w-full gap-[20px] flex-col ${
                newHireApplication ? "h-[85px]" : "h-10"
              } ${
                pathName === "newHires"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
            >
              <Link
                className="flex justify-between items-center"
                onClick={(event) => {
                  event.preventDefault();
                  handleNewHireApplication();
                }}
                to="/onboarding"
              >
                <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_discountshape1.svg"
                    alt="grid"
                  />
                  New Hires
                </div>
                <div>
                  {newHireApplication ? (
                    <MdKeyboardArrowDown />
                  ) : (
                    <MdKeyboardArrowRight />
                  )}
                </div>
              </Link>
              {!newHireApplication ? null : (
                <div
                  // onClick={() => handleToggelNavbar()}
                  className="flex w-full items-center ml-[30px]"
                >
                  <Link
                    to="/onboarding-application"
                    className="font-[Poppins] text-[14px] font-[500]"
                  >
                    Application
                  </Link>
                </div>
              )}
            </div>
            {/* <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "interviews"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                handleToggelNavbar();
              }}
              to="/interviews"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_interview5svgrepocom.svg"
                  alt="grid"
                />
                Interviews
              </div>
              <MdKeyboardArrowRight />
            </Link> */}
            {/* <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "onboarding"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                handleToggelNavbar();
              }}
              to="/onboarding"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_discountshape1.svg"
                  alt="grid"
                />
                New Hires
              </div>
              <MdKeyboardArrowRight />
            </Link> */}
            <h1 className="text-gray-500 text-sm font-semibold">
              ORGANIZATION
            </h1>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "company-profile"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/company-profile"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_companygroupa.svg"
                  alt="grid"
                />
                Company Profile
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "community"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_communitysvgrepocom.svg"
                  alt="grid"
                />
                Community
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "team"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/my-team"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_teamaddsvgrepocom.svg"
                  alt="grid"
                />
                Team
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "hRToolBox"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/hr-tool-box"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_toolboxsvgrepocom.svg"
                  alt="grid"
                />
                HR Tool Box
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "reports"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/reports"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_reportssvgrepocom.svg"
                  alt="grid"
                />
                Reports
              </div>
              <MdKeyboardArrowRight />
            </Link>
            <Link
              className={`flex justify-between items-center h-10 ${
                pathName === "Settings"
                  ? "bg-[#0ba1dc] text-white"
                  : "text-gray-600"
              } rounded p-2 mb-3`}
              onClick={() => {
                // handleToggelNavbar();
              }}
              to="/settings"
            >
              <div className="flex items-center font-[Poppins] text-[14px] font-[500] gap-[14px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_search.svg"
                  alt="grid"
                />
                Settings
              </div>
              <MdKeyboardArrowRight />
            </Link>
          </div>
        ) : null}
      </div>
      <ChatModal open={chatModal} handleClose={() => setChatModal(false)} />
    </>
  );
};

export default Sidebar;
