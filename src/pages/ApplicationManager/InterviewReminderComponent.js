import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

const InterviewReminderComponent = ({ AllinterviewSchedule }) => {
  const Action =  [
    <FaEye />,
    <FaCircleCheck color="lightgreen" />,
    <FaTimesCircle color="red" />,
  ]

  return (
    <div className="font-[poppins]">
      <div className="flex justify-between items-center py-[16px] px-[20px] border border-[#D9D9D9] rounded-t-[20px]">
        <h1 className="font-[500] text-[20px] font-[Poppins] text-[#000000] ">Interview Reminder</h1>
        <Link className="text-[#5956e9] text-[14px]">View all</Link>
      </div>
      <div className="overflow-x-auto m-[12px]">
        <table className="w-full">
          <thead className="bg-yellow-400 text-[14px]">
            <tr>
              <th className="font-[Poppins] font-[500] text-[14px]">Date</th>
              <th className="font-[Poppins] font-[500] text-[14px] w-[160px] text-left">Candidate Name</th>
              <th className="font-[Poppins] font-[500] text-[14px] w-[160px] text-left">Submitted Time</th>
              <th className="font-[Poppins] font-[500] text-[14px] text-left">Job Role</th>
              <th className="font-[Poppins] font-[500] text-[14px] text-left">Status</th>
              <th className="font-[Poppins] font-[500] text-[14px] text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-[14px] font-[500]">
            {AllinterviewSchedule.map((job, index) => (
              <tr key={index}>
                <td className="p-2 pl-8">{job?.interviewSchedule?.date}</td>
                <td className=" p-2 pl-8 flex items-center justify-center gap-[5px]">
                  <img src={job?.StudentId?.Image} className="w-[28px] h-[28px]" alt="" />
                  {job?.StudentId?.Name}
                </td>
                <td className=" p-2 pl-10">{job?.interviewSchedule?.Time}</td>
                <td className=" p-2 pl-5">{job?.JobId?.positionName}</td>
                <td className="p-2 pl-8 text-[#31c65b]">{job.isInterviewcompleted  ? "Not Submitted" : "Submitted"}</td>
                <td className="p-2 pl-8 flex gap-2">{Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterviewReminderComponent;
