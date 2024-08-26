import React from "react";
import img from "../../assets/AllImages/student.jpg";
import pro from "../../assets/AllImages/pro.jpg";
import arrow from "../../assets/AllImages/arrow-left-solid.svg";
import logo from "../../assets/AllImages/LogoWhite.jpg";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-center gap-5 min-h-[100vh] ">
      <div
        className="flex justify-start items-center gap-[10vw] w-[100vw] "
        style={{ marginTop: "-3rem" }}
      >
        <img src={logo} alt="" className="max-h-[15rem]" />
        <div className="flex justify-start items-center gap-5">
          <span className="w-[3rem] h-[3rem] rounded-full bg-[#1f7bd0] flex justify-center items-center">
            <i className="fa-solid fa-arrow-left text-white"></i>
          </span>
          <div
            className="text-4xl text-[#1f7bd0] font-semibold "
            style={{ fontFamily: "poppins" }}
          >
            Choose a mode
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-2 rounded-lg cursor-pointer border shadow-md p-5 max-w-[50vw] hover:bg-gray-100"
        onClick={() =>
          (window.location.href = "https://gethire-student.vercel.app/")
        }
      >
        <img src={img} alt="" className="rounded-lg " />
        <div>
          <h2 className="text-gray-500 text-2xl font-semibold ">
            I am a Job Seeker
          </h2>
          <p className="text-gray-500 text-lg   mb-2">
            Find Jobs, Frelancing , enterprenuers & consulting Opportunities
          </p>
        </div>
      </div>
      <div
        className="flex justify-center items-center gap-2 rounded-lg cursor-pointer border shadow-md p-5 max-w-[50vw] hover:bg-gray-100"
        onClick={() => navigate("/login")}
      >
        <img src={pro} alt="" className="rounded-lg " />
        <div>
          <h2 className="text-gray-500 text-2xl font-semibold ">
            I am a Job Recruiter
          </h2>
          <p className="text-gray-500 text-lg   mb-2">
            Hire Employees, Frelancing , enterprenuers & consulting
            Opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
