import React, { useState } from "react";
import Sidebar from "../../Alumni/Sidebar/Sidebar";
import ANavbar from "../ANavbar/ANavbar";
import styles from "./AlumniData.module.css";

const AlumniData = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Batch-wise");
  
  const alumniData = [
    {
      name: "Rohit Sharma",
      batch: 2019,
      department: "CSE",
      contact: "9876543210",
      company: "Google",
      role: "Engineer",
      contribution: 10000,
      status: "Active",
    },
    {
      name: "Neha Gupta",
      batch: 2020,
      department: "ECE",
      contact: "8765432109",
      company: "Amazon",
      role: "Mentor",
      contribution: 5000,
      status: "Active",
    },
    {
      name: "Amit Verma",
      batch: 2018,
      department: "IT",
      contact: "7654321098",
      company: "Microsoft",
      role: "Manager",
      contribution: 15000,
      status: "Inactive",
    },
  ];

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const filteredAlumni = alumniData.filter(
    (alumnus) =>
      alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumnus.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.alumniLayout}>
      <ANavbar />
      <Sidebar />

      <div className={styles.alumniMainContent}>
        {/* Header */}
        <h2 className={styles.alumniTitle}>
          Alumni Database <span>(AV Database Management)</span>
        </h2>

        {/* Actions */}
        <div className={styles.alumniActions}>
          <div className={styles.alumniImportExport}>
            <button className={styles.importBtn} title="Import alumni from CSV">
              📂 Bulk Import
            </button>
            <button className={styles.exportBtn} title="Export alumni data to CSV">
              ⬇ Bulk Export
            </button>
          </div>
          <div className={styles.alumniAiInsights}>
            <button className={styles.aiBtn} title="Detect duplicate alumni entries using AI">
              🤖 AI Duplicate Detection
            </button>
          </div>
        </div>

        {/* Search + Filter */}
        <div className={styles.topControls}>
          <div className={styles.alumniFilter}>
            <label>Filter:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>Batch-wise</option>
              <option>Department-wise</option>
              <option>Location-wise</option>
              <option>Contribution Range</option>
              <option>Total Alumni</option>
            </select>
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="🔍 Search by name, department, or company..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Alumni Table */}
        <table className={styles.alumniTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Batch</th>
              <th>Department</th>
              <th>Contact</th>
              <th>Company</th>
              <th>Role</th>
              <th>Contribution</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlumni.map((alumnus, index) => (
              <tr key={index}>
                <td>{alumnus.name}</td>
                <td>{alumnus.batch}</td>
                <td>{alumnus.department}</td>
                <td>{alumnus.contact}</td>
                <td>
                  <span className={styles.companyTag}>{alumnus.company}</span>
                </td>
                <td>{alumnus.role}</td>
                <td>
                  <span
                    className={
                      alumnus.contribution > 10000
                        ? styles.badgePurple
                        : alumnus.contribution > 5000
                        ? styles.badgeGreen
                        : styles.badgeBlue
                    }
                  >
                    ₹{alumnus.contribution.toLocaleString()}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      alumnus.status === "Active"
                        ? styles.statusActive
                        : styles.statusInactive
                    }
                  >
                    {alumnus.status}
                  </span>
                </td>
                <td>
                  <button className={styles.editBtn} title="Edit Alumni Info">
                    ✏️
                  </button>
                  <button className={styles.deleteBtn} title="Delete Alumni Entry">
                    🗑
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className={styles.pagination}>
          <button disabled>⬅ Prev</button>
          <span>Page 1 of 5</span>
          <button>Next ➡</button>
        </div>
      </div>
    </div>
  );
};

export default AlumniData;
