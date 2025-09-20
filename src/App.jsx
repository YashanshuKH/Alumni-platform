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
      <Route path="/student" element={<StudentData />} />


        <Route path="/database" element={<AlumniData />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Event />} />
      {/* <Route element={<ProtectedRoute />}>
      </Route> */}
    </Routes>
  );
}

export default App;
