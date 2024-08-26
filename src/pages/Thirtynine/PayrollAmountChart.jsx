import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
{
name: 'Jan29',
Wps: 4000,
NonWps: 2400,
amt: 2400,
},
{
name: 'Feb20',
Wps: 3000,
NonWps: 1398,
amt: 2210,
},
{
name: 'Mar20',
Wps: 2000,
NonWps: 9800,
amt: 2290,
},
{
name: 'Apr20',
Wps: 2780,
NonWps: 3908,
amt: 2000,
},
{
name: 'May20',
Wps: 1890,
NonWps: 4800,
amt: 2181,
},
{
name: 'Jun20',
Wps: 2390,
NonWps: 3800,
amt: 2500,
},
{
name: 'Jul20',
Wps: 3490,
NonWps: 4300,
amt: 2100,
},
];


const PayrollAmountChart = () => {
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
          <Bar dataKey="NonWps" stackId="a" barSize={30} radius={[0,0,10,10]} fill="#0080fc" />
          <Bar dataKey="Wps" stackId="a" barSize={30} radius={[10,10,0,0]} fill="#80bffd" />
        </BarChart>
      </ResponsiveContainer>

  )
};

export default PayrollAmountChart;
