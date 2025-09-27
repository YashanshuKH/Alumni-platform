import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./components/Getstarted/Landing/Landing";
import Login from "./components/Auth/Login/login";
import Dashboard from "./components/Alumni/Dashboard/Dashboard";
import Event from "./components/Alumni/Event/Event";
import ResetPassword from "./components/Auth/Reset/Reset";
import ForgotPassword from "./components/Auth/Forgot/forgot";
import Profile from "./components/Alumni/Profile/Profile";
// import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Auth/Signup/Signup";
import Admin from "./components/Authority/Admin/Admin";
import Alumni from "./components/Authority/Alumni_Database/AlumniData";
import AlumniData from "./components/Authority/Alumni_Database/AlumniData";
import StudentData from "./components/Authority/Student_Database/StudentData";
import Message from "./components/Alumni/Message/Message";
import Admin_Emanager from "./components/Authority/Admin_Emanager/Admin_Emanager";


function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" replace /> : <Landing />}
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/events" element={<Event />} />
      <Route path="/message" element={<Message />} />
      <Route path="/database" element={<AlumniData />} />
      <Route path="/studentdata" element={<StudentData />} />


      <Route path="/admin" element={<Admin />} />
      <Route path="/admin-profile" element={<Admin />} />
      <Route path="/admin-alumni-database" element={<AlumniData />} />
      <Route path="/admin-student-database" element={<StudentData />} />
      <Route path="/admin-events" element={<Admin_Emanager />} />
    </Routes>
  );
}

export default App;
