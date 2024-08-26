import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { GetApi } from "Api/Api_Calling";
import moment from "moment";

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  let getTransactions = async () => {
    try {
      let res = await GetApi(`api/CompanyRoutes/wallet/transactions`);
      setTransactions(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return moment(date).format("DD-MM-YYYY HH:mm:ss");
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction?._id}>
              <TableCell>{transaction?.transactionId}</TableCell>
              <TableCell>{formatDate(transaction?.createdAt)}</TableCell>
              <TableCell>{transaction?.amount}</TableCell>
              <TableCell>{transaction?.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
