import { SelectBox } from "components/SelectBox";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const CreateAJobManualJobDescription = () => {
  const navigate = useNavigate();
  const handleCancelbutton = () => {
    navigate(-1);
  };

  const chooseDateOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-[30px] shadow-md w-full md:w-[80%] lg:w-[981px] mt-[1300px] md:mt-[700px] lg:mt-[540px] ">
          <div className="flex justify-between ">
            <div className="lg:w-[95%] flex justify-center">
              <p className="text-[32px] text-center text-black font-[600]">
                Create a Job With Manual
              </p>
            </div>
            <div className="lg:w-[5%] flex justify-end">
              <img
                onClick={handleCancelbutton}
                src="/images/cancel-svgrepocom.svg"
                className="w-[40px] h-[40px]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[25px] mt-[29px] justify-center items-center">
            <div className="flex justify-center items-center gap-[7px]">
              <FaCircleCheck color="#00c500" size={"20px"} />
              <p>Job Application</p>
            </div>
            <div className="flex justify-center items-center gap-[7px]">
              <FaCircleCheck color="#00c500" size={"20px"} />
              <p>Job Description</p>
            </div>
            <div className="flex justify-center items-center gap-[7px]">
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-[50%] border-[1px] border-black">
                3
              </div>
              <p>Interview Process</p>
            </div>
          </div>
          <div className="bg-[#f6f9fe] lg:mx-[97px] mt-[29px] text-center text-[16px] font-[500] text-[#7e7e7e] rounded-[30px] py-[17px] px-[17px] lg:px-[60px] flex justify-center items-center">
            <p>
              A job represents a new opening, an open position or a vacancy
              listing. Creating a job will allow you to add candidates to that
              job and advertise it on your career page and job boards.
            </p>
          </div>
          <div className="w-full border-[#d9d9d9]  rounded-[10px] pt-[30px]">
            <div className="flex flex-col gap-[6px]">
              <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-[16px]">
                <p className="text-[16px] w-[138px] font-[500] border-[1px] text-[#8d8d8d] border-black  py-[14px] pl-[11px] rounded-[8px]">
                  Round 1
                </p>
                <div className="relative ">
                  <SelectBox
                    className="border border-[#5956e9] bg-white w-[260px] h-[52px] font-[500] text-[16px] "
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
                    className="border border-[#5956e9] bg-white w-[260px] h-[52px] font-[500] text-[16px] "
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
                    className="border border-[#5956e9] bg-white w-[260px] h-[52px] font-[500] text-[16px] "
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
                    className="border border-[#5956e9] bg-white w-[260px] h-[52px] font-[500] text-[16px] "
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
                <button className="bg-black w-[110px] h-[40px] text-white rounded-[7px] text-[12px] font-[500]">
                  Add Round
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:mx-[97px] lg:flex-row px-[20px] mt-[60px] gap-[20px]">
              <div className="flex w-full flex-col gap-[10px]">
                <p className="text-[16px] font-[600]">
                  kindly Check the Skills
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
            <div className="flex flex-col lg:mx-[97px] lg:flex-row px-[20px] my-[18px] gap-[20px]">
              <div className="flex w-full flex-col gap-[10px]">
                <div className="flex gap-[16px]">
                  <p className="text-[16px] font-[600]">Finalise Questioner</p>
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
                  <p className="text-[16px] font-[600]">share Availiblity</p>
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
          <div className="flex justify-center items-center mb-[51px]">
            <Link className="bg-black rounded-[8px] px-[62px] py-[11px] text-white text-[18px] font-[500]">
              Save & Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAJobManualJobDescription;
