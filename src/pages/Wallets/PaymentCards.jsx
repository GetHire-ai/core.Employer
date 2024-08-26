import { GetApi, PostApi } from "Api/Api_Calling";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PaymentCards = () => {
  const apiKey = process.env.REACT_APP_RZP_API_KEY;
  const [amount, setAmount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [balance, setBalance] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  
  let companyData = JSON.parse(localStorage.getItem("companydata"));

  const dummyCoupons = {
    SAVE10: 10,
    SAVE20: 20,
    SAVE30: 30,
  };

  const handlePayment = (amount) => {
    const options = {
      key: apiKey,
      amount: amount * 100,
      currency: "INR",
      name: "GetHire",
      description: "Add funds to GetHire",
      image:
        "https://gethire-student.vercel.app/static/media/Gethire SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg",
      handler: function (response) {
        toast.success(`Payment successful! `, { autoClose: 1000 });
        updateAccount(
          response.razorpay_payment_id,
          amount,
          "Add funds to GetHire"
        );
      },
      prefill: {
        name: companyData?.Name,
        email: companyData?.Email,
        contact: companyData?.Number,
      },
      theme: {
        color: "#297bca",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const updateAccount = async (transactionId, amount, message) => {
    try {
      let data = {
        transactionId,
        message,
        amount,
      };
      const response = await PostApi(`api/companyroutes/wallet/addfund`, data);
      toast.success("Account updated:", { autoClose: 1000 });
    } catch (error) {
      console.log(error);
      toast.error("Failed to update account", { autoClose: 1000 });
    }
  };

  const handleCoupon = () => {
    if (dummyCoupons[coupon]) {
      const discountPercentage = dummyCoupons[coupon];
      const discount = (amount * discountPercentage) / 100;
      setDiscountedAmount(amount - discount);
      setCouponApplied(true);
      toast.success(`Coupon applied! You saved ${discountPercentage}%`, {
        autoClose: 1000,
      });
    } else {
      setCouponApplied(false);
      toast.error("Invalid coupon", { autoClose: 1000 });
    }
  };

  const getBalance = async () => {
    try {
      let res = await GetApi(`api/companyroutes/wallet/balance`);
      setBalance(res.data.data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-xl mb-1">My GetHire Funds</h1>
      <p className="text-sm text-gray-500 mb-3">
        You can use GoodSpace credits to post jobs, boost jobs or invite
        candidates to apply and to unlock candidate profiles.
      </p>
      <div className="w-full flex gap-3 min-h-[13rem]">
        <div className="flex flex-col justify-between border rounded-xl min-h-[12rem] p-5 bg-[#2571b9] w-[22rem] text-white">
          <div className="flex justify-between">
            <span className="font-semibold text-xs">GetHire</span>
            <span className="font-bold text-xs">
              <img
                src="https://gethire-student.vercel.app/static/media/Gethire SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
                className="w-10"
              />
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-semibold text-xs">Balance</span>
            <span className="font-semibold text-3xl">
              <i className="fa-solid fa-indian-rupee-sign mr-2"></i>
              {balance || 0}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="flex flex-col">
              <span className="font-semibold text-xs">Area</span>
              <span className="font-semibold text-sm">Owais</span>
            </span>
            <span>
              <i className="fa-regular fa-credit-card text-sm"></i>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="text-xl mb-3">Quick Add</div>
          <div className="flex justify-start gap-8 w-full">
            <div className="p-5 border rounded-xl h-[12rem] w-[15rem] bg-white flex flex-col justify-between items-center">
              <div className="flex flex-col ">
                <span className="text-xl">
                  Get <i className="fa-solid fa-indian-rupee-sign"></i> 7000
                </span>
                <span className=" text-sm text-gray-500">gethire funds</span>
              </div>
              <span className="font-semibold text-xs text-green-500">
                ideal for 2-3 jobs posts
              </span>
              <button
                className="w-full p-2 bg-[#297bca] font- text-sm text-white rounded-md"
                onClick={() => handlePayment(6000)}
              >
                Add <span className="line-through">7000</span> 6000
              </button>
            </div>
            <div className="p-5 border rounded-xl h-[12rem] w-[15rem] bg-white flex flex-col justify-between items-center">
              <div className="flex flex-col ">
                <span className="text-xl">
                  Get <i className="fa-solid fa-indian-rupee-sign"></i> 5000
                </span>
                <span className=" text-sm text-gray-500">gethire funds</span>
              </div>
              <span className="font-semibold text-xs text-green-500">
                ideal for 2-3 jobs posts
              </span>
              <button
                className="w-full p-2 bg-[#297bca] font- text-sm text-white rounded-md"
                onClick={() => handlePayment(4000)}
              >
                Add <span className="line-through">5000</span> 4000
              </button>
            </div>
            <div className="py-5 px-2 border rounded-xl h-[12rem] w-[15rem] bg-white flex gap-2 flex-col justify-between items-center">
              <div className="flex flex-col ">
                <span className="text-xl">Custom Amount</span>
              </div>
              <input
                className="w-full rounded-md border p-1"
                type="text"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => {
                  if (e.target.value < 0 || isNaN(e.target.value)) {
                    return;
                  }
                  setAmount(e.target.value);
                  setCouponApplied(false); // reset coupon when amount changes
                  setDiscountedAmount(e.target.value);
                }}
              />
              <div className="flex justify-between">
                <input
                  className="w-3/4 rounded-sm border p-1"
                  type="text"
                  placeholder="Enter Coupon"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  className="p-1 text-[#297bca] border border-[#297bca] text-sm text-white rounded-md"
                  onClick={handleCoupon}
                >
                  Apply
                </button>
              </div>
              <button
                className="w-full p-2 text-[#297bca] border border-[#297bca] text-sm text-white rounded-md"
                onClick={() => handlePayment(discountedAmount)}
                disabled={!couponApplied}
              >
                Add Funds
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCards;
