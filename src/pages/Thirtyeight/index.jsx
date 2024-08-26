import React, { useEffect, useState } from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Text } from "components";

import "react-circular-progressbar/dist/styles.css";
import { SelectBox } from "components/SelectBox";
import HrBtn from "components/HrBtn/HrBtn";
import { GetApi } from "Api/Api_Calling";

const chooseDateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];





const ThirtyeightPage = () => {

  const [GetAllleaves, setGetAllleaves] = useState([]);
  const [Allapprovedleaves, setAllapprovedleaves] = useState([]);
  const [allholiday, setholiday] = useState([]);
  const [Loading, setLoading] = useState(true);

  const GetallLeaverequest = async () => {
    try {
      const Getleavedata = await GetApi(`api/CompanyRoutes/getAllEmployeesLeaveRequests`);
      // console.log(Getleavedata?.data);
      setGetAllleaves(Getleavedata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }


  const Getallapprovedleaves = async () => {
    try {
      const Getapprovedleavedata = await GetApi(`api/CompanyRoutes/getAllApprovedLeaves`);
      console.log(Getapprovedleavedata?.data?.data)
      setAllapprovedleaves(Getapprovedleavedata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const Getallholiday = async () => {
    try {
      const Getallholidaydata = await GetApi(`api/CompanyRoutes/GetHolidaysByDate`);
      setholiday(Getallholidaydata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    GetallLeaverequest()
    Getallapprovedleaves()
    Getallholiday()
  }, []);


  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  }

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col gap-5 items-center justify-start md:mt-0 mt-2.5 w-full">
            <HrBtn />
            <div className="flex flex-col gap-[15px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row gap-4 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[20px] justify-start w-full">
                  <Text
                    className="text-[24px] text-black font-[500]"
                    size="txtPoppinsMedium24"
                  >
                    Leaves
                  </Text>
                  <div className="flex flex-col lg:grid lg:grid-cols-6 gap-[16px] w-full">
                    <div className="flex flex-col col-start-1 col-end-5 w-full gap-[16px]">
                      <div className=" gap-4 grid lg:grid-cols-2 xl:grid-cols-3 w-full">
                        <div className="bg-white flex flex-1 flex-col items-start justify-start sm:ml-[0] p-3.5 rounded-[16px] w-full">
                          <div className="flex flex-col gap-3 items-start justify-start mb-[9px] w-full">
                            <Text
                              className="text-[16px] text-black font-[500] tracking-[-0.16px]"
                              size="txtPoppinsMedium16"
                            >
                              Privilege Leave
                            </Text>
                            <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                              <div className="h-[93px] relative w-[93px]">
                                <div className="h-[93px] m-auto w-[93px]">
                                  <div className="!w-[93px] absolute h-[93px] inset-[0] justify-center m-auto overflow-visible">
                                    <CircularProgressbar
                                      className="!w-[93px] absolute h-[93px] inset-[0] justify-center m-auto overflow-visible"
                                      value={75}
                                      counterClockwise
                                      strokeWidth={16}
                                      styles={{
                                        trail: {
                                          strokeWidth: 16,
                                          stroke: "#f1edfe",
                                        },
                                        path: {
                                          strokeLinecap: "square",
                                          height: "100%",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                          stroke: "#0080fc",
                                        },
                                      }}
                                    ></CircularProgressbar>
                                  </div>
                                  <Text
                                    className="absolute inset-x-[0] mx-auto text-black text-[14px] font-[500] top-[32%] tracking-[-0.14px] w-max"
                                    size="txtPoppinsMedium14"
                                  >
                                    10
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bottom-[32%] inset-x-[0] mx-auto text-[8px] text-black font-[500] tracking-[-0.08px] w-max"
                                  size="txtPoppinsMedium8"
                                >
                                  Total
                                </Text>
                              </div>
                              <div className="flex flex-col items-center gap-[12px] justify-start mt-[25px] w-[36%]">
                                <div className="flex flex-row items-center justify-start gap-[5px] w-full">
                                  <div className="bg-[#6f34f5] h-[11px] mb-2.5 rounded-[5px] w-[11px]"></div>
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="h-2.5 text-[12px] text-black font-[600] tracking-[-0.08px]"
                                      size="txtPoppinsSemiBold8"
                                    >
                                      09
                                    </Text>
                                    <Text
                                      className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                                      size="txtPoppinsRegular8"
                                    >
                                      Available
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[5px] w-full">
                                  <div className="bg-[#6f34f5] h-[11px] mb-2.5 rounded-[5px] w-[11px]"></div>
                                  <div className="flex flex-col gap-[5px] items-start justify-start ">
                                    <Text
                                      className="h-2.5 text-[12px] text-black font-[600] tracking-[-0.08px]"
                                      size="txtPoppinsSemiBold8"
                                    >
                                      03
                                    </Text>
                                    <Text
                                      className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                                      size="txtPoppinsRegular8"
                                    >
                                      Consumed
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white flex flex-1 flex-col items-start justify-start sm:ml-[0] p-3.5 rounded-[16px] w-full">
                          <div className="flex flex-col gap-3 items-start justify-start mb-[9px] w-full">
                            <Text
                              className="text-[16px] text-black font-[500] tracking-[-0.16px]"
                              size="txtPoppinsMedium16"
                            >
                              Marriage Leave
                            </Text>
                            <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                              <div className="h-[93px] relative w-[93px]">
                                <div className="h-[93px] m-auto w-[93px]">
                                  <div className="!w-[93px] absolute h-[93px] inset-[0] justify-center m-auto overflow-visible">
                                    <CircularProgressbar
                                      className="!w-[93px] absolute h-[93px] inset-[0] justify-center m-auto overflow-visible"
                                      value={75}
                                      counterClockwise
                                      strokeWidth={16}
                                      styles={{
                                        trail: {
                                          strokeWidth: 16,
                                          stroke: "#f1edfe",
                                        },
                                        path: {
                                          strokeLinecap: "square",
                                          height: "100%",
                                          transformOrigin: "center",
                                          transform: "rotate(161deg)",
                                          stroke: "#0080fc",
                                        },
                                      }}
                                    ></CircularProgressbar>
                                  </div>

                                  <Text
                                    className="absolute inset-x-[0] mx-auto text-black text-[14px] font-[500] top-[32%] tracking-[-0.14px] w-max"
                                    size="txtPoppinsMedium14"
                                  >
                                    10
                                  </Text>
                                </div>
                                <Text
                                  className="absolute bottom-[32%] inset-x-[0] mx-auto text-[8px] text-black font-[500] tracking-[-0.08px] w-max"
                                  size="txtPoppinsMedium8"
                                >
                                  Total
                                </Text>
                              </div>
                              <div className="flex flex-col items-center gap-[12px] justify-start mt-[25px] w-[36%]">
                                <div className="flex flex-row items-center justify-start gap-[5px] w-full">
                                  <div className="bg-[#6f34f5] h-[11px] mb-2.5 rounded-[5px] w-[11px]"></div>
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="h-2.5 text-[12px] text-black font-[600] tracking-[-0.08px]"
                                      size="txtPoppinsSemiBold8"
                                    >
                                      09
                                    </Text>
                                    <Text
                                      className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                                      size="txtPoppinsRegular8"
                                    >
                                      Available
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[5px] w-full">
                                  <div className="bg-[#6f34f5] h-[11px] mb-2.5 rounded-[5px] w-[11px]"></div>
                                  <div className="flex flex-col gap-[5px] items-start justify-start ">
                                    <Text
                                      className="h-2.5 text-[12px] text-black font-[600] tracking-[-0.08px]"
                                      size="txtPoppinsSemiBold8"
                                    >
                                      03
                                    </Text>
                                    <Text
                                      className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                                      size="txtPoppinsRegular8"
                                    >
                                      Consumed
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white flex flex-1 flex-col items-start justify-start sm:ml-[0] p-3.5 rounded-[16px] w-full">
                          <div className="flex flex-col gap-3 items-start justify-start mb-[9px] w-full">
                            <Text
                              className="text-[16px] text-black font-[500] tracking-[-0.16px]"
                              size="txtPoppinsMedium16"
                            >
                              Leave Without Pay
                            </Text>
                            <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                              <div className="h-[93px] relative w-[93px]">
                                <div className="!w-[93px] absolute h-[93px] inset-[0] justify-center m-auto overflow-visible">
                                  <CircularProgressbar
                                    className="!w-[93px] absolute h-[93px] inset-[0] justify-center m-auto overflow-visible"
                                    value={75}
                                    counterClockwise
                                    strokeWidth={16}
                                    styles={{
                                      trail: {
                                        strokeWidth: 16,
                                        stroke: "#f1edfe",
                                      },
                                      path: {
                                        strokeLinecap: "square",
                                        height: "100%",
                                        transformOrigin: "center",
                                        transform: "rotate(161deg)",
                                        stroke: "#0080fc",
                                      },
                                    }}

                                  ></CircularProgressbar>
                                </div>

                                <Text
                                  className="absolute h-max inset-[0] justify-center m-auto text-black text-[14px] font-[500] tracking-[-0.14px] w-max"
                                  size="txtPoppinsMedium14"
                                >
                                  Infinite
                                </Text>
                              </div>
                              <div className="flex flex-col items-center gap-[12px] justify-start mt-[25px] w-[36%]">
                                <div className="flex flex-row items-center justify-start gap-[5px] w-full">
                                  <div className="bg-[#6f34f5] h-[11px] mb-2.5 rounded-[5px] w-[11px]"></div>
                                  <div className="flex flex-col gap-[5px] items-start justify-start">
                                    <Text
                                      className="h-2.5 text-[12px] text-black font-[600] tracking-[-0.08px]"
                                      size="txtPoppinsSemiBold8"
                                    >
                                      Infinite
                                    </Text>
                                    <Text
                                      className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                                      size="txtPoppinsRegular8"
                                    >
                                      Available
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[5px] w-full">
                                  <div className="bg-[#6f34f5] h-[11px] mb-2.5 rounded-[5px] w-[11px]"></div>
                                  <div className="flex flex-col gap-[5px] items-start justify-start ">
                                    <Text
                                      className="h-2.5 text-[12px] text-black font-[600] tracking-[-0.08px]"
                                      size="txtPoppinsSemiBold8"
                                    >
                                      03
                                    </Text>
                                    <Text
                                      className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                                      size="txtPoppinsRegular8"
                                    >
                                      Consumed
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:grid lg:grid-cols-6 gap-[16px] items-start justify-between w-full">
                        <div className="bg-white mb-[16px] flex col-span-2 flex-col items-center justify-start p-3.5 rounded-[16px] w-full">
                          <div className="flex flex-col items-start justify-start mb-[72px] w-full">
                            <Text
                              className="text-[16px] text-black font-[500] tracking-[-0.16px]"
                              size="txtPoppinsMedium16"
                            >
                              Applied Leaves
                            </Text>
                            {GetAllleaves.map((leave, index) =>
                              <div key={index} className="flex flex-row items-center justify-between mt-[18px] w-full">
                                <div>
                                  <Text
                                    className="  text-black text-[12px] font-[600]  tracking-[-0.12px]"
                                    size="txtPoppinsSemiBold12"
                                  >
                                    {formatDate(leave?.leaveRequest?.startDate)}
                                  </Text>
                                  <Text
                                    className=" inset-x-[0] mx-auto text-[9px] font-[400] text-black tracking-[-0.09px] w-max"
                                    size="txtPoppinsRegular9"
                                  >
                                    {leave?.leaveRequest?.leaveType}
                                  </Text>
                                </div>
                                {leave?.leaveRequest?.status == "Rejected" &&
                                  <Button
                                    className="cursor-pointer bg-[#e21b1b] bg-opacity-[26%] leading-[normal] min-w-[57px] my-0.5 rounded-[33px] text-[9px] text-center font-[500] text-[#e21b1b] tracking-[-0.09px]"
                                    color="orange_50"
                                    size="xs"
                                  >
                                    {leave?.leaveRequest?.status}
                                  </Button>
                                }
                                {leave?.leaveRequest?.status == "Approved" &&
                                  <Button
                                    className="cursor-pointer bg-[#e7f6f2] leading-[normal] min-w-[57px] my-0.5 rounded-[33px] text-[9px] text-center font-[500] text-[#3cd856] tracking-[-0.09px]"
                                    color="orange_50"
                                    size="xs"
                                  >
                                    {leave?.leaveRequest?.status}
                                  </Button>
                                }
                                {leave?.leaveRequest?.status == "Pending" &&
                                  <Button
                                    className="cursor-pointer bg-[#fff4e4] leading-[normal] min-w-[57px] my-0.5 rounded-[33px] text-[9px] text-center font-[500] text-[#ff8600] tracking-[-0.09px]"
                                    color="orange_50"
                                    size="xs"
                                  >
                                    {leave?.leaveRequest?.status}
                                  </Button>
                                }
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="bg-white flex col-span-4 flex-col items-center justify-start p-[13px] rounded-[16px] w-full">
                          <div className="flex flex-col gap-3.5 items-start justify-start mb-[81px] w-full">
                            <div className="flex flex-row gap-[30px] items-start justify-start w-full">
                              <Text
                                className="text-[16px] font-[500] text-black tracking-[-0.16px]"
                                size="txtPoppinsMedium16"
                              >
                                Leave Calendar
                              </Text>
                              <SelectBox
                                className="border bg-[#fff] border-gray-300 border-solid font-[500] leading-[normal] text-[11px] text-left tracking-[-0.11px] "
                                placeholderClassName="text-black"
                                isMulti={false}
                                name="groupTen"
                                options={chooseDateOptionsList}
                                isSearchable={false}
                                placeholder="Choose Date"
                                shape="round"
                                size="xs"
                              />
                            </div>
                            <div className="flex flex-col gap-2.5 items-center w-full">
                              {
                                Allapprovedleaves?.map((leave, index) =>
                                  <div key={index} className="bg-[#f5f8fe] flex flex-1 flex-col items-center justify-end p-[5px] rounded-[21px] w-full">
                                    <div className="flex flex-row  items-center justify-between w-full">
                                      <div className="flex flex-row items-start gap-[8px] justify-start w-full">
                                        <Img
                                          className="h-[31px] rounded-[50%] w-[31px]"
                                          src={leave?.image}
                                          alt="ellipse4030"
                                        />
                                        <div className="flex flex-col items-start justify-start ml-2 sm:ml-[0]">
                                          <Text
                                            className="text-[11px] text-black font-[600] tracking-[-0.11px]"
                                            size="txtPoppinsSemiBold11"
                                          >
                                            {leave?.employeeName}
                                          </Text>
                                          <Text
                                            className="text-[11px] text-[#333333] font-[400] tracking-[-0.11px]"
                                            size="txtPoppinsRegular11Bluegray900"
                                          >
                                            {leave?.role}
                                          </Text>
                                        </div>
                                      </div>
                                      <Button
                                        className="cursor-pointer font-[500] bg-[#f1edfe] text-[#5956e9]  leading-[normal] min-w-[102px]  rounded-[12px] text-[10px] text-center tracking-[-0.10px]"
                                        color="deep_purple_50"
                                        size="xs"
                                      >
                                        {formatDate(leave?.approvedLeaveRequest?.startDate)} to {formatDate(leave?.approvedLeaveRequest?.endDate)}
                                      </Button>
                                    </div>
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white col-start-5 col-end-7  flex md:flex-1 flex-col items-start justify-start mb-2.5 md:mt-0 mt-14 p-3.5 rounded-[16px]">
                      <div className="flex flex-col gap-[27px] items-start justify-start mb-[34px] w-[59%] md:w-full">
                        <Text
                          className="text-[16px] text-black font-[500] tracking-[-0.16px]"
                          size="txtPoppinsMedium16"
                        >
                          Holidays
                        </Text>
                        <div className="flex flex-col items-center justify-between gap-[16px] w-full">
                          {
                            allholiday?.map((holiday, index) =>
                              <div key={index} className="flex flex-row gap-[15px] items-center justify-start w-full">
                                <div className="bg-[#f1edfe] flex flex-col h-[38px] items-center justify-start p-0.5 rounded-md w-[38px]">
                                  <Text
                                    className="text-[11px] text-black font-[500] text-center tracking-[-0.11px]"
                                    size="txtPoppinsMedium11"
                                  >
                                    <>
                                      {formatDate(holiday?.date)}
                                    </>
                                  </Text>
                                </div>
                                <div className="flex flex-col">
                                  <Text
                                    className="text-[11px] text-black font-[600] tracking-[-0.11px]"
                                    size="txtPoppinsSemiBold11"
                                  >
                                    {holiday?.name}
                                  </Text>
                                  <Text
                                    className="text-[11px] text-black font-[400] tracking-[-0.11px]"
                                    size="txtPoppinsRegular11Black900"
                                  >
                                    {holiday?.day}
                                  </Text>
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirtyeightPage;
