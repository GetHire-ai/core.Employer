import { SelectBox } from "components/SelectBox";
import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobsLinks, JobsSettings } from "../JobsLinks";
import { Link } from "react-router-dom";

const JobSettingsScoreCard = () => {
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
          <div className="bg-white rounded-[20px] w-full">
            <div className="p-[20px] w-full">
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
                    Customize your Score Card
                  </p>
                  <div className="flex gap-[6px] ">
                    <button className="bg-white border-[#d9d9d9] border-[1px] text-[11px] font-[500] px-[10px] py-[4px] rounded-[4px]">
                      Cancel
                    </button>
                    <button className="bg-black text-[11px] font-[500] px-[10px] py-[4px] rounded-[4px] text-white">
                      Save
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <div className="w-full flex justify-between items-center bg-black bg-opacity-[6%] border-[#d9d9d9] rounded-[10px] border-[1px] px-[41px] py-[14px]">
                    <div>
                      <p className="text-[12px] font-[500]">
                        Inter Personal Skills
                      </p>
                      <p className="text-[#7b7b7b] text-[11px] font-[400]">
                        How good are they or making up new conversation have
                        they put you{" "}
                      </p>
                    </div>
                    <div>
                      <img
                        src="/images/img_user.svg"
                        className="w-[15px] h-[15px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full border-[#d9d9d9] rounded-[10px] border-[1px] px-[22px] py-[20px]">
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] font-[500]">Edit Score Card</p>
                      <div className="flex gap-[6px] ">
                        <button className="bg-white border-[#d9d9d9] border-[1px] text-[11px] font-[500] px-[10px] py-[4px] rounded-[4px]">
                          Cancel
                        </button>
                        <button className="bg-black text-[11px] font-[500] px-[10px] py-[4px] rounded-[4px] text-white">
                          Save
                        </button>
                      </div>
                    </div>
                    <div className="mt-[25px] flex flex-col gap-[17px]">
                      <div className="flex flex-col gap-[4px]">
                        <p className="text-[12px] font-[500]">
                          Score Card Type
                        </p>
                        <input
                          type="text"
                          className="bg-[#f5f7fb] rounded-[4px] text-[11px] font-[400] w-[218px] p-[8px]"
                          placeholder="Rating With Comments"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <p className="text-[12px] font-[500]">Title</p>
                        <input
                          type="text"
                          className="bg-[#f5f7fb] rounded-[4px] text-[11px] font-[400] p-[8px]"
                          placeholder="title name"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <p className="text-[12px] font-[500]">Hint</p>
                        <input
                          type="text"
                          className="bg-[#f5f7fb] rounded-[4px] text-[11px] font-[400] p-[8px]"
                          placeholder="Are You That"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full   border-[#d9d9d9] rounded-[10px] border-[1px] px-[41px] py-[14px]">
                    <div>
                      <p className="text-[12px] font-[500]">
                        Communication Skills
                      </p>
                      <p className="text-[#7b7b7b] text-[11px] font-[400]">
                        This covers verbal and written skills, are they also to
                        communicate their intend to clear.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="w-full  border-[#d9d9d9] rounded-[10px] border-[1px] px-[41px] py-[14px]">
                    <div>
                      <p className="text-[12px] font-[500]">Primary Skills</p>
                      <p className="text-[#7b7b7b] text-[11px] font-[400]">
                        This covers verbal and written skills, are they also to
                        communicate their intend to clear.{" "}
                      </p>
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

export default JobSettingsScoreCard;
