import api from "./axios";


export const fetchcount =(data)=> api.get(`${Api_Base}/admin/userscount`,data);
