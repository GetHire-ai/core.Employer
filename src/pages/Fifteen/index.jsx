import React from "react";
import { CloseSVG } from "../../assets/images";
import { SubMenu, MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { Button, Img, Input, Text } from "components";
import { SelectBox } from "components/SelectBox";
import { Heading } from "components/Heading";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function FifteenPage() {

  return (
    <>
      <div className="flex flex-row justify-center w-full bg-gray-100">
        <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 overflow-auto">
          {/* <Sidebar
            width="308px !important"
            className="h-screen top-0 bg-gray-900 shadow-xs !sticky overflow-auto"
          >
            <Img
              src="images/img_logo.svg"
              alt="logo_one"
              className="h-[41px] mt-9 ml-7 mr-[169px] md:mr-5 sm:mx-5"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingBottom: "8px",
                  width: "100%",
                  color: "#cccccc",
                  fontWeight: 500,
                  fontSize: "14px",
                  borderRadius: "8px",
                  [`&:hover, &.ps-active`]: {
                    color: "#000000",
                    backgroundColor: "#ffd831 !important",
                  },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "137px" } }}
              renderExpandIcon={() => (
                <Img
                  src="images/img_arrow_right.svg"
                  alt="arrowright_one"
                  className="h-[16px] w-[16px] cursor-pointer"
                />
              )}
              className="flex flex-col items-center justify-start w-full mt-[60px] px-7 sm:px-5"
            >
              <MenuItem
                icon={
                  <Img
                    src="images/img_icon_24_outline.svg"
                    alt="icon24outline"
                    className="h-[24px] w-[24px]"
                  />
                }
              >
                Home
              </MenuItem>
              <SubMenu
                icon={
                  <Img
                    src="images/img_chat_unread_svgrepo_com.svg"
                    alt="chatunread_one"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Chat"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_activity_svgrepo_com.svg"
                    alt="activity_one"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Activities"
              >
                <div className="flex flex-row justify-center w-full">
                  <MenuItem>RECRUITMENT</MenuItem>
                </div>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_job_svgrepo_com.svg"
                    alt="jobsvgrepocom"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Jobs"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_interview_5_svgrepo_com.svg"
                    alt="interviewfive"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Interviews"
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_discount_shape_1.svg"
                    alt="discountshape"
                    className="h-[24px] w-[24px]"
                  />
                }
                label="New Hires"
              >
                <div className="flex flex-row justify-center w-full">
                  <MenuItem>ORGANIZATION</MenuItem>
                </div>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_company_group_a.svg"
                    alt="image"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Company Profile "
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_community_svgrepo_com.svg"
                    alt="community_one"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Community "
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_team_add_svgrepo_com.svg"
                    alt="teamadd_one"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Team "
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_tool_box_svgrepo_com.svg"
                    alt="toolbox_one"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="HR Tool Box "
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
              <SubMenu
                icon={
                  <Img
                    src="images/img_reports_svgrepo_com.svg"
                    alt="reportssvgrepo"
                    className="h-[20px] w-[20px]"
                  />
                }
                label="Reports "
              >
                <MenuItem>Submenu Item</MenuItem>
              </SubMenu>
            </Menu>
          </Sidebar> */}
          <div className="flex flex-col items-center justify-start w-[79%] md:w-full mt-2.5 gap-[23px] md:mt-0">
            {/* <header className="flex justify-center items-center w-[99%] p-[5px] bg-white-A700_01 rounded-[12px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <div className="flex flex-row justify-start items-start w-[31%] sm:w-full gap-2.5">
                  <div className="flex flex-col items-start justify-start w-[34%] gap-[3px] p-1.5 bg-gray-50 rounded-[9px]">
                    <Text
                      size="s"
                      as="p"
                      className="ml-px md:ml-0 !text-gray-500"
                    >
                      Your Organization
                    </Text>
                    <Heading as="p" className="ml-px md:ml-0">
                      Skill genic
                    </Heading>
                  </div>
                  <Input
                    shape="round"
                    name="search"
                    placeholder="Search"
                    value={searchBarValue1}
                    onChange={(e) => setSearchBarValue1(e)}
                    prefix={
                      <Img
                        src="images/img_search_1.svg"
                        alt="search 1"
                        className="cursor-pointer"
                      />
                    }
                    suffix={
                      searchBarValue1?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue1("")}
                          height={24}
                          width={24}
                          fillColor="#7e7e7eff"
                        />
                      ) : null
                    }
                    className="w-[64%] mt-1 gap-2 text-blue_gray-200 tracking-[-0.14px]"
                  />
                </div>
                <div className="flex flex-row justify-start items-center gap-3.5">
                  <Button size="xl" shape="square" className="w-[48px]">
                    <Img src="images/img_notifications.svg" />
                  </Button>
                  <Img
                    src="images/img_rectangle_40860.png"
                    alt="image_one"
                    className="w-[49px] md:h-auto object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </header> */}
            <div className="flex flex-row justify-center w-full">
              <Tabs
                className="flex flex-col items-center justify-start w-full"
                selectedTabClassName=""
                selectedTabPanelClassName="mt-[30px] relative tab-panel--selected"
              >
                <div className="flex flex-col items-center justify-start w-[97%] md:w-full gap-[13px]">
                  <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                    <div className="flex flex-row justify-center w-[31%] md:w-full mt-[9px] md:mt-0">
                      <div className="flex flex-col items-start justify-start w-full gap-0.5">
                        <div className="flex flex-row justify-start items-center gap-4">
                          <Button
                            color="white_A700_01"
                            size="xs"
                            shape="round"
                            className="w-[29px] rotate-[180deg] border-indigo-A200 border border-solid"
                          >
                            <Img src="images/img_arrow_right_indigo_a200.svg" />
                          </Button>
                          <Text size="5xl" as="p" className="!text-black-900">
                            Senior Product Designer
                          </Text>
                        </div>
                        <Text
                          as="p"
                          className="ml-[45px] md:ml-5 !text-gray-700_01 !font-normal"
                        >
                          Indore : Full-time
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col w-[50%] md:w-full gap-3">
                      <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[7px] p-[9px] bg-pink-50 rounded-[12px]">
                        <Button
                          color="pink_300"
                          shape="circle"
                          className="font-semibold min-w-[32px]"
                        >
                          0
                        </Button>
                        <Heading as="h1" className="!text-blue_gray-900">
                          Applications
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-start w-[32%] md:w-full gap-1.5 p-[9px] bg-orange-50 rounded-[12px]">
                        <Button
                          color="deep_orange_A100"
                          shape="circle"
                          className="font-semibold min-w-[32px]"
                        >
                          0
                        </Button>
                        <Heading as="h2" className="mt-1.5 !text-blue_gray-900">
                          Interview Schedule
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[7px] p-[9px] bg-green-50 rounded-[12px]">
                        <Button
                          color="green_500"
                          shape="circle"
                          className="font-semibold min-w-[32px]"
                        >
                          0
                        </Button>
                        <Heading as="h3" className="!text-blue_gray-900">
                          Selected
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                    <TabList className="flex flex-row sm:flex-col justify-between w-auto mt-[11px] gap-[52px] md:mt-0 sm:gap-[52px]">
                      <Tab className="mt-[3px] sm:mt-0 text-gray-500 text-sm font-medium">
                        Summary
                      </Tab>
                      <Tab className="text-gray-500 text-sm font-medium">
                        Applications
                      </Tab>
                      <Tab className="text-gray-500 text-sm font-medium">
                        Application Manager
                      </Tab>
                      <Tab className="text-gray-500 text-sm font-medium">
                        Reports
                      </Tab>
                      <Tab className="text-gray-500 text-sm font-medium">
                        Settings
                      </Tab>
                    </TabList>
                    <div className="flex flex-row justify-start w-[25%] md:w-full mb-[3px] gap-2.5">
                      <Button
                        size="sm"
                        variant="outline"
                        className="font-semibold min-w-[127px] rounded"
                      >
                        Share & Promote
                      </Button>
                      <SelectBox
                        shape="round"
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        name="published"
                        placeholder="Published"
                        options={dropDownOptions}
                        className="w-[49%] gap-px font-semibold border-black-900 border border-solid"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[2px] w-full mt-1 bg-gray-200 rounded-[1px]" />
                {[...Array(5)].map((_, index) => (
                  <TabPanel
                    key={`tab-panel${index}`}
                    className="justify-center w-[93%] absolute"
                  >
                    <div className="flex flex-row justify-center w-[93%] md:w-full mt-[30px]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                          <Heading size="xl" as="h4">
                            <span className="text-black-900">
                              Publish to job boards{" "}
                            </span>
                            <span className="text-gray-600 font-medium">
                              (31 Total)
                            </span>
                          </Heading>
                          <div className="w-full gap-5 grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid">
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="indeed_one"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h5">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-indigo-A200"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 17"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="imagetwentyfive"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h6">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-indigo-A200"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 18"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="imagetwentysix"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h5">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-indigo-A200"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 19"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="imagetwentyseve"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h5">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-indigo-A200"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 20"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="imagetwentyeigh"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h5">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-black-900"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 21"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="imagetwentynine"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h5">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-black-900"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 22"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="imagethirty_one"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h5">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-black-900"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 23"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <div className="flex flex-row justify-center w-full p-3 border-blue_gray-100 border border-solid bg-white-A700_01 rounded-[20px]">
                              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                                <div className="flex flex-row justify-start items-center w-[87%] md:w-full gap-[17px]">
                                  <Img
                                    src="images/img_image_24.png"
                                    alt="imagethirtyone"
                                    className="w-[55%] md:h-auto sm:w-full object-cover rounded-md"
                                  />
                                  <div className="flex flex-col items-start justify-start w-[37%] gap-0.5">
                                    <Heading size="xl" as="h5">
                                      Indeed
                                    </Heading>
                                    <a href="#">
                                      <Text
                                        size="lg"
                                        as="p"
                                        className="!text-black-900"
                                      >
                                        Learn More
                                      </Text>
                                    </a>
                                  </div>
                                </div>
                                <Button
                                  size="2xl"
                                  shape="round"
                                  rightIcon={
                                    <Img
                                      src="images/img_lockkeyholesvgrepocom_17.svg"
                                      alt="lock-keyhole-svgrepo-com 24"
                                    />
                                  }
                                  className="w-full gap-2.5 sm:px-5 font-semibold border-blue_gray-100 border border-solid !rounded-[12px]"
                                >
                                  Enabled
                                </Button>
                              </div>
                            </div>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                            <Text
                              size="xl"
                              as="p"
                              className="w-full !text-gray-600"
                            >
                              Indeed is the #1 job site in the world with over
                              250 millions unique visitors every..
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
