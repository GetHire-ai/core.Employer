import { SelectBox } from "components/SelectBox";
import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobsLinks, JobsSettings } from "../JobsLinks";
import { Link } from "react-router-dom";

const JobSettingsInterviewProcess = () => {
  const handleGoBackButton = () => {
    navigate(-1);
  };
  const chooseDateOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

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
            {JobsLinks.map((e) => {
              return (
                <>
                  <Link
                    key={e?.link}
                    className={`lg:py-[15px] ${
                      pathName === e?.link
                        ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                        : ""
                    }`}
                    to={e?.link}
                  >
                    {e?.name}
                  </Link>
                </>
              );
            })}
          </div>
          <div className="flex gap-[10px] justify-center lg:justify-end mb-[8px]">
            <Link
              to="/jobsShareandPromote"
              className="bg-[#fff] cursor-pointer flex justify-center items-center border-[1px] rounded-[4px] p-[4px] border-[#000] text-[12px] w-[227px] font-[600]"
            >
              Share & Promote
            </Link>
            <SelectBox
              className="border bg-[#000] w-full font-[600] text-[12px] text-left "
              placeholderClassName="text-white"
              isMulti={false}
              name="groupTen"
              options={chooseDateOptionsList}
              isSearchable={false}
              placeholder="Published"
              shape="round"
              size="xs"
            />
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
                        }  rounded-[4px]`}
                        to={e?.link}
                      >
                        {e?.name}
                      </Link>
                    </>
                  );
                })}
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
                <div className="w-full border-[#d9d9d9] rounded-[10px] border-[1px] py-[30px]">
                  <div className="flex flex-col gap-[6px]">
                    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-[16px]">
                      <p className="text-[16px] w-[138px] font-[500] border-[1px] text-[#8d8d8d] border-black  py-[14px] pl-[11px] rounded-[8px]">
                        Round 1
                      </p>
                      <div className="relative ">
                        <SelectBox
                          className="border border-[#5956e9] bg-white flex w-[260px] h-[52px] font-[500] text-[16px] "
                          placeholderClassName="text-[#5956e9]"
                          isMulti={false}
                          name="groupTen"
                          options={chooseDateOptionsList}
                          isSearchable={false}
                          placeholder="Skill Assessment"
                          shape="round"
                          size="xs"
                        />
                        <img
                          src="/images/cancel-svgrepocom.png"
                          className="absolute right-[-13px] top-[11px] w-[28px] h-[28px] rounded-[50%]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-[16px]">
                      <p className="text-[16px] w-[138px] font-[500] border-[1px] text-[#8d8d8d] border-black  py-[14px] pl-[11px] rounded-[8px]">
                        Round 2
                      </p>
                      <div className="relative ">
                        <SelectBox
                          className="border border-[#5956e9] bg-white flex w-[260px] h-[52px] font-[500] text-[16px] "
                          placeholderClassName="text-[#5956e9]"
                          isMulti={false}
                          name="groupTen"
                          options={chooseDateOptionsList}
                          isSearchable={false}
                          placeholder="Technical Interview"
                          shape="round"
                          size="xs"
                        />
                        <img
                          src="/images/cancel-svgrepocom.png"
                          className="absolute right-[-13px] top-[11px] w-[28px] h-[28px] rounded-[50%]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-[16px]">
                      <p className="text-[16px] w-[138px] font-[500] border-[1px] text-[#8d8d8d] border-black  py-[14px] pl-[11px] rounded-[8px]">
                        Round 3
                      </p>
                      <div className="relative ">
                        <SelectBox
                          className="border border-[#5956e9] bg-white flex w-[260px] h-[52px] font-[500] text-[16px] "
                          placeholderClassName="text-[#5956e9]"
                          isMulti={false}
                          name="groupTen"
                          options={chooseDateOptionsList}
                          isSearchable={false}
                          placeholder="AI Based Video"
                          shape="round"
                          size="xs"
                        />
                        <img
                          src="/images/cancel-svgrepocom.png"
                          className="absolute right-[-13px] top-[11px] w-[28px] h-[28px] rounded-[50%]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-[16px]">
                      <p className="text-[16px] w-[138px] font-[500] border-[1px] text-[#8d8d8d] border-black  py-[14px] pl-[11px] rounded-[8px]">
                        Final Round
                      </p>
                      <div className="relative ">
                        <SelectBox
                          className="border border-[#5956e9] bg-white flex w-[260px] h-[52px] font-[500] text-[16px] "
                          placeholderClassName="text-[#5956e9]"
                          isMulti={false}
                          name="groupTen"
                          options={chooseDateOptionsList}
                          isSearchable={false}
                          placeholder="Off line- Online Interview"
                          shape="round"
                          size="xs"
                        />
                        <img
                          src="/images/cancel-svgrepocom.png"
                          className="absolute right-[-13px] top-[11px] w-[28px] h-[28px] rounded-[50%]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="mt-[18px] flex justify-center lg:ml-[-307px] items-center">
                      <button className="bg-[#5956e9] w-[110px] h-[40px] text-white rounded-[7px] text-[12px] font-[500]">
                        Add Round
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row px-[20px] mt-[60px] gap-[20px]">
                    <div className="flex w-full flex-col gap-[10px]">
                      <p className="text-[16px] font-[600]">
                        Lindly Check the Skills
                      </p>
                      <input
                        type="text"
                        placeholder="SEO & SEM"
                        className="bg-[#f5f4f8] placeholder:text-[#8d8d8d] rounded-[8px] px-[11px] py-[14px] text-[16px] font-[500]"
                      />
                    </div>
                    <div className="flex w-full flex-col gap-[10px]">
                      <p className="text-[16px] font-[600]">
                        Any Plateform or Qualifiaction
                      </p>
                      <input
                        type="text"
                        placeholder="Yes"
                        className="bg-[#f5f4f8] placeholder:text-[#8d8d8d] rounded-[8px] px-[11px] py-[14px] text-[16px] font-[500]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row px-[20px] mb-[113px] mt-[18px] gap-[20px]">
                    <div className="flex w-full flex-col gap-[10px]">
                      <div className="flex gap-[16px]">
                        <p className="text-[16px] font-[600]">
                          Finalise Questioner
                        </p>
                        <button className="bg-[#5956e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white">
                          Edit with AI
                        </button>
                      </div>
                      <div class="flex flex-col rounded-[4px] bg-[#f5f4f8] px-[11px] py-[16px] ">
                        <input
                          type="text"
                          className="bg-[#f5f4f8] text-[11px] font-[500] "
                          placeholder="selected Intern's day-to-day responsibilities include."
                        />
                        <p>1.</p>
                        <p>2.</p>
                        <p>3.</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-full gap-[10px]">
                      <div className="flex gap-[16px]">
                        <p className="text-[16px] font-[600]">
                          share Availiblity
                        </p>
                        <button className="bg-[#5956e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white">
                          Edit with AI
                        </button>
                      </div>
                      <div class="flex flex-col rounded-[4px] bg-[#f5f4f8] px-[11px] py-[16px] ">
                        <input
                          type="text"
                          className="bg-[#f5f4f8] text-[11px] font-[500] "
                          placeholder="selected Intern's day-to-day responsibilities include."
                        />
                        <p>1.</p>
                        <p>2.</p>
                        <p>3.</p>
                      </div>
                    </div>
                  </div>
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
                  Screening Rounds
                </p>
                <div className="grid grid-cols-2 gap-[14px]">
                  <button className="border-[#f0f0f0] border-[1px] rounded-[4px] bg-[#D9D9D91A] text-[11px] font-[500] px-[22px] py-[8px] ">
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
                  Interview Guidelines
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSettingsInterviewProcess;
