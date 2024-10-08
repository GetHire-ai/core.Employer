import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ACHiringPipelineComponents = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          data: [95, 85, 65, 90],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: ["Screening", "Interviews", "Rejected", "Hired"],
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Clean up on component unmount
    return () => {
      chart.destroy();
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div className="">
      <div className="flex justify-between pt-[28px] pl-[20px] pr-[30px] pb-[13px] border border-[#D9D9D9] rounded-t-[20px]">
        <h1 className="font-[500] font-[Poppins] text-[#000000] text-[20px]">Hiring Pipeline</h1>
        <select className="border-2 px-[10px] rounded-[4px] font-[500] text-[11px] outline-none">
          <option>Last Month</option>
          <option>Last Week</option>
          <option>Last Day</option>
          <option>Last Year</option>
        </select>
      </div>
      <div ref={chartRef}></div>
    </div>
  );
};

export default ACHiringPipelineComponents;
