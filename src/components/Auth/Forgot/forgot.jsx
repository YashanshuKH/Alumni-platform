import React, { useState } from "react";
import styles from "./forgot.module.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Getstarted/Navbar/Navbar";
import { forgot } from "../../../api/AuthApi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await forgot({ email });
      if (res.data.success) {
        alert("✅ Reset link sent to your email");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
      alert("❌ " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className={styles.forgotContainer}>
      <Navbar />
      <div className={styles.forgotBox}>
        <h2>Forgot Password?</h2>
        <p>Enter your email and we’ll send you a reset link</p>

        <form onSubmit={handleSubmit}>
          <input
          className={styles.box}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Send Reset Link</button>
        </form>

        <div className={styles.forgotLinks}>
          <Link to="/login">Back to Login</Link>
          <span> | </span>
          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
