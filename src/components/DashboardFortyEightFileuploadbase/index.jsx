import React from "react";

import { Button, Img, Text } from "components";

const DashboardFortyEightFileuploadbase = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-center justify-start w-full">
          <Button
            className="flex h-11 items-center justify-center rounded-[50%] w-11"
            shape="circle"
            color="gray_100_07"
            size="md"
            variant="fill"
          >
            <Img className="h-6" src="defaultNoData.png" alt="twitter" />
          </Button>
          <div className="flex flex-col gap-1 items-center justify-start w-full">
            <div className="flex flex-row gap-1 items-start justify-center w-full">
              <Text
                className="text-indigo-A200 text-sm w-auto"
                size="txtHindMedium14"
              >
                {props?.uploadtext}
              </Text>
              <Text
                className="text-blue_gray-900_05 text-sm w-auto"
                size="txtHindRegular14"
              >
                {props?.draganddroptext}
              </Text>
            </div>
            <Text
              className="text-blue_gray-900_05 text-center text-xs w-full"
              size="txtHindRegular12"
            >
              {props?.maxfilesizetext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardFortyEightFileuploadbase.defaultProps = {
  uploadtext: "Click to Upload",
  draganddroptext: "or drag and drop",
  maxfilesizetext: " (Max. File size: 25 MB)",
};

export default DashboardFortyEightFileuploadbase;
