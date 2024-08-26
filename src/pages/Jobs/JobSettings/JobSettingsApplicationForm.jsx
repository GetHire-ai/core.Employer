import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { JobsLinks, JobsSettings } from "../JobsLinks";
import { Link } from "react-router-dom";

const JobSettingsApplicationForm = () => {
  
  const { id } = useParams();
  const Id = id
  const handleGoBackButton = () => {
    navigate(-1);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    switch (value) {
      case "Publish":
        navigate("/jobsPublishToJobBoards");
        break;
      case "Connect":
        navigate("/jobBoardsConnect");
        break;
      case "Receive":
        navigate("/jobReceiveJobBoardApplication");
        break;
      case "CollegeCampus":
        navigate("/jobPublishToCollege");
        break;
      case "PrestigeInstitue":
        navigate("/jobPrestigeInstitue");
        break;
      default:
        break;
    }
  };

  const path = useLocation();
  const navigate = useNavigate();
  const pathName = path?.pathname;

  return (
    <>
      <div className="font-[poppins] px-[18px] ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] lg:gap-0  lg:justify-between">
          <div
            onClick={handleGoBackButton}
            className="flex gap-[16px] justify-center"
          >
            <IoIosArrowDropleft size={"30px"} color="#5956e9" />
            <div>
              <h1 className="font-[500] font-[Poppins] text-[#000000] text-[24px]">
                Senior Product Designer
              </h1>
              <p className="font-[400] font-[Poppins] text-[14px] text-[#686868]">
                Indore: Full-time
              </p>
            </div>
          </div>
          <div className="font-[600] text-[12px] flex flex-col lg:flex-row gap-[12px]">
            <div className="bg-[#ffe2e5] w-[173px] p-[9px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#fa5a7d] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p className="text-[#151D48] font-[Poppins] font-[600] text-[12px]">
                Applications
              </p>
            </div>
            <div className="bg-[#fff4de] p-[9px] w-[173px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#ff947a] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p className="text-[#151D48] font-[Poppins] font-[600] text-[12px]">
                Interview Schedule
              </p>
            </div>
            <div className="bg-[#dcfce7] p-[9px] w-[173px]  rounded-[12px] flex justify-start items-center gap-[6px] ">
              <div className="bg-[#3cd856] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p className="text-[#151D48] font-[Poppins] font-[600] text-[12px]">
                Selected
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center border-b-[2px] border-[#9b9b9b] gap-[10px] lg:gap-0 w-full">
          <div className="text-[14px] font-[600] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
          <>
              <Link
                className={`${pathName === `/jobsSummary/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsSummary/${Id}`}
              >
                Summary
              </Link>
              <Link
                className={`${pathName === `/jobsApplication/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsApplication/${Id}`}
              >
                Application
              </Link>
              <Link
                className={`${pathName === `/jobsApplicationManager/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsApplicationManager/${Id}`}
              >
                Application Manager
              </Link>
              <Link
                className={`${pathName === `/jobReports/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobReports/${Id}`}
              >
                Reports
              </Link>
              <Link
                className={`${pathName === `/jobsSettings/${Id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                to={`/jobsSettings/${Id}`}
              >
                Settings
              </Link>
            </>
          </div>
          <div className="flex gap-[10px] justify-center lg:justify-end mb-[8px]">
            <Link
              to="/jobsShareandPromote"
              className="bg-[#fff] cursor-pointer flex justify-center items-center border-[1px] rounded-[4px] p-[4px] border-[#000] text-[12px] w-[227px] font-[600]"
            >
              Share & Promote
            </Link>
            <select
              className="border bg-[#000] text-white h-[32px] w-full rounded-[4px] font-[600] text-[12px] text-left"
              value={selectedOption}
              onChange={handleSelectOption}
            >
              <option value="">Published</option>
              <option value="Publish">Publish</option>
              <option value="Connect">Connect</option>
              <option value="Receive">Receive</option>
              <option value="CollegeCampus">CollegeCampus</option>
              <option value="PrestigeInstitue">PrestigeInstitue</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full mt-[30px] gap-[14px] ">
          <div className="bg-white lg:grid lg:grid-cols-6 rounded-[20px] w-full">
            <div className="p-[20px] w-full col-start-1 col-end-5">
              <div className="flex flex-col lg:flex-row py-[2px] px-[3px] w-[120px] lg:w-[337px] justify-between items-center rounded-[4px] bg-[#e0e7ed] text-[11px] font-[500] ">
                {JobsSettings.map((e) => {
                  return (
                    <>
                      <Link
                        key={e?.link}
                        className={`p-[8px] ${
                          pathName === e?.link ? "bg-white" : ""
                        }  rounded-[4px] font-[500] font-[Poppins]`}
                        to={e?.link}
                      >
                        {e?.name}
                      </Link>
                    </>
                  );
                })}
                {/* <button
                  onClick={() => handleSelectedOption("Interview")}
                  className={`p-[8px] ${
                    selectedOption === "Interview" ? "bg-white" : ""
                  }  rounded-[4px]`}
                >
                  Interview Process
                </button>
                <button
                  onClick={() => handleSelectedOption("Score")}
                  className={`p-[8px] ${
                    selectedOption === "Score" ? "bg-white" : ""
                  }  rounded-[4px]`}
                >
                  Score Card
                </button> */}
              </div>
              <div className="lg:px-[28px] py-[21px] flex flex-col gap-[24px]">
                <div className="flex gap-[10px] flex-col lg:flex-row justify-between lg:justify-between items-center">
                  <p className="text-[20px] font-[500] text-center">
                    Customize your application form
                  </p>
                  <div className="flex gap-[6px] ">
                    <button className="bg-white border-[#d9d9d9] border-[1px] text-[11px] font-[500] px-[10px] py-[4px] rounded-[4px]">
                      Preview
                    </button>
                    <button className="bg-white border-[#d9d9d9] border-[1px] text-[11px] font-[500] px-[10px] py-[4px] rounded-[4px]">
                      Cancel
                    </button>
                    <button className="bg-black text-[11px] font-[500] px-[10px] py-[4px] rounded-[4px] text-white">
                      Save
                    </button>
                  </div>
                </div>
                <div className="w-full border-[#D9D9D9] rounded-[10px] border-[1px] px-[10px] lg:px-[65px] py-[26px]">
                  <form className="flex flex-col gap-[18px]">
                    <div className="grid lg:grid-cols-2 gap-[18px]">
                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[12px] text-[#000000] font-[500]">
                          Full Name *
                        </label>
                        <input
                          className="w-full text-[11px] font-[400] p-[8px] h-[32px] rounded-[4px] border-[1px] border-[#f3f3f3] bg-[#f5f7fb]"
                          placeholder="Your Full Name"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[12px] font-[500]">Email *</label>
                        <input
                          className="w-full p-[8px] text-[11px] font-[400] h-[32px] rounded-[4px] border-[1px] border-[#f3f3f3] bg-[#f5f7fb]"
                          placeholder="Your Email"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <label className="text-[12px] font-[500]">Phone *</label>
                        <input
                          className="w-full p-[8px] text-[11px] font-[400] h-[32px] rounded-[4px] border-[1px] border-[#f3f3f3] bg-[#f5f7fb]"
                          placeholder="Your phone number"
                          type="number"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-[4px]">
                      <label className=" text-[12px] font-[500] leading-6 text-gray-900">
                        Portofolio
                      </label>
                      <div className=" bg-[#f5f7fb] flex justify-center rounded-[4px] border-[1px] border-[#f3f3f3] lg:px-[131px] pt-[51px] pb-[14px]">
                        <div className="text-center">
                          <div className=" flex text-[9px] font-[400] leading-6 ">
                            <label
                              for="file-upload"
                              class="relative cursor-pointer rounded-md text-indigo-600 focus-within:outline-none "
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1 text-[9px] font-[400]">
                              or Drag and Drop file or browse file
                            </p>
                          </div>
                          <p className="text-[9px] font-[400] leading-5">
                            Max Size 10 mb
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-[18px]">
                      <div className="flex flex-col w-full gap-[4px]">
                        <label className="text-[12px] font-[500]">
                          ZIP Code *
                        </label>
                        <input
                          className="w-full p-[8px] text-[11px] font-[400] h-[32px] rounded-[4px] border-[1px] border-[#f3f3f3] bg-[#f5f7fb]"
                          placeholder="Zip Code"
                          type="number"
                        />
                      </div>
                      <div className="flex flex-col w-full gap-[4px]">
                        <label className="text-[12px] font-[500]">
                          Country *
                        </label>
                        <input
                          className="w-full p-[8px] text-[11px] font-[400] h-[32px] rounded-[4px] border-[1px] border-[#f3f3f3] bg-[#f5f7fb]"
                          placeholder="Your Country"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mb-[114px] gap-[4px]">
                      <label className="text-[12px] font-[500]">Address *</label>
                      <textarea
                        className=" h-[160px]  bg-[#f5f7fb] text-[11px] font-[400] w-full rounded-[4px] border-[1px] p-[8px] text-gray-900  placeholder:text-[#8f8f8f]  "
                        placeholder="Your address"
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-white col-start-5 col-end-7 px-[23px] w-full">
              <p className="text-[20px] py-[20px] font-[500]">Configure</p>

              <button className="border-[#d9d9d9] mb-[35px] w-full  rounded-[4px] border-[1px] text-[11px] font-[500] px-[66px] py-[8px]">
                Add Group Field
              </button>

              <div>
                <p className="text-[14px] pb-[9px] font-[500]">
                  Drag & Drop Field
                </p>
                <div className="grid grid-cols-2 gap-[14px]">
                  <button className="border-[#f0f0f0] bg-[#D9D9D91A] border-[1px] rounded-[4px] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Paragraph
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Form Field
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Text Area
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Radio Button
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Checkbox
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Date Picker
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Dropdown
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Attachment
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Hyperlink
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    List Items
                  </button>
                </div>
              </div>
              <div className="mt-[27px]">
                <p className="text-[14px] pb-[9px] font-[500]">
                  Suggested Field
                </p>
                <div className="grid grid-cols-2 gap-[14px]">
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Full Name
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Gender
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Date of Birth
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Phone
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Email
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    City
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Address
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Zip code
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    States
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    country
                  </button>
                </div>
              </div>
              <div className="mt-[27px]">
                <p className="text-[14px] pb-[9px] font-[500]">
                  Smart Suggestions
                </p>
                <div className="grid grid-cols-2 gap-[14px]">
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Expected Salary
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Joining Date
                  </button>
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
                    Current Salary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSettingsApplicationForm;
