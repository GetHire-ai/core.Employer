import React from "react";

import { Line, Text } from "components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HrBtn from "components/HrBtn/HrBtn";
import PayrollAmountChart from "./PayrollAmountChart";
import ProgressBar from "@ramonak/react-progress-bar";

const ThirtyninePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col justify-start md:mt-0 mt-2.5 w-full">
            <HrBtn />

            <div className="flex p-2 flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="text-[24px] font-[500] text-black"
                size="txtPoppinsMedium24"
              >
                Overview
              </Text>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-8 gap-[20px]  w-full">
              {/* left section start */}
              <div className="flex flex-col col-span-6 gap-[22px] items-center justify-start w-full">
                {/* upper section start */}
                <div className=" flex flex-col lg:grid lg:grid-cols-12 gap-[20px] w-full">
                  <div className="bg-white col-span-4 flex flex-col items-center justify-start p-[25px] sm:px-5 rounded-[14px] w-full">
                    <div className="flex flex-col items-start justify-start my-[21px] w-full">
                      <div className="flex flex-row gap-[7px] items-center justify-start w-[94%] md:w-full">
                        <div className="bg-[#f6f9fe] h-[48px] mb-[5px] mt-[13px] rounded-[50%] w-[48px]"></div>
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] text-black font-[400] text-[12px]"
                            size="txtPoppinsRegular12"
                          >
                            Available Balance
                          </Text>
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-black-900"
                            size="txtPoppinsSemiBold28"
                          >
                            <span className="text-black font-[Poppins] text-left font-[600] text-[28px]">
                              516,437.
                            </span>
                            <span className="text-black font-[Poppins] text-left text-[18px] font-[400]">
                              00 AED
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-10 md:h-[42px] border border-[#5956e9] rounded-[6px] border-solid  justify-end md:ml-[0] ml-[3px] mt-0.5 relative w-full">
                        <Text
                          className="mb-2.5 mt-auto mx-auto text-[#5956e9] text-[12px] font-[500]"
                          size="txtPoppinsMedium12IndigoA200"
                        >
                          View Transaction History
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white col-span-8 p-[11px] rounded-[16px] w-full">
                    <div className="flex flex-row sm:gap-5 items-start justify-between w-full">
                      <div className="flex gap-[9px]">
                        <div className="bg-[#d9d9d9] h-[28px] rounded-[50%] w-[28px]"></div>
                        <Text
                          className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 text-[16px] text-black font-[600] tracking-[-0.16px]"
                          size="txtPoppinsSemiBold16"
                        >
                          Payroll Amount
                        </Text>
                      </div>
                      <div className="flex">
                        <IoIosArrowBack />
                        <IoIosArrowForward />
                      </div>
                    </div>
                    {/* chart */}
                    <div className="w-full h-[190px]">
                      <PayrollAmountChart />
                    </div>
                  </div>
                </div>
                {/* upper section end  */}

                {/* middel section start */}
                <div className="flex flex-col lg:grid gap-[20px] lg:grid-cols-4 justify-center w-full">
                  <div className="bg-white flex flex-1 flex-col gap-2.5 items-start justify-center p-[17px] rounded-[14px] w-full">
                    <Text
                      className="text-black text-[14px] font-[400]"
                      size="txtPoppinsRegular14"
                    >
                      Total Employees
                    </Text>
                    <div className="md:h-[42px] h-[58px] w-full">
                      <Text
                        className=" text-[28px] text-black font-[600]"
                        size="txtPoppinsSemiBold28"
                      >
                        332
                      </Text>
                    </div>
                    <div className="flex w-full flex-col justify-center items-center">
                      <div className="w-full flex justify-end">
                        <Text
                          className=" text-[16px] text-black"
                          size="txtPoppinsMedium16"
                        >
                          100%
                        </Text>
                      </div>
                      <div className="w-full ">
                        <ProgressBar
                          completed={100}
                          bgColor="#5956e9"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white flex flex-1 flex-col gap-2.5 items-start justify-center p-[17px] rounded-[14px] w-full">
                    <Text
                      className="text-black text-[14px] font-[400]"
                      size="txtPoppinsRegular14"
                    >
                      c3Pay Cardholders
                    </Text>
                    <div className="md:h-[42px] h-[58px] w-full">
                      <Text
                        className=" text-[28px] text-black font-[600]"
                        size="txtPoppinsSemiBold28"
                      >
                        261
                      </Text>
                    </div>
                    <div className="flex w-full flex-col justify-center items-center">
                      <div className="w-full flex justify-end">
                        <Text
                          className=" text-[16px] text-black"
                          size="txtPoppinsMedium16"
                        >
                          61%
                        </Text>
                      </div>
                      <div className="w-full ">
                        <ProgressBar
                          completed={61}
                          bgColor="#5956e9"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white flex flex-1 flex-col gap-2.5 items-start justify-center p-[17px] rounded-[14px] w-full">
                    <Text
                      className="text-black text-[14px] font-[400]"
                      size="txtPoppinsRegular14"
                    >
                      c3Pay App Users
                    </Text>
                    <div className="md:h-[42px] h-[58px] w-full">
                      <Text
                        className=" text-[28px] text-black font-[600]"
                        size="txtPoppinsSemiBold28"
                      >
                        102
                      </Text>
                    </div>
                    <div className="flex w-full flex-col justify-center items-center">
                      <div className="w-full flex justify-end">
                        <Text
                          className=" text-[16px] text-black"
                          size="txtPoppinsMedium16"
                        >
                          29%
                        </Text>
                      </div>
                      <div className="w-full ">
                        <ProgressBar
                          completed={29}
                          bgColor="#3cd856"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white flex flex-1 flex-col gap-2.5 items-start justify-center p-[17px] rounded-[14px] w-full">
                    <Text
                      className="text-black text-[14px] font-[400]"
                      size="txtPoppinsRegular14"
                    >
                      Valid Emirates ID
                    </Text>
                    <div className="md:h-[42px] h-[58px] w-full">
                      <Text
                        className=" text-[28px] text-black font-[600]"
                        size="txtPoppinsSemiBold28"
                      >
                        331
                      </Text>
                    </div>
                    <div className="flex w-full flex-col justify-center items-center">
                      <div className="w-full flex justify-end">
                        <Text
                          className=" text-[16px] text-black"
                          size="txtPoppinsMedium16"
                        >
                          99%
                        </Text>
                      </div>
                      <div className="w-full ">
                        <ProgressBar
                          completed={99}
                          bgColor="#ff8600"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* middle section end */}
                {/* bottom section start */}
                <div className="lg:grid lg:grid-cols-2 gap-[20px] justify-center w-full">
                  <div className="bg-white flex flex-1 flex-col items-center justify-start p-[13px] rounded-[16px] w-full">
                    <div className="flex flex-col items-start justify-start my-[3px] w-full">
                      <div className="flex flex-row sm:gap-5 items-start justify-between w-full">
                        <div className="flex gap-[9px]">
                          <div className="bg-[#d9d9d9] h-[28px] rounded-[50%] w-[28px]"></div>
                          <Text
                            className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 text-[16px] text-black font-[600] tracking-[-0.16px]"
                            size="txtPoppinsSemiBold16"
                          >
                            Payroll Amount
                          </Text>
                        </div>
                        <div className="flex">
                          <IoIosArrowBack />
                          <IoIosArrowForward />
                        </div>
                      </div>
                      <div className="bg-[#f6f9fe] flex flex-row gap-6 items-center justify-between mt-5 p-2 rounded-lg w-[72%]">
                        <Text
                          className="ml-0.5 text-black text-[20px] font-[600] tracking-[-0.20px]"
                          size="txtPoppinsSemiBold20"
                        >
                          4 Cards
                        </Text>
                        <Text
                          className="text-[11px] w-[135px] text-black font-[400] tracking-[-0.11px] "
                          size="txtPoppinsRegular11Black900"
                        >
                          Order Placed 11 July 2020 Delivered : 17 July 2020{" "}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[27px] items-end justify-between mt-2 w-full">
                        <div className="bg-[#f6f9fe] flex flex-row gap-6 items-center justify-between mt-5 p-2 rounded-lg w-[72%]">
                          <Text
                            className="ml-0.5 text-black text-[20px] font-[600] tracking-[-0.20px]"
                            size="txtPoppinsSemiBold20"
                          >
                            31 Cards
                          </Text>
                          <Text
                            className="text-[11px] w-[135px] text-black font-[400] tracking-[-0.11px] "
                            size="txtPoppinsRegular11Black900"
                          >
                            Order Placed 11 July 2020 Delivered : 17 July 2020{" "}
                          </Text>
                        </div>
                        <div className="h-10 md:h-[54px] mt-3.5 border border-[#5956e9] flex items-center justify-center rounded-[6px] border-solid w-[21%]">
                          <Text
                            className="m-auto text-[#5956e9] text-[12px] font-[500] text-center"
                            size="txtPoppinsMedium12IndigoA200"
                          >
                            View All
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white flex flex-1 flex-col items-center justify-start p-[13px] rounded-[16px] w-full">
                    <div className="flex flex-col items-start justify-start my-[3px] w-full">
                      <div className="flex flex-row sm:gap-5 items-start justify-between w-full">
                        <div className="flex gap-[9px]">
                          <div className="bg-[#d9d9d9] h-[28px] rounded-[50%] w-[28px]"></div>
                          <Text
                            className="sm:ml-[0] ml-[9px] sm:mt-0 mt-1 text-[16px] text-black font-[600] tracking-[-0.16px]"
                            size="txtPoppinsSemiBold16"
                          >
                            Payroll History
                          </Text>
                        </div>
                        <div className="flex">
                          <IoIosArrowBack />
                          <IoIosArrowForward />
                        </div>
                      </div>
                      <div className="bg-[#f6f9fe] flex flex-row gap-6 items-center justify-between mt-5 p-2 rounded-lg w-[72%]">
                        <Text
                          className="ml-0.5 text-black font-[Poppins] w-[86px] text-[11px] font-[600] tracking-[-0.20px]"
                          size="txtPoppinsSemiBold20"
                        >
                          AED 540,000,00 WPS June 2020
                        </Text>
                        <Text
                          className="text-[11px] w-[135px] font-[Poppins] text-black font-[400] tracking-[-0.11px] "
                          size="txtPoppinsRegular11Black900"
                        >
                          Submitted:11 June 2020 Time:15:49
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[27px] items-end justify-between mt-2 w-full">
                        <div className="bg-[#f6f9fe] flex flex-row gap-6 items-center justify-between mt-5 p-2 rounded-lg w-[72%]">
                          <Text
                            className="ml-0.5 text-black font-[Poppins] w-[86px] text-[11px] font-[600] tracking-[-0.20px]"
                            size="txtPoppinsSemiBold20"
                          >
                            AED 284,000,00 WPS April 2020
                          </Text>
                          <Text
                            className="text-[11px] w-[135px] font-[Poppins] text-black font-[400] tracking-[-0.11px] "
                            size="txtPoppinsRegular11Black900"
                          >
                            Submitted:28 April 2020 Time:20:32
                          </Text>
                        </div>
                        <div className="h-10 md:h-[54px] mt-3.5 border border-[#5956e9] flex items-center justify-center rounded-[6px] border-solid w-[21%]">
                          <Text
                            className="m-auto text-[#5956e9] text-[12px] font-[500] text-center"
                            size="txtPoppinsMedium12IndigoA200"
                          >
                            View All
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* bottom section end */}
              </div>
              {/* right section start */}
              <div className="flex flex-col gap-5 col-span-2 items-center justify-start w-full">
                {/* upper section start */}
                <div className="bg-white flex flex-col items-center justify-start p-3 rounded-[14px] w-full">
                  <div className="flex flex-row items-start justify-between mb-0.5 w-[98%] md:w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-[11px] font-[400] text-[#5956e9]"
                        size="txtPoppinsRegular11IndigoA200"
                      >
                        WPS cut-off
                      </Text>
                      <Text
                        className="mt-[3px] text-black text-[12px] font-[500]"
                        size="txtPoppinsMedium12"
                      >
                        1:00 PM
                      </Text>
                      <Text
                        className="text-black text-[12px] font-[500]"
                        size="txtPoppinsMedium12"
                      >
                        (Sat-Thu)
                      </Text>
                    </div>
                    <Line className="bg-[#e5e5e5] h-[47px] mb-0.5 mt-2 w-px" />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-[11px] font-[400] text-[#5956e9]"
                        size="txtPoppinsRegular11IndigoA200"
                      >
                        Non WPS cut-off
                      </Text>
                      <Text
                        className="mt-[3px] text-black text-[12px] font-[500]"
                        size="txtPoppinsMedium12"
                      >
                        3:00 PM
                      </Text>
                      <Text
                        className="text-black text-[12px] font-[500]"
                        size="txtPoppinsMedium12"
                      >
                        (Sat-Thu)
                      </Text>
                    </div>
                  </div>
                </div>
                {/* upper section end */}
                {/* bottom section start */}
                <div className="bg-white flex flex-col items-center justify-start p-3.5 rounded-[14px] w-full">
                  <div className="flex flex-col items-start justify-start mb-[104px] w-[99%] md:w-full">
                    <div className="flex flex-row gap-1.5 items-end justify-start w-full">
                      <div className="bg-[#d9d9d9] h-[29px] rounded-[14px] w-[29px]"></div>
                      <Text
                        className="mb-0.5 mt-[5px] text-black font-[600] text-[14px] tracking-[-0.14px]"
                        size="txtPoppinsSemiBold14"
                      >
                        % of Employess Paid
                      </Text>
                    </div>
                    <div className="mt-[25px] w-full">
                      <div className="flex justify-between items-center w-full">
                        <Text
                          className="mb-[-2.17px] mt-0.5 text-black-900 text-lg tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18"
                        >
                          July
                        </Text>
                        <Text
                          className="mb-[undefinedpx] ml-auto text-lg text-red-700 tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18Red700"
                        >
                          32%
                        </Text>
                      </div>
                      <div className="w-full ">
                        <ProgressBar
                          completed={32}
                          bgColor="#e21b1b"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                      <div className="flex justify-center mt-[6px] items-center w-full">
                        <Text
                          className=" text-[11px] text-[#5956e9] font-[400] tracking-[-0.11px]"
                          size="txtPoppinsRegular11IndigoA200"
                        >
                          (101/332) Employees
                        </Text>
                      </div>
                    </div>
                    <div className="mt-[25px] w-full">
                      <div className="flex justify-between items-center w-full">
                        <Text
                          className="mb-[-2.17px] mt-0.5 text-black-900 text-lg tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18"
                        >
                          June
                        </Text>
                        <Text
                          className="mb-[undefinedpx] ml-auto text-lg text-[#3CD856] tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18Red700"
                        >
                          91%
                        </Text>
                      </div>
                      <div className="w-full  ">
                        <ProgressBar
                          completed={91}
                          bgColor="#3CD856"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                      <div className="flex mt-[6px] justify-center items-center w-full">
                        <Text
                          className=" text-[11px] text-[#5956e9] font-[400] tracking-[-0.11px]"
                          size="txtPoppinsRegular11IndigoA200"
                        >
                          (288/332) Employees
                        </Text>
                      </div>
                    </div>
                    <div className="mt-[25px] w-full">
                      <div className="flex justify-between items-center w-full">
                        <Text
                          className="mb-[-2.17px] mt-0.5 text-black-900 text-lg tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18"
                        >
                          July
                        </Text>
                        <Text
                          className="mb-[undefinedpx] ml-auto text-lg text-red-700 tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18Red700"
                        >
                          32%
                        </Text>
                      </div>
                      <div className="w-full ">
                        <ProgressBar
                          completed={32}
                          bgColor="#e21b1b"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                      <div className="flex justify-center mt-[6px] items-center w-full">
                        <Text
                          className=" text-[11px] text-[#5956e9] font-[400] tracking-[-0.11px]"
                          size="txtPoppinsRegular11IndigoA200"
                        >
                          (101/332) Employees
                        </Text>
                      </div>
                    </div>
                    <div className="mt-[25px] w-full">
                      <div className="flex justify-between items-center w-full">
                        <Text
                          className="mb-[-2.17px] mt-0.5 text-black-900 text-lg tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18"
                        >
                          June
                        </Text>
                        <Text
                          className="mb-[undefinedpx] ml-auto text-lg text-[#3CD856] tracking-[-0.18px] z-[1]"
                          size="txtPoppinsMedium18Red700"
                        >
                          91%
                        </Text>
                      </div>
                      <div className="w-full ">
                        <ProgressBar
                          completed={91}
                          bgColor="#3CD856"
                          color="#e6f3ff"
                          height="9px"
                          customLabel="."
                        />
                      </div>
                      <div className="flex justify-center mt-[6px] items-center w-full">
                        <Text
                          className=" text-[11px] text-[#5956e9] font-[400] tracking-[-0.11px]"
                          size="txtPoppinsRegular11IndigoA200"
                        >
                          (288/332) Employees
                        </Text>
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

export default ThirtyninePage;
