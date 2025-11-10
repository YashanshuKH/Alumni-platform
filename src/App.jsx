import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
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
const App = () => {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) return <p>Hold for a second...</p>;

  const ProtectedRoute = ({ children }) =>
    isLoggedIn ? children : <Navigate to="/login" replace />;

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? <Navigate to="/dashboard" replace /> : <Landing />
        }
      />
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/signup"
        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Signup />}
      />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

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
      {/* Add other protected/admin routes similarly */}
    </Routes>
  );
};

export default App;
