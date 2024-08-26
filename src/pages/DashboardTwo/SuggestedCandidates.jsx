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
    <div className="p-2  mx-auto rounded-lg w-full">
      {candidates.length > 0 ? (
        <ul className="space-y-4 w-full">
          {candidates.map((candidate, index) => (
            <li
              key={index}
              className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="text-xl font-semibold">{candidate?.Name}</h2>
                  <p className="text-gray-600">{candidate?.Email}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-white ${
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
              <div className="mb-4">
                <h3 className="font-medium">Match Details:</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {candidate?.skillMatch ? (
                    <li>Skills: Matched</li>
                  ) : (
                    <li>Skills: Not Matched</li>
                  )}
                  {candidate?.locationMatch ? (
                    <li>Location: Matched</li>
                  ) : (
                    <li>Location: Not Matched</li>
                  )}
                  {candidate?.experienceMatch ? (
                    <li>Experience: Matched</li>
                  ) : (
                    <li>Experience: Not Matched</li>
                  )}
                </ul>
              </div>
              <div className="flex space-x-4">
                <span>{candidate?.applicationStatus}</span>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => handleInvite(candidate._id)}
                >
                  Invite
                </button>
                <button
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  onClick={() => handleNotInvite(candidate._id)}
                >
                  Not Interested
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No matching candidates found.</p>
      )}
    </div>
  );
};

export default SuggestedCandidates;
