import { GetApi, PostApi } from "Api/Api_Calling";
import React, { useEffect, useState } from "react";

const SuggestedCandidates = ({ job, candidates }) => {
  const handleInvite = async (data) => {
    try {
      let res = await GetApi(
        `api/CompanyRoutes/getinvited/invite/${job._id}/${data}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNotInvite = async (data) => {
    try {
      console.log(data._id, job._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="p-2  mx-auto rounded-lg w-full">
    //   {candidates.length > 0 ? (
    //     <ul className="space-y-4 w-full">
    //       {candidates.map((candidate, index) => (
    //         <li
    //           key={index}
    //           className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
    //         >
    //           <div className="flex justify-between items-center mb-2">
    //             <div>
    //               <h2 className="text-xl text-gray-700 font-normal">{candidate?.Name}</h2>
    //               <p className="text-sm text-gray-600">{candidate?.Email}</p>
    //             </div>
    //             <span
    //               className={`px-2 py-1 rounded-full text-white shadow-md ${
    //                 candidate?.matchPercentage > 70
    //                   ? "bg-green-500"
    //                   : candidate?.matchPercentage > 40
    //                   ? "bg-yellow-500"
    //                   : "bg-red-500"
    //               }`}
    //             >
    //               {candidate?.matchPercentage?.toFixed(2)}% Match
    //             </span>
    //           </div>
    //           <div className="mb-4">
    //             <h3 className="font-medium text-gray-700 underline">Match Details:</h3>
    //             <ul className="list-disc pl-5 text-gray-700">
    //               {candidate?.skillMatch ? (
    //                 <li>Skills: Matched</li>
    //               ) : (
    //                 <li>Skills: Not Matched</li>
    //               )}
    //               {candidate?.locationMatch ? (
    //                 <li>Location: Matched</li>
    //               ) : (
    //                 <li>Location: Not Matched</li>
    //               )}
    //               {candidate?.experienceMatch ? (
    //                 <li>Experience: Matched</li>
    //               ) : (
    //                 <li>Experience: Not Matched</li>
    //               )}
    //             </ul>
    //           </div>
    //           <div className="flex space-x-4">
    //             <span>{candidate?.applicationStatus}</span>
    //             <button
    //               className="px-4 py-2 bg-blue-400 text-white rounded hover:shadow-lg hover:bg-blue-600"
    //               onClick={() => handleInvite(candidate._id)}
    //             >
    //               Invite
    //             </button>
    //             <button
    //               className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600"
    //               onClick={() => handleNotInvite(candidate._id)}
    //             >
    //               Not Interested
    //             </button>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p className="text-gray-600">No matching candidates found.</p>
    //   )}
    // </div>
    <div className="p-6 mx-auto w-full bg-white rounded-lg shadow-md">
    {candidates.length > 0 ? (
      <ul className="space-y-6">
        {candidates.map((candidate, index) => (
          <li
            key={index}
            className="p-5 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {candidate?.Name}
                </h2>
                <p className="text-sm text-gray-500">{candidate?.Email}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium text-white shadow ${
                  candidate?.matchPercentage > 70
                    ? "bg-green-500"
                    : candidate?.matchPercentage > 40
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
              >
                {candidate?.matchPercentage?.toFixed(2)}% Match
              </span>
            </div>
            <div className="text-gray-700 mb-4">
              <h3 className="font-semibold underline">Match Details:</h3>
              <ul className="list-disc pl-5">
                <li>
                  Skills:{" "}
                  <span className="font-medium">
                    {candidate?.skillMatch ? "Matched" : "Not Matched"}
                  </span>
                </li>
                <li>
                  Location:{" "}
                  <span className="font-medium">
                    {candidate?.locationMatch ? "Matched" : "Not Matched"}
                  </span>
                </li>
                <li>
                  Experience:{" "}
                  <span className="font-medium">
                    {candidate?.experienceMatch ? "Matched" : "Not Matched"}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className=" flex text-[15px] gap-2 text-gray-600">Status : <p className=" text-blue-500">{candidate?.applicationStatus}</p></span>
              <div>
                <button
                  className="px-4 py-2 hover:bg-blue-200 text-blue-500 rounded-2xl font-medium  transition-colors"
                  onClick={() => handleInvite(candidate._id)}
                >
                  Invite
                </button>
                <button
                  className="px-4 py-2  text-red-500 hover:bg-red-200 rounded-2xl font-medium transition-colors"
                  onClick={() => handleNotInvite(candidate._id)}
                >
                  Not Interested
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-center text-gray-600">No matching candidates found.</p>
    )}
  </div>
  
  );
};

export default SuggestedCandidates;
