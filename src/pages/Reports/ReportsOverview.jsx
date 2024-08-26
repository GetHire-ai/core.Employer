import React from "react";
import { ReportsLink } from "./ReportsLink";
import { Link, useLocation } from "react-router-dom";
import OverviewChart from "./OverviewChart";

const ReportsOverview = () => {
  const path = useLocation();
  const pathName = path?.pathname;

  return (
    <>
      <div className="p-[20px] lg:pr-[89px] font-[poppins]">
        <p className="text-[24px] font-[500]">Reports For All jobs</p>
        <div className="flex flex-col mt-[16px] gap-[20px] lg:flex-row justify-between items-center">
          <div className="text-[11px]  font-[500] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[12px] justify-start items-center ">
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
        <div className="mt-[15px]">
          <p className="text-[20px] font-[500]">All jobs</p>
          <div className="grid mt-[9px] lg:grid-cols-5 pl-[13px] gap-[14px]">
            <div className="bg-white col-start-1 col-end-3 border-[#5956e9] border-[1px] rounded-[10px] p-[17px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-[400]">Total Views</p>
                  <p className="text-[20px] font-[700]">12</p>
                </div>
                <div>
                  <p className="text-[11px] font-[400]">Total Applications</p>
                  <p className="text-[20px] font-[700]">14</p>
                </div>
                <div>
                  <p className="text-[11px] font-[400]">Total Convsion rate</p>
                  <p className="text-[20px] font-[700]">14 %</p>
                </div>
              </div>
              <p className="text-[#5956e9] mt-[17px] text-[11px] font-[500]">
                View
              </p>
            </div>
            <div className="bg-white  rounded-[10px] p-[17px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-[400]">Interviewing</p>
                  <p className="text-[20px] font-[700]">9</p>
                </div>
              </div>
              <p className="text-[#5956e9] mt-[17px] text-[11px] font-[500]">
                View
              </p>
            </div>
            <div className="bg-white rounded-[10px] p-[17px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-[400]">Offered</p>
                  <p className="text-[20px] font-[700]">5</p>
                </div>
              </div>
              <p className="text-[#5956e9] mt-[17px] text-[11px] font-[500]">
                View
              </p>
            </div>
            <div className="bg-white  rounded-[10px] p-[17px]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[11px] font-[400]">Hired</p>
                  <p className="text-[20px] font-[700]">6</p>
                </div>
              </div>
              <p className="text-[#5956e9] mt-[17px] text-[11px] font-[500]">
                View
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] px-[22px] py-[19px] mt-[16px]">
          <div className="flex flex-col lg:flex-row gap-[20px] justify-between items-center">
            <div className="text-[11px] flex gap-[2px] font-[400]">
              <button className="bg-black text-white rounded-[25px] px-[10px] py-[4px]">
                Views
              </button>
              <button className="bg-[#e6e9fc] rounded-[25px] px-[10px] py-[4px]">
                Applications
              </button>
            </div>
            <div className="text-[11px] gap-[16px] flex justify-between items-center font-[400] border-[1px] border-[#dedede] rounded-[3px] px-[10px] py-[4px]">
              <p>Day</p>
              <p>Week</p>
              <p>Month</p>
            </div>
          </div>
          <div className="w-full mt-[16px] h-[223px]">
            <OverviewChart />
          </div>
        </div>
        <div className="mt-[20px]">
          <p className="text-[20px] font-[500]">Application Source</p>
          <div className="bg-white mt-[20px] p-[16px] rounded-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-[9px] w-full font-[500]">Top Sources</p>
              <div className="text-[9px] w-full flex gap-[9px] font-[500]">
                <button className="bg-black text-white rounded-[46px] py-[6px] px-[12px]">
                  Pie
                </button>
                <button className="bg-[#e6e9fc] rounded-[46px] py-[6px] px-[12px]">
                  Donut
                </button>
                <button className="bg-[#e6e9fc] rounded-[46px] py-[6px] px-[12px]">
                  Percentage
                </button>
              </div>
            </div>
            <div className="border-[1px]  w-[216px] border-[#f2f2f2] rounded-[4px]">
              <div className="text-[9px] px-[15px] py-[10px] font-[500] flex justify-between items-center">
                <p>Source</p>
                <p>Applications</p>
              </div>
              <div className="flex justify-between px-[15px] py-[10px] text-[9px] font-[500] border-[#f2f2f2] border-t-[1px] items-center">
                <div className="flex justify-center items-center gap-[4px]">
                  <div className="bg-[#7cd6fd] w-[6px] h-[6px] rounded-[50%]"></div>
                  <p>Added by admin</p>
                </div>
                <p>1</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="bg-[#7cd6fd] w-[272px] h-[272px] rounded-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsOverview;
