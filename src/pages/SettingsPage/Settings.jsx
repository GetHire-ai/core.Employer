import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="font-[Poppins] px-[14px]">
        <p className="text-[24px] font-[500]">Settings</p>
        <div className="grid lg:grid-cols-3 gap-[20px] py-[20px] px-[10px]">

          <Link
            to="/settingsCareer"
            className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg  hover:scale-105 duration-300 hover:text-white "
           >
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <img
                src="/images/career.png"
                className="w-[40px] h-[40px]"
                alt=""
              />
              <p className="text-[16px] font-[500]">Career page</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Company profile & logo
            </p>
          </Link>

          <div
            className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg hover:scale-105 duration-300 hover:text-white"
            onClick={() => navigate("/bulk-imports")}
          >
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <img
                src="/images/department.png"
                className="w-[40px] h-[40px]"
                alt=""
              />
              <p className="text-[16px] font-[500]">Bulk Imports</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Application Imports
            </p>
          </div>


          <div className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg hover:scale-105 duration-300 hover:text-white">
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <img
                src="/images/users.png"
                className="w-[40px] h-[40px]"
                alt=""
              />
              <p className="text-[16px] font-[500]">Users</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Internal company Departments
            </p>
          </div>


          <div className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg hover:scale-105 duration-300 hover:text-white">
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <div className="w-[40px] h-[40px]"></div>
              <p className="text-[16px] font-[500]">Resume Maneger</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Internal company Departments
            </p>
          </div>


          <div className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg hover:scale-105 duration-300 hover:text-white">
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <div className="w-[40px] h-[40px]"></div>
              <p className="text-[16px] font-[500]">On Boarding</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Internal company Departments
            </p>
          </div>


          <div className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg hover:scale-105 duration-300 hover:text-white">
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <div className="w-[40px] h-[40px]"></div>
              <p className="text-[16px] font-[500]">Interview Process</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Internal company Departments
            </p>
          </div>


          <div className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg hover:scale-105 duration-300 hover:text-white">
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <div className="w-[40px] h-[40px]"></div>
              <p className="text-[16px] font-[500]">Automated Follow Up</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Internal company Departments
            </p>
          </div>


          <div className="bg-white rounded-[12px] hover:bg-violet-300 shadow-lg hover:scale-105 duration-300 hover:text-white">
            <div className="border-b-[1px] border-[#e5e5e5] p-[13px] flex justify-center items-center flex-col cursor-pointer ">
              <div className="w-[40px] h-[40px]"></div>
              <p className="text-[16px] font-[500]">Automated Sourcing</p>
            </div>
            <p className="text-[13px] font-[400] text-center p-[13px]">
              Internal company Departments
            </p>
          </div>


        </div>
      </div>
    </>
  );
};

export default Settings;
