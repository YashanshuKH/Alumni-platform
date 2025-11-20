import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import Login from "./components/Auth/Login/login";
import Signup from "./components/Auth/Signup/Signup";
import ForgotPassword from "./components/Auth/Forgot/forgot";
import ResetPassword from "./components/Auth/Reset/Reset";
import VerifyEmail from "./components/Auth/VerifyEmail/Verify";

import Dashboard from "./components/Alumni/Dashboard/Dashboard";
import Profile from "./components/Alumni/Profile/Profile";
import Jobs from "./components/Alumni/Job/Job";
import Event from "./components/Alumni/Event/Event";
import Message from "./components/Alumni/Message/Message";

import LandingLayout from "./components/LandingLayout";
import AlumniLayout from "./components/AlumniLayout";
import Landing from "./components/Getstarted/Landing/Landing";
import Admin from "./components/Authority/Admin/Admin";

import ProtectedRoute from "./components/ProtectedRoute";
import RedirectBasedOnAuth from "./components/RedirectbasedonAuth";
import Admin_Emanager from "./components/Authority/Admin_Emanager/Admin_Emanager";
import AlumniData from "./components/Authority/Alumni_Database/AlumniData";
import StudentData from "./components/Authority/Student_Database/StudentData";
import AdminLayout from "./components/AdminLayout";

const App = () => {
  const { isLoggedIn, loading, role } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/" element={<RedirectBasedOnAuth />} />

      {/* AUTH ROUTES */}
      <Route
        path="/login"
        element={
          <LandingLayout>
            <Login />
          </LandingLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <LandingLayout>
            <Signup />
          </LandingLayout>
        }
      />
      <Route
        path="/forgot"
        element={
          <LandingLayout>
            <ForgotPassword />
          </LandingLayout>
        }
      />
      <Route
        path="/reset-password/:token"
        element={
          <LandingLayout>
            <ResetPassword />
          </LandingLayout>
        }
      />
      <Route
        path="/verify"
        element={
          <LandingLayout>
            <VerifyEmail />
          </LandingLayout>
        }
      />

      {/* PROTECTED — ALUMNI */}
      <Route element={<ProtectedRoute allowedRoles={["Alumni"]} />}>
        <Route
          path="/AlumniHome"
          element={
            <AlumniLayout>
              <Dashboard />
            </AlumniLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <AlumniLayout>
              <Profile />
            </AlumniLayout>
          }
        />
        <Route
          path="/jobs"
          element={
            <AlumniLayout>
              <Jobs />
            </AlumniLayout>
          }
        />
        <Route
          path="/events"
          element={
            <AlumniLayout>
              <Event />
            </AlumniLayout>
          }
        />
        <Route
          path="/message"
          element={
            <AlumniLayout>
              <Message />
            </AlumniLayout>
          }
        />
      </Route>

      {/* PROTECTED — ADMIN */}
      <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
        <Route
          path="/AdminDashboard"
          element={
            <AdminLayout>
              <Admin />
            </AdminLayout>
          }
        />
        <Route
          path="/Admin_Emanager"
          element={
            <AdminLayout>
              <Admin_Emanager />
            </AdminLayout>
          }
        />
        <Route
          path="/AlumniData"
          element={
            <AdminLayout>
              <AlumniData />
            </AdminLayout>
          }
        />
        <Route
          path="/StudentData"
          element={
            <AdminLayout>
              <StudentData />
            </AdminLayout>
          }
        />

      </Route>
    </Routes>
  );
};

export default App;
