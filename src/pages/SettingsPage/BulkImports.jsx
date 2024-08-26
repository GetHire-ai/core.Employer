import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetApi, PostApi } from "Api/Api_Calling";
import { Navigate, useNavigate } from "react-router-dom";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CSVDataDisplay = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [imports, setImports] = useState([]);
  const [showData, setShowData] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  const getImports = async () => {
    try {
      let res = await GetApi(`api/companyroutes/import`);
      setImports(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImports();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setShowData(false);
  };

  const handleUploadClick = async () => {
    if (file) {
      Papa.parse(file, {
        complete: (results) => {
          const headers = results.data[0];
          const transformedData = results.data.slice(1).map((row) => {
            let obj = {};
            headers.forEach((header, index) => {
              obj[header.trim()] = row[index].trim();
            });
            return obj;
          });
          setData(transformedData);
          setShowData(true);
        },
        header: false,
        skipEmptyLines: true,
      });
      let sendData = { data: data };
      try {
        let res = await PostApi(`api/companyroutes/import`, sendData);
        navigate(`/import-preview/${res?.data?.data?._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSelectRow = (rowIndex) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(rowIndex)
        ? prevSelectedRows.filter((index) => index !== rowIndex)
        : [...prevSelectedRows, rowIndex]
    );
  };

  const handleSelectAllRows = (event) => {
    if (event.target.checked) {
      const allRowIndexes = data.map((_, index) => index);
      setSelectedRows(allRowIndexes);
    } else {
      setSelectedRows([]);
    }
  };

  const handleActionOnSelected = async () => {
    if (selectedRows.length > 0) {
      const selectedData = selectedRows.map((index) => data[index]);
      try {
        let res = await PostApi(`api/CompanyRoutes/import`, selectedData);
        console.log("API Response:", res);
      } catch (error) {
        console.log("API Error:", error);
      }
    }
  };

  const renderImportTable = () => {
    if (imports.length === 0) {
      return <p>No data to display</p>;
    }
    const rows = imports;

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Date</b>
              </TableCell>
              <TableCell>
                <b>Applicaations</b>
              </TableCell>
              <TableCell>
                <b>Status</b>
              </TableCell>
              <TableCell>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                selected={selectedRows.includes(rowIndex)}
              >
                <TableCell>{row?.createdAt}</TableCell>
                <TableCell>{row?.data?.length}</TableCell>
                <TableCell>{row?.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    disabled={row.status !== "Pending"}
                    onClick={() => navigate(`/import-preview/${row._id}`)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderTable = () => {
    if (data.length === 0) {
      return <p>No data to display</p>;
    }

    const headers = Object.keys(data[0]);
    const rows = data;

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
              {headers.map((header, index) => (
                <TableCell key={index}>
                  <b>{header}</b>
                </TableCell>
              ))}
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
                {headers.map((header, cellIndex) => (
                  <TableCell key={cellIndex}>{row[header]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <div className="w-full h-full bg-[#f4f3ef] flex justify-start gap-10 items-start px-5">
      <div className="bg-white rounded-md border w-1/4 flex flex-col justify-center gap-10 items-center py-5">
        <div className="text-2xl text-gray-600">Import Application</div>
        <div>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            size="small"
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput
              type="file"
              accept=".csv"
              onChange={handleFileChange}
            />
          </Button>
        </div>
        <div>
          <Button variant="contained" size="small" onClick={handleUploadClick}>
            Upload
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-md border w-3/4 p-5">
        <div className="text-2xl text-gray-600 mb-5">All Imports</div>
        {imports.length !== 0 && renderImportTable()}
      </div>
      {/* <div className="bg-white rounded-md border w-3/4 p-5">
        {showData && renderTable()}
        <div className="text-2xl text-gray-600 mb-5">CSV Data</div>
        {showData && (
          <div className="mt-5">
            <Button
              variant="contained"
              color="primary"
              onClick={handleActionOnSelected}
              disabled={selectedRows.length === 0}
            >
              Perform Action on Selected Rows
            </Button>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CSVDataDisplay;
