import { PostApi } from "Api/Api_Calling";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Forget = () => {
  const [Email, setEmail] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [Password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState();
  const [showPage, setShowPage] = useState("email");
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const sendOTPMail = async () => {
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
        setShowPage("otp");
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

  const verifyMailOTP = async () => {
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
      setShowPage("password");
      setCompany(responce?.data?.user);
      // localStorage.setItem("companyToken", responce?.data?.token);
      // localStorage.setItem("companyid", responce?.data?.user?._id);
      // localStorage.setItem("companydata", JSON.stringify(responce?.data?.user));
      toast.success(responce?.data?.message, { autoClose: 1000 });
    } catch (error) {
      console.log(error.response.data);
      setError(error.response?.data?.reason || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (id) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(Password.trim())) {
      toast.error(
        "Password must be at least 8 characters long and include at least one special character, one uppercase letter, and one lowercase letter",
        { autoClose: 1000 }
      );
      return;
    }
    if (Password.trim() === "") {
      toast.error("Password is required", { autoClose: 1000 });
      return;
    }
    if (confirmPassword.trim() === "") {
      toast.error("Confirm Password is required", { autoClose: 1000 });
      return;
    }
    if (confirmPassword.trim() !== Password.trim()) {
      toast.error("Password andConfirm Password is not same", {
        autoClose: 1000,
      });
      return;
    }
    const data = {
      Password: Password,
    };
    try {
      setLoading(true);
      const responce = await PostApi(
        `api/CompanyRoutes/resetpassword/${id}`,
        data
      );
      localStorage.setItem("companyToken", responce?.data?.token);
      localStorage.setItem("companyid", responce?.data?.data?._id);
      localStorage.setItem("companydata", JSON.stringify(responce?.data?.data));
      toast.success(responce?.data?.message, { autoClose: 1000 });
      window.location.reload();
      navigate("/");
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

  return (
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
          <h2 className="text-3xl text-gray-800">Reset Password</h2>
          {showPage === "email" && (
            <>
              <div className="flex flex-col justify-center items-start gap-1">
                <label className="text-gray-700">Email</label>
                <input
                  type="text"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded"
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start gap-3 mt-5">
                <button
                  className="w-full flex justify-center items-start bg-[#289a9c] hover:bg-[#289a8n] text-white font-bold text-md py-5 rounded-lg"
                  onClick={sendOTPMail}
                >
                  Send Instructions
                </button>
              </div>
            </>
          )}
          {showPage === "otp" && (
            <>
              <div className="w-full flex justify-between py-2 gap-3">
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
                        verifyMailOTP();
                      }
                    }}
                  />
                ))}
              </div>
              <div className="flex flex-col w-full justify-center items-start gap-3 mt-5">
                <button
                  className="w-full flex justify-center items-start bg-[#289a9c] hover:bg-[#289a8n] text-white font-bold text-md py-5 rounded-lg"
                  onClick={verifyMailOTP}
                >
                  Verify OTP
                </button>
              </div>
            </>
          )}
          {showPage === "password" && (
            <>
              <div className="flex flex-col justify-center items-start gap-1">
                <label className="text-gray-700">Password</label>
                <input
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded"
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <label className="text-gray-700">confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className="min-w-[35rem] min-h-[3rem] px-3 font-md text-gray-600 border rounded"
                />
              </div>
              <div className="flex flex-col w-full justify-center items-start gap-3 mt-5">
                <button
                  className="w-full flex justify-center items-start bg-[#289a9c] hover:bg-[#289a8n] text-white font-bold text-md py-5 rounded-lg"
                  onClick={() => resetPassword(company._id)}
                >
                  Set Password
                </button>
              </div>
            </>
          )}
          <div className="flex flex-col justify-center items-center my-">
            <p
              className="text-lg font-semibold text-[#289a9c] cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
