import React from "react";
import Sidebar from '../Sidebar/Sidebar';
import UNavbar from '../UNavbar/UNavbar';
import styles from "./AlumniData.module.css";

const Alumni = () => {
  return (
    <div className={styles.alumniLayout}>
      <UNavbar />
      <Sidebar />

      <div className={styles.alumniMainContent}>
        <h2 className={styles.alumniTitle}>
          Alumni Database <span>(AV Database Management)</span>
        </h2>

        <div className="alumni-actions">
          <div className="alumni-importExport">
            <button className="importBtn">Bulk Import (Excel/CSV)</button>
            <button className="exportBtn">Bulk Export</button>
          </div>
          <div className="alumni-aiInsights">
            <button className="aiBtn">
              Duplicate Detection & Profile Merging
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="alumni-filter">
          <label>Filter:</label>
          <select>
            <option>Batch-wise</option>
            <option>Department-wise</option>
            <option>Location-wise</option>
            <option>Total Alumni</option>
          </select>
        </div>

        {/* Alumni Table */}
        <table className="alumni-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Batch</th>
              <th>Department</th>
              <th>Contact</th>
              <th>Company</th>
              <th>Role</th>
              <th>Contribution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rohit Sharma</td>
              <td>2019</td>
              <td>CSE</td>
              <td>9876543210</td>
              <td>Google</td>
              <td>Engineer</td>
              <td>₹10,000</td>
            </tr>
            <tr>
              <td>Neha Gupta</td>
              <td>2020</td>
              <td>ECE</td>
              <td>8765432109</td>
              <td>Amazon</td>
              <td>Mentor</td>
              <td>₹5,000</td>
            </tr>
            <tr>
              <td>Amit Verma</td>
              <td>2018</td>
              <td>IT</td>
              <td>7654321098</td>
              <td>Microsoft</td>
              <td>Manager</td>
              <td>₹15,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alumni;
