import HrBtn from "components/HrBtn/HrBtn";
import { SelectBox } from "components/SelectBox";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

const AttendanceHome = () => {
  const chooseTeamsOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const chooseDateOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

  const employesdata = [
    {
      image: "/images/img_ellipse4062.png",
      name: "Natasha Kirovska",
      designation: "Director Business Development",
      number: "1234567890",
      message: "1234567890",
      timeIn: "09:01",
      timeOut: "",
      status: "",
    },
    {
      image: "/images/img_ellipse4072.png",
      name: "Mario Palmer",
      designation: "Sales Intern",
      number: "1234567890",
      message: "1234567890",
      timeIn: "",
      timeOut: "",
      status: "Absent",
    },
    {
      image: "/images/img_ellipse4062.png",
      name: "Elizabeth Olsen",
      designation: "Manager Sales",
      number: "1234567890",
      message: "1234567890",
      timeIn: "09:50",
      timeOut: "18:10",
      status: "",
    },
    {
      image: "/images/img_ellipse4072.png",
      name: "Mario Palmer",
      designation: "Sales Intern",
      number: "1234567890",
      message: "1234567890",
      timeIn: "",
      timeOut: "",
      status: "Casual Leaves",
    },
  ];

  return (
    <div>
      <HrBtn />
      <div className="font-[Poppins] p-[10px] md:p-[30px]">
        <div className="bg-white p-[16px] flex flex-col gap-[16px] rounded-[16px]">
          <h1 className="font-[500] text-[24px] ">Attendance & Employees</h1>
          <div className="flex flex-col lg:flex-row gap-[10px] justify-center items-center w-full">
            <div className="bg-[#f6f9fe] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <h1 className="font-[600] text-[24px]">19</h1>
              <p className="font-[400] font-[Poppins] text-[11px]">Present Employees</p>
            </div>
            <div className="bg-[#f6f9fe] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <h1 className="font-[600] text-[24px]">02</h1>
              <p className="font-[400] font-[Poppins] text-[11px]">Absent Employees</p>
            </div>
            <div className="bg-[#f6f9fe] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <h1 className="font-[600] text-[24px]">03</h1>
              <p className="font-[400] font-[Poppins] text-[11px]">On Leave</p>
            </div>
            <div className="bg-[#f6f9fe] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <h1 className="font-[600] text-[24px]">24</h1>
              <p className="font-[400] font-[Poppins] text-[11px]">Active Employees</p>
            </div>
            <div className="flex flex-col gap-[4px] font-[Poppins] justify-center items-center w-full">
              <SelectBox
                className="border bg-[#fff] border-gray-300 w-full border-solid font-[400] leading-[normal] text-[12px] text-left font-[Poppins]"
                placeholderClassName="text-black"
                isMulti={false}
                name="groupTen"
                options={chooseTeamsOptionsList}
                isSearchable={false}
                placeholder="All Teams"
                shape="round"
                size="xs"
              />
              <SelectBox
                className="border bg-[#fff] border-gray-300 w-full font-[Poppins] border-solid font-[400] leading-[normal] text-[12px] text-left tracking-[-0.11px] "
                placeholderClassName="text-black"
                isMulti={false}
                name="groupTen"
                options={chooseDateOptionsList}
                isSearchable={false}
                placeholder="Today- 22 May 2019"
                shape="round"
                size="xs"
              />
            </div>
          </div>
        </div>
        <div className="mt-[26px] gap-[6px] pt-[0] flex flex-col md:p-[16px]">
          {employesdata.map((item, index) => (
            <div className="bg-white p-[12px] flex  md:justify-between  items-center w-full">
              <div className="flex w-full items-center gap-[13px]">
                <img
                  src={item.image}
                  className="w-[47px] h-[47px] rounded-[50%]"
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="text-[16px] font-[600]">{item.name}</h1>
                  <p className="text-[11px] font-[400]">{item.designation}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-[50%] items-center md:w-full gap-[16px]">
                <FaPhoneAlt size={"20px"} />
                <FaEnvelope size={"20px"} />
              </div>
              <div className="md:w-full flex flex-col md:flex-row gap-[16px]">
                {item.timeIn && (
                  <div className="flex">
                    <GoArrowDownRight size={"20px"} color="#5956e9" />
                    <p className="text-[14px] font-[400] text-[#3cd856]">
                      {item.timeIn}
                    </p>
                  </div>
                )}
                {item.status && (
                  <div className="flex">
                    <p
                      className={`text-[14px] font-[400] ${
                        item.status === "Absent"
                          ? "text-[#3cd856]"
                          : "text-[#5956e9] font-[600]"
                      } `}
                    >
                      {item.status}
                    </p>
                  </div>
                )}
                {item.timeOut && (
                  <div className="flex">
                    <GoArrowUpRight size={"20px"} color="#5956e9" />
                    <p className="text-[14px] font-[400] text-[#3cd856]">
                      {item.timeOut}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceHome;
