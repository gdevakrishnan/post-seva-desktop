// To showcase the number of post delivers and complains
// Below that to show the KPI performance of the Post Office [Charts]
// Below one is not the dashboard page. But it should be look like this.

import React, { Fragment, useContext } from 'react';
import '../static/dashboard.css';
import appContext from '../context/appContext';
import { RiGhost2Fill } from 'react-icons/ri';
// import Navbar from '../components/Navbar';

function Dashboard() {
  const { sidebarIsCollapse } = useContext(appContext);
  return (
    <Fragment>
      <section className="page dashboard_page" style={{ width: sidebarIsCollapse ? "100vw" : `calc(100vw - 250px + 80px)`, float: "right", zIndex: "-1"}}>
        <h1>Dashboard Page</h1>
      </section>
    </Fragment>
  )
}

export default Dashboard
