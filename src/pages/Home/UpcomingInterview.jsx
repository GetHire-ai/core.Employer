import React from "react";
import ShortStudentCard from "pages/Jobs/JobsApplication/ShortStudentCard";

const UpcomingInterview = ({ AllShortlistedStudents, openModal }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-semibold text-gray-600 mb-6">
        AI Shortlisted candidates
      </h1>
      {AllShortlistedStudents?.length === 0 && (
        <div className=" text-sm font-semibold text-gray-600 ml-7">
          No Shortlisted Candidates available
        </div>
      )}
      <div className="overflow-x-auto pr-10">
        {AllShortlistedStudents.map((job, index) => (
          <ShortStudentCard
            key={index}
            job={job}
            index={index}
            openModal={openModal}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingInterview;
