import React from "react";
import HrBtn from "components/HrBtn/HrBtn";

const AttendanceList = () => {
  const Employee = [
    {
      date: "22 Oct, 2020",
      checkin: "05:51 am",
      checkout: "12:01 pm",
      status: "Present",
      action: "images/img_user.svg",
    },
    {
      date: "22 Oct, 2020",
      checkin: "05:51 am",
      checkout: "12:01 pm",
      status: "Present",
      action: "images/img_user.svg",
    },
    {
      date: "22 Oct, 2020",
      checkin: "05:51 am",
      checkout: "12:01 pm",
      status: "Leave",
      action: "images/img_user.svg",
    },
    {
      date: "22 Oct, 2020",
      checkin: "05:51 am",
      checkout: "12:01 pm",
      status: "Present",
      action: "images/img_user.svg",
    },
  ];
  return (
    <div>
      <HrBtn />
      <div className="font-[Poppins] p-[10px] md:p-[30px]">
        <div className="bg-white flex flex-col p-[16px] gap-[23px] rounded-[16px]">
          <h1 className="font-[500] text-[24px] ">Attendance</h1>
          <div className="flex flex-col lg:flex-row gap-[10px] justify-center items-center w-full">
            <div className="bg-[#f6f9fe] gap-[9px] flex flex-row justify-start items-center p-[18px] rounded-[12px] w-full">
              <img
                src="/images/img_ellipse4062.png"
                className="w-[56px] h-[56px] rounded-[50%]"
                alt=""
              />
              <div className="flex flex-col gap-[7px]">
                <h1 className="font-[500] text-[18px]">Maria Smith</h1>
                <p className="font-[400] text-[12px]">Software Developer</p>
              </div>
            </div>
            <div className="bg-[#f6f9fe] gap-[9px] flex flex-row justify-start items-center p-[18px] rounded-[12px] w-full">
              <div className="w-[56px] bg-[#5956e9] h-[56px] rounded-[50%]"></div>
              <div className="flex flex-col gap-[7px]">
                <h1 className="font-[500] text-[18px]">Employee ID</h1>
                <p className="font-[400] text-[12px]">IM06587UT</p>
              </div>
            </div>
            <div className="bg-[#f6f9fe] gap-[9px] flex flex-row justify-start items-center p-[18px] rounded-[12px] w-full">
              <div className="w-[56px] bg-[#5956e9] h-[56px] rounded-[50%]"></div>
              <div className="flex flex-col gap-[7px]">
                <h1 className="font-[500] text-[18px]">Joining Date</h1>
                <p className="font-[400] text-[12px]">12 January 2015</p>
              </div>
            </div>
            <div className="bg-[#f6f9fe] gap-[9px] flex flex-row justify-start items-center p-[18px] rounded-[12px] w-full">
              <div className="w-[56px] bg-[#5956e9] h-[56px] rounded-[50%]"></div>
              <div className="flex flex-col gap-[7px]">
                <h1 className="font-[500] text-[18px]">Department</h1>
                <p className="font-[400] text-[12px]">Account</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-[14px] p-[16px] rounded-[16px]">
          <div className="flex flex-col lg:flex-row gap-[10px] justify-center items-center w-full">
            <div className=" gap-[9px] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <div className="w-[57px] bg-[#f1edfe] h-[57px] rounded-[50%]"></div>
              <h1 className="font-[600] text-[20px]">08:00</h1>
              <p className="font-[400] text-[12px]">Average Working Hour</p>
            </div>
            <div className=" gap-[9px] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <div className="w-[57px] bg-[#e2f1ff] h-[57px] rounded-[50%]"></div>

              <h1 className="font-[600] text-[20px]">10:30 AM</h1>
              <p className="font-[400] text-[12px]">Average in Time</p>
            </div>
            <div className=" gap-[9px] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <div className="w-[57px] bg-[#e7f6f2] h-[57px] rounded-[50%]"></div>

              <h1 className="font-[600] text-[20px]">07:30 PM</h1>
              <p className="font-[400] text-[12px]">Average Out Time</p>
            </div>
            <div className=" gap-[9px] flex flex-col justify-center items-center p-[18px] rounded-[12px] w-full">
              <div className="w-[57px] bg-[#fff4e4] h-[57px] rounded-[50%]"></div>

              <h1 className="font-[600] text-[20px]">01:00</h1>
              <p className="font-[400] text-[12px]">Average Break Time</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto w-full mt-[20px]">
          <table className="w-full rounded-[20px]">
            <thead className="bg-[#5956e9] text-left text-white h-[50px] text-[16px] font-[500] rounded-[12px]">
              <tr>
                <th className="text-left font-[500] font-[Poppins] p-2">Date</th>
                <th className="text-left font-[500] font-[Poppins] p-2">Check In</th>
                <th className="text-left font-[500] font-[Poppins] p-2">Check Out</th>
                <th className="text-left font-[500] font-[Poppins] p-2">Status</th>
                <th className="text-left font-[500] font-[Poppins] p-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-[16px] bg-[#fff] h-[50px]  font-[500] text-left ">
              {Employee.map((Employee, index) => (
                <tr key={index}>
                  <td className="p-4">{Employee.date}</td>
                  <td className="p-4">{Employee.checkin}</td>
                  <td className="p-4">{Employee.checkout}</td>
                  <td className="p-2 text-left">
                    <div
                      className={` flex justify-center items-center bg-opacity-[20%] rounded-[12px] w-[82px] h-[34px] ${
                        Employee.status === "Present"
                          ? "bg-[#3cd856] text-[#3cd856]"
                          : "bg-[#e21b1b] text-[#e21b1b]"
                      }`}
                    >
                      {Employee.status}
                    </div>
                  </td>
                  <td className="p-4 ">
                    <img src={Employee.action} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
