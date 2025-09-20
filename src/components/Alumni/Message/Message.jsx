import React from 'react';
import './Message.module.css';

const AlumniConnect = () => {
  return (
    <div className="alumni-connect">
      <div className="header">
        <div className="logo">
          <span>AIN</span> ALUMNI CONNECT
        </div>
        <div className="profile">
          <span className="profile-icon">👤</span>
          <span className="notification">🔔</span>
        </div>
      </div>
      <div className="messages">
        <div className="search">
          <input type="text" placeholder="Find contacts..." />
        </div>
        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-name">Jutch Fieed</span>
            <span className="status">Alumni</span>
          </div>
          <div className="contact-item">
            <span className="contact-name">Curent Sools</span>
            <span className="status">Alumni</span>
          </div>
          <div className="contact-item">
            <span className="contact-name">John Smith</span>
            <span className="status">Alumni</span>
          </div>
          <div className="contact-item">
            <span className="contact-name">Sarah Chen</span>
            <span className="status">Alumni</span>
          </div>
          <div className="contact-item">
            <span className="contact-name">Frocks Nume</span>
            <span className="status">Alumni</span>
          </div>
          <div className="contact-item">
            <span className="contact-name">Ciner Batar</span>
            <span className="status">Alumni</span>
          </div>
        </div>
      </div>
      <div className="message-area">
        <input type="text" className="message-input" placeholder="Message" />
        <button className="add-job">Add Job</button>
        <button className="rsvp">RSVP</button>
      </div>
    </div>
  );
};

export default AlumniConnect;