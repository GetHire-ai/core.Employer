import { Button, Img, Input, Text } from "components";
import React, { useEffect, useState, useRef } from "react";
import { BsBell, BsBellFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { GetApi } from "Api/Api_Calling";

const Header = () => {
  const navigate = useNavigate();
  const path = useLocation();
  const pathName = path?.pathname;
  const companydata = JSON.parse(localStorage.getItem("companydata"));

  const [toggle, setToggle] = useState(false);
  // -------------
  const dropdownRef = useRef(null);

  const [notificationToggle, setNotificationToggle] = useState(false);

  const notificationClicked = () => {
    setNotificationToggle(false);
    setToggle(false);
    navigate("/chat");
  };

  const bsBellClicked = () => {
    setNotificationToggle(true);
    setToggle(false);
    navigate("/notification");
  };

  const handleToggleOnImage = () => {
    setNoti(false);
    setNotificationToggle(false);
    setToggle(!toggle);
  };
  // ------------------------
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // for notification modal------------
  const [noti, setNoti] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [Loading, setLoading] = useState(false);
  const Getnotifications = async () => {
    setToggle(false);
    setNoti(true);
    setLoading(true);
    try {
      const res = await GetApi(`api/notificationroutes/company`);
      setNotifications(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div
      className=" bg-white flex-col md:flex-row flex gap-5 justify-between p-[6px] rounded-[12px] w-full"
      ref={dropdownRef}
    >
      <div className="text-center text-white font-semibold text-xl rounded-lg w-full flex justify-center items-center bg-[#0ba1dc]  bg-gradient-to-r from-blue-500 to-teal-400 shadow-lg whitespace-nowrap">
        Get candidates sourced, shortlisted, and interviewed to meet your
        specific hiring needs — all within a single day!
      </div>
      <div className="flex justify-between items-center gap-36 md:gap-2 ">
        <div
          className={`flex justify-center items-center w-12 h-12 bg-white text-blue-700 hover:scale-105 rounded-lg cursor-pointer `}
          onClick={notificationClicked}
        >
          <i
            className={`text-lg ${
              pathName === "/chat"
                ? "fa-solid fa-message"
                : "fa-regular fa-message"
            } `}
          ></i>
        </div>
        <div
          className="flex justify-center items-center w-12 h-12 bg-white rounded-lg cursor-pointer"
          // onClick={() => navigate("/notification")}
          // onClick={bsBellClicked}
          onMouseEnter={() => {
            Getnotifications();
          }}
          onMouseLeave={() => {
            setNoti(false);
          }}
        >
          <BsBell size={20} color="blue" />
          {noti && (
            <>
              <div
                className="fixed top-[48px] mr-[20%]  z-20 w-[300px] bg-white shadow-md rounded-lg overflow-hidden  cursor-pointer"
                onMouseEnter={() => setNoti(true)}
                onMouseLeave={() => setNoti(false)}
                onClick={() => navigate("/notification")}
              >
                <div className="bg-blue-500 flex flex-row justify-around text-white p-4 font-bold">
                  Updated Messages
                </div>
                <div className="max-h-[320px] overflow-y-auto">
                  {Loading ? (
                    <p className="p-4">Loading... ( please wait )</p>
                  ) : notifications.length > 0 ? (
                    notifications.map((notification, index) => {
                      const words = notification?.text.split(" ");
                      const truncatedText =
                        words.length > 5
                          ? words.slice(0, 9).join(" ") + "..."
                          : notification?.text;

                      return (
                        <div
                          key={index}
                          className="p-4 border-b text-sm font-semibold border-gray-200"
                        >
                          {truncatedText || "No message available"}
                        </div>
                      );
                    })
                  ) : (
                    <p className="p-4">No notifications available.</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        <Button
          onClick={() => {
            handleToggleOnImage();
          }}
        >
          <Img
            className="h-12 object-cover rounded-[12px]  "
            src="images/img_rectangle40860.png"
            alt="rectangle40860"
          />
        </Button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-[162px] py-2 right-0 rounded-lg  md:top-[75px] md:right-2 gap-4 z-10 flex flex-col items-center justify-center w-40 bg-white `}
        >
          <Text
            className="text-blue_gray-500_02 text-sm cursor-pointer hover:text-blue-600"
            size="txtPoppinsRegular14"
            onClick={() => {
              navigate("/edit-profile");
              handleToggleOnImage();
            }}
          >
            Edit Profile
          </Text>
          <Text
            className="text-blue_gray-500_02 text-sm cursor-pointer hover:text-blue-600"
            size="txtPoppinsRegular14"
            onClick={() => {
              navigate("/wallet");
            }}
          >
            Manage Subscription
          </Text>
          <Text
            className="text-blue_gray-500_02 text-sm cursor-pointer hover:text-blue-600"
            size="txtPoppinsRegular14"
          >
            Account Manager
          </Text>
          <Text
            className="text-blue_gray-500_02 text-sm cursor-pointer hover:text-blue-600"
            size="txtPoppinsRegular14"
            onClick={() => {
              localStorage.removeItem("companyToken");
              localStorage.removeItem("companyid");
              localStorage.removeItem("companydata");
              window.location.reload();
            }}
          >
            Logout
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Header;
