import { GetApi } from "Api/Api_Calling";
import React, { useEffect, useState } from "react";
import JobSidebar from "pages/Jobs/JobsApplication/JobSidebar";
import { useNavigate } from "react-router-dom";
import { MutatingDots } from 'react-loader-spinner'

const RecentJobPost = () => {
  const navigate = useNavigate();
  const [AllJobs, setAllJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [side1, setSide1] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  function openSideBar(index = null) {
    setSide1(index !== null ? true : !side1);
    setOpenIndex(index);
  }
  const GetAllrecentJobs = async () => {
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

  function handleChange(){
    navigate('/jobs');
  }

  useEffect(() => {
    GetAllrecentJobs();
  }, []);

  return (
    <>  
      {loading ? (
        <div className="  flex justify-center origin-center"><MutatingDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          /></div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-[16px]">
            <h1 className="font-[500] text-[#333333] font-[Poppins] text-[20px]">
              Recent Job Posts
            </h1>
            <button
                className="bg-blue-500 hover:bg-blue-700 hover:shadow-slate-600 text-white py-[12px] px-[28px] font-medium text-[16px] font-[Montserrat] rounded-full transition duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center"
                onClick={handleChange}
              >
                See All
            </button>

          </div>
          <div className="sm:overflow-x-hidden overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#EDF4FB] rounded-[4px] pt-[12px] px-[12px] pb-[8px]">
                <tr>
                  <th className="text-[#0C1E5B] font-[Montserrat] font-[500] text-[12px] line-[20px] pt-[12px] pb-[8px] pl-[12px] text-left">
                    Job Title
                  </th>
                  <th className="text-[#0C1E5B] font-[Montserrat] font-[500] text-[12px] line-[20px] pt-[12px] pb-[8px] text-left">
                    Location
                  </th>
                  <th className="text-[#0C1E5B] font-[Montserrat] font-[500] text-[12px] line-[20px] pt-[12px] pb-[8px] text-left">
                    Applications
                  </th>
                  <th className="text-[#0C1E5B] font-[Montserrat] font-[500] text-[12px] line-[20px] pt-[12px] pb-[8px] text-left">
                    Shortlisted
                  </th>
                  {/* <th className="text-[#0C1E5B] font-[Montserrat] font-[500] text-[12px] line-[20px] pt-[12px] pb-[8px] text-left">
                    Action
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {AllJobs.map((job, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: "1px solid #D2D2D2",
                    }}
                  >
                    <td
                      className="text-[#666666] font-[Montserrat] font-[400] text-[14px] py-3 text-start cursor-pointer"
                      onClick={() =>
                        navigate(`/jobsApplicationManager2/${job?._id}`)
                      }
                    >
                      {job?.positionName}
                    </td>
                    <td className="text-[#666666] font-[Montserrat] font-[400] text-[14px] py-3 text-start">
                      {job?.location}
                    </td>
                    <td className="text-[#666666] font-[Montserrat] font-[400] text-[14px] py-3 ">
                      {job?.totalApplicationCount}
                    </td>
                    <td className="text-[#666666] font-[Montserrat] font-[400] text-[14px] py-3 ">
                      {job?.shortlistedApplicationCount}
                    </td>
                    {/* <td className="text-[#666666] font-[Montserrat] font-[400] text-[14px] py-3 ">
                      <button onClick={() => openSideBar(index)}>view</button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <JobSidebar
            side1={side1}
            openSideBar={openSideBar}
            selectedApplication={AllJobs[openIndex]}
          />
        </div>
      )}
    </>
  );
};

export default RecentJobPost;
