import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/Dashboard";
import Event from "./components/Event/Event";
import ResetPassword from "./components/Reset/Reset";
import ForgotPassword from "./components/Forgot/forgot";
import Profile from "./components/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup/Signup";
import Admin from "./components/Admin/Admin";


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


      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Event />} />
      </Route>
    </Routes>
  );
}

export default App;
