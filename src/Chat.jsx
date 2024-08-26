import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { GetApi } from "Api/Api_Calling";
import { useMemo } from "react";
import { format } from "date-fns";
import { Hourglass, ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

// const socket = io("http://localhost:5000", { withCredentials: true });
// const socket = io("https://get-hire.vercel.app", { withCredentials: true });
const socket = io("https://gethire-backend.onrender.com", {
  withCredentials: true,
});

const ChatComponent = () => {
  const navigate = useNavigate();
  const companyId = localStorage.getItem("companyid");
  const messagesEndRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [showOldMessages, setShowOldMessages] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState({});

  const getStudents = async () => {
    try {
      const response = await GetApi("api/adminroutes/GetAllStudents");
      setStudents(response.data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoadingStudents(false);
    }
  };

  const getMessages = async (conversationId) => {
    try {
      setLoadingMessages(true);
      const response = await GetApi(
        `api/chatroutes/conversations/${conversationId}/messages`
      );
      setMessages(response?.data?.data);
      scrollToBottom();
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoadingMessages(false);
    }
  };

  useEffect(() => {
    getStudents();
    socket.emit("userConnected", companyId);

    socket.on("userStatus", ({ userId, online }) => {
      setOnlineUsers((prevUsers) => ({
        ...prevUsers,
        [userId]: online,
      }));
    });

    return () => {
      socket.emit("userDisconnected");
      socket.off("userStatus");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (currentConversationId) {
      socket.emit("joinConversation", currentConversationId);
      getMessages(currentConversationId);

      socket.on("receiveMessage", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        scrollToBottom();
      });

      return () => {
        socket.off("receiveMessage");
      };
    }
  }, [currentConversationId]);

  const sendMessage = () => {
    if (message.trim() && currentConversationId) {
      const data = {
        conversationId: currentConversationId,
        senderId: companyId,
        senderType: "Company",
        message,
      };
      socket.emit("sendMessage", data);
      setMessage("");
      scrollToBottom();
    }
  };

  const handleStudentClick = async (studentId, student) => {
    try {
      setSearchQuery("");
      const response = await GetApi(
        `api/chatroutes/conversation/${companyId}/${studentId}`
      );
      scrollToBottom();
      setCurrentConversationId(response?.data?.data?._id);
      setCurrentStudent(student);
      setMessages([]);
      setShowOldMessages(false);
    } catch (error) {
      console.error("Error fetching or creating conversation:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadOldMessages = () => {
    setShowOldMessages(false);
  };

  // Filter students based on search query
  const filteredStudents = students.filter(
    (student) =>
      student.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.Email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // -------------------------------------------------
  // for message formate correction
  const groupedMessages = useMemo(() => {
    return messages?.reduce((acc, msg) => {
      const date = format(new Date(msg.timestamp), "yyyy-MM-dd");
      if (!acc[date]) acc[date] = [];
      acc[date].push(msg);
      return acc;
    }, {});
  }, [messages]);

  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Students</h2>
        {loadingStudents ? (
          // <p>Loading students...</p>
          <p className="flex justify-center mt-44">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="blue"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </p>
        ) : (
          <ul>
            <li>
              <input
                type="text"
                placeholder="Search by name or email"
                className="flex-1 p-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </li>
            {filteredStudents.map((student) => (
              <li
                key={student._id}
                className={`p-2 hover:bg-gray-200 mt-1 cursor-pointer rounded-lg 
                    ${searchQuery !== "" ? "font-semibold" : ""}
                    ${
                      student._id === currentStudent?._id
                        ? "bg-gray-200 font-semibold"
                        : ""
                    }`}
                onClick={() => handleStudentClick(student._id, student)}
              >
                {student.Name}
                {onlineUsers[student._id] ? (
                  <span className="ml-2 text-green-500">●</span>
                ) : (
                  <></>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="w-3/4 flex flex-col h-full relative">
        {currentStudent && (
          <div className="p-2 bg-blue-400 text-white text-lg font-semibold rounded flex flex-col">
            {currentStudent.Name}
            <span className="text-sm">{currentStudent.Email}</span>
          </div>
        )}
        <div className="flex-1 p-4 overflow-y-auto mb-20 bg-gray-100 max-h-[73vh]">
          {loadingMessages ? (
            // <p className="mx-auto">Loading messages...</p>
            <p className="mx-auto flex justify-center items-center mt-44 ">
              <Hourglass
                visible={true}
                height="30"
                width="30"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["#306cce", "#72a1ed"]}
              />
            </p>
          ) : (
            // <div className="messages flex flex-col">
            //   {showOldMessages && (
            //     <button
            //       onClick={loadOldMessages}
            //       className="text-blue-500 mb-2 self-center"
            //     >
            //       Load older messages
            //     </button>
            //   )}
            //   {messages?.slice(-10).map((msg, index) => (
            //     <div
            //       key={index}
            //       className={`p-2 my-2 rounded-lg inline-block max-w-xs ${
            //         msg.senderId === companyId
            //           ? "bg-blue-200 self-end text-right"
            //           : "bg-gray-200 text-left self-start"
            //       }`}
            //     >
            //       <div>{msg.message}</div>
            //       <div className="text-sm text-gray-500">
            //         {new Date(msg.timestamp).toLocaleString()}
            //       </div>
            //     </div>
            //   ))}
            //   <div ref={messagesEndRef}></div>
            // </div>
            // ----------------------------------------------------------------
            // changes for messages formate
            <div className="messages flex flex-col">
              {showOldMessages && (
                <button
                  onClick={loadOldMessages}
                  className="text-blue-500 mb-2 self-center"
                >
                  Load older messages
                </button>
              )}
              {Object.keys(groupedMessages)
                .sort((a, b) => new Date(a) - new Date(b))
                .map((date, index) => (
                  <div key={index} className="mb-4">
                    <div className="text-center text-gray-600 mb-2">
                      {format(new Date(date), "MMMM d, yyyy")}
                    </div>
                    <div className="flex flex-col gap-2">
                      {groupedMessages[date].map((msg, msgIndex) => {
                        const linkPattern = /"([^"]+)"/;
                        const match = msg.message.match(linkPattern);
                        const link = match ? match[1] : null;
                        const messageText = msg.message
                          .replace(linkPattern, "")
                          .trim();
                        const handleApplyClick = () => {
                          if (link) {
                            navigate(link);
                          }
                        };

                        return (
                          <div
                            key={msgIndex}
                            className={`p-2 rounded-lg inline-block max-w-xs ${
                              msg.senderId === companyId
                                ? "bg-blue-200 self-end text-right"
                                : "bg-gray-200 text-left self-start"
                            }`}
                          >
                            <div>
                              {messageText}
                              {/* {link && (
                                <button
                                  onClick={handleApplyClick}
                                  style={{
                                    color: "blue",
                                    textDecoration: "underline",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    marginLeft: "5px",
                                  }}
                                >
                                  Apply Now
                                </button>
                              )} */}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(msg.timestamp).toLocaleTimeString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              <div ref={messagesEndRef}></div>
            </div>
          )}
        </div>
        <div className="border-gray-300  fixed bottom-10 w-full">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 w-1/2 border rounded-lg"
          />
          <button
            onClick={sendMessage}
            className="ml-5 bg-blue-500 text-white rounded-lg"
          >
            <i className="fa-solid fa-paper-plane p-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;

// import React, { useEffect, useState, useRef } from "react";
// import io from "socket.io-client";
// import { GetApi } from "Api/Api_Calling";

// // const socket = io("http://localhost:5000", { withCredentials: true });
// // const socket = io("https://get-hire.vercel.app", { withCredentials: true });
// const socket = io("https://gethire-backend.onrender.com", { withCredentials: true });

// const ChatComponent = () => {
//   const companyId = localStorage.getItem("companyid");
//   const messagesEndRef = useRef(null);

//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [students, setStudents] = useState([]);
//   const [currentConversationId, setCurrentConversationId] = useState(null);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [loadingStudents, setLoadingStudents] = useState(true);
//   const [loadingMessages, setLoadingMessages] = useState(false);
//   const [showOldMessages, setShowOldMessages] = useState(false);
//   const [onlineUsers, setOnlineUsers] = useState({});

//   const getStudents = async () => {
//     try {
//       const response = await GetApi("api/adminroutes/GetAllStudents");
//       setStudents(response.data.data);
//     } catch (error) {
//       console.error("Error fetching students:", error);
//     } finally {
//       setLoadingStudents(false);
//     }
//   };

//   const getMessages = async (conversationId) => {
//     try {
//       setLoadingMessages(true);
//       const response = await GetApi(
//         `api/chatroutes/conversations/${conversationId}/messages`
//       );
//       setMessages(response?.data?.data);
//       scrollToBottom();
//     } catch (error) {
//       console.error("Error fetching messages:", error);
//     } finally {
//       setLoadingMessages(false);
//     }
//   };

//   useEffect(() => {
//     getStudents();
//     socket.emit("userConnected", companyId);

//     socket.on("userStatus", ({ userId, online }) => {
//       setOnlineUsers((prevUsers) => ({
//         ...prevUsers,
//         [userId]: online,
//       }));
//     });

//     return () => {
//       socket.emit("userDisconnected");
//       socket.off("userStatus");
//       socket.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (currentConversationId) {
//       socket.emit("joinConversation", currentConversationId);
//       getMessages(currentConversationId);

//       socket.on("receiveMessage", (newMessage) => {
//         setMessages((prevMessages) => [...prevMessages, newMessage]);
//         scrollToBottom();
//       });

//       return () => {
//         socket.off("receiveMessage");
//       };
//     }
//   }, [currentConversationId]);

//   const sendMessage = () => {
//     if (message.trim() && currentConversationId) {
//       const data = {
//         conversationId: currentConversationId,
//         senderId: companyId,
//         senderType: "Company",
//         message,
//       };
//       socket.emit("sendMessage", data);
//       setMessage("");
//       scrollToBottom();
//     }
//   };

//   const handleStudentClick = async (studentId, student) => {
//     try {
//       setSearchQuery("");
//       const response = await GetApi(
//         `api/chatroutes/conversation/${companyId}/${studentId}`
//       );
//       scrollToBottom();
//       setCurrentConversationId(response?.data?.data?._id);
//       setCurrentStudent(student);
//       setMessages([]);
//       setShowOldMessages(false);
//     } catch (error) {
//       console.error("Error fetching or creating conversation:", error);
//     }
//   };

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const loadOldMessages = () => {
//     setShowOldMessages(false);
//   };

//   return (
//     <div className="flex">
//       <div className="w-1/4 bg-gray-100 border-r border-gray-300 p-4 overflow-y-auto">
//         <h2 className="text-xl font-semibold mb-4">Students</h2>
//         {loadingStudents ? (
//           <p>Loading students...</p>
//         ) : (
//           <ul>
//             <li>
//               <input
//                 type="text"
//                 placeholder="Search by name or email"
//                 className="flex-1 p-2 border rounded-lg"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </li>
//             {students.map((student) => (
//               <li
//                 key={student._id}
//                 className={`p-2 hover:bg-gray-200 mt-1 cursor-pointer rounded-lg
//                     ${searchQuery !== "" ? "font-semibold" : ""}
//                     ${
//                       student._id === currentStudent?._id
//                         ? "bg-gray-200 font-semibold"
//                         : ""
//                     }`}
//                 onClick={() => handleStudentClick(student._id, student)}
//               >
//                 {student.Name}
//                 {onlineUsers[student._id] ? (
//                   <span className="ml-2 text-green-500">●</span>
//                 ) : (
//                   <></>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <div className="w-3/4 flex flex-col h-full relative">
//         {currentStudent && (
//           <div className="p-2 bg-blue-400 text-white text-lg font-semibold rounded flex flex-col">
//             {currentStudent.Name}
//             <span className="text-sm">{currentStudent.Email}</span>
//           </div>
//         )}
//         <div className="flex-1 p-4 overflow-y-auto mb-20 bg-gray-100 max-h-[73vh]">
//           {loadingMessages ? (
//             <p className="mx-auto">Loading messages...</p>
//           ) : (
//             <div className="messages flex flex-col">
//               {showOldMessages && (
//                 <button
//                   onClick={loadOldMessages}
//                   className="text-blue-500 mb-2 self-center"
//                 >
//                   Load older messages
//                 </button>
//               )}
//               {messages?.slice(-10).map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`p-2 my-2 rounded-lg inline-block max-w-xs ${
//                     msg.senderId === companyId
//                       ? "bg-blue-200 self-end text-right"
//                       : "bg-gray-200 text-left self-start"
//                   }`}
//                 >
//                   <div>{msg.message}</div>
//                   <div className="text-sm text-gray-500">
//                     {new Date(msg.timestamp).toLocaleString()}
//                   </div>
//                 </div>
//               ))}
//               <div ref={messagesEndRef}></div>
//             </div>
//           )}
//         </div>
//         <div className="border-gray-300  fixed bottom-10 w-full">
//           <input
//             type="text"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Type a message..."
//             className="flex-1 p-2 w-1/2 border rounded-lg"
//           />
//           <button
//             onClick={sendMessage}
//             className="ml-5 bg-blue-500 text-white rounded-lg"
//           >
//             <i className="fa-solid fa-paper-plane p-3"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;
