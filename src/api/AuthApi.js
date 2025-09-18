import axios from "axios"

const Api_Base = "http://localhost:3000/api/user";

export const login =(data)=> axios.post(`${Api_Base}/login`,data);

export const signup =(data)=> axios.post(`${Api_Base}/signup`,data);

export const forgot =(data)=> axios.post(`${Api_Base}/forgot-password`,data);

export const reset =(token ,data)=> axios.post(`${Api_Base}/reset-password/${token}`,data);

// export const login =(data)=> axios.post(`${Api_Base}/login`,data);
