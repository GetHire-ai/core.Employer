import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HiringPipline = ({ aiResult, profile }) => {
  const [currentStage, setCurrentStage] = useState("Skill Assessment");

  const handleStageClick = (stage) => {
    setCurrentStage(stage);
  };

  return (
    <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
      <div className="flex flex-col gap-[21px]">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div
            className="relative text-center cursor-pointer"
            onClick={() => handleStageClick("Skill Assessment")}
          >
            <img
              src={`/images/Vector ${
                currentStage === "Skill Assessment" ? "67" : "68"
              }.png`}
            />
            <p
              className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
            >
              Skill Assessment
            </p>
          </div>
          <div
            className="relative text-center cursor-pointer"
            onClick={() => handleStageClick("Final Round")}
          >
            <img
              src={`/images/Vector ${
                currentStage === "Final Round" ? "67" : "68"
              }.png`}
            />
            <p
              className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
            >
              Final Round
            </p>
          </div>
          <div
            className="relative text-center cursor-pointer"
            onClick={() => handleStageClick("Hired")}
          >
            <img
              src={`/images/Vector ${
                currentStage === "Hired" ? "67" : "68"
              }.png`}
            />
            <p
              className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
            >
              Hired
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-[12px] w-full ">
        {currentStage === "Skill Assessment" && (
          <div className="flex flex-col gap-3 p-2">
            <div className="border border-[#d9d9d9] rounded-md p-1">
              <div className="flex w-full px-[26px] py-[13px] justify-between items-start">
                <p className="text-[14px] font-[600] ml-[-5px]">Skills :</p>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <p className="text-[14px] pb-[1px] font-[500]">
                      Skill Assessment
                    </p>
                  </div>
                  <div style={{ width: 60, height: 60 }}>
                    <CircularProgressbar
                      value={profile?.skillsTestResult || 0}
                      text={`${profile?.skillsTestResult || 0}%`}
                      styles={{
                        path: { stroke: "#4F46E5", strokeWidth: "6px" },
                        text: {
                          fill: "#4F46E5",
                          fontSize: "16px",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <span className="text-gray-800 text-md ml-3 mt-2 flex flex-wrap gap-3">
                <div className="w-full flex flex-wrap gap-5">
                  {profile?.skillsTestDetails?.map((skill) => (
                    <div className="flex flex-col justify-start items-center mx-2">
                      <div style={{ width: 60, height: 60 }}>
                        <CircularProgressbar
                          value={skill?.score}
                          text={`${skill?.score}%`}
                          styles={{
                            path: { stroke: "#4F46E5", strokeWidth: "6px" },
                            text: {
                              fill: "#4F46E5",
                              fontSize: "16px",
                              fontWeight: "bold",
                            },
                          }}
                        />
                      </div>
                      <div className="max-w-[3rem] flex flex-wrap">
                        <p className="text-[14px] pb-[19px] font-[500]">
                          {skill?.skill}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </span>
            </div>

            {/* Second sub-div */}

            <div className="border border-[#d9d9d9] rounded-md p-1">
              <div className="flex w-full px-[26px] py-[13px] justify-between items-start">
                <p className="text-[14px] font-[600] ml-[-5px]">
                  Video Interview :
                </p>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <p className="text-[14px] pb-[1px] font-[500]">
                      Video Interview
                    </p>
                  </div>
                  <div style={{ width: 60, height: 60 }}>
                    <CircularProgressbar
                      value={profile?.aiTestResult?.score || 0}
                      text={`${profile?.aiTestResult?.score || 0}%`}
                      styles={{
                        path: { stroke: "#4F46E5", strokeWidth: "6px" },
                        text: {
                          fill: "#4F46E5",
                          fontSize: "16px",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-[28px] py-[17px] px-[10px] lg:justify-between">
                <div className="lg:w-full">here will show preview of video</div>
                <div className="flex flex-col w-full gap-[17px]">
                  <div>
                    <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                      Current status
                    </p>
                    <div className="flex gap-[3px]">
                      <div className="w-[47px] h-[17px] rounded-[16px] bg-[#53c9a2] text-white text-center text-[11px] font-[400]">
                        Active
                      </div>
                      <p className="text-[11px] font-[500] text-[#000000] font-[Poppins] text-[#53c9a2]">
                        (View Workflow)
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                      Stage:
                    </p>
                    <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                      {currentStage}
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-[17px]">
                  <div>
                    <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                      ai evaluation:
                    </p>
                    <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                      {aiResult?.aiText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {currentStage === "Final Round" && (
          <>
            <div className="border-b-[1px] border-[#d9d9d9] w-full">
              <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
                <p className="text-[14px] font-[600] ">Detail</p>
              </div>
            </div>
          </>
        )}
        {currentStage === "Hired" && (
          <>
            <div className="border-b-[1px] border-[#d9d9d9] w-full">
              <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
                <p className="text-[14px] font-[600] ">Detail</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HiringPipline;
