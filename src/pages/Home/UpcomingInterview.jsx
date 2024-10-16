import React from "react";
import ShortStudentCard from "pages/Jobs/JobsApplication/ShortStudentCard";
import LinearProgress from "@mui/material/LinearProgress";

const UpcomingInterview = ({ AllShortlistedStudents, openModal, loading }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-semibold text-gray-600 mb-6">
        AI Shortlisted candidates
      </h1>
      {loading ? (
        <LinearProgress />
      ) : (
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
      )}
      {AllShortlistedStudents?.length === 0 && !loading && (
        <>No Shortlisted Application is pending</>
      )}
    </div>
  );
};

export default UpcomingInterview;
