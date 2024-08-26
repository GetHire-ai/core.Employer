import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    GrossSalary: 4,
    NetSalary: 2,
    amt: 2,
  },
  {
    name: "Feb",
    GrossSalary: 3,
    NetSalary: 1,
    amt: 3,
  },
  {
    name: "Mar",
    GrossSalary: 2,
    NetSalary: 9,
    amt: 2,
  },
  {
    name: "Apr",
    GrossSalary: 2,
    NetSalary: 5,
    amt: 2,
  },
  {
    name: "May",
    GrossSalary: 1,
    NetSalary: 4,
    amt: 2,
  },
  {
    name: "Jun",
    GrossSalary: 2,
    NetSalary: 8,
    amt: 5,
  },
  {
    name: "Jul",
    GrossSalary: 3,
    NetSalary: 4,
    amt: 2,
  },
  {
    name: "Aug",
    GrossSalary: 3,
    NetSalary: 4,
    amt: 2,
  },
  {
    name: "Sep",
    GrossSalary: 3,
    NetSalary: 4,
    amt: 2,
  },
];

const PayRollSummaryChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="NetSalary"
          radius={[0, 0, 6, 6]}
          stackId="a"
          fill="#0080fc"
          barSize="42px"
        />
        <Bar
          dataKey="GrossSalary"
          radius={[6, 6, 0, 0]}
          stackId="a"
          fill="#80bffd"
          barSize="42px"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PayRollSummaryChart;
