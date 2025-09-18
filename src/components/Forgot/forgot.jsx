import React from "react";
import styles from "./forgot.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Call backend API to send reset email
    console.log("Password reset email sent!");
  };

  return (
    <div className={styles.forgot_container}>
      <Navbar />
      <div className={styles.forgot_box}>
        <h2>FORGOT PASSWORD?</h2>
        <p>Enter your email to receive a password reset link</p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address" required />
          <button type="submit">SEND RESET EMAIL</button>
        </form>
        <div className={styles.forgot_links}>
          <Link to="/login">Back to Login</Link>
          <span> | </span>
          <Link to="/signup">Need an account? Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
