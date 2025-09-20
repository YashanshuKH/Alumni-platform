import React from "react";
import styles from "./Profile.module.css";
import UNavbar from "../UNavbar/UNavbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <UNavbar />
      <Sidebar />
      <div className={styles.profileCard}>
        {/* Header Section */}
        <div className={styles.profileHeader}>
          <div className={styles.profilePic}>
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>Dr. Evelyn Reed</h2>
            <p>Currently working as a <b>Senior Software Engineer</b> at TechCorp</p>
          </div>
          <div className={styles.profileActions}>
            <button className={styles.editBtn}>Edit Profile</button>
            <button className={styles.connectBtn}>Connect</button>
          </div>
        </div>

        {/* Bio Section */}
        <div className={styles.bioSection}>
          <h3>Bio</h3>
          <p>
            Dr. Reed is a professional software engineer with deep experience in
            machine learning, cloud computing, and project management. Passionate
            about building scalable systems and mentoring young engineers.
          </p>
        </div>

        {/* Skills */}
        <div className={styles.skillsSection}>
          <h3>Skills</h3>
          <div className={styles.skillsList}>
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Cloud Computing</span>
            <span>Data Analysis</span>
            <span>Project Management</span>
          </div>
        </div>

        {/* Work Experience */}
        <div className={styles.experienceSection}>
          <h3>Work Experience</h3>
          <div className={styles.experienceGrid}>
            <div className={`${styles.expCard} ${styles.active}`}>
              <h4>TechCorp</h4>
              <p>Senior Software Engineer</p>
              <small>2020 - Present</small>
            </div>
            <div className={styles.expCard}>
              <h4>Innovate Labs</h4>
              <p>Software Engineer</p>
              <small>2017 - 2020</small>
            </div>
            <div className={styles.expCard}>
              <h4>Global Solutions</h4>
              <p>Junior Developer</p>
              <small>2015 - 2017</small>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className={styles.educationSection}>
          <h3>Education</h3>
          <p>Ph.D. in Computer Science, Stanford University (2020)</p>
          <p>B.Sc. in Computer Science, UC Berkeley (2015)</p>
        </div>

        {/* Contact */}
        <div className={styles.contactSection}>
          <h3>Contact</h3>
          <p>LinkedIn | GitHub | Personal Website</p>
        </div>
      </div>
    </div>
  );
}
