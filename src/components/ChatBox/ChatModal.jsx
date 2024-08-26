import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Box,
  Typography,
  Avatar,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";
import {
  getMessages,
  createConversation,
  getConversation,
  sendMessage,
} from "./apiservices";
// const socket = io("http://localhost:5000", { withCredentials: true });
// const socket = io("https://get-hire.vercel.app", { withCredentials: true });
const socket = io("https://gethire-backend.onrender.com", { withCredentials: true });

const ChatModal = ({ open, handleClose }) => {
  let company = JSON.parse(localStorage.getItem("companydata"));
  const [show, setShow] = useState(true);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (company) {
      getConversation(company._id)
        .then((response) => {
          setCurrentConversationId(response.data.data._id);
          console.log("coversationId", response.data.data._id);
          return getMessages(response.data.data._id);
        })
        .then((response) => {
          setMessages(response.data.data);
          console.log("message", response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching conversation or messages:", error);
        });
    }
  }, []);

  useEffect(() => {
    if (currentConversationId) {
      socket.emit("joinRoom", currentConversationId);

      socket.on("receiveMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socket.emit("leaveRoom", currentConversationId);
        socket.off("receiveMessage");
      };
    }
  }, [currentConversationId]);

  const handleSendMessage = () => {
    if (newMessage.trim() && currentConversationId) {
      const data = {
        conversationId: currentConversationId,
        senderId: company._id,
        senderType: "Company",
        message: newMessage,
      };
      socket.emit("sendMessageAdmin", data);
      setNewMessage("");
      // scrollToBottom();
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="chat-modal-title"
      aria-describedby="chat-modal-description"
    >
      <div
        className={`fixed bottom-10 left-20 bg-gradient-to-b shadow-lg rounded-xl flex flex-col gap-2 ${
          show ? "py-8 from-[#0071b2] to-white" : "bg-white"
        }`}
        style={{ minHeight: "40rem", minWidth: "25rem" }}
      >
        {show && (
          <>
            <div className="px-5 flex justify-between mb-20">
              <img
                src="https://gethire-student.vercel.app/static/media/Gethire%20SVG.e7e8d00d37dbfe10fc42a63f9eb11af6.svg"
                style={{ maxWidth: "7rem" }}
              />
              <div className="flex justify-between items-center w-1/2 pl-5">
                <span className="flex justify-around">
                  <img
                    src="https://static.intercomassets.com/avatars/5308341/square_128/darshna-1640173175.jpeg"
                    alt=""
                    className="rounded-full w-10"
                  />
                  <img
                    src="https://static.intercomassets.com/avatars/6512092/square_128/vhbkjn-1682511160.jpeg"
                    alt=""
                    className="rounded-full w-10"
                  />
                </span>
                <i
                  className="fa-solid fa-xmark text-white text-xl cursor-pointer"
                  onClick={handleClose}
                ></i>
              </div>
            </div>
            <div className="px-5 pt-10">
              <h2 className="text-white text-4xl font-bold">
                {" "}
                Hi {company?.firstName} 👋
              </h2>
              <h2 className="text-white text-4xl font-bold">
                {" "}
                how can we help?
              </h2>
            </div>
            <div className="px-5 flex flex-col justify-center items-center w-full h-auto overflow-y-auto">
              <div
                className="flex justify-between items-center w-full my-2 bg-white border rounded-xl p-4"
                onClick={() => setShow(false)}
              >
                <div className="flex flex-col w-3/4 cursor-pointer">
                  <span className="text-lg font-semibold text-gray-600 hover:text-blue-500">
                    Send us a message{" "}
                  </span>
                  <span className="text-md font-semibold text-gray-500">
                    we typically reply in few hours
                  </span>
                </div>
                <div className="flex justify-end w-1/4 text-blue-500 cursor-pointer">
                  <SendIcon />
                </div>
              </div>
            </div>
            <div className="px-5 absolute bottom-0 flex justify-around py-5 rounded-xl gap-5 w-full bg-white">
              <span className="flex flex-col justify-center items-center text-gray-700 hover:text-blue-500 text-md font-semibold cursor-pointer">
                <span>
                  <i className="fa-solid fa-house"></i>
                </span>
                <span>Home</span>
              </span>
              <span
                className="flex flex-col justify-center items-center text-gray-700 hover:text-blue-500 text-md font-semibold cursor-pointer"
                onClick={() => setShow(false)}
              >
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <span>Messages</span>
              </span>
            </div>
          </>
        )}
        {!show && (
          <>
            <div className="px-5 flex justify-between items-center py-5 rounded-t-xl mb-2 bg-[#0071b2]">
              <i
                className="fa-solid fa-chevron-left text-white cursor-pointer p-2 rounded-lg hover:bg-blue-900"
                onClick={() => setShow(true)}
              ></i>
              <span className="text-white font-semibold text-xl">GetHire</span>
              <i
                className="fa-solid fa-xmark text-white text-xl cursor-pointer p-2 rounded-lg hover:bg-blue-900"
                onClick={handleClose}
              ></i>
            </div>

            <div className="px-5 pt-5 pb-1 overflow-y-scroll h-[calc(100vh-300px)]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.senderType === "Admin" ? "justify-start" : "justify-end"
                  } mb-3`}
                >
                  <div
                    className={`rounded-lg py-2 px-4 max-w-[70%] ${
                      msg.senderType === "Admin"
                        ? "bg-gray-200"
                        : "bg-[#0071b2] text-white"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-5 absolute bottom-0 flex justify-center py-5 rounded-xl w-full bg-white">
              <div
                className="w-full border rounded-full py-3 px-4 flex justify-between items-center"
                id="input-container"
              >
                <input
                  type="text"
                  placeholder="Send message..."
                  className="p-1 pl-2 flex-grow focus:border-blue-500 focus:outline-none"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <SendIcon
                  sx={{ color: "blue", cursor: "pointer" }}
                  onClick={handleSendMessage}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default ChatModal;
