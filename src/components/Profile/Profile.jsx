import React from "react";
import styles from "./Profile.module.css";
import UNavbar from "../UNavbar/UNavbar";
import { FaBell, FaCog } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

export default function Profile() {
  return (
    <div className={styles.dashboard}>
      {/* Main Content */}
      <main className={styles.main}>
        {/* Top Nav */}
        <header className={styles.topbar}>
          <UNavbar />
          
          <div className={styles.topIcons}>
            <FaBell />
            <FaCog />
            <img
              src="https://via.placeholder.com/35"
              alt="profile"
              className={styles.profileImg}
            />
          </div>
        </header>

        {/* Quick Stats */}
        <section className={styles.stats}>
          <div className={styles.card}>
            <h3>Connections</h3>
            <p>1,245</p>
          </div>
          <div className={styles.card}>
            <h3>Upcoming Events</h3>
            <p>This Month</p>
          </div>
          <div className={styles.card}>
            <h3>Notifications</h3>
            <p>7</p>
          </div>
        </section>

        {/* News Feed */}
        <section className={styles.feed}>
          <div className={styles.highlight}>
            <p>
              🚀 Exciting News! Our annual Global Alumni Meetup is happening on
              October 26th. Register now!
            </p>
          </div>

          <div className={styles.feedGrid}>
            <div className={styles.feedCard}>
              <img
                src="https://via.placeholder.com/200x100"
                alt="reunion"
              />
              <h4>Class of 2018 Reunion</h4>
              <p>Class of 2018 Reunion</p>
            </div>

            <div className={styles.feedCard}>
              <h4>Tech & Innovation Workshop</h4>
              <p>Location - 19th Jan</p>
              <button className={styles.btn}>RSVP</button>
            </div>

            <div className={styles.feedCard}>
              <h4>Batch Highlight</h4>
              <p>Awesome alumni unit stories</p>
            </div>

            <div className={styles.feedCard}>
              <h4>Alumni Story</h4>
              <p>Achievements & journeys</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
