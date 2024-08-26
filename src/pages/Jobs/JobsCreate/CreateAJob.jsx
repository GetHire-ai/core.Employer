import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateAJob = () => {
  const navigate = useNavigate();
  const handleCancelbutton = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-[30px] shadow-md w-[96%] md:w-[80%] lg:w-[981px] overflow-y-auto">
          <div className="flex justify-between ">
            <div className="lg:w-[95%] items-center flex justify-center">
              <p className="text-[32px]  text-black font-[600]">Create a job</p>
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
          <div className="bg-[#f6f9fe] mt-[29px] rounded-[30px] p-[30px] flex flex-col md:flex-row justify-center items-center gap-[30px]">
            <Link className="bg-white flex justify-center items-center flex-col gap-[17px] p-[24px] rounded-[12px] border-[1px] border-[#5956e9]">
              <img src="/images/manual.svg" alt="" className="w-[88px] h-[88px]" />
              <p className="text-[#5956e9] text-[20px] font-[600]">
                Post Job With AI
              </p>
            </Link>
            <Link
              to="/jobsCreateWithManual"
              className="bg-white flex justify-center items-center flex-col gap-[17px] p-[24px] rounded-[12px]"
            >
              <img
                src="/images/template.svg"
                alt=""
                className="w-[88px] h-[88px]"
              />
              <p className=" text-[#9b9b9b] text-[20px] font-[600]">
                Post Job With AI
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAJob;
