// src/api/axios.js
import axios from "axios";

// Automatic base URL selection
const BASE_URL = import.meta.env.DEV
  ? "http://localhost:3000/api"           // Local dev backend
  : "https://alumni-platform-backend-9r9d.onrender.com/api"; // Production backend

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // important if using cookies
});

export default api;
