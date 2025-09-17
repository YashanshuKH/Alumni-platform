import React from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="reset-container">
      <div className="reset-box">
        <h2>RESET YOUR PASSWORD</h2>
        <p>Enter your new password below</p>
        <form>
          <input type="password" placeholder="New Password" required />
          <input type="password" placeholder="Confirm New Password" required />
          <button type="submit">REST PASSWORD</button>
        </form>
        <div className="reset-links">
          <a href="/login">Back to Login</a>
          <span> | </span>
          <a href="/signup">Need an account? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
