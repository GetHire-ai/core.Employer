import React, { useEffect, useState } from "react";
import ShortStudentCard from "pages/Jobs/JobsApplication/ShortStudentCard";
import JobSidebar from "pages/Jobs/JobsApplication/JobSidebar";
import { GetApi } from "Api/Api_Calling";


import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  IconButton,
  Collapse,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import CancelIcon from "@mui/icons-material/Cancel";

const AllApplications = () => {
  const [allApplications, setAllApplications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");
  const [filterOptionsOpen, setFilterOptionsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    shortlisted: false,
    rejected: false,
    selected: false,
  });
  const [expandedRow, setExpandedRow] = useState(null);

  const getAllApplications = async () => {
    try {
      const response = await GetApi(
        "api/CompanyRoutes/GetAllApplicationofacompany"
      );
      setAllApplications(response?.data?.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllApplications();
  }, []);

  // Filter applications based on the selected tab and search input
  const filteredApplications = allApplications.filter((application) => {
    const isStatusMatch =
      filter === "all" ||
      (filter === "shortlisted" && application.isshortlisted) ||
      (filter === "rejected" && application.isrejected) ||
      (filter === "selected" && application.IsSelectedforjob);

    const isSearchMatch = application.StudentId?.Name.toLowerCase().includes(
      searchText.toLowerCase()
    );

    return isStatusMatch && isSearchMatch;
  });

  // Count applications based on the status
  const countApplications = (status) => {
    return allApplications.filter((application) => {
      if (status === "all") return true;
      if (status === "shortlisted") return application.isshortlisted;
      if (status === "rejected") return application.isrejected;
      if (status === "selected") return application.IsSelectedforjob;
      return false;
    }).length;
  };

  // Apply selected filters
  const applyFilters = () => {
    const activeFilters = [];
    if (selectedFilters.shortlisted) activeFilters.push("shortlisted");
    if (selectedFilters.rejected) activeFilters.push("rejected");
    if (selectedFilters.selected) activeFilters.push("selected");
    return allApplications.filter((application) => {
      if (activeFilters.length === 0) return true;
      return activeFilters.some((filter) => {
        if (filter === "shortlisted") return application.isshortlisted;
        if (filter === "rejected") return application.isrejected;
        if (filter === "selected") return application.IsSelectedforjob;
        return false;
      });
    });
  };

  const resetFilters = () => {
    setSelectedFilters({
      shortlisted: false,
      rejected: false,
      selected: false,
    });
    setFilter("all");
  };

  const filteredApplicationsWithFilters = applyFilters().filter(
    (application) => {
      const isStatusMatch =
        filter === "all" ||
        (filter === "shortlisted" && application.isshortlisted) ||
        (filter === "rejected" && application.isrejected) ||
        (filter === "selected" && application.IsSelectedforjob);

      const isSearchMatch = application.StudentId?.Name.toLowerCase().includes(
        searchText.toLowerCase()
      );

      return isStatusMatch && isSearchMatch;
    }
  );

  // Toggle expanded row
  const handleRowExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  //  -------------------
  const [side1, setSide1] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const openSideBar = (index = null) => {
    setSide1(index !== null ? true : !side1);
    setOpenIndex(index);
  };
 
 
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            flexGrow: 1,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ ml: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Post Job
          </Button>
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Add Candidate
          </Button>
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Tabs
          value={filter}
          onChange={(event, newValue) => setFilter(newValue)}
          aria-label="application status tabs"
        >
          <Button
            onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}
            color="primary"
            sx={{ ml: 2 }}
          >
            <FilterListIcon />
          </Button>
          <Tab
            label={`All Applications (${countApplications("all")})`}
            value="all"
          />
          <Tab
            label={`Shortlisted (${countApplications("shortlisted")})`}
            value="shortlisted"
          />
          <Tab
            label={`Rejected (${countApplications("rejected")})`}
            value="rejected"
          />
          <Tab
            label={`Selected (${countApplications("selected")})`}
            value="selected"
          />
        </Tabs>
        {filterOptionsOpen && (
          <Box
            sx={{
              my: 2,
              p: 2,
              border: "1px solid #c3c5c8",
              borderRadius: 1,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedFilters.shortlisted}
                  onChange={(e) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      shortlisted: e.target.checked,
                    }))
                  }
                />
              }
              label={`Shortlisted (${countApplications("shortlisted")})`}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedFilters.rejected}
                  onChange={(e) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      rejected: e.target.checked,
                    }))
                  }
                />
              }
              label={`Rejected (${countApplications("rejected")})`}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedFilters.selected}
                  onChange={(e) =>
                    setSelectedFilters((prev) => ({
                      ...prev,
                      selected: e.target.checked,
                    }))
                  }
                />
              }
              label={`Selected (${countApplications("selected")})`}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={resetFilters}
              sx={{ mt: 2 }}
            >
              Reset Filters
            </Button>
          </Box>
        )}
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Expand</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Application Stage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredApplicationsWithFilters.map((application , index) => (
                <React.Fragment key={application._id}>
                  <TableRow>
                    <TableCell>
                      <IconButton
                        // onClick={() => handleRowExpand(application._id)}
                        onClick={() => openSideBar(index)}
                      >
                        {expandedRow === application._id ? (
                          <ExpandLessIcon />
                        ) : (
                          <>
                             <ExpandMoreIcon />
                             <JobSidebar
                                side1={side1}
                                openSideBar={openSideBar}
                                selectedApplication={application}
                              />
                          </>
                          // <ShortStudentCard
                          //     key={index}
                          //     job={application}
                          //     index={index}
                          //     openModal={true}
                          //   />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {application.StudentId?.Name || "N/A"}
                    </TableCell>
                    <TableCell>
                      {application.StudentId?.Email || "N/A"}
                    </TableCell>
                    <TableCell>
                      {application.JobId?.companyName || "N/A"}
                    </TableCell>
                    <TableCell>
                      {application.JobId?.positionName || "N/A"}
                    </TableCell>
                    <TableCell>{application.status}</TableCell>
                    <TableCell>{application.Application_stage}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={7} sx={{ p: 0 }}>
                      <Collapse in={expandedRow === application._id}>
                        <Box sx={{ p: 2 }}>
                          <Typography variant="h6" gutterBottom>
                            Additional Details
                          </Typography>
                          <Typography>
                            <strong>Application Date:</strong>{" "}
                            {application.applicationDate || "N/A"}
                          </Typography>
                          <Typography>
                            <strong>Resume:</strong>{" "}
                            {application.resume || "N/A"}
                          </Typography>
                          {/* Add more details as needed */}
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default AllApplications;
