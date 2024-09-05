import React, { useEffect, useState } from "react";
import { GetApi } from "Api/Api_Calling";
import OnboardingSteps from "./OnboardingSteps";
import {
  Autocomplete,
  TextField,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Paper,
} from "@mui/material";

const steps = [
  "Personal Information",
  "Employment Details",
  "Document Submission",
  "Access & IT Setup",
  "Orientation & Training",
  "Team Integration",
  "Company Policies & Benefits",
  "Offer Letter Template Selection (New Step)",
  "Onboarding Completion",
];

const Index = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [step, setStep] = useState("");

  const getAllJobs = async () => {
    try {
      const res = await GetApi("api/CompanyRoutes/GetAllJobswithApplication");
      setAllJobs(res?.data?.data || []);
    } catch (err) {
      setError("Failed to fetch jobs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleJobChange = (event, newValue) => {
    setSelectedJob(newValue);
    console.log("Selected job:", newValue);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        minHeight: "85vh",
        minWidth: "100%",
        fontFamily: "poppins",
      }}
    >
      <Paper elevation={3} sx={{ width: 290, padding: 2, marginRight: 2 }}>
        <Autocomplete
          options={allJobs.map((job) => ({
            label: job.positionName,
            id: job._id,
          }))}
          onChange={handleJobChange}
          renderInput={(params) => (
            <TextField {...params} label="Select Job" variant="outlined" />
          )}
        />
        <List>
          {steps.map((stepName, index) => (
            <ListItem button key={index} onClick={() => setStep(stepName)}>
              <ListItemText primary={stepName} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box flex={1}>
        <OnboardingSteps step={step} />
      </Box>
    </Paper>
  );
};

export default Index;
