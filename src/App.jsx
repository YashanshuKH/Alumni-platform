import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Landing from "./components/Getstarted/Landing/Landing";
import Login from "./components/Auth/Login/login";
import Dashboard from "./components/Alumni/Dashboard/Dashboard";
import Event from "./components/Alumni/Event/Event";
import ResetPassword from "./components/Auth/Reset/Reset";
import ForgotPassword from "./components/Auth/Forgot/forgot";
import Profile from "./components/Alumni/Profile/Profile";
import Signup from "./components/Auth/Signup/Signup";
import Admin from "./components/Authority/Admin/Admin";
import AlumniData from "./components/Authority/Alumni_Database/AlumniData";
import StudentData from "./components/Authority/Student_Database/StudentData";
import Message from "./components/Alumni/Message/Message";
import Admin_Emanager from "./components/Authority/Admin_Emanager/Admin_Emanager";
import Jobs from "./components/Alumni/Job/Job";
import VerifyEmail from "./components/Auth/VerifyEmail/Verify";

function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 🔍 Check login state from backend session
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/check", {
          withCredentials: true, // allow cookies
        });
        console.log(res)
        setIsLoggedIn(res.data.isLoggedIn);
      } catch (err) {
        console.error("Error checking login:", err);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  if (loading) return <p>Hold for a second...</p>;

  // 🔒 Protected route wrapper
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" replace />;
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <Landing />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<VerifyEmail setIsLoggedIn={setIsLoggedIn} />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/events"
        element={
          <ProtectedRoute>
            <Event />
          </ProtectedRoute>
        }
      />
      <Route
        path="/message"
        element={
          <ProtectedRoute>
            <Message />
          </ProtectedRoute>
        }
      />
      <Route
        path="/database"
        element={
          <ProtectedRoute>
            <AlumniData />
          </ProtectedRoute>
        }
      />
      <Route
        path="/studentdata"
        element={
          <ProtectedRoute>
            <StudentData />
          </ProtectedRoute>
        }
      />

      {/* Admin routes (also protected) */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-profile"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-alumni-database"
        element={
          <ProtectedRoute>
            <AlumniData />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-student-database"
        element={
          <ProtectedRoute>
            <StudentData />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-events"
        element={
          <ProtectedRoute>
            <Admin_Emanager />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
