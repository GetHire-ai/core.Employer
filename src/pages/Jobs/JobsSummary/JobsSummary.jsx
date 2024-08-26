import React, { useEffect, useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { GetApi, GetApiwithouttoken } from "Api/Api_Calling";
import img_datesvgrepocom from '../../../assets/AllImages/img_datesvgrepocom.svg';
import img_locationsvgrepocom from '../../../assets/AllImages/img_locationsvgrepocom.svg';
import img_pricetagsvgrepocom from '../../../assets/AllImages/img_pricetagsvgrepocom.svg';
import img_contractagreem from '../../../assets/AllImages/img_contractagreem.svg';

const JobsSummary = () => {
  const { id } = useParams();

  const [Jobsummary, setJobsummary] = useState({});
  const [loading, setLoading] = useState(true);

  const GetJobDetail = async () => {
    try {
      const Getjobdata = await GetApiwithouttoken(`api/AdminRoutes/GetAJobs/${id}`)
      // console.log(Getjobdata?.data.data)
      setJobsummary(Getjobdata?.data?.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    GetJobDetail()
  }, [id]);


  const [AllApplication, setAllApplication] = useState([]);

  const GetAllApplication = async () => {
    try {
      const Getjobdata = await GetApi(`api/CompanyRoutes/GetAllStudentsofajob/${id}`)
      console.log(Getjobdata?.data)
      setAllApplication(Getjobdata?.data?.data)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    GetAllApplication()
  }, [id]);





  const handleGoBackButton = () => {
    navigate(-1);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    switch (value) {
      case "Publish":
        navigate("/jobsPublishToJobBoards");
        break;
      case "Connect":
        navigate("/jobBoardsConnect");
        break;
      case "Receive":
        navigate("/jobReceiveJobBoardApplication");
        break;
      case "CollegeCampus":
        navigate("/jobPublishToCollege");
        break;
      case "PrestigeInstitue":
        navigate("/jobPrestigeInstitue");
        break;
      default:
        break;
    }
  };

  const path = useLocation();
  const navigate = useNavigate();
  const pathName = path?.pathname;


  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${months[monthIndex]} ${day < 10 ? '0' + day : day}, ${year}`;
  };

  const formatDate1 = (timestamp) => {
    const [day, month, year] = timestamp?.split('-');

    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];

    return `${months[parseInt(month, 10) - 1]} ${parseInt(day, 10)}, ${year}`;
  };


  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="font-[poppins] px-[18px] ">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] lg:gap-0  lg:justify-between">
              <div
                onClick={handleGoBackButton}
                className="flex gap-[16px] justify-center"
              >
                <IoIosArrowDropleft size={"30px"} color="#5956e9" />
                <div>
                  <h1 className="font-[500] font-[Poppins] text-[#000000] text-[24px]">
                    {Jobsummary?.positionName}
                  </h1>
                  <p className="font-[400] font-[Poppins] text-[14px] text-[#686868]">
                    {Jobsummary?.addlocation} {Jobsummary?.contractDetails}
                  </p>
                </div>
              </div>
              <div className="font-[600] text-[12px] flex flex-col lg:flex-row gap-[12px]">
                <div className="bg-[#ffe2e5] w-[173px] p-[9px] rounded-[12px] flex justify-start items-center gap-[6px]">
                  <div className="bg-[#fa5a7d] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                  {AllApplication?.length}
                  </div>
                  <p className="text-[#151D48] font-[Poppins] font-[600] text-[12px]">
                    Applications
                  </p>
                </div>
                <div className="bg-[#fff4de] p-[9px] w-[173px] rounded-[12px] flex justify-start items-center gap-[6px]">
                  <div className="bg-[#ff947a] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                    0
                  </div>
                  <p className="text-[#151D48] font-[Poppins] font-[600] text-[12px]">
                    Interview Schedule
                  </p>
                </div>
                <div className="bg-[#dcfce7] p-[9px] w-[173px]  rounded-[12px] flex justify-start items-center gap-[6px] ">
                  <div className="bg-[#3cd856] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                    0
                  </div>
                  <p className="text-[#151D48] font-[Poppins] font-[600] text-[12px]">
                    Selected
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center border-b-[2px] border-[#9b9b9b] gap-[10px] lg:gap-0 w-full">
              <div className="text-[14px] font-[600] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
                <>
                  <Link
                    className={`${pathName === `/jobsSummary/${id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                    to={`/jobsSummary/${id}`}
                  >
                    Summary
                  </Link>
                  <Link
                    className={`${pathName === `/jobsApplication/${id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                    to={`/jobsApplication/${id}`}
                  >
                    Application
                  </Link>
                  <Link
                    className={`${pathName === `/jobsApplicationManager/${id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                    to={`/jobsApplicationManager/${id}`}
                  >
                    Application Manager
                  </Link>
                  <Link
                    className={`${pathName === `/jobReports/${id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                    to={`/jobReports/${id}`}
                  >
                    Reports
                  </Link>
                  <Link
                    className={`${pathName === `/jobsSettings/${id}` ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]" : ""}`}
                    to={`/jobsSettings/${id}`}
                  >
                    Settings
                  </Link>
                </>

              </div>
              <div className="flex gap-[10px] justify-center lg:justify-end mb-[8px]">
                <Link
                  to="/jobsShareandPromote"
                  className="bg-[#fff] cursor-pointer flex justify-center items-center border-[1px] rounded-[4px] p-[4px] border-[#000] text-[12px] w-[227px] font-[600]"
                >
                  Share & Promote
                </Link>
                <select
                  className="border bg-[#1C212D] border-[#000000] text-white h-[32px] w-full rounded-[4px] font-[600] text-[12px] text-left"
                  value={selectedOption}
                  onChange={handleSelectOption}
                >
                  <option value="">Published</option>
                  <option value="Publish">Publish</option>
                  <option value="Connect">Connect</option>
                  <option value="Receive">Receive</option>
                  <option value="CollegeCampus">CollegeCampus</option>
                  <option value="PrestigeInstitue">PrestigeInstitue</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full mt-[32px] gap-[14px] ">
              <div className="bg-white w-full rounded-[20px] p-[20px]">
                <h1 className="font-[500] text-[20px]">Job Overview</h1>
                <div className="flex flex-col gap-[15px] mt-[20px]">
                  <div className="flex gap-[18px] ">
                    <div>
                      <img
                        src={img_datesvgrepocom}
                        className="w-[20px] h-[20px]"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="font-[600] text-[16px]">Date Posted:</h1>
                      <p className="font-[400] text-[16px]">{formatDate(Jobsummary?.createdAt)}</p>
                    </div>
                  </div>
                  <div className="flex gap-[18px] ">
                    <img
                       src={img_datesvgrepocom}
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <div>
                      <h1 className="font-[600] text-[16px]">Expiration date:</h1>
                      {/* <p className="font-[400] text-[16px]">{formatDate1(Jobsummary?.ExpirationDate)}</p> */}
                    </div>
                  </div>
                  <div className="flex gap-[18px] ">
                    <img
                       src={img_locationsvgrepocom}
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <div>
                      <h1 className="font-[600] text-[16px]">Location:</h1>
                      <p className="font-[400] text-[16px]">{Jobsummary?.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-[18px] ">
                    <img
                     src={img_pricetagsvgrepocom}
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <div>
                      <h1 className="font-[600] text-[16px]">Salary:</h1>
                      <p className="font-[400] text-[16px]">{Jobsummary?.minSalary}-{Jobsummary?.maxSalary}</p>
                    </div>
                  </div>

                  <div className="flex gap-[18px] ">
                    <img
                     src={img_contractagreem}
                      className="w-[20px] h-[20px]"
                      alt=""
                    />
                    <div>
                      <h1 className="font-[600] text-[16px]">Contract Details:</h1>
                      <p className="font-[400] text-[16px]">{Jobsummary?.contractDetails}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-[36px] flex flex-col gap-[13px]">
                  <h1 className="font-[500] text-[20px]">Job Skills</h1>
                  <div className="grid grid-cols-3 gap-[6px]">
                    {Jobsummary?.skillsRequired?.map((skill, index) => (
                      <p key={index} className="bg-[#ffd831] text-[8px] font-[600] p-[10px] text-center rounded-[6px]">
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col col-start-3 col-end-7 gap-[12px]">
                <div className="bg-white rounded-[20px] p-[12px] flex flex-col gap-[14px]">
                  <h1 className="text-[24px] font-[500]">Job Description</h1>
                  <p className="text-[16px] font-[400] text-[#7e7e7e]"
                    dangerouslySetInnerHTML={{ __html: Jobsummary?.Job_Description }} />
                </div>
                <div className="bg-white rounded-[20px] p-[12px] flex flex-col gap-[14px]">
                  <h1 className="text-[24px] font-[500]">Key Responsibilities</h1>
                  <p className="text-[16px] font-[400] text-[#7e7e7e] list-decimal px-[12px] gap-[14px] ml-[6px] flex flex-col"
                    dangerouslySetInnerHTML={{ __html: Jobsummary?.Responsibilities }} />
                </div>
                <div className="bg-white rounded-[20px] p-[12px] flex flex-col gap-[14px]">
                  <h1 className="text-[24px] font-[500]">Skill & Exerience</h1>
                  <p className="text-[16px] font-[400] text-[#7e7e7e] list-decimal px-[12px] ml-[6px] gap-[14px] flex flex-col"
                    dangerouslySetInnerHTML={{ __html: Jobsummary?.Skill_Exerience }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobsSummary;
