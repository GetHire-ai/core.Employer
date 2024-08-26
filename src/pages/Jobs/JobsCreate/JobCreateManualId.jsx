import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { SelectBox } from "components/SelectBox";
import axios from "axios";
import { GetApi, PostApi } from "Api/Api_Calling";
import { toast } from "react-toastify";
const JobCreateManual = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [JobData, setJobData] = useState({
    type: "job",
    internshipType: "",
    jobType: "",
    internshipDuration: "",
    stipendType: "",
    internshipDurationFrequency: "",
    internshipStart: "",
    positionName: "",
    companyName: "",
    location: "",
    minSalary: 0,
    maxSalary: 0,
    minExp: 0,
    maxExp: 0,
    currency: "INR",
    skillsRequired: [],
    Responsibilities: "",
    rounds: [],
    numOfDays: "",
    shift: "",
    jobFrequency: "",
    ppo: true,
    Openings: "",
    videoQuestions: [],
    perks: [],
  });
  const [skillInput, setSkillInput] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [videoQuestions, setVideoQuestions] = useState([""]);
  const [AISuggestions, setAISuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [positionNames, setPositionNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rounds, setRounds] = useState(JobData?.rounds || []);
  const [assessmentSkills, setAssessmentSkills] = useState([
    { type: "skill", mustHave: false },
  ]);
  const predefinedSkills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Java",
    "C++",
    "SQL",
    "Ruby",
    "PHP",
    "TypeScript",
    "Swift",
    "Go",
    "Kotlin",
  ];
  const predefinedPositionNames = [
    "Software Engineer",
    "Business Development",
    "Marketing Manager",
    "Financial Analyst",
    "Customer Success Manager",
    "Data Scientist",
    "Operations Specialist",
    "Sales Representative",
    "Content Strategist",
    "UX/UI Designer",
    "HR Coordinator",
    "Legal Counsel",
    "Product Manager",
    "Quality Assurance Engineer",
    "Project Coordinator",
    "IT Support Specialist",
    "Event Planner",
    "Public Relations Coordinator",
    "Supply Chain Analyst",
    "Research Assistant",
    "Graphic Designer",
    "Executive Assistant",
    "Social Media Specialist",
    "Healthcare Administrator",
    "Logistics Coordinator",
  ];
  const sampleQuestions = [
    {
      question: "What is React?",
      options: ["A library", "A framework", "A language", "A database"],
      correctAnswer: "A library",
    },
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "JavaScript Extra",
        "JavaScript Extension",
        "JavaScript Example",
      ],
      correctAnswer: "JavaScript XML",
    },
    {
      question: "What is the virtual DOM?",
      options: [
        "A copy of the real DOM",
        "A lightweight representation of the real DOM",
        "A new type of DOM",
        "An API for DOM",
      ],
      correctAnswer: "A lightweight representation of the real DOM",
    },
    {
      question: "What are hooks in React?",
      options: ["Special functions", "Methods", "Objects", "Classes"],
      correctAnswer: "Special functions",
    },
    {
      question: "What is a component in React?",
      options: [
        "A reusable piece of UI",
        "A function",
        "A method",
        "A variable",
      ],
      correctAnswer: "A reusable piece of UI",
    },
  ];
  const CreateNewJob = async () => {
    try {
      setLoading(true);
      let validationFailed = false;

      if (validationFailed) {
        return;
      }
      const responce = await PostApi("api/CompanyRoutes/CreateJob", JobData);
      toast.success(responce?.data?.message, { autoClose: 1000 });
      navigate("/jobs");
    } catch (error) {
      toast.error(error?.response?.data?.message, { autoClose: 1000 });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const chooseDateOptionsList = [
    { label: "Skill Assessment", value: "Skill Assessment" },
    { label: "Tecnical Interview", value: "Tecnical Interview" },
    { label: "AI Based Video", value: "AI Based Video" },
    { label: "Final Interview", value: "Final Interview" },
  ];
  const addRound = () => {
    const newRound = { Round: rounds.length + 1, Assessment: "" };
    setRounds([...rounds, newRound]);
    updateJobData([...rounds, newRound]);
  };
  const CreateAiSuggestion = async (suggestionFor) => {
    try {
      setLoading(true);
      if (!JobData || JobData.positionName === "") {
        toast.error("Job title is required", { autoClose: 1000 });
        return;
      }

      const data = {
        jobTitle: JobData.positionName,
        suggestionFor: suggestionFor,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const response = await axios.post(
        "https://get-hire-ai.vercel.app/job-suggestion",
        data,
        config
      );
      if (
        suggestionFor ===
        "Responsibilities give first 100 words desc and then points in number format dont give heading"
      ) {
        setJobData({ ...JobData, Responsibilities: response?.data?.res });
      }
      if (suggestionFor === "Job Description") {
        setJobData({ ...JobData, Job_Description: response?.data?.res });
      }
      if (suggestionFor === "Skill Exerience") {
        setJobData({ ...JobData, Skill_Exerience: response?.data?.res });
      }
      if (suggestionFor === "Finalise Questioner") {
        const questions = response?.data?.res
          .split("\n")
          .map((q) => q.trim())
          .filter((q) => q);
        setVideoQuestions(questions);
        setJobData({ ...JobData, videoQuestions: questions });
      }
      if (suggestionFor === "Skill Required seprate with comma") {
        const newSkills = response?.data?.res
          .split(",")
          .map((skill) => skill.trim());
        setAISuggestions(newSkills);
        // setJobData({ ...JobData, skillsRequired: newSkills });
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.response?.data?.message || error.message}`, {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchCitySuggestions = async (input) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.teleport.org/api/cities/?search=${input}`
      );
      console.log(response);
      setCitySuggestions(response.data._embedded["city:search-results"]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeRound = (index) => {
    const updatedRounds = [...rounds];
    updatedRounds.splice(index, 1);
    setRounds(updatedRounds);
    updateJobData(updatedRounds);
  };

  const handleRoundTypeChange = (index, value) => {
    const updatedRounds = [...rounds];
    updatedRounds[index].Assessment = value;
    setRounds(updatedRounds);
    updateJobData(updatedRounds);
  };

  const updateJobData = (updatedRounds) => {
    setJobData({ ...JobData, rounds: updatedRounds });
  };

  const addSkill = (skill = skillInput) => {
    if (skill.trim() !== "") {
      const newSkills = [...JobData.skillsRequired, skill.trim()];
      setJobData({ ...JobData, skillsRequired: newSkills });
      setSkillInput("");
      setSuggestions([]);
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...JobData.skillsRequired];
    newSkills.splice(index, 1);
    setJobData({ ...JobData, skillsRequired: newSkills });
  };

  const handleSkillInputKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const handleVidQuestion = (index, value) => {
    const newQuestions = [...videoQuestions];
    newQuestions[index] = value;
    setVideoQuestions(newQuestions);
  };

  const handleSkillInputChange = (e) => {
    const input = e.target.value;
    setSkillInput(input);

    if (input.trim() !== "") {
      const filteredSuggestions = predefinedSkills.filter((skill) =>
        skill.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handlePositionNameInputChange = (e) => {
    const input = e.target.value;
    setJobData((prev) => ({
      ...prev,
      positionName: input,
    }));

    if (input.trim() !== "") {
      const Suggestions = predefinedPositionNames.filter((name) =>
        name.toLowerCase().includes(input.toLowerCase())
      );
      setPositionNames(Suggestions);
    } else {
      setPositionNames([]);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCityInputChange = (e) => {
    const input = e.target.value;
    setJobData((prev) => ({
      ...prev,
      location: input,
    }));

    if (input.trim() !== "") {
      fetchCitySuggestions(input);
    } else {
      setCitySuggestions([]);
    }
  };

  const getJob = async (id) => {
    try {
      setLoading(true);
      let res = await GetApi(`api/AdminRoutes/GetAJobs/${id}`);
      let data = res?.data?.data;
      setJobData(data);
      console.log(data);
      toast.success("Job Templete fetched !", { autoClose: 1000 });
    } catch (error) {
      toast.error("Error In get Job", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJob(id);
  }, []);

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
      <div
        className="bg-white p-6 rounded-[30px] shadow-md w-full  mx-auto"
        style={{ filter: loading ? "blur(1px)" : "none" }}
      >
        <div className="flex justify-between items-center">
          <p className="text-[32px] text-center text-black font-[600] flex-grow">
            Create a Job With Manual
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-6 bg-white  rounded-md">
          <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
            Opportunity type
          </label>
          <div className="mb-4 border rounded p-4 shadow-md">
            <div className="mt-2">
              <label className="inline-flex items-center mr-3">
                <input
                  type="radio"
                  className="form-radio hover:cursor-pointer"
                  name="type"
                  value="internship"
                  checked={JobData.type === "internship"}
                  onChange={handleChange}
                />
                <span className="ml-2">Internship</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio hover:cursor-pointer"
                  name="type"
                  value="job"
                  checked={JobData.type === "job"}
                  onChange={handleChange}
                />
                <span className="ml-2">Job</span>
              </label>
            </div>
          </div>
          {JobData.type === "job" && (
            <>
              <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
                Job Details
              </label>
              <div className="mb-4 border rounded p-2">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Positin Name
                  </label>
                  <input
                    value={JobData.positionName}
                    name="positionName"
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Creative Design"
                    onChange={(e) => {
                      handleChange(e);
                      handlePositionNameInputChange(e);
                    }}
                  />
                  {positionNames.length > 0 && (
                    <ul className="bg-white border border-gray-300 rounded-md mt-2">
                      {positionNames.map((name, index) => (
                        <li
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => {
                            setJobData({
                              ...JobData,
                              positionName: name,
                            });
                            CreateAiSuggestion(
                              "Skill Required seprate with comma"
                            );
                            setPositionNames([]);
                          }}
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <label className="block text-sm font-medium text-gray-700">
                  {" "}
                  Required experience{" "}
                </label>
                <div className="flex justify-start items-center gap-5 mt-2">
                  <div className="mb-4">
                    <select
                      className="mt-1 w-60 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="minExp"
                      onChange={handleChange}
                      value={JobData.minExp}
                    >
                      <option value="">Min</option>
                      {[...Array(5).keys()].map((num) => (
                        <option key={num} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">to</div>
                  <div className="mb-4">
                    <select
                      className="mt-1 w-60 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="maxExp"
                      onChange={handleChange}
                      value={JobData.maxExp}
                    >
                      <option value="">Max</option>
                      {[...Array(5).keys()].map((num) => (
                        <option key={num} value={num + 1}>
                          {num + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">years</div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Skills required (Optional)
                    <Button
                      className="ml-2 bg-[#5956e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white"
                      onClick={() =>
                        CreateAiSuggestion("Skill Required seprate with comma")
                      }
                    >
                      Suggest Skills
                    </Button>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g. Java"
                    value={skillInput}
                    onChange={handleSkillInputChange}
                    onKeyPress={handleSkillInputKeyPress}
                  />
                  {suggestions.length > 0 && (
                    <div className="bg-white border border-gray-300 rounded-md  max-h-100 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="cursor-pointer px-2 py-1 hover:bg-gray-200 "
                          onClick={() => addSkill(suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {JobData.skillsRequired.map((skill, index) => (
                      <div
                        key={index}
                        className="mr-2 mb-2 px-4 py-2 bg-[#096fc6] text-white rounded-full text-md cu"
                      >
                        {skill}
                        <button
                          className="ml-2 text-dark text-[15px]"
                          onClick={() => removeSkill(index)}
                        >
                          <i className="fa-solid fa-xmark text-lg font-500"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                  {AISuggestions?.length !== 0 && (
                    <div className="flex flex-col flex-wrap gap-2 mt-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Recomended Skills
                      </label>
                      <div className="flex flex-wrap cursor-pointer">
                        {AISuggestions?.map((skill, index) => (
                          <div
                            key={index}
                            className="mr-2 mb-2 px-3 py-1 bg-white text-[#008bdb] border rounded-full text-md"
                            onClick={() => {
                              setJobData((prev) => ({
                                ...prev,
                                skillsRequired: [...prev.skillsRequired, skill],
                              }));
                              setAISuggestions((prev) =>
                                prev.filter((s, i) => i !== index)
                              );
                            }}
                          >
                            {skill}
                            <button className="ml-2 text-dark text-[15px]">
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Job type
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center hover:cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="jobType"
                        value="inOffice"
                        checked={JobData.jobType === "inOffice"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">In office</span>
                    </label>
                    <label className="inline-flex items-center ml-6 hover:cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="jobType"
                        value="hybrid"
                        checked={JobData.jobType === "hybrid"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Hybrid</span>
                    </label>
                    <label className="inline-flex items-center ml-6 hover:cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="jobType"
                        value="remote"
                        checked={JobData.jobType === "remote"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Remote</span>
                    </label>
                  </div>
                </div>
                {JobData.jobType === "hybrid" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      No. of in-office days in a week
                    </label>
                    <select
                      className="mt-1 block w-80 px-3 py-2 hover:cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="numOfDays"
                      onChange={handleChange}
                      value={JobData.numOfDays}
                    >
                      <option>Please select</option>
                      {[...Array(7).keys()].map((day) => (
                        <option key={day} value={day + 1}>
                          {day + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Part-time/Full-time
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center hover:cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="shift"
                        value="partTime"
                        checked={JobData.shift === "partTime"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Part-time</span>
                    </label>
                    <label className="inline-flex items-center hover:cursor-pointer ml-6">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="shift"
                        value="fullTime"
                        checked={JobData.shift === "fullTime"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Full-time</span>
                    </label>
                  </div>
                </div>
                {JobData.jobType !== "remote" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      value={JobData.location}
                      name="location"
                      type="text"
                      className="mt-1 block  w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter city name"
                      onChange={handleCityInputChange}
                    />
                    {citySuggestions.length > 0 && (
                      <ul className="bg-white border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto">
                        {citySuggestions.map((city, index) => (
                          <li
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => {
                              setJobData((prev) => ({
                                ...prev,
                                location: city.matching_full_name,
                              }));
                              setCitySuggestions([]);
                            }}
                          >
                            {city.matching_full_name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Number Of Openings
                  </label>
                  <input
                    value={JobData.Openings}
                    name="Openings"
                    type="text"
                    className="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g 5"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className=" block mb-2 font-bold text-gray-700 ">
                    <div className="flex gap-[16px]">
                      <p className="text-[14px] font-[600]">
                        Job's Responsibilities
                      </p>
                      <button
                        onClick={() => {
                          CreateAiSuggestion(
                            "Responsibilities give first 100 words desc and then points in number format dont give heading"
                          );
                        }}
                        className="bg-[#5906e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white"
                      >
                        Edit with AI
                      </button>
                    </div>
                  </label>
                  <textarea
                    rows={5}
                    value={JobData.Responsibilities}
                    onChange={(value) => {
                      setJobData({ ...JobData, Responsibilities: value });
                    }}
                    className="form-textarea p-2 mt-1 block w-full border border-gray-300 rounded-md"
                    placeholder="selected Intern's day-to-day Responsibilities include."
                  />
                </div>
              </div>
              <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
                Salary & Perks
              </label>
              <div className="mb-4 border rounded p-2 px-5">
                <>
                  <div className="flex justify-start items-center gap-5 mt-2">
                    <div className="mb-4 ">
                      <label className="block text-sm font-medium text-gray-700">
                        CTC
                      </label>
                      <select
                        className="mt-1 w-100 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        name="currency"
                        onChange={handleChange}
                        value={JobData.currency}
                      >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                      </select>
                    </div>
                    <div className="mb-4 ">
                      <label className="block text-sm font-medium text-gray-700">
                        Minimum Salary
                      </label>
                      <input
                        value={JobData.minSalary}
                        name="minSalary"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Add Minimum Salary"
                        onChange={handleChange}
                      />
                    </div>
                    <div>to</div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Maximum Salary
                      </label>
                      <input
                        value={JobData.maxSalary}
                        name="maxSalary"
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Add Maximum Salary"
                        onChange={handleChange}
                      />
                    </div>
                    <div>per year</div>
                  </div>
                </>

                <label className="block mt-4 text-sm font-medium text-gray-700">
                  Perks
                </label>
                <div className="mb-4 flex flex-wrap">
                  {[
                    "Certificate",
                    "Letter of recommendation",
                    "Flexible work hours ",
                    "5 days a week",
                    "Informal dress code",
                    "Free snacks & beverages",
                  ].map((perk) => (
                    <label
                      key={perk}
                      className="hover:cursor-pointer inline-flex items-center w-1/2 p-2"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox hover:cursor-pointer"
                        value={perk}
                        checked={JobData.perks.includes(perk)}
                        onChange={(e) => {
                          const { value, checked } = e.target;
                          let updatedPerks = [...JobData.perks];

                          if (checked) {
                            updatedPerks.push(value);
                          } else {
                            updatedPerks = updatedPerks.filter(
                              (perk) => perk !== value
                            );
                          }

                          setJobData({ ...JobData, perks: updatedPerks });
                        }}
                      />
                      <span className="ml-2">{perk}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
          {JobData.type === "internship" && (
            <>
              <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
                Internship Details
              </label>
              <div className="mb-4 border rounded p-2">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Positin Name
                  </label>
                  <input
                    value={JobData.positionName}
                    name="positionName"
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Creative Design"
                    onChange={(e) => {
                      handleChange(e);
                      handlePositionNameInputChange(e);
                    }}
                  />
                  {positionNames.length > 0 && (
                    <ul className="bg-white border border-gray-300 rounded-md mt-2">
                      {positionNames.map((name, index) => (
                        <li
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                          onClick={() => {
                            setJobData({
                              ...JobData,
                              positionName: name,
                            });
                            setPositionNames([]);
                          }}
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Skills required (Optional)
                    <Button
                      className="ml-2 bg-[#5956e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white"
                      onClick={() =>
                        CreateAiSuggestion("Skill Required seprate with comma")
                      }
                    >
                      Suggest Skills
                    </Button>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g. Java"
                    value={skillInput}
                    onChange={handleSkillInputChange}
                    onKeyPress={handleSkillInputKeyPress}
                  />
                  {suggestions.length > 0 && (
                    <div className="bg-white border border-gray-300 rounded-md  max-h-100 overflow-y-auto">
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="cursor-pointer px-2 py-1 hover:bg-gray-200 "
                          onClick={() => addSkill(suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {JobData.skillsRequired.map((skill, index) => (
                      <div
                        key={index}
                        className="mr-2 mb-2 px-4 py-2 bg-[#096fc6] text-white rounded-full text-md cu"
                      >
                        {skill}
                        <button
                          className="ml-2 text-dark text-[15px]"
                          onClick={() => removeSkill(index)}
                        >
                          <i className="fa-solid fa-xmark text-lg font-500"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                  {AISuggestions?.length !== 0 && (
                    <div className="flex flex-col flex-wrap gap-2 mt-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Recomended Skills
                      </label>
                      <div className="flex flex-wrap cursor-pointer">
                        {AISuggestions?.map((skill, index) => (
                          <div
                            key={index}
                            className="mr-2 mb-2 px-3 py-1 bg-white text-[#008bdb] border rounded-full text-md"
                            onClick={() => {
                              setJobData((prev) => ({
                                ...prev,
                                skillsRequired: [...prev.skillsRequired, skill],
                              }));
                              setAISuggestions((prev) =>
                                prev.filter((s, i) => i !== index)
                              );
                            }}
                          >
                            {skill}
                            <button className="ml-2 text-dark text-[15px]">
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Internship type
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="internshipType"
                        value="inOffice"
                        checked={JobData.internshipType === "inOffice"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">In office</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="internshipType"
                        value="hybrid"
                        checked={JobData.internshipType === "hybrid"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Hybrid</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="internshipType"
                        value="remote"
                        checked={JobData.internshipType === "remote"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Remote</span>
                    </label>
                  </div>
                </div>
                {JobData.internshipType === "hybrid" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      No. of in-office days in a week
                    </label>
                    <select
                      className="mt-1 block w-80 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      name="numOfDays"
                      onChange={handleChange}
                      value={JobData.numOfDays}
                    >
                      <option>Please select</option>
                      {[...Array(7).keys()].map((day) => (
                        <option key={day} value={day + 1}>
                          {day + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Part-time/Full-time
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="shift"
                        value="partTime"
                        checked={JobData.shift === "partTime"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Part-time</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="shift"
                        value="fullTime"
                        checked={JobData.shift === "fullTime"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Full-time</span>
                    </label>
                  </div>
                </div>
                {JobData.internshipType !== "remote" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      value={JobData.location}
                      name="location"
                      type="text"
                      className="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="e.g Mumbai"
                      onChange={handleChange}
                    />
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Number Of Openings
                  </label>
                  <input
                    value={JobData.Openings}
                    name="Openings"
                    type="text"
                    className="mt-1 block w-full px-3 py-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="e.g 5"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Internship Start Date
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="internshipStart"
                        value="immedietly"
                        checked={JobData.internshipStart === "immedietly"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">
                        Immedietly (within next 30 days)
                      </span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="internshipStart"
                        value="later"
                        checked={JobData.internshipStart === "later"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Later</span>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className=" block mb-2 font-bold text-gray-700 ">
                    <div className="flex gap-[16px]">
                      <p className="text-[14px] font-[600]">
                        Inter's Responsibilities
                      </p>
                      <button
                        onClick={() => {
                          CreateAiSuggestion(
                            "Responsibilities give first 100 words desc and then points in number format"
                          );
                        }}
                        className="bg-[#5906e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white"
                      >
                        Edit with AI
                      </button>
                    </div>
                  </label>
                  <textarea
                    rows={5}
                    value={JobData.Responsibilities}
                    onChange={(value) => {
                      setJobData({ ...JobData, Responsibilities: value });
                    }}
                    className="form-textarea p-2 mt-1 block w-full border border-gray-300 rounded-md"
                    placeholder="selected Intern's day-to-day Responsibilities include."
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Internship Duration
                  </label>
                  <select
                    className="mt-1  w-80 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="internshipDuration"
                    onChange={handleChange}
                    value={JobData.internshipDuration}
                  >
                    <option>Please select</option>
                    {[...Array(6).keys()].map((day) => (
                      <option key={day} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    className="mt-1 ml-5  w-100 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="internshipDurationFrequency"
                    onChange={handleChange}
                    value={JobData.internshipDurationFrequency}
                  >
                    <option>Please select</option>
                    <option value="week">week</option>
                    <option value="month">month</option>
                  </select>
                </div>
              </div>
              <label className=" block mb-2 font-bold text-gray-700 ">
                Stipend & Perks
              </label>
              <div className="mb-4 border rounded p-2 px-5">
                <label className="block text-sm font-medium text-gray-700">
                  Stipend
                </label>
                <div className="mt-2">
                  <label className="inline-flex items-center ">
                    <input
                      type="radio"
                      className="form-radio"
                      name="stipendType"
                      value="fixed"
                      checked={JobData.stipendType === "fixed"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Fixed</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="stipendType"
                      value="negotiable"
                      checked={JobData.stipendType === "negotiable"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Negotiable</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="stipendType"
                      value="performanceBased"
                      checked={JobData.stipendType === "performanceBased"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Performance Based</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="stipendType"
                      value="unpaid"
                      checked={JobData.stipendType === "unpaid"}
                      onChange={handleChange}
                    />
                    <span className="ml-2">Unpaid</span>
                  </label>
                </div>
                {JobData.stipendType !== "unpaid" && (
                  <>
                    <div className="flex justify-start items-center gap-5 mt-2">
                      <div className="mb-4">
                        <select
                          className="mt-1 w-100 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          name="currency"
                          onChange={handleChange}
                          value={JobData.currency}
                        >
                          <option value="INR">INR</option>
                          <option value="USD">USD</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <input
                          value={JobData.stipend}
                          name="stipend"
                          type="text"
                          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="eg . 2000"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <select
                          className=" w-100 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          name="jobFrequency"
                          onChange={handleChange}
                          value={JobData.jobFrequency}
                        >
                          <option value="Week">Week</option>
                          <option value="Month">Month</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
                <label className="block mt-4 text-sm font-medium text-gray-700">
                  Perks
                </label>
                <div className="mb-4 flex flex-wrap">
                  {[
                    "Certificate",
                    "Letter of recommendation",
                    "Flexible work hours ",
                    "5 days a week",
                    "Informal dress code",
                    "Free snacks & beverages",
                  ].map((perk) => (
                    <label
                      key={perk}
                      className="inline-flex items-center w-1/2 p-2"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        value={perk}
                        checked={JobData.perks.includes(perk)}
                        onChange={(e) => {
                          const { value, checked } = e.target;
                          let updatedPerks = [...JobData.perks];

                          if (checked) {
                            updatedPerks.push(value);
                          } else {
                            updatedPerks = updatedPerks.filter(
                              (perk) => perk !== value
                            );
                          }

                          setJobData({ ...JobData, perks: updatedPerks });
                        }}
                      />
                      <span className="ml-2">{perk}</span>
                    </label>
                  ))}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Does this internship come with a pre-placement offer (PPO)?
                    (Optional)
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name="ppo"
                        value={JobData.ppo}
                        checked={JobData.ppo === true}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="ppo"
                        value={JobData.ppo}
                        checked={JobData.ppo === false}
                        onChange={handleChange}
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="mb-4">
            <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
              Interview Process
            </label>
            <div className="mb-1 border rounded p-2 px-2">
              <div className="w-full border-[#d9d9d9] rounded-[10px] pt-[3px] mb-1">
                {rounds.map((round, index) => (
                  <div key={index} className="flex flex-col gap-[6px]">
                    <div className="flex flex-col lg:flex-row w-full justify-start items-center gap-[16px]">
                      <p className="text-[16px] w-[100px] font-[500] border-[1px] text-[#8d8d8d] border-black py-[4px] pl-[11px] rounded-[8px]">
                        {`Round ${round.Round}`}
                      </p>
                      <div className="relative ">
                        <SelectBox
                          className="border border-[#5956e9] bg-white w-[260px] font-[500] text-[16px]"
                          placeholderClassName="text-[#5956e9]"
                          isMulti={false}
                          name={`group-${index}`}
                          options={chooseDateOptionsList.filter(
                            (option) =>
                              !rounds.some((r) => r.Assessment === option.value)
                          )}
                          isSearchable={false}
                          placeholder="Select Type"
                          shape="round"
                          size="xs"
                          onChange={(value) =>
                            handleRoundTypeChange(index, value)
                          }
                        />
                        <img
                          onClick={() => removeRound(index)}
                          src="/images/cancel-svgrepocom.png"
                          className="absolute right-[-30px] top-[11px] w-[28px] h-[28px] rounded-[50%]"
                          alt=""
                        />
                      </div>
                    </div>
                    {round.Assessment === "Skill Assessment" && (
                      <>
                        <div className="p-4 border border-gray-300 rounded-md mb-4">
                          <div>
                            {assessmentSkills?.map((skill, index) => (
                              <div key={index}>
                                <select
                                  value={skill.type}
                                  onChange={(e) => {
                                    const newSkills = [...assessmentSkills];
                                    newSkills[index].type = e.target.value;
                                    setAssessmentSkills(newSkills);
                                    setJobData((prev) => ({
                                      ...prev,
                                      skillAssessment: newSkills,
                                    }));
                                  }}
                                  className="form-select p-1 m-1 w-1/4 border border-gray-300 rounded-md"
                                >
                                  <option value="skill">Skill</option>
                                  <option value="experience">Experience</option>
                                  <option value="education">Education</option>
                                  <option value="communication">
                                    Communication
                                  </option>
                                </select>
                                <input
                                  type="text"
                                  value={skill.skill}
                                  onChange={(e) => {
                                    const newSkills = [...assessmentSkills];
                                    const { type } = newSkills[index]; // Assuming type is already set correctly
                                    newSkills[index] = {
                                      type,
                                      mustHave: newSkills[index].mustHave,
                                      [type]: e.target.value, // Dynamically set the skill property based on type
                                    };

                                    setAssessmentSkills(newSkills);
                                    setJobData((prev) => ({
                                      ...prev,
                                      skillAssessment: newSkills,
                                    }));
                                    console.log(assessmentSkills[index]);
                                  }}
                                  className="form-input p-1 m-1 w-1/4 border border-gray-300 rounded-md"
                                />
                                <button
                                  className="text-gray-500 mt-1 ml-5"
                                  onClick={() => {
                                    const newSkills = assessmentSkills.filter(
                                      (_, i) => i !== index
                                    );
                                    setAssessmentSkills(newSkills);
                                    setJobData((prev) => ({
                                      ...prev,
                                      skillAssessment: newSkills,
                                    }));
                                  }}
                                >
                                  <i className="fa-regular fa-trash-can"></i>
                                </button>
                              </div>
                            ))}

                            <button
                              className="text-blue-500"
                              onClick={() => {
                                setAssessmentSkills((prev) => [
                                  ...assessmentSkills,
                                  { skill: "", mustHave: false },
                                ]);
                                setJobData((prev) => ({
                                  ...prev,
                                  skillAssessment: assessmentSkills,
                                }));
                              }}
                            >
                              Add Skill
                            </button>
                          </div>
                          <div>
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800 tracking-wider">
                                    Title
                                  </th>
                                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800 tracking-wider">
                                    Must-have
                                  </th>
                                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-800 tracking-wider">
                                    Nice-to-have
                                  </th>
                                  <th className="px-6 py-3"></th>
                                </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                                {assessmentSkills.map((skill, index) => (
                                  <tr key={index}>
                                    <td className="px-6 py-4 text-gray-500">
                                      {skill?.skill}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                      <input
                                        type="radio"
                                        name={`priority${index}`}
                                        checked={skill.mustHave}
                                        onChange={() =>
                                          setAssessmentSkills((prev) =>
                                            prev.map((item, idx) =>
                                              idx === index
                                                ? { ...item, mustHave: true }
                                                : item
                                            )
                                          )
                                        }
                                      />
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                      <input
                                        type="radio"
                                        name={`priority${index}`}
                                        checked={!skill.mustHave}
                                        onChange={() =>
                                          setAssessmentSkills((prev) =>
                                            prev.map((item, idx) =>
                                              idx === index
                                                ? { ...item, mustHave: false }
                                                : item
                                            )
                                          )
                                        }
                                      />
                                    </td>

                                    <td className="px-6 py-4 text-center">
                                      <button
                                        className="text-gray-500"
                                        onClick={() => {
                                          const newSkills =
                                            assessmentSkills.filter(
                                              (_, i) => i !== index
                                            );
                                          setAssessmentSkills(newSkills);
                                          setJobData((prev) => ({
                                            ...prev,
                                            skillAssessment: assessmentSkills,
                                          }));
                                        }}
                                      >
                                        <i className="fa-regular fa-trash-can"></i>
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </>
                    )}
                    {round.Assessment === "AI Based Video" && (
                      <>
                        <div className="flex gap-[16px] mt-3">
                          <label className=" block mb-2 font-bold text-gray-700 ">
                            Video question
                          </label>
                          <button
                            onClick={() => {
                              CreateAiSuggestion("Finalise Questioner");
                            }}
                            className="bg-[#5906e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white"
                          >
                            Genrate Questions
                          </button>
                        </div>
                        <div className="mb-4 border rounded p-2 px-5">
                          <div className="mb-4">
                            <p>
                              If you want the applicants to upload a document as
                              a part of the assessment question, please ask them
                              to upload it on Dropbox or Google Drive and share
                              the link in the answer.
                            </p>
                            {videoQuestions.map((question, index) => (
                              <div key={index} className="mb-2">
                                <label className="block text-sm font-medium text-gray-700">
                                  <h2>Video question {index + 1}</h2>
                                </label>
                                <input
                                  className="form-textarea p-2 mt-1 block w-full border border-gray-300 rounded-md"
                                  rows="2"
                                  placeholder="type your questions here"
                                  value={question}
                                  onChange={(e) => {
                                    handleVidQuestion(index, e.target.value);
                                    setJobData((prev) => ({
                                      ...prev,
                                      videoQuestions: videoQuestions,
                                    }));
                                  }}
                                />
                                <button
                                  className="text-red-500 mt-1"
                                  onClick={() => {
                                    const newQuestions = videoQuestions.filter(
                                      (_, i) => i !== index
                                    );
                                    setVideoQuestions(newQuestions);
                                    setJobData((prev) => ({
                                      ...prev,
                                      videoQuestions: videoQuestions,
                                    }));
                                  }}
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                            <button
                              className="text-blue-500"
                              onClick={() => {
                                setVideoQuestions([...videoQuestions, ""]);
                                setJobData((prev) => ({
                                  ...prev,
                                  videoQuestions: videoQuestions,
                                }));
                              }}
                            >
                              + Add Video question
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              {/* <div className="mt-[1px] flex justify-start items-center">
                <button
                  onClick={addRound}
                  className="bg-black w-[110px] h-[40px] text-white rounded-[7px] text-[12px] font-[500]"
                >
                  Add Round
                </button>
              </div> */}
              <div className="mt-[1px] flex justify-start items-center ">
                <button
                  onClick={addRound}
                  className="w-[110px] h-[40px] text-white rounded-[7px] text-[12px] font-[500] bg-blue-400 hover:bg-blue-600 duration-200"
                >
                  Add Round
                </button>
              </div>
            </div>
          </div>
          {/* <div
            onClick={() => {
              CreateNewJob();
            }}
            className="flex justify-center items-center mt-[60px] mb-[51px]"
          >
            <Link className="bg-black rounded-[8px] px-[62px] py-[11px] text-white text-[18px] font-[500]">
              Create Job
            </Link>
          </div> */}
          <div
             onClick={() => {
              CreateNewJob();
            }}
            className="flex justify-center items-center mt-[60px] mb-[51px]"
          >
            <Link className="relative inline-block overflow-hidden rounded-[8px] px-[62px] py-[11px] text-white text-[18px] font-[500] bg-blue-600 group">
              <span className="relative z-10">Create Job</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCreateManual;
