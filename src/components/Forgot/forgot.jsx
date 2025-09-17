import React from "react";
import styles from "./forgot.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.forgot_container}>
      <div className={styles.forgot_box}>
        <h2>FORGOT PASSWORD?</h2>
        <p>Enter your email to receive a password reset link</p>
        <form>
          <input type="email" placeholder="Email Address" required />
          <button type="submit">SEND RESET EMAIL</button>
        </form>
        <div className={styles.forgot_links}>
          <a href="/login">Back to Login</a>
          <span> | </span>
          <a href="/signup">Need an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
