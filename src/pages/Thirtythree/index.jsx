import React, { useEffect, useState } from "react";

import { Button, Img, List, Text } from "components";
import { SelectBox } from "components/SelectBox";
import { GetApi, PostApi } from "Api/Api_Calling";

const ThirtythreePage = () => {
  const [Team, setTeam] = useState([]);
  const [Teamlength, setTeamlength] = useState("");
  const [User, setUser] = useState([]);
  const [modal1, setModal1] = useState(false);

  const [teamData, setTeamData] = useState({
    studentId: "",
    role: "",
    salary: "",
    status: "",
    Name: "",
    Email: "",
  });

  const GetTeam = async () => {
    try {
      const responce = await GetApi("api/CompanyRoutes/GetCompanyprofile");
      setTeam(responce?.data?.data?.Team);
      setTeamlength(responce?.data?.data?.Team.length);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllUser = async () => {
    try {
      const responce = await GetApi("api/AdminRoutes/GetAllStudents");
      setUser(responce?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetTeam();
    getAllUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "studentId") {
      const selectedUser = User.find((user) => user._id === value);
      setTeamData((prevData) => ({
        ...prevData,
        studentId: value,
        Name: selectedUser?.Name || "",
        Email: selectedUser?.Email || "",
      }));
    } else {
      setTeamData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleModal1 = () => {
    setModal1(!modal1);
  };

  const Addtoteam = async () => {
    const { studentId, role, salary, status } = teamData;
    if (studentId === "") {
      alert("please select a User");
      return;
    }
    if (role === "") {
      alert("please select Role");
      return;
    }
    if (salary === "") {
      alert("please select salary");
      return;
    }
    if (status === "") {
      alert("please select status");
      return;
    }
    console.log(teamData);
    try {
      const responce = await PostApi(
        "api/CompanyRoutes/AddStudentToTeam",
        teamData
      );
      console.log(responce?.data);
      handleModal1();
      GetTeam();
      setTeamData({
        studentId: "",
        role: "",
        salary: "",
        status: "",
        Name: "",
        Email: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-[4px] w-full">
        <div className="px-[14px] w-full">
          <div className="flex flex-1 flex-col justify-start md:mt-0 mt-2.5 w-full">
            <div className="font-[Poppins] w-full">
              <div className="flex flex-col md:flex-row justify-center gap-4 items-center md:justify-between">
                <Text
                  className="font-[500] text-[24px] md:text-[22px] text-black-900 pl-[10px]"
                  size="txtPoppinsMedium24"
                >
                  My Team
                </Text>
                <Button
                  onClick={() => {
                    handleModal1();
                  }}
                  className="bg-blue-400 hover:bg-blue-600 flex items-center justify-center mr-[16px] px-[38px] py-[14px] rounded-[8px]"
                >
                  <Text
                    className="text-base font-[Poppins] font-[500] text-[16px] text-white"
                    size="txtPoppinsMedium16WhiteA700"
                  >
                    Add Team Member
                  </Text>
                </Button>
              </div>
            </div>
            <div className="ml-[0] sm:ml-[24px] w-full">
              <Text
                className="text-[Poppins] font-[500] text-[#000000] text-[20px]"
                size="txtPoppinsMedium20"
              >
                Team Members
              </Text>
              <Text
                className="md:ml-[0] mt-[7px] flex gap-[8px] items-end text-black-900 text-xl tracking-[-0.20px]"
                size="txtPoppinsBold20"
              >
                <span className="text-[#5956E9] leading-[-1%] font-[20px] font-[700] font-[Poppins] text-left">
                  {Teamlength}
                </span>
                <span className="text-[#000000] font-[Poppins] text-left text-[16px] font-[400]">
                  Users
                </span>
              </Text>
              <List
                className="flex flex-col gap-[6px] mt-[18px] sm:ml-[68px] ml-0 sm:mr-[127px] mr-0"
                orientation="vertical"
              >
                {Team?.map((user, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFFFF] border-[0.5px] border-[#E7E7E7] border-solid flex sm:flex-row flex-col sm:gap-[0px] gap-[10px] sm:items-center items-start justify-start px-[20px] py-[22px] rounded-[12px] w-full"
                  >
                    <div className="flex flex-row gap-[11px] items-start justify-start w-full">
                      <Img
                        className="h-14 rounded-[50%] w-14"
                        src={user?.studentId?.Image}
                        alt={user.altText}
                      />
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[11px] md:mt-0 mt-0.5">
                        <Text
                          className="font-[Poppins] text-[16px] font-[500] text-[#000000] mt-[5px]"
                          size="txtPoppinsMedium16Black900"
                        >
                          {user?.studentId?.Name}
                        </Text>
                        <Text
                          className="text-[#696969] font-[400] font-[Poppins] text-[14px]"
                          size="txtPoppinsRegular14"
                        >
                          {user?.studentId?.Email}
                        </Text>
                      </div>
                    </div>
                    <div className="border border-[#E2E2E2] border-solid flex items-center gap-[15px] px-[14px] py-[12px] rounded-[12px] max-w-[166px] w-full ">
                      <SelectBox
                        className=" flex-1 font-medium text-left text-sm w-full"
                        placeholderClassName="text-black-900"
                        indicator={
                          <Img
                            className="h-1 mr-[0] w-2"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isSearchable={false}
                        placeholder={user?.role}
                        getOptionLabel={(e) => (
                          <div className="flex items-center">
                            <Img
                              className="h-[17px] mr-[15px] w-[17px]"
                              src="images/img_usercirclesvgrepocom_1_4.svg"
                              alt="user-circle-svgrepo-com (1) 4"
                            />
                            <span>{e.label}</span>
                          </div>
                        )}
                        name="group106"
                        isMulti={false}
                        options={user.adminOptionsList}
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      />
                    </div>
                  </div>
                ))}
                <Text
                  className="text-center mt-[16px] text-[#5956E9] text-[20px] font-[600] tracking-[-0.20px] flex justify-center "
                  size="txtPoppinsSemiBold20"
                >
                  {/* Show More Users */}
                   <p class="text-lg group relative w-max hover:cursor-pointer">
                      <span> Show More Users </span>
                      <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                      <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </Text>
              </List>
            </div>
          </div>
        </div>
      </div>
      <CreateJob
        isOpen={modal1}
        onClose={handleModal1}
        User={User}
        teamData={teamData}
        handleInputChange={handleInputChange}
        Addtoteam={Addtoteam}
      />
    </>
  );
};

const CreateJob = ({
  isOpen,
  onClose,
  User,
  teamData,
  handleInputChange,
  Addtoteam,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay overflow-y-auto">
      <div className="relative h-[1016px] w-[960px] top-[25%] z-10">
        <div className="bg-white p-6 rounded-[30px] shadow-md w-full overflow-y-auto absolute max-w-[981px]">
          <div className="flex justify-between items-center pb-[40px]">
            <h3 className="text-[24px] font-bold text-[#000000]">
              Add New Member
            </h3>
            <div className="lg:w-[5%] flex justify-end cursor-pointer">
              <img
                onClick={() => {
                  onClose();
                }}
                src="/images/cancel-svgrepocom.svg"
                className="w-[40px] h-[40px]"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div>
              <p className="text-[16px] text-[#000000] font-[400] mb-[6px]">
                Select a User
              </p>
              <select
                name="studentId"
                value={teamData.studentId}
                onChange={handleInputChange}
                className="appearance-none bg-[#FAFAFA] border border-[#E7E7E7] w-full p-[15px] rounded-[12px]"
              >
                <option value="">Select a User</option>
                {User.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.Email}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-[10px]">
              <div className="w-1/2">
                <p className="text-[16px] text-[#000000] font-[400] mb-[6px]">
                  Name
                </p>
                <input
                  name="Name"
                  value={teamData.Name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter Name"
                  className="bg-[#FAFAFA] border border-[#E7E7E7] w-full p-[15px] rounded-[12px]"
                  disabled
                />
              </div>
              <div className="w-1/2">
                <p className="text-[16px] text-[#000000] font-[400] mb-[6px]">
                  Email
                </p>
                <input
                  name="Email"
                  value={teamData.Email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Enter Email"
                  className="bg-[#FAFAFA] border border-[#E7E7E7] w-full p-[15px] rounded-[12px]"
                  disabled
                />
              </div>
            </div>
            <div>
              <p className="text-[16px] text-[#000000] font-[400] mb-[6px]">
                Select Role
              </p>
              <select
                name="role"
                value={teamData.role}
                onChange={handleInputChange}
                className="appearance-none bg-[#FAFAFA] border border-[#E7E7E7] w-full p-[15px] rounded-[12px]"
              >
                <option value="">Select Role</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
              </select>
            </div>
            <div>
              <p className="text-[16px] text-[#000000] font-[400] mb-[6px]">
                Salary
              </p>
              <input
                name="salary"
                value={teamData.salary}
                onChange={handleInputChange}
                type="number"
                placeholder="Enter Salary"
                className="bg-[#FAFAFA] border border-[#E7E7E7] w-full p-[15px] rounded-[12px]"
              />
            </div>
            <div>
              <p className="text-[16px] text-[#000000] font-[400] mb-[6px]">
                Status
              </p>
              <select
                name="status"
                value={teamData.status}
                onChange={handleInputChange}
                className="appearance-none bg-[#FAFAFA] border border-[#E7E7E7] w-full p-[15px] rounded-[12px]"
              >
                <option value="">Select Status</option>
                <option value="accept">Accept</option>
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="mt-[50px] mb-[40px] flex justify-center">
            <Button
              className="bg-blue-400 hover:bg-blue-800 flex items-center justify-center mr-[16px] px-[38px] py-[14px] rounded-[8px]"
              onClick={Addtoteam}
            >
              <Text
                className="text-base font-[Poppins] font-[500] text-[16px] text-white"
                size="txtPoppinsMedium16WhiteA700"
              >
                Add Member
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirtythreePage;
