import React, { useEffect, useState } from "react";
import { GetApi } from "Api/Api_Calling";
import { useNavigate } from "react-router-dom";
import FilterScreen from "pages/DashboardTwo/FiltersScreen";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import JobSidebar from "pages/Jobs/JobsApplication/JobSidebar";

const AllApplications = () => {
  const navigate = useNavigate();
  const [side1, setSide1] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [filterData, setFilterData] = useState({});
  const [AllJobs, setAllJobs] = useState([]);
  const [AllApplication, setAllApplication] = useState([]);
  const [AllinterviewSchedule, setAllinterviewSchedule] = useState([]);
  const [AllApplicationonhold, setAllApplicationonhold] = useState([]);
  const [AllShortlistedStudents, setAllShortlistedStudents] = useState([]);
  const [AllSelectedStudents, setAllSelectedStudents] = useState([]);
  const [AllRejectedStudents, setAllRejectedStudents] = useState([]);

  function openSideBar(index = null) {
    setSide1(index !== null ? true : !side1);
    setOpenIndex(index);
  }

  const GetAllJobs = async () => {
    try {
      const response = await GetApi("api/CompanyRoutes/GetAllJobs");
      setAllJobs(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllApplication = async () => {
    try {
      const response = await GetApi(
        "api/CompanyRoutes/GetAllApplicationofacompany"
      );
      console.log(response?.data?.data);
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

  return (
    <div className="w-full flex gap-2">
      <div className="w-1/4">
        <FilterScreen setFilterData={setFilterData} />
      </div>
      <div className="w-3/4">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell>
                  <b>Date</b>
                </TableCell>
                <TableCell>
                  <b>Opening Title</b>
                </TableCell>
                <TableCell>
                  <b>Application Status</b>
                </TableCell>
                <TableCell>
                  <b>Actions</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AllApplication.map((application, index) => (
                <TableRow key={application._id}>
                  <TableCell className="">
                    {application?.StudentId?.Name}
                  </TableCell>
                  <TableCell className="">
                    {new Date(application?.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="">
                    {application?.JobId?.positionName}
                  </TableCell>
                  <TableCell className="">{application?.status}</TableCell>
                  <TableCell className="flex gap-5">
                    <i
                      class="fa-solid fa-eye text-blue-400 cursor-pointer"
                      onClick={() => openSideBar(index)}
                    ></i>
                    <i class="fa-solid fa-xmark text-red-600 ml-3 cursor-pointer"></i>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <JobSidebar
          side1={side1}
          openSideBar={openSideBar}
          selectedApplication={AllShortlistedStudents[openIndex]}
        />
      </div>
    </div>
  );
};

export default AllApplications;
