import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Text } from "components";
import "react-circular-progressbar/dist/styles.css";
import { GiNotebook } from "react-icons/gi";
import { GetApi } from "Api/Api_Calling";
import { useNavigate } from "react-router-dom";
import OnboardingDocuments from "./OnboardingDocuments";

const TwentysixPage = () => {
  const navigate = useNavigate();
  const [AllShortlistedStudents, setAllShortlistedStudents] = useState([]);
  const [AllinterviewSchedule, setAllinterviewSchedule] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control the drawer
  const [drawerContent, setDrawerContent] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleItemClick = (content) => {
    setDrawerContent(content);
    toggleDrawer(true)({ type: "click" });
  };

  const GetAllShortlistedStudents = async () => {
    try {
      const Getalljobs = await GetApi(
        "api/CompanyRoutes/GetAllShortlistedStudents"
      );
      setAllShortlistedStudents(Getalljobs?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllinterviewSchedule = async () => {
    try {
      const Getalljobs = await GetApi(
        "api/CompanyRoutes/GetAllUpcomingInterviews"
      );
      setAllinterviewSchedule(Getalljobs?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [AllApplicationonhold, setAllApplicationonhold] = useState([]);

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

  const [selectedfiled, setSelectedfiled] = useState("Ongoing");

  const selectfield = (Name) => {
    setSelectedfiled(Name);
  };

  const [Fulldata, setFulldata] = useState([]);

  useEffect(() => {
    setFulldata(AllinterviewSchedule);
  }, [AllinterviewSchedule]);

  useEffect(() => {
    if (selectedfiled === "Ongoing") {
      setFulldata(AllinterviewSchedule);
    }
    if (selectedfiled === "On_Hold") {
      setFulldata(AllShortlistedStudents);
    }
    if (selectedfiled === "Completed") {
      setFulldata(AllSelectedStudents);
    }
  }, [selectedfiled]);

  const formatTimestamp = (timestampString) => {
    const timestamp = new Date(timestampString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };

    const formattedTimestamp = timestamp.toLocaleString(undefined, options);

    return formattedTimestamp;
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
          <div className="bg-white flex items-center justify-between rounded-[12px] w-full p-4 hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex flex-col  w-full">
              <div className="bg-[#f1edfe] h-[52px] rounded-[50%] w-[52px]"></div>
              <Text
                className="mt-[11px] text-black font-[500] text-[18px] "
                size="txtPoppinsMedium14Black900"
              >
                Shortlisted
              </Text>
              <Text
                className="mt-[5px] text-black font-[700] text-[20px] "
                size="txtPoppinsBold20"
              >
                {AllShortlistedStudents?.length}
              </Text>
            </div>
            <div className="h-[64px] w-[64px]">
              <CircularProgressbar
                value={28}
                strokeWidth={13}
                styles={{
                  trail: { stroke: "#F1EDFE" },
                  path: {
                    stroke: "#6F34F5",
                  },
                }}
              />
            </div>
          </div>
          <div className="bg-white flex items-center justify-between rounded-[12px] w-full p-4 hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex flex-col  w-full">
              <div className="bg-[#f1edfe] h-[52px] rounded-[50%] w-[52px]"></div>
              <Text
                className="mt-[11px] text-black font-[500] text-[18px] "
                size="txtPoppinsMedium14Black900"
              >
                Pending Interviews
              </Text>
              <Text
                className="mt-[5px] text-black font-[700] text-[20px] "
                size="txtPoppinsBold20"
              >
                {AllinterviewSchedule?.length}
              </Text>
            </div>
            <div className="h-[64px] w-[64px]">
              <CircularProgressbar
                value={28}
                strokeWidth={13}
                styles={{
                  trail: { stroke: "#F1EDFE" },
                  path: {
                    stroke: "#6F34F5",
                  },
                }}
              />
            </div>
          </div>
          <div className="bg-white flex items-center justify-between rounded-[12px] w-full p-4 hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex flex-col  w-full">
              <div className="bg-[#e7f6f2] h-[52px] rounded-[50%] w-[52px]"></div>
              <Text
                className="mt-[11px] text-black font-[500] text-[18px] "
                size="txtPoppinsMedium14Black900"
              >
                Result Awaited
              </Text>
              <Text
                className="mt-[5px] text-black font-[700] text-[20px] "
                size="txtPoppinsBold20"
              >
                {AllApplicationonhold?.length}
              </Text>
            </div>
            <div className="h-[64px] w-[64px]">
              <CircularProgressbar
                value={28}
                strokeWidth={13}
                styles={{
                  trail: { stroke: "#F1EDFE" },
                  path: {
                    stroke: "#009871",
                  },
                }}
              />
            </div>
          </div>
          <div className="bg-white flex items-center justify-between rounded-[12px] w-full p-4 hover:shadow-2xl hover:scale-105 duration-300">
            <div className="flex flex-col  w-full">
              <div className="bg-[#fff4e4] h-[52px] rounded-[50%] w-[52px]"></div>
              <Text
                className="mt-[11px] text-black font-[500] text-[18px] "
                size="txtPoppinsMedium14Black900"
              >
                Selected
              </Text>
              <Text
                className="mt-[5px] text-black font-[700] text-[20px] "
                size="txtPoppinsBold20"
              >
                {AllSelectedStudents?.length}
              </Text>
            </div>
            <div className="h-[64px] w-[64px]">
              <CircularProgressbar
                value={28}
                strokeWidth={13}
                styles={{
                  trail: { stroke: "#F1EDFE" },
                  path: {
                    stroke: "#ff8600",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="w-full p-[16px] flex-col md:flex-row justify-center items-center lg:items-start lg:justify-start flex  gap-[25px]">
          <h1 className="text-[24px] font-[500]">Onboarding Manager</h1>
          <div className="gap-6 flex flex-col lg:flex-row w-full lg:w-fit">
            <button
              onClick={() => {
                selectfield("Ongoing");
              }}
              className={`w-[111px] h-[40px] rounded-[8px] text-14 font-semibold ${
                selectedfiled === "Ongoing"
                  ? "bg-slate-400 text-blue-900 "
                  : "bg-white text-black hover:shadow-2xl hover:text-blue-800 hover:scale-105 hover:bg-slate-300 duration-300 "
              }`}
            >
              {" "}
              Ongoing
            </button>
            <button
              onClick={() => {
                selectfield("On_Hold");
              }}
              className={`w-[111px] h-[40px] rounded-[8px] text-14 font-semibold ${
                selectedfiled === "On_Hold"
                  ? "bg-slate-400 text-blue-900"
                  : "bg-white text-black hover:shadow-2xl hover:text-blue-800 hover:scale-105 hover:bg-slate-300 duration-300"
              }`}
            >
              {" "}
              On Hold{" "}
            </button>
            <button
              onClick={() => {
                selectfield("Completed");
              }}
              className={`w-[111px] h-[40px] rounded-[8px] text-14 font-semibold ${
                selectedfiled === "Completed"
                  ? "bg-slate-400 text-blue-900"
                  : "bg-white text-black hover:shadow-2xl  hover:text-blue-800 hover:scale-105 hover:bg-slate-300 duration-300"
              }`}
            >
              {" "}
              Completed{" "}
            </button>
          </div>
          <button
            onClick={() => {
              navigate("/onboarding-process");
            }}
            className={`w-[181px] ml-auto h-[40px] rounded-[8px] text-14 font-semibold  text-blue-900
               bg-white hover:shadow-2xl  hover:text-blue-800 hover:scale-105 hover:bg-slate-300 duration-300
            `}
          >
            Onboarding Process
          </button>
        </div>
        <div className="w-full font-[500]">
          <div className="overflow-x-auto px-[30px]">
            <table className="w-full rounded-[20px] ">
              <thead className="bg-blue-400 text-[16px] rounded-[20px]">
                <tr>
                  <th className="font-[500] text-left p-2">Candidate Id</th>
                  <th className="font-[500] text-left p-2">Candidate Name</th>
                  <th className="font-[500] text-left p-2">Submitted Date</th>
                  <th className="font-[500] text-left p-2">Job Role</th>
                  <th className="font-[500] text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-[12px] bg-[#fff] font-[500] text-center">
                {Fulldata?.map((interviewInProcess, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-200 duration-500 ease-in-out "
                    onClick={() => {
                      handleItemClick(interviewInProcess);
                      // if (interviewInProcess.onboardingDocumentsAvailable) {
                      // handleItemClick(interviewInProcess);
                      // }
                    }}
                  >
                    <td className="p-2 text-left ">
                      {interviewInProcess?.StudentId?._id?.slice(0, 10)}
                    </td>
                    <td className="p-2 text-left  flex items-center justify-start gap-[5px]">
                      <img
                        className="w-[28px] h-[28px]"
                        src={interviewInProcess?.StudentId?.Image}
                        alt=""
                      />
                      {interviewInProcess?.StudentId?.Name}
                    </td>
                    <td className="p-2 text-left ">
                      {formatTimestamp(interviewInProcess?.createdAt)}
                    </td>
                    <td className="p-2 text-left ">
                      {interviewInProcess?.JobId?.positionName}
                    </td>
                    <td className="p-2 text-left  text-[#31c65b]">
                      {interviewInProcess?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <OnboardingDocuments
          isOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
          content={drawerContent}
        />
      )}
    </>
  );
};

export default TwentysixPage;
