import React from "react";
import { ReportsLink } from "./ReportsLink";
import { Link, useLocation } from "react-router-dom";

const ReportsDemographics = () => {
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
          <p className="text-[20px] font-[500]">Demographics all jobs</p>
          <div className="grid mt-[20px] grid-cols-1 lg:grid-cols-2 gap-[16px]">
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Most hires by sources</p>
              <p className="text-[20px] font-[700]">Added By Admin</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">No. of hires by sources</p>
              <p className="text-[20px] font-[700]">9</p>
            </div>
          </div>
        </div>
        <div className="mt-[16px]">
          <p className="text-[20px] font-[500]">Pipeline Funnel</p>

          <div className="bg-white border-[1px] border-[#d1d1d1] mt-[15px] rounded-[4px] lg:mx-[10px] ">
            <div className=" border-b-[1px] border-[#d1d1d1] ">
              <div className="flex text-black gap-[10px] text-[11px] font-[400] justify-between py-[8px] px-[14px] items-center">
                <p className="w-full">Source</p>
                <p className="w-full">Application</p>
                <p className="w-full">Interviewing</p>
                <p className="w-full">Offered</p>
                <p className="w-full">Hired</p>
              </div>
            </div>
            <div className="flex text-black gap-[10px] text-[11px] font-[400] justify-between py-[8px] px-[14px] items-center">
              <p className="w-full">Added by admin</p>
              <p className="w-full">1</p>
              <p className="w-full">2</p>
              <p className="w-full">3</p>
              <p className="w-full">1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsDemographics;
