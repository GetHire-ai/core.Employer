import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const OnboardingSteps = ({ step, jobId, studentId, companyId }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactInformation: "",
    residentialAddress: "",
    jobTitle: "",
    department: "",
    startDate: "",
    documentFiles: {
      employmentContract: null,
      nda: null,
      taxForms: null,
      panCard: null,
      aadharCard: null,
      salarySlip: null,
      bankStatement: null,
    },
    emailAccount: "",
    softwareAccess: "",
    orientationSchedule: null,
    roleSpecificTraining: null,
    teamIntroduction: "",
    reportingStructure: "",
    employeeHandbook: null,
    offerLetterTemplate: "",
  });

  const formFields = {
    "Personal Information": [
      { name: "fullName", label: "Full Name", type: "text" },
      {
        name: "contactInformation",
        label: "Contact Information",
        type: "text",
      },
      {
        name: "residentialAddress",
        label: "Residential Address",
        type: "text",
      },
    ],
    "Employment Details": [
      { name: "jobTitle", label: "Job Title", type: "text" },
      { name: "department", label: "Department", type: "text" },
      { name: "startDate", label: "Start Date", type: "date" },
    ],
    "Document Submission": [
      {
        name: "employmentContract",
        label: "Employment Contract",
        type: "file",
      },
      { name: "nda", label: "NDA", type: "file" },
      { name: "taxForms", label: "Tax Forms", type: "file" },
      { name: "panCard", label: "PAN Card", type: "file" },
      { name: "aadharCard", label: "Aadhar Card", type: "file" },
      { name: "salarySlip", label: "Salary Slip", type: "file" },
      { name: "bankStatement", label: "Bank Statement", type: "file" },
    ],
    "Access & IT Setup": [
      { name: "emailAccount", label: "Company Email", type: "text" },
      { name: "softwareAccess", label: "Software Access", type: "text" },
    ],
    "Orientation & Training": [
      {
        name: "orientationSchedule",
        label: "Orientation Schedule",
        type: "file",
      },
      {
        name: "roleSpecificTraining",
        label: "Role-Specific Training",
        type: "file",
      },
    ],
    "Team Integration": [
      { name: "teamIntroduction", label: "Team Introduction", type: "text" },
      {
        name: "reportingStructure",
        label: "Reporting Structure",
        type: "text",
      },
    ],
    "Company Policies & Benefits": [
      { name: "employeeHandbook", label: "Employee Handbook", type: "file" },
    ],
    "Offer Letter Template Selection": [
      {
        name: "offerLetterTemplate",
        label: "Offer Letter Template",
        type: "select",
        options: [
          { value: "standard", label: "Standard Offer Letter" },
          { value: "executive", label: "Executive Offer Letter" },
          { value: "internship", label: "Internship Offer Letter" },
          { value: "contractual", label: "Contractual Offer Letter" },
        ],
      },
    ],
  };

  // Handle text input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (event, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      documentFiles: {
        ...prevData.documentFiles,
        [fieldName]: event.target.files[0],
      },
    }));
  };

  // Handle form submission (save data)
  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();

      // Append regular fields
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("contactInformation", formData.contactInformation);
      formDataToSend.append("residentialAddress", formData.residentialAddress);
      formDataToSend.append("jobTitle", formData.jobTitle);
      formDataToSend.append("department", formData.department);
      formDataToSend.append("startDate", formData.startDate);
      formDataToSend.append("emailAccount", formData.emailAccount);
      formDataToSend.append("softwareAccess", formData.softwareAccess);
      formDataToSend.append("teamIntroduction", formData.teamIntroduction);
      formDataToSend.append("reportingStructure", formData.reportingStructure);
      formDataToSend.append(
        "offerLetterTemplate",
        formData.offerLetterTemplate
      );

      // Append document files
      Object.keys(formData.documentFiles).forEach((key) => {
        if (formData.documentFiles[key]) {
          formDataToSend.append(key, formData.documentFiles[key]);
        }
      });
      // await axios.put(
      //   `/api/onboarding/update/${jobId}/${studentId}/${companyId}`,
      //   formDataToSend,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );
      console.log("Onboarding data saved successfully", formDataToSend);
    } catch (error) {
      console.error("Error saving onboarding data:", error);
    }
  };

  const renderForm = () => {
    const fields = formFields[step] || [];

    return fields.map((field) => {
      if (field.type === "text" || field.type === "date") {
        return (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            value={formData[field.name]}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={
              field.type === "date" ? { shrink: true } : undefined
            }
          />
        );
      }

      if (field.type === "file") {
        return (
          <Box key={field.name} mb={2}>
            <Typography>{field.label}</Typography>
            <Button variant="contained" component="label">
              Upload {field.label}
              <input
                type="file"
                hidden
                onChange={(e) => handleFileChange(e, field.name)}
              />
            </Button>
          </Box>
        );
      }

      if (field.type === "select") {
        return (
          <FormControl key={field.name} fullWidth margin="normal">
            <InputLabel>{field.label}</InputLabel>
            <Select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            >
              {field.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      }

      return null;
    });
  };

  return (
    <Box p={2}>
      <Typography variant="h6" textAlign="center">
        {step || "None"}
      </Typography>
      <Box sx={{ padding: 2, marginTop: 2 }}>
        {renderForm()}
        <Box mt={2} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingSteps;
