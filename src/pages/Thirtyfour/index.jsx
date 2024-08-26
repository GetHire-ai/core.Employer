import React, { useEffect, useState } from "react";
import { Text } from "components";

import { SelectBox } from "components/SelectBox";
import HrBtn from "components/HrBtn/HrBtn";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import SalaryStatisticsChart from "./SalaryStatisticsChart";
import { Link } from "react-router-dom";
import TotalSalaryChart from "./TotalSalaryChart";
import { GetApi } from "Api/Api_Calling";

const lastMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dayOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ThirtyfourPage = () => {
  const [selectedOption, setSelectedOption] = useState("Sales");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const [malePercentage, setmalePercentage] = useState("");
  const [femalePercentage, setfemalePercentage] = useState("");
  const [newemployee, setnewemployee] = useState("");
  const [totalemplyee, settotalemplyee] = useState("");
  const [totalsalary, settotalsalary] = useState("");
  const [avgsalary, setavgsalary] = useState("");
  const [showModal, setShowModal] = useState(true);

  const [EmployeePerformances, setEmployeePerformances] = useState([]);
  const [Loading, setLoading] = useState(true);
  const GetEmployeePerformance = async () => {
    try {
      const Getjobdata = await GetApi(
        `api/CompanyRoutes/GetCompanyTeamDetails`
      );
      // console.log(Getjobdata?.data);
      setEmployeePerformances(Getjobdata?.data?.data);

      const totalEmployees = Getjobdata?.data?.data?.length || 0;
      const maleCount =
        Getjobdata?.data?.data?.filter(
          (employee) => employee?.studentId?.Gender === "Male"
        )?.length || 0;
      const femaleCount = totalEmployees - maleCount;
      const malePercentage =
        totalEmployees > 0 ? (maleCount / totalEmployees) * 100 : 0;
      const femalePercentage =
        totalEmployees > 0 ? (femaleCount / totalEmployees) * 100 : 0;
      setfemalePercentage(femalePercentage);
      setmalePercentage(malePercentage);

      const currentDate = new Date();
      const lastMonth = currentDate.getMonth(); // Index of last month (0-indexed)
      const lastMonthEmployees = Getjobdata?.data?.data?.filter((employee) => {
        const joiningDate = new Date(employee.joiningDate);
        return (
          joiningDate.getMonth() === lastMonth &&
          joiningDate.getFullYear() === currentDate.getFullYear()
        );
      });

      const totalSalary =
        Getjobdata?.data?.data?.reduce(
          (acc, employee) => acc + employee.salary,
          0
        ) || 0;

      const avgSalary = totalEmployees > 0 ? totalSalary / totalEmployees : 0;
      setnewemployee(lastMonthEmployees?.length || 0);
      settotalemplyee(totalEmployees);
      settotalsalary(totalSalary);
      setavgsalary(avgSalary);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    GetEmployeePerformance();
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-5 justify-start w-full">
            <div className="flex items-center justify-start md:ml-[0] ml-[13px] w-[93%] md:w-full">
              <HrBtn />
            </div>
            <div className="w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsMedium24"
              >
                Overview
              </Text>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[25px] w-full">
              <div className="sm:gap-5 gap-[25px] grid sm:grid-cols-2 grid-cols-1 justify-center min-h-[auto] w-full">
                <div className="bg-white flex flex-1 flex-col items-center justify-start p-[9px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[96%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start mt-1.5">
                        <Text
                          className=" text-[14px] font-[500] tracking-[-0.14px]"
                          size="txtPoppinsMedium14Bluegray90003"
                        >
                          New Employee
                        </Text>
                        <Text
                          className="mt-[3px] text-[22px] font-[600] text-black sm:text-lg md:text-xl tracking-[-0.22px]"
                          size="txtPoppinsSemiBold22"
                        >
                          {newemployee}
                        </Text>
                      </div>
                      <div className="bg-white w-[51px] h-[51px] relative">
                        <CircularProgressbar
                          value={28}
                          strokeWidth={10}
                          text="20%"
                          styles={buildStyles({
                            textColor: "#6F34F5",
                            pathColor: "#6F34F5",
                            trailColor: "#e2f1ff",
                            textSize: "18px",
                            pathTransitionDuration: 0.5,
                          })}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-teal-600 text-xs tracking-[-0.12px]"
                        size="txtPoppinsMedium12Teal600"
                      >
                        <span className="text-[#009871] font-[Poppins] text-left font-[12px]">
                          10%
                        </span>
                        <span className="text-[#9197b3] font-[Poppins] text-left font-[12px]">
                          Increase
                        </span>
                      </Text>
                      <Text
                        className="text-[#9197b3] text-[12px] tracking-[-0.12px]"
                        size="txtPoppinsMedium12Bluegray300"
                      >
                        Last Month
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex flex-1 flex-col items-center justify-start p-[9px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[96%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start mt-1.5">
                        <Text
                          className=" text-[14px] font-[500] tracking-[-0.14px]"
                          size="txtPoppinsMedium14Bluegray90003"
                        >
                          Total Employee
                        </Text>
                        <Text
                          className="mt-[3px] text-[22px] font-[600] text-black sm:text-lg md:text-xl tracking-[-0.22px]"
                          size="txtPoppinsSemiBold22"
                        >
                          {totalemplyee}
                        </Text>
                      </div>
                      <div className="bg-white w-[51px] h-[51px] relative">
                        <CircularProgressbar
                          value={28}
                          strokeWidth={10}
                          text="20%"
                          styles={buildStyles({
                            textColor: "#0080fc",
                            pathColor: "#0080fc",
                            trailColor: "#e2f1ff",
                            textSize: "12px",
                            pathTransitionDuration: 0.5,
                          })}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-teal-600 text-xs tracking-[-0.12px]"
                        size="txtPoppinsMedium12Teal600"
                      >
                        <span className="text-[#009871] font-[Poppins] text-left font-[12px]">
                          20%
                        </span>
                        <span className="text-[#9197b3] font-[Poppins] text-left font-[12px]">
                          Increase
                        </span>
                      </Text>
                      <Text
                        className="text-[#9197b3] text-[12px] tracking-[-0.12px]"
                        size="txtPoppinsMedium12Bluegray300"
                      >
                        Last Month
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex flex-1 flex-col items-center justify-start p-[9px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[96%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start mt-1.5">
                        <Text
                          className=" text-[14px] font-[500] tracking-[-0.14px]"
                          size="txtPoppinsMedium14Bluegray90003"
                        >
                          Total Employee salary
                        </Text>
                        <Text
                          className="mt-[3px] text-[22px] font-[600] text-black sm:text-lg md:text-xl tracking-[-0.22px]"
                          size="txtPoppinsSemiBold22"
                        >
                          {totalsalary}
                        </Text>
                      </div>
                      <div className="bg-white w-[51px] h-[51px] relative">
                        <CircularProgressbar
                          value={28}
                          strokeWidth={10}
                          text="20%"
                          styles={buildStyles({
                            textColor: "#009871",
                            pathColor: "#009871",
                            trailColor: "#e7f6f2",
                            textSize: "12px",
                            pathTransitionDuration: 0.5,
                          })}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-teal-600 text-xs tracking-[-0.12px]"
                        size="txtPoppinsMedium12Teal600"
                      >
                        <span className="text-[#009871] font-[Poppins] text-left font-[12px]">
                          20%{" "}
                        </span>
                        <span className="text-[#9197b3] font-[Poppins] text-left font-[12px]">
                          Increase
                        </span>
                      </Text>
                      <Text
                        className="text-[#9197b3] text-[12px] tracking-[-0.12px]"
                        size="txtPoppinsMedium12Bluegray300"
                      >
                        Last Month
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex flex-1 flex-col items-center justify-start p-[9px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-[14px] items-center justify-start w-[96%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start mt-1.5">
                        <Text
                          className=" text-[14px] font-[500] tracking-[-0.14px]"
                          size="txtPoppinsMedium14Bluegray90003"
                        >
                          Average Salary
                        </Text>
                        <Text
                          className="mt-[3px] text-[22px] font-[600] text-black sm:text-lg md:text-xl tracking-[-0.22px]"
                          size="txtPoppinsSemiBold22"
                        >
                          {avgsalary}
                        </Text>
                      </div>
                      <div className="bg-white w-[51px] h-[51px] relative">
                        <CircularProgressbar
                          value={28}
                          strokeWidth={10}
                          text="20%"
                          styles={buildStyles({
                            textColor: "#ff8600",
                            pathColor: "#ff8600",
                            trailColor: "#fff4e4",
                            textSize: "12px",
                            pathTransitionDuration: 0.5,
                          })}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-end justify-between w-full">
                      <Text
                        className="text-teal-600 text-xs tracking-[-0.12px]"
                        size="txtPoppinsMedium12Teal600"
                      >
                        <span className="text-[#009871] font-[Poppins] text-left font-[12px]">
                          20%
                        </span>
                        <span className="text-[#9197b3] font-[Poppins] text-left font-[12px]">
                          Decrease
                        </span>
                      </Text>
                      <Text
                        className="text-[#9197b3] text-[12px] tracking-[-0.12px]"
                        size="txtPoppinsMedium12Bluegray300"
                      >
                        Last Month
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex md:flex-1 flex-col gap-3.5 items-start justify-start md:mt-0 mt-[51px] p-3.5 rounded-[10px] w-full">
                <div className="flex  items-start justify-between mt-1 w-full">
                  <Text
                    className="mt-0.5 font-[Poppins] text-[600] text-base text-black tracking-[-0.16px]"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    Salary Statistics
                  </Text>
                  <SelectBox
                    className="border border-gray-300 border-solid font-medium leading-[normal] rounded text-[11px] text-left tracking-[-0.11px] "
                    placeholderClassName="text-black"
                    isMulti={false}
                    name="groupSeventyThree"
                    options={lastMonthOptionsList}
                    isSearchable={false}
                    placeholder="Last Month"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="w-full p-[15px] h-[200px]">
                  <SalaryStatisticsChart />
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-1 flex items-center flex-col justify-center  font-[poppins] gap-[25px]">
              <div className="bg-white flex flex-col items-center justify-center p-2.5 rounded-[16px] w-full col-start-1 col-end-3">
                <div className="flex w-full gap-4 items-center flex-col md:flex-row p-[14px] md:justify-between">
                  <div>
                    <Text
                      className=" text-[16px] font-[600] text-black "
                      size="txtPoppinsSemiBold16Black900"
                    >
                      Total Salary by Unit
                    </Text>
                  </div>
                  <div className="flex gap-[20px] justif  y-center font-[500] border-b-2 text-[14px] font-[Poppins]">
                    <Link
                      className={`${
                        selectedOption === "Sales"
                          ? " border-[#5956e9] text-[#5956e9] border-b-[3px]"
                          : "text-[#8e8e8e] border-none"
                      }`}
                      to="#"
                      onClick={() => handleOptionClick("Sales")}
                    >
                      Sales
                    </Link>
                    <Link
                      className={`${
                        selectedOption === "Marketing"
                          ? " border-[#5956e9] text-[#5956e9] border-b-[3px]"
                          : "text-[#8e8e8e] border-none"
                      }`}
                      to="#"
                      onClick={() => handleOptionClick("Marketing")}
                    >
                      Marketing
                    </Link>
                  </div>

                  <SelectBox
                    className="border border-gray-300 border-solid  font-[500] leading-[normal] rounded text-[11px] text-left tracking-[-0.11px] w-24 md:w-44"
                    placeholderClassName="text-black"
                    isMulti={false}
                    name="groupFiftyNine"
                    options={dayOptionsList}
                    isSearchable={false}
                    placeholder="Day"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
                {/* chart  */}
                <div className="w-full h-[250px] mt-[55px]">
                  <TotalSalaryChart />
                </div>
              </div>
              <div className="bg-white flex flex-col gap-7 justify-start p-3.5 rounded-[16px] w-[325px] col-start-3 col-end-6">
                <Text
                  className="text-[16px] font-[600] text-black tracking-[-0.16px]"
                  size="txtPoppinsSemiBold16Black900"
                >
                  Salary Statistics
                </Text>
                <div className="h-[300px] mb-[9px] mx-auto relative w-[94%]">
                  <div className="absolute md:h-[196px] h-[201px] inset-x-[0] mx-auto top-[0] w-full">
                    <div className="absolute bg-[#1177ff] flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto p-[71px] md:px-10 sm:px-5 rounded-[50%] w-[194px]">
                      <Text
                        className="text-[24px] text-white font-[600]"
                        size="txtPoppinsSemiBold24"
                      >
                        55
                      </Text>
                      <Text
                        className="text-white text-[12px] tracking-[-0.12px]"
                        size="txtPoppinsRegular12"
                      >
                        Design
                      </Text>
                    </div>
                    <div className="absolute bg-[#0bc5d1] flex flex-col h-[139px] items-center justify-start p-[29px] sm:px-5 right-[0] rounded-[69px] top-[0] w-[139px]">
                      <Text
                        className="mt-4 text-[24px] md:text-[22px] text-white font-[600] sm:text-xl tracking-[-0.24px]"
                        size="txtPoppinsSemiBold24"
                      >
                        25
                      </Text>
                      <Text
                        className="mb-3.5 text-white  text-[12px] font-[400] tracking-[-0.12px]"
                        size="txtPoppinsRegular12"
                      >
                        Development
                      </Text>
                    </div>
                    <div className="absolute bg-[#15df8d] bottom-[0] flex flex-col h-[107px] items-center justify-start p-[29px] sm:px-5 right-[8%] rounded-[53px] w-[107px]">
                      <Text
                        className="md:text-[24px] text-white font-[600] "
                        size="txtPoppinsSemiBold24"
                      >
                        20
                      </Text>
                      <Text
                        className="text-white font-[400] text-[12px] tracking-[-0.12px]"
                        size="txtPoppinsRegular12"
                      >
                        SEO
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:grid lg:grid-cols-6 gap-[25px] ">
              <div className="bg-white mb-6 col-start-1 col-end-3 flex-col items-center justify-start p-3 rounded-[16px] ">
                <div className="flex flex-col items-start justify-start my-[5px] w-full">
                  <p className="ml-0.5 md:ml-[0] text-[16px] font-[600] text-black">
                    Employee Structure
                  </p>
                  <div className="w-[50%] md:w-[30%] my-[10px] mx-[25%] md:my-[20px] md:mx-[35%] flex justify-center items-center">
                    <CircularProgressbar
                      value={malePercentage}
                      strokeWidth={16}
                      text={malePercentage + "%"}
                      styles={buildStyles({
                        textColor: "#000",
                        pathColor: "#0bc5d1",
                        trailColor: "#daf6f8",
                        textSize: "12px",
                        pathTransitionDuration: 0.5,
                      })}
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] font-[500]">
                        <div className="bg-[#0bc5d1] w-[10px] h-[10px] rounded-full"></div>
                        Male
                      </p>
                      <p className="font-[500] text-[12px]">{`${malePercentage}%`}</p>
                    </div>
                    <ProgressBar
                      completed={malePercentage}
                      height="6px"
                      customLabel="."
                    />
                    <div className="flex justify-between mt-[10px] items-center">
                      <p className="text-[12px] font-[500]">
                        <div className="bg-[#daf6f8] w-[10px] h-[10px] rounded-full"></div>
                        Female
                      </p>
                      <p className="font-[500] text-[12px]">{`${femalePercentage}%`}</p>
                    </div>
                    <ProgressBar
                      completed={femalePercentage}
                      height="6px"
                      customLabel="."
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white flex col-start-3 col-end-7 flex-col gap-3.5 items-start justify-start p-3.5 rounded-[16px] w-full">
                <Text
                  className="text-[16px] font-[600] text-black tracking-[-0.16px]"
                  size="txtPoppinsSemiBold16Black900"
                >
                  Employee Performance
                </Text>
                <div className="overflow-x-auto w-full">
                  <table className="w-full rounded-[20px] ">
                    <thead className="h-[40px] text-[16px] text-white">
                      <tr className="bg-[#5956e9] rounded-[20px]">
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Name
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Designation
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Performance
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[12px] bg-[#fff] font-[500] h-[40px] text-center">
                      {EmployeePerformances.map((Employee, index) => (
                        <tr key={index}>
                          <td className="p-4 text-left flex items-center justify-start gap-[8px]">
                            <img
                              src={Employee?.studentId?.Image}
                              className="w-[28px] h-[28px]"
                              alt=""
                            />
                            {Employee?.studentId?.Name}
                          </td>
                          <td className="p-4 text-left ">{Employee?.role}</td>
                          <td className=" bg-[#3CD85642] text-[#3CD856] w-[85px] h-[24px] rounded-full flex items-center justify-center m-2 text-center lg:m-4 lg:ml-12 ">
                            {Employee?.performance}
                          </td>
                          <td className="p-4 text-left ">
                            {<img src="images/img_user.svg" alt="" />}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed top-0 left-[19vw] w-[100%] h-full flex items-center justify-start pl-80 z-50">
          <div className="absolute bg-gray-900 opacity-70 inset-0"></div>
          <div className="bg-white p-20 rounded-lg z-10">
            <h2 className="text-4xl text-center font-semibold mb-4">
              Coming Soon !
            </h2>
            <p className="text-gray-700">
              This feature is currently under development.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirtyfourPage;
