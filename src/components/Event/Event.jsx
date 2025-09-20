import React from 'react';
import styles from './Event.module.css'; 
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import UNavbar from '../UNavbar/UNavbar';
const Event = () => {
  return (
    <div className={styles.content}>
        <UNavbar />
        <Sidebar />
      <section className={styles.hero}>
        <h2>Upcoming Alumni Events</h2>
        <p>Stay connected, grow together, and never miss an opportunity.</p>
      </section>

      <section className={styles.eventsContainer}>
        <div className={styles.eventCard}>
          <p className={styles.eventDate}>📅 25 Sept 2025</p>
          <h2 className={styles.eventTitle}>Event 1</h2>
          <p className={styles.eventLocation}>JECRC University, Jaipur</p>
          <button className={styles.btn}>Register Now</button>
        </div>

        <div className={styles.eventCard}>
          <p className={styles.eventDate}>📅 10 Oct 2025</p>
          <h2 className={styles.eventTitle}>Event 2</h2>
          <p className={styles.eventLocation}>Online</p>
          <button className={styles.btn}>View Details</button>
        </div>

        <div className={styles.eventCard}>
          <p className={styles.eventDate}>📅 18 Nov 2025</p>
          <h2 className={styles.eventTitle}>Event 3</h2>
          <p className={styles.eventLocation}>Delhi NCR</p>
          <button className={styles.btn}>Register Now</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Event;
