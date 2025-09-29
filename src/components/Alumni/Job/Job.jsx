import { useEffect } from "react";
import styles from "./Job.module.css"; 
import Sidebar from "../Sidebar/Sidebar";
import UNavbar from "../UNavbar/UNavbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Jobs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, mirror: false });
  }, []);

  return (
    <div className={styles.jobsContainer}>
      <UNavbar />
      <Sidebar />

      {/* Left Panel */}
      <div className={styles.leftPanel} data-aos="fade-right">
        <h2 className={styles.title}>Jobs</h2>

        {/* Currently Working In */}
        <div className={styles.card} data-aos="fade-up">
          <h3>Currently Working In</h3>
          {["Amazon", "Uber"].map((company, idx) => (
            <div key={idx} className={styles.jobItem}>
              <span>{company}</span>
              <button className={styles.editBtn}>Edit</button>
            </div>
          ))}
        </div>

        {/* Job Vacancy */}
        <div className={styles.card} data-aos="zoom-in">
          <h3>Job Vacancy</h3>
          {["Auditor", "Software Developer", "Human Resources"].map((job, idx) => (
            <div key={idx} className={styles.jobItem}>
              <span>{job}</span>
              <button className={styles.deleteBtn}>Delete</button>
            </div>
          ))}
          <button className={styles.addBtn}>+ Add Job</button>
        </div>
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel} data-aos="fade-left">
        <h3>Other Vacancies</h3>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search"
          data-aos="fade-down"
        />

        <div className={`${styles.card} ${styles.vacancyCard}`} data-aos="fade-up">
          {["Flipkart", "Blinkit", "Amazon", "Ola"].map(
            (job, idx) => (
              <div
                key={idx}
                className={styles.jobItem}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
              >
                <span>{job}</span>
                <button className={styles.applyBtn}>Apply</button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
