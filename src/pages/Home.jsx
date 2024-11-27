import React, { Fragment, useContext } from 'react'
import '../static/mail.css'
import appContext from '../context/appContext';

function Home() {
  const { sidebarIsCollapse } = useContext(appContext);

  return (
    <Fragment>
      <section className="page home_page"
        style={{
          width: sidebarIsCollapse
            ? "100vw"
            : `calc(100vw - 250px + 80px)`,
          float: "right"
        }}
      >
        <h1>Home / International Home page</h1>
      </section>
    </Fragment>
  )
}

export default Home
