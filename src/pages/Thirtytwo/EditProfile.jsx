import { GetApi, PostApi, PutApi } from "Api/Api_Calling";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const EditProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [company, setCompany] = useState("");
  const [pwdData, setpwdData] = useState({
    Password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const getCompany = async () => {
    try {
      setLoading(true);
      const responce = await GetApi(`api/CompanyRoutes/GetCompanyprofile`);
      setCompany(responce?.data?.data);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response?.data?.reason || "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCompany();
  }, []);

  const updateDetails = async () => {
    try {
      setLoading(true);
      const responce = await PutApi(
        "api/CompanyRoutes/UpdateCompanyProfile",
        company
      );
      toast.success(responce?.data?.message, { autoClose: 1000 });
    } catch (error) {
      console.log(error.response);
      setError(error.response?.data?.reason || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const updatePassword = async () => {
    try {
      // Validate the new password
      if (!validatePassword(pwdData.newPassword)) {
        throw new Error(
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
      }

      if (pwdData.newPassword !== pwdData.confirmPassword) {
        throw new Error("New password and confirm password do not match.");
      }
      if (pwdData.Password === pwdData.confirmPassword) {
        throw new Error("New password can not match old  password.");
      }
      if (pwdData.Password === pwdData.newPassword) {
        throw new Error("New password can not match old  password.");
      }

      setLoading(true);
      const response = await PostApi(
        "api/CompanyRoutes/resetpasswordwithpwd",
        pwdData
      );
      toast.success(response?.data?.message, { autoClose: 1000 });
      setpwdData({ Password: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      // Display error message to the user
      toast.error(error.message || "An error occurred", { autoClose: 1000 });
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            className="cursor-pointer"
            underline="hover"
            color="inherit"
            onClick={() => navigate("/")}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            underline="hover"
            color="inherit"
            onClick={() => navigate("/company-profile")}
          >
            edit company
          </Link>
          <Typography color="text.primary">Edit Profile</Typography>
        </Breadcrumbs>
      </div>
      <div className="flex justify-start gap-3 ">


        {/* <div className="bg-gray-100 flex justify-center items-start min-h-[88vh] pt-5">
          <div className="bg-white border rounded-xl p-5 flex flex-col justify-center items-center gap-5">
            <h2 className="text-3xl text-gray-500 w-full">Edit Profile</h2>
            <div className="flex justify-between gap-2 w-full">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-gray-700">First Name</label>
                <input
                  type="text"
                  value={company?.firstName}
                  name="firstName"
                  onChange={handleChange}
                  className="w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
                />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={company?.lastName}
                  name="lastName"
                  onChange={handleChange}
                  className="w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <label className="text-gray-700">Email</label>
              <input
                type="text"
                value={company?.Email}
                name={"Email"}
                onChange={handleChange}
                className="min-w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <label className="text-gray-700">Designation</label>
              <input
                type="text"
                value={company?.designation}
                name="designation"
                onChange={handleChange}
                className="min-w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
            <div className="flex justify-between gap-2 w-full">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-gray-700">Country Code</label>
                <input
                  type="text"
                  className="w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
                />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="text-gray-700">Mobile No.</label>
                <input
                  type="text"
                  value={company?.Number}
                  name={"Number"}
                  onChange={handleChange}
                  className="w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
                />
              </div>
            </div>
            <div className="flex w-full justify-start items-start gap-3 mt-5 ">
              <button
                className="px-2 flex justify-center items-start bg-blue-400 hover:bg-blue-500 text-white font-semibold text-md py-2 rounded"
                onClick={updateDetails}
              >
                {" "}
                Save Changes
              </button>
            </div>
          </div>
        </div> */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-start min-h-[88vh] pt-10">
            <div className="bg-white border shadow-lg rounded-2xl p-8 flex flex-col justify-center items-center gap-6 w-full max-w-3xl">
              <h2 className="text-3xl text-gray-700 w-full text-center mb-4">Edit Profile</h2>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between gap-4 w-full">
                  <div className="flex flex-col gap-2 w-1/2">
                    <label className="text-gray-700 font-medium">First Name</label>
                    <input
                      type="text"
                      value={company?.firstName}
                      name="firstName"
                      onChange={handleChange}
                      className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label className="text-gray-700 font-medium">Last Name</label>
                    <input
                      type="text"
                      value={company?.lastName}
                      name="lastName"
                      onChange={handleChange}
                      className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-gray-700 font-medium">Email</label>
                  <input
                    type="text"
                    value={company?.Email}
                    name="Email"
                    onChange={handleChange}
                    className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-gray-700 font-medium">Designation</label>
                  <input
                    type="text"
                    value={company?.designation}
                    name="designation"
                    onChange={handleChange}
                    className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="flex justify-between gap-4 w-full">
                  <div className="flex flex-col gap-2 w-1/2">
                    <label className="text-gray-700 font-medium">Country Code</label>
                    <input
                      type="text"
                      className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <label className="text-gray-700 font-medium">Mobile No.</label>
                    <input
                      type="text"
                      value={company?.Number}
                      name="Number"
                      onChange={handleChange}
                      className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>
                <div className="flex w-full justify-start items-start gap-3 mt-6">
                  <button
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-700 duration-300 hover:shadow-slate-600 text-white font-semibold text-md rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onClick={updateDetails}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>


 


        {/* <div className="bg-gray-100 flex justify-center items-start min-h-[88vh] pt-5">
          <div className="bg-white border rounded-xl p-5 flex flex-col justify-center items-center gap-5">
            <h2 className="text-3xl text-gray-500 w-full">Change Password</h2>

            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <label className="text-gray-700">Password</label>
              <input
                type="password"
                name="Password"
                value={pwdData?.Password}
                onChange={(e) => {
                  setpwdData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
                className="min-w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <label className="text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={pwdData?.newPassword}
                onChange={(e) => {
                  setpwdData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
                className="min-w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-1 w-full">
              <label className="text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={pwdData?.confirmPassword}
                onChange={(e) => {
                  setpwdData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }));
                }}
                className="min-w-full min-h-[3rem] px-3 font-md text-gray-600 border rounded"
              />
            </div>

            <div className="flex w-full justify-start items-start gap-3 mt-5">
              <button
                className="px-2 flex justify-center items-start bg-[#1bcbfb] hover:bg-[#289a8n] text-white font-semibold text-md py-2 rounded"
                onClick={updatePassword}
              >
                Change Password
              </button>
            </div>
          </div>
        </div> */}
         <div className="bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-start min-h-[88vh] pt-10">
              <div className="bg-white border shadow-lg rounded-2xl p-8 flex flex-col justify-center items-center gap-6 w-full max-w-3xl">
                <h2 className="text-3xl text-gray-700 w-full text-center mb-4">Change Password</h2>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-gray-700 font-medium">Password</label>
                    <input
                      type="password"
                      name="Password"
                      value={pwdData?.Password}
                      onChange={(e) => {
                        setpwdData((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }));
                      }}
                      className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-gray-700 font-medium">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={pwdData?.newPassword}
                      onChange={(e) => {
                        setpwdData((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }));
                      }}
                      className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-gray-700 font-medium">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={pwdData?.confirmPassword}
                      onChange={(e) => {
                        setpwdData((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.value,
                        }));
                      }}
                      className="w-full min-h-[3rem] px-4 py-2 text-gray-600 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <div className="flex w-full justify-start items-start gap-3 mt-6">
                    <button
                      className="px-6 py-2 bg-blue-500 hover:bg-blue-600 hover:shadow-slate-700 duration-300 text-white font-semibold text-md rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300"
                      onClick={updatePassword}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>




      </div>
    </>
  );
};

export default EditProfile;
