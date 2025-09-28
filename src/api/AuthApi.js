import axios from "axios"

const Api_Base = "https://alumni-platform-backend-9r9d.onrender.com/api/user";


export const login = (data) => {
  return axios.post(`${Api_Base}/login`, data, {
    withCredentials: true, 
  });
};

export const signup =(data)=> axios.post(`${Api_Base}/signup`,data);

export const forgot =(data)=> axios.post(`${Api_Base}/forgot-password`,data);

export const reset =(token ,data)=> axios.post(`${Api_Base}/reset-password/${token}`,data);

export const logout = () => {
  return axios.post(`${Api_Base}/logout`, {}, { withCredentials: true });
};