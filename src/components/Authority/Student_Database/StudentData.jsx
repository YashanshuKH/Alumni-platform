import React, { useState } from "react";
import styles from "./StudentData.module.css";
import ANavbar from "../ANavbar/ANavbar";
import ASidebar from "../ASidebar/ASidebar";

const StudentData = () => {
  const [students, setStudents] = useState([
    { name: "Aarav Sharma", class: "12th", roll: "101", department: "Science", contact: "9876543210", status: "Active", feesPaid: 45000 },
    { name: "Diya Gupta", class: "11th", roll: "102", department: "Commerce", contact: "8765432109", status: "Active", feesPaid: 40000 },
    { name: "Rohan Verma", class: "12th", roll: "103", department: "Arts", contact: "7654321098", status: "Inactive", feesPaid: 35000 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Class-wise");

  const [newStudent, setNewStudent] = useState({
    name: "",
    class: "",
    roll: "",
    department: "",
    contact: "",
    status: "Active",
    feesPaid: 0
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (newStudent.name && newStudent.roll) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: "", class: "", roll: "", department: "", contact: "", status: "Active", feesPaid: 0 });
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.studentLayout}>

      <div className={styles.studentMainContent}>
        <h2 className={styles.studentTitle}>
          Student Database <span>(School Management)</span>
        </h2>

        <div className={styles.studentActions}>
          <div className={styles.studentImportExport}>
            <button className={styles.importBtn}>📂 Bulk Import</button>
            <button className={styles.exportBtn}>⬇ Bulk Export</button>
          </div>
          <button className={styles.aiBtn}>🤖 AI Duplicate Check</button>
        </div>

        <div className={styles.topControls}>
          <div className={styles.studentFilter}>
            <label>Filter:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>Class-wise</option>
              <option>Department-wise</option>
              <option>Status-wise</option>
              <option>Total Students</option>
            </select>
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="🔍 Search by name or department..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <form className={styles.addStudentForm} onSubmit={handleAddStudent}>
          <input type="text" name="name" placeholder="Name" value={newStudent.name} onChange={handleInputChange} required />
          <input type="text" name="class" placeholder="Class" value={newStudent.class} onChange={handleInputChange} />
          <input type="text" name="roll" placeholder="Roll No." value={newStudent.roll} onChange={handleInputChange} required />
          <input type="text" name="department" placeholder="Department" value={newStudent.department} onChange={handleInputChange} />
          <input type="text" name="contact" placeholder="Contact" value={newStudent.contact} onChange={handleInputChange} />
          <input type="number" name="feesPaid" placeholder="Fees Paid" value={newStudent.feesPaid} onChange={handleInputChange} />
          <select name="status" value={newStudent.status} onChange={handleInputChange}>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button type="submit" className={styles.addBtn}>➕ Add Student</button>
        </form>

        <table className={styles.studentTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Roll No.</th>
              <th>Department</th>
              <th>Contact</th>
              <th>Fees Paid</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.class}</td>
                <td>{student.roll}</td>
                <td>{student.department}</td>
                <td>{student.contact}</td>
                <td>
                  <span className={student.feesPaid >= 40000 ? styles.badgeGreen : styles.badgeBlue}>
                    ₹{student.feesPaid.toLocaleString()}
                  </span>
                </td>
                <td>
                  <span className={student.status === "Active" ? styles.statusActive : styles.statusInactive}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <button className={styles.editBtn}>✏️</button>
                  <button className={styles.deleteBtn}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.pagination}>
          <button disabled>⬅ Prev</button>
          <span>Page 1 of 5</span>
          <button>Next ➡</button>
        </div>
      </div>
    </div>
  );
};

export default StudentData;
