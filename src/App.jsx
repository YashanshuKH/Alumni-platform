import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/login";
import Dashboard from "./components/Dashboard/Dashboard";
import Event from "./components/Event/Event";
import ResetPassword from "./components/Reset/Reset";
import ForgotPassword from "./components/Forgot/forgot";
import Profile from "./components/Profile/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
      <Route path="/forgot" element={<ForgotPassword />} />

      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/random" element={<Event />} />
    </Routes>
  );
}

export default App;
