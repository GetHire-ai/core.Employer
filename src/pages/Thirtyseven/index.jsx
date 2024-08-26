import React from "react";

import { Button, Img, Line, Text } from "components";
import HrBtn from "components/HrBtn/HrBtn";
import ProgressBar from "@ramonak/react-progress-bar";

const ThirtysevenPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between mx-auto md:px-5 w-full">
      
          <div className="flex flex-1 flex-col justify-start w-full">
            
            <HrBtn />
            <div className="flex flex-col gap-2.5 items-center justify-start mt-4 w-full">
              <div className="bg-white flex flex-col items-center justify-start p-[13px] rounded-[12px] mb-[10px] w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start mb-0.5 w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <Text
                      className="text-[24px] font-[500]"
                      size="txtPoppinsMedium24"
                    >
                      Task Board
                    </Text>
                    <Button
                      className="cursor-pointer bg-black text-white font-[500]  leading-[normal] min-w-[167px] text-[16px] text-center"
                      shape="round"
                      color="black_900"
                      size="md"
                    >
                      Create List
                    </Button>
                  </div>
                  <div className="flex flex-col  items-start justify-between w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-between ">
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text
                          className="mt-1 text-base text-black"
                          size="txtPoppinsMedium16"
                        >
                          Lead
                        </Text>
                        <div className="flex font-inter ml-[7px] mt-0.5 relative w-[27%]">
                          <div className="flex my-auto w-[70%]">
                            <Img
                              className="h-7 my-auto rounded-[50%] w-7"
                              src="images/img_ellipse3.png"
                              alt="ellipseThree"
                            />
                            <Img
                              className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                              src="images/img_ellipse4.png"
                              alt="ellipseFour"
                            />
                          </div>
                          <Text
                            className="bg-[#5956e9] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-white-A700 text-xs w-7 z-[1]"
                            size="txtInterMedium12"
                          >
                            +3
                          </Text>
                        </div>
                        <Line className="bg-black h-[39px] ml-[15px] w-px" />
                        <Text
                          className="ml-[11px] mt-1 text-base text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          Team
                        </Text>
                        <div className="flex font-inter ml-[7px] mt-0.5 relative w-[27%]">
                          <div className="flex my-auto w-[70%]">
                            <Img
                              className="h-7 my-auto rounded-[50%] w-7"
                              src="images/img_ellipse3.png"
                              alt="ellipseThree_One"
                            />
                            <Img
                              className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                              src="images/img_ellipse4.png"
                              alt="ellipseFour_One"
                            />
                          </div>
                          <Text
                            className="bg-[#5956e9] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-white-A700 text-xs w-7 z-[1]"
                            size="txtInterMedium12"
                          >
                            +3
                          </Text>
                        </div>
                      </div>
                      
                    </div>
                     <div className="flex w-full justify-center gap-[12px] items-center">
                    <div className="w-full ">
                    <ProgressBar completed={40} bgColor="#5956e9" color="#e6f3ff"  height="10px" customLabel="." />
                    </div>
                    <div className="w-[40px] h-[30px]">
                    <Text
                      className=" text-[16px] text-black"
                      size="txtPoppinsMedium16"
                    >
                      40%
                    </Text>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-[24px] w-full">
                <div className="bg-[#e2f1ff] flex flex-1 flex-col gap-[21px] items-center justify-center pb-[20px] md:pb-[416px] rounded-[16px] w-full">
                  <div className="bg-[#0080fc] flex flex-row items-center justify-between p-2.5 rounded-tl-[16px] rounded-tr-[16px] w-full">
                    <div className=" flex gap-[10px]">
                    <Text
                        className=" text-white text-[20px] "
                        size="txtPoppinsMedium20"
                      >
                        Pending
                      </Text>  

                      <Text
                        className="  text-black bg-white w-[27px] text-center h-[27pxpx] rounded-full text-[20px] font-[500]"
                        size="txtPoppinsMedium20"
                      >
                        3
                      </Text>
                    </div>
                    <Img
                      className="h-6 mr-[5px] w-6"
                      src="images/add-circle-svgrepo-com39.png"
                      alt="addcirclesvgrep"
                    />
                  </div>
                  <div className="flex flex-col gap-[22px] md:p-[22px] items-center justify-start w-[87%] md:w-full">
                    <div className="bg-white flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                      <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                        <Text
                          className="text-[16px] font-[500] text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          Website Design
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-[23px] py-[13px] w-full">
                          <Text
                            className="bg-[#edf4ff] h-[17px] justify-center px-2.5 rounded-[9px] text-[11px] text-[#0080fc] w-[45px]"
                            size="txtPoppinsRegular11"
                          >
                            High
                          </Text>
                          <div className="flex ">
                          <Img
                            className="h-4 ml-[151px] text-[#0080fc] w-4"
                            src="images/time-past-svgrepo-com13.png"
                            alt="clock"
                          />
                          <Text
                            className="ml-1.5 text-black text-[12px] font-[500]"
                            size="txtPoppinsMedium12"
                          >
                            26 Apr
                          </Text>
                          </div>
                        </div>
                        <div className="flex w-full justify-center gap-[12px] items-center">
                    <div className="w-full ">
                    <ProgressBar completed={60} bgColor="#0080fc" color="#e6f3ff"  height="9px" customLabel="." />
                    </div>
                    <div className="w-[40px] h-[30px]">
                    <Text
                      className="text-[16px] text-black"
                      size="txtPoppinsMedium16"
                    >
                      60%
                    </Text>
                    </div>
                    </div>
                        <div className="flex flex-row items-end justify-between mt-3 w-[96%] md:w-full">
                          <div className="flex font-inter mb-[3px] relative w-[29%]">
                            <div className="flex my-auto ">
                              <Img
                                className="h-7 my-auto rounded-[50%] w-7"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Img
                                className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                                src="images/img_ellipse4.png"
                                alt="ellipseFour"
                              />
                            <Text
                              className="bg-[#0080fc] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-xs w-7 z-[1]"
                              size="txtInterMedium12"
                            >
                              +3
                            </Text>
                            </div>

                          </div>
                          <Text
                            className="ml-[125px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[34px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                      <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                        <Text
                          className="text-[16px] font-[500] text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          Make a wire frame
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                          <Text
                            className="bg-[#fff4e4] h-[17px] justify-center px-2.5 rounded-[9px] text-[11px] text-[#f39a2b] w-[45px]"
                            size="txtPoppinsRegular11"
                          >
                            Low
                          </Text>
                          <div className="flex">
                          <Img
                            className="h-4 ml-[151px] text-[#0080fc] w-4"
                            src="images/time-past-svgrepo-com13.png"
                            alt="clock"
                          />
                          <Text
                            className="ml-1.5 text-black text-[12px] font-[500]"
                            size="txtPoppinsMedium12"
                          >
                            26 Apr
                          </Text>
                          </div>
                        </div>
                        <div className="flex w-full justify-center gap-[12px] items-center">
                    <div className="w-full ">
                    <ProgressBar completed={30} bgColor="#f39a2b" color="#e6f3ff"  height="9px" customLabel="." />
                    </div>
                    <div className="w-[40px] h-[30px]">
                    <Text
                      className=" text-[16px] text-black"
                      size="txtPoppinsMedium16"
                    >
                      30%
                    </Text>
                    </div>
                    </div>
                        <div className="flex flex-row items-end justify-between mt-3 w-[96%] md:w-full">
                          <div className="flex font-inter mb-[3px] relative w-[29%]">
                            <div className="flex my-auto ">
                              <Img
                                className="h-7 my-auto rounded-[50%] w-7"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Img
                                className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                                src="images/img_ellipse4.png"
                                alt="ellipseFour"
                              />
                            <Text
                              className="bg-[#0080fc] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-white-A700 text-xs w-7 z-[1]"
                              size="txtInterMedium12"
                            >
                              +3
                            </Text>
                            </div>
                          </div>
                          
                          <Text
                            className="ml-[125px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[34px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    

                  </div>
                </div>
                <div className="bg-[#fff4e4] flex flex-1 flex-col gap-[21px] items-center justify-center pb-[20px] md:pb-[416px] rounded-[16px] w-full">
                  <div className="bg-[#ff8600] flex flex-row items-center justify-between p-2.5 rounded-tl-[16px] rounded-tr-[16px] w-full">
                    <div className=" flex gap-[10px]">
                    <Text
                        className=" text-white text-[20px] "
                        size="txtPoppinsMedium20"
                      >
                        Inprogress
                      </Text>  

                      <Text
                        className="  text-black bg-white w-[27px] text-center h-[27pxpx] rounded-full text-[20px] font-[500]"
                        size="txtPoppinsMedium20"
                      >
                        4
                      </Text>
                    </div>
                    <Img
                      className="h-6 mr-[5px] w-6"
                      src="images/add-circle-svgrepo-com39.png"
                      alt="addcirclesvgrep"
                    />
                  </div>
                  <div className="flex flex-col gap-[22px] md:p-[22px] items-center justify-start w-[87%] md:w-full">
                    <div className="bg-white flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                      <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                        <Text
                          className="text-[16px] font-[500] text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          Website Redesign
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-[23px] py-[13px] w-full">
                          <Text
                            className="bg-[#edf4ff] h-[17px] justify-center px-2.5 rounded-[9px] text-[11px] text-[#0080fc] w-[45px]"
                            size="txtPoppinsRegular11"
                          >
                            High
                          </Text>
                          <div className="flex ">
                          <Img
                            className="h-4 ml-[151px] text-[#0080fc] w-4"
                            src="images/time-past-svgrepo-com13.png"
                            alt="clock"
                          />
                          <Text
                            className="ml-1.5 text-black text-[12px] font-[500]"
                            size="txtPoppinsMedium12"
                          >
                            26 Apr
                          </Text>
                          </div>
                        </div>
                        <div className="flex w-full justify-center gap-[12px] items-center">
                    <div className="w-full ">
                    <ProgressBar completed={70} bgColor="#0080fc" color="#e6f3ff"  height="9px" customLabel="." />
                    </div>
                    <div className="w-[40px] h-[30px]">
                    <Text
                      className=" text-[16px] text-black"
                      size="txtPoppinsMedium16"
                    >
                      70%
                    </Text>
                    </div>
                    </div>
                        <div className="flex flex-row items-end justify-between mt-3 w-[96%] md:w-full">
                          <div className="flex font-inter mb-[3px] relative w-[29%]">
                            <div className="flex my-auto ">
                              <Img
                                className="h-7 my-auto rounded-[50%] w-7"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Img
                                className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                                src="images/img_ellipse4.png"
                                alt="ellipseFour"
                              />
                            <Text
                              className="bg-[#0080fc] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-xs w-7 z-[1]"
                              size="txtInterMedium12"
                            >
                              +3
                            </Text>
                            </div>

                          </div>
                          <Text
                            className="ml-[125px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[34px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                      <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                        <Text
                          className="text-[16px] font-[500] text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          Logo Redesign
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                          <Text
                            className="bg-[#e7f6f2] h-[17px] justify-center px-2.5 rounded-[9px] text-[11px] text-[#6fcf97] w-[45px]"
                            size="txtPoppinsRegular11"
                          >
                            Normal
                          </Text>
                          <div className="flex">
                          <Img
                            className="h-4 ml-[151px] text-[#0080fc] w-4"
                            src="images/time-past-svgrepo-com13.png"
                            alt="clock"
                          />
                          <Text
                            className="ml-1.5 text-black text-[12px] font-[500]"
                            size="txtPoppinsMedium12"
                          >
                            26 Apr
                          </Text>
                          </div>
                        </div>
                        <div className="flex w-full justify-center gap-[12px] items-center">
                    <div className="w-full ">
                    <ProgressBar completed={70} bgColor="#6fcf97" color="#e6f3ff"  height="9px" customLabel="." />
                    </div>
                    <div className="w-[40px] h-[30px]">
                    <Text
                      className=" text-[16px] text-black"
                      size="txtPoppinsMedium16"
                    >
                      70%
                    </Text>
                    </div>
                    </div>
                        <div className="flex flex-row items-end justify-between mt-3 w-[96%] md:w-full">
                          <div className="flex font-inter mb-[3px] relative w-[29%]">
                            <div className="flex my-auto ">
                              <Img
                                className="h-7 my-auto rounded-[50%] w-7"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Img
                                className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                                src="images/img_ellipse4.png"
                                alt="ellipseFour"
                              />
                            <Text
                              className="bg-[#0080fc] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-white-A700 text-xs w-7 z-[1]"
                              size="txtInterMedium12"
                            >
                              +3
                            </Text>
                            </div>
                          </div>
                          
                          <Text
                            className="ml-[125px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[34px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    

                  </div>
                </div>
                <div className="bg-[#e7f6f2] flex flex-1 flex-col gap-[21px] items-center justify-center pb-[20px] md:pb-[416px] rounded-[16px] w-full">
                  <div className="bg-[#3cd856] flex flex-row items-center justify-between p-2.5 rounded-tl-[16px] rounded-tr-[16px] w-full">
                    <div className=" flex gap-[10px]">
                    <Text
                        className=" text-white text-[20px] "
                        size="txtPoppinsMedium20"
                      >
                        One Hold
                      </Text>  

                      <Text
                        className="  text-black bg-white w-[27px] text-center h-[27pxpx] rounded-full text-[20px] font-[500]"
                        size="txtPoppinsMedium20"
                      >
                        4
                      </Text>
                    </div>
                    <Img
                      className="h-6 mr-[5px] w-6"
                      src="images/add-circle-svgrepo-com39.png"
                      alt="addcirclesvgrep"
                    />
                  </div>
                  <div className="flex flex-col gap-[22px] md:p-[22px] items-center justify-start w-[87%] md:w-full">
                    <div className="bg-white flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                      <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                        <Text
                          className="text-[16px] font-[500] text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          Website Redesign
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-[23px] py-[13px] w-full">
                          <Text
                            className="bg-[#edf4ff] h-[17px] justify-center px-2.5 rounded-[9px] text-[11px] text-[#0080fc] w-[45px]"
                            size="txtPoppinsRegular11"
                          >
                            High
                          </Text>
                          <div className="flex ">
                          <Img
                            className="h-4 ml-[151px] text-[#0080fc] w-4"
                            src="images/time-past-svgrepo-com13.png"
                            alt="clock"
                          />
                          <Text
                            className="ml-1.5 text-black text-[12px] font-[500]"
                            size="txtPoppinsMedium12"
                          >
                            26 Apr
                          </Text>
                          </div>
                        </div>
                        <div className="flex w-full justify-center gap-[12px] items-center">
                    <div className="w-full ">
                    <ProgressBar completed={60} bgColor="#0080fc" color="#e6f3ff"  height="9px" customLabel="." />
                    </div>
                    <div className="w-[40px] h-[30px]">
                    <Text
                      className=" text-[16px] text-black"
                      size="txtPoppinsMedium16"
                    >
                      60%
                    </Text>
                    </div>
                    </div>
                        <div className="flex flex-row items-end justify-between mt-3 w-[96%] md:w-full">
                          <div className="flex font-inter mb-[3px] relative w-[29%]">
                            <div className="flex my-auto">
                              <Img
                                className="h-7 my-auto rounded-[50%] w-7"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Img
                                className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                                src="images/img_ellipse4.png"
                                alt="ellipseFour"
                              />
                            <Text
                              className="bg-[#0080fc] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-xs w-7 z-[1]"
                              size="txtInterMedium12"
                            >
                              +3
                            </Text>
                            </div>

                          </div>
                          <Text
                            className="ml-[125px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[34px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                      <div className="flex flex-col items-start justify-start mt-0.5 w-full">
                        <Text
                          className="text-[16px] font-[500] text-black-900"
                          size="txtPoppinsMedium16"
                        >
                          Website Redesign
                        </Text>
                        <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                          <Text
                            className="bg-[#edf4ff] h-[17px] justify-center px-2.5 rounded-[9px] text-[11px] text-[#0080fc] w-[45px]"
                            size="txtPoppinsRegular11"
                          >
                            High
                          </Text>
                          <div className="flex">
                          <Img
                            className="h-4 ml-[151px] text-[#0080fc] w-4"
                            src="images/time-past-svgrepo-com13.png"
                            alt="clock"
                          />
                          <Text
                            className="ml-1.5 text-black text-[12px] font-[500]"
                            size="txtPoppinsMedium12"
                          >
                            26 Apr
                          </Text>
                          </div>
                        </div>
                        <div className="flex w-full justify-center gap-[12px] items-center">
                    <div className="w-full ">
                    <ProgressBar completed={60} bgColor="#f39a2b" color="#e6f3ff"  height="9px" customLabel="." />
                    </div>
                    <div className="w-[40px] h-[30px]">
                    <Text
                      className=" text-[16px] text-black"
                      size="txtPoppinsMedium16"
                    >
                      60%
                    </Text>
                    </div>
                    </div>
                        <div className="flex flex-row items-end justify-between mt-3 w-[96%] md:w-full">
                          <div className="flex font-inter mb-[3px] relative w-[29%]">
                            <div className="flex my-auto ">
                              <Img
                                className="h-7 my-auto rounded-[50%] w-7"
                                src="images/img_ellipse3.png"
                                alt="ellipseThree"
                              />
                              <Img
                                className="h-7 ml-[-7px] my-auto rounded-[50%] w-7 z-[1]"
                                src="images/img_ellipse4.png"
                                alt="ellipseFour"
                              />
                            <Text
                              className="bg-[#0080fc] text-white flex h-7 items-center justify-center ml-[-6px] my-auto rounded-[50%] text-center text-white-A700 text-xs w-7 z-[1]"
                              size="txtInterMedium12"
                            >
                              +3
                            </Text>
                            </div>
                          </div>
                          
                          <Text
                            className="ml-[125px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[34px] mt-[13px] text-black-900 text-xs"
                            size="txtPoppinsRegular12"
                          >
                            3
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
        
      </div>
    </>
  );
};

export default ThirtysevenPage;
