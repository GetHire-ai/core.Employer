import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const JobWiseChart = () => {
  const data = [
    {
      name: "Page A",
      uv: 0.95,
      pv: 0.25,
      amt: 0.5,
    },
    {
      name: "Page A",
      uv: 0.95,
      pv: 0.25,
      amt: 0.5,
    },
    {
      name: "Page A",
      uv: 0.95,
      pv: 0.25,
      amt: 0.5,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
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
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default JobWiseChart;
