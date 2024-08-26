import React from "react";
import { BarChart, Bar, ResponsiveContainer, LabelList } from "recharts";

const SalaryStatisticsChart = () => {
  const data = [
    {
      name: "Developer",
      uv: 4000,
      pv: 2400,
      amt: 2400,
      fill: "#9bb0f6",
    },
    {
      name: "Marketing",
      uv: 3000,
      pv: 1398,
      amt: 2210,
      fill: "#c4cefb",
    },
    {
      name: "Sales",
      uv: 2000,
      pv: 9800,
      amt: 2290,
      fill: "#dee3fc",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey="uv">
          <LabelList dataKey="name" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalaryStatisticsChart;
