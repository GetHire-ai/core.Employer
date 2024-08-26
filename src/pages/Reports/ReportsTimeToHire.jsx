import React from "react";
import { ReportsLink } from "./ReportsLink";
import { Link, useLocation } from "react-router-dom";

const ReportsTimeToHire = () => {
  const path = useLocation();
  const pathName = path?.pathname;

  return (
    <>
      <div className="p-[20px] lg:pr-[89px] font-[poppins]">
        <p className="text-[24px] font-[500]">Reports For All jobs</p>
        <div className="flex flex-col mt-[16px] gap-[20px] lg:flex-row justify-between items-center">
          <div className="text-[11px] font-[500] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[12px] justify-start items-center ">
            {ReportsLink.map((e) => {
              return (
                <>
                  <Link
                    key={e?.link}
                    className={`${
                      pathName === e?.link
                        ? " bg-[#000] text-[#fff] py-[4px] px-[11px] rounded-[4px]"
                        : "bg-[#fff] text-[#000] py-[4px] px-[11px] rounded-[4px]"
                    }`}
                    to={e?.link}
                  >
                    {e?.name}
                  </Link>
                </>
              );
            })}
          </div>
          <div>
            <p className="text-[11px] bg-white py-[4px] px-[15px] font-[400]">
              <span className="text-[#5956e9]">Last 30 days</span> Oct 31, 2023
              - Nov 30, 2023
            </p>
          </div>
        </div>
        <div className="mt-[16px]">
          <p className="text-[20px] font-[500]">Time to Hire</p>
          <div className="grid mt-[20px] grid-cols-2 lg:grid-cols-4 gap-[16px]">
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Published jobs</p>
              <p className="text-[20px] font-[700]">9</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Filled jobs</p>
              <p className="text-[20px] font-[700]">3</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Total Hires</p>
              <p className="text-[20px] font-[700]">3</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">
                Average no. of days to hire
              </p>
              <p className="text-[20px] font-[700]">5</p>
            </div>
          </div>
        </div>
        <div className="mt-[33px] text-[11px] font-[400]">
          <p>No Data for the selected date range.</p>
        </div>
      </div>
    </>
  );
};

export default ReportsTimeToHire;
