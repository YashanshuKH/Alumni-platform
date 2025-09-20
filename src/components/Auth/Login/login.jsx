import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { CgPassword } from "react-icons/cg";
import styles from "./Login.module.css";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { useState } from "react";
import { login } from "../../../api/AuthApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ now this will work
    try {
      const response = await login({ email, password, mobileno: mobileNo });
      localStorage.setItem("token", response.data.token);
      alert("Login Successful ✅");
      window.location.href = "/dashboard"; // redirect after login
    } catch (err) {
      alert("Login failed ❌ " + (err.response?.data?.message || ""));
    }
  };

  return (
    <div className={styles.body}>
      <Navbar />
      <h2 className={styles.title}>Log In</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">
            <IoPersonSharp /> Email :
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobileNo">
            <CiMobile1 /> Mobile :
          </label>
          <input
            type="text"
            name="mobileNo"
            placeholder="Mobile Number"
            maxLength={10}
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            inputMode="numeric"
            pattern="\d{10}"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">
            <CgPassword /> Password :
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        {/* 🔹 Forgot Password Link */}
        <div className={styles.forgotWrapper}>
          <Link to="/forgot" className={styles.forgot}>
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Log in
        </button>

        <center className={styles.not}>
          Don't Have an Account?{" "}
          <Link className={styles.signup} to="/signup">
            Sign Up
          </Link>
        </center>
      </form>
    </div>
  );
};

export default Login;
