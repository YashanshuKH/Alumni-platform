import api from "./axios";


export const fetchalluser =(data)=> api.get("/admin/All-users",data);
export const fetchcount =(data)=> api.get("/admin/activeusers",data);
export const Alumnidata=(data)=>api.get("/admin/getAllAlumni",data)
export const Studentdata=(data)=>api.get("/admin/getAllStudent",data)


export const logout = () => api.post("/auth/logout");  // ✅ cleaner
