import React from "react";
import { ReportsLink } from "./ReportsLink";
import { Link, useLocation } from "react-router-dom";

const ReportsExport = () => {
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
        <div className="mt-[29px]">
          <p className="text-[20px] font-[500]">Exports all Jobs</p>
          <div className="mt-[21px]">
            <div className="bg-white border-[1px] px-[14px] py-[8px] border-[#d1d1d1] rounded-[4px] text-[11px] font-[400]">
              <p>
                Simply select a job, choose a date range, and download your
                data.
              </p>
            </div>
            <div className="flex justify-end items-center mt-[22px]">
              <button className="bg-black rounded-[8px] py-[10px] px-[13px] text-white text-[14px] font-[500]">
                Download spread sheet of candidates
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[3px]">
          <p className="text-[20px] font-[500]">Exports Jobs</p>
          <div className="mt-[21px]">
            <div className="bg-white border-[1px] px-[14px] py-[8px] border-[#d1d1d1] rounded-[4px] text-[11px] font-[400]">
              <p>Export information for all job posting to a spreadsheet.</p>
            </div>
            <div className="flex justify-end items-center mt-[22px]">
              <button className="bg-black rounded-[8px] py-[10px] px-[13px] text-white text-[14px] font-[500]">
                Download spread sheet of Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsExport;
