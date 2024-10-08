// apiFunctions.js
import { useEffect, useState } from "react";
import { GetApi, PutApi } from "Api/Api_Calling";

// Job related functions
export function useJobFunctions(id) {
  const [job, setJob] = useState(null);

  const getJob = async () => {
    try {
      const res = await GetApi(`api/AdminRoutes/GetAJobs/${id}`);
      setJob(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJob();
  }, [id]);

  return { job, getJob };
}

// Student related functions
export function useStudentFunctions() {
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStudents = async () => {
    try {
      const res = await GetApi("api/CompanyRoutes/GetAllStudents");
      setAllStudents(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return { allStudents, loading, getStudents };
}

// Application related functions
export function useApplicationFunctions(id) {
  const [allApplication, setAllApplication] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [AllShortlistedApplication, setAllShortlistedApplication] =
    useState(null);
  const [AllScheduleInterviewApplication, setAllScheduleInterviewApplication] =
    useState([]);
  const [AllSelectedStudents, setAllSelectedStudents] = useState([]);
  const [AllrejectedApplication, setAllrejectedApplication] = useState([]);

  const GetAllApplication = async () => {
    try {
      const res = await GetApi(`api/CompanyRoutes/GetAllStudentsofajob/${id}`);
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
      setFilteredStudents(rankedUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllScheduleInterviewApplication = async () => {
    try {
      const res = await GetApi(
        `api/CompanyRoutes/GetAllScheduleInterviewofajob/${id}`
      );
      setAllScheduleInterviewApplication(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const GetAllShortlistedApplication = async () => {
    try {
      const res = await GetApi(
        `api/CompanyRoutes/GetAllshortlistStudentsofajob/${id}`
      );
      setAllShortlistedApplication(res?.data?.data);
    } catch (error) {
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
    } catch (error) {
      console.log(error);
    }
  };

  return {
    allApplication,
    filteredStudents,
    AllShortlistedApplication,
    AllScheduleInterviewApplication,
    AllSelectedStudents,
    AllrejectedApplication,
    GetAllApplication,
    GetAllScheduleInterviewApplication,
    GetAllShortlistedApplication,
    GetAllSelectedStudents,
    GetAllrejectedApplication,
  };
}

// Interview related functions
export function useInterviewFunctions(selectedid) {
  const [interviewModal, setInterviewModal] = useState(false);
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
      console.log(error.response);
    }
  };

  return {
    interviewModal,
    setInterviewModal,
    Interviewdetail,
    setInterviewdata,
    Scheduleinterviewapi,
  };
}

// Filtering functions
export function useFilterFunctions() {
  const [skillFilter, setSkillFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [salaryRange, setSalaryRange] = useState([0, 100000]);

  const handleLocationChange = (e) => {
    if (e.key === "Enter") {
      const { value } = e.target;
      if (value.trim()) {
        setLocationFilter([...locationFilter, value.trim()]);
        e.target.value = "";
      }
    }
  };

  const handleSalaryChange = (e) => {
    const { value } = e.target;
    const [min, max] = value.split(",").map((val) => parseInt(val.trim(), 10));
    setSalaryRange([min, max]);
  };

  return {
    skillFilter,
    setSkillFilter,
    locationFilter,
    setLocationFilter,
    salaryRange,
    handleLocationChange,
    handleSalaryChange,
  };
}
