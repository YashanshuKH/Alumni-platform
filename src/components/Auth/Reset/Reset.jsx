import React from "react";
import styles from "./Reset.module.css";
import Navbar from "../../Getstarted/Navbar/Navbar";

const ResetPassword = () => {
  return (
    <div className={styles.resetContainer}>
      <Navbar />
      <div className={styles.resetBox}>
        <h2>RESET YOUR PASSWORD</h2>
        <p>Enter your new password below</p>
        <form>
          <input type="password" placeholder="New Password" required />
          <input type="password" placeholder="Confirm New Password" required />
          <button type="submit">RESET PASSWORD</button>
        </form>
        <div className={styles.resetLinks}>
          <a href="/login">Back to Login</a>
          <span> | </span>
          <a href="/signup">Need an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
