import React from "react";
import "./Profile.module.css";
import { FaUser, FaUsers, FaCalendarAlt, FaBriefcase, FaEnvelope, FaBell, FaCog } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">ALUMNI CONNECT</h2>
        <ul className="sidebar-menu">
          <li><FaUser /> Profile</li>
          <li><FaUsers /> My Network</li>
          <li><FaCalendarAlt /> Events</li>
          <li><FaBriefcase /> Jobs</li>
          <li><FaEnvelope /> Messages</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Top Nav */}
        <header className="topbar">
          <nav>
            <a href="/">HOME</a>
            <a href="/about">ABOUT US</a>
            <a href="/contact">CONTACT</a>
          </nav>
          <div className="top-icons">
            <FaBell />
            <FaCog />
            <img
              src="https://via.placeholder.com/35"
              alt="profile"
              className="profile-img"
            />
          </div>
        </header>

        {/* Quick Stats */}
        <section className="stats">
          <div className="card">
            <h3>Connections</h3>
            <p>1,245</p>
          </div>
          <div className="card">
            <h3>Upcoming Events</h3>
            <p>This Month</p>
          </div>
          <div className="card">
            <h3>Notifications</h3>
            <p>7</p>
          </div>
        </section>

        {/* News Feed */}
        <section className="feed">
          <div className="highlight">
            <p>
              🚀 Exciting News! Our annual Global Alumni Meetup is happening on
              October 26th. Register now!
            </p>
          </div>

          <div className="feed-grid">
            <div className="feed-card">
              <img
                src="https://via.placeholder.com/200x100"
                alt="reunion"
              />
              <h4>Class of 2018 Reunion</h4>
              <p>Class of 2018 Reunion</p>
            </div>

            <div className="feed-card">
              <h4>Tech & Innovation Workshop</h4>
              <p>Location - 19th Jan</p>
              <button className="btn">RSVP</button>
            </div>

            <div className="feed-card">
              <h4>Batch Highlight</h4>
              <p>Awesome alumni unit stories</p>
            </div>

            <div className="feed-card">
              <h4>Alumni Story</h4>
              <p>Achievements & journeys</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
