import React from "react";
import TransactionTable from "./TransactionTable";
import PaymentCards from "./PaymentCards";

const index = () => {
  return (
    <div className="p-5 flex flex-col gap-5" style={{fontFamily:"poppins"}}>
      <PaymentCards />
      <TransactionTable />
    </div>
  );
};

export default index;
