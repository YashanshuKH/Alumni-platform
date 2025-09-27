import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import KeyFeatures from "../Features/Features";

const Landing = () => {
  
  return (
    <div>
      <Navbar />
      {/* Offcanvas */}

      <div className={`text-center p-5 ${styles.banner}`}>
        <div className="hero-section">
          <h1 className={styles.message}>BUILD BRIDGES</h1>
          <h1 className={styles.message}>
            STAY <span>CONNECTED</span>
          </h1>
          <h1 className={styles.text}></h1>
        </div>
        {/* <button className={styles.get_started}>
          <Link to="login" className={styles.link}>
            Get Started <MdOutlineKeyboardArrowRight className={styles.arrow} />
          </Link>
        </button> */}
      </div>

<KeyFeatures />
<Footer />
    </div>
  );
};

export default Landing;
