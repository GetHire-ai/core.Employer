import React, { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { JobPrestigeLink, JobsLinks } from "../JobsLinks";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";

const JobPrestigeReviews = () => {
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
            
                <div className="flex gap-[9px]">
                  <img
                    src="/images/apple.png"
                    className="w-[77px] h-[77px] rounded-[50%]"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[24px] font-[Lato] font-[600]">
                      Apple
                    </p>
                    <p className="text-[#606060] text-[16px] font-[600] font-[Lato]">
                      @Apple
                    </p>
                    <p className="text-[11px] font-[Lato] font-[600]">
                      Everyone has a story to tell.
                    </p>
                  </div>
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
            <div className="bg-[#f8fafe] rounded-[20px] mb-[166px] mt-[20px] p-[20px]">
              <p className="text-[#23262f] text-[24px] font-[500]">
                Customer Reviews
              </p>
              <div className="flex gap-[8px] mt-[17px]">
                <div className="flex gap-[4px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
                <p className="font-[400] text-[12px] font-[inter]">
                  11 Reviews
                </p>
              </div>
              <p className="text-[16px]  mt-[8px] font-[400] font-[inter]">
                Be the first to review{" "}
                <span className="font-[600] text-[16px] ml-[8px]">
                  Tray Table
                </span>
              </p>
              <div className="border-[2px] mt-[23px] lg:w-[843px] flex justify-between items-center gap-[20px] p-[16px] bg-[#fefefe] rounded-[16px]">
                <input type="text" className="text-[16px] font-[400] w-full" />
                <button className="bg-[#5956e9] w-[176px] h-[40px]  text-[#fff] rounded-[80px] text-[11px] lg:text-[16px] font-[500] font-[inter]">
                  Write Review
                </button>
              </div>
              <p className="font-[500] text-[28px] mt-[30px]">11 Reviews</p>
              <div className="flex mt-[47px] gap-[40px]">
                <img
                  src="/images/avatar.png"
                  className="w-[72px] h-[72px] rounded-[50%]"
                  alt=""
                />
                <div className="flex flex-col  gap-[16px]">
                  <p className="font-[600] text-[20px]">Sofia Harvetz</p>
                  <div className="flex gap-[4px]">
                    <FaStar size={"16px"} />
                    <FaStar size={"16px"} />
                    <FaStar size={"16px"} />
                    <FaStar size={"16px"} />
                    <FaStar size={"16px"} />
                  </div>
                  <p className="text-[16px] pr-[44px] font-[400] font-[inter]">
                    I bought it 3 weeks ago and now come back just to say
                    “Awesome Product”. I really enjoy it. At vero eos et
                    accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupt et quas
                    molestias excepturi sint non provident.
                  </p>
                  <div className="flex gap-[16px] text-[12px] font-[600]">
                    <p>Like</p>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPrestigeReviews;
