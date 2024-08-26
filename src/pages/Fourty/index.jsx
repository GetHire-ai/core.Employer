import React from "react";
import { Button, Img, Text } from "components";

import HrBtn from "components/HrBtn/HrBtn";
import PayRollSummaryChart from "./PayRollSummaryChart";

const FourtyPage = () => {
  const Employee = [
    {
      image: "images/img_ellipse3950.png",
      name: "Shubham",
      designation: "Sales manager",
      email: "Shubham@gamil.com",
      gross: "2,000,ooo/-",
      taxes: "-428,000/-",
      netSalary: "1,572,000/-",
      performance: "Good",
      status: "Paid",
    },
    {
      image: "images/img_ellipse3950.png",
      name: "Shubham",
      designation: "Sales manager",
      email: "Shubham@gamil.com",
      gross: "2,000,ooo/-",
      taxes: "-428,000/-",
      netSalary: "1,572,000/-",
      performance: "Moderate",
      status: "Pending",
    },
    {
      image: "images/img_ellipse3950.png",
      name: "Shubham",
      designation: "Sales manager",
      email: "Shubham@gamil.com",
      gross: "2,000,ooo/-",
      taxes: "-428,000/-",
      netSalary: "1,572,000/-",
      performance: "Poor",
      status: "Un Paid",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex md:flex-col flex-row gap-1.5 items-start justify-between mx-auto md:px-5 w-full">
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-2.5 w-full">
            <HrBtn />
            <div className=" flex flex-col lg:grid lg:grid-cols-6  mt-[16px] gap-[10px] w-full">
              <div className="flex flex-col col-start-1 col-end-5 gap-[16px] items-center justify-start w-full">
                <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-full">
                  <Text
                    className="text-[24px] font-[500] text-black"
                    size="txtPoppinsMedium24"
                  >
                    Pay Roll Summary
                  </Text>
                </div>
                <div className="w-full h-[325px] bg-white rounded-[14px]">
                  <PayRollSummaryChart />
                </div>
              </div>
              <div className="bg-white col-start-5 col-end-7 flex flex-col items-center justify-start p-3.5 rounded-[14px] w-full">
                <div className="flex flex-col items-start justify-start mb-[49px] mt-0.5 w-full">
                  <Text
                    className="text-[24px] font-[500] text-black "
                    size="txtPoppinsMedium24"
                  >
                    Payment Status
                  </Text>
                  <Text
                    className="mt-1 font-[500] text-black text-[18px]"
                    size="txtPoppinsMedium18"
                  >
                    600 Employees
                  </Text>
                  <div className=" flex bg-[#0080fc] flex-col items-start justify-start mt-0.5 rounded-[7px] w-full">
                    <div className="h-[15px] overflow-hidden relative w-[86%]">
                      <div className="w-full h-full absolute bg-[#ffa722] rounded-[7px]"></div>
                      <div
                        className="h-full absolute bg-[#5956e9]  rounded-[7px]"
                        style={{ width: "54%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-around mt-0.5 w-[82%] md:w-full">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-[10px]">
                        <div className=" bg-[#5956e9] w-[14px] h-[14px] rounded-[50%]"></div>
                        <Text
                          className=" text-black text-[18px] font-[500]"
                          size="txtPoppinsMedium18"
                        >
                          50%
                        </Text>
                      </div>
                      <Text
                        className=" text-black text-[14px] font-[400] w-max"
                        size="txtPoppinsRegular14"
                      >
                        Paid Successfully
                      </Text>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-[10px]">
                        <div className=" bg-[#ffa722] w-[14px] h-[14px] rounded-[50%]"></div>
                        <Text
                          className=" text-black text-[18px] font-[500]"
                          size="txtPoppinsMedium18"
                        >
                          35%
                        </Text>
                      </div>
                      <Text
                        className=" text-black text-[14px] font-[400] w-max"
                        size="txtPoppinsRegular14"
                      >
                        Pending
                      </Text>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-[10px]">
                        <div className=" bg-[#0080fc] w-[14px] h-[14px] rounded-[50%]"></div>
                        <Text
                          className=" text-black text-[18px] font-[500]"
                          size="txtPoppinsMedium18"
                        >
                          15%
                        </Text>
                      </div>
                      <Text
                        className=" text-black text-[14px] font-[400] w-max"
                        size="txtPoppinsRegular14"
                      >
                        UnPaid
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[23px] w-full">
                    <Text
                      className="text-[24px] font-[500] text-black"
                      size="txtPoppinsMedium24"
                    >
                      Employee Time-off
                    </Text>
                    <a
                      href="#/"
                      className="text-[#5956e9] text-[12px] font-[500]"
                    >
                      <Text size="txtPoppinsMedium12IndigoA200">View All</Text>
                    </a>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center mt-[7px] w-full">
                    <div className="bg-[#f6f9fe] flex items-center justify-between p-[5px]  rounded-[14px] w-full">
                      <div className="flex flex-row items-start justify-start mt-[3px] gap-[8px]">
                        <Img
                          className="h-[36px] mt-0.5 rounded-[50%] w-[36px]"
                          src="images/img_ellipse4058.png"
                          alt="ellipse4049"
                        />
                        <div className="flex flex-col items-center justify-start ">
                          <Text
                            className="text-[16px] font-[500] text-black"
                            size="txtPoppinsMedium16"
                          >
                            Mary Kweka
                          </Text>
                          <Text
                            className="text-black font-[400] text-[12px]"
                            size="txtPoppinsRegular12"
                          >
                            Maternity Leave
                          </Text>
                        </div>
                      </div>

                      <Text
                        className="  text-red-700 font-[500] text-[Poppins] text-[14px]"
                        size="txtPoppinsMedium14Red700"
                      >
                        20 Sept - 20 Dec 2023
                      </Text>
                    </div>
                    <div className="bg-[#f6f9fe] flex items-center justify-between p-[5px]  rounded-[14px] w-full">
                      <div className="flex flex-row items-start justify-start mt-[3px] gap-[8px]">
                        <Img
                          className="h-[36px] mt-0.5 rounded-[50%] w-[36px]"
                          src="images/img_ellipse4058.png"
                          alt="ellipse4049"
                        />
                        <div className="flex flex-col items-center justify-start ">
                          <Text
                            className="text-[16px] font-[500] text-black"
                            size="txtPoppinsMedium16"
                          >
                            Mary Kweka
                          </Text>
                          <Text
                            className="text-black font-[400] text-[12px]"
                            size="txtPoppinsRegular12"
                          >
                            Maternity Leave
                          </Text>
                        </div>
                      </div>

                      <Text
                        className="  text-red-700 font-[500] text-[Poppins] text-[14px]"
                        size="txtPoppinsMedium14Red700"
                      >
                        20 Sept - 20 Dec 2023
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>

            <div className="flex flex-col gap-[9px] items-center justify-center mt-[18px] w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className=" text-[24px] font-[500]"
                  size="txtPoppinsMedium24"
                >
                  Employee Summary
                </Text>
                <Button
                  className="cursor-pointer bg-[#000] text-white font-[500] leading-[normal] min-w-[167px] text-[16px] text-center"
                  shape="round"
                  color="black"
                  size="md"
                >
                  Add{" "}
                </Button>
              </div>
              <div className="overflow-auto w-full">
                <div className="overflow-x-auto w-full">
                  <table className="w-full rounded-[20px] ">
                    <thead className="bg-[#ffd831] h-[50px] text-[16px] font-[500] rounded-[12px]">
                      <tr>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Name
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Email
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Gross
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Taxes
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Net Salary
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Performance
                        </th>
                        <th className="font-[Poppins] font-[500] text-left p-2">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[16px] bg-[#fff] h-[50px]  font-[500] text-center ">
                      {Employee.map((Employee, index) => (
                        <tr key={index}>
                          <td className="p-4 text-left flex items-center justify-start gap-[8px]">
                            <img
                              src={Employee.image}
                              className="w-[28px] h-[28px]"
                              alt=""
                            />
                            <div className="flex flex-col">
                              <p className="font-[500] text-[16px] ">
                                {" "}
                                {Employee.name}
                              </p>
                              <p className="font-[400] text-[11px]">
                                {" "}
                                {Employee.designation}
                              </p>
                            </div>
                          </td>
                          <td className="p-4 text-left">{Employee.email}</td>
                          <td className="p-4 text-left">{Employee.gross}</td>
                          <td className="p-4 text-left text-[#e21b1b]">
                            {Employee.taxes}
                          </td>
                          <td className="p-4 text-left ">
                            {Employee.netSalary}
                          </td>
                          <td className="p-4 text-left ">
                            {Employee.performance === "Good" && (
                              <div className="flex items-center gap-[4px]">
                                <div className="h-[16px] w-[16px] rounded-[50%] bg-[#3CD856]"></div>
                                {Employee.performance}
                              </div>
                            )}
                            {Employee.performance === "Moderate" && (
                              <div className="flex items-center gap-[4px]">
                                <div className="h-[16px] w-[16px] rounded-[50%] bg-[#FF9900]"></div>
                                {Employee.performance}
                              </div>
                            )}
                            {Employee.performance === "Poor" && (
                              <div className="flex items-center gap-[4px]">
                                <div className="h-[16px] w-[16px] rounded-[50%] bg-[#E21B1B]"></div>
                                {Employee.performance}
                              </div>
                            )}
                          </td>
                          {Employee?.status === "Paid" && (
                            <td className=" bg-[#3CD8561A] w-[93px] text-[#3cd856] rounded-[12px] flex items-center justify-center p-2">
                              {Employee.status}
                            </td>
                          )}
                          {Employee?.status === "Pending" && (
                            <td className=" bg-[#FBBC0533] w-[93px] text-[#FF9900] rounded-[12px] flex items-center justify-center p-2">
                              {Employee.status}
                            </td>
                          )}
                          {Employee?.status === "Un Paid" && (
                            <td className=" bg-[#E21B1B33] w-[93px] text-[#E21B1B] rounded-[12px] flex items-center justify-center p-2">
                              {Employee.status}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourtyPage;
