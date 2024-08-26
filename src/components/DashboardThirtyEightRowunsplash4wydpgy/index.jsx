import React from "react";

import { Img, Text } from "components";

const DashboardThirtyEightRowunsplash4wydpgy = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[79px] md:h-auto object-cover rounded-[16px] w-24"
          alt="unsplash4wydpgy"
          src={props?.image}
        />
        <div className="flex flex-col gap-3 items-start justify-start w-auto">
          <div className="flex flex-row items-center justify-between w-[227px]">
            <Text
              className="bg-gray-100_02 justify-center pb-0.5 pt-[5px] px-1 rounded text-[8px] text-blue_gray-900_04 w-auto"
              size="txtOpenSansRegular8"
            >
              {props?.technologytext}
            </Text>
            <Text
              className="text-[10px] text-gray-600_06 text-right"
              size="txtOpenSansLight10"
            >
              {props?.datetext}
            </Text>
            {!!props?.hiddenview ? (
              <div className="bg-gray-600_06 h-0.5 rounded-[50%] w-0.5"></div>
            ) : null}
          </div>
          <Text
            className="max-w-[227px] md:max-w-full text-base text-blue_gray-900_04"
            size="txtLatoBold16"
          >
            {props?.augmentedrealitytext}
          </Text>
        </div>
      </div>
    </>
  );
};

DashboardThirtyEightRowunsplash4wydpgy.defaultProps = {
  image: "images/img_unsplash4wydpgych4c.png",
  technologytext: "Technology",
  augmentedrealitytext: "Augmented Reality Trends for 2022",
};

export default DashboardThirtyEightRowunsplash4wydpgy;
