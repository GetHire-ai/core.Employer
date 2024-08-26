import axios from "axios";
// const API_URL = "http://localhost:5000/api";
// const API_URL = "https://get-hire.vercel.app/api";
const API_URL = "https://gethire-backend.onrender.com/api";

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API service functions
export const getMessages = (conversationId) => {
  return api.get(`/adminchatRoutes/conversations/${conversationId}/messages`);
};

export const createConversation = (participants) => {
  return api.post("/adminchatRoutes/conversations", { participants });
};

export const getConversation = (companyId) => {
  return api.get(`/adminchatRoutes/conversations/${companyId}/admin`);
};

export const sendMessage = (conversationId, senderId, senderType, message) => {
  return api.post("/adminchatRoutes/messages", {
    conversationId,
    senderId,
    senderType,
    message,
  });
};
