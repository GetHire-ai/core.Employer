import React from "react";
import { GetApi } from "Api/Api_Calling";
import { toast } from "react-toastify";

const SuggestedCandidates = ({ job, candidates }) => {
  const handleInvite = async (id) => {
    try {
      await GetApi(`api/CompanyRoutes/getinvited/invite/${job._id}/${id}`);
      toast.success("candidate invitation sent ", { autoClose: 1000 });
    } catch (error) {
      toast.error("candidate invitation failed ", { autoClose: 1000 });
      console.log(error.response);
    }
  };

  const handleNotInvite = async (id) => {
    try {
      await GetApi(`api/CompanyRoutes/getinvited/notintrest/${job._id}/${id}`);
      toast.success("candidate rejected ", { autoClose: 1000 });
    } catch (error) {
      toast.error("candidate rejected failed ", { autoClose: 1000 });
      console.log(error.response);
    }
  };

  return (
    <div className="mx-auto w-full bg-white rounded-lg shadow-md">
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
                <span className=" flex text-[15px] gap-2 text-gray-600">
                  Status :{" "}
                  <p className=" text-blue-500">
                    {candidate?.applicationStatus}
                  </p>
                </span>
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
        <p className="text-center text-gray-600">
          No matching candidates found.
        </p>
      )}
    </div>
  );
};

export default SuggestedCandidates;
