import { PostApi } from "Api/Api_Calling";
import { Button } from "components";
import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Password, setPassword] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [ShowEmail, SetShowEmail] = useState(true);
  const [Showotp, setShowotp] = useState(false);
  const [ShowNumber, setShowNumber] = useState(true);
  const [ShowNumberotp, setShowNumberotp] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [activeTab, setActiveTab] = useState("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginMethod, setLoginMethod] = useState("otp");

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setError("");
  };

  const toggleLoginMethod = () => {
    setLoginMethod((prevMethod) => (prevMethod === "otp" ? "password" : "otp"));
  };

  const Sendotp = async () => {
    if (Email.trim() === "") {
      toast.error("Email is required", { autoClose: 1000 });
      return;
    }

    const data = {
      Email: Email,
    };

    try {
      setLoading(true);
      const responce = await PostApi("api/CompanyRoutes/CompanyLogin", data);
      toast.success(responce?.data?.message, { autoClose: 1000 });
      if (responce?.data?.status) {
        SetShowEmail(false);
        setShowotp(true);
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message) {
        toast.error(error.response.data.message, { autoClose: 1000 });
      }
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const Login = async () => {
    const numberOtp = otp.join("");
    if (numberOtp.trim() === "") {
      toast.error("OTP is required", { autoClose: 1000 });
      return;
    }

    const data = {
      Email: Email,
      otp: numberOtp,
    };

    try {
      setLoading(true);
      const responce = await PostApi(
        "api/CompanyRoutes/CompanyEmailOtpLoginVerify",
        data
      );
      console.log(responce?.data);
      localStorage.setItem("companyToken", responce?.data?.token);
      localStorage.setItem("companyid", responce?.data?.user?._id);
      localStorage.setItem("companydata", JSON.stringify(responce?.data?.user));
      toast.success(responce?.data?.message, { autoClose: 1000 });
      window.location.reload();
      Navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response?.data?.reason || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const generateOrderId = () => {
    const timestamp = Date.now().toString();
    const randomString = Math.random().toString(36).substring(2, 15);
    return timestamp + randomString;
  };

  const SendOtptoNumber = async () => {
    try {
      if (Number.trim() === "") {
        toast.error("Number is required", { autoClose: 1000 });
        return;
      }

      const uniqueOrderId = generateOrderId();
      setOrderId(uniqueOrderId);
      const data = {
        Number: "+91" + Number,
        orderId: uniqueOrderId,
      };

      setLoading(true);
      const responce = await PostApi(
        "api/CompanyRoutes/CreateCompanyOtp/SMS",
        data
      );
      console.log(responce?.data);
      if (responce?.data?.success) {
        toast.success("Otp Send Succesful", { autoClose: 1000 });
        setShowNumber(false);
        setShowNumberotp(true);
      }
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const VerifyNumberotp = async () => {
    try {
      const numberOtp = otp.join("");
      if (numberOtp.trim() === "") {
        toast.error("OTP is required", { autoClose: 1000 });
        return;
      }

      const data = {
        Number: "+91" + Number,
        orderId: orderId,
        otp: numberOtp,
      };

      setLoading(true);
      const responce = await PostApi("api/CompanyRoutes/verifyotp", data);
      console.log(responce?.data);
      localStorage.setItem("companyToken", responce?.data?.token);
      localStorage.setItem("companyid", responce?.data?.data?._id);
      localStorage.setItem("companydata", JSON.stringify(responce?.data?.data));
      toast.success(responce?.data?.message, { autoClose: 1000 });
      window.location.reload();
      Navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response?.data?.reason || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "") {
        if (element.nextSibling) {
          element.nextSibling.focus();
        }
      }
    }
  };

  const loginWithPassword = async () => {
    try {
      let data;
      if (activeTab === "number") {
        data = {
          Number: "+91" + Number,
          Password,
        };
      }
      if (activeTab === "email") {
        data = {
          Email,
          Password,
        };
      }

      setLoading(true);
      const responce = await PostApi(
        "api/CompanyRoutes/CompanyLoginwithpassword",
        data
      );
      console.log(responce?.data);
      localStorage.setItem("companyToken", responce?.data?.token);
      localStorage.setItem("companyid", responce?.data?.data?._id);
      localStorage.setItem("companydata", JSON.stringify(responce?.data?.data));
      toast.success(responce?.data?.message, { autoClose: 1000 });
      window.location.reload();
      Navigate("/");
    } catch (error) {
      console.log(error.response.data);
      setError(error.response?.data?.reason || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-full" style={{ fontFamily: "poppins" }}>
        <div className="w-full  flex justify-center items-center mb-3 min-h-[12vh]">
          <img
            src="https://gethire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
            alt="logo.."
            className="max-w-[13rem]"
          />
        </div>
        <div className="bg-gray-100 flex justify-center items-start min-h-[88vh] pt-5">
          <div className="bg-white border rounded-xl p-10 flex flex-col justify-center items-center gap-5">
            <h2 className="text-3xl text-gray-800">Sign In to GetHire</h2>
            <div className="flex flex-col justify-center items-start gap-1">
              <label className="text-gray-700">Email</label>
              <input
                type="text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <label className="text-gray-700">Password</label>
              <input
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="text-gray-500">
                <input type="checkbox" className="mr-3" />
                <span className="cursor-pointer">Remember Me.</span>
              </div>
              <span onClick={()=>navigate('/forget')} className="text-gray-700 cursor-pointer">Forget Password ?</span>
            </div>
            <div className="flex flex-col w-full justify-center items-start gap-3 mt-5">
              <button
                className="w-full flex justify-center items-start bg-[#316187] hover:bg-[#289a8n] text-white font-bold text-md py-3 rounded-lg"
                onClick={loginWithPassword}
              >
                Login
              </button>
            </div>
            <div className="flex flex-col justify-center items-center my-5">
              <p className="text-sm font-semibold text-gray-600">
                Don't have GetHire account ?
              </p>
              <p
                className="text-sm font-bold text-[#289a9c] cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up now for a 15 days free trail
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center bg-gray-100 min-h-[100vh]">
        <div className="bg-white p-1 rounded-[30px] shadow-md w-full max-w-[600px]">
          <div className="flex justify-center items-center mb-5">
            <button
              className={`px-4 py-2 text-sm font-medium mt-2 ${
                loginMethod === "otp"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-green-500 text-white border-green-500"
              } border-2 border-solid rounded-lg transition duration-300 ease-in-out hover:bg-opacity-80 focus:outline-none`}
              onClick={toggleLoginMethod}
            >
              {loginMethod === "otp" ? "Login with Password" : "Login with OTP"}
            </button>
          </div>
          <div className="grid lg:grid-cols-1 mt-2 gap-3 lg:mx-10 overflow-y-auto">
            <>
              <div className="justify-start">
                <h2 className="text-[46px] text-gray-500 font-[600]">Login</h2>
              </div>
              <div className="flex justify-center items-center">
                <div className="flex gap-5">
                  <Button
                    className={`text-sm font-medium ${
                      activeTab === "email" ? "text-black" : "text-gray-400"
                    }`}
                    onClick={() => handleTabChange("email")}
                  >
                    Email
                  </Button>
                  <Button
                    className={`text-sm font-medium ${
                      activeTab === "number" ? "text-black" : "text-gray-400"
                    }`}
                    onClick={() => handleTabChange("number")}
                  >
                    Number
                  </Button>
                </div>
              </div>
              {activeTab === "email" && (
                <>
                  {ShowEmail && loginMethod === "otp" && (
                    <>
                      <div className="flex flex-col gap-5 p-2">
                        <p className="text-[16px] text-gray-500 font-[600]">
                          Company Email
                        </p>
                        <input
                          type="Email"
                          placeholder="Email"
                          className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <Button
                          onClick={Sendotp}
                          className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
                          style={{ color: "white" }}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Send Otp"}
                        </Button>
                      </div>
                      <div className="flex justify-center items-center">
                        <p>
                          Don't Have Account Yet{" "}
                          <Link style={{ color: "blue" }} to="/signup">
                            Sign-up{" "}
                          </Link>{" "}
                          Now
                        </p>
                      </div>
                    </>
                  )}
                  {Showotp && loginMethod === "otp" && (
                    <>
                      <div className="flex flex-col gap-5">
                        <p className="text-[16px] font-[600]">Verify Otp </p>
                        <div className="w-full flex justify-between p-2">
                          {otp.map((data, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength="1"
                              className="border p-1 bg-gray-100 rounded h-[70px] w-[70px] text-center font-semibold"
                              value={data}
                              onChange={(e) => handleOtpChange(e.target, index)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  VerifyNumberotp();
                                }
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <Button
                          onClick={Login}
                          className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
                          style={{ color: "white" }}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Login"}
                        </Button>
                      </div>
                    </>
                  )}
                  {loginMethod === "password" && (
                    <>
                      <div className="flex flex-col gap-5 p-2">
                        <p className="text-[16px] text-gray-500 font-[600]">
                          Company Email
                        </p>
                        <input
                          type="Email"
                          placeholder="Email"
                          className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
                          value={Email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="text-[16px] text-gray-500 font-[600]">
                          Password
                        </p>
                        <input
                          type="password"
                          placeholder="Password"
                          className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
                          value={Password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <Button
                          onClick={loginWithPassword}
                          className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
                          style={{ color: "white" }}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Login"}
                        </Button>
                      </div>
                      <div className="flex justify-center items-center">
                        <p>
                          Don't Have Account Yet{" "}
                          <Link style={{ color: "blue" }} to="/signup">
                            Sign-up{" "}
                          </Link>{" "}
                          Now
                        </p>
                      </div>
                    </>
                  )}
                </>
              )}
              {activeTab === "number" && (
                <>
                  {ShowNumber && loginMethod === "otp" && (
                    <>
                      <div className="flex flex-col gap-5 p-2">
                        <p className="text-[16px] text-gray-500 font-[600]">
                          Number
                        </p>
                        <input
                          type="number"
                          placeholder="Number"
                          className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
                          onKeyDown={handleKeyDown}
                          value={Number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <Button
                          onClick={SendOtptoNumber}
                          className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
                          style={{ color: "white" }}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Send Otp"}
                        </Button>
                      </div>
                      <div className="flex justify-center items-center">
                        <p>
                          Don't Have Account Yet{" "}
                          <Link style={{ color: "blue" }} to="/signup">
                            Sign-up{" "}
                          </Link>{" "}
                          Now
                        </p>
                      </div>
                    </>
                  )}
                  {ShowNumberotp && loginMethod === "otp" && (
                    <>
                      <div className="flex flex-col gap-5">
                        <p className="text-[16px] font-[600]">Verify Otp </p>
                        <div className="w-full flex justify-between p-2">
                          {otp.map((data, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength="1"
                              className="border p-1 bg-gray-100 rounded h-[70px] w-[70px] text-center font-semibold"
                              value={data}
                              onChange={(e) => handleOtpChange(e.target, index)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  VerifyNumberotp();
                                }
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <Button
                          onClick={VerifyNumberotp}
                          className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
                          style={{ color: "white" }}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Verify OTP"}
                        </Button>
                      </div>
                    </>
                  )}
                  {loginMethod === "password" && (
                    <>
                      <div className="flex flex-col gap-5 p-2">
                        <p className="text-[16px] text-gray-500 font-[600]">
                          Number
                        </p>
                        <input
                          type="number"
                          placeholder="Number"
                          className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
                          onKeyDown={handleKeyDown}
                          value={Number}
                          onChange={(e) => setNumber(e.target.value)}
                        />
                        <p className="text-[16px] text-gray-500 font-[600]">
                          Password
                        </p>
                        <input
                          type="password"
                          placeholder="Password"
                          className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
                          value={Password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end items-center my-8">
                        <Button
                          onClick={loginWithPassword}
                          className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
                          style={{ color: "white" }}
                          disabled={loading}
                        >
                          {loading ? "Loading..." : "Login"}
                        </Button>
                      </div>
                      <div className="flex justify-center items-center">
                        <p>
                          Don't Have Account Yet{" "}
                          <Link style={{ color: "blue" }} to="/signup">
                            Sign-up{" "}
                          </Link>{" "}
                          Now
                        </p>
                      </div>
                    </>
                  )}
                </>
              )}
              {error && (
                <div className="text-red-500 text-center my-2">{error}</div>
              )}
            </>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Login;
