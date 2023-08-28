
import React from "react";

import { Link } from "react-router-dom";
import './landingpage.css';

function App() {
  return (
    <div className="Applanding">
      {/* <header className="header">
        <nav>
          <ul>
            <li>
             Home
            </li>
            <li>
             Courses
            </li>
            <li>
             About
            </li>
            <li>
              Contact
            </li>
          </ul>
        </nav>
      </header> */}
      <main className="main">
        <section className="hero">
          <div className="hero-content">
          <b><h1>Course Management System</h1></b>
            <p>
              Manage all your courses in one place, track progress, and provide
              a seamless learning experience to your students.
            </p>
            {/* <button className="cta-btn">Get Started</button> */}
           < Link className = "cta-btn"to="/login" >Login</Link>
            <Link  className = " cta-btn"to="/registration">Register</Link>
          </div>
        </section>
        <section className="features">
         
         
          
        </section>
      </main>
      {/* <footer className="footer">
        <p>Course Management System &copy; 2023</p>
      </footer> */}
    </div>
  );
}

export default App;
