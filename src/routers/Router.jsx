import React, { Fragment, useContext } from 'react';
import { Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import appContext from '../context/appContext';
import Navbar from '../components/Navbar';

function Router() {
  const { userDetails } = useContext(appContext);
  return (
    <Fragment>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={(userDetails) ? <Dashboard /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Outlet />
      </HashRouter>
    </Fragment>
  );
}

export default Router;
