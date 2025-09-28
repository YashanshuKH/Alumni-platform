import React from "react";
import styles from "./Admin.module.css";
import ANavbar from "../ANavbar/ANavbar";
import ASidebar from "../ASidebar/ASidebar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { fetchcount } from "../../../api/AdminApi";


const Admin = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetchcount();
        console.log(res)
        setCount(res.data.totalUsers);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCount();
  }, []);
  return (
    <div className={styles.adminContainer}>
        <ANavbar />
        <ASidebar />
      
      <section className={styles.overview}>
        <h3>Overview</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Total Alumni Registered</h4>
            <p className={styles.bigNumber}>15,432</p>
            <small>Graph goes here 📈</small>
          </div>
          <div className={styles.card}>
            <h4>Total Active Students</h4>
            <p className={styles.bigNumber}>{count}</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "34%" }}></div>
            </div>
            <small>34% active</small>
          </div>
        </div>
      </section>

      
      <section className={styles.events}>
        <h4>Events Scheduled / Upcoming</h4>
        <div className={styles.eventCard}>
          <p><strong>Alumni Reunion Gala</strong> (Oct 26, 2024)</p>
        </div>
        <div className={styles.eventCard}>
          <p><strong>Career Fair</strong> (Nov 15, 2024)</p>
        </div>
      </section>

    
      <section className={styles.bottomCards}>
        <div className={styles.card}>
          <h4>Donations Received</h4>
          <p className={styles.bigNumber}>$125,000</p>
          <small>50% of $250,000 goal</small>
        </div>
        <div className={styles.card}>
          <h4>Mentorship Sessions Completed</h4>
          <p className={styles.bigNumber}>3,120</p>
        </div>
      </section>
    </div>
  );
}
export default Admin ;