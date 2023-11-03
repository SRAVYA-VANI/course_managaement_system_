import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  const handleLogout = () => {
    // Perform your logout actions here
    // For example, you can clear authentication tokens or state

    // Display a logout alert
    alert("Logged out successfully!");
  };

  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active li">
          <img src="https://www.irc.dpu.edu.in/img/elearning.jpg" height="50px" />
        </li>
        <h3 className="coursemng">course management system</h3>
      
        </ul>
        </div>


        
        <div>
          <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ContactUs">contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/AboutUs">About us</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
        
          </li>
        </ul>

          
        
    </div>
  </nav>
  

  );
};

export default Header;