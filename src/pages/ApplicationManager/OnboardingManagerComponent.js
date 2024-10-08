import React, { useState } from "react";
import { Link } from "react-router-dom";

const OnboardingManagerComponent = () => {
  const [selectedOption, setSelectedOption] = useState("Active");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const [selectedDesingOption, setSelectedDesingOption] = useState("Design");
  const [selectedDevelopmentOption, setSelectedDevelopmentOption] =
    useState("Development");
    const [selectedMarketingOption, setSelectedMarketingOption] =
    useState("Development");

  return (
    <div className="">
      <div className="pt-[12px] pl-[17px] border-b-2">
        <h1 className="font-[500] font-[Poppins] text-[20px]">
          Onboarding Manager
        </h1>
        <div className="flex justify-around font-[500] mt-[22px] text-[14px] font-[Poppins]">
          <Link
            className={`${
              selectedOption === "Active"
                ? " border-[#5956e9] border-b-[3px]"
                : ""
            }`}
            to="#"
            onClick={() => handleOptionClick("Active")}
          >
            Active
          </Link>
          <Link
            className={`${
              selectedOption === "Hold"
                ? " border-[#5956e9] border-b-[3px]"
                : ""
            }`}
            to="#"
            onClick={() => handleOptionClick("Hold")}
          >
            On Hold
          </Link>
          <Link
            className={`${
              selectedOption === "Completed"
                ? " border-[#5956e9] border-b-[3px]"
                : ""
            }`}
            to="#"
            onClick={() => handleOptionClick("Completed")}
          >
            Completed
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-[17px] my-[36px]">
        <div className="bg-[#f6f5fd] rounded-[16px] ">
          <div className="flex flex-col items-center gap-8 m-4">
            <h1 className="font-[500] text-[20px] font-[poppins]">
              Senior Product manager
            </h1>
            <div className="flex justify-around w-full">
              <div className="flex flex-col font-[500] font-[poppins] items-center">
                <h1 className="text-[20px]">20</h1>
                <p className="text-[13px]">Total Candidates</p>
              </div>
              <div className="flex flex-col font-[500] font-[poppins] items-center">
                <h1 className="text-[20px]">11</h1>
                <p className="text-[13px]">Qualified</p>
              </div>
            </div>
            <div className="flex justify-around w-full m-2 font-[500]">
              <button
                onClick={() => setSelectedDesingOption("Design")}
                className={`${
                  selectedDesingOption === "Design"
                    ? "bg-[#0080fc] text-white"
                    : ""
                }  w-[115px] h-[24px] rounded-[16px] `}
              >
                <p className="text-[10px]"> Design</p>
              </button>
              <button
                onClick={() => setSelectedDesingOption("OnSite")}
                className={`${
                  selectedDesingOption === "OnSite"
                    ? "bg-[#0080fc] text-white"
                    : ""
                }  w-[115px] h-[24px] rounded-[16px]`}
              >
                <p className="text-[10px]"> On Site</p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#eef8ff] rounded-[16px]">
          <div className="flex flex-col font-[poppins] items-center gap-8 m-4">
            <h1 className="font-[500]  text-[20px]">Software Engineer</h1>
            <div className="flex justify-around w-full">
              <div className="flex flex-col font-[500] items-center">
                <h1 className="text-[20px] ">20</h1>
                <p className="text-[13px] ">Total Candidates</p>
              </div>
              <div className="flex flex-col font-[500] items-center">
                <h1 className="text-[20px]">11</h1>
                <p className="text-[13px] ">Qualified</p>
              </div>
            </div>
            <div className="flex justify-around w-full m-2 font-[500]">
              <button
                onClick={() => setSelectedDevelopmentOption("Development")}
                className={`${
                  selectedDevelopmentOption === "Development"
                    ? "bg-[#0080fc] text-white"
                    : ""
                }  w-[115px] h-[24px] rounded-[16px] `}
              >
                <p className="text-[10px]"> Development</p>
              </button>
              <button
                onClick={() => setSelectedDevelopmentOption("Remote")}
                className={`${
                  selectedDevelopmentOption === "Remote"
                    ? "bg-[#0080fc] text-white"
                    : ""
                }  w-[115px] h-[24px] rounded-[16px]`}
              >
                <p className="text-[10px]"> Remote</p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#eef8ff] rounded-[16px]">
          <div className="flex flex-col font-[Poppins] items-center gap-8 m-4">
            <h1 className="font-[500] text-[20px]">Sr. Digital Marketing</h1>
            <div className="flex justify-around w-full">
              <div className="flex flex-col font-[500] items-center">
                <h1 className="text-[20px]">20</h1>
                <p className="text-[13px]">Total Candidates</p>
              </div>
              <div className="flex flex-col font-[500] items-center">
                <h1 className="text-[20px]">11</h1>
                <p className="text-[13px]">Qualified</p>
              </div>
            </div>
            <div className="flex justify-around w-full m-2 font-[500]">
              <button
                onClick={() => setSelectedMarketingOption("Development")}
                className={`${
                  selectedMarketingOption === "Development"
                    ? "bg-[#0080fc] text-white"
                    : ""
                }  w-[115px] h-[24px] rounded-[16px]`}
              >
                <p className="text-[10px]"> Development</p>
              </button>
              <button
                onClick={() => setSelectedMarketingOption("Remote")}
                className={`${
                  selectedMarketingOption === "Remote"
                    ? "bg-[#0080fc] text-white"
                    : ""
                }  w-[115px] h-[24px] rounded-[16px]`}
              >
                <p className="text-[10px]"> Remote</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingManagerComponent;
