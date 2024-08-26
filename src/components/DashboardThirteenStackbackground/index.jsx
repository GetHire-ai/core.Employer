import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Line, ReactTable, Text } from "components";

const DashboardThirteenStackbackground = (props) => {
  const table1Data = React.useRef([
    {
      jobtitle: "UI UX Designer",
      category: "Full Time",
      openings: "12",
      rowapplications: "Active",
    },
    {
      jobtitle: "Full Stack Dev",
      category: "Full Time",
      openings: "08",
      rowapplications: "Inactive",
    },
    {
      jobtitle: "DevOps",
      category: "Internship",
      openings: "12",
      rowapplications: "Active",
    },
    {
      jobtitle: "Android Dev",
      category: "Full Time",
      openings: "04",
      rowapplications: "Active",
    },
    {
      jobtitle: "IOS Developer",
      category: "Full Time",
      openings: "18",
      rowapplications: "Inactive",
    },
  ]);
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("jobtitle", {
        cell: (info) => (
          <Text
            className="pl-2.5 py-6 text-gray-700 text-sm"
            size="txtMontserratRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[137px] pb-2.5 pl-[11px] pt-3.5 text-indigo-900 text-xs"
            size="txtMontserratMedium12"
          >
            {props?.jobtitletext}
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("category", {
        cell: (info) => (
          <Text
            className="pb-[26px] pt-[23px] text-gray-700 text-sm"
            size="txtMontserratRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[110px] pb-[9px] pt-[15px] text-indigo-900 text-xs"
            size="txtMontserratMedium12"
          >
            {props?.categorytext}
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("openings", {
        cell: (info) => (
          <Text
            className="py-6 text-gray-700 text-sm"
            size="txtMontserratRegular14"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[93px] pb-[9px] pt-[15px] text-indigo-900 text-xs"
            size="txtMontserratMedium12"
          >
            {props?.openingstext}
          </Text>
        ),
      }),
      table1ColumnHelper.accessor("rowapplications", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-between pr-[11px] py-[11px]">
            <Text
              className="text-gray-700 text-sm"
              size="txtMontserratRegular14"
            >
              {props?.fiveonetext}
            </Text>
            <Button
              className="!text-white-A700 cursor-pointer font-bold font-montserrat min-w-[75px] my-1 rounded text-center text-sm"
              color="green_300"
              size="md"
              variant="fill"
            >
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row items-start justify-between min-w-[193px] pr-[9px] py-[9px]">
            <Text
              className="mt-[5px] text-indigo-900 text-xs"
              size="txtMontserratMedium12"
            >
              {props?.applicationstext}
            </Text>
            <Text
              className="mt-1 text-indigo-900 text-xs"
              size="txtMontserratMedium12"
            >
              {props?.statustext}
            </Text>
          </div>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 h-[485px] my-auto rounded w-[88%]"></div>
        <div className="absolute flex flex-col gap-4 h-max inset-y-[0] items-center justify-start left-[3%] my-auto w-[84%]">
          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
            <Text
              className="text-blue_gray-900_02 text-xl tracking-[-0.32px]"
              size="txtPoppinsMedium20Bluegray90002"
            >
              {props?.recentjobpoststext}
            </Text>
            <div className="flex flex-col items-center justify-start">
              <Button
                className="cursor-pointer font-montserrat min-w-[94px] rounded-[24px] text-center text-sm"
                color="black_900"
                size="xl"
                variant="fill"
              >
                {props?.seeallbutton}
              </Button>
            </div>
          </div>
          <div className="overflow-auto w-full">
            <ReactTable
              columns={table1Columns}
              data={table1Data.current}
              rowClass={"border-b border-blue_gray-100_01"}
              headerClass="bg-gray-100_01"
            />
          </div>
        </div>
      </div>
    </>
  );
};

DashboardThirteenStackbackground.defaultProps = {
  recentjobpoststext: "Recent Job Posts",
  seeallbutton: "See All",
  jobtitletext: "Job Title",
  categorytext: "Category",
  openingstext: "Openings",
  applicationstext: "Applications",
  statustext: "Status",
  uiuxdesignertext: "UI UX Designer",
  fulltimetext: "Full Time",
  twelvetext: "12",
  fiveonetext: "135",
  activebutton: "Active",
  fullstackdevtext: "Full Stack Dev",
  fulltimeonetext: "Full Time",
  twelveonetext: "08",
  fivetwotext: "100",
  inactivebutton: "Inactive",
  devopstext: "DevOps",
  internshiptext: "Internship",
  twelvetwotext: "12",
  fivethreetext: "05",
  activeonebutton: "Active",
  androiddevtext: "Android Dev",
  fulltimethreetext: "Full Time",
  twelvethreetext: "04",
  fivefourtext: "45",
  activetwobutton: "Active",
  iosdevelopertext: "IOS Developer",
  fulltimefourtext: "Full Time",
  twelvefourtext: "18",
  fivefivetext: "96",
  inactiveonebutton: "Inactive",
};

export default DashboardThirteenStackbackground;
