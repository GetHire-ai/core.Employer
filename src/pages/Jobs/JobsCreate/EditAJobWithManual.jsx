import React, { useEffect, useRef, useState } from "react";
import { Button, Img, Text } from "components";
import { skills, positions } from "./Suggestion";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import {
  Select,
  FormLabel,
  MenuItem,
  Checkbox,
  ListItemText,
  InputLabel,
  CircularProgress,
  Chip,
  IconButton,
  Autocomplete,
  TextField,
  FormControl,
  FormHelperText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { SelectBox } from "components/SelectBox";
import axios from "axios";
import { PostApi, PutApi } from "Api/Api_Calling";
import { toast } from "react-toastify";

const noticePeriodOptions = ["15 Days", "30 Days", "2 Months", "3 Months"];

const experienceOptionsYears = [
  { label: "0 years", value: 0 },
  { label: "1 year", value: 1 },
  { label: "2 years", value: 2 },
  { label: "3 years", value: 3 },
  { label: "4 years", value: 4 },
  { label: "5 years", value: 5 },
];

const educationOptions = [
  "10",
  "12",
  "diploma",
  "iti",
  // "anyGraduate",
  // "anyPostGraduate",
  "UnderGraduate",
  "PostGraduate",
];

const graduateOptions = ["BCA", "BBA", "B.Sc", "B.Com", "B.Tech"];
const postGraduateOptions = ["MCA", "MBA", "M.Sc", "M.Com", "M.Tech"];

const salaryOptions = [
  { label: "1 lac", value: 100000 },
  { label: "2 lac", value: 200000 },
  { label: "3 lac", value: 300000 },
  { label: "4 lac", value: 400000 },
  { label: "5 lac", value: 500000 },
];

const englishLevelOptions = ["noEnglish", "basicEnglish", "goodEnglish"];

const experienceOptions = ["any", "experiencedOnly", "fresherOnly"];

const options = [
  "Select All",
  "Technical",
  "Behavioral",
  "Skill Based",
  "Competency-Based",
  "Fact-Based",
  "Situational",
];

const EditJob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const listRef = useRef(null);
  const skillListRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [allowDirectContact, setAllowDirectContact] = useState(false);
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
    minSalary: "0",
    maxSalary: "0",
    minExp: 0,
    maxExp: 0,
    currency: "INR",
    skillsRequired: [],
    description: "",
    rounds: [],
    numOfDays: "",
    shift: "",
    jobFrequency: "",
    ppo: true,
    openings: "",
    skillAssessment: [],
    finalInterview: { type: "videoCall" },
    videoInterview: {
      positionName: "",
      level: "",
      topic: "",
    },
    perks: [],
    salaryType: "fixed",
    minEducation: "",
    englishLevel: "",
    expRequired: "",
    incentive: "",
    graduation: "",
    postGraduation: "",
    noticePeriod: "",
  });
  const [minSalary, setMinSalary] = useState(JobData.minSalary || "");
  const [maxSalary, setMaxSalary] = useState(JobData.maxSalary || "");
  const [selectedPeriod, setSelectedPeriod] = useState(
    JobData?.expRequired || ""
  );
  const [minExp, setMinExp] = useState(JobData.minExp || "");
  const [maxExp, setMaxExp] = useState(JobData.maxExp || "");
  const filteredMaxSalaryOptions = salaryOptions.filter(
    (option) => option.value > minSalary
  );
  const filteredMaxExpOptions = experienceOptionsYears.filter(
    (option) => option.value > minExp
  );
  const [skillInput, setSkillInput] = useState("");
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [videoQuestions, setVideoQuestions] = useState([""]);
  const [render, setRender] = useState(false);
  const [AISuggestions, setAISuggestions] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [positionNames, setPositionNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [SkillLoading, setSkillLoading] = useState(false);
  const [JDLoading, setJDLoading] = useState(false);
  const [interview, setInterview] = useState([]);
  const [rounds, setRounds] = useState(JobData?.rounds || []);
  const [assessmentSkills, setAssessmentSkills] = useState([
    { type: "skill", mustHave: false },
  ]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [finalInterview, setFinalInterview] = useState({
    type: "phoneCall",
    joiningPrefrence: "immidiate",
    minHike: 0,
    maxHike: 0,
    whatsapp: 0,
  });
  const [videoInterview, setVideoInterview] = useState({
    positionName: JobData?.positionName,
    level: "",
    topic: [],
  });
  const predefinedSkills = skills;
  const predefinedPositionNames = positions;
  const validate = () => {
    const requiredFields = {
      positionName: JobData.positionName,
      skillsRequired: JobData.skillsRequired.length,
      jobType: JobData.jobType,
      shift: JobData.shift,
      minEducation: JobData.minEducation,
      englishLevel: JobData.englishLevel,
      expRequired: JobData.expRequired,
      openings: JobData.openings,
    };

    const emptyFields = Object.entries(requiredFields)
      .filter(([key, value]) =>
        typeof value === "string" ? value.trim() === "" : value === 0
      )
      .map(([key]) => key);

    if (emptyFields.length > 0) {
      setFormSubmitted(true);
      const message = `Please fill the following mandatory fields: ${emptyFields.join(
        ", "
      )}!`;
      toast.error(message, { autoClose: 1000 });
      return;
    }
  };

  const handleQuestionChange = (topic, index, newValue) => {
    setJobData((prev) => {
      const updatedQuestions = prev.videoQuestions.map((q) => {
        if (q.topic === topic) {
          const updatedTopicQuestions = [...q.questions];
          updatedTopicQuestions[index] = newValue;
          return { ...q, questions: updatedTopicQuestions };
        }
        return q;
      });

      return { ...prev, videoQuestions: updatedQuestions };
    });
  };

  const handleRemoveQuestion = (topic, index) => {
    setJobData((prev) => {
      const updatedQuestions = prev.videoQuestions.map((q) => {
        if (q.topic === topic) {
          const updatedTopicQuestions = q.questions.filter(
            (_, i) => i !== index
          );
          return { ...q, questions: updatedTopicQuestions };
        }
        return q;
      });

      return { ...prev, videoQuestions: updatedQuestions };
    });
  };

  const handleRemoveCategory = (topic) => {
    setJobData((prev) => ({
      ...prev,
      videoQuestions: prev.videoQuestions.filter((q) => q.topic !== topic),
    }));
  };

  const handleAddQuestion = (topic) => {
    setJobData((prev) => {
      const updatedQuestions = prev.videoQuestions.map((q) => {
        if (q.topic === topic) {
          const updatedTopicQuestions = [...q.questions, ""];
          return { ...q, questions: updatedTopicQuestions };
        }
        return q;
      });

      return { ...prev, videoQuestions: updatedQuestions };
    });
  };

  const handleAddCategory = () => {
    setJobData((prev) => ({
      ...prev,
      videoQuestions: [
        ...(prev.videoQuestions || []),
        { topic: "", questions: [""] },
      ],
    }));
  };

  const handleCategoryChange = (index, newTopic) => {
    setJobData((prev) => {
      const updatedCategories = [...prev.videoQuestions];
      updatedCategories[index] = {
        ...updatedCategories[index],
        topic: newTopic,
      };
      return { ...prev, videoQuestions: updatedCategories };
    });
  };

  const renderQuestions = (category, questions, categoryIndex) => (
    <div className="mb-4 font-[poppins]">
      <div className="flex items-center justify-between">
        <h3
          className="font-semibold text-gray-700"
          style={{ textTransform: "capitalize" }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)} Questions:
        </h3>

        <div className="mr-4">
          <IconButton onClick={() => handleAddQuestion(category)}>
            <i className="fa-solid fa-plus text-md"></i>
          </IconButton>
          <IconButton onClick={() => handleRemoveCategory(category)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      {questions.map((question, index) => (
        <div
          key={index}
          className="relative flex items-center font-[poppins] mb-4"
        >
          <TextField
            style={{ fontFamily: "poppins" }}
            className="bg-[#f8fbff] rounded-2xl font-[poppins]"
            value={question}
            onChange={(e) =>
              handleQuestionChange(category, index, e.target.value)
            }
            fullWidth
            // multiline
            // rows={2}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => handleRemoveQuestion(category, index)}
                >
                  <DeleteIcon />
                </IconButton>
              ),
            }}
          />
        </div>
      ))}
    </div>
  );

  const CreateNewJob = async () => {
    validate();
    try {
      setLoading(true);

      const responce = await PutApi(
        `api/CompanyRoutes/UpdateJob/${state.job._id}`,
        JobData
      );
      toast.success(responce?.data?.message, { autoClose: 1000 });
      navigate("/jobs");
    } catch (error) {
      toast.error(error?.response?.data?.message, { autoClose: 1000 });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const scrollToSelectedIndex = () => {
    if (listRef.current && selectedSuggestionIndex !== -1) {
      const selectedElement =
        listRef.current.childNodes[selectedSuggestionIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };
  const chooseDateOptionsList = [
    { label: "Skill Assessment", value: "Skill Assessment" },
    { label: "AI Based Video", value: "AI Based Video" },
    { label: "Final Interview", value: "Final Interview" },
  ];
  const addRound = () => {
    const newRound = { Round: rounds.length + 1, Assessment: "" };
    setRounds([...rounds, newRound]);
    setJobData({ ...JobData, rounds: rounds });
  };
  const CreateAiSuggestion = async (suggestionFor) => {
    try {
      setJDLoading(true);
      setSkillLoading(true);
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

      let response = await axios.post(
        "https://get-hire-ai.vercel.app/job-suggestion",
        data,
        config
      );

      if (
        suggestionFor ===
        "description give first 100 words desc and then points in number format"
      ) {
        setJobData({ ...JobData, description: response?.data?.res });
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
      if (suggestionFor === "Skill Required separate with comma") {
        const newSkills = response?.data?.res
          .split(",")
          .map((skill) => skill.trim());
        setAISuggestions(newSkills);
      }
      if (
        suggestionFor ===
        `interview ques for ${JobData?.positionName} give in first opening ques and then technical,behavioral,skillbased in numbers give first heading and ques in array for all give [ {heading:heading,quesitons:["ques"]} ]`
      ) {
        setInterview(response.data.res);
        try {
          const interviewQuestions = JSON.parse(response.data.res);
          setInterview(interviewQuestions);
          console.log(interviewQuestions);
        } catch (error) {
          console.error("Error parsing JSON response:", error);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error: ${error.response?.data?.message || error.message}`, {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
      setJDLoading(false);
      setSkillLoading(false);
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
    setJobData({ ...JobData, rounds: updatedRounds });
  };

  const handleRoundTypeChange = (index, value) => {
    const updatedRounds = [...rounds];
    updatedRounds[index].Assessment = value;
    setRounds(updatedRounds);
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
    const input = e.target.value.trim(); // Trim whitespace from input
    setJobData((prev) => ({
      ...prev,
      positionName: input,
    }));

    if (input !== "") {
      const Suggestions = predefinedPositionNames.filter((name) =>
        name.toLowerCase().includes(input.toLowerCase())
      );
      // .slice(0, 10);

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
  const companydataString = localStorage.getItem("companydata");
  const companydata = JSON.parse(companydataString);

  useEffect(() => {
    if (state === null) {
      navigate("/jobs");
    }
    setJobData((prev) => ({
      ...prev,
      ...state.job,
    }));
    console.log(state.job);
  }, [state]);
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
            Edit a Job
          </p>
        </div>
        <div className="max-w-4xl mx-auto p-6 bg-white  rounded-md">
          <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
            Opportunity type
          </label>

          <div className="mb-4 border rounded-lg p-4 bg-white shadow-md">
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center hover:cursor-pointer">
                <input
                  type="radio"
                  className="hover:cursor-pointer form-radio text-blue-600"
                  name="type"
                  value="internship"
                  checked={JobData.type === "internship"}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">Internship</span>
              </label>
              <label className="inline-flex items-center hover:cursor-pointer">
                <input
                  type="radio"
                  className="form-radio hover:cursor-pointer text-blue-600"
                  name="type"
                  value="job"
                  checked={JobData.type === "job"}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700">Job</span>
              </label>
            </div>
          </div>

          {JobData.type === "job" && (
            <>
              <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
                Job Details
              </label>
              <div className="mb-4 border rounded p-2 shadow-md">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Company You Are Hiring For
                  </label>
                  <input
                    type="text "
                    className={`mt-1 block hover:shadow-lg w-full px-3 py-2 bg-white border border-gray-300 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-500`}
                    disabled
                    value={companydata?.Name}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Positin Name{" "}
                    <span className="text-red-600 text-md ml-1">*</span>
                  </label>
                  <input
                    value={JobData.positionName}
                    name="positionName"
                    type="text"
                    className={`mt-1 hover:shadow-xl block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formSubmitted && JobData.positionName === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Creative Design"
                    onChange={(e) => {
                      handleChange(e);
                      handlePositionNameInputChange(e);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (selectedSuggestionIndex !== -1) {
                          setJobData({
                            ...JobData,
                            positionName:
                              positionNames[selectedSuggestionIndex],
                          });
                          CreateAiSuggestion(
                            "Skill Required separate with comma"
                          );
                          setPositionNames([]);
                        } else {
                          setJobData({
                            ...JobData,
                            positionName: e.target.value,
                          });
                          CreateAiSuggestion(
                            "Skill Required separate with comma"
                          );
                        }
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setSelectedSuggestionIndex((prevIndex) =>
                          prevIndex > 0
                            ? prevIndex - 1
                            : positionNames.length - 1
                        );
                        scrollToSelectedIndex();
                      } else if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setSelectedSuggestionIndex((prevIndex) =>
                          prevIndex < positionNames.length - 1
                            ? prevIndex + 1
                            : 0
                        );
                        scrollToSelectedIndex();
                      }
                    }}
                  />
                  {positionNames.length > 0 && (
                    <ul
                      ref={listRef}
                      className="bg-white border border-gray-300 rounded-md mt-2 "
                      style={{
                        maxHeight: "20rem",
                        overflow: "auto",
                      }}
                    >
                      {positionNames.map((name, index) => (
                        <li
                          key={index}
                          className={`p-2 cursor-pointer hover:bg-gray-200 ${
                            index === selectedSuggestionIndex
                              ? "bg-gray-200"
                              : ""
                          }`}
                          onClick={() => {
                            setJobData({
                              ...JobData,
                              positionName: name,
                            });
                            CreateAiSuggestion(
                              "Skill Required separate with comma"
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
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Skills required (Optional){" "}
                    <span className="text-red-600 text-md ml-1">*</span>
                    <Button
                      className="ml-2 bg-[#5956e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white"
                      onClick={() =>
                        CreateAiSuggestion("Skill Required separate with comma")
                      }
                    >
                      Suggest Skills
                    </Button>
                  </label>
                  <input
                    type="text"
                    className={`mt-1 hover:shadow-xl block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formSubmitted && JobData.skillsRequired.length === 0
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="e.g. Java"
                    value={skillInput}
                    onChange={handleSkillInputChange}
                    onKeyPress={handleSkillInputKeyPress}
                  />
                  {suggestions.length > 0 && (
                    <div
                      className="bg-white border border-gray-300 rounded-md  max-h-100 overflow-y-auto"
                      style={{
                        maxHeight: "20rem",
                        overflow: "auto",
                      }}
                    >
                      {suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className={`p-2 cursor-pointer hover:bg-gray-200 ${
                            index === selectedSuggestionIndex
                              ? "bg-gray-200"
                              : ""
                          }`}
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
                  {SkillLoading && (
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
                    Job type{" "}
                    <span className="text-red-600 text-md ml-1">*</span>{" "}
                  </label>
                  <div className="mt-2">
                    <label className="inline-flex items-center hover:cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="jobType"
                        value="remote"
                        checked={JobData.jobType === "remote"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Work From Home</span>
                    </label>
                    <label className="inline-flex items-center hover:cursor-pointer ml-6">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="jobType"
                        value="inOffice"
                        checked={JobData.jobType === "inOffice"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Work From office</span>
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
                  </div>
                  <span className="text-sm font-medium text-red-600">
                    {JobData?.jobType === "" &&
                      formSubmitted &&
                      "Please Select"}
                  </span>
                </div>
                {JobData.jobType === "hybrid" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      No. of in-office days in a week
                    </label>
                    <select
                      className="mt-1 block w-80 px-3 py-2 hover:shadow-xl bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    Part-time/Full-time{" "}
                    <span className="text-red-600 text-md ml-1">*</span>{" "}
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
                    <label className="inline-flex items-center ml-6 hover:cursor-pointer">
                      <input
                        type="radio"
                        className=" hover:cursor-pointer form-radio"
                        name="shift"
                        value="fullTime"
                        checked={JobData.shift === "fullTime"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">Full-time</span>
                    </label>
                    <label className="inline-flex items-center ml-6 hover:cursor-pointer">
                      <input
                        type="radio"
                        className="form-radio hover:cursor-pointer"
                        name="shift"
                        value="both"
                        checked={JobData.shift === "both"}
                        onChange={handleChange}
                      />
                      <span className="ml-2 hover:cursor-pointer">
                        Both (Part-time and Full-time)
                      </span>
                    </label>
                  </div>
                  <span className="text-sm font-medium text-red-600">
                    {JobData?.shift === "" && formSubmitted && "Please Select"}
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 my-2">
                        Experinced Required
                        <span className="text-red-600 text-md ml-1">*</span>
                        {JobData?.expRequired !== "fresherOnly" && (
                          <div className="flex items-center mt-4">
                            <div className="flex items-center w-3/4 gap-4">
                              <TextField
                                select
                                label="Min"
                                name="minExp"
                                value={minExp}
                                onChange={(event) => {
                                  const newValue = event.target.value;
                                  setMinExp(newValue);
                                  // Update JobData and ensure maxExp is valid
                                  handleChange({
                                    target: { name: "minExp", value: newValue },
                                  });
                                  if (newValue >= maxExp) {
                                    setMaxExp("");
                                    handleChange({
                                      target: { name: "maxExp", value: "" },
                                    });
                                  }
                                }}
                                SelectProps={{
                                  native: true,
                                }}
                                variant="outlined"
                                size="small"
                                style={{ width: 250 }}
                              >
                                <option value="">Min</option>
                                {experienceOptionsYears.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </TextField>
                              <span className="text-gray-700">to</span>
                              <TextField
                                select
                                label="Max"
                                name="maxExp"
                                value={maxExp}
                                onChange={(event) => {
                                  setMaxExp(event.target.value);
                                  handleChange(event);
                                }}
                                SelectProps={{
                                  native: true,
                                }}
                                variant="outlined"
                                size="small"
                                style={{ width: 250 }}
                              >
                                <option value="">Max</option>
                                {filteredMaxExpOptions.map((option) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))}
                              </TextField>
                              <span className="text-gray-700">years</span>
                            </div>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                  {JobData?.salaryType !== "fixed" && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Incentives
                        <span className="text-red-600 text-md ml-1">*</span>
                      </label>
                      <input
                        value={JobData?.incentive}
                        name="incentive"
                        type="number"
                        className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                          formSubmitted && JobData?.incentive === ""
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder="Add Incentive"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 justify-between">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 my-2">
                        Salary Range
                        <span className="text-red-600 text-md ml-1">*</span>
                      </label>
                      <div className="flex items-center w-3/4 gap-4 justify-start">
                        <TextField
                          select
                          name="minSalary"
                          value={minSalary}
                          onChange={(event) => {
                            const newValue = event.target.value;
                            setMinSalary(newValue);
                            handleChange({
                              target: { name: "minSalary", value: newValue },
                            });
                            if (newValue >= maxSalary) {
                              setMaxSalary("");
                              handleChange({
                                target: { name: "maxSalary", value: "" },
                              });
                            }
                          }}
                          SelectProps={{
                            native: true,
                          }}
                          variant="outlined"
                          size="small"
                          style={{ width: 250 }}
                        >
                          <option value="">Min</option>
                          {salaryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                        <span className="text-gray-700">to</span>
                        <TextField
                          select
                          name="maxSalary"
                          value={maxSalary}
                          onChange={(event) => {
                            setMaxSalary(event.target.value);
                            handleChange(event);
                          }}
                          SelectProps={{
                            native: true,
                          }}
                          variant="outlined"
                          size="small"
                          style={{ width: 250 }}
                        >
                          <option value="">Max</option>
                          {filteredMaxSalaryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </TextField>
                        <span className="text-gray-700">/ Year</span>
                      </div>
                    </div>
                  </div>
                  {JobData?.salaryType !== "fixed" && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Incentives
                        <span className="text-red-600 text-md ml-1">*</span>
                      </label>
                      <input
                        value={JobData?.incentive}
                        name="incentive"
                        type="number"
                        className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                          formSubmitted && JobData?.incentive === ""
                            ? "border-red-500"
                            : ""
                        }`}
                        placeholder="Add Incentive"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
                {JobData.jobType !== "remote" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      City<span className="text-red-600 text-md ml-1">*</span>
                    </label>
                    <input
                      value={JobData.location}
                      name="location"
                      type="text"
                      className={`mt-1 block w-full px-3 py-2 bg-white border hover:shadow-xl border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        formSubmitted && JobData.location === ""
                          ? "border-red-500"
                          : ""
                      }`}
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
                    <span className="text-red-600 text-md ml-1">*</span>
                  </label>
                  <input
                    value={JobData.openings}
                    name="openings"
                    type="text"
                    className={`mt-1 block w-full hover:shadow-xl px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formSubmitted && JobData.openings === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="e.g 5"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className=" block mb-2 font-bold text-gray-700 ">
                    <div className="flex gap-[16px]">
                      <p className="text-[14px] font-[600]">
                        Job's description{" "}
                        <span className="text-red-600 text-md ml-3">*</span>
                      </p>
                      <button
                        onClick={() => {
                          CreateAiSuggestion(
                            "description give first 100 words desc and then points in number format"
                          );
                        }}
                        className="bg-[#5906e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white"
                      >
                        Edit with AI
                      </button>
                    </div>
                    <div className="text-sm font-semibold text-gray-400 my-1">
                      Our AI genrates job description for you. You can make
                      changes to better align with your hiring needs
                    </div>
                  </label>
                  <textarea
                    rows={5}
                    value={JobData.description}
                    onChange={(e) => {
                      setJobData({
                        ...JobData,
                        description: e.target.value,
                      });
                    }}
                    className={`form-textarea hover:shadow-xl p-2 mt-1 block w-full border border-gray-300 rounded-md ${
                      formSubmitted && JobData.Responsibilities === ""
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="selected Intern's day-to-day description include."
                  />
                </div>
              </div>

              <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
                Candidate Requirements
              </label>
              <p className="text-sm text-gray-500 mb-2">
                we will use this Requirements details to make your job visible
                to right candidates
              </p>

              <div className="mb-4 bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                <div className="mb-4">
                  <div className="flex items-center mb-4">
                    <FormLabel className="w-1/3 text-lg font-semibold text-gray-900">
                      Minimum Education
                      <span className="text-red-600 text-lg ml-1">*</span>
                    </FormLabel>
                    <FormControl
                      className="w-2/3"
                      error={JobData?.minEducation === "" && formSubmitted}
                    >
                      <Autocomplete
                        options={educationOptions}
                        value={JobData?.minEducation}
                        onChange={(event, newValue) =>
                          setJobData((prev) => ({
                            ...prev,
                            minEducation: newValue,
                          }))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Select education"
                          />
                        )}
                      />
                      {JobData?.minEducation === "" && formSubmitted && (
                        <FormHelperText>Please Select</FormHelperText>
                      )}
                    </FormControl>
                  </div>
                  {JobData?.minEducation === "graduate" && (
                    <div className="flex items-center mb-4">
                      <FormLabel className="w-1/3 text-lg font-semibold text-gray-900">
                        Select UG
                        <span className="text-red-600 text-lg ml-1">*</span>
                      </FormLabel>
                      <FormControl
                        className="w-2/3"
                        error={JobData?.graduation === "" && formSubmitted}
                      >
                        <Autocomplete
                          options={graduateOptions}
                          value={JobData?.graduation}
                          onChange={(event, newValue) =>
                            setJobData((prev) => ({
                              ...prev,
                              graduation: newValue,
                            }))
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Select education"
                            />
                          )}
                        />
                        {JobData?.graduation === "" && formSubmitted && (
                          <FormHelperText>Please Select</FormHelperText>
                        )}
                      </FormControl>
                    </div>
                  )}
                  {JobData?.minEducation === "postGraduate" && (
                    <div className="flex items-center mb-4">
                      <FormLabel className="w-1/3 text-lg font-semibold text-gray-900">
                        Select PG
                        <span className="text-red-600 text-lg ml-1">*</span>
                      </FormLabel>
                      <FormControl
                        className="w-2/3"
                        error={JobData?.postGraduation === "" && formSubmitted}
                      >
                        <Autocomplete
                          options={postGraduateOptions}
                          value={JobData?.postGraduation}
                          onChange={(event, newValue) =>
                            setJobData((prev) => ({
                              ...prev,
                              postGraduation: newValue,
                            }))
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Select education"
                            />
                          )}
                        />
                        {JobData?.postGraduation === "" && formSubmitted && (
                          <FormHelperText>Please Select</FormHelperText>
                        )}
                      </FormControl>
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <FormLabel className="w-1/3 text-lg font-semibold text-gray-900">
                      Communication
                      <span className="text-red-600 text-lg ml-1">*</span>
                    </FormLabel>
                    <FormControl
                      className="w-2/3"
                      error={JobData?.englishLevel === "" && formSubmitted}
                    >
                      <Autocomplete
                        options={englishLevelOptions}
                        value={JobData?.englishLevel}
                        onChange={(event, newValue) =>
                          setJobData((prev) => ({
                            ...prev,
                            englishLevel: newValue,
                          }))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Select English level"
                          />
                        )}
                      />
                      {JobData?.englishLevel === "" && formSubmitted && (
                        <FormHelperText>Please Select</FormHelperText>
                      )}
                    </FormControl>
                  </div>

                  <div className="flex items-center mb-4">
                    <FormLabel className="w-1/3 text-lg font-semibold text-gray-900">
                      Total Experience Required
                      <span className="text-red-600 text-lg ml-1">*</span>
                    </FormLabel>
                    <FormControl
                      className="w-2/3"
                      error={JobData?.expRequired === "" && formSubmitted}
                    >
                      <Autocomplete
                        options={experienceOptionsYears}
                        value={JobData?.expRequired}
                        onChange={(event, newValue) =>
                          setJobData((prev) => ({
                            ...prev,
                            expRequired: newValue,
                          }))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Select experience"
                          />
                        )}
                      />
                      {JobData?.expRequired === "" && formSubmitted && (
                        <FormHelperText>Please Select</FormHelperText>
                      )}
                    </FormControl>
                  </div>
                  <div className="flex mb-4">
                    <FormLabel className="text-lg font-semibold text-gray-900 w-1/3">
                      Notice Period
                      <span className="text-red-600 text-lg ml-1">*</span>
                    </FormLabel>
                    <FormControl
                      className="mt-2 w-2/3"
                      error={selectedPeriod === "" && formSubmitted}
                    >
                      <div className="flex gap-3 flex-wrap">
                        {noticePeriodOptions.map((option) => (
                          <Chip
                            key={option}
                            label={`${option} or less`}
                            clickable
                            onClick={() => {
                              setSelectedPeriod(option);
                              setJobData((prev) => ({
                                ...prev,
                                noticePeriod: option,
                              }));
                            }}
                            color={
                              selectedPeriod === option ? "primary" : "default"
                            }
                            className={`cursor-pointer  ${
                              selectedPeriod === option
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                        <Chip
                          label={`More Than 3 Months`}
                          clickable
                          onClick={() => {
                            setSelectedPeriod("More Than 3 Months");
                            setJobData((prev) => ({
                              ...prev,
                              noticePeriod: "More Than 3 Months",
                            }));
                          }}
                          color={
                            selectedPeriod === "More Than 3 Months"
                              ? "primary"
                              : "default"
                          }
                          className={`cursor-pointer  ${
                            selectedPeriod === "More Than 3 Months"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200"
                          }`}
                        />
                      </div>
                      {selectedPeriod === "" && formSubmitted && (
                        <FormHelperText className="mt-1">
                          Please Select
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* <div className="mb-6 border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  What is Pay Type?
                  <span className="text-red-600 text-lg ml-1">*</span>
                </label>

                <div className="flex flex-wrap gap-3 mb-4">
                  <div
                    className={`mr-2 mb-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-full text-md cursor-pointer transition-colors hover:text-blue-600 hover:border-blue-600 ${
                      JobData?.salaryType === "fixed"
                        ? "text-blue-600 border-blue-600"
                        : ""
                    }`}
                    onClick={() => {
                      setJobData((prev) => ({ ...prev, salaryType: "fixed" }));
                    }}
                  >
                    Fixed Only
                  </div>
                  <div
                    className={`mr-2 mb-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-full text-md cursor-pointer transition-colors hover:text-blue-600 hover:border-blue-600 ${
                      JobData?.salaryType === "withIncentive"
                        ? "text-blue-600 border-blue-600"
                        : ""
                    }`}
                    onClick={() => {
                      setJobData((prev) => ({
                        ...prev,
                        salaryType: "withIncentive",
                      }));
                    }}
                  >
                    Fixed + Incentive
                  </div>
                  <div
                    className={`mr-2 mb-2 px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-full text-md cursor-pointer transition-colors hover:text-blue-600 hover:border-blue-600 ${
                      JobData?.salaryType === "onlyIncentive"
                        ? "text-blue-600 border-blue-600"
                        : ""
                    }`}
                    onClick={() => {
                      setJobData((prev) => ({
                        ...prev,
                        salaryType: "onlyIncentive",
                      }));
                    }}
                  >
                    Incentive Only
                  </div>
                </div>

                {JobData.incentive && (
                  <div className="w-full overflow-x-auto mt-4">
                    <table className="table-auto border-collapse bg-blue-50 w-full rounded-md shadow-md">
                      <thead>
                        <tr className="bg-blue-100 text-blue-700">
                          <th className="px-4 py-2 text-left">Description</th>
                          <th className="px-4 py-2 text-left">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">Fixed Salary</td>
                          <td className="px-4 py-2 border-b">
                            {JobData?.minSalary}-{JobData?.maxSalary}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Incentives</td>
                          <td className="px-4 py-2 border-b">
                            {JobData?.incentive}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b text-right">
                            Total
                          </td>
                          <td className="px-4 py-2 border-b">
                            {parseInt(JobData?.minSalary) +
                              parseInt(JobData?.incentive)}{" "}
                            -{" "}
                            {parseInt(JobData?.maxSalary) +
                              parseInt(JobData?.incentive)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div> */}
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
                    <span className="text-red-600 text-md ml-1">*</span>
                  </label>
                  <input
                    value={JobData.positionName}
                    name="positionName"
                    type="text"
                    className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formSubmitted && JobData.positionName === ""
                        ? "border-red-500"
                        : ""
                    }`}
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
                    <span className="text-red-600 text-md ml-1">*</span>
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
                    className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formSubmitted && JobData.skillsRequired.length === 0
                        ? "border-red-500"
                        : ""
                    }`}
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
                    Internship type{" "}
                    <span className="text-red-600 text-md ml-1">*</span>{" "}
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
                      <span className="ml-2">Work From office</span>
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
                      <span className="ml-2">Work From Home</span>
                    </label>
                  </div>
                  <span className="text-sm font-medium text-red-600">
                    {JobData?.internshipType === "" &&
                      formSubmitted &&
                      "Please Select"}
                  </span>
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
                    <span className="text-red-600 text-md ml-1">*</span>{" "}
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
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        className="form-radio"
                        name="shift"
                        value="both"
                        checked={JobData.shift === "both"}
                        onChange={handleChange}
                      />
                      <span className="ml-2">
                        Both (Part-time and Full-time)
                      </span>
                    </label>
                  </div>
                  <span className="text-sm font-medium text-red-600">
                    {JobData?.shift === "" && formSubmitted && "Please Select"}
                  </span>
                </div>
                {JobData.internshipType !== "remote" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      City<span className="text-red-600 text-md ml-1">*</span>
                    </label>
                    <input
                      value={JobData.location}
                      name="location"
                      type="text"
                      className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        formSubmitted && JobData.location === ""
                          ? "border-red-500"
                          : ""
                      }`}
                      placeholder="e.g Mumbai"
                      onChange={handleChange}
                    />
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    oumber Of openings
                    <span className="text-red-600 text-md ml-1">*</span>
                  </label>
                  <input
                    value={JobData.openings}
                    name="openings"
                    type="text"
                    className={`mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      formSubmitted && JobData.openings === ""
                        ? "border-red-500"
                        : ""
                    }`}
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
                        Inter's description
                      </p>
                      <button
                        onClick={() => {
                          CreateAiSuggestion(
                            "description give first 100 words desc and then points in number format"
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
                    value={JobData.description}
                    onChange={(e) => {
                      setJobData({
                        ...JobData,
                        description: e.target.value,
                      });
                    }}
                    className="form-textarea p-2 mt-1 block w-full border border-gray-300 rounded-md"
                    placeholder="selected Intern's day-to-day description include."
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
              AI Interview Process
            </label>

            <div className="mb-1 border rounded p-2 px-2">
              <div className="w-full border-[#d9d9d9] rounded-[10px] pt-[3px] mb-1">
                {rounds.map((round, index) => (
                  <div key={index} className="flex flex-col gap-[6px]">
                    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-[16px]">
                      <div className="flex gap-[16px]">
                        <p className="text-[16px] w-[100px] font-[500] border-[1px] text-[#8d8d8d] border-black py-[4px] pl-[11px] rounded-[8px]">
                          {`Round ${index + 1}`}
                        </p>
                        <div className="relative ">
                          <SelectBox
                            className="border border-[#5956e9] bg-white w-[260px] font-[500] text-[16px]"
                            placeholderClassName="text-[#5956e9]"
                            isMulti={false}
                            name={`group-${index}`}
                            options={chooseDateOptionsList.filter(
                              (option) =>
                                !rounds.some(
                                  (r) => r.Assessment === option.value
                                )
                            )}
                            isSearchable={false}
                            shape="round"
                            size="xs"
                            onChange={(value) =>
                              handleRoundTypeChange(index, value)
                            }
                          />
                        </div>
                        {round.Assessment === "Skill Assessment" && (
                          <button
                            className="bg-[#1962c5] text-white h-[2rem] font-semibold px-5 rounded hover:bg-blue-900"
                            onClick={async () => {
                              // const newSkills = JobData?.skillsRequired.map(
                              //   (skill) => ({
                              //     type: "skill",
                              //     skill: skill,
                              //     mustHave: true,
                              //   })
                              // );
                              // setAssessmentSkills(newSkills);
                              // setJobData((prev) => ({
                              //   ...prev,
                              //   skillAssessment: newSkills,
                              // }));
                              try {
                                setJDLoading(true);
                                setSkillLoading(true);
                                if (!JobData || JobData.positionName === "") {
                                  toast.error("Job title is required", {
                                    autoClose: 1000,
                                  });
                                  return;
                                }
                                const data = {
                                  jobTitle: JobData.positionName,
                                  suggestionFor:
                                    "5 must have Skills Required separate with comma",
                                };
                                const config = {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                  },
                                };

                                let response = await axios.post(
                                  "https://get-hire-ai.vercel.app/job-suggestion",
                                  data,
                                  config
                                );

                                const newSkills = response?.data?.res
                                  .split(",")
                                  .map((skill) => skill.trim());

                                const skillsToAdd = newSkills.map((skill) => ({
                                  type: "skill",
                                  skill: skill,
                                  mustHave: true,
                                }));

                                setAssessmentSkills(skillsToAdd);
                                setJobData((prev) => ({
                                  ...prev,
                                  skillAssessment: skillsToAdd,
                                }));
                              } catch (error) {
                                console.error(error);
                                toast.error(
                                  `Error: ${
                                    error.response?.data?.message ||
                                    error.message
                                  }`,
                                  {
                                    autoClose: 1000,
                                  }
                                );
                              } finally {
                                setLoading(false);
                                setJDLoading(false);
                                setSkillLoading(false);
                              }
                            }}
                          >
                            Fill With AI
                          </button>
                        )}
                      </div>
                      <img
                        onClick={() => removeRound(index)}
                        src="/images/cancel-svgrepocom.png"
                        className="right-[-30px] top-[5px] w-[28px] h-[28px] rounded-[50%]"
                        alt=""
                      />
                    </div>
                    {round.Assessment === "Skill Assessment" && (
                      <>
                        <div className="p-4 border border-gray-300 rounded-md mb-4">
                          <div className="text-sm font-semibold text-gray-800">
                            Find the best candidates by telling us which
                            qualifications are must have.
                          </div>
                          <div className="text-sm text-gray-600">
                            Let us know how important they are so that we can
                            reach the right job seeker.
                          </div>
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
                                  <td className="px-2 py-4 text-gray-500">
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
                                      className="form-select p-2 px-3 m-1 w-1/3 border border-gray-300 rounded-md"
                                    >
                                      <option value="">Select</option>
                                      <option value="skill">Skill</option>
                                      {/* <option value="experience">
                                        Experience
                                      </option>
                                      <option value="education">
                                        Education
                                      </option>
                                      <option value="communication">
                                        Communication
                                      </option> */}
                                    </select>
                                    {skill?.type === "skill" && (
                                      <>
                                        {skill.skill}
                                        {!skill?.skill && (
                                          <FormControl
                                            variant="outlined"
                                            className="form-select p-2 m-1 w-1/2"
                                          >
                                            <InputLabel id="skill-select-label">
                                              Select
                                            </InputLabel>
                                            <Select
                                              labelId="skill-select-label"
                                              value={
                                                assessmentSkills[index]
                                                  ?.skill || ""
                                              }
                                              onChange={(e) => {
                                                const newSkills = [
                                                  ...assessmentSkills,
                                                ];
                                                newSkills[index] = {
                                                  ...newSkills[index],
                                                  skill: e.target.value,
                                                };
                                                setAssessmentSkills(newSkills);
                                                setJobData((prev) => ({
                                                  ...prev,
                                                  skillAssessment: newSkills,
                                                }));
                                              }}
                                              label="Select"
                                            >
                                              <MenuItem value="">
                                                <em>Select</em>
                                              </MenuItem>
                                              {JobData?.skillsRequired?.map(
                                                (skill, idx) => (
                                                  <MenuItem
                                                    key={idx}
                                                    value={skill}
                                                  >
                                                    {skill}
                                                  </MenuItem>
                                                )
                                              )}
                                            </Select>
                                          </FormControl>
                                        )}
                                      </>
                                    )}
                                    {skill?.type === "experience" && (
                                      <select
                                        className="form-select p-2 m-1 w-1/3 border border-gray-300 rounded-md"
                                        onChange={(e) => {
                                          const newSkills = [
                                            ...assessmentSkills,
                                          ];
                                          const { type } = newSkills[index];
                                          newSkills[index] = {
                                            type,
                                            mustHave: newSkills[index].mustHave,
                                            [type]: e.target.value,
                                          };

                                          setAssessmentSkills(newSkills);
                                          setJobData((prev) => ({
                                            ...prev,
                                            skillAssessment: newSkills,
                                          }));
                                        }}
                                      >
                                        <option value="">
                                          Select Experience
                                        </option>
                                        <option value={1}>1 Year</option>
                                        <option value={2}>2 Years</option>
                                        <option value={3}>3 Years</option>
                                        <option value={4}>4 Years</option>
                                        <option value={5}>5 Years</option>
                                      </select>
                                    )}
                                    {skill?.type === "education" && (
                                      <select
                                        className="form-select p-2 m-1 w-1/3 border border-gray-300 rounded-md"
                                        onChange={(e) => {
                                          const newSkills = [
                                            ...assessmentSkills,
                                          ];
                                          const { type } = newSkills[index];
                                          newSkills[index] = {
                                            type,
                                            mustHave: newSkills[index].mustHave,
                                            [type]: e.target.value,
                                          };

                                          setAssessmentSkills(newSkills);
                                          setJobData((prev) => ({
                                            ...prev,
                                            skillAssessment: newSkills,
                                          }));
                                        }}
                                      >
                                        <option value="">
                                          Select Education
                                        </option>
                                        <option value="higherSec">
                                          Higher Secoundary
                                        </option>
                                        <option value="Bachelors">
                                          Bachelors
                                        </option>
                                        <option value="Masters">Masters</option>
                                      </select>
                                    )}
                                    {skill?.type === "communication" && (
                                      <select
                                        className="form-select p-2 m-1 w-1/3 border border-gray-300 rounded-md"
                                        onChange={(e) => {
                                          const newSkills = [
                                            ...assessmentSkills,
                                          ];
                                          const { type } = newSkills[index];
                                          newSkills[index] = {
                                            type,
                                            mustHave: newSkills[index].mustHave,
                                            [type]: e.target.value,
                                          };

                                          setAssessmentSkills(newSkills);
                                          setJobData((prev) => ({
                                            ...prev,
                                            skillAssessment: newSkills,
                                          }));
                                        }}
                                      >
                                        <option value="">Select</option>
                                        <option value="basic">Basic</option>
                                        <option value="good">Good</option>
                                        <option value="fluent">Fluent</option>
                                      </select>
                                    )}
                                  </td>
                                  <td className="px-2 py-4 text-center">
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
                                  <td className="px-2 py-4 text-center">
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
                                  <td className="px-2 py-4 text-center">
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
                          <button
                            className="text-blue-500 px-3"
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
                            Add Skills
                          </button>
                          <div className="mt-3 p-3">
                            <span>
                              {" "}
                              <i className="fa-solid fa-lightbulb mr-5 font-bold"></i>
                            </span>
                            <span className="text-sm font font-semibold text-gray-500">
                              Tip: Tell us what you really need - selecting Must
                              have won't reject candidates.
                            </span>
                          </div>
                        </div>
                      </>
                    )}

                    {round.Assessment === "AI Based Video" && (
                      <div className="p-6 border border-gray-300 rounded-lg shadow-lg mb-6 bg-white">
                        <div className="flex flex-col md:flex-row gap-4">
                          <TextField
                            value={JobData?.positionName}
                            disabled
                            type="text"
                            variant="outlined"
                            className="w-full md:w-1/3"
                            InputProps={{
                              className: "bg-gray-100",
                            }}
                            InputLabelProps={{
                              className: "text-gray-600",
                            }}
                          />
                          <FormControl className="w-full md:w-1/3">
                            <InputLabel id="level-select-label">
                              Level
                            </InputLabel>
                            <Select
                              labelId="level-select-label"
                              value={videoInterview.level || ""}
                              onChange={(e) => {
                                const level = e.target.value;
                                setVideoInterview((prev) => ({
                                  ...prev,
                                  level,
                                }));
                                setJobData((prev) => ({
                                  ...prev,
                                  videoInterview: {
                                    ...prev.videoInterview,
                                    level,
                                  },
                                }));
                              }}
                              className="bg-gray-100"
                            >
                              <MenuItem value="junior">Junior</MenuItem>
                              <MenuItem value="midLevel">Mid-Level</MenuItem>
                              <MenuItem value="senior">Senior</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl className="w-full md:w-1/3">
                            <InputLabel id="topics-select-label">
                              Select Topics
                            </InputLabel>
                            <Select
                              labelId="topics-select-label"
                              multiple
                              value={videoInterview?.topic || []}
                              onChange={(event) => {
                                const {
                                  target: { value },
                                } = event;

                                // If "Select All" is selected, select all options
                                if (value.includes("Select All")) {
                                  setVideoInterview((prev) => ({
                                    ...prev,
                                    topic: options.filter(
                                      (option) => option !== "Select All"
                                    ),
                                  }));
                                  setJobData((prev) => ({
                                    ...prev,
                                    videoInterview: {
                                      ...prev.videoInterview,
                                      topic: options.filter(
                                        (option) => option !== "Select All"
                                      ),
                                    },
                                  }));
                                } else {
                                  // Handle other selections
                                  setVideoInterview((prev) => ({
                                    ...prev,
                                    topic: Array.isArray(value)
                                      ? value
                                      : value.split(","),
                                  }));
                                  setJobData((prev) => ({
                                    ...prev,
                                    videoInterview: {
                                      ...prev.videoInterview,
                                      topic: value,
                                    },
                                  }));
                                }
                              }}
                              renderValue={(selected) => selected.join(", ")}
                              className="bg-gray-100"
                            >
                              {options.map((option) => (
                                <MenuItem key={option} value={option}>
                                  <Checkbox
                                    checked={videoInterview?.topic.includes(
                                      option
                                    )}
                                  />
                                  <ListItemText primary={option} />
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="flex justify-end mt-6">
                          <button
                            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                            onClick={async () => {
                              setJDLoading(true);
                              if (!JobData || JobData.positionName === "") {
                                toast.error("Job title is required", {
                                  autoClose: 1000,
                                });
                                return;
                              }
                              try {
                                const response = await fetch(
                                  "https://shining-needed-bug.ngrok-free.app/generate-questions",
                                  {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                      Accept: "application/json",
                                    },
                                    body: JSON.stringify({
                                      jobTitle: JobData.positionName,
                                      experience: videoInterview?.level,
                                      categories: videoInterview?.topic,
                                    }),
                                  }
                                );
                                const responseData = await response.json();
                                const formattedQuestions = Object.keys(
                                  responseData
                                ).map((key) => ({
                                  topic: key,
                                  questions: responseData[key],
                                }));
                                setJobData((prev) => ({
                                  ...prev,
                                  videoQuestions: formattedQuestions,
                                }));
                              } catch (error) {
                                // Handle error
                              } finally {
                                setJDLoading(false);
                              }
                            }}
                          >
                            Generate
                          </button>
                        </div>
                        {JobData.videoQuestions && (
                          <div className="mt-6">
                            {JobData.videoQuestions.map((questionCategory) =>
                              renderQuestions(
                                questionCategory.topic,
                                questionCategory.questions
                              )
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {round.Assessment === "Final Interview" && (
                      <div className="p-4 border border-gray-300 rounded-md mb-4">
                        <h2 className="font-semibold text-gray-600 text-sm">
                          Interview Type
                        </h2>
                        <div className="flex flex-wrap gap-6 mt-5">
                          <span
                            onClick={() => {
                              setFinalInterview((prev) => ({
                                ...prev,
                                type: "videoCall",
                              }));
                              setJobData((prev) => ({
                                ...prev,
                                finalInterview: finalInterview,
                              }));
                            }}
                            className={`border rounded-full p-1 px-3 cursor-pointer text-md font-semibold text-blue-600
                            ${
                              finalInterview?.type === "videoCall"
                                ? "bg-blue-100 border-blue-500"
                                : ""
                            } `}
                          >
                            <i className="fa-solid fa-video mr-2"></i> Video
                            call
                          </span>
                          <span
                            onClick={() => {
                              setFinalInterview((prev) => ({
                                ...prev,
                                type: "phoneCall",
                              }));
                              setJobData((prev) => ({
                                ...prev,
                                finalInterview: finalInterview,
                              }));
                            }}
                            className={`border rounded-full p-1 px-3 cursor-pointer text-md font-semibold text-blue-600
                            ${
                              finalInterview?.type === "phoneCall"
                                ? "bg-blue-100 border-blue-500"
                                : ""
                            } `}
                          >
                            <i className="fa-solid fa-phone mr-2"></i> Phone
                          </span>
                          <span
                            onClick={() => {
                              setFinalInterview((prev) => ({
                                ...prev,
                                type: "office",
                              }));
                              setJobData((prev) => ({
                                ...prev,
                                finalInterview: finalInterview,
                              }));
                            }}
                            className={`border rounded-full p-1 px-3 cursor-pointer text-md font-semibold text-blue-600
                            ${
                              finalInterview?.type === "office"
                                ? "bg-blue-100 border-blue-500"
                                : ""
                            } `}
                          >
                            <i className="fa-solid fa-building-circle-check mr-2"></i>{" "}
                            In-office
                          </span>
                        </div>
                        {finalInterview?.type === "office" && (
                          <>
                            <label className="font-semibold text-gray-600 text-sm">
                              Address
                            </label>
                            <input
                              type="text"
                              className={`mt-1 block w-1/2 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm `}
                              onChange={(e) => {
                                setFinalInterview((prev) => ({
                                  ...prev,
                                  address: e.target.value,
                                }));
                                setJobData((prev) => ({
                                  ...prev,
                                  address: e.target.value,
                                }));
                              }}
                            />
                          </>
                        )}
                        <div className="flex flex-wrap mt-5 w-full">
                          <span className="flex flex-col w-1/2">
                            <label className="font-semibold text-gray-600 text-sm">
                              Joining Prefrence
                            </label>
                            <select
                              className="form-select p-1 m-1 w-1/2 border border-gray-300 rounded-md"
                              value={finalInterview?.joiningPrefrence}
                              onChange={(e) => {
                                setFinalInterview((prev) => ({
                                  ...prev,
                                  joiningPrefrence: e.target.value,
                                }));
                                setJobData((prev) => ({
                                  ...JobData,
                                  finalInterview: finalInterview,
                                }));
                              }}
                            >
                              <option value="immidiate">Immidiate</option>
                              <option value="15days">Within 15 Days</option>
                              <option value="30days">Within 30 Days</option>
                              <option value="60days">Within 60 Days</option>
                            </select>
                          </span>
                          <span className="flex flex-col w-1/2">
                            <label className="font-semibold text-gray-600 text-sm">
                              Hike Preference
                            </label>
                            <span className="flex justify-start items-center">
                              min
                              <input
                                type="number"
                                className="border border-gray-300 rounded-md p-2 mt-1 w-1/3 mx-2"
                                value={finalInterview?.minHike}
                                onChange={(e) => {
                                  setFinalInterview((prev) => ({
                                    ...prev,
                                    minHike: e.target.value,
                                  }));
                                  setJobData((prev) => ({
                                    ...prev,
                                    finalInterview: finalInterview,
                                  }));
                                }}
                              />
                              max
                              <input
                                type="number"
                                className="border border-gray-300 rounded-md p-2 mt-1 w-1/3 mx-2"
                                value={finalInterview?.maxHike}
                                onChange={(e) => {
                                  setFinalInterview((prev) => ({
                                    ...prev,
                                    maxHike: e.target.value,
                                  }));
                                  setJobData((prev) => ({
                                    ...prev,
                                    finalInterview: finalInterview,
                                  }));
                                }}
                              />
                            </span>
                          </span>
                        </div>
                        <div className="flex flex-col gap-6 mt-5">
                          <label className="font-semibold text-gray-600 text-sm">
                            Share Whatsapp Number for Updates
                          </label>
                          <input
                            type="number"
                            className="border border-gray-300 rounded-md p-2 mt-1 w-1/4"
                            value={finalInterview?.whatsapp}
                            onChange={(e) => {
                              setFinalInterview((prev) => ({
                                ...prev,
                                whatsapp: e.target.value,
                              }));
                              setJobData((prev) => ({
                                ...prev,
                                finalInterview: finalInterview,
                              }));
                            }}
                          />

                          <div className="flex items-center mt-4">
                            <input
                              type="checkbox"
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                              onChange={(e) => {
                                setFinalInterview((prev) => ({
                                  ...prev,
                                  ShowNumber: true,
                                }));
                                setJobData((prev) => ({
                                  ...prev,
                                  finalInterview: finalInterview,
                                }));
                              }}
                            />
                            <span className="ml-2 text-sm text-gray-600">
                              Allow candidates to contact you directly?
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
          <div className="mb-4">
            <label className="mb-2 block text-xl font-semibold text-gray-700 mt-5">
              Onboarding
            </label>
            <div className="p-4 border border-gray-300 rounded-md mb-4"></div>
          </div>

          <div
            onClick={CreateNewJob}
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

export default EditJob;
