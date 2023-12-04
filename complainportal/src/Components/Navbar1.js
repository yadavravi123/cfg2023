import React from 'react';
import './Navbar1.css';
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
  });
  
const Navbar1 = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_Link Navbar_Link-brand">
        <h2 style={{ marginBottom: 0, color: 'White' }}>Dhulikona</h2>
        <span style={{ marginLeft: '6rem', color: 'White' }}></span>
      </div>
      <div className="Navbar_Link Navbar_Link-toggle">
        <i className="fas fa-bars"></i>
      </div>

      <nav className="Navbar_Items Navbar_Items--right">
        <div className="Navbar__Link">
          <a className="btn" href="./Registration/Employee/index.html">Home</a>
        </div>
        <div className="Navbar__Link">
          <a className="btn" href="./Registration/Employer/index.html">Contact us</a>
        </div>
        <div className="Navbar__Link">
          <a className="btn" href="./login_form/index.html">Log out</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar1;