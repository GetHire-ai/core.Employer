import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HiringPipline = ({ aiResult, skillsResult, profile, onSkillAverage }) => {
  const [currentStage, setCurrentStage] = useState("Skill Assessment");
  const [skillAverage, setSkillAverage] = useState(0);

  let skillMcqAverage = () => {
    if (
      !profile?.StudentId?.Skill_Set ||
      profile.StudentId.Skill_Set.length === 0
    ) {
      console.log("No skills available");
      return;
    }

    let total = 0;
    profile.StudentId.Skill_Set.forEach((skill) => {
      total += skill?.score || 0;
    });
    let averageSkillScore = total / profile.StudentId.Skill_Set.length;
    let assessmentScore = skillsResult?.scorePercentage || 0;
    let weightedAverage = 0.4 * averageSkillScore + 0.6 * assessmentScore;
    setSkillAverage(weightedAverage);
    onSkillAverage(weightedAverage); // Pass the skillAverage to parent
    return weightedAverage;
  };

  useEffect(() => {
    skillMcqAverage();
  }, []);

  const handleStageClick = (stage) => {
    setCurrentStage(stage);
  };

  return (
    <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
      <div className="flex flex-col gap-[21px]">                                                      
        <p className="text-[14px] font-[400]">
          {" "}
          Status:
          <span className="text-[14px] font-[600]">
            {" "}
            Design Team. UI Designer
          </span>
        </p>
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
          {/* <div
            className="relative text-center cursor-pointer"
            onClick={() => handleStageClick("Video Round")}
          >
            <img
              src={`/images/Vector ${
                currentStage === "Video Round" ? "67" : "68"
              }.png`}
            />
            <p
              className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
            >
              Video Round
            </p>
          </div> */}
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

      <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
        {currentStage === "Skill Assessment" && (
        <div className="flex flex-col gap-6 p-4">
           {/* First sub-div */}
            <div className="border border-[#d9d9d9] rounded-md p-4">
              <div className="flex w-full px-[26px] py-[13px] justify-between items-start">
                <p className="text-[14px] font-[600] ml-[-5px]">Skills:</p>
              </div>
              <span className="text-gray-800 text-md ml-3 mt-2 flex flex-wrap gap-3">
                <div className="w-full flex flex-wrap gap-3">
                  {profile?.StudentId?.Skill_Set?.map((skill) => (
                    <div className="flex flex-col justify-center items-center">
                      <div style={{ width: 60, height: 60 }}>
                        <CircularProgressbar
                          value={skill?.score}
                          text={`${skill?.score}%`}
                          styles={{
                            path: { stroke: '#4F46E5', strokeWidth: '6px' },
                            text: { fill: '#4F46E5', fontSize: '16px', fontWeight: 'bold' },
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-[14px] pb-[19px] font-[500]">
                          {skill?.Skill}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </span>
            </div>
     
             {/* Second sub-div */}
             <div className="border border-[#d9d9d9] rounded-md p-4">
               <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
                 <p className="text-[14px] font-[600]">Detail:</p>
               </div>
               <div className="flex flex-col lg:flex-row justify-center items-center gap-[28px] py-[17px] px-[10px] lg:justify-between">
                 <div className="lg:w-full">
                   <img
                     src="/images/img_image69.png"
                     className="w-[248px] h-[150px] rounded-[10px]"
                     alt=""
                   />
                 </div>
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
                   <div>
                     <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                       Date:
                     </p>
                     <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                       14-16-2023
                     </p>
                   </div>
                 </div>
                 <div className="flex w-full flex-col gap-[17px]">
                   <div>
                     <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                       Assignee:
                     </p>
                     <div className="flex gap-[4px]">
                       <img
                         src="/images/img_ellipse3978.png"
                         className="w-[18px] h-[18px] rounded-[50%]"
                         alt=""
                       />
                       <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                         Andri R. Herdiansyah
                       </p>
                     </div>
                   </div>
                   <div>
                     <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                       Owner:
                     </p>
                     <div className="flex gap-[4px]">
                       <img
                         src="/images/img_ellipse799.png"
                         className="w-[18px] h-[18px] rounded-[50%]"
                         alt=""
                       />
                       <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                         Bogus Fikri
                       </p>
                     </div>
                   </div>
                   <div>
                     <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                       Skills:
                     </p>
                     <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                       App, Administrative, android, Word press, Design
                     </p>
                   </div>
                 </div>
               </div>
        </div>
     </div>
     
       
         
         
         
         // <div className="flex flex-col">
           
          //      <div className="border-b-[1px] border-[#d9d9d9] w-full">
          //        <div className="flex w-full px-[26px] py-[13px] justify-between items-start">
          //          <p className="text-[14px] font-[600] ">Skills:</p>
          //        </div>
          //        <hr />
          //        <br />
          //        <span className="text-gray-800  text-md ml-3 flex flex-wrap gap-3">
          //          {/* <div className="w-full">Skills : </div> */}
          //          <div className="w-full flex flex-wrap gap-3">
          //            {profile?.StudentId?.Skill_Set?.map((skill) => (
          //              <div className="flex flex-col justify-center items-center">
          //                <div style={{ width: 60, height: 60 }}>
          //                  <CircularProgressbar
          //                    value={skill?.score}
          //                    text={`${skill?.score}%`}
          //                  />
          //                </div>
          //                <div>
          //                  <p className="text-[14px] pb-[19px] font-[500]">
          //                    {skill?.Skill}
          //                  </p>
          //                </div>
          //              </div>
          //            ))}
          //          </div>
          //        </span>
          //      </div>

          //     {/* putting vidio round below our first round */}
          //       <div>
          //         <div className="border-b-[1px] border-[#d9d9d9] w-full ">
          //     <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
          //       <p className="text-[14px] font-[600] ">Detail</p>
          //     </div>
          //         </div>
          //         <div className="flex flex-col lg:flex-row justify-center items-center gap-[28px] py-[17px] px-[10px] lg:justify-between">
          //     <div className="lg:w-full">
          //       <img
          //         src="/images/img_image69.png"
          //         className="w-[248px] h-[150px] rounded-[10px]"
          //         alt=""
          //       />
          //     </div>
          //     <div className="flex flex-col w-full gap-[17px]">
          //       <div>
          //         <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
          //           Current status
          //         </p>
          //         <div className="flex gap-[3px]">
          //           <div className="w-[47px] h-[17px] rounded-[16px] bg-[#53c9a2] text-white text-center text-[11px] font-[400]">
          //             Active
          //           </div>
          //           <p className="text-[11px] font-[500] text-[#000000] font-[Poppins] text-[#53c9a2]">
          //             (View Workflow)
          //           </p>
          //         </div>
          //       </div>
          //       <div>
          //         <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
          //           Stage:
          //         </p>
          //         <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
          //           {currentStage}
          //         </p>
          //       </div>
          //       <div>
          //         <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
          //           Date:
          //         </p>
          //         <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
          //           14-16-2023
          //         </p>
          //       </div>
          //     </div>
          //     <div className="flex w-full flex-col gap-[17px]">
          //       <div>
          //         <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
          //           Assignee:
          //         </p>
          //         <div className="flex gap-[4px]">
          //           <img
          //             src="/images/img_ellipse3978.png"
          //             className="w-[18px] h-[18px] rounded-[50%]"
          //             alt=""
          //           />
          //           <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
          //             Andri R. Herdiansyah
          //           </p>
          //         </div>
          //       </div>
          //       <div>
          //         <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
          //           Owner:
          //         </p>
          //         <div className="flex gap-[4px]">
          //           <img
          //             src="/images/img_ellipse799.png"
          //             className="w-[18px] h-[18px] rounded-[50%]"
          //             alt=""
          //           />
          //           <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
          //             Bogus Fikri
          //           </p>
          //         </div>
          //       </div>
          //       <div>
          //         <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
          //           Skills:
          //         </p>
          //         <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
          //           App, Administrative, android, Word press, Design
          //         </p>
          //       </div>
          //     </div>
          //         </div>
          //       </div> 
          

          // </div>
        )}
        {/* {currentStage === "Video Round" && (
          <>
            <div className="border-b-[1px] border-[#d9d9d9] w-full">
              <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
                <p className="text-[14px] font-[600] ">Detail</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-[28px] py-[17px] px-[10px] lg:justify-between">
              <div className="lg:w-full">
                <img
                  src="/images/img_image69.png"
                  className="w-[248px] h-[150px] rounded-[10px]"
                  alt=""
                />
              </div>
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
                <div>
                  <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                    Date:
                  </p>
                  <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                    14-16-2023
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-[17px]">
                <div>
                  <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                    Assignee:
                  </p>
                  <div className="flex gap-[4px]">
                    <img
                      src="/images/img_ellipse3978.png"
                      className="w-[18px] h-[18px] rounded-[50%]"
                      alt=""
                    />
                    <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                      Andri R. Herdiansyah
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                    Owner:
                  </p>
                  <div className="flex gap-[4px]">
                    <img
                      src="/images/img_ellipse799.png"
                      className="w-[18px] h-[18px] rounded-[50%]"
                      alt=""
                    />
                    <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                      Bogus Fikri
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
                    Skills:
                  </p>
                  <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
                    App, Administrative, android, Word press, Design
                  </p>
                </div>
              </div>
            </div>
          </>
        )} */}
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
















// import React, { useEffect, useState } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// const HiringPipline = ({ aiResult, skillsResult, profile }) => {
//   const [currentStage, setCurrentStage] = useState("Skill Assessment");
//   const [skillAverage, setSkillAverage] = useState(0);

//   let skillMcqAverage = () => {
//     if (
//       !profile?.StudentId?.Skill_Set ||
//       profile.StudentId.Skill_Set.length === 0
//     ) {
//       console.log("No skills available");
//       return;
//     }

//     let total = 0;
//     profile.StudentId.Skill_Set.forEach((skill) => {
//       total += skill?.score || 0;
//     });
//     let averageSkillScore = total / profile.StudentId.Skill_Set.length;
//     let assessmentScore = skillsResult?.scorePercentage || 0;
//     let weightedAverage = 0.4 * averageSkillScore + 0.6 * assessmentScore;
//     setSkillAverage(weightedAverage);
//     return weightedAverage;
//   };

//   useEffect(() => {
//     skillMcqAverage();
//   }, []);

//   const handleStageClick = (stage) => {
//     setCurrentStage(stage);
//   };

//   return (
//     <div className="px-[27px] bg-white h-screen flex flex-col overflow-y-scroll w-full pt-[20px] pb-[250px] gap-[20px]">
//       <div className="flex flex-col gap-[21px]">                                                      
//         <p className="text-[14px] font-[400]">
//           {" "}
//           Status:
//           <span className="text-[14px] font-[600]">
//             {" "}
//             Design Team. UI Designer
//           </span>
//         </p>
//         <div className="flex flex-col lg:flex-row justify-center items-center">
//           <div
//             className="relative text-center cursor-pointer"
//             onClick={() => handleStageClick("Skill Assessment")}
//           >
//             <img
//               src={`/images/Vector ${
//                 currentStage === "Skill Assessment" ? "67" : "68"
//               }.png`}
//             />
//             <p
//               className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
//             >
//               Skill Assessment
//             </p>
//           </div>
//           <div
//             className="relative text-center cursor-pointer"
//             onClick={() => handleStageClick("Video Round")}
//           >
//             <img
//               src={`/images/Vector ${
//                 currentStage === "Video Round" ? "67" : "68"
//               }.png`}
//             />
//             <p
//               className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
//             >
//               Video Round
//             </p>
//           </div>
//           <div
//             className="relative text-center cursor-pointer"
//             onClick={() => handleStageClick("Final Round")}
//           >
//             <img
//               src={`/images/Vector ${
//                 currentStage === "Final Round" ? "67" : "68"
//               }.png`}
//             />
//             <p
//               className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
//             >
//               Final Round
//             </p>
//           </div>
//           <div
//             className="relative text-center cursor-pointer"
//             onClick={() => handleStageClick("Hired")}
//           >
//             <img
//               src={`/images/Vector ${
//                 currentStage === "Hired" ? "67" : "68"
//               }.png`}
//             />
//             <p
//               className={`absolute w-full top-[18px] left-[73px] text-[12px] font-[500] transform -translate-x-1/2 -translate-y-1/2 m-0`}
//             >
//               Hired
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col rounded-[12px] w-full border-[1px] border-[#d9d9d9]">
//         {currentStage === "Skill Assessment" && (
//           <>
//             <div className="border-b-[1px] border-[#d9d9d9] w-full">
//               <div className="flex w-full px-[26px] py-[13px] justify-between items-start">
//                 <p className="text-[14px] font-[600] ">Ai Skill Assessment</p>
//                 {/* <div className="flex gap-3">
//                   <div className="flex flex-col justify-center items-center">
//                     <div>
//                       <p className="text-[14px] pb-[19px] font-[500]">
//                         Assessment Score
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-center items-center">
//                     <div style={{ width: 50, height: 50 }}>
//                       <CircularProgressbar
//                         value={skillAverage}
//                         text={`${skillAverage}%`}
//                       />
//                     </div>
//                     <div>
//                       <p className="text-[14px] pb-[19px] font-[500]">
//                         Avarage Score
//                       </p>
//                     </div>
//                   </div>
//                 </div> */}
//               </div>
//               <hr />
//               <br />
//               <span className="text-gray-800  text-md ml-3 flex flex-wrap gap-3">
//                 <div className="w-full">Skills : </div>
//                 <div className="w-full flex flex-wrap gap-3">
//                   {profile?.StudentId?.Skill_Set?.map((skill) => (
//                     <div className="flex flex-col justify-center items-center">
//                       <div style={{ width: 60, height: 60 }}>
//                         <CircularProgressbar
//                           value={skill?.score}
//                           text={`${skill?.score}%`}
//                         />
//                       </div>
//                       <div>
//                         <p className="text-[14px] pb-[19px] font-[500]">
//                           {skill?.Skill}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </span>
//             </div>
//           </>
//         )}
//         {currentStage === "Video Round" && (
//           <>
//             <div className="border-b-[1px] border-[#d9d9d9] w-full">
//               <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
//                 <p className="text-[14px] font-[600] ">Detail</p>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row justify-center items-center gap-[28px] py-[17px] px-[10px] lg:justify-between">
//               <div className="lg:w-full">
//                 <img
//                   src="/images/img_image69.png"
//                   className="w-[248px] h-[150px] rounded-[10px]"
//                   alt=""
//                 />
//               </div>
//               <div className="flex flex-col w-full gap-[17px]">
//                 <div>
//                   <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
//                     Current status
//                   </p>
//                   <div className="flex gap-[3px]">
//                     <div className="w-[47px] h-[17px] rounded-[16px] bg-[#53c9a2] text-white text-center text-[11px] font-[400]">
//                       Active
//                     </div>
//                     <p className="text-[11px] font-[500] text-[#000000] font-[Poppins] text-[#53c9a2]">
//                       (View Workflow)
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
//                     Stage:
//                   </p>
//                   <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
//                     {currentStage}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
//                     Date:
//                   </p>
//                   <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
//                     14-16-2023
//                   </p>
//                 </div>
//               </div>
//               <div className="flex w-full flex-col gap-[17px]">
//                 <div>
//                   <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
//                     Assignee:
//                   </p>
//                   <div className="flex gap-[4px]">
//                     <img
//                       src="/images/img_ellipse3978.png"
//                       className="w-[18px] h-[18px] rounded-[50%]"
//                       alt=""
//                     />
//                     <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
//                       Andri R. Herdiansyah
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
//                     Owner:
//                   </p>
//                   <div className="flex gap-[4px]">
//                     <img
//                       src="/images/img_ellipse799.png"
//                       className="w-[18px] h-[18px] rounded-[50%]"
//                       alt=""
//                     />
//                     <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
//                       Bogus Fikri
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-[11px] font-[400] text-[#818181] font-[Poppins]">
//                     Skills:
//                   </p>
//                   <p className="text-[11px] font-[500] text-[#000000] font-[Poppins]">
//                     App, Administrative, android, Word press, Design
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </>
//         )}
//         {currentStage === "Final Round" && (
//           <>
//             <div className="border-b-[1px] border-[#d9d9d9] w-full">
//               <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
//                 <p className="text-[14px] font-[600] ">Detail</p>
//               </div>
//             </div>
//           </>
//         )}
//         {currentStage === "Hired" && (
//           <>
//             <div className="border-b-[1px] border-[#d9d9d9] w-full">
//               <div className="flex w-full px-[26px] py-[13px] justify-between items-center">
//                 <p className="text-[14px] font-[600] ">Detail</p>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HiringPipline;
