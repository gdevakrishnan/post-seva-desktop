import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../static/navbar.css';
import { FaHome, FaChartLine, FaFileAlt, FaTasks } from 'react-icons/fa';
import { IoExitOutline, IoConstruct } from 'react-icons/io5';
import { IoIosChatbubbles } from 'react-icons/io';
import { MdReport } from 'react-icons/md';
import appContext from '../context/appContext';
// import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Navbar = () => {
  const { setSidebarIsCollapse } = useContext(appContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Fragment>
      <nav>
        <h1 className="brand">India Post</h1>
      </nav>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}
        onMouseEnter={() => {
          setIsCollapsed(!isCollapsed);
          setSidebarIsCollapse(!isCollapsed);
          console.log("Hi");
        }}
        onMouseLeave={() => {
          setIsCollapsed(!isCollapsed);
          setSidebarIsCollapse(!isCollapsed);
          console.log("Bye");
        }}
      >
      <div className="sidebar-header">
        {/* Toggle Sidebar Button */}
        {/* <div className="toggle-btn" onClick={toggleSidebar}>
            {isCollapsed ? <FaCaretRight className="toggle-icon" /> : <FaCaretLeft className="toggle-icon" />}
          </div> */}
      </div>
      <ul className="nav-links">
        {/* Navigation Links */}
        <li title="Home">
          <Link to="/" className="nav-item">
            <span className="nav-icon"><FaHome /></span>
            <span>Home</span>
          </Link>
        </li>
        <li title="Dashboard">
          <Link to="/dashboard" className="nav-item">
            <span className="nav-icon"><FaChartLine /></span>
            <span>Dashboard</span>
          </Link>
        </li>
        {/* <li title="Appeal">
          <Link to="/register" className="nav-item">
            <span className="nav-icon"><FaFileAlt /></span>
            <span>Appeal</span>
          </Link>
        </li> */}
        <li title="Grievance">
          <Link to="/complaints" className="nav-item">
            <span className="nav-icon"><MdReport /></span>
            <span>Grievance</span>
          </Link>
        </li>
        {/* <li title="Under Process">
          <Link to="/under-process" className="nav-item">
            <span className="nav-icon"><FaTasks /></span>
            <span>Under Process</span>
          </Link>
        </li>
        <li title="Monitoring Desk">
          <Link to="/monitoring-desk" className="nav-item">
            <span className="nav-icon"><IoConstruct /></span>
            <span>Monitoring Desk</span>
          </Link>
        </li> */}
        {/* <li title="Reports">
          <Link to="/reports" className="nav-item">
            <span className="nav-icon"><FaFileAlt /></span>
            <span>Reports</span>
          </Link>
        </li> */}
        <li title="AI Chat">
          <Link to="/ai-chat" className="nav-item">
            <span className="nav-icon"><IoIosChatbubbles /></span>
            <span>AI Chat</span>
          </Link>
        </li>
        <li title="Exit">
          <Link to="/login" className="nav-item">
            <span className="nav-icon"><IoExitOutline /></span>
            <span>Exit</span>
          </Link>
        </li>
      </ul>
    </div>
    </Fragment >
  );
};

export default Navbar;
