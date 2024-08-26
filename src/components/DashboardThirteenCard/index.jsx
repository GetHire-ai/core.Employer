import React from "react";

import { Img, Text } from "components";

const DashboardThirteenCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[11px] items-center justify-between w-full">
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-base text-blue_gray-900_02"
              size="txtMontserratRegular16"
            >
              {props?.jobposts}
            </Text>
            <Text
              className="mt-2.5 sm:text-2xl md:text-[26px] text-[28px] text-gray-700 tracking-[0.41px]"
              size="txtMontserratBold28"
            >
              {props?.p2456}
            </Text>
            <Text
              className="mt-[27px] text-red-A700 text-xl tracking-[-0.32px]"
              size="txtMontserratBold20RedA700"
            >
              {props?.twentyfive}
            </Text>
          </div>
          <Img className="h-[92px]" alt="graphTwo" src={props?.graphtwo} />
        </div>
      </div>
    </>
  );
};

DashboardThirteenCard.defaultProps = {
  jobposts: "Total Application",
  p2456: "4,561",
  twentyfive: "-4.4%",
  graphtwo: "images/img_graph2.svg",
};

export default DashboardThirteenCard;
