import axios from "axios"

const Api_Base = "http://localhost:3000/api/admin";

export const fetchcount =(data)=> axios.get(`${Api_Base}/userscount`,data);
