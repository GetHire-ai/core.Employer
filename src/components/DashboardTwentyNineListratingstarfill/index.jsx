import React from "react";

import { Img, List } from "components";

const DashboardTwentyNineListratingstarfill = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="defaultNoData.png"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="defaultNoData.png"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="defaultNoData.png"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="defaultNoData.png"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="border border-gray-600_07 border-solid h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="defaultNoData.png"
            alt="ratingstarnorma"
          />
        </div>
      </List>
    </>
  );
};

DashboardTwentyNineListratingstarfill.defaultProps = {};

export default DashboardTwentyNineListratingstarfill;
