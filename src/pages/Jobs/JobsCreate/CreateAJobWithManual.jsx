import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateAJobWithManual = () => {
  const navigate = useNavigate();
  const handleCancelbutton = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-[30px] shadow-md w-full md:w-[80%] lg:w-[981px] mt-[1300px] md:mt-[700px] lg:mt-[440px] ">
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
              <div className="w-[20px] flex justify-center items-center h-[20px] rounded-[50%] border-[1px] border-black">
                1
              </div>
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
          <div className="grid lg:grid-cols-2 mt-[41px] gap-[40px] lg:mx-[97px] overflow-y-auto">
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Position Name </p>
              <input
                type=" text"
                placeholder="Software Engineer"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Company Name </p>
              <input
                type=" text"
                placeholder="Amir"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Job Pipeline </p>
              <input
                type=" text"
                placeholder="Default job pipeline"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Add Location </p>
              <input
                type=" text"
                placeholder="Indore"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Contract Details </p>
              <input
                type=" text"
                placeholder="Full-Time"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Add Minimum Salary </p>
              <input
                type=" text"
                placeholder="15000"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Add Maximum Salary </p>
              <input
                type=" text"
                placeholder="25000"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Currency </p>
              <input
                type=" text"
                placeholder="US Dollar"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-[16px] font-[600]">Select Frequency </p>
              <input
                type=" text"
                placeholder="Monthly"
                className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
              />
            </div>
          </div>
          <div className="flex justify-center items-center my-[51px]">
            <Link
              to="/jobsCreateJobApplication"
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

export default CreateAJobWithManual;
