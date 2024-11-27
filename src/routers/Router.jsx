import React, { Fragment, useContext } from 'react';
import { Routes, Route, Outlet, HashRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import appContext from '../context/appContext';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Complaints from '../pages/Complaints';
import Chatbot from '../pages/Chatbot';
import Mail from '../pages/Mail';

function Router() {
  const { userDetails } = useContext(appContext);
  return (
    <Fragment>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={(userDetails) ? <Home /> : <Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/ai-chat" element={<Chatbot />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
        <Outlet />
      </HashRouter>
    </Fragment>
  );
}

export default Router;
