import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Header Section */}
        <div className="profile-header">
          <div className="profile-pic">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
            />
          </div>
          <div className="profile-info">
            <h2>Dr. Evelyn Reed</h2>
            <p>Currently working as a <b>Senior Software Engineer</b> at TechCorp</p>
          </div>
          <div className="profile-actions">
            <button className="edit-btn">Edit Profile</button>
            <button className="connect-btn">Connect</button>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bio-section">
          <h3>Bio</h3>
          <p>
            Dr. Reed is a professional software engineer with deep experience in
            machine learning, cloud computing, and project management. Passionate
            about building scalable systems and mentoring young engineers.
          </p>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-list">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Cloud Computing</span>
            <span>Data Analysis</span>
            <span>Project Management</span>
          </div>
        </div>

        {/* Work Experience */}
        <div className="experience-section">
          <h3>Work Experience</h3>
          <div className="experience-grid">
            <div className="exp-card active">
              <h4>TechCorp</h4>
              <p>Senior Software Engineer</p>
              <small>2020 - Present</small>
            </div>
            <div className="exp-card">
              <h4>Innovate Labs</h4>
              <p>Software Engineer</p>
              <small>2017 - 2020</small>
            </div>
            <div className="exp-card">
              <h4>Global Solutions</h4>
              <p>Junior Developer</p>
              <small>2015 - 2017</small>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="education-section">
          <h3>Education</h3>
          <p>Ph.D. in Computer Science, Stanford University (2020)</p>
          <p>B.Sc. in Computer Science, UC Berkeley (2015)</p>
        </div>

        {/* Contact */}
        <div className="contact-section">
          <h3>Contact</h3>
          <p>LinkedIn | GitHub | Personal Website</p>
        </div>
      </div>
    </div>
  );
}
