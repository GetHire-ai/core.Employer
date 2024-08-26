import React from "react";

import { Img, Text } from "components";

const ThirtytwoRowunsplash4wydpgy = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[79px] md:h-auto object-cover rounded-[16px] w-24"
          alt="unsplash4wydpgy"
          src={props?.image}
        />
        <div className="">
          <div className="flex flex-row items-center justify-between">
            <Text
              className="bg-[#F2F2F2] justify-center rounded-[4px] p-[5px] text-[8px] text-[#2C2C2C] w-auto"
              size="txtOpenSansRegular8"
            >
              {props?.technologytext}
            </Text>
            <div className="flex gap-4">
            <Text
              className="text-[10px] font-[300] font-[Open Sans] text-[#828282] text-right"
              size="txtOpenSansLight10"
            >
              {props?.date}
            </Text>
            <Text
              className="text-[10px] font-[300] font-[Open Sans] text-[#828282] text-right"
              size="txtOpenSansLight10"
            >
              {props?.view}
            </Text>
            </div>
            {!!props?.hiddenview ? (
              <div className="bg-gray-600_01 h-0.5 rounded-[50%] w-0.5"></div>
            ) : null}
          </div>
          <Text
            className="font-[700] font-[Lato] mt-[12px] text-[16px] text-[#2C2C2C]"
            size="txtLatoBold16"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

ThirtytwoRowunsplash4wydpgy.defaultProps = {
  image: "images/img_unsplash4wydpgych4c.png",
  technologytext: "Technology",
  text: "Augmented Reality Trends for 2022",
};

export default ThirtytwoRowunsplash4wydpgy;
