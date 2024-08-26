import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Button, Img, Input, Line, List, Text } from "components";

import "react-circular-progressbar/dist/styles.css";
import { Radio } from "components/Radio";

const DashboardOnePage = () => {
  const [chatName, setChatName] = useState("Inbox");
  return (
    <>
      <div className="pl-[10px] sm:pr-[47px] pr-[10px] w-full">
        <Text
          className="mt-[22px] mb-[20px] text-[24px] font-[Poppins] font-[500] text-[#000000] "
          size="txtPoppinsMedium24"
        >
          Chats
        </Text>
        <div className="flex sm:flex-row flex-col gap-[31px] items-start justify-between w-full">
          <div className="bg-[#FFFFFF] rounded-[16px] w-full">
            <div className="bg-white-[#FFFFFF] h-full m-auto rounded-[16px] w-full">
              <div className="mb-[51px] w-full">
                <div className="border-b border-b-[#EDEDED] rounded-t-[16px] p-[16px]">
                  <div className="bg-[#F6F8FE] flex flex-row items-center rounded-[6px] w-full">
                    <div
                      onClick={() => setChatName("Inbox")}
                      className={`cursor-pointer ${
                        chatName === "Inbox" ? "bg-[#000000]" : ""
                      } flex flex-row gap-[7px] items-center justify-start w-full p-[12px] rounded-[6px]`}
                    >
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_chatsvgrepocom.svg"
                        alt="chatsvgrepocom"
                      />
                      <Text
                        className={`${
                          chatName === "Inbox"
                            ? "text-[#FFFFFF]"
                            : "text-[#000000]"
                        } font-[Poppins] font-[500] text-[14px] tracking-[-0.14px]`}
                        size="txtPoppinsMedium14"
                      >
                        Inbox
                      </Text>
                    </div>
                    <div
                      onClick={() => setChatName("Unread Chats")}
                      className={`cursor-pointer ${
                        chatName === "Unread Chats" ? "bg-[#000000]" : ""
                      } flex flex-row gap-[7px] items-center w-full justify-start p-[12px] rounded-[6px]`}
                    >
                      <Img
                        className="h-[22px] ml-[19px] w-[22px]"
                        src="images/img_callsvgrepocom.svg"
                        alt="callsvgrepocom"
                      />
                      <Text
                        className={`${
                          chatName === "Unread Chats"
                            ? "text-[#FFFFFF]"
                            : "text-[#000000]"
                        } font-[Poppins] font-[500] text-[14px] tracking-[-0.14px]`}
                      >
                        Unread Chats
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-[#EAEDEF] mx-[14px] rounded-[6px]">
                  <Input
                    name="groupSeventySeven"
                    placeholder="Search"
                    className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-left text-sm tracking-[-0.14px] w-full"
                    wrapClassName="flex mt-[19px] w-full"
                    prefix={
                      <Img
                        className="h-6 mr-2 my-auto"
                        src="images/img_search_1.svg"
                        alt="search 3"
                      />
                    }
                    shape="round"
                    color="blue_gray_50"
                    size="sm"
                  ></Input>
                </div>
                <div className="px-[14px]">
                  <div className="bg-[#FDFDFD] border border-gray-200 border-solid flex flex-col items-center justify-start mt-[24px] p-[13px] rounded-[6px] w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse4058.png"
                        alt="ellipse4058"
                      />
                      <div className="flex flex-col items-start justify-start w-4/5">
                        <Text
                          className="text-[#000000] font-[Poppins] font-[500] text-[14px] tracking-[-0.14px]"
                          size="txtPoppinsMedium14Black900"
                        >
                          Tae Min
                        </Text>
                        <Text
                          className="text-[#000000] font-[Poppins] font-[400] mb-[6px] text-[11px] tracking-[-0.11px] w-full"
                          size="txtPoppinsRegular11"
                        >
                          Seems to be waiting for a reply to your message since
                          1 month ago{" "}
                        </Text>
                        <div className="px-[16px] py-[6px] bg-[#FFFFFF] border border-[#5956E9] rounded-[4px]">
                          <Text className="text-[11px] font-[500] text-[#5956E9] font-[Poppins] tracking-[-0.11px]">
                            Reply Now
                          </Text>
                          {/* <Input
                            name="rectangle40708"
                            placeholder=""
                            className="justify-center p-0 w-full"
                            wrapClassName="flex h-[30px] inset-[0] m-auto rounded w-full"
                            shape="round"
                            color="indigo_A200"
                            variant="outline"
                          ></Input> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[22px] mt-[24px] w-full">
                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center w-full">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_ellipse4060.png"
                          alt="ellipse4060"
                        />
                        <div>
                          <Text
                            className="text-[#000000] font-[500] text-[14px] tracking-[-0.14px]"
                            size="txtPoppinsMedium14Black900"
                          >
                            Jenifar Ardy
                          </Text>
                          <Text
                            className="text-[11px] font-[Poppins] font-[400] text-[#000000] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            Time is running!
                          </Text>
                        </div>
                      </div>
                      <div>
                        <Text
                          className="text-[11px] font-[Poppins] font-[400] text-[#000000] tracking-[-0.11px]"
                          size="txtPoppinsRegular11"
                        >
                          8m
                        </Text>
                        <Text
                          className="h-[19px] w-[19px] flex items-center justify-center mt-[3px] bg-[#10BFBC] font-[Poppins] font-[400] text-[11px] rounded-[50%] text-[#fff]"
                          size="txtPoppinsRegular11"
                        >
                          2
                        </Text>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center w-full">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_ellipse4059.png"
                          alt="ellipse4059"
                        />
                        <div>
                          <Text
                            className="text-[#000000] font-[500] text-[14px] tracking-[-0.14px]"
                            size="txtPoppinsMedium14Black900"
                          >
                            Se Hun oh
                          </Text>
                          <div className="flex gap-[4.5px]">
                            <Img
                              className="h-[6.5px] md:h-auto rounded-[50%] w-[12.5px]"
                              src="images/dubbel-tik.svg"
                              alt="ellipse4059"
                            />
                            <Text
                              className="text-[11px] font-[Poppins] font-[400] text-[#000000] tracking-[-0.11px]"
                              size="txtPoppinsRegular11"
                            >
                              Just Stop, I’m already late!!
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Text
                          className="text-[11px] font-[Poppins] font-[400] text-[#000000] tracking-[-0.11px]"
                          size="txtPoppinsRegular11"
                        >
                          6m
                        </Text>
                        {/* <Text
                          className="h-[19px] w-[19px] flex items-center justify-center mt-[3px] bg-[#10BFBC] font-[Poppins] font-[400] text-[11px] rounded-[50%] text-[#fff]"
                          size="txtPoppinsRegular11"
                        >
                          2
                        </Text> */}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center w-full">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_ellipse4059.png"
                          alt="ellipse4059"
                        />
                        <div>
                          <Text
                            className="text-[#000000] font-[500] text-[14px] tracking-[-0.14px]"
                            size="txtPoppinsMedium14Black900"
                          >
                            Jong Dae
                          </Text>
                          <Text
                            className="text-[11px] font-[Poppins] font-[400] text-[#5956E9] tracking-[-0.11px]"
                            size="txtPoppinsRegular11"
                          >
                            Typing.....
                          </Text>
                        </div>
                      </div>
                      <div>
                        <Text
                          className="text-[11px] font-[Poppins] font-[400] text-[#000000] tracking-[-0.11px]"
                          size="txtPoppinsRegular11"
                        >
                          6m
                        </Text>
                        {/* <Text
                          className="h-[19px] w-[19px] flex items-center justify-center mt-[3px] bg-[#10BFBC] font-[Poppins] font-[400] text-[11px] rounded-[50%] text-[#fff]"
                          size="txtPoppinsRegular11"
                        >
                          2
                        </Text> */}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-[10px] items-center w-full">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_ellipse4059.png"
                          alt="ellipse4059"
                        />
                        <div>
                          <Text
                            className="text-[#000000] font-[500] text-[14px] tracking-[-0.14px]"
                            size="txtPoppinsMedium14Black900"
                          >
                            Se Hun oh
                          </Text>
                          <div className="flex gap-[4.5px]">
                            <Img
                              className="h-[6.5px] md:h-auto rounded-[50%] w-[12.5px]"
                              src="images/dubbel-tik.svg"
                              alt="ellipse4059"
                            />
                            <Text
                              className="text-[11px] font-[Poppins] font-[400] text-[#000000] tracking-[-0.11px]"
                              size="txtPoppinsRegular11"
                            >
                              Voice Message
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Text
                          className="text-[11px] font-[Poppins] font-[400] text-[#000000] tracking-[-0.11px]"
                          size="txtPoppinsRegular11"
                        >
                          6m
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#FFFFFF] rounded-[16px] w-full">
            <div className="w-full h-[805px] relative">
              <div className="flex border-b border-[#EDEDED] pt-[30px] pl-[16px] pb-[16px] pr-[51px]">
                <div className="flex items-center w-full gap-[14px]">
                  <Img
                    className="h-11 md:h-auto ml-0.5 md:ml-[0] rounded-[50%] w-11"
                    src="images/img_ellipse4060.png"
                    alt="ellipse4061"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[#000000] font-[Poppins] font-[500] text-[14px] tracking-[-0.14px]"
                      size="txtPoppinsMedium14Black900"
                    >
                      Jenifar Ardy
                    </Text>
                    <Text
                      className="text-[#000000] font-[Poppins] font-[400] text-[11px] tracking-[-0.11px]"
                      size="txtPoppinsRegular11"
                    >
                      Round 3
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[10px] items-center justify-end w-full">
                  <Img
                    className="h-[27px] w-[27px]"
                    src="images/img_linksquaresvgrepocom.svg"
                    alt="linksquaresvgre"
                  />
                  <Button
                    className="flex h-[27px] items-center justify-center w-[27px]"
                    shape="round"
                    color="gray_200_02"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_videosvgrepocom.svg"
                      alt="videosvgrepocom"
                    />
                  </Button>
                  <Button
                    className="flex h-[27px] items-center justify-center w-[27px]"
                    shape="round"
                    color="gray_200_02"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-3.5"
                      src="images/img_callmedicinesvgrepocom.svg"
                      alt="callmedicinesvg"
                    />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-[6px] my-[20px] justify-center w-full">
                <hr className="w-full" />
                <Text
                  className="text-[11px] font-[Poppins] font-[500] text-[#000000] tracking-[-0.11px]"
                  size="txtPoppinsRegular11"
                >
                  TODAY
                </Text>
                <hr className="w-full" />
              </div>
              <div className="mx-[16px] h-[400px] overflow-y-auto">
                <div className="flex items-center gap-[14px]">
                  <Img
                    className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                    src="images/img_ellipse4062.png"
                    alt="ellipse4062"
                  />
                  <div>
                    <div className="flex mb-[8px] flex-row gap-[14px] items-center w-full">
                      <Text
                        className="text-[#000000] font-[Poppins] font-[500] text-[14px] tracking-[-0.14px]"
                        size="txtPoppinsMedium14Black900"
                      >
                        Jenifar Ardy
                      </Text>
                      <Text
                        className="text-[11px] text-black-900 tracking-[-0.11px]"
                        size="txtPoppinsRegular11"
                      >
                        9:12 am
                      </Text>
                    </div>
                    <Button
                      className="bg-[#E6F7F6] cursor-pointer leading-[normal] rounded-bl rounded-br px-[16px] py-[8px] rounded-tr text-[11px] text-[Poppins] font-[400] text-center tracking-[-0.11px]"
                      color="cyan_50"
                      size="sm"
                    >
                      Hey Jhon Lever!
                    </Button>
                  </div>
                </div>
                <div className="flex items-center mt-[22px] gap-[14px]">
                  <Img
                    className="h-[53px] md:h-auto rounded-[50%] w-[53px]"
                    src="images/img_ellipse4062.png"
                    alt="ellipse4062"
                  />
                  <div>
                    <div className="flex mb-[8px] flex-row gap-[14px] items-center w-full">
                      <Text
                        className="text-[#000000] font-[Poppins] font-[500] text-[14px] tracking-[-0.14px]"
                        size="txtPoppinsMedium14Black900"
                      >
                        Jenifar Ardy
                      </Text>
                      <Text
                        className="text-[11px] text-black-900 tracking-[-0.11px]"
                        size="txtPoppinsRegular11"
                      >
                        9:12 am
                      </Text>
                    </div>
                    <Button
                      className="bg-[#E6F7F6] cursor-pointer leading-[normal] rounded-bl rounded-br px-[16px] py-[8px] rounded-tr text-[11px] text-[Poppins] font-[400] text-center tracking-[-0.11px]"
                      color="cyan_50"
                      size="sm"
                    >
                      I am sending the dashboard design
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row-reverse items-center mt-[22px] gap-[14px]">
                  <Img
                    className="h-[51px] md:h-auto rounded-[50%] w-[51px]"
                    src="images/img_ellipse4072.png"
                    alt="ellipse4072"
                  />
                  <div>
                    <div className="flex mb-[8px] flex-row-reverse gap-[14px] items-center w-full">
                      <Text
                        className="text-[#000000] font-[Poppins] font-[500] text-[14px] tracking-[-0.14px]"
                        size="txtPoppinsMedium14Black900"
                      >
                        You
                      </Text>
                      <Text
                        className="text-[11px] text-black-900 tracking-[-0.11px]"
                        size="txtPoppinsRegular11"
                      >
                        9:12 am
                      </Text>
                    </div>
                    <Button
                      className="bg-[#E4F1FE] cursor-pointer leading-[normal] rounded-bl rounded-br px-[16px] py-[8px] rounded-tr text-[11px] text-[Poppins] font-[400] text-center tracking-[-0.11px]"
                      color="cyan_50"
                      size="sm"
                    >
                      I’m Just Looking Around
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFFFFF] absolute bottom-[20px] left-[14px] border border-[#F1F1F1] border-solid flex flex-row items-center justify-between mt-[25px] px-[12px] py-[14px] rounded-[8px] sm:max-w-[345px] max-w-[300px] w-full">
                <Text
                  className="text-[11px] text-[#A2A2A2] font-[Poppins] font-[400] tracking-[-0.11px]"
                  size="txtPoppinsRegular11Gray50001"
                >
                  Your messages...
                </Text>
                <div className="bg-[#5956E9] h-[29px] mr-1 rounded w-[29px]"></div>
              </div>
            </div>
            {/* <Line className="absolute bg-gray-200_01 h-px inset-x-[0] mx-auto top-[11%] w-full" />
            <Line className="absolute bg-gray-100_01 h-px left-[0] top-[15%] w-[45%]" /> */}
          </div>
          <div className="flex flex-col gap-[14px] sm:w-[30%] w-full">
            <div className="bg-[#FFFFFF] flex flex-col items-center justify-end p-[10px] rounded-[16px] w-full">
              <div className="flex flex-col items-center justify-center mt-[11px] w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-center w-[49%] md:w-full">
                  <div className="h-[102px] relative w-[102px]">
                    <div className="!w-[102px] h-[102px] m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[102px] h-[102px] m-auto overflow-visible"
                        value={94}
                        counterClockwise
                        strokeWidth={4}
                        styles={{
                          trail: { strokeWidth: 4, stroke: "#5956e933" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(201deg)",
                            stroke: "#ffd831",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                    <Img
                      className="absolute h-[82px] inset-[0] justify-center m-auto rounded-[50%] w-[82px]"
                      src="images/img_ellipse4077.png"
                      alt="ellipse4077"
                    />
                  </div>
                  <Text
                    className="mt-[3px] text-[#000000] text-[20px] font-[500] font-[Poppins] mb-[5px] tracking-[-0.20px]"
                    size="txtPoppinsMedium20"
                  >
                    Jhon Lever
                  </Text>
                </div>
                <Text
                  className="text-[#000000] mb-[4px] font-[Poppins] font-[400] text-[14px] tracking-[-0.14px]"
                  size="txtPoppinsRegular14"
                >
                  +1 (234) 567-890
                </Text>
                <div className="bg-[#F3F6F9] flex flex-col items-start mb-[8px] justify-start mt-0.5 px-[12px] py-[13px] rounded-[14px] w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="w-full">
                      <Text
                        className="text-[8px] text-[#000000] font-[Poppins] font-[400] tracking-[-0.08px]"
                        size="txtPoppinsRegular8"
                      >
                        Job
                      </Text>
                      <Text
                        className="text-[8px] text-black-900 font-[500] tracking-[-0.08px]"
                        size="txtPoppinsMedium8"
                      >
                        React Js Developer
                      </Text>
                      <Text
                        className="text-[8px] text-black-900 tracking-[-0.08px]"
                        size="txtPoppinsRegular8"
                      >
                        Location
                      </Text>
                      <Text
                        className="text-[8px] text-black-900 font-[500] tracking-[-0.08px]"
                        size="txtPoppinsMedium8"
                      >
                        Indore
                      </Text>
                    </div>
                    <div className="w-full">
                    <Text
                        className="text-[8px] text-black-900 tracking-[-0.08px]"
                        size="txtPoppinsRegular8"
                      >
                        Salary
                      </Text>
                     
                      <Text
                        className="text-[8px] text-black-900 font-[500] tracking-[-0.08px]"
                        size="txtPoppinsMedium8"
                      >
                        10,000-20,000
                      </Text>
                      <Text
                        className="text-[8px] text-black-900 tracking-[-0.08px]"
                        size="txtPoppinsRegular8"
                      >
                        Experience
                      </Text>
                      <Text
                        className="text-[8px] text-black-900 font-[500] tracking-[-0.08px]"
                        size="txtPoppinsMedium8"
                      >
                        2 Year
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-center justify-start w-[100%] px-[6px] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[400] tracking-[-0.11px]"
                      size="txtPoppinsRegular11"
                    >
                      Location
                    </Text>
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[500] tracking-[-0.11px]"
                      size="txtPoppinsMedium11Black900"
                    >
                      United state
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[400] tracking-[-0.11px]"
                      size="txtPoppinsRegular11"
                    >
                      Experience
                    </Text>
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[500] tracking-[-0.11px]"
                      size="txtPoppinsMedium11Black900"
                    >
                      4+ years
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[400] tracking-[-0.11px]"
                      size="txtPoppinsRegular11"
                    >
                      Applied as a
                    </Text>
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[500] tracking-[-0.11px]"
                      size="txtPoppinsMedium11Black900"
                    >
                      CEO
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[400] tracking-[-0.11px]"
                      size="txtPoppinsRegular11"
                    >
                      Work From
                    </Text>
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[500] tracking-[-0.11px]"
                      size="txtPoppinsMedium11Black900"
                    >
                      Office
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[400] tracking-[-0.11px]"
                      size="txtPoppinsRegular11"
                    >
                      Application Stage
                    </Text>
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[500] tracking-[-0.11px]"
                      size="txtPoppinsMedium11Black900"
                    >
                      Round 2
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[400] tracking-[-0.11px]"
                      size="txtPoppinsRegular11"
                    >
                      Joining date
                    </Text>
                    <Text
                      className="text-[11px] text-[#000000] font-[Poppins] font-[500] tracking-[-0.11px]"
                      size="txtPoppinsMedium11Black900"
                    >
                      Nov 01, 2023
                    </Text>
                  </div>
                  <Text
                    className="mt-8 text-[11px] font-[Poppins] font-[500] text-[#5956E9] tracking-[-0.11px]"
                    size="txtPoppinsMedium11"
                  >
                    Check Notes
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-[#FFFFFF] py-[20px] px-[18px] rounded-[16px] w-full">
              <Text
                className="ml-0.5 md:ml-[0] text-[16px] font-[500] font-[Poppins] text-[#000000] tracking-[-0.16px]"
                size="txtPoppinsMedium16"
              >
                Application Pipeline
              </Text>
              <List
              className="flex flex-col gap-[10px] items-center ml-0.5 md:ml-[0] mt-[12px] w-[99%]"
                orientation="vertical"
              >
                <div className="bg-[#F6F9FE] flex flex-col items-start justify-end p-[10px] rounded-[6px] w-full">
                  <div className="flex flex-row gap-[7px] items-start justify-start mt-0.5 w-[88%] md:w-full">
                    <Img
                      className="h-[49px] md:h-auto mt-0.5 object-cover w-[29%]"
                      src="images/img_image42.png"
                      alt="imageFortyTwo"
                    />
                    <div className="flex flex-col items-start justify-start w-[67%]">
                      <Text
                        className="text-[13px] font-[500] font-[Poppins] text-[#000000] tracking-[-0.13px]"
                        size="txtPoppinsMedium13"
                      >
                        HR Management
                      </Text>
                      <div className="flex flex-row items-center justify-start w-[95%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_datesvgrepocom.svg"
                          alt="datesvgrepocom"
                        />
                        <Text
                          className="ml-[3px] text-[11px] font-[400] font-[Poppins] text-[#000000]  tracking-[-0.11px]"
                          size="txtPoppinsRegular11"
                        >
                          Nov 05 - 08 Nov
                        </Text>
                      </div>
                      <div className="flex font-inter mt-0.5 relative w-2/5">
                        <div className="flex my-auto w-[68%]">
                          <Img
                            className="h-[17px] my-auto rounded-[50%] w-[17px]"
                            src="images/img_ellipse3.png"
                            alt="ellipseThree"
                          />
                          <Img
                            className="h-[17px] ml-[-4.25px] my-auto rounded-[50%] w-[17px] z-[1]"
                            src="images/img_ellipse4.png"
                            alt="ellipseFour"
                          />
                        </div>
                        <Text
                          className="bg-black-900 h-[17px] justify-center ml-[-3.64px] my-auto p-1 rounded-lg text-[6px] text-white-A700 w-[17px] z-[1]"
                          size="txtInterMedium6"
                        >
                          +3
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50_03 flex flex-col items-start justify-end p-2.5 rounded-md w-full">
                  <div className="flex flex-row gap-[7px] items-start justify-start w-[84%] md:w-full">
                    <Img
                      className="h-[49px] md:h-auto mt-[3px] object-cover w-[30%]"
                      src="images/img_image43.png"
                      alt="imageFortyThree"
                    />
                    <div className="flex flex-col items-start justify-start w-[66%]">
                      <Text
                        className="text-[13px] text-black-900 tracking-[-0.13px]"
                        size="txtPoppinsMedium13"
                      >
                        Pay roll
                      </Text>
                      <div className="flex flex-row items-center justify-evenly w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_datesvgrepocom.svg"
                          alt="datesvgrepocom"
                        />
                        <Text
                          className="text-[11px] text-black-900 tracking-[-0.11px]"
                          size="txtPoppinsRegular11"
                        >
                          Nov 05 - 08 Nov
                        </Text>
                      </div>
                      <div className="flex font-inter mt-0.5 relative w-[42%]">
                        <div className="flex my-auto w-[68%]">
                          <Img
                            className="h-[17px] my-auto rounded-[50%] w-[17px]"
                            src="images/img_ellipse3.png"
                            alt="ellipseThree"
                          />
                          <Img
                            className="h-[17px] ml-[-4.25px] my-auto rounded-[50%] w-[17px] z-[1]"
                            src="images/img_ellipse4.png"
                            alt="ellipseFour"
                          />
                        </div>
                        <Text
                          className="bg-black-900 h-[17px] justify-center ml-[-3.64px] my-auto p-1 rounded-lg text-[6px] text-white-A700 w-[17px] z-[1]"
                          size="txtInterMedium6"
                        >
                          +3
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <Button
                className="cursor-pointer bg-[#000000] font-[Poppins] font-[500] text-[14px] text-[#FFFFFF] leading-[normal] min-w-[207px] mt-[14px] rounded-[6px] text-center tracking-[-0.14px]"
                size="md"
              >
                Schedule Interview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOnePage;
