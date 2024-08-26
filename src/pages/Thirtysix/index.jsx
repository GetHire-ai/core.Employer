import React, { useEffect, useState } from "react";

import { Button } from "components";
import HrBtn from "components/HrBtn/HrBtn";
import { GetApi } from "Api/Api_Calling";

const ThirtysixPage = () => {
  const Employee = [
    {
      image: "images/img_ellipse3950.png",
      name: "Rahul Singh",
      designation: "Designer",
      status: "Active",
      email: "Shubham123@gamil.com",
      number: "9458637152",
      department: "Development",
      dateofjoining: "17/10/2023",
      action: "images/img_user.svg",
    },
    {
      image: "images/img_ellipse3950.png",
      name: "Rahul Singh",
      designation: "Designer",
      status: "Active",
      email: "Shubham123@gamil.com",
      number: "9458637152",
      department: "Development",
      dateofjoining: "17/10/2023",
      action: "images/img_user.svg",
    },
    {
      image: "images/img_ellipse3950.png",
      name: "Rahul Singh",
      designation: "Designer",
      status: "Active",
      email: "Shubham123@gamil.com",
      number: "9458637152",
      department: "Development",
      dateofjoining: "17/10/2023",
      action: "images/img_user.svg",
    },
    {
      image: "images/img_ellipse3950.png",
      name: "Rahul Singh",
      designation: "Designer",
      status: "Active",
      email: "Shubham123@gamil.com",
      number: "9458637152",
      department: "Development",
      dateofjoining: "17/10/2023",
      action: "images/img_user.svg",
    },
    {
      image: "images/img_ellipse3950.png",
      name: "Rahul Singh",
      designation: "Designer",
      status: "Active",
      email: "Shubham123@gamil.com",
      number: "9458637152",
      department: "Development",
      dateofjoining: "17/10/2023",
      action: "images/img_user.svg",
    },
  ];

  const [Employees, setEmployees] = useState([]);
  const [Loading, setLoading] = useState(true);

  const GetEmployees = async () => {
    try {
      const Getjobdata = await GetApi(`api/CompanyRoutes/GetCompanyTeamDetails`);
      // console.log(Getjobdata?.data);
      setEmployees(Getjobdata?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    GetEmployees()
  }, []);

  const formatDate = (joiningDate) => {
    const date = new Date(joiningDate);
    return date.toLocaleDateString(); // Adjust format as needed
  };


  return (
    <>
      <div className="bg-gray-100 flex flex-col font-[Poppins] items-center justify-start mx-auto pb-0.5 pr-0.5 w-full">
        <div className="flex flex-col gap-1.5 items-start justify-between mx-auto md:px-[20px] w-full">
          <HrBtn />
          <div className="flex flex-row md:gap-10 items-center justify-between w-full">
            <p className="font-[500] text-[24px]">Employees</p>
            <Button
              className="cursor-pointer bg-[#000] text-white font-[500] leading-[normal] min-w-[167px] mt-4 text-[16px] text-center"
              shape="round"
              color="black"
              size="lg"
              variant="fill"
            >
              Add New{" "}
            </Button>
          </div>
          <div className="overflow-x-auto w-full mt-[23px] my-[30px]">
            <table className="w-full rounded-[20px] ">
              <thead className="bg-[#ffd831] h-[50px] text-[16px] font-[500] rounded-[12px]">
                <tr>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Image
                  </th>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Name
                  </th>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Designation
                  </th>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Status
                  </th>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Email
                  </th>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Number
                  </th>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Date of Joining
                  </th>
                  <th className="text-left font-[Poppins] font-[500] p-2">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-[16px] bg-[#fff] h-[50px]  font-[500] text-center">
                {Employees.map((Employee, index) => (
                  <tr key={index}>
                    <td className="p-2 text-left font-[Poppins] font-[500] flex items-center justify-center gap-[8px]">
                      <img
                        src={Employee?.studentId?.Image}
                        className="w-[28px] h-[28px] rounded-full"
                        alt=""
                      />
                    </td>
                    <td className="p-2 text-left font-[Poppins] font-[500]">
                      {Employee?.studentId?.Name}
                    </td>
                    <td className="p-2 text-left font-[Poppins] font-[500]">
                      {Employee?.role}
                    </td>
                    <td className="p-2 bg-[#31C65B33] text-[#31C65B] w-[60px] h-[31px] rounded-[27px] flex items-center justify-center ml-4">
                      Active
                    </td>
                    <td className="p-2 text-left font-[Poppins] font-[500] text-[12px]">
                      {Employee?.studentId?.Email}
                    </td>
                    <td className="p-2 text-left font-[Poppins] font-[500] ">
                      {Employee?.studentId?.Number}
                    </td>
                    <td className="p-2 text-left font-[Poppins] font-[500] ">
                      {formatDate(Employee.joiningDate)}
                    </td>
                    <td className="p-2 text-left font-[Poppins] font-[500] ">
                      {<img src='images/img_user.svg' alt="" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default ThirtysixPage;
