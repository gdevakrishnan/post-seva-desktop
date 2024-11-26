import React, { Fragment } from 'react';
import { Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';

function Router() {
  return (
    <Fragment>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Outlet />
      </HashRouter>
    </Fragment>
  );
}

export default Router;
