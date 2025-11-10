import api from "./axios";  // ✅ Use configured axios instance

// AUTH BASE = /auth
export const redirect = (data) => api.get("/auth/login", data);

export const login = (data) => api.post("/auth/login", data);

export const verifyOtp = (data) => api.post("/auth/verifyemail", data);

export const ResendOtp = (data) => api.post("/auth/ResendOtp", data);

export const signup = (data) => api.post("/auth/signup", data);

export const forgot = (data) => api.post("/auth/forgot-password", data);
export const checkAuth = (data) => api.get("/auth/check", data);


export const reset = (token, data) => api.post(`/auth/reset-password/${token}`, data);

export const logout = () => api.post("/auth/logout");  // ✅ cleaner
