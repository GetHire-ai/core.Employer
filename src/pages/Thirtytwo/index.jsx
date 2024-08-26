import React, { useEffect, useState } from "react";
import { Button, Img, Input, Line, List, Text } from "components";
import ThirtytwoListratingstarfill from "components/ThirtytwoListratingstarfill";
import ThirtytwoRowunsplash4wydpgy from "components/ThirtytwoRowunsplash4wydpgy";
import { useNavigate } from "react-router-dom";
import { Api_Url, GetApi, PutApi } from "Api/Api_Calling";
import EditProfileModal from "./EditProfileModal";
import EditProfileImageModal from "./EditProfileImageModal";
import axios from "axios";

// importing the logos
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";

import { LineWave} from 'react-loader-spinner'



const ThirtytwoPage = () => {
  const navigate = useNavigate();
  const [AllJobs, setAllJobs] = useState([]);
  const [showActiveJobsOnly, setShowActiveJobsOnly] = useState(true);
  const [loading, setloading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageType, setCurrentImageType] = useState(null);
  const [profile, setProfile] = useState({});

  // for navigation of the urls
    const navigateTo = (url) => {                                                                                                     
      window.location.href = url;
    };

  const Getcompanyprofile = async () => {
    try {
      const responce = await GetApi("api/CompanyRoutes/GetCompanyprofile");
      setProfile(responce?.data?.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  const GetAllJobs = async () => {
    try {
      const Getalljobs = await GetApi(
        "api/CompanyRoutes/GetAllJobswithApplication"
      );
      setAllJobs(Getalljobs?.data?.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    Getcompanyprofile();
    GetAllJobs();
  }, []);

  const formatTimestamp = (timestampString) => {
    const timestamp = new Date(timestampString);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "UTC",
    };

    const formattedTimestamp = timestamp.toLocaleString(undefined, options);

    return formattedTimestamp;
  };

  const handleChange = (field, value) => {
    setProfile((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      let res = await PutApi(`api/companyroutes/UpdateCompanyProfile`, profile);
      Getcompanyprofile();
    } catch (error) {
      console.log(error);
    }
    setModalOpen(false);
  };

  const handleUpload = async (image) => {
    const authToken = localStorage.getItem("companyToken");
    let formData = new FormData();
    formData.append(
      currentImageType === "profile" ? "image1" : "image2",
      image
    );
    try {
      let res = await axios.put(
        `${Api_Url}api/companyroutes/UpdateCompanyProfile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      Getcompanyprofile();
    } catch (error) {
      console.log(error);
    }
    setModalOpen(false);
  };

  const openModal = (imageType) => {
    setCurrentImageType(imageType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageType(null);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {loading ? (
        // <div>Loading</div>
        <div className=" flex justify-center items-center h-screen"><LineWave
            visible={true}
            height="100"
            width="100"
            color="blue"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
            /></div>
      ) : (
        <>
          <div className="bg-[#FFFFFF] rounded-[20px] sm:ml-[14px] ml-0 sm:mr-[20px] mr-0 mt-[4px]">
            <div className="bg-white-A700 flex flex-col font-inter items-center justify-start p-[20px] sm:w-full w-auto">
              <div className="flex flex-col m-auto sm:w-full w-[325px]">
                <div className="bg-gradient relative flex flex-col items-center justify-start mx-auto sm:w-full w-auto">
                  <Img
                    className="h-[238px] md:h-80% object-cover w-auto sm:w-full cursor-pointer"
                    src={profile?.BackgroundImage}
                    alt="rectangle"
                    onClick={() => openModal("background")}
                  />
                  <div
                    className="font-[Inter] text-white border-4 border-solid border-white-A700 flex flex-col sm:h-[172px] h-[100px] sm:w-[172px] w-[100px] items-center justify-center absolute p-[10px] sm:bottom-[-108px] bottom-0 sm:left-[20px] left-[28px] sm:px-[5] rounded-[20px] z-[1]"
                    onClick={() => openModal("profile")}
                  >
                    <Img
                      className="h-[238px] md:h-80% object-cover w-auto sm:w-full cursor-pointer"
                      src={profile?.Image}
                      alt="rectangle"
                    />
                  </div>
                </div>
                <div className="sm:ml-[215px] ml-[0px] mt-[20px]">
                  <div className="flex items-center justify-between z-[1]">
                    <div className="flex items-center justify-start w-auto">
                      <Text
                        className="text-[24px] font-[700] font-[Poppins] md:text-[22px] text-[#2F343A] sm:text-xl w-auto"
                        size="txtPoppinsBold24"
                      >
                        {profile?.Name}
                      </Text>
                      <Img
                        className="object-cover"
                        src="images/verify.svg"
                        alt="rectangle"
                      />
                    </div>
                    <div className=" bottom-[16%] flex flex-row gap-4 items-center justify-end right-[0] w-auto">
                          <Button
                            className="border border-gray-300 border-solid flex h-8 items-center justify-center rounded w-8 hover:shadow-slate-900 hover:scale-125 transition-all duration-500 relative "
                            color="white_A700"
                            size="sm"
                            onClick={() => navigate("/my-team")}
                            variant="fill"
                          >
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                                <BsGlobe2 size={20} color="blue"/>
                                {/* <Img
                                  className="h-6 w-6 rounded"
                                  src="images/img_socialmedia.svg"
                                  alt="socialmedia"
                                /> */}
                              </div>
                            </div>
                          </Button>
              

                      <Button
                        className="border border-gray-300 border-solid flex h-8 items-center justify-center rounded w-8 hover:scale-125 duration-500"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <FaFacebookSquare size={20} color="blue"/>
                        {/* <Img
                          className="h-5"
                          src="images/img_socialmedia_black_900.svg"
                          alt="socialmedia_One"
                        /> */}
                      </Button>
                      <Button
                        className="border border-gray-300 border-solid flex h-8 items-center justify-center rounded w-8 hover:scale-125 duration-500"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <BsInstagram size={20} color="blue"/>
                        {/* <Img
                          className="h-5"
                          src="images/img_socialmedia_black_900_32x32.svg"
                          alt="socialmedia_Two"
                        /> */}
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row my-[10px] font-[Poppins] sm:gap-10 items-center justify-between sm:w-[92%] w-full">
                    <Text
                      className="text-[#2F343A] font-[600] text-[16px] "
                      size="txtPoppinsSemiBold16"
                    >
                      {profile?.Discription}
                    </Text>
                    <Text
                      className="text-[#000000] font-[500] font-[Poppins] text-center text-[14px]"
                      size="txtPoppinsMedium14Black900"
                    >
                      Website
                    </Text>
                  </div>
                  <div className="flex sm:flex-row flex-col gap-[15px]">
                    <div className="flex flex-col font-[Inter] sm:items-center items-start justify-center border border-1-[#E9EAED]">
                      <Button
                        className="cursor-pointer flex items-center text-[#585F65] justify-center min-w-[70px] rounded-[3px]"
                        leftIcon={
                          <Img
                            className="h-4 mb-px mr-px"
                            src="images/img_icon.svg"
                            alt="Icon"
                          />
                        }
                        size="xs"
                        variant="outline"
                      >
                        <div className="font-semibold text-center pl-1 text-[#585F65] text-[14px]">
                          {profile?.Industry}
                        </div>
                      </Button>
                    </div>
                    <div className="border border-[#E9EAED] border-solid flex flex-row sm:items-center items-start sm:justify-between justify-start p-[3px] rounded-[3px]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_icon_black_900.svg"
                        alt="icon"
                      />
                      <Text
                        className="text-center font-[600] text-[#585F65] px-[10px] text-[14px]"
                        size="txtInterSemiBold14"
                      >
                        {profile &&
                          profile.Location &&
                          profile.Location.length > 0 && (
                            <div>{profile.Location[0]}</div>
                          )}
                      </Text>
                    </div>
                    <div className="border border-[#E9EAED] border-solid flex flex-row items-center justify-between p-[3px] rounded-[3px]">
                      <Button
                        className="cursor-pointer flex items-center justify-between gap-[10px] rounded-[3px]"
                        leftIcon={
                          <Img
                            className="h-4 mb-0.5 mr-1"
                            src="images/img_icon_black_900_16x16.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_200_01"
                        size="xs"
                        variant="outline"
                      >
                        <div className="text-center text-[14px] font-[600] text-[#585F65]">
                          1-{profile?.TotalEmployees} Employees
                        </div>
                      </Button>
                    </div>
                    <div className="border border-[#E9EAED] border-solid flex flex-row items-center justify-between p-[3px] rounded-[3px]">
                      <Button
                        className="cursor-pointer flex items-center justify-center min-w-[86px] rounded-[3px] relative"
                        leftIcon={
                          <Img
                            className="h-4 mr-0.5 right-[0] absolute my-px inset-y-[0]"
                            src="images/img_icon_16x16.svg"
                            alt="Icon"
                          />
                        }
                        color="gray_200_01"
                        size="xs"
                        variant="outline"
                      >
                        <div className="font-semibold text-center text-sm">
                          {profile?.Onsite ? "OnSite" : "Offline"}
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[13px] items-start justify-start md:ml-[0] sm:ml-[216px] ml-0 mt-2 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start mt-0.5 w-auto">
                      <ThirtytwoListratingstarfill className="sm:flex-col flex-row gap-1 grid grid-cols-5 justify-start w-24" />
                      <Text
                        className="text-[#000000] font-[400] text-[12px] w-auto"
                        size="txtInterRegular12"
                      >
                        4.1 Reviews
                      </Text>
                    </div>
                    <div
                      className="flex flex-row font-[Poppins] gap-[6px] items-center w-[full] justify-center p-[3px] rounded-[4px]"
                      style={{ background: "rgba(89, 86, 233, 0.1)" }}
                    >
                      <Text
                        className="bg-[#5956E9] flex h-[22px] items-center justify-center ml-[5px] rounded-[50%] text-center text-[#FFFFFF] text-[12px] w-[22px]"
                        size="txtPoppinsSemiBold12WhiteA700"
                      >
                        {profile?.ActiveJobs}
                      </Text>
                      <Text
                        className="mr-1 font-[Poppins]  text-[#151D48] font-[600] text-[12px]"
                        size="txtPoppinsSemiBold12Bluegray90001"
                      >
                        Active Jobs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:gap-5 items-start justify-between sm:ml-5 ml-[0] mt-0.5 w-full">
                <div className="flex flex-col font-[Inter] items-center justify-start ">
                  <div className="flex flex-col items-center justify-start -ml-1 -mb-2 mt-2">
                    <Text
                      className="text-[20px] font-[700] text-[#000000] text-center "
                      size="txtInterBold15"
                    >
                      About
                    </Text>
                  </div>
                </div>
                <div
                  className="flex gap-[4px] cursor-pointer"
                  onClick={() => setModalOpen(true)}
                >
                  <Img
                    className="h-[15px] w-[15px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Text
                    className="font-[500] cursor-pointer font-[Poppins] text-[11px] text-[#000000]"
                    size="txtPoppinsMedium11"
                  >
                    Edit
                  </Text>
                </div>
              </div>
              <Line className="bg-blue-400 h-px sm:ml-5 ml-[0] sm:mr-[3px] mr-0 mt-[12px] w-[100%]" />
              <Text
                className="leading-[20.00px] text-[#2F343A] font-[Inter] text-[14px] mt-4"
                size="txtInterRegular14"
              >
                {profile?.About}
              </Text>
              <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[29px] w-full">
                <div className="flex flex-col items-start justify-start w-full -mb-1">
                  <Text
                    className="font-[700] font-[Inter] text-[20px] text-[#000000]"
                    size="txtInterBold15"
                  >
                    Industry
                  </Text>
                </div>
              </div>
              <Line className="bg-blue-400 h-px sm:ml-5 ml-[0] sm:mr-[3px] mr-0 mt-[12px] w-[100%]" />
              <div className="bg-[#F6F8FE]   py-[16px] rounded-[10px] mb-[28px] mt-[22px]">
                <Text
                  className="font-[700] font-[Inter] text-[20px] text-[#000000]"
                  size="txtInterBold15"
                >
                  {profile?.Industry}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[29px] w-full">
                <div className="flex flex-col items-start justify-start w-full -mb-1">
                  <Text
                    className="font-[700] font-[Inter] text-[20px] text-[#000000]"
                    size="txtInterBold15"
                  >
                    Team Showcase
                  </Text>
                </div>
              </div>
              <Line className="bg-blue-400 h-px sm:ml-5 ml-[0] sm:mr-[3px] mr-0 mt-[12px] w-[100%]" />


              {/* <div className="md:gap-5 gap-[19px] grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 justify-center min-h-[auto] ml-5 md:ml-[0] mt-[30px] w-[100%]">
                <div className="bg-[#ffffff] border border-[#E9EAED] border-solid flex flex-col h-[72px] md:h-auto items-start justify-start pl-[16px] md:pr-[12px] sm:pr-5 pr-[12px] py-[16px] rounded w-full shadow-lg hover:shadow-slate-300">
                  {profile?.Team?.map((team, index) => (
                    <div
                      key={index}
                      className="flex flex-row gap-[12px] items-start justify-start w-auto"
                    >
                      <Img
                        className="h-10 md:h-auto rounded-[50%] w-10"
                        src={team?.studentId?.Image}
                        alt="ellipseOne"
                      />
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-[#2F343A] text-[14px] font-[700] font-[Inter] w-auto"
                          size="txtInterBold14"
                        >
                          {team?.studentId?.Name}
                        </Text>
                        <Text
                          className="text-[#2F343A] text-[14px] font-[500] font-[Inter] w-auto"
                          size="txtInterMedium14"
                        >
                          {team?.role}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className="md:gap-5 gap-6 grid md:grid-cols-2 xl:grid-cols-4 grid-cols-1 justify-center min-h-auto ml-5 md:ml-0 mt-8 w-full">
                  {profile?.Team?.map((team, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-300 border-solid flex flex-col h-72 md:h-auto items-start justify-start pl-4 md:pr-3 sm:pr-5 pr-3 py-4 rounded-xl w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex flex-row gap-3 items-start justify-start w-auto">
                        <img
                          className="h-10 md:h-auto rounded-full w-10"
                          src={team?.studentId?.Image}
                          alt="ellipseOne"
                        />
                        <div className="flex flex-col items-start justify-start w-auto">
                          <p className="text-gray-900 text-lg font-bold font-Inter w-auto">
                            {team?.studentId?.Name}
                          </p>
                          <p className="text-gray-800 text-base font-medium font-Inter w-auto">
                            {team?.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>



              <div className="flex flex-row sm:gap-10 items-start justify-between ml-5 md:ml-[0] mt-9 w-[100%] md:w-full">
                <div className="flex flex-col items-start justify-start md:ml-5 ml-[0] mt-[29px] w-full">
                  <div className="flex flex-col items-start justify-start w-full -ml-5">
                    <Text
                      className="font-[700] font-[Inter] text-[20px] text-[#000000]"
                      size="txtInterBold15"
                    >
                      Website & Social Connect
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue-400 h-px sm:ml-5 ml-[0] sm:mr-[3px] mr-0 mt-[12px] w-[100%]" />
              <List
                className="flex flex-row font-[Poppins] gap-[12px] md:ml-5 ml-[0] mt-[11px] sm:w-[50%] w-full"
                orientation="horizontal"
              >
                
                <div className="bg-gray-50_03 flex flex-col gap-1.5 items-center justify-start p-3 rounded-lg w-full ">
                  {/* <a
                    target="_blank"
                    href={
                      profile?.Facebooklink
                        ? `https://${profile.Facebooklink}`
                        : "#"
                    }
                  > */}
                     <button class="w-12 h-12 hover:shadow-2xl flex items-center justify-center rounded-lg bg-white shadow-md shadow-gray-200 group transition-all duration-300" onClick={() => navigateTo(`https://${profile.Facebooklink}`)} >
                        <svg class="rounded-md transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 72 72" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z" fill="#006699"/>
                        </svg>
                      </button>
                    {/* <Img
                      className="h-[46px] w-[46px]"
                      src="images/img_linkedin1svgrepocom.svg"
                      alt="linkedin1svgrep"
                    /> */}
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      LinkedIn
                    </Text>
                  {/* </a> */}
                </div>
                <div className="bg-gray-50_03 flex flex-col gap-1.5 items-center justify-start p-3 rounded-lg w-full">
                  {/* <a
                    target="_blank"
                    href={
                      profile?.Facebooklink
                        ? `https://${profile.Facebooklink}`
                        : "#"
                    }
                  > */}
                    {/* <Img
                      className="h-[46px] w-[46px]"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    /> */}
                      <button class="bg-blue-50 cursor-pointer shadow-xl hover:scale-105 rounded-md   transition-all duration-300 hover:shadow-indigo-200 " onClick={() => navigateTo(`https://${profile.Facebooklink}`)}>
                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 92 92" fill="none">
                        <rect x="0.138672" width="" height="" rx="15" fill="#EDF4FF"/>
                        <path d="M56.4927 48.6403L57.7973 40.3588H49.7611V34.9759C49.7611 32.7114 50.883 30.4987 54.4706 30.4987H58.1756V23.4465C56.018 23.1028 53.8378 22.9168 51.6527 22.8901C45.0385 22.8901 40.7204 26.8626 40.7204 34.0442V40.3588H33.3887V48.6403H40.7204V68.671H49.7611V48.6403H56.4927Z" fill="#337FFF"/>
                        </svg></button>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Facebook
                    </Text>
                  {/* </a> */}
                </div>
                <div className="bg-gray-50_03 flex flex-col gap-2 items-center justify-end p-[11px] rounded-lg w-full">
                  <a
                    target="_blank"
                    href={
                      profile?.Websitelink
                        ? `https://${profile.Websitelink}`
                        : "#"
                    }
                  >
                    <div className="flex flex-col h-[46px] items-center justify-start w-[46px]">
                      <div className="flex flex-col h-11 items-center justify-start w-11">
                        <div className="flex flex-col h-11 items-center justify-center hover:scale-105 w-11 shadow-xl">
                          <Img
                            className="h-7 w-7 "
                            src="images/img_google.svg"
                            alt="google"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="text-black-900 text-sm mt-1"
                      size="txtPoppinsSemiBold14"
                    >
                      Website
                    </Text>
                  </a>
                </div>
                <div className="bg-gray-50_03 flex flex-col gap-2 items-center justify-end p-[11px] rounded-lg w-full">
                  {/* <a
                    target="_blank"
                    href={
                      profile?.Instagramlink
                        ? `https://${profile.Instagramlink}`
                        : "#"
                    }
                  >
                    <Img
                      className="h-[46px] md:h-auto rounded-[50%] w-[50px]"
                      src="images/img_image25.png"
                      alt="imageTwentyFive"
                    /> */}
                     <button class="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-red-50 to-pink-50 cursor-pointer rounded-md shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-red-200" onClick={() => navigateTo(`https://${profile.Instagramlink}`)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 51 51" fill="none">
                          <path d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z" fill="url(#paint0_radial_7092_54379)"/>
                          <path d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z" fill="url(#paint1_radial_7092_54379)"/>
                          <defs>
                            <radialGradient id="paint0_radial_7092_54379" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.41436 51.017) scale(65.31 65.2708)">
                              <stop offset="0.09" stop-color="#FA8F21"/>
                              <stop offset="0.78" stop-color="#D82D7E"/>
                            </radialGradient>
                            <radialGradient id="paint1_radial_7092_54379" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(31.1086 53.257) scale(51.4733 51.4424)">
                              <stop offset="0.64" stop-color="#8C3AAA" stop-opacity="0"/>
                              <stop offset="1" stop-color="#8C3AAA"/>
                            </radialGradient>
                          </defs>
                        </svg>
                        
                        </button>
                    <Text
                      className="text-black-900 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Instagram
                    </Text>
                  {/* </a> */}
                </div>
              </List>
              <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[29px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="font-[700] font-[Inter] text-[20px] text-[#000000]"
                    size="txtInterBold15"
                  >
                    Active Jobs
                  </Text>
                </div>
              </div>
              <Line className="bg-blue-400 h-px ml-5 md:ml-[0] mr-[3px] mt-[13px] w-[100%]" />


              {/* <List
                className="sm:flex-col flex-row font-inter gap-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-center ml-5 md:ml-[0] mt-[23px] w-[97%]"
                orientation="horizontal"
               >
                {AllJobs?.filter(
                  (job) => !showActiveJobsOnly || job.JobActive
                )?.map((job, index) => (
                  <div
                    key={index}
                    className="bg-[#FAFBFF] flex flex-col items-center justify-start p-[5px] rounded-[8px] w-full"
                  >
                    <div className="flex flex-col gap-[14px] items-center justify-start w-full">
                      <div className="flex p-[5px] flex-col items-start justify-start w-[100%] md:w-full">
                        <Text
                          className="text-[11px] font-[Inter] font-[500] mb-[8px] text-[#000000] text-center"
                          size="txtInterMedium11"
                        >
                          {job?.Experience} years
                        </Text>
                        <Text
                          className="leading-[20.00px] font-[700] font-[Inter] text-[14px] w-full"
                          size="txtInterBold14Black900"
                        >
                          {job?.positionName}
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-[7px] gap-[4px] w-[100%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_icon_black_900.svg"
                            alt="icon"
                          />
                          <Text
                            className="text-[11px] font-[Inter] font-[500] text-[#606060] text-center"
                            size="txtInterMedium11Gray70001"
                          >
                            {job?.addlocation}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[4px] gap-[4px] w-[47%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_clock_black_900.svg"
                            alt="clock"
                          />
                          <Text
                            className="ml-0.5 text-[8px] text-center text-gray-600_02"
                            size="txtInterMedium8"
                          >
                            {formatTimestamp(job?.createdAt)}
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="cursor-pointer font-[Inter] font-[600] bg-[#000000] text-[#FFFFFF] py-[10px] w-full rounded-[8px] text-[11px] text-center"
                        variant="fill"
                        onClick={() => {
                          navigate("/jobs");
                        }}
                      >
                        View Job
                      </Button>
                    </div>
                  </div>
                ))}
              </List> */}
                 <List
                    className="sm:flex-col flex-row font-inter gap-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-center ml-5 md:ml-0 mt-6 w-11/12"
                    orientation="horizontal"
                  >
                    {AllJobs?.filter((job) => !showActiveJobsOnly || job.JobActive)?.map((job, index) => (
                      <div
                        key={index}
                        className="bg-[#FAFBFF] flex flex-col items-center justify-start p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full"
                      >
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-xs font-medium mb-2 text-gray-800 text-left"
                              size="txtInterMedium11"
                            >
                              {job?.Experience} years
                            </Text>
                            <Text
                              className="leading-5 font-bold text-sm text-gray-900 w-full"
                              size="txtInterBold14Black900"
                            >
                              {job?.positionName}
                            </Text>
                            <div className="flex flex-row items-center justify-start mt-2 gap-2 w-full">
                              <Img
                                className="h-4 w-4"
                                src="images/img_icon_black_900.svg"
                                alt="icon"
                              />
                              <Text
                                className="text-xs font-medium text-gray-600"
                                size="txtInterMedium11Gray70001"
                              >
                                {job?.addlocation}
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 gap-2 w-full">
                              <Img
                                className="h-4 w-4"
                                src="images/img_clock_black_900.svg"
                                alt="clock"
                              />
                              <Text
                                className="text-xs text-gray-600"
                                size="txtInterMedium8"
                              >
                                {formatTimestamp(job?.createdAt)}
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-semibold bg-blue-500 hover:bg-blue-800 text-white py-2 w-full rounded-lg text-xs text-center"
                            variant="fill"
                            onClick={() => navigate("/jobs")}
                          >
                            View Job
                          </Button>
                        </div>
                      </div>
                    ))}
                  </List>





              <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] mt-[29px] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="font-[700] font-[Inter] text-[20px] text-[#000000]"
                    size="txtInterBold15"
                  >
                    Location
                  </Text>
                </div>
              </div>
              <Line className="bg-blue-400 h-px ml-5 md:ml-[0] mr-[3px] mt-[13px] w-[100%]" />
              <Img
                className="h-[233px] sm:h-auto mt-7 object-cover rounded-[12px] w-full"
                src="images/img_basemapimage.png"
                alt="basemapimage"
              />
            </div>
          </div>
          <EditProfileModal
            open={modalOpen}
            profile={profile}
            onChange={handleChange}
            onSave={handleSave}
            onClose={handleClose}
          />
          <EditProfileImageModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onUpload={handleUpload}
          />
        </>
      )}
    </>
  );
};

export default ThirtytwoPage;
