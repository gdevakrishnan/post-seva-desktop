// a.	It displays the cards of complaints
// b.	It displays the complaint subject, description
// c.	If I click this it shows the form field to get the review from the authority
// d.	Button to submit and resolve or forward button to forward the complaint to the next authority

import React, { Fragment, useContext } from 'react'
import '../static/complaints.css'
import appContext from '../context/appContext';

function Complaints() {
  const { sidebarIsCollapse } = useContext(appContext);

  return (
    <Fragment>
      <section className="page complaints_page"
        style={{
          width: sidebarIsCollapse
            ? "100vw"
            : `calc(100vw - 250px + 80px)`,
          float: "right"
        }}
      >
        <h1>Complaints page</h1>
      </section>
    </Fragment>
  )
}

export default Complaints
