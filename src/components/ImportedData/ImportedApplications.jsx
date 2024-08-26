import { GetApi } from "Api/Api_Calling";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Autocomplete,
  Switch,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import AllApplications from "./AllApplications";
import { useNavigate } from "react-router-dom";

const ImportedApplications = () => {
  const navigate = useNavigate();
  const [imports, setImports] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedJob, setSelectedJob] = useState("");
  const [show, setShow] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState([]);

  const getJobs = async () => {
    try {
      let res = await GetApi("api/CompanyRoutes/GetAllJobs");
      setJobs(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getImports = async () => {
    try {
      let res = await GetApi("api/companyroutes/import");
      const allImports = res?.data?.data || [];
      const filteredImports = allImports.filter(
        (importedData) => importedData.status !== "Pending"
      );
      setImports(filteredImports);
      setFiltered(filteredImports);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImports();
    getJobs();
  }, []);

  useEffect(() => {
    if (selectedJob) {
      let data = imports?.filter((item) => item.jobId === selectedJob);
      setFiltered(data);
    } else {
      setFiltered(imports);
      return;
    }
  }, [selectedJob]);

  const handleSelectCandidate = (candidate) => {
    setSelectedCandidates((prev) => {
      if (prev.includes(candidate)) {
        return prev.filter((item) => item !== candidate);
      } else {
        return [...prev, candidate];
      }
    });
  };

  const handleInvite = () => {
    // Implement your invite function here
    console.log("Inviting candidates:", selectedCandidates);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <FormControlLabel
          control={
            <Switch
              checked={show}
              onChange={() => setShow((prev) => !prev)}
              color="primary"
            />
          }
          label={show ? "Show Imported Applications" : "Show All Applications"}
          className=" text-blue-700 mb-4"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/bulk-imports")}
        >
          Bulk Import
        </Button>
      </div>
      {!show && (
        <>
          <div className="flex gap-4 items-center px-2">
            <Autocomplete
              id="jobs-filter"
              options={jobs}
              getOptionLabel={(option) => option.positionName}
              style={{ width: 300 }}
              onChange={(event, value) => {
                if (value) {
                  setSelectedJob(value._id);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Filter by Job"
                  variant="outlined"
                />
              )}
            />
            {/* <Button
              variant="outlined"
              color="error"
              onClick={() => setSelectedJob(null)}
            >
              Reset
            </Button> */}
            <Button
              class="relative flex h-[45px] w-20 rounded items-center justify-center overflow-hidden bg-blue-300 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-slate-600 hover:before:border-[25px]"
              onClick={() => setSelectedJob(null)}
            >
              <span class="relative z-10">Reset</span>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleInvite}
              disabled={selectedCandidates.length === 0}
            >
              Invite
            </Button>
          </div>
          <TableContainer component={Paper} style={{ marginTop: 20 }}>
            <Table>
              <TableHead>
                <TableRow className="bg-blue-300">
                  <TableCell>
                    <p className=" text-lg font-bold">Select</p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-lg font-bold">First Name</p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-lg font-bold">Last Name</p>
                  </TableCell>
                  <TableCell>
                    <p className=" text-lg font-bold">Email</p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtered.map((importedData, index) =>
                  importedData.data.map((item, dataIndex) => (
                    <TableRow key={`${index}-${dataIndex}`}>
                      <TableCell>
                        <Checkbox
                          checked={selectedCandidates.includes(item)}
                          onChange={() => handleSelectCandidate(item)}
                        />
                      </TableCell>
                      <TableCell>
                        <p>{item?.firstname || "N/A"}</p>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm font-medium">
                          {item?.lastname || "N/A"}
                        </p>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm font-medium">
                          {item?.email || "N/A"}
                        </p>
                      </TableCell>
                    </TableRow>
                  ))
                )}
                {filtered.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4}>No data available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      {show && <AllApplications />}
    </div>
  );
};

export default ImportedApplications;
