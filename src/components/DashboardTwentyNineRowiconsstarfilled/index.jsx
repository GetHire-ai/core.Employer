import React from "react";

import { Img } from "components";

const DashboardTwentyNineRowiconsstarfilled = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-4 w-4"
          src="defaultNoData.png"
          alt="iconsstarfilled"
        />
        <Img
          className="h-4 w-4"
          src="defaultNoData.png"
          alt="iconsstarfilled_One"
        />
        <Img
          className="h-4 w-4"
          src="defaultNoData.png"
          alt="iconsstarfilled_Two"
        />
        <Img
          className="h-4 w-4"
          src="defaultNoData.png"
          alt="iconsstarfilled_Three"
        />
        <Img
          className="h-4 w-4"
          src="defaultNoData.png"
          alt="iconsstarfilled_Four"
        />
      </div>
    </>
  );
};

DashboardTwentyNineRowiconsstarfilled.defaultProps = {};

export default DashboardTwentyNineRowiconsstarfilled;
