import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Text } from "components";
// import Sidebar1 from "components/Sidebar1";

import "react-circular-progressbar/dist/styles.css";
import { SelectBox } from "components/SelectBox";
import HrBtn from "components/HrBtn/HrBtn";
import AttandanceOverviewchart from "./AttandanceOverviewchart";

const monthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ThirtyfivePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex flex-col  gap-1.5 items-start justify-between mx-auto md:px-5 w-full">
          <HrBtn />

          <div className="flex flex-1  flex-col justify-start md:mt-0 mt-2.5 w-full">
            {/* <div className="flex flex-col gap-[17px] items-center justify-start ml-6 md:ml-[0] mt-[5px] w-[93%] md:w-full"> */}

            <div className=" flex mb-[10px] flex-col lg:grid lg:grid-cols-5  gap-[20px] w-full">
              <div className="bg-white flex flex-col items-start justify-start sm:ml-[0] p-[15px] rounded-[12px] w-full">
                <div className="bg-[#f1edfe] h-[52px] rounded-[50%] w-[52px]"></div>
                <Text
                  className="mt-[13px] text-black text-[14px] font-[500] tracking-[-0.14px]"
                  size="txtPoppinsMedium14Black900"
                >
                  Total Employees
                </Text>
                <Text
                  className="my-0.5 text-black text-[20px] font-[500] tracking-[-0.20px]"
                  size="txtPoppinsMedium20"
                >
                  <span className="font-[700]">200</span>/200
                </Text>
              </div>
              <div className="bg-white flex flex-col items-start justify-start sm:ml-[0] p-[15px] rounded-[12px] w-full">
                <div className="bg-[#e2f1ff] h-[52px] rounded-[50%] w-[52px]"></div>
                <Text
                  className="mt-[11px] text-black text-[14px] font-[500] tracking-[-0.14px]"
                  size="txtPoppinsMedium14Black900"
                >
                  On Leave
                </Text>
                <Text
                  className="mt-1 text-black-900 text-[20px] font-[500] tracking-[-0.20px]"
                  size="txtPoppinsMedium20"
                >
                  <span className="font-[700]">200</span>/200
                </Text>
              </div>
              <div className="bg-white flex flex-col items-start justify-start sm:ml-[0] p-[15px] rounded-[12px] w-full">
                <div className="bg-[#e7f6f2] h-[52px] rounded-[50%] w-[52px]"></div>
                <Text
                  className="mt-[11px] text-black-900 text-[14px] font-[500] tracking-[-0.14px]"
                  size="txtPoppinsMedium14Black900"
                >
                  On Leave
                </Text>
                <Text
                  className="mt-1 text-black-900 text-[20px] font-[500] tracking-[-0.20px]"
                  size="txtPoppinsMedium20"
                >
                  <span className="font-[700]">200</span>/200
                </Text>
              </div>
              <div className="bg-white flex flex-col items-start justify-end sm:ml-[0] p-[15px] rounded-[12px] w-full">
                <div className="bg-[#fff4e4] h-[52px] rounded-[50%] w-[52px]"></div>
                <Text
                  className="mt-[11px] text-black-900 text-[14px] font-[500] tracking-[-0.14px]"
                  size="txtPoppinsMedium14Black900"
                >
                  On Leave
                </Text>
                <Text
                  className="mt-1 text-black-900 text-[20px] font-[500] tracking-[-0.20px]"
                  size="txtPoppinsMedium20"
                >
                  <span className="font-[700]">200</span>/200
                </Text>
              </div>
              <div className="bg-white flex md:flex-1  col-end-6 flex-col items-center justify-start p-3.5 rounded-[12px] w-full">
                <div className="flex flex-row gap-[17px] items-start justify-between my-[15px] w-[97%] md:w-full">
                  <div className="h-[93px] relative w-[93px]">
                    <div className="h-[93px] m-auto w-[93px]">
                      <div className="!w-[93px]  absolute h-[93px] inset-[0] justify-center m-auto overflow-visible">
                        <CircularProgressbar
                          className="!w-[93px] absolute h-[93px] inset-[0] justify-center m-auto overflow-visible"
                          value={53}
                          counterClockwise
                          strokeWidth={16}
                          styles={{
                            trail: { strokeWidth: 16, stroke: "#f1edfe" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(115deg)",
                              stroke: "#6f34f5",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute inset-x-[0] mx-auto text-black text-14px font-[500] top-[32%] tracking-[-0.14px] w-max"
                        size="txtPoppinsMedium14Black900"
                      >
                        200
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[31%] inset-x-[0] mx-auto text-[8px] text-black font-[500] tracking-[-0.08px] w-max"
                      size="txtPoppinsMedium8"
                    >
                      Employees
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[11px] items-start justify-start mt-[25px] w-[30%] ">
                    <div className="flex flex-row items-start  w-full">
                      <div className="bg-[#6f34f5] h-[11px] mr-[5px] mb-2.5 rounded-[5px] w-[11px]"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[8px] text-black font-[600]"
                          size="txtPoppinsSemiBold8"
                        >
                          23%
                        </Text>
                        <Text
                          className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                          size="txtPoppinsRegular8"
                        >
                          Remote
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start w-[83%] md:w-full">
                      <div className="bg-[#0080fc] h-[11px] mr-[5px] mb-2.5 rounded-[5px] w-[11px]"></div>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[8px] text-black font-[600]"
                          size="txtPoppinsSemiBold8"
                        >
                          77%
                        </Text>
                        <Text
                          className="text-[8px] text-black font-[400] tracking-[-0.08px]"
                          size="txtPoppinsRegular8"
                        >
                          Office
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-[20px] w-full">
              <div className="bg-white flex md:flex-1 col-span-3 flex-col items-center p-3 rounded-[16px] w-full">
                <div className="flex sm:gap-5 items-center justify-between  w-full">
                  <Text
                    className="text-[16px] font-[600] text-black tracking-[-0.16px]"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    Attendance Overview
                  </Text>
                  <SelectBox
                    className="border border-gray-300 border-solid leading-[normal] sm:ml-[0] ml-[25px] rounded text-[11px] text-left tracking-[-0.11px] w-[97px] font-[500] "
                    placeholderClassName="text-black"
                    isMulti={false}
                    name="groupTwentyTwo"
                    options={monthOptionsList}
                    isSearchable={false}
                    placeholder="Month"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <div className="w-full h-[250px]">
                  <AttandanceOverviewchart />
                </div>
              </div>
              <div className="bg-white flex flex-col col-span-2 items-start justify-start p-3.5 rounded-[16px]">
                <a
                  href="/#"
                  className="mb-[166px] text-[16px] font-[600] text-black tracking-[-0.16px]"
                >
                  <Text size="txtPoppinsSemiBold16Black900">Teams</Text>
                </a>
              </div>
            </div>
            <div className="grid lg:grid-cols-10 grid-cols-1 gap-[16px] mt-[16px]">
              <div className="bg-white flex col-span-3 md:flex-1 flex-col items-center justify-start p-[13px] rounded-[16px] w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start mb-[101px] w-full">
                  <Text
                    className="text-[16px] font-[600] text-black tracking-[-0.16px]"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    Team Performance
                  </Text>
                  <div className="flex flex-col w-full gap-[14px]">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-[9px] items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4008"
                        />
                        <div>
                          <Text
                            className="text-[11px] font-[Poppins] font-[600] text-black tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] font-[Poppins] font-[400] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            USA
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-[500] text-[#5956e9] bg-[#f1edfe] leading-[normal] min-w-[78px] rounded-[12px] text-[10px] text-center tracking-[-0.10px]"
                        color="#f1edfe"
                        size="xs"
                        variant="fill"
                      >
                        UI/Ux Design
                      </Button>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-[9px] items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4008"
                        />
                        <div>
                          <Text
                            className="text-[11px] font-[Poppins] font-[600] text-black tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] font-[Poppins] font-[400] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            USA
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-[500] text-[#5956e9] bg-[#f1edfe] leading-[normal] min-w-[78px] rounded-[12px] text-[10px] text-center tracking-[-0.10px]"
                        color="#f1edfe"
                        size="xs"
                        variant="fill"
                      >
                        UI/Ux Design
                      </Button>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-[9px] items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4008"
                        />
                        <div>
                          <Text
                            className="text-[11px] font-[Poppins] font-[600] text-black tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] font-[Poppins] font-[400] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            USA
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-[500] text-[#5956e9] bg-[#f1edfe] leading-[normal] min-w-[78px] rounded-[12px] text-[10px] text-center tracking-[-0.10px]"
                        color="#f1edfe"
                        size="xs"
                        variant="fill"
                      >
                        UI/Ux Design
                      </Button>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex gap-[9px] items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4008"
                        />
                        <div>
                          <Text
                            className="text-[11px] font-[Poppins] font-[600] text-black tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] font-[Poppins] font-[400] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            USA
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-[500] text-[#5956e9] bg-[#f1edfe] leading-[normal] min-w-[78px] rounded-[12px] text-[10px] text-center tracking-[-0.10px]"
                        color="#f1edfe"
                        size="xs"
                        variant="fill"
                      >
                        UI/Ux Design
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex md:flex-1 col-span-5 flex-col items-center justify-start p-[13px] rounded-[16px] w-full">
                <div className="flex flex-col gap-[18px] items-start justify-start mb-[114px] w-full">
                  <Text
                    className="text-[16px] font-[600] text-black tracking-[-0.16px]"
                    size="txtPoppinsSemiBold16Black900"
                  >
                    Team Performance
                  </Text>
                  <div className="gap-[20px] grid sm:grid-cols-2 grid-cols-1 justify-center min-h-[auto] w-full">
                    <div className="flex items-center p-[5px] h-[41px] justify-between rounded-[40px] bg-[#f5f8fe]">
                      <div className="flex items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4012"
                        />
                        <div className="flex flex-col items-start justify-start ml-2">
                          <Text
                            className="text-[11px] font-[600] font-[Poppins] text-black-900 tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            UI/Ux Designer
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer text-[#5956E9] bg-[#F1EDFE] font-medium leading-[normal] min-w-[78px] py-[4px] px-[12px] rounded-[25px] text-[10px] text-center tracking-[-0.10px]"
                        size="xs"
                        variant="fill"
                      >
                        10:00-11:00
                      </Button>
                    </div>
                    <div className="flex items-center p-[5px] h-[41px] justify-between rounded-[40px] bg-[#f5f8fe]">
                      <div className="flex items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4012"
                        />
                        <div className="flex flex-col items-start justify-start ml-2">
                          <Text
                            className="text-[11px] font-[600] font-[Poppins] text-black-900 tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            UI/Ux Designer
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer text-[#5956E9] bg-[#F1EDFE] font-medium leading-[normal] min-w-[78px] py-[4px] px-[12px] rounded-[25px] text-[10px] text-center tracking-[-0.10px]"
                        size="xs"
                        variant="fill"
                      >
                        10:00-11:00
                      </Button>
                    </div>
                    <div className="flex items-center p-[5px] h-[41px] justify-between rounded-[40px] bg-[#f5f8fe]">
                      <div className="flex items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4012"
                        />
                        <div className="flex flex-col items-start justify-start ml-2">
                          <Text
                            className="text-[11px] font-[600] font-[Poppins] text-black-900 tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            UI/Ux Designer
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer text-[#5956E9] bg-[#F1EDFE] font-medium leading-[normal] min-w-[78px] py-[4px] px-[12px] rounded-[25px] text-[10px] text-center tracking-[-0.10px]"
                        size="xs"
                        variant="fill"
                      >
                        10:00-11:00
                      </Button>
                    </div>
                    <div className="flex items-center p-[5px] h-[41px] justify-between rounded-[40px] bg-[#f5f8fe]">
                      <div className="flex items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4012"
                        />
                        <div className="flex flex-col items-start justify-start ml-2">
                          <Text
                            className="text-[11px] font-[600] font-[Poppins] text-black-900 tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            UI/Ux Designer
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer text-[#5956E9] bg-[#F1EDFE] font-medium leading-[normal] min-w-[78px] py-[4px] px-[12px] rounded-[25px] text-[10px] text-center tracking-[-0.10px]"
                        size="xs"
                        variant="fill"
                      >
                        10:00-11:00
                      </Button>
                    </div>
                    <div className="flex items-center p-[5px] h-[41px] justify-between rounded-[40px] bg-[#f5f8fe]">
                      <div className="flex items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4012"
                        />
                        <div className="flex flex-col items-start justify-start ml-2">
                          <Text
                            className="text-[11px] font-[600] font-[Poppins] text-black-900 tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            UI/Ux Designer
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer text-[#5956E9] bg-[#F1EDFE] font-medium leading-[normal] min-w-[78px] py-[4px] px-[12px] rounded-[25px] text-[10px] text-center tracking-[-0.10px]"
                        size="xs"
                        variant="fill"
                      >
                        10:00-11:00
                      </Button>
                    </div>
                    <div className="flex items-center p-[5px] h-[41px] justify-between rounded-[40px] bg-[#f5f8fe]">
                      <div className="flex items-center">
                        <Img
                          className="h-[31px] md:h-auto rounded-[50%] w-[31px]"
                          src="images/img_ellipse4008.png"
                          alt="ellipse4012"
                        />
                        <div className="flex flex-col items-start justify-start ml-2">
                          <Text
                            className="text-[11px] font-[600] font-[Poppins] text-black-900 tracking-[-0.11px]"
                            size="txtPoppinsSemiBold11"
                          >
                            Guy Hawkins
                          </Text>
                          <Text
                            className="text-[11px] text-[#333333] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            UI/Ux Designer
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer text-[#5956E9] bg-[#F1EDFE] font-medium leading-[normal] min-w-[78px] py-[4px] px-[12px] rounded-[25px] text-[10px] text-center tracking-[-0.10px]"
                        size="xs"
                        variant="fill"
                      >
                        10:00-11:00
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white flex md:flex-1 flex-col col-span-2 items-start justify-start md:mt-0 mt-[5px] p-3.5 gap-[14px] rounded-[16px] w-full">
                <Text
                  className="text-[16px] text-black font-[600] tracking-[-0.16px]"
                  size="txtPoppinsSemiBold16Black900"
                >
                  Project Overview
                </Text>
                <div className="bg-[#f1edfe] flex flex-col items-start justify-start p-[7px] rounded-[14px] w-full">
                  <Text
                    className="text-[16px] text-[#5956e9] font-[600] tracking-[-0.16px]"
                    size="txtPoppinsSemiBold16IndigoA200"
                  >
                    125
                  </Text>
                  <Text
                    className="text-[11px] text-black font-[Poppins] font-[400] tracking-[-0.11px]"
                    size="txtPoppinsRegular11Black900"
                  >
                    Total Project
                  </Text>
                </div>
                <div className="bg-[#dcfce7] flex flex-col items-start justify-start p-[7px] rounded-[14px] w-full">
                  <Text
                    className="text-[16px] font-[600] text-[#3cd856] tracking-[-0.16px]"
                    size="txtPoppinsSemiBold16Green500"
                  >
                    15
                  </Text>
                  <Text
                    className="text-[11px] font-[400] font-[Poppins] text-black tracking-[-0.11px]"
                    size="txtPoppinsRegular11Black900"
                  >
                    Project On Hold
                  </Text>
                </div>
                <div className="bg-[#fff4e4] flex flex-col items-start justify-start mb-[84px] p-[7px] rounded-[14px] w-full">
                  <Text
                    className="text-[16px] text-[#ff8600] font-[600] tracking-[-0.16px]"
                    size="txtPoppinsSemiBold16Orange600"
                  >
                    13
                  </Text>
                  <Text
                    className="text-[11px] text-black font-[Poppins] font-[400] tracking-[-0.11px]"
                    size="txtPoppinsRegular11Black900"
                  >
                    Project Completed
                  </Text>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirtyfivePage;
