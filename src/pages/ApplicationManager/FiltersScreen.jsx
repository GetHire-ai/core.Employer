import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterScreen = ({ setFilterData }) => {
  const [data, setData] = useState({
    name: "",
    stage: [],
    skills: [],
    locations: [],
    experience: { min: 0, max: 1 },
  });
  const stages = ["New", "Shortlisted", "Interview", "Hired", "Rejected"];
  const [expanded, setExpanded] = useState(true);
  const [value, setValue] = useState([1, 5]);
  const [skillInput, setSkillInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const handleSkillAdd = (event) => {
    if (event.key === "Enter" && skillInput.trim() !== "") {
      setData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput("");
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleLocationAdd = (event) => {
    if (event.key === "Enter" && locationInput.trim() !== "") {
      setData((prev) => ({
        ...prev,
        locations: [...prev.locations, locationInput.trim()],
      }));
      setLocationInput("");
    }
  };

  const handleLocationRemove = (locationToRemove) => {
    setData((prev) => ({
      ...prev,
      locations: prev.locations.filter(
        (location) => location !== locationToRemove
      ),
    }));
  };

  const handleNameChange = (event) => {
    setData((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  const handleExperienceChange = (event, newValue) => {
    setValue(newValue);
    setData((prev) => ({
      ...prev,
      experience: { min: newValue[0], max: newValue[1] },
    }));
  };

  const handleStageChange = (event) => {
    const stage = event.target.name;
    setData((prev) => ({
      ...prev,
      stage: event.target.checked
        ? [...prev.stage, stage]
        : prev.stage.filter((s) => s !== stage),
    }));
  };

  return (
    <Box>
      <Accordion
        expanded={expanded}
        onChange={handleAccordionChange}
        sx={{
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "none",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Application Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Stack direction="row" spacing={2} mb={1}>
            <button
              size="small"
              variant="outlined"
              color="error"
              style={{ fontSize: "12px" }}
              onClick={() =>
                setData({
                  name: "",
                  stage: [],
                  skills: [],
                  locations: [],
                  experience: { min: 0, max: 1 },
                })
              }
              className="text-red bg-white hover:bg-red-100 rounded-lg"
            >
              Reset Filters
            </button>
            <Button
              size="small"
              variant="contained"
              color="success"
              style={{ fontSize: "12px" }}
              onClick={() => {
                setFilterData(data);
              }}
              className=" text-blue bg-white hover:bg-blue-100 rounded-lg"
            >
              Apply Filters
            </Button>
          </Stack> */}
          <Box mb={1}>
            <Typography variant="subtitle1">Stages</Typography>
            {/* <Stack display="flex" flexDirection="column">
              {stages.map((stage) => (
                <FormControlLabel
                  key={stage}
                  control={
                    <Checkbox
                      checked={data.stage.includes(stage)}
                      onChange={handleStageChange}
                      name={stage}
                    />
                  }
                  label={stage}
                />
              ))}
            </Stack> */}
          </Box>
          <Stack mb={1}>
            <TextField
              label="Search By Name"
              size="small"
              variant="outlined"
              fullWidth
              value={data.name}
              onChange={handleNameChange}
            />
          </Stack>
          <Stack mb={1}>
            <TextField
              label="Enter Skills"
              size="small"
              variant="outlined"
              fullWidth
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleSkillAdd}
            />
            <Stack direction="row" spacing={1} mt={1}>
              {data.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  onDelete={() => handleSkillRemove(skill)}
                />
              ))}
            </Stack>
          </Stack>
          <Stack mb={1}>
            <TextField
              label="Enter Locations"
              size="small"
              variant="outlined"
              fullWidth
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              onKeyDown={handleLocationAdd}
            />
            <Stack direction="row" spacing={1} mt={1}>
              {data.locations.map((location) => (
                <Chip
                  key={location}
                  label={location}
                  onDelete={() => handleLocationRemove(location)}
                />
              ))}
            </Stack>
          </Stack>
          <Stack mt={2}>
            <Typography variant="body1">Experience range</Typography>
            <Slider
              getAriaLabel={() => "Experience range"}
              value={value}
              onChange={handleExperienceChange}
              valueLabelDisplay="auto"
              min={0}
              max={10}
            />
          </Stack>
          <Stack direction="row" spacing={2} mb={1} className=" mt-2">
            <button
              size="small"
              variant="outlined"
              color="error"
              // style={{ fontSize: "12px" }}
              onClick={() =>
                setData({
                  name: "",
                  stage: [],
                  skills: [],
                  locations: [],
                  experience: { min: 0, max: 1 },
                })
              }
              className=" text-[15px] text-blue-500 hover:underline duration-300 "
            >
              Reset Filters
            </button>
            <button
              size="small"
              variant="contained"
              color="success"
              // style={{ fontSize: "15px" }}
              onClick={() => {
                setFilterData(data);
              }}
              className=" text-[15px] hover:underline duration-300"
            >
              Apply Filters
            </button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FilterScreen;
