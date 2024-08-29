import React from "react";
import { Modal, Box, Button } from "@mui/material";

const PaymentModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="flex items-center justify-center rounded w-[90vw] mx-auto"
    >
      {/* <Box className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="bg-blue-100 p-4 rounded-lg mb-6">
          <h3 className="text-blue-600 font-bold mb-2">
            Upgrade this listing to Premium to get instant approval.
          </h3>
          <p className="text-gray-700 mb-4">
            Guaranteed hiring with 100% refund if you are not able to hire.
          </p>
          <ul className="text-gray-600 mb-4">
            <li>✔️ Boosted visibility with 10x applications</li>
            <li>✔️ Database Access with up to 500 profiles</li>
            <li>✔️ Premium support</li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Select your plan</h3>
          <div className="mb-4">
            <input
              type="radio"
              id="perListing"
              name="plan"
              className="mr-2"
              checked
            />
            <label htmlFor="perListing" className="text-gray-700">
              Upgrade this listing for ₹4,999
            </label>
          </div>
          <Button variant="contained" color="primary" className="w-full mb-4">
            Upgrade now
          </Button>

          <h3 className="text-lg font-semibold mb-4">Premium Plans</h3>
          <div className="mb-2">
            <input type="radio" id="oneMonth" name="plan" className="mr-2" />
            <label htmlFor="oneMonth" className="text-gray-700">
              1 Month Plan - ₹11,999{" "}
              <span className="text-green-500">Save 20%</span>
            </label>
          </div>
        </div>
      </Box> */}
      <div className="flex flex-col bg-white p-5">
        <div className="text-center">
          <div className="text-green-500 text-4xl mb-4">✔️</div>
          <h2 className="text-xl font-bold mb-2">
            Your job has been submitted for review!
          </h2>
          <p className="text-gray-600 mb-6">
            You will hear from us within 48 working hours. The page behind shows
            how applicants will see your job.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;
