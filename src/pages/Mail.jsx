// Mail / International mail page

// Domestic/International Compare & Book [Calculator]
// https://www.indiapost.gov.in/VAS/Pages/CalculatePostage.aspx

import React, { Fragment, useContext } from 'react'
import '../static/mail.css'
import appContext from '../context/appContext';

function Mail() {
  const { sidebarIsCollapse } = useContext(appContext);

  return (
    <Fragment>
      <section className="page mail_page"
        style={{
          width: sidebarIsCollapse
            ? "100vw"
            : `calc(100vw - 250px + 80px)`,
          float: "right",
        }}
      >
        <h1>Mail / International mail page</h1>
      </section>
    </Fragment>
  )
}

export default Mail
