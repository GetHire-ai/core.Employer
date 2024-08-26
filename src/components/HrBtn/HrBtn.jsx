 import { Button, Line, Text } from "components";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function HrBtn() {

  const [employeesDropDown,setEmployeesDropDown] =useState(true);
  const handleEmployeesDropDown = () =>{
    setEmployeesDropDown(!employeesDropDown);
  }
  const [payRollDropDown,setPayRollDropDown] =useState(true);
  const handlePayRollDropDown = () =>{
    setPayRollDropDown(!payRollDropDown);
  }
  const [attandanceDropDown,setAttandanceDropDown] =useState(true);
  const handleAttandanceDropDown = () =>{
    setAttandanceDropDown(!attandanceDropDown);
  }

  const navigate = useNavigate();
  const pathname = useLocation();
  function handleOnClick(link) {
    navigate(link);
  }
  return (
    <>
      <div className="flex items-center justify-evenly flex-col lg:flex-row gap-[12px] w-full ">
        <div className="relative">
          <Button
            className={`cursor-pointer font-[500]  font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
              pathname.pathname === "/thirtyfour"
                ? "bg-black text-white"
                : "bg-[#FFF] text-black"
            }`}
            onClick={() => handleEmployeesDropDown()}
          >
            Employees
          </Button>
          {!employeesDropDown ? (

          <div className="absolute bg-white top-[34px] flex flex-col gap-2 inset-x-[0] items-center justify-start mx-auto p-1 rounded-lg shadow-bs1 w-full">
            <div className="bg-indigo-100 flex flex-col items-center justify-end pt-[5px] px-[5px] rounded-lg w-[99%] md:w-full">
              <Text
                className="text-[11px] text-indigo-A200 font-[500] cursor-pointer tracking-[-0.11px]"
                size="txtPoppinsMedium11IndigoA200"
                onClick={() => handleOnClick("/employeehome")}
              >
                Employee Home
              </Text>
              <Line className="bg-indigo-100 h-0.5 mt-0.5 rounded-[1px] w-[92%]" />
            </div>
            <Text
              className="mb-[5px] ml-1.5 md:ml-[0] cursor-pointer text-[11px] text-black tracking-[-0.11px]"
              size="txtPoppinsMedium11"
              onClick={() => handleOnClick("/employeeList")}
            >
              Employee List
            </Text>
          </div>
          ):(null)}

        </div>
        <Button
          className={`cursor-pointer font-[500] font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
            pathname.pathname === "/thirtyseven"
              ? "bg-black text-white"
              : "bg-[#FFF] text-black"
          }`}
          onClick={() => handleOnClick("/taskboard")}
        >
          Task Board
        </Button>
        <Button
          className={`cursor-pointer font-[500] font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
            pathname.pathname === ""
              ? "bg-black text-white"
              : "bg-[#FFF] text-black"
          }`}
          onClick={() => handleOnClick("")}
        >
          Events
        </Button>
        <Button
          className={`cursor-pointer font-[500] font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
            pathname.pathname === "/thirtyeight"
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
          onClick={() => handleOnClick("/leaveManagement")}
        >
          Leave Management
        </Button>
        <div className="relative">
          <Button
            className={`cursor-pointer font-[500] font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
              pathname.pathname === "/thirtynine"
                ? "bg-black-900 text-white-A700_01"
                : "bg-[#FFF] text-black"
            }`}
            onClick={()=>handlePayRollDropDown()}
          >
            Pay Roll
          </Button>
         {!payRollDropDown ? (
          <div className="bg-white absolute flex flex-col gap-2 items-start justify-start mt-[-1px] mx-auto p-1 rounded-lg shadow-bs1 w-[150%] z-[1]">
            <div className=" flex flex-col items-start justify-center pt-[5px] px-[5px] rounded-lg w-[99%] md:w-full">
              <Text
                className="text-[11px] font-[500] text-indigo-A200 cursor-pointer"
                size="txtPoppinsMedium11IndigoA200"
                onClick={() => handleOnClick("/payRollHome")}
              >
                Pay Roll Home
              </Text>
              <Line className="bg-indigo-100 h-0.5 md:ml-[0] ml-[3px] mt-0.5 rounded-[1px] w-[92%]" />
            </div>
            <Text
              className="mb-[5px] ml-1.5 font-[500] md:ml-[0] text-[11px] cursor-pointer text-black-900 tracking-[-0.11px]"
              size="txtPoppinsMedium11"
              onClick={() => handleOnClick("/payRollList")}
            >
              Pay Roll List
            </Text>
          </div>
         ):(null)}

        </div>
        <Button
          className={`cursor-pointer font-font-[500] font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
            pathname.pathname === ""
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
          onClick={() => handleOnClick("")}
        >
          Performance
        </Button>
        <div className="relative">
          <Button
            className={`cursor-pointer font-[500] font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
              pathname.pathname === ""
                ? "bg-black-900 text-white-A700_01"
                : "bg-[#FFF] text-black"
            }`}
            onClick={() => handleAttandanceDropDown()}
          >
            Attendance
          </Button>
          {!attandanceDropDown ? (
   <div className="bg-white absolute flex flex-col gap-2 items-start justify-start mt-[-1px] mx-auto p-1 rounded-lg shadow-bs1 w-[150%] z-[1]">
            <div className="bg-indigo-A200_19 flex flex-col items-start justify-end pt-[5px] px-[5px] rounded-lg w-[99%] md:w-full">
              <Text
                className="text-[11px] font-[500] text-indigo-A200 cursor-pointer tracking-[-0.11px]"
                size="txtPoppinsMedium11IndigoA200"
                onClick={() => handleOnClick("/attendanceHome")}
              >
                  Attendance Home
              </Text>
              <Line className="bg-indigo-A200_02 h-0.5 md:ml-[0] ml-[3px] mt-0.5 rounded-[1px] w-[92%]" />
            </div>
            <Text
              className="mb-[5px] ml-1.5 md:ml-[0] text-[11px] font-[500] cursor-pointer text-black-900 tracking-[-0.11px]"
              size="txtPoppinsMedium11"
              onClick={() => handleOnClick("/attendanceList")}
            >
              Attendance List
            </Text>
          </div>
          ):(null)}
        </div>
        <Button
          className={`cursor-pointer font-medium font-[Poppins] leading-[normal] rounded-[8px] min-w-[66px] text-[14px] px-[18px] py-[8px] text-center ${
            pathname.pathname === ""
              ? "bg-black-900 text-white-A700_01"
              : "bg-[#FFF] text-black"
          }`}
          onClick={() => handleOnClick("")}
        >
          Resource Hub
        </Button>
      </div>
    </>
  );
}

export default HrBtn;
