import React from "react";
import styles from "./Admin.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { fetchcount } from "../../../api/AdminApi";

const Admin = () => {
  const [Studentcount, setStudentCount] = useState(0);
  const [AlumniCount, setAlumniCount] = useState(0);
  const [ActiveAlumni, setActiveAlumni] = useState(0);
  const [ActiveStudent, setActiveStudent] = useState(0);


  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetchcount();
        setAlumniCount(res.data.alumniCount);
        setStudentCount(res.data.studentCount);
        setActiveAlumni(res.data.AlumniactivePercentage);
        setActiveStudent(res.data.StudentactivePercentage);

      } catch (err) {
        console.error(err);
      }
    };

    fetchCount();
  }, []);
  return (
    <div className={styles.adminContainer}>


      <section className={styles.overview}>
        <h3>Overview</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Total Alumni Registered</h4>
            <p className={styles.bigNumber}>{AlumniCount}</p>
            <small>Graph goes here 📈</small>
          </div>
          <div className={styles.card}>
            <h4>Total Active Alumnis</h4>
            <p className={styles.bigNumber}></p>
            <br />
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "{ActiveAlumni}%" }}></div>
            </div>
            <small>{ActiveAlumni}% active</small>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Total Student Registered</h4>
            <p className={styles.bigNumber}>{Studentcount}</p>
            <small>Graph goes here 📈</small>
          </div>
          <div className={styles.card}>
            <h4>Total Active Students</h4>
            <p className={styles.bigNumber}></p>
            <br />
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "{ActiveStudent}%" }}></div>
            </div>
            <small>{ActiveStudent}% active</small>
          </div>
        </div>
      </section>

      <section className={styles.events}>
        <h4>Events Scheduled / Upcoming</h4>
        <div className={styles.eventCard}>
          <p>
            <strong>Alumni Reunion Gala</strong> (Oct 26, 2024)
          </p>
        </div>
        <div className={styles.eventCard}>
          <p>
            <strong>Career Fair</strong> (Nov 15, 2024)
          </p>
        </div>
      </section>

      <section className={styles.bottomCards}>
        <div className={styles.card}>
          <h4>Donations Received</h4>
          <p className={styles.bigNumber}> NAN</p>
          <small></small>
        </div>
        <div className={styles.card}>
          <h4>Mentorship Sessions Completed</h4>
          <p className={styles.bigNumber}>3,120</p>
        </div>
      </section>
    </div>
  );
};
export default Admin;
