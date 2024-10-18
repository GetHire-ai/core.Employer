import React, { useEffect, useState } from "react";
import { GetApi, PutApiFormData } from "Api/Api_Calling";
import OnboardingSteps from "./OnboardingSteps";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Paper,
  LinearProgress,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const location = useLocation();
  const navigate = useNavigate();
  const { companyId, jobId, studentId } = location?.state || {};
  const [onboardingData, setOnboardingData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [step, setStep] = useState("Personal Information");

  useEffect(() => {
    if (!companyId || !jobId || !studentId) {
      navigate("/onboarding");
    } else {
      getOnboarding();
    }
  }, [companyId, jobId, studentId]);

  const getOnboarding = async () => {
    try {
      setLoading(true);
      const url = `api/onboardroutes/${jobId}/${studentId}/${companyId}`;
      const res = await GetApi(url);
      setOnboardingData(res?.data?.data || {});
      // console.log(res.data.data);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err.response);
    } finally {
      setLoading(false);
    }
  };

  const updateOnboarding = async (data) => {
    try {
      const url = `api/onboardroutes/update/${onboardingData._id}`;
      await PutApiFormData(url, data);
      getOnboarding();
      toast.success("Onboarding Updated", { autoClose: 1000 });
    } catch (err) {
      toast.error("Onboarding Updating Failed", { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
      <LinearProgress />
      <Paper elevation={3} sx={{ width: 290, padding: 2, marginRight: 2 }}>
        <List>
          {steps.map((stepName, index) => (
            <ListItem key={index} onClick={() => setStep(stepName)}>
              <ListItemText primary={stepName} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box flex={1}>
        <OnboardingSteps
          step={step}
          updateOnboarding={updateOnboarding}
          data={onboardingData}
        />
      </Box>
    </Paper>
  );
};

export default Index;
