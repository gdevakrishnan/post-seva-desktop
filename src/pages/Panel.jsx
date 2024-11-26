import React, { useState, useEffect } from 'react';
import '../static/panel.css'; // Make sure the path to home.css is correct
import logo from '../assets/logo.png';

import {
  FaEnvelope,
  FaGlobe,
  FaCreditCard,
  FaStamp,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaPiggyBank,
  FaPrint,
  FaBalanceScale,
  FaPlane,
  FaHome,
  FaCog,
  FaExclamationTriangle,
  FaSpinner,
  FaEye,
  FaFileAlt,
  FaPencilAlt,
  FaDashboard,
  FaLock,
  FaUsers,
} from 'react-icons/fa';
import { AiFillDashboard } from "react-icons/ai";

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const user = {
    name: 'Sandeep S',
    branch: 'Coimbatore HO',
    counter: '2',
  };

  const services = [
    { name: 'MAIL', color: '#66cc66', icon: <FaEnvelope /> },
    { name: 'INTERNATIONAL MAIL', color: '#ff9999', icon: <FaGlobe /> },
    { name: 'E-PAYMENT', color: '#66b2ff', icon: <FaCreditCard /> },
    { name: 'PHILATELY', color: '#ffcc66', icon: <FaStamp /> },
    { name: 'PRODUCT SALES', color: '#ff99cc', icon: <FaShoppingCart /> },
    { name: 'IPO', color: '#b3b3cc', icon: <FaFileInvoiceDollar /> },
    { name: 'MONEY REMITTANCES', color: '#ff9933', icon: <FaMoneyBillWave /> },
    { name: 'FINANCE', color: '#66cccc', icon: <FaPiggyBank /> },
    { name: 'FRANKING MACHINE', color: '#cc66ff', icon: <FaPrint /> },
    { name: 'DOMESTIC COMPARE & BOOK', color: '#ff6666', icon: <FaBalanceScale /> },
    { name: 'INTERNATIONAL COMPARE & BOOK', color: '#ffcc99', icon: <FaPlane /> },
  ];

  return (
    <div className="post-seva">


        {/* Top Bar */}
      <div className="top-bar">
      <div className="logo-container">
         <img src={logo} alt="India Post Logo" className="logo" />
        </div>
        <div className="top-bar-logo">
          <h1>INDIA POSTAL SERVICE</h1>
        </div>
        <div className="user-info">
          <p>{`User: ${user.name}`}</p>
          <p>{`PO Name: ${user.branch}`}</p>
          <p>{`Counter No: ${user.counter}`}</p>
          <p>{currentTime.toLocaleString()}</p>
        </div>

      </div>


      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><button className="sidebar-button"><FaHome /> Home</button></li>
          <li><button className="sidebar-button"><FaCog /> Services</button></li>
          <li><button className="sidebar-button"><FaExclamationTriangle /> Grievance</button></li>
          <li><button className="sidebar-button"><FaSpinner /> Grievance Under Process</button></li>
          <li><button className="sidebar-button"><FaEye /> Monitoring Desk</button></li>
          <li><button className="sidebar-button"><FaFileAlt /> Reports</button></li>
          <li><button className="sidebar-button"><FaPencilAlt /> Appeal</button></li>
          <li><button className="sidebar-button"><AiFillDashboard /> Dashboard</button></li>
          <li><button className="sidebar-button"><FaLock /> OTP Verification</button></li>
        </ul>
        <div className="team">
          <FaUsers />
          Team Immortals
        </div>
      </div>

      
      {/* Services Section */}
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              backgroundColor: service.color,
              border: '3px solid #888',
              borderRadius: '15px',
              boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
              margin: '10px',
            }}
          >
            <div className="icon-container">{service.icon}</div>
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
