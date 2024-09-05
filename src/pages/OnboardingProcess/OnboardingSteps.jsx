import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField as MuiTextField,
} from "@mui/material";

const OnboardingSteps = ({ step }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactInfo: "",
    address: "",
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
    email: "",
    softwareAccess: "",
    orientationSchedule: null,
    roleTraining: null,
    teamIntroduction: "",
    reportingStructure: "",
    employeeHandbook: null,
    offerLetterTemplate: "",
  });

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
      documentFiles: {
        ...prevData.documentFiles,
        [fieldName]: event.target.files[0],
      },
    }));
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    // Add your save logic here
  };

  const renderForm = () => {
    switch (step) {
      case "Personal Information":
        return (
          <Box>
            <Typography>
              Please confirm your full legal name for our records.
            </Typography>
            <TextField
              name="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Typography>
              Provide your primary phone number and email address.
            </Typography>
            <TextField
              name="contactInfo"
              label="Contact Information"
              value={formData.contactInfo}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Typography>
              Enter your current residential address for official communication.
            </Typography>
            <TextField
              name="address"
              label="Residential Address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
        );
      case "Employment Details":
        return (
          <Box>
            <Typography>
              Your job title is: [Auto-filled]. Please confirm.
            </Typography>
            <TextField
              name="jobTitle"
              label="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Typography>
              You will be joining the [Auto-filled Department]. Please
              acknowledge.
            </Typography>
            <TextField
              name="department"
              label="Department"
              value={formData.department}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Typography>
              Your start date is set for [Auto-filled Date]. Please confirm.
            </Typography>
            <TextField
              name="startDate"
              label="Start Date"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
        );
      case "Document Submission":
        return (
          <Box>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" color="textSecondary">
                Please review and e-sign your employment contract.
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ maxWidth: "25%" }}
              >
                Employment Contract
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e, "employmentContract")}
                />
              </Button>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" color="textSecondary">
                Please review and e-sign the NDA to ensure confidentiality.
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ maxWidth: "25%" }}
              >
                NDA
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e, "nda")}
                />
              </Button>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" color="textSecondary">
                Complete and submit the necessary tax forms.
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ maxWidth: "25%" }}
              >
                Tax Forms
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e, "taxForms")}
                />
              </Button>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" color="textSecondary">
                Upload PAN card.
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ maxWidth: "25%" }}
              >
                PAN Card
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e, "panCard")}
                />
              </Button>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" color="textSecondary">
                Upload Aadhar card.
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ maxWidth: "25%" }}
              >
                Aadhar Card
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e, "aadharCard")}
                />
              </Button>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" color="textSecondary">
                Upload last 6 months salary slip.
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ maxWidth: "25%" }}
              >
                Salary Slip
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e, "salarySlip")}
                />
              </Button>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Typography variant="body2" color="textSecondary">
                Upload 6 months bank statement.
              </Typography>
              <Button
                variant="contained"
                component="label"
                sx={{ maxWidth: "25%" }}
              >
                Bank Statement
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFileChange(e, "bankStatement")}
                />
              </Button>
            </FormControl>
          </Box>
        );
      case "Access & IT Setup":
        return (
          <Box>
            <Typography>
              Your company email has been created: [Auto-filled Email]. Please
              set your password.
            </Typography>
            <TextField
              name="email"
              label="Company Email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Typography>
              Access to required software tools has been granted. Review your
              login credentials.
            </Typography>
            <TextField
              name="softwareAccess"
              label="Software Access"
              value={formData.softwareAccess}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
        );
      case "Orientation & Training":
        return (
          <Box>
            <Typography>
              Here’s your orientation schedule for the first week. Sync it with
              your calendar.
            </Typography>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "orientationSchedule")}
            />
            <Typography>
              Access your role-specific training materials here. Complete by
              [Auto-filled Deadline].
            </Typography>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "roleTraining")}
            />
          </Box>
        );
      case "Team Integration":
        return (
          <Box>
            <Typography>
              Meet your team! Review their profiles and get to know your key
              contacts.
            </Typography>
            <TextField
              name="teamIntroduction"
              label="Team Introduction"
              value={formData.teamIntroduction}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Typography>
              You will report to [Auto-filled Manager]. Here’s an overview of
              the team structure.
            </Typography>
            <TextField
              name="reportingStructure"
              label="Reporting Structure"
              value={formData.reportingStructure}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
        );
      case "Company Policies & Benefits":
        return (
          <Box>
            <Typography>
              Download and review the Employee Handbook. Acknowledge receipt
              once done.
            </Typography>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "employeeHandbook")}
            />
          </Box>
        );
      case "Offer Letter Template Selection":
        return (
          <Box>
            <Typography>
              Please select an offer letter template to share with the
              candidate.
            </Typography>
            <FormControl fullWidth margin="normal">
              <InputLabel>Offer Letter Template</InputLabel>
              <Select
                name="offerLetterTemplate"
                value={formData.offerLetterTemplate}
                onChange={handleChange}
              >
                <MenuItem value="standard">Standard Offer Letter</MenuItem>
                <MenuItem value="executive">Executive Offer Letter</MenuItem>
                <MenuItem value="internship">Internship Offer Letter</MenuItem>
                <MenuItem value="contractual">
                  Contractual Offer Letter
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        );
      case "Onboarding Completion":
        return (
          <Box>
            <Typography>
              Review your onboarding checklist to ensure all steps are
              completed.
            </Typography>
            <Typography>
              Congratulations! You have completed the onboarding process. Your
              HR contact will reach out for any final steps.
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box p={2}>
      <Typography variant="h6" textAlign="center">
        {step || "None"}
      </Typography>
      <Box elevation={3} sx={{ padding: 2, marginTop: 2 }}>
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
