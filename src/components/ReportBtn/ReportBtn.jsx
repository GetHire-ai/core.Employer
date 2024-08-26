import { Button, Text } from "components";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ReportBtn() {
  const navigate = useNavigate();
  const pathname = useLocation();
  function handleOnClick(link) {
    navigate(link);
  }
  return (
    <>
      <div className="flex md:flex-col flex-row gap-[12px] items-center justify-start ml-2.5 md:ml-[0] mt-3.5 w-full">
        <Button
          className={`cursor-pointer font-medium leading-[normal] rounded-[4px] min-w-[66px] text-[11px] px-[11px] py-[4px] text-center ${
            pathname.pathname === "/reports"
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
          onClick={() => handleOnClick("/reports")}
        >
          Overview
        </Button>
        <Button
          className={`cursor-pointer font-medium leading-[normal] rounded-[4px] min-w-[66px] text-[11px] px-[11px] py-[4px] text-center ${
           pathname.pathname === "/pipeline"
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
          onClick={() => handleOnClick("/pipeline")}
        >
          Pipeline
        </Button>
        <Button
          className={`cursor-pointer font-medium leading-[normal] rounded-[4px] min-w-[66px] text-[11px] px-[11px] py-[4px] text-center ${
           pathname.pathname === "/time-to-hire"
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
         onClick={() => handleOnClick("/time-to-hire")}
        >
          Time to Hire
        </Button>
        <Button
          className={`cursor-pointer font-medium leading-[normal] rounded-[4px] min-w-[66px] text-[11px] px-[11px] py-[4px] text-center ${
           pathname.pathname === "/demographics"
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
         onClick={() => handleOnClick("/demographics")}
        >
          Demographics
        </Button>
        <Button
          className={`cursor-pointer font-medium leading-[normal] rounded-[4px] min-w-[66px] text-[11px] px-[11px] py-[4px] text-center ${
           pathname.pathname === ""
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
         onClick={() => handleOnClick("")}
        >
          Live Summary
        </Button>
        <Text
          className={`cursor-pointer font-medium leading-[normal] rounded-[4px] min-w-[66px] text-[11px] px-[11px] py-[4px] text-center ${
           pathname.pathname === "Export"
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
         onClick={() => handleOnClick("/fourtythree")}
        >
          Export
        </Text>
        <Button
          className="border border-gray-300 border-solid cursor-pointer leading-[normal] min-w-[236px] md:ml-[0] ml-[241px] text-[11px] text-center"
          shape="round"
          color="gray_50_03"
        >
          Last 30 days Oct 31, 2023 - Nov 30, 2023
        </Button>
      </div>
    </>
  );
}

export default ReportBtn;
