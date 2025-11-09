import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`d-flex flex-wrap justify-content-between align-items-center py-4 w-100 ${styles.footer}`}>
      {/* Left Side: Logo & Copy */}
      <div className="d-flex align-items-center mb-2 mb-md-0">
        <Link to="/" className={`me-2 ${styles.logo}`} aria-label="AlumniConnect">
          <svg className="bi" width="30" height="24" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Link>
        <span className={styles.copy}>© 2025 AlumniConnect, Inc</span>
      </div>

      {/* Middle: Contact Info */}
      <div className="d-flex flex-column flex-md-row align-items-center mb-2 mb-md-0 gap-2">
        <p className="mb-0">
          Email:{" "}
          <a className={styles.link} href="mailto:alumniconnect@gmail.com">
            alumniconnect@gmail.com
          </a>
        </p>
        <p className="mb-0">
          Contact:{" "}
          <a className={styles.link} href="tel:+919865321475">
            +91 98653 21475
          </a>
        </p>
      </div>

      {/* Right: Social Icons */}
      <div className="d-flex gap-3">
        <a className={styles.social} href="#"><FaFacebookF /></a>
        <a className={styles.social} href="#"><FaTwitter /></a>
        <a className={styles.social} href="#"><FaLinkedinIn /></a>
      </div>
    </footer>
  );
};

export default Footer;
