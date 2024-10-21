import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "components";
import React from "react";
const citySuggestions = ["Mumbai", "Indore", "Pune", "Banglore", "Delhi"];

const JobDetails = ({
  companydata,
  JobData,
  setJobData,
  formSubmitted,
  handleChange,
  positionNames,
  CreateAiSuggestion,
  handlePositionNameInputChange,
  selectedSuggestionIndex,
  setPositionNames,
  setSelectedSuggestionIndex,
  scrollToSelectedIndex,
  experienceOptionsYears,
  filteredMaxSalaryOptions,
  filteredMaxExpOptions,
  listRef,
  maxSalary,
  setMaxSalary,
  minSalary,
  setMinSalary,
  minExp,
  setMinExp,
  maxExp,
  setMaxExp,
  skillInput,
  handleSkillInputChange,
  handleSkillInputKeyPress,
  AISuggestions,
  setAISuggestions,
  suggestions,
  SkillLoading,
  handleCityInputChange,
  salaryOptions,
  addSkill,
  removeSkill,
}) => {
  return (
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
          Positin Name <span className="text-red-600 text-md ml-1">*</span>
        </label>
        <input
          value={JobData.positionName}
          name="positionName"
          type="text"
          className={`mt-1 hover:shadow-xl block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            formSubmitted && JobData.positionName === "" ? "border-red-500" : ""
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
                  positionName: positionNames[selectedSuggestionIndex],
                });
                CreateAiSuggestion("Skill Required separate with comma");
                setPositionNames([]);
              } else {
                setJobData({
                  ...JobData,
                  positionName: e.target.value,
                });
                CreateAiSuggestion("Skill Required separate with comma");
              }
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setSelectedSuggestionIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : positionNames.length - 1
              );
              scrollToSelectedIndex();
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              setSelectedSuggestionIndex((prevIndex) =>
                prevIndex < positionNames.length - 1 ? prevIndex + 1 : 0
              );
              scrollToSelectedIndex();
            }
          }}
        />
        {positionNames?.length > 0 && (
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
                  index === selectedSuggestionIndex ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setJobData({
                    ...JobData,
                    positionName: name,
                  });
                  CreateAiSuggestion("Skill Required separate with comma");
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
                  index === selectedSuggestionIndex ? "bg-gray-200" : ""
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
          Job type <span className="text-red-600 text-md ml-1">*</span>{" "}
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
          {JobData?.jobType === "" && formSubmitted && "Please Select"}
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
      {JobData.jobType !== "remote" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            City<span className="text-red-600 text-md ml-1">*</span>
          </label>
          <Autocomplete
            options={citySuggestions}
            getOptionLabel={(option) => option}
            onChange={(event, newValue) => {
              setJobData((prev) => ({
                ...prev,
                location: newValue || "", // Use the selected value or empty string
              }));
            }}
            freeSolo // Allow custom input
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Enter city name"
                error={formSubmitted && JobData.location === ""}
                helperText={
                  formSubmitted && JobData.location === "" ? "Required" : ""
                }
                className={`mt-1 ${
                  formSubmitted && JobData.location === ""
                    ? "border-red-500"
                    : ""
                }`}
                InputProps={{
                  ...params.InputProps,
                  className:
                    "bg-white border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                }}
              />
            )}
          />
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
                        <option key={option.value} value={option.value}>
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
                        <option key={option.value} value={option.value}>
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
            formSubmitted && JobData.openings === "" ? "border-red-500" : ""
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
            Our AI genrates job description for you. You can make changes to
            better align with your hiring needs
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
  );
};

export default JobDetails;
