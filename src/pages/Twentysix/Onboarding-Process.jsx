import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  MenuItem,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  TextField,
  Input,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControlLabel as MUIFormControlLabel,
} from "@mui/material";
import { GetApi, PostApi } from "Api/Api_Calling";
import { useNavigate } from "react-router-dom";

const OnboardingProcess = () => {
  let navigate = useNavigate();
  const [company, setCompany] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    releaseMethod: "",
    offerLetterTemplate: "",
    acceptanceMethod: "",
    selectedDocuments: [],
    orientationFiles: [],
    orientationType: "pdf",
  });

  useEffect(() => {
    let getCompany = async () => {
      try {
        let res = await GetApi(`api/companyroutes/GetCompanyprofile`);
        setCompany(res.data.data);

        const onboardingProcess = res.data.data.onboardinProcess;

        setFormData({
          releaseMethod: onboardingProcess.releaseMethod || "",
          offerLetterTemplate: onboardingProcess.offerLetterTemplate || "",
          acceptanceMethod: onboardingProcess.acceptanceMethod || "",
          selectedDocuments: onboardingProcess.selectedDocuments || [],
          orientationType: onboardingProcess.orientationType || "pdf",
          orientationFiles: [],
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCompany();
  }, []);

  const availableDocuments = [
    "Aadhar Card",
    "Pan Card",
    "Bank Passbook",
    "10th Marksheet",
    "12th Marksheet",
    "Degree",
  ];

  const handleDocumentChange = (event) => {
    const { value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      selectedDocuments: checked
        ? [...prev.selectedDocuments, value]
        : prev.selectedDocuments.filter((doc) => doc !== value),
    }));
  };

  const handleOrientationFileChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      orientationFiles: [...event.target.files],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOrientationTypeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      orientationType: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      let res = await PostApi(`api/companyroutes/update-onboarding`, formData);
      navigate("/onboarding");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div
        className="bg-white p-6 rounded-[30px] shadow-md w-full"
        style={{ filter: loading ? "blur(1px)" : "none" }}
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-[25px] text-center text-black font-[600] flex-grow">
            Onboarding Process
          </p>
        </div>

        <FormControl fullWidth margin="normal">
          <InputLabel>Release Method</InputLabel>
          <Select
            name="releaseMethod"
            value={formData.releaseMethod}
            onChange={handleChange}
            label="Release Method"
          >
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="portal">Portal</MenuItem>
            <MenuItem value="offline">Offline</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Offer Letter Template</InputLabel>
          <Select
            name="offerLetterTemplate"
            value={formData.offerLetterTemplate}
            onChange={handleChange}
            label="Offer Letter Template"
          >
            <MenuItem value="template1">Template 1</MenuItem>
            <MenuItem value="template2">Template 2</MenuItem>
            <MenuItem value="template3">Template 3</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Acceptance Method</InputLabel>
          <Select
            name="acceptanceMethod"
            value={formData.acceptanceMethod}
            onChange={handleChange}
            label="Acceptance Method"
          >
            <MenuItem value="email">Mail</MenuItem>
            <MenuItem value="portal">Portal</MenuItem>
            <MenuItem value="offline">Offline</MenuItem>
          </Select>
        </FormControl>

        <div className="my-4">
          <p className="font-semibold">Documentation</p>
          {availableDocuments.map((doc) => (
            <FormControlLabel
              key={doc}
              control={
                <Checkbox
                  value={doc}
                  checked={formData.selectedDocuments.includes(doc)}
                  onChange={handleDocumentChange}
                />
              }
              label={doc}
            />
          ))}
          <div className="mt-2">
            {formData.selectedDocuments.map((doc) => (
              <Chip
                key={doc}
                label={doc}
                onDelete={() =>
                  handleDocumentChange({
                    target: { value: doc, checked: false },
                  })
                }
              />
            ))}
          </div>
        </div>

        <div className="my-4">
          <p className="font-semibold">Orientation Process</p>
          <FormControl fullWidth margin="normal">
            <Input
              type="file"
              multiple
              onChange={handleOrientationFileChange}
            />
          </FormControl>
          <div className="mt-2">
            {formData.orientationFiles.length > 0 && (
              <ul>
                {Array.from(formData.orientationFiles).map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="my-4">
          <p className="font-semibold">Orientation Type</p>
          <FormControl component="fieldset">
            <RadioGroup
              name="orientationType"
              value={formData.orientationType}
              onChange={handleOrientationTypeChange}
            >
              <FormControlLabel value="pdf" control={<Radio />} label="PDF" />
              <FormControlLabel
                value="video"
                control={<Radio />}
                label="Video"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default OnboardingProcess;
