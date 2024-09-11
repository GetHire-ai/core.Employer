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
    selectedDocuments: [],
    orientationFiles: [],
    orientationType: "pdf",
    address: "", 
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
          selectedDocuments: onboardingProcess.selectedDocuments || [],
          orientationType: onboardingProcess.orientationType || "pdf",
          orientationFiles: [],
          address: onboardingProcess.address || "", 
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

  const handleAddDocument = () => {
    if (formData.newDocument) {
      setFormData((prev) => ({
        ...prev,
        selectedDocuments: [...prev.selectedDocuments, prev.newDocument],
        newDocument: "",
      }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Automatically set acceptanceMethod to match releaseMethod before submission
      const updatedFormData = {
        ...formData,
        acceptanceMethod: formData.releaseMethod,
      };

      await PostApi(`api/companyroutes/update-onboarding`, updatedFormData);
      navigate("/onboarding");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-lg transition-all duration-300 ${
          loading ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <p className="text-3xl text-center text-gray-800 font-bold flex-grow">
            Onboarding Process
          </p>
        </div>

        <FormControl fullWidth margin="normal">
          <InputLabel className="text-gray-700">Release Method</InputLabel>
          <Select
            name="releaseMethod"
            value={formData.releaseMethod}
            onChange={handleChange}
            label="Release Method"
            className="bg-white rounded-lg shadow-sm"
          >
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="portal">Portal</MenuItem>
            <MenuItem value="offline">Offline</MenuItem>
          </Select>
        </FormControl>

        {formData.releaseMethod === "offline" && (
          <TextField
            fullWidth
            margin="normal"
            name="address"
            label="Address"
            value={formData.address}
            onChange={handleChange}
            className="bg-white rounded-lg shadow-sm"
          />
        )}

        <FormControl fullWidth margin="normal">
          <InputLabel className="text-gray-700">
            Offer Letter Template
          </InputLabel>
          <Select
            name="offerLetterTemplate"
            value={formData.offerLetterTemplate}
            onChange={handleChange}
            label="Offer Letter Template"
            className="bg-white rounded-lg shadow-sm"
          >
            <MenuItem value="template1">Template 1</MenuItem>
            <MenuItem value="template2">Template 2</MenuItem>
            <MenuItem value="template3">Template 3</MenuItem>
          </Select>
        </FormControl>

        <div className="my-6">
          <p className="font-semibold text-gray-800">Documentation</p>
          <div className="grid grid-cols-2 gap-4">
            {availableDocuments.map((doc) => (
              <FormControlLabel
                key={doc}
                control={
                  <Checkbox
                    value={doc}
                    checked={formData.selectedDocuments.includes(doc)}
                    onChange={handleDocumentChange}
                    color="primary"
                  />
                }
                label={doc}
              />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {formData.selectedDocuments.map((doc) => (
              <Chip
                key={doc}
                label={doc}
                onDelete={() =>
                  handleDocumentChange({
                    target: { value: doc, checked: false },
                  })
                }
                className="bg-indigo-500 text-white"
              />
            ))}
          </div>
          <div className=" flex flex-col">
            <TextField
              margin="normal"
              name="newDocument"
              label="Add New Document"
              value={formData.newDocument || ""}
              onChange={handleChange}
              className="bg-white rounded-lg shadow-sm w-[20%]"
            />
            <Button
              onClick={handleAddDocument}
              variant="outlined"
              color="primary"
              className="mt-2 w-[20%]"
            >
              Add Document
            </Button>
          </div>
        </div>

        <div className="my-6">
          <p className="font-semibold text-gray-800">Orientation Process</p>
          <FormControl fullWidth margin="normal">
            <Input
              type="file"
              multiple
              onChange={handleOrientationFileChange}
              className="p-2 border border-gray-300 rounded-lg shadow-sm w-64"
            />
          </FormControl>
          <div className="mt-2">
            {formData.orientationFiles.length > 0 && (
              <ul className="list-disc pl-5 text-gray-600">
                {Array.from(formData.orientationFiles).map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="my-6">
          <p className="font-semibold text-gray-800">Orientation Type</p>
          <FormControl component="fieldset">
            <RadioGroup
              name="orientationType"
              value={formData.orientationType}
              onChange={handleChange}
            >
              <FormControlLabel
                value="pdf"
                control={<Radio color="primary" />}
                label="PDF"
              />
              <FormControlLabel
                value="video"
                control={<Radio color="primary" />}
                label="Video"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="w-[10%] py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg hover:from-indigo-600 hover:to-purple-600"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default OnboardingProcess;
