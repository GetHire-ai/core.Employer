import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const CreateAJobManualJobApplication = () => {
  const navigate = useNavigate();
  const handleCancelbutton = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-[30px] shadow-md w-[95%] md:w-[90%] lg:w-[981px] mt-[500px] md:mt-[50px] lg:mt-[300px] ">
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
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-[50%] border-[1px] border-black">
                2
              </div>
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
          <div className="flex w-full mt-[35px] lg:px-[125px] flex-col gap-[10px]">
            <div className="flex gap-[16px]">
              <p className="text-[16px] font-[600]">Skill Required</p>
              <button className="bg-[#5956e9] rounded-[4px] text-[11px] font-[400] w-[109px] h-[30px] text-white">
                Suggest with AI
              </button>
            </div>
            <input
              type="text"
              placeholder="Software Engineer"
              className="bg-[#f5f4f8] placeholder:text-[#8d8d8d] rounded-[8px] px-[11px] py-[14px] text-[16px] font-[500]"
            />
          </div>
          <div className="flex flex-col w-full mt-[17px] lg:px-[125px] gap-[10px]">
            <div className="flex gap-[16px]">
              <p className="text-[16px] font-[600]">Inter's Responsibilities</p>
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
              <p className="text-[16px] font-[500]">1.</p>
              <p className="text-[16px] font-[500]">2.</p>
              <p className="text-[16px] font-[500]">3.</p>
            </div>
          </div>

          <div className="flex justify-center items-center mt-[263px] mb-[51px]">
            <Link
              to="/jobsCreateJobDescription"
              className="bg-black rounded-[8px] px-[62px] py-[11px] text-white text-[18px] font-[500]"
            >
              Save & Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAJobManualJobApplication;
