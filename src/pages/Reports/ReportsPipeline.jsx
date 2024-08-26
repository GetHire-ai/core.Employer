import React from "react";
import { ReportsLink } from "./ReportsLink";
import { Link, useLocation } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const ReportsPipeline = () => {
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
          <p className="text-[20px] font-[500]">Pipeline Overview All jobs</p>
          <div className="grid mt-[20px] grid-cols-2 lg:grid-cols-6 gap-[16px]">
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Applied</p>
              <p className="text-[20px] font-[700]">9</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Added</p>
              <p className="text-[20px] font-[700]">2</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Linked To a Job</p>
              <p className="text-[20px] font-[700]">2</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Referred</p>
              <p className="text-[20px] font-[700]">2</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Cv's Shared</p>
              <p className="text-[20px] font-[700]">2</p>
            </div>
            <div className="bg-white rounded-[10px] px-[20px] py-[15px]">
              <p className="text-[11px] font-[400]">Interviews</p>
              <p className="text-[20px] font-[700]">0</p>
            </div>
          </div>
        </div>
        <div className="mt-[16px]">
          <p className="text-[20px] font-[500]">Pipeline Performance</p>
          <div>
            <div className="flex justify-end items-center">
              <div className="flex gap-[9px]">
                <input type="checkbox" />
                <p className="text-[9px] font-[400]">Show user data</p>
              </div>
            </div>
            <div className="bg-white border-[1px] border-[#d1d1d1] mt-[3px] rounded-[4px] lg:mx-[10px] ">
              <div className=" border-b-[1px] border-[#d1d1d1] ">
                <div className="flex text-black gap-[10px] text-[11px] font-[400] justify-between py-[8px] px-[14px] items-center">
                  <p className="w-full">Stage</p>
                  <p className="w-full">Total</p>
                  <p className="w-full">Moved Forward</p>
                  <p className="w-full">Rejected/Moved back</p>
                  <p className="w-full">Unchanged</p>
                </div>
              </div>
              <div className="flex text-black gap-[10px] text-[11px] font-[400] justify-between py-[8px] px-[14px] items-center">
                <p className="w-full">New</p>
                <p className="w-full">1</p>
                <p className="w-full">2</p>
                <p className="w-full">3</p>
                <p className="w-full">1</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[16px]">
          <p className="text-[20px] font-[500]">Pipeline Funnel</p>

          <div className="bg-white mt-[38px] border-[1px] border-[#d1d1d1] rounded-[4px] lg:mx-[10px] ">
            <div className=" border-b-[1px] border-[#d1d1d1] ">
              <div className="flex text-black gap-[40px] text-[11px] font-[400] justify-between py-[8px] px-[14px] items-center">
                <p className="w-full">Stage</p>
                <p className="w-full">Funnel</p>
                <p className="w-full">Total</p>
                <p className="w-full">Conversion</p>
              </div>
            </div>
            <div className="flex text-black gap-[40px] text-[11px] font-[400] justify-between py-[8px] px-[14px] items-center">
              <p className="w-full">New</p>
              <p className="w-full">
                <div>
                  <div className="flex justify-end items-center">
                    <p className="text-[6px] font-[400]">100.00%</p>
                  </div>
                  <ProgressBar
                    completed={100}
                    bgColor="#5956e9"
                    color="#e6f3ff"
                    height="6px"
                    customLabel="."
                  />
                </div>
              </p>
              <p className="w-full">3</p>
              <p className="w-full">100%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsPipeline;
