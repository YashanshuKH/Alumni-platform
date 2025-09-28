import { IoPersonSharp } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import Navbar from "../../Getstarted/Navbar/Navbar";

import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        
        {/* Form Heading */}
        <div className={styles.title}>Sign Up</div>

        {/* First Row */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="firstname">
              <IoPersonSharp /> First Name:
            </label>
            <input type="text" name="firstname" placeholder="First Name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="middlename">
              <IoPersonSharp /> Middle Name:
            </label>
            <input type="text" name="middlename" placeholder="Middle Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastname">
              <IoPersonSharp /> Last Name:
            </label>
            <input type="text" name="lastname" placeholder="Last Name" required />
          </div>
        </div>

        {/* Mobile & Email */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="mobileno">
              <CiMobile1 /> Mobile:
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
            <label htmlFor="email">
              <MdAlternateEmail /> Email:
            </label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
        </div>

        {/* Password Row */}
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="password">
              <CgPassword /> Password:
            </label>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmpassword">
              <TbLockPassword /> Confirm Password:
            </label>
            <input type="password" name="confirmpassword" placeholder="Confirm Password" required />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
