import React, { useEffect } from "react";
import "./Dashboard.css";
import { FaCalendarAlt, FaUserFriends, FaBell, FaCreditCard } from "react-icons/fa";
import cal from  "../../assets/assests/calender.png";
import fees from "../../assets/assests/wallet.png";
import parent from "../../assets/assests/parent.png";
import mes from "../../assets/assests/mess.png";
import date from "../../assets/assests/Frame 10.png";
import da23 from "../../assets/assests/date.png";
import da26 from "../../assets/assests/da26.png";
import edu from "../../assets/assests/education.png";
import maj from "../../assets/assests/major.png";
import sem from "../../assets/assests/semester.png";
// import fees from "../../assests/spare.png";

/**
 * Drop this component into src/ (or your components folder).
 * Make sure Dashboard.css is in the same folder or adjust the import path.
 *
 * Run: npm i react-icons
 */

const attendanceData = [
  { title: "Data Structures & Algorithms (CS201)", pct: 85, color: "green" },
  { title: "Object Oriented Programming (CS202)", pct: 71, color: "red" },
  { title: "Digital Logic Design (EC201)", pct: 80, color: "orange" },
  { title: "Elements of Surveying (CV201)", pct: 39, color: "red" },
  { title: "Web Programming (CS204)", pct: 90, color: "green" }
];

export default function Dashboard() {
  // optional: animate widths after mount by adding a class
  useEffect(() => {
    // add `loaded` class to body or root element to trigger css transition
    const el = document.querySelector(".main-content");
    if (el) el.classList.add("loaded");
  }, []);

  return (
    <div className="dashboard" role="main" aria-label="Student dashboard">
      <aside className="sidebar" role="complementary" aria-label="Navigation sidebar">


        <nav className="quick-links" role="navigation" aria-label="Quick links">
          <h3>QUICK LINKS</h3>
          <a href="#" aria-label="About IRIS">About IRIS</a>
          <a href="#" aria-label="IRIS Blog">IRIS Blog</a>
          <a href="#" aria-label="NITK Website">NITK Website</a>
          <a href="#" aria-label="Terms of Service">Terms of Service</a>
          <a href="#" aria-label="Login To Moodle">Login To Moodle</a>
        </nav>

        <div className="module-designers" role="region" aria-label="Module designers">
          <h3>MODULE DESIGNERS</h3>
          <a href="#" aria-label="Akshay Revankar profile">Akshay Revankar</a>
          <a href="#" aria-label="Govind Jeevan profile">Govind Jeevan</a>
        </div>

        <div className="support" role="region" aria-label="Support information">
          <h3>SUPPORT</h3>
          <a href="mailto:officers@iris.nitk.ac.in" aria-label="Email support">officers@iris.nitk.ac.in</a>
        </div>

        <button className="logout" aria-label="Log out of account">LOG OUT</button>
      </aside>

      <main className="main-content">
       <section className="top-cards" aria-label="Academic statistics">
  <div className="card card-inline" role="region" aria-label="Major credits">
    <img src={edu} alt="Education icon" className="card-img" />
    <div className="card-text">
      <h3>44</h3>
      <p>Major Credits</p>
    </div>
  </div>

  <div className="card card-inline" role="region" aria-label="Major CGPA">
    <img src={maj} alt="Major icon" className="card-img" />
    <div className="card-text">
      <h3>8.1</h3>
      <p>Major CGPA</p>
    </div>
  </div>

  <div className="card card-inline" role="region" aria-label="Current semester">
    <img src={sem} alt="Semester icon" className="card-img" />
    <div className="card-text">
      <h3>3<sup>rd</sup></h3>
      <p>Semester</p>
    </div>
  </div>
</section>
        <div className="middle-section">
          {/* Announcements */}
          <div className="announcements box">
            <div className="box-header">
              <h4>Announcements</h4>
              <a className="view-all" href="#">View All</a>
            </div>

            <div className="announcements-list">
              <div className="ann-item">Kind Attention: Mega Mess members.</div>
              <div className="ann-item">Safe, Secure and Serene Campus Policy.</div>
              <div className="ann-item">Midterm Examination Schedule Released.</div>
            </div>
          </div>

          {/* Attendance */}
          <div className="attendance box" role="region" aria-label="Attendance tracking">
            <h4>Attendance</h4>

            <div className="attendance-list" role="list" aria-label="Course attendance list">
              {attendanceData.map((a, i) => (
                <div className="attendance-item" key={i} role="listitem">
                  <p className="att-title">
                    {a.title} 
                    <span className="att-pct" aria-label={`${a.pct} percent attendance`}>
                      {a.pct}%
                    </span>
                  </p>

                  <div className="progress" role="progressbar" aria-valuenow={a.pct} aria-valuemin="0" aria-valuemax="100" aria-label={`${a.title} attendance: ${a.pct}%`}>
                    <div
                      className={`progress-bar ${a.color}`}
                      style={{ width: `${a.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <aside className="right-section">
        <div className="quick-actions box">
          <h4>Quick Actions</h4>
          <div className="actions">
            <div><img src={cal} alt="calender" /><p>View Timetable</p></div>
            <div><img src={fees} alt="fees" /><p>Pay Fees</p></div>
            <div><img src={parent} alt="parent" /><p>Contact Advisor</p></div>
            <div><img src={mes} alt="mess" /><p>Mess Change</p></div>
          </div>
        </div>

      <div className="deadlines box">
  <h4>Upcoming Deadlines</h4>
  <ul>
    <li>
      <img src={date} alt="date" className="date-icon" />
      <div className="deadline-text">
        <span className="task">Data Structure Assignment</span>
        <span className="days red">3 Days Left</span>
      </div>
    </li>

    <li>
      <img src={da23} alt="date" className="date-icon" />
      <div className="deadline-text">
        <span className="task">Mid Sem Exam</span>
        <span className="days green">6 Days Left</span>
      </div>
    </li>

    <li>
      <img src={da26} alt="date" className="date-icon" />
      <div className="deadline-text">
        <span className="task">Scholarship Application</span>
        <span className="days green">9 Days Left</span>
      </div>
    </li>
  </ul>
</div>


      </aside>
    </div>
  );
}
