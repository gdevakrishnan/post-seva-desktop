import React, { Fragment, useContext, useState } from 'react';
import '../static/navbar.css';
import { FaHome, FaUser, FaChartLine, FaFileAlt, FaTasks } from 'react-icons/fa';
import { IoExitOutline, IoConstruct } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import appContext from '../context/appContext';
import { MdReport } from "react-icons/md";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Navbar = () => {
  const { setSidebarIsCollapse } = useContext(appContext);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setSidebarIsCollapse(!isCollapsed);
  };

  return (
    <Fragment>
      <nav>
        <h1 className='brand'>India Post</h1>
      </nav>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          {/* <div
            className="toggle-btn"
            onClick={toggleSidebar}
            style={{
              transform: isCollapsed ? "translateX(50px)" : "translateX(220px)",
            }}
          >
            {isCollapsed ? <FaCaretRight className="toggle-icon" /> : <FaCaretLeft className="toggle-icon" />}
          </div> */}
        </div>
        <ul className="nav-links">
          {/* Existing Nav Items */}
          <li title='Home'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><FaHome /></span>
              <span>Home</span>
            </a>
          </li>
          <li title='Profile'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><FaUser /></span>
              <span>Profile</span>
            </a>
          </li>
          <li title='Dashboard'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><FaChartLine /></span>
              <span>Dashboard</span>
            </a>
          </li>

          {/* New Nav Items */}
          <li title='Appeal'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><FaFileAlt /></span>
              <span>Appeal</span>
            </a>
          </li>
          <li title='Grievance'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><MdReport /></span>
              <span>Grievance</span>
            </a>
          </li>
          <li title='Under Process'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><FaTasks /></span>
              <span>Under Process</span>
            </a>
          </li>
          <li title='Monitoring Desk'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><IoConstruct /></span>
              <span>Monitoring Desk</span>
            </a>
          </li>
          <li title='Reports'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><FaFileAlt /></span>
              <span>Reports</span>
            </a>
          </li>
          <li title='AI Chat'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><IoIosChatbubbles /></span>
              <span>AI Chat</span>
            </a>
          </li>
          <li title='Exit'>
            <a href="#" className="nav-item">
              <span className="nav-icon"><IoExitOutline /></span>
              <span>Exit</span>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
