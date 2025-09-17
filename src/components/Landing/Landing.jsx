import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Dashboard from "../Dashboard/Dashboard";


const Landing = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* Offcanvas */}

      <div className={`text-center p-5 ${styles.banner}`}>
        <div className="hero-section"><h1 className={styles.message}>BUILD BRIDGES.</h1>
        <h1 className={styles.message}>STAY <span>CONNECTED</span></h1>
        <h1 className={styles.text}></h1>
        </div>
        {/* <button className={styles.get_started}>
          <Link to="login" className={styles.link}>
            Get Started <MdOutlineKeyboardArrowRight className={styles.arrow} />
          </Link>
        </button> */}
      </div>

      <section id="about-us" className={styles.aboutus}>
        <h2 className={styles.why}>Key Features</h2>
        <div id="a2" className="d-flex justify-content-around flex-wrap ">
          
            
            <div className={styles.whyusbox}>
              <div id={styles.reason1} className={styles.all}></div>
                   <div className="image"></div>
                   <span className={styles.userexp}>Smart Communication & Networking</span>
            </div>
          
          <div className={styles.whyusbox}>
              <div id={styles.reason2} className={styles.all}></div>
              <div className="image"></div>
              <span className={styles.userexp}>Unified Data & Records Management</span>
              

          </div>
          <div className={styles.whyusbox}>
              <div id={styles.reason3} className={styles.all}></div>
                 <div className="image"></div>
                 <span className={styles.userexp}>Secure & Easy Access</span>
              </div>
        </div>
        <p>Join Alumni Connect Today!</p>
        <button className={styles.get_Started}>
          <Link to="login" className={styles.link}>
            Get Started
          </Link>
        </button>
      </section>

      <section id="contact">
      {/* <Footer /> */}
      </section>
      
     
    </div>
  );
};

export default Landing;