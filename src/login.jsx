import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { CgPassword } from "react-icons/cg";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Login = () => {

  return (
    <div className={styles.body}>
      <Navbar />
      <h2 className={styles.title}>Log In</h2>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">
              <IoPersonSharp /> Name :
            </label>
            <input type="text" name="firstname" placeholder="Name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="mobileno">
              <CiMobile1 /> Mobile :
            </label>
            <input
              type="text"
              name="mobileno"
              placeholder="Mobile Number"
              maxLength={10}
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
              placeholder="Password"
              required
            />
          </div>
        
        <button type="submit" className={styles.submitBtn}>
          Log in
        </button>
        <center className={styles.not}>Don't Have an Account ? <Link className={styles.signup} to="/signup">Sign Up</Link></center>
      </form>
      
    </div>
  );
};

export default Login;
