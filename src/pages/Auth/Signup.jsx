import { PostApi } from "Api/Api_Calling";
import { Button, Img } from "components";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";

function Signup() {
  const navigate = useNavigate();
  const [intialotp, setintialotp] = useState("");
  const [Email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isSubmit, setIsSubmit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Name, setName] = useState("");
  const [website, setwebsite] = useState("");
  const [Number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [Password, setPassword] = useState("");
  const [ShowEmail, SetShowEmail] = useState(false);
  const [Showotp, setShowotp] = useState(false);
  const [ShowDetail, setShowDetail] = useState(true);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    number: false,
    companyName: false,
    website: false,
    password: false,
  });

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
    }
  };

  function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const Sendotp = async () => {
    if (Email.trim() === "") {
      toast.error("Email is required", { autoClose: 1000 });
      return;
    }
    let newotp = generateOTP();
    setintialotp(newotp);
    const data = {
      Email: Email,
      otp: newotp,
    };
    try {
      setLoading(true);
      const responce = await PostApi("api/CompanyRoutes/verifyEmailotp", data);
      toast.success(responce?.data?.message, { autoClose: 1000 });
      if (responce?.data?.status) {
        SetShowEmail(false);
        setShowotp(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { autoClose: 1000 });
    } finally {
      setLoading(false);
    }
  };

  const Verifyotp = async () => {
    const numberOtp = otp.join("");
    if (numberOtp.trim() === "") {
      toast.error("OTP is required", { autoClose: 1000 });
      return;
    }

    if (numberOtp == intialotp) {
      toast.success("Otp Verification completed", { autoClose: 1000 });
      setShowotp(false);
      setShowDetail(true);
    } else {
      toast.error("Otp is Not Valid please recheck Otp", { autoClose: 1000 });
    }
  };

  const Register = async () => {
    if (!Email || !Name || !Number || !Password) {
      setIsSubmit(true);
    }

    // Password validation
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(Password.trim())) {
      toast.error(
        "Password must be at least 8 characters long and include at least one special character, one uppercase letter, and one lowercase letter",
        { autoClose: 1000 }
      );
      return;
    }

    // Email validation
    if (!validateEmail(Email.trim())) {
      toast.error("Invalid Email format", { autoClose: 1000 });
      return;
    }

    let data = {
      Name: Name,
      Email: Email,
      Password: Password,
      Number: "+91" + Number,
    };
    try {
      const response = await PostApi("api/CompanyRoutes/RegisterCompany", data);
      const companyDataString = JSON.stringify(response?.data?.data?.Company);

      localStorage.setItem("companyToken", response?.data?.data?.token);
      localStorage.setItem("companyid", response?.data?.data?.Company?._id);
      localStorage.setItem("companydata", companyDataString);

      toast.success(response?.data?.message, { autoClose: 1000 });
      window.location.reload();
      Navigate("/");
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

  const onGoogleSuccess = async (response) => {
    const { profileObj } = response;
    setEmail(profileObj.email);
    setName(profileObj.name);
    setShowDetail(true);
    SetShowEmail(false);
    setShowotp(false);
  };

  const onGoogleFailure = (error) => {
    console.log(error);
    toast.error("Google Sign-In failed. Please try again.", {
      autoClose: 1000,
    });
  };

  const login = useGoogleLogin({
    onSuccess: onGoogleSuccess,
    onFailure: onGoogleFailure,
    redirect_uri: "http://127.0.0.1:3000/auth/google_oauth2/callback",
    clientId:
      "226693163030-4ppbtc88hi6v34t2n5citajof38o21l2.apps.googleusercontent.com",
  });

  return (
    <div className="w-full h-full" style={{ fontFamily: "poppins" }}>
      <div className="bg-gray-100 flex justify-center items-start min-h-[100vh] pt-5">
        <div className="rounded-xl p-10 flex flex-col justify-center items-center gap-5">
          <div className="w-full  flex justify-start items-center mb-3">
            <img
              src="https://gethire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
              alt="logo.."
              className="max-w-[13rem]"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1 w-[35rem] mt-10">
            <div className="text-gray-700 text-2xl font-semibold">
              Supercharge your hiring with GetHire
            </div>
            <div className="text-gray-400 text-sm ">
              used by the most amitious bussinesses worldwid
            </div>
          </div>
          <div className="flex flex-col justify-center items-start text-xs gap-2 mt-10">
            <span>
              <i className="fa-solid fa-check font-semibold text-green-700 text-lg mr-3"></i>{" "}
              Post Jobs Everywhere: from job portals to social media, with one
              click.
            </span>
            <span>
              <i className="fa-solid fa-check font-semibold text-green-700 text-lg mr-3"></i>{" "}
              End-to-End Recruitment: From sourcing to onboarding, we handle it
              all.
            </span>
            <span>
              <i className="fa-solid fa-check font-semibold text-green-700 text-lg mr-3"></i>{" "}
              AI Skills Assessment: Assess candidates' skills instantly with AI
              technology.
            </span>
            <span>
              <i className="fa-solid fa-check font-semibold text-green-700 text-lg mr-3"></i>{" "}
              AI Video Interviews: Conduct efficient video interviews with AI
              insights.
            </span>
            <span>
              <i className="fa-solid fa-check font-semibold text-green-700 text-lg mr-3"></i>{" "}
              Instant Results: Get assessment outcomes and interview feedback
              within seconds.
            </span>
          </div>
        </div>
        <div className="bg-white border rounded-xl p-10 flex flex-col justify-center items-center gap-5">
          <h2 className="text-lg text-gray-800">
            Start your trail no credit card required
          </h2>

          <div className="flex justify-between gap-4 w-full">
            <div className="flex flex-col gap-1 w-1/2">
              <label className="text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
            <div className="flex flex-col gap-1 w-1/2">
              <label className="text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start gap-1">
            <label className="text-gray-700">Work Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className={`min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded ${
                isSubmit && Email === "" ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <label className="text-gray-700">Number</label>
            <input
              type="number"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
              className={`min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded ${
                isSubmit && Number === "" ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <label className="text-gray-700">Company Name</label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className={`min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded ${
                isSubmit && Name === "" ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <label className="text-gray-700">Website</label>
            <input
              type="text"
              value={website}
              onChange={(e) => setwebsite(e.target.value)}
              className={`min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded ${
                isSubmit && website === ""
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <label className="text-gray-700">Password</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className={`min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded ${
                isSubmit && Password === ""
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col w-full justify-center items-start gap-3 mt-2">
            <button
              className="w-full flex justify-center items-start bg-[#316187] hover:bg-[#289a8n] text-white font-bold text-md py-3 rounded-lg"
              onClick={Register}
            >
              Sign Up
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xs text-gray-500 mb-5">
              By signing up you agree to our{" "}
              <span className="text-[#289a9c] cursor-pointer">
                terms of use
              </span>
            </p>
            <p className="text-md  text-gray-600 cursor-pointer">
              Alredy have a GetHire Account ?{" "}
              <span
                className="text-sm font-bold text-[#316187] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                {" "}
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-center items-center bg-gray-100 min-h-[100vh]">
    //   <div className="bg-white p-1 rounded-[30px] shadow-md w-full max-w-[600px]">
    //     <div className="grid lg:grid-cols-1 mt-2 gap-3 lg:mx-10 overflow-y-auto">
    //       <>
    //         <div className="flex justify-start items-center ">
    //           <h2 className="text-[46px] text-gray-500 font-[600]">Register</h2>
    //         </div>
    //         {ShowEmail && (
    //           <>
    //             <div className="flex flex-col gap-5 p-2">
    //               <p className="text-[16px] text-gray-500 font-[600]">
    //                 Company Email
    //               </p>
    //               <input
    //                 type="Email"
    //                 placeholder="Email"
    //                 className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
    //                 value={Email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //             </div>
    //             <div className="flex justify-end items-center my-8">
    //               <Button
    //                 onClick={Sendotp}
    //                 className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
    //                 style={{ color: "white" }}
    //               >
    //                 {loading ? "Loading..." : "Send Otp"}
    //               </Button>
    //             </div>
    //             <div className="flex justify-center items-center">
    //               <button
    //                 onClick={login}
    //                 type="button"
    //                 class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
    //               >
    //                 <svg
    //                   class="w-4 h-4 me-2"
    //                   aria-hidden="true"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="currentColor"
    //                   viewBox="0 0 18 19"
    //                 >
    //                   <path
    //                     fill-rule="evenodd"
    //                     d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
    //                     clip-rule="evenodd"
    //                   />
    //                 </svg>{" "}
    //                 &nbsp; Sign in with Google
    //               </button>
    //             </div>
    //             <div className="flex justify-center items-center">
    //               <p>
    //                 Already Have Account{" "}
    //                 <Link style={{ color: "blue" }} to="/login">
    //                   Login{" "}
    //                 </Link>
    //                 Now
    //               </p>
    //             </div>
    //           </>
    //         )}
    //         {Showotp && (
    //           <>
    //             <div className="flex flex-col gap-5">
    //               <p className="text-[16px] font-[600]">Verify Otp </p>
    //               <div className="w-full flex justify-between p-2">
    //                 {otp.map((data, index) => (
    //                   <input
    //                     key={index}
    //                     type="text"
    //                     maxLength="1"
    //                     className="border p-1 bg-gray-100 rounded h-[70px] w-[70px] text-center font-semibold"
    //                     value={data}
    //                     onChange={(e) => handleOtpChange(e.target, index)}
    //                     onKeyDown={(e) => handleKeyDown(e, index)}
    //                   />
    //                 ))}
    //               </div>
    //             </div>
    //             <div className="flex justify-end items-center my-10">
    //               <Button
    //                 onClick={Verifyotp}
    //                 className="w-[150px] h-[49px] rounded-lg text-white text-[14px] font-[600] bg-gradient-to-tl from-[#216ccf] to-[#216ccf]"
    //                 style={{ color: "white" }}
    //               >
    //                 Verify Otp
    //               </Button>
    //             </div>
    //           </>
    //         )}
    //         {ShowDetail && (
    //           <>
    //             <div className="flex flex-col gap-5 px-2">
    //               <p className="text-[16px] font-[600]">Company Name </p>
    //               <input
    //                 type="text"
    //                 placeholder="Enter Name..."
    //                 className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
    //                 value={Name}
    //                 onChange={(e) => setName(e.target.value)}
    //               />
    //             </div>
    //             <div className="flex flex-col gap-5 px-2">
    //               <p className="text-[16px] font-[600]">Number</p>
    //               <input
    //                 type="number"
    //                 placeholder="Enter Contact Number..."
    //                 className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
    //                 onKeyDown={handleKeyDown}
    //                 value={Number}
    //                 onChange={(e) => setNumber(e.target.value)}
    //               />
    //             </div>
    //             <div className="flex flex-col gap-5 px-2">
    //               <p className="text-[16px] font-[600]">Email</p>
    //               <input
    //                 type="email"
    //                 placeholder="Enter Email ..."
    //                 className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
    //                 value={Email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //               />
    //             </div>
    //             <div className="flex flex-col gap-5 px-2">
    //               <p className="text-[16px] font-[600]">Password</p>
    //               <input
    //                 type="password"
    //                 placeholder="Enter Password"
    //                 className="bg-[#f5f4f8] w-full rounded-[8px] py-[16px] px-[11px]"
    //                 onKeyDown={handleKeyDown}
    //                 value={Password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //               />
    //             </div>
    //             <div className="flex justify-center items-center my-10">
    //               <Button
    //                 onClick={Register}
    //                 className="bg-black rounded-[8px] px-[62px] py-[11px] text-white text-[18px] font-[500]"
    //               >
    //                 Register
    //               </Button>
    //             </div>
    //           </>
    //         )}
    //       </>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Signup;
