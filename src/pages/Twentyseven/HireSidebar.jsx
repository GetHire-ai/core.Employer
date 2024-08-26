import React, { useRef, useState } from "react";
import { Button } from "components";
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from "react-icons/io";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { NewHireLink } from "./NewHireLink";
import { FaRegCommentDots } from "react-icons/fa";

function HireSidebar({ side1, openSideBar }) {
  const [buttonN, setButtonN] = useState("Document");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleClickImage = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="w-full">
        <div
          className="overlay"
          style={side1 ? { right: 0 } : { right: "100%" }}
          onClick={openSideBar}
        ></div>
        <div
          className="sidebar-list"
          style={side1 ? { right: 0 } : { right: "-60%" }}
        >
          <div
            className="w-[29px] absolute top-[50%] h-[29px] left-[-2%] flex justify-center items-center mr-[-10px]"
            onClick={() => openSideBar()}
          >
            <img src="/images/sidebar-arrow.svg" alt="" />
          </div>
          <div className="p-[27px] flex flex-col lg:flex-row gap-[20px] lg:gap-0 justify-between items-center w-full">
            <div className="flex gap-[6px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/img_ellipse799.png"
                  className="w-[64px] h-[64px] rounded-[50%]"
                  alt=""
                />
                <div className="w-[49px] bg-white justify-center items-center gap-[6px] h-[16px] flex rounded-[17px]">
                  <IoIosStar size={"9px"} color="#fca120" />
                  <p className="text-[9px] font-[400]">4.0</p>
                </div>
              </div>
              <div>
                <div className="flex gap-[6px] justify-center items-center">
                  <p className="text-[20px] font-[500]">Amir Shaikh</p>
                  <div className="border-[1px] rounded-[3px] bg-[#e6f3f2] text-center border-[#53c9a2] w-[47px] h-[17px]">
                    <p className="text-[12px] font-[400] text-[#53c9a3]">
                      Active
                    </p>
                  </div>
                </div>
                <p className="text-[12px] font-[400] text-[#7a7a7a]">
                  Design Team. UI Designer
                </p>
                <div className="flex gap-[3px]">
                  <div className="bg-[#fe9f47] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]">
                    1
                  </div>
                  <div className="bg-[#fe9f47] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]">
                    2
                  </div>
                  <div className="bg-[#fe9f47] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]">
                    3
                  </div>
                  <div className="bg-[#cdcdcd] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]"></div>
                  <div className="bg-[#cdcdcd] w-[27px] h-[13px] rounded-[2px] flex justify-center items-center text-[12px] font-[400]"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex gap-[8px]">
                <IoIosArrowBack
                  className="w-[29px] h-[29px] bg-white rounded-[50%]"
                  color="#5956e9"
                  width={"5.8px"}
                />
                <IoIosArrowForward
                  className="w-[29px] h-[29px] bg-white rounded-[50%]"
                  color="#5956e9"
                  width={"5.8px"}
                />
              </div>
              <div className="fle gap-[9px]">
                <button className="text-[9px] pl-[31px] pr-[7px] py-[9px] bg-white font-[400] border-[1px] border-[#ebebeb] rounded-[4px] ">
                  Send Message
                </button>
                <button className="text-[9px] pl-[31px] pr-[7px] py-[9px] bg-white font-[400] border-[1px] border-[#ebebeb] rounded-[4px] ">
                  Send Email
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white w-full">
            <div className="text-[14px] border-b-[2px] border-[#e8e8e8] px-[49px] py-[10px] lg:py-0 font-[500] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
              {NewHireLink.map((e) => {
                return (
                  <>
                    <Button
                      onClick={() => setButtonN(e?.name)}
                      key={e?.name}
                      className={`${
                        buttonN === e?.name
                          ? "lg:border-[#5956e9] font-[Poppins] font-[600] text-[14px] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                          : "font-[Poppins] font-[600] text-[14px]"
                      }`}
                    >
                      {e?.name}
                    </Button>
                  </>
                );
              })}
            </div>
          </div>

          {buttonN === "Document" && (
            <div className="px-[48px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
              <p className="text-[14px] font-[600]">Documents</p>
              <div className="col-span-full">
                <div className="mt-2 flex justify-center rounded-[6px] border-[1px] border-dashed border-gray-900/25 px-6 py-10">
                  <div
                    className="text-center cursor-pointer flex flex-col justify-center items-center"
                    onClick={handleClickImage}
                  >
                    <img
                      src="/images/document-upload.png"
                      className="w-[44px] h-[44px] p-[10px] bg-[#f5f5f5] rounded-[50%]"
                      alt=""
                    />
                    <div className="mt-[12px] flex  leading-6">
                      <label
                        for="file-upload"
                        className="relative cursor-pointer text-[14px] bg-white font-[500] text-[#5956e9] "
                      >
                        <span>Click to upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ display: "none" }}
                          ref={fileInputRef}
                        />
                      </label>
                      <p className="pl-1 text-[14px] font-[400]">
                        or drag and drop
                      </p>
                    </div>
                    <p className="text-[12px] font-[400]">
                      (Max, File size: 25 MB)
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-[1px] flex justify-between items-center rounded-[6px] border-[#cacaca] p-[16px] bg-white">
                <div className="flex gap-[20px]">
                  <img
                    src="/images/document-text.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[14px] font-[500] font-[Hind]">
                      HannahBusing_Resume.pdf
                    </p>
                    <p className="text-[12px] font-[400] text-[#989692]">
                      200 KB
                    </p>
                  </div>
                </div>
                <img
                  src="/images/download.png"
                  className="w-[24px] h-[24px]"
                  alt=""
                />
              </div>
              <div className="border-[1px] flex justify-between items-center rounded-[6px] border-[#cacaca] p-[16px] bg-white">
                <div className="flex gap-[20px]">
                  <img
                    src="/images/document-text.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[14px] font-[500] font-[Hind]">
                      HannahBusing_Resume.pdf
                    </p>
                    <p className="text-[12px] font-[400] text-[#989692]">
                      200 KB
                    </p>
                  </div>
                </div>
                <img
                  src="/images/download.png"
                  className="w-[24px] h-[24px]"
                  alt=""
                />
              </div>
            </div>
          )}
          {buttonN === "Resume" && (
            <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
              <p className="text-[14px] font-[600]">Amir Shaikh_Resume.Pdf</p>
              <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                  <Viewer
                    fileUrl={"/images/resume.pdf"}
                    plugins={[defaultLayoutPlugin]}
                  />
                </Worker>
              </div>
            </div>
          )}
          {buttonN === "Joining Details" && (
            <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
              <div className="flex flex-col gap-[21px]">
                <p className="text-[14px] font-[400px]">
                  {" "}
                  Stage of:
                  <span className="text-[14px] font-[600]">
                    {" "}
                    Design Team. UI Designer
                  </span>
                </p>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                  <div className="relative text-center">
                    <img src="/images/Vector 65.png" alt="" />
                    <p className="absolute w-full top-[16px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Screening
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 66.png" alt="" />
                    <p className="absolute w-full top-[16px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Design Challenge
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 67.png" alt="" />
                    <p className="absolute w-full top-[16px] left-[73px] text-[12px] font-[500] text-white transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Interview
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 68.png" alt="" />
                    <p className="absolute w-full top-[16px] left-[73px] text-[12px] font-[500] text-[#000000] transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Test
                    </p>
                  </div>
                  <div className="relative text-center">
                    <img src="/images/Vector 69.png" alt="" />
                    <p className="absolute w-full top-[16px] left-[73px] text-[12px] font-[500] text-[#000000] transform -translate-x-1/2 -translate-y-1/2 m-0">
                      Hired
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] ">Detail</p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center  gap-[28px] py-[17px] px-[10px] lg:justify-between">
                  <div className=" flex flex-col w-[40%] gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[400] font-[Poppins] text-[#818181]">
                        Current status
                      </p>
                      <div className="flex gap-[3px]">
                        <div className="w-[47px] h-[17px] font-[Poppins] rounded-[16px] bg-[#53c9a2] text-white text-center text-[11px] font-[400]">
                          Active
                        </div>
                        <p className="text-[11px] font-[500] font-[Poppins] text-[#53c9a2]">
                          (View Workflow)
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] font-[Poppins] text-[#818181]">
                        Stage:
                      </p>
                      <p className="text-[11px] font-[500] font-[Poppins]">
                        Interview
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] font-[Poppins] text-[#818181]">
                        Date:
                      </p>
                      <p className="text-[11px] font-[500] font-[Poppins]">
                        14-16-2023
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[60%] flex-col gap-[17px]">
                    <div>
                      <p className="text-[11px] font-[Poppins] font-[400] text-[#818181]">
                        Assignee:
                      </p>
                      <div className="flex gap-[4px]">
                        <img
                          src="/images/img_ellipse3978.png"
                          className="w-[18px] h-[18px] rounded-[50%]"
                          alt=""
                        />
                        <p className="text-[11px] font-[Poppins] font-[500]">
                          Andri R. Herdiansyah
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[400] font-[Poppins] text-[#818181]">
                        Owner:
                      </p>
                      <div className="flex gap-[4px]">
                        <img
                          src="/images/img_ellipse799.png"
                          className="w-[18px] h-[18px] rounded-[50%]"
                          alt=""
                        />
                        <p className="text-[11px] font-[500] font-[Poppins]">
                          Bogus Fikri
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center p-[8px]">
                  <button className="border-[1px] font-[Poppins] border-black text-[11px] font-[500] bg-white rounded-[6px] py-[8px] px-[18px]">
                    Move Next Status
                  </button>
                </div>
              </div>

              <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
                <div className="border-b-[1px] border-[#d9d9d9] w-full">
                  <div className="flex w-full px-[26px]  py-[13px]  justify-between items-center">
                    <p className="text-[14px] font-[600] font-[Poppins] ">
                      Notes
                    </p>

                    <p className="text-[11px] font-[500] font-[Poppins]">
                      Recent First
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="flex justify-between items-center px-[26px]  border-[#d9d9d9] border-b-[1px] py-[17px]">
                    <div className=" flex flex-col  gap-[17px] ">
                      <p className="text-[11px] font-[600] font-[Poppins] text-[#5956e9]">
                        Add Note
                      </p>
                      <div className="flex gap-[8px]">
                        <img
                          src="/images/img_ellipse799.png"
                          className="w-[40px] h-[40px] rounded-[50%]"
                          alt=""
                        />
                        <div className="flex flex-col gap-[8px]">
                          <div>
                            <p className="text-[11px] font-[Poppins] font-[500]">
                              Bogus Fikri{" "}
                              <span className="text-[9px] font-[400]">
                                13 march 2021 _ 04:23 Pm
                              </span>
                            </p>
                            <p className="text-[9px] font-[Poppins] text-[#696969] font-[400]">
                              Candidate successfull interview for this stages.
                            </p>
                          </div>
                          <p className="text-[9px] font-[Poppins] font-[500] text-[#5956e9]">
                            2 Reply
                          </p>
                        </div>
                      </div>
                    </div>
                    <FaRegCommentDots size={"16px"} />
                  </div>
                  <div className="flex justify-between items-center px-[26px]  border-[#d9d9d9] border-b-[1px] py-[17px]">
                    <div className="flex gap-[8px]">
                      <img
                        src="/images/img_ellipse799.png"
                        className="w-[40px] h-[40px] rounded-[50%]"
                        alt=""
                      />
                      <div className="flex flex-col gap-[8px]">
                        <div>
                          <p className="text-[11px] font-[500] font-[Poppins]">
                            Bogus Fikri
                            <span className="text-[9px] font-[Poppins] font-[400]">
                              13 march 2021 _ 04:23 Pm
                            </span>
                          </p>
                          <p className="text-[9px] font-[Poppins] text-[#696969] font-[400]">
                            Candidate successfull interview for this stages.
                          </p>
                        </div>
                        <p className="text-[9px] font-[Poppins] font-[500] text-[#5956e9]">
                          2 Reply
                        </p>
                      </div>
                    </div>
                    <FaRegCommentDots size={"16px"} />
                  </div>
                  <div className="flex flex-col gap-[17px]"></div>
                </div>
              </div>
            </div>
          )}
          {buttonN === "Settings" && (
            <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
              <div className="flex justify-between items-center text-[14px] font-[600]">
                <p className="font-[Poppins]">Interview List</p>
                <p className="text-[#5956e9] font-[Poppins]">Add Schedule Interview</p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="font-[Poppins] text-[12px] font-[400]">Mar 16, 2021 (Thuesday)</p>
                  <div className="flex gap-[8px]">
                    <img
                      src="/images/edit.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <img
                      src="/images/deletevector.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border-[1px] w-full flex rounded-[12px] mt-[15px] border-[#d9d9d9]">
                  <div className="bg-[#55dde5] w-[7px] rounded-tl-[12px] rounded-bl-[12px]"></div>
                  <div className="grid grid-cols-2 gap-[20px] lg:flex justify-between w-full items-center px-[14px] py-[20px]">
                    <div className="flex gap-[12px]">
                      <img
                        src="/images/img_ellipse4141.png"
                        className="w-[42px] h-[42px] rounded-[50%]"
                        alt=""
                      />
                      <div>
                        <p className="text-[11px] font-[Poppins] font-[500]">Bogus Fikri</p>
                        <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                          written Test - Onsite
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[500] font-[Poppins]">3:30 - 4:00pm</p>
                      <p className="text-[11px] font-[400] font-[Poppins] text-[#757575]">
                        1 Hour Interview
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                        Townhall room 12
                      </p>
                      <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                        Scheduled by 
                        <span className="font-[400] font-[Poppins] text-black">
                          Bogus Fikri
                        </span>
                      </p>
                    </div>
                    <button className="border-[1px] font-[Poppins] w-[131px] h-[33px] border-[#000] rounded-[4px] text-center text-[11px] font-[500] ">
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-[Poppins] text-[12px] font-[400]">Mar 16, 2021 (Thuesday)</p>
                  <div className="flex gap-[8px]">
                    <img
                      src="/images/edit.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <img
                      src="/images/deletevector.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border-[1px] w-full flex rounded-[12px] mt-[15px] border-[#d9d9d9]">
                  <div className="bg-[#E3C145] w-[7px] rounded-tl-[12px] rounded-bl-[12px]"></div>
                  <div className="grid grid-cols-2 gap-[20px] lg:flex justify-between w-full items-center px-[14px] py-[20px]">
                    <div className="flex gap-[12px]">
                      <img
                        src="/images/img_ellipse4141.png"
                        className="w-[42px] h-[42px] rounded-[50%]"
                        alt=""
                      />
                      <div>
                        <p className="text-[11px] font-[Poppins] font-[500]">Bogus Fikri</p>
                        <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                          written Test - Onsite
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[500] font-[Poppins]">3:30 - 4:00pm</p>
                      <p className="text-[11px] font-[400] font-[Poppins] text-[#757575]">
                        1 Hour Interview
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                        Townhall room 12
                      </p>
                      <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                        Scheduled by 
                        <span className="font-[400] font-[Poppins] text-black">
                          Bogus Fikri
                        </span>
                      </p>
                    </div>
                    <button className="border-[1px] font-[Poppins] w-[131px] h-[33px] border-[#000] rounded-[4px] text-center text-[11px] font-[500] ">
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <p className="font-[Poppins] text-[12px] font-[400]">Mar 16, 2021 (Thuesday)</p>
                  <div className="flex gap-[8px]">
                    <img
                      src="/images/edit.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <img
                      src="/images/deletevector.png"
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                  </div>
                </div>
                <div className="border-[1px] w-full flex rounded-[12px] mt-[15px] border-[#d9d9d9]">
                  <div className="bg-[#E3C145] w-[7px] rounded-tl-[12px] rounded-bl-[12px]"></div>
                  <div className="grid grid-cols-2 gap-[20px] lg:flex justify-between w-full items-center px-[14px] py-[20px]">
                    <div className="flex gap-[12px]">
                      <img
                        src="/images/img_ellipse4141.png"
                        className="w-[42px] h-[42px] rounded-[50%]"
                        alt=""
                      />
                      <div>
                        <p className="text-[11px] font-[Poppins] font-[500]">Bogus Fikri</p>
                        <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                          written Test - Onsite
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-[500] font-[Poppins]">3:30 - 4:00pm</p>
                      <p className="text-[11px] font-[400] font-[Poppins] text-[#757575]">
                        1 Hour Interview
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                        Townhall room 12
                      </p>
                      <p className="text-[11px] font-[Poppins] font-[400] text-[#757575]">
                        Scheduled by 
                        <span className="font-[400] font-[Poppins] text-black">
                          Bogus Fikri
                        </span>
                      </p>
                    </div>
                    <button className="border-[1px] font-[Poppins] w-[131px] h-[33px] border-[#000] rounded-[4px] text-center text-[11px] font-[500] ">
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HireSidebar;
