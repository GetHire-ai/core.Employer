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
  InputAdornment,
  Snackbar,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import MuiAlert from "@mui/material/Alert";

const OnboardingSteps = ({ data, step, updateOnboarding }) => {
  const [formData, setFormData] = useState({
    fullName: data?.fullName,
    contactInformation: "",
    residentialAddress: "",
    jobTitle: "",
    department: "",
    startDate: "",
    employmentContract: null,
    nda: null,
    taxForms: null,
    panCard: null,
    aadharCard: null,
    salarySlip: null,
    bankStatement: null,
    emailAccount: "",
    softwareAccess: "",
    orientationSchedule: null,
    roleSpecificTraining: null,
    teamIntroduction: "",
    reportingStructure: "",
    employeeHandbook: null,
    offerLetterTemplate: "",
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // List of fields to disable
  const disabledFields = [
    "fullName",
    "contactInformation",
    "residentialAddress",
    "aadharCard",
    "panCard",
    "salarySlip",
    "bankStatement",
  ];

  const formFields = {
    "Personal Information": [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        value: data?.fullName,
      },
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (event, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: event.target.files[0],
    }));
  };

  const handleSave = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });
    console.log(formDataToSend);
    updateOnboarding(formDataToSend);
  };

  const handleFieldClick = (fieldName) => {
    if (disabledFields.includes(fieldName)) {
      setSnackbarOpen(true);
    }
  };

  const renderForm = () => {
    const fields = formFields[step] || [];

    return fields.map((field) => {
      let isFilled =
        data[field.name] !== undefined &&
        data[field.name] !== null &&
        data[field.name].trim() !== "";

      const isDisabled = disabledFields.includes(field.name);

      if (field.type === "text" || field.type === "date") {
        return (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            value={formData[field.name] || data?.[field.name]}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={
              field.type === "date" ? { shrink: true } : undefined
            }
            InputProps={{
              endAdornment: isFilled && (
                <InputAdornment position="end">
                  <CheckIcon color="success" />
                </InputAdornment>
              ),
              readOnly: isDisabled,
              onClick: () => handleFieldClick(field.name),
            }}
          />
        );
      }

      if (field.type === "file") {
        return (
          <Box key={field.name} mb={2}>
            <Typography onClick={() => handleFieldClick(field.name)}>
              {field.label}
              {isFilled && <CheckIcon color="success" />}
            </Typography>
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
              onClick={() => handleFieldClick(field.name)}
              disabled={isDisabled} // Disable the select field if it's filled
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          onClose={() => setSnackbarOpen(false)}
          severity="error"
          elevation={6}
          variant="filled"
        >
          You can't edit this field!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default OnboardingSteps;
