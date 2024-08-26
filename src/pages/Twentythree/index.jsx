import React, { useState } from "react";
import { Button, Text } from "components";
import { BsThreeDotsVertical } from "react-icons/bs";
import ProgressBar from "@ramonak/react-progress-bar";
import InSidebar from "./InSidebar";

const TwentythreePage = () => {
  const NewHiresApplication = [
    {
      image: "images/img_ellipse3950.png",
      name: "Amir",
      applicationStage: "Round 1",
      scoreCard: "85",
      appliedDate: "15-112023",
      action: <BsThreeDotsVertical />,
    },
    {
      image: "images/img_ellipse3950.png",
      name: "Amir",
      applicationStage: "Round 2",
      scoreCard: "65",
      appliedDate: "15-112023",
      action: <BsThreeDotsVertical />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [side1, setSide1] = useState(false);
  function openSideBar() {
    setSide1(!side1);
  }

  const handleButtonClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const handleClickOutside = () => {
    setOpenIndex(null);
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-center mx-auto p-[20px] w-full">
        <div className="flex flex-col gap-[26px] items-center justify-center w-full">
          <div className="grid grid-cols-2 lg:flex   gap-5 items-center justify-start ml-0.5 md:ml-[0] w-full">
            <Text
              className=" text-black text-[24px] font-[500]"
              size="txtPoppinsMedium24"
            >
              Applications
            </Text>
            <Button
              className="cursor-pointer font-[500] text-white bg-blue-500 leading-[normal] min-w-[111px] ml-5 sm:ml-[0] rounded-lg text-center text-[14px] tracking-[-0.14px]"
              color="black_900"
              size="md"
              variant="fill"
            >
              Ongoing
            </Button>
            <Button
              className="cursor-pointer text-black font-[500] bg-white hover:bg-blue-200 duration-200 hover:text-blue-500 leading-[normal] min-w-[111px] ml-5 sm:ml-[0] rounded-lg text-center text-[14px] tracking-[-0.14px]"
              color="white_A700"
              size="md"
              variant="fill"
            >
              On Hold
            </Button>
            <Button
              className="cursor-pointer font-[500] text-black bg-white hover:bg-blue-200 duration-200 hover:text-blue-500 leading-[normal] min-w-[111px] ml-5 sm:ml-[0] rounded-lg text-center text-[14px] tracking-[-0.14px]"
              color="white_A700"
              size="md"
              variant="fill"
            >
              Completed
            </Button>
          </div>
          <div className="w-full">
            <table className="w-full rounded-[20px] ">
              <thead className="bg-blue-400 text-[16px] text-center lg:text-left rounded-[20px]">
                <tr>
                  <th className="text-left font-[500] p-2 flex gap-[12px] ">
                    <input type="checkbox" />
                    Name
                  </th>
                  <th className="text-left font-[500] p-2">Application stage</th>
                  <th className="text-left font-[500] p-2">Score Card</th>
                  <th className="text-left font-[500] p-2">Applied Date</th>
                  <th className="text-left font-[500] p-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-[16px] bg-[#fff] font-[500] text-center lg:text-left">
                {NewHiresApplication.map((NewHiresApplication, index) => (
                  <tr key={index}>
                    <td className="p-2  flex  gap-[10px]">
                      <input type="checkbox" />
                      <img
                        className="w-[28px] h-[28px]"
                        src={NewHiresApplication.image}
                        alt=""
                      />
                      {NewHiresApplication.name}
                    </td>
                    <td className="p-2 text-[#5956e9]">
                      {NewHiresApplication.applicationStage}
                    </td>

                    <td className="p-2 flex  gap-[5px] items-center">
                      <ProgressBar
                        completed={NewHiresApplication.scoreCard}
                        bgColor="#6f34f5"
                        color="#e6f3ff"
                        height="10px"
                        customLabel="."
                        width="100px"
                      />
                      {NewHiresApplication.scoreCard}%
                    </td>
                    <td className="p-2 ">{NewHiresApplication.appliedDate}</td>
                    <td className="p-2 relative cursor-pointer">
                      <BsThreeDotsVertical
                        onClick={() => handleButtonClick(index)}
                      />
                      {openIndex === index && (
                        <div className="absolute bg-white w-[138px] right-[0px] z-10 top-[0px] h-[171px] shadow-lg rounded-[10px] font-[500] text-[11px] flex flex-col justify-center items-start pl-[8px]">
                          <p onClick={openSideBar}>Notes</p>
                          <p>Hiring Pipeline</p>
                          <p>Send</p>
                          <p>Share</p>
                          <p>Request</p>
                          <p>Drop</p>
                          <p>Delete</p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <InSidebar side1={side1} openSideBar={openSideBar} />
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-1 bg-black opacity-0 cursor-pointer"
          onClick={handleClickOutside}
        />
      )}
    </>
  );
};

export default TwentythreePage;
