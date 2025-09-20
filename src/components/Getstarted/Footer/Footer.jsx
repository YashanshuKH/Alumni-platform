import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`d-flex flex-wrap justify-content-between align-items-center py-3 border-top w-100 ${styles.footer}`}
    >
      {/* Left side */}
      <div className="d-flex align-items-center">
        <Link
          to="/"
          className="me-2 text-decoration-none lh-1"
          aria-label="FinFlow"
        >
          <svg className="bi" width="30" height="24" aria-hidden="true">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </Link>
        <span>© 2025 Company, Inc</span>
      </div>

      {/* Middle */}
      <div className="d-flex align-items-center">
        <div className="me-4 text-end">
          <p className="mb-0">
            Email:{" "}
            <a className={styles.link} href="mailto:finflow@gmail.com">
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
      </div>
    </footer>
  );
};

export default Footer;
