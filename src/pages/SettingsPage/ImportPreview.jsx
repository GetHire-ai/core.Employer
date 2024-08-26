import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteApi, GetApi, PostApi, PutApi } from "Api/Api_Calling";
import { Navigate, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Autocomplete, TextField, Typography } from "@mui/material";

const ImportPreview = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [imports, setImports] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [jobId, setJobId] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const getImports = async () => {
    try {
      let res = await GetApi(`api/companyroutes/import/${id}`);
      setImports(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getJobs = async () => {
    try {
      let res = await GetApi("api/CompanyRoutes/GetAllJobs");
      setJobs(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImports();
    getJobs();
  }, []);

  const handleSelectRow = (rowIndex) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(rowIndex)
        ? prevSelectedRows.filter((index) => index !== rowIndex)
        : [...prevSelectedRows, rowIndex]
    );
  };

  const handleSelectAllRows = (event) => {
    if (event.target.checked) {
      const allRowIndexes = imports?.data?.map((_, index) => index);
      setSelectedRows(allRowIndexes);
    } else {
      setSelectedRows([]);
    }
  };

  const handleActionOnSelected = async () => {
    if (selectedRows.length > 0) {
      const selectedData = selectedRows.map((index) => imports?.data[index]);
      try {
        let res = await PostApi(`api/CompanyRoutes/import`, selectedData);
        console.log("API Response:", res);
      } catch (error) {
        console.log("API Error:", error);
      }
    }
  };

  const renderTable = () => {
    if (imports?.length === 0) {
      return <p>No data to display</p>;
    }
    const rows = imports?.data;

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selectedRows.length > 0 && selectedRows.length < rows.length
                  }
                  checked={
                    rows.length > 0 && selectedRows.length === rows.length
                  }
                  onChange={handleSelectAllRows}
                />
              </TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                selected={selectedRows.includes(rowIndex)}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedRows.includes(rowIndex)}
                    onChange={() => handleSelectRow(rowIndex)}
                  />
                </TableCell>
                <TableCell>{row?.firstname}</TableCell>
                <TableCell>{row?.lastname}</TableCell>
                <TableCell>{row?.email}</TableCell>
                <TableCell>{row?.phone}</TableCell>
                <TableCell>{row["experience(years)"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const handleFinish = async () => {
    try {
      let data = {
        jobId: jobId,
        importId: id,
      };
      let res = await PostApi(`api/companyroutes/import/assign`, data);
      navigate("/bulk-imports");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      let res = await DeleteApi(`api/companyroutes/import/delete`, id);
      console.log(res);
      navigate("/bulk-imports");
    } catch (error) {
      console.log(error);
    }
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div className="w-full h-full bg-[#f4f3ef] flex justify-start gap-10 items-start px-5">
      <div className="bg-white rounded-md border w-1/4 flex flex-col justify-center gap-10 items-center py-5">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </Link>
            <Link
              className="cursor-pointer"
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
              onClick={() => navigate("/bulk-imports")}
            >
              Import
            </Link>
            <Typography color="text.primary" className="cursor-pointer">
              Preview
            </Typography>
          </Breadcrumbs>
        </div>
        <div className="text-2xl text-gray-600">Import Application </div>
        <div className="w-full px-2">
          <Autocomplete
            disablePortal
            fullWidth
            id="job-autocomplete"
            options={jobs}
            getOptionLabel={(option) => option.positionName}
            renderInput={(params) => (
              <TextField {...params} label="Select Job Position" />
            )}
            onChange={(event, value) => {
              if (value) {
                setJobId(value._id);
              }
            }}
          />
          <Divider />
        </div>{" "}
        <div className="flex justify-around w-full">
          <Button variant="contained" color="success" onClick={handleFinish}>
            Finish Import
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-md border w-3/4 p-5">
        <div className="text-2xl text-gray-600 mb-5">Import Data</div>
        {imports.length != 0 && renderTable()}
        {imports.length != 0 && (
          <div className="mt-5">
            <Button
              variant="contained"
              color="primary"
              onClick={handleActionOnSelected}
              disabled={selectedRows.length === 0}
            >
              Invite
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportPreview;
