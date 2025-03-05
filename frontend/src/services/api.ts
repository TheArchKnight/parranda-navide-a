import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const api = axios.create({
  baseURL: BACKEND_URL,   
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true, // Ensures cookies and tokens are sent properly
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Or use cookies/sessionStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
