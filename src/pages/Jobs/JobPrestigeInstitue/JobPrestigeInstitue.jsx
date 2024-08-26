import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobPrestigeLink, JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";

const JobPrestigeInstitue = () => {
  const navigate = useNavigate();
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
  const pathName = path?.pathname;

  return (
    <>
      <div className="font-[poppins] px-[18px] flex flex-col gap-[32px] lg:gap-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] lg:gap-0  lg:justify-between">
          <div
            onClick={handleGoBackButton}
            className="flex gap-[16px] justify-center"
          >
            <IoIosArrowDropleft size={"30px"} color="#5956e9" />
            <div>
              <h1 className="font-[500] text-[24px]">
                Senior Product Designer
              </h1>
              <p className="font-[400] text-[14px] text-[#686868]">
                Indore: Full-time
              </p>
            </div>
          </div>
          <div className="font-[600] text-[12px] flex flex-col lg:flex-row gap-[12px]">
            <div className="bg-[#ffe2e5] w-[173px] p-[9px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#fa5a7d] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p>Applications</p>
            </div>
            <div className="bg-[#fff4de] p-[9px] w-[173px] rounded-[12px] flex justify-start items-center gap-[6px]">
              <div className="bg-[#ff947a] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p>Interview Schedule</p>
            </div>
            <div className="bg-[#dcfce7] p-[9px] w-[173px]  rounded-[12px] flex justify-start items-center gap-[6px] ">
              <div className="bg-[#3cd856] w-[32px] text-white h-[32px] rounded-[50%] flex items-center justify-center text-[16px]">
                0
              </div>
              <p>Selected</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center border-b-[2px] border-[#9b9b9b] gap-[10px] lg:gap-0 w-full">
          <div className="text-[14px] font-[600] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
            {JobsLinks.map((e) => {
              return (
                <>
                  <Link
                    key={e?.link}
                    className={`lg:py-[15px] ${
                      pathName === e?.link
                        ? " lg:border-[#5956e9] text-[#5956e9] lg:py-[15px] lg:border-b-[3px]"
                        : ""
                    }`}
                    to={e?.link}
                  >
                    {e?.name}
                  </Link>
                </>
              );
            })}
          </div>
          <div className="flex gap-[10px] justify-center lg:justify-end mb-[8px]">
            <Link
              to="/jobsShareandPromote"
              className=" cursor-pointer flex justify-center items-center border-[1px] rounded-[4px] p-[4px] border-[#000] text-[12px] w-[227px] font-[600]"
            >
              Share & Promote
            </Link>
            <select
              className="border bg-[#000] text-white h-[32px] w-full rounded-[4px] font-[600] text-[12px] text-left"
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
        <div className="flex  py-[30px] lg:pr-[66px]">
          <div className="bg-white rounded-[20px] w-full p-[10px] lg:p-[32px] border-[1px] border-[#cccccc]">
            <div className="flex flex-col gap-[20px] lg:gap-0 lg:flex-row justify-center lg:justify-between items-center lg:items-end">
              <div className="flex flex-col justify-center items-center lg:flex-row gap-[10px] lg:gap-0">
                <div className="flex gap-[10px]">
                  <img
                    src="/images/apple.png"
                    className="w-[77px] h-[77px] rounded-[50%]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[24px] font-[Lato] font-[600]">
                      Prestige Institue
                    </p>
                    <p className="text-[#606060] text-[16px] font-[600] font-[Lato]">
                      @Prestige
                    </p>
                    <p className="text-[11px] font-[Lato] font-[600]">
                      Everyone has a story to tell.
                    </p>
                  </div>
                </div>
                <button className="bg-black w-[86px] lg:mt-[50px] lg:ml-[-10px] h-[30px] px-[11px] py-[5px] flex gap-[9px] text-white text-[14px] font-[500] rounded-[6px]">
                  <img
                    src="/images/chat.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  Chat
                </button>
              </div>
              <div className="flex gap-[8px]">
                <button className="bg-black px-[11px] py-[5px] flex gap-[9px] text-white text-[14px] font-[500] rounded-[6px]">
                  <img
                    src="/images/letterBox.png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  Invite
                </button>
                <button className="bg-black px-[11px] py-[5px] flex gap-[9px] text-white text-[14px] font-[500] rounded-[6px]">
                  <img
                    src="/images/img_notesnotepadsvgrepocom.svg"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  Notes
                </button>
              </div>
            </div>
            <div className="text-[14px] mt-[20px] font-[600] grid grid-cols-2 gap-[10px] lg:flex lg:gap-[50px] justify-start items-center text-[#9b9b9b] w-full">
              {JobPrestigeLink.map((e) => {
                return (
                  <>
                    <Link
                      key={e?.link}
                      className={`${
                        pathName === e?.link
                          ? " lg:border-[#5956e9] text-[#5956e9] lg:border-b-[3px]"
                          : ""
                      }`}
                      to={e?.link}
                    >
                      {e?.name}
                    </Link>
                  </>
                );
              })}
            </div>
            <div className="bg-[#f8fafe] rounded-[20px] mt-[20px] flex flex-col gap-[11px] p-[20px] text-[#9b9b9b] text-[16px] font-[500]">
              <p>
                The Job Boards Connect feature allows you to receive
                applications from job boards where you have manually posted job
                ads. For each job ad you have posted, you will need to set the
                job board to send applicants to an email address unique to this
                job. Applicants will then be created and added automatically to
                the job.
              </p>
              <p>
                You will find below guides on how to receive candidates for some
                of the major job boards, but this feature works for almost any
                job board. Feel free to review our documentation at the link
                below for more in-depth explanations.
              </p>
            </div>
            <div className="bg-[#f8fafe] rounded-[20px] mt-[25px] grid justify-center items-center lg:grid-cols-4 gap-[19px] px-[48px] py-[20px]">
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
              <img
                src="/images/image35.png"
                className="w-[207px] h-[159px]"
                alt=""
              />
            </div>
            <p className="mt-[18px] text-[20px] pb-[12px] font-[500]">Team Members</p>
            <div className="flex flex-col lg:flex-row gap-[26px] bg-[#f8fafe] rounded-[20px] py-[30px] px-[57px]">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/img_ellipse4060.png"
                  className="w-[124px] h-[124px] rounded-[50%]"
                  alt=""
                />
                <p className="text-[14px] font-[800] font-[Lato]">Christina</p>
                <p className="text-[11px] font-[Lato] font-[500]">Manager</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/img_ellipse4059.png"
                  className="w-[124px] h-[124px] rounded-[50%]"
                  alt=""
                />
                <p className="text-[14px] font-[800] font-[Lato]">Nick</p>
                <p className="text-[11px] font-[Lato] font-[500]">Manager</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/Ellipse3934.png"
                  className="w-[124px] h-[124px] rounded-[50%]"
                  alt=""
                />
                <p className="text-[14px] font-[800] font-[Lato]">Greta</p>
                <p className="text-[11px] font-[Lato] font-[500]">Manager</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/img_ellipse4060.png"
                  className="w-[124px] h-[124px] rounded-[50%]"
                  alt=""
                />
                <p className="text-[14px] font-[800] font-[Lato]">Christina</p>
                <p className="text-[11px] font-[Lato] font-[500]">Manager</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/img_ellipse4059.png"
                  className="w-[124px] h-[124px] rounded-[50%]"
                  alt=""
                />
                <p className="text-[14px] font-[800] font-[Lato]">Nick</p>
                <p className="text-[11px] font-[Lato] font-[500]">Manager</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/images/Ellipse3934.png"
                  className="w-[124px] h-[124px] rounded-[50%]"
                  alt=""
                />
                <p className="text-[14px] font-[800] font-[Lato]">Greta</p>
                <p className="text-[11px] font-[Lato] font-[500]">Manager</p>
              </div>
            </div>
            <p className="font-[500] text-[20px] pb-[12px] mt-[18px] ">Blogs</p>
            <div className="bg-[#f8fafe] flex flex-col lg:grid lg:grid-cols-2 gap-[43px] rounded-[20px] p-[5px] lg:p-[30px]">
              <div className="flex gap-[12px] lg:w-[335px]">
                <img
                  src="/images/img_unsplash4wydpgych4c.png"
                  className="w-[96px] h-[79px] rounded-[16px] "
                  alt=""
                />
                <div className="flex flex-col gap-[12px] ">
                  <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <p className="bg-[#f2f2f2] p-[4px] text-[8px] font-[400] font-[Open Sans]">
                      Technology
                    </p>
                    <p className="text-[10px] font-[300] font-[Open Sans] text-[#828282]">
                      Jan 1,2022 9823 views
                    </p>
                  </div>
                  <p className="text-[16px] font-[700] font-[Lato]">
                    Augmented Reality Trends for 2022
                  </p>
                </div>
              </div>
              <div className="flex gap-[12px] lg:w-[335px]">
                <img
                  src="/images/img_unsplash4wydpgych4c.png"
                  className="w-[96px] h-[79px] rounded-[16px] "
                  alt=""
                />
                <div className="flex flex-col gap-[12px] ">
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <p className="bg-[#f2f2f2] p-[4px] text-[8px] font-[400] font-[Open Sans]">
                      Technology
                    </p>
                    <p className="text-[10px] font-[300] font-[Open Sans] text-[#828282]">
                      Jan 1,2022 9823 views
                    </p>
                  </div>
                  <p className="text-[16px] font-[700] font-[Lato]">
                    Augmented Reality Trends for 2022
                  </p>
                </div>
              </div>
              <div className="flex gap-[12px] lg:w-[335px]">
                <img
                  src="/images/img_unsplash4wydpgych4c_79x96.png"
                  className="w-[96px] h-[79px] rounded-[16px] "
                  alt=""
                />
                <div className="flex flex-col gap-[12px] ">
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <p className="bg-[#f2f2f2] p-[4px] text-[8px] font-[400] font-[Open Sans]">
                      Business
                    </p>
                    <p className="text-[10px] font-[300] font-[Open Sans] text-[#828282]">
                      Jan 1,2022 9823 views
                    </p>
                  </div>
                  <p className="text-[16px] font-[700] font-[Lato]">
                    Stocks making the biggest moves midday: Tesla...
                  </p>
                </div>
              </div>
              <div className="flex gap-[12px] lg:w-[335px]">
                <img
                  src="/images/img_unsplash4wydpgych4c_79x96.png"
                  className="w-[96px] h-[79px] rounded-[16px] "
                  alt=""
                />
                <div className="flex flex-col gap-[12px] ">
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                    <p className="bg-[#f2f2f2] p-[4px] text-[8px] font-[400] font-[Open Sans]">
                      Business
                    </p>
                    <p className="text-[10px] font-[300] font-[Open Sans] text-[#828282]">
                      Jan 1,2022 9823 views
                    </p>
                  </div>
                  <p className="text-[16px] font-[700] font-[Lato]">
                    Stocks making the biggest moves midday: Tesla...
                  </p>
                </div>
              </div>
            </div>
            <p className="font-[500] mt-[18px] text-[20px]">Location</p>
            <div className="bg-[#f8fafe] rounded-[20px] mt-[12px] h-[186px] px-[13px] py-[8px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.94958915675!2d75.69903607352784!3d22.72420499694239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1711516476313!5m2!1sen!2sin"
                width="100%"
                height="100%"
                title="map"
                style={{
                  // border: 0,
                  // boxShadow: "0px 0px 10px 0px #00000040",
                  // borderRadius: "20px",
                  borderRadius:"20px"
                }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPrestigeInstitue;
