// RedirectBasedOnAuth.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Landing from "./Getstarted/Landing/Landing";
import LandingLayout from "./LandingLayout"
import api from "../api/axios";

export default function RedirectBasedOnAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const check = async () => {
      try {
        const res = await api.get("/auth/check"); // MUST return { user: { role } }
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    check();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user)
    return (
      <LandingLayout>
        <Landing />
      </LandingLayout>
    );

  if (user.role === "Student") return <Navigate to="/Studentdashboard" replace />;
  if (user.role === "Alumni") return <Navigate to="/AlumniHome" replace />;
  if (user.role === "Admin") return <Navigate to="/AdminDashboard" replace />;

  return (
    <LandingLayout>
      <Landing />
    </LandingLayout>
  );
}
