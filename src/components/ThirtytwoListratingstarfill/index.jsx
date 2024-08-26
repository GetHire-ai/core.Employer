import React from "react";

import { Img, List } from "components";

const ThirtytwoListratingstarfill = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_16x16.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_1.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarfill_2.svg"
            alt="ratingstarfill"
          />
        </div>
        <div className="flex flex-col h-4 items-center justify-start w-full">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_ratingstarnormal.svg"
            alt="ratingstarnorma"
          />
        </div>
      </List>
    </>
  );
};

ThirtytwoListratingstarfill.defaultProps = {};

export default ThirtytwoListratingstarfill;
