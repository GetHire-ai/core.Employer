import React from "react";
import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentModal = ({ open, handleClose, jobCreate }) => {
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <div className="flex flex-col bg-white p-5 min-w-[70vw] max-h-[90vh] overflow-auto font-[poppins]">
        <div className="text-center flex flex-col items-center w-full mb-6">
          <p className="text-gray-600 max-w-[40vw]">
            Your job has been submitted for review! You will hear from us within
            48 working hours. The page behind shows how applicants will see your
            job.
          </p>
        </div>
        <div className="flex border rounded-xl w-full">
          <div className="rounded border w-full bg-[#1657ab] text-white items-start rounded-r-lg p-5">
            <div className="flex flex-col items-start">
              <p className="text-xl font-[500]">
                Upgrade this listing to Premium to
              </p>
              <p className="text-xl font-[500]">
                AI Features for Onboarding Automation
              </p>
              <p className="text-sm font-[500] my-2">
                Guaranteed Hiring with 100% refund if you are not able to hire.
              </p>
            </div>
            <div className="flex flex-col justify-start items-start p-3 bg-[#164e98] w-[90%] mr- rounded-lg">
              <h2 className="text-lg font-[500] mb-2">
                Premium Benefits You Get
              </h2>
              <ol className="list-decimal ml-5 text-start">
                <li className="text-sm mb-2">
                  <span className="font-[500]">
                    Automated Document Collection:
                  </span>
                  <br /> Easily gather and manage all necessary documents from
                  new hires in one place.
                </li>
                <li className="text-sm mb-2">
                  <span className="font-[500]">
                    AI-Generated Offer Letters:
                  </span>
                  <br /> Create customized offer letters with AI-generated
                  templates tailored to each role.
                </li>
                <li className="text-sm mb-2">
                  <span className="font-[500]">
                    Seamless Background Checks:
                  </span>
                  <br /> Quickly conduct background checks with automatic status
                  updates.
                </li>
                <li className="text-sm mb-2">
                  <span className="font-[500]">
                    Personalized Onboarding Checklists:
                  </span>
                  <br /> Generate tailored onboarding checklists to ensure every
                  step is completed smoothly.
                </li>
                <li className="text-sm mb-2">
                  <span className="font-[500]">
                    Upload Custom Orientation and Induction Videos:
                  </span>
                  <br /> Incorporate your own videos to provide a personalized
                  welcome and orientation experience.
                </li>
                <li className="text-sm mb-2">
                  <span className="font-[500]">
                    AI-Powered Team Introductions:
                  </span>
                  <br /> Automatically connect new hires with their team and key
                  contacts to streamline integration.
                </li>
              </ol>
            </div>
          </div>
          <div className="rounded border w-full p-3 flex flex-col justify-start items-start">
            <span className="text-lg font-[500] mx-auto">Select Your Plan</span>
            <div className="flex flex-col py-10">
              <button
                className="my-3 rounded-lg text-white bg-[#0083d5] hover:bg-[#034b9d] px-4 py-2"
                onClick={jobCreate}
              >
                Continue with Job Posting Only
              </button>
              <button
                className="my-3 rounded-lg text-white bg-[#0083d5] hover:bg-[#034b9d] px-4 py-2"
                onClick={() => jobCreate("/onboarding-process")}
              >
                Set Up Onboarding Process
              </button>
              <button
                className="my-3 rounded-lg text-white bg-[#0083d5] hover:bg-[#034b9d] px-4 py-2"
                onClick={() => jobCreate("/onboarding-process")}
              >
                Generate AI-Based Offer Letter
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
