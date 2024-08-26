import React from "react";

import { Img, Text } from "components";

const DashboardFortyEightFileuploaditem1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-3 items-start justify-start w-full">
            <Img className="h-5 w-5" src="defaultNoData.png" alt="file_One" />
            <div className="flex flex-1 flex-col h-full items-start justify-start w-full">
              <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-blue_gray-900_05 text-sm w-full"
                    size="txtHindMedium14Bluegray90005"
                  >
                    {props?.weburltext}
                  </Text>
                  <Text
                    className="text-gray-500_03 text-xs w-full"
                    size="txtPoppinsRegular12Gray50003"
                  >
                    {props?.filesizetext}
                  </Text>
                </div>
                <Img
                  className="h-6 w-6"
                  src="defaultNoData.png"
                  alt="downloadsvgrepo_One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardFortyEightFileuploaditem1.defaultProps = {
  weburltext: "HannahBusing_Resume.pdf",
  filesizetext: "200 KB",
};

export default DashboardFortyEightFileuploaditem1;
