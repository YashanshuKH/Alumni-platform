import React from "react";
import "./Job.module.css";
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../../Getstarted/Footer/Footer';
import UNavbar from '../UNavbar/UNavbar';

export default function Jobs() {
  return (
    <div className="jobs-container">
      {/* Left Section */}
      <div className="left-panel">
        <h2 className="title">Jobs</h2>

        {/* Currently Working In */}
        <div className="card">
          <h3>Currently Working In</h3>
          <div className="job-item">
            <span>Amazon</span>
            <button className="edit-btn">Edit</button>
          </div>
          <div className="job-item">
            <span>Uber</span>
            <button className="edit-btn">Edit</button>
          </div>
        </div>

        {/* Job Vacancy */}
        <div className="card">
          <h3>Job Vacancy</h3>
          <div className="job-item">
            <span>Auditor</span>
            <button className="delete-btn">Delete</button>
          </div>
          <div className="job-item">
            <span>Software Developer</span>
            <button className="delete-btn">Delete</button>
          </div>
          <div className="job-item">
            <span>Human Resources</span>
            <button className="delete-btn">Delete</button>
          </div>
          <button className="add-btn">Add Job</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-panel">
        <h3>Other Vacancies</h3>
        <input type="text" className="search-bar" placeholder="Search" />

        <div className="card vacancy-card">
          <div className="job-item">
            <span>Job SaeHliur</span>
            <button className="apply-btn">Apply</button>
          </div>
          <div className="job-item">
            <span>Company Name</span>
            <button className="apply-btn">Apply</button>
          </div>
          <div className="job-item">
            <span>Job Vetrim</span>
            <button className="apply-btn">Apply</button>
          </div>
          <div className="job-item">
            <span>Job Vantion</span>
            <button className="apply-btn">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
