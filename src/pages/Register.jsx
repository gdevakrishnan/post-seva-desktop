import React, { Fragment } from 'react';
import '../static/register.css';
import logo from '../assets/logo.png';
function Register() {
  return (
    <Fragment>
      <div className="container">
        {/* Left Side: India Post Branding Section */}
        <div className="branding-section">
          <div className="branding-content">
            <img src={""} alt="India Post Logo" className="logo" />
            <h1>भारतीय डाक</h1>
            <h3>डाक सेवा-जन सेवा</h3>
            <h2>India Post</h2>
            <p>Dak Sewa-Jan Sewa</p>
            <button className="signin-button">Sign-in</button>
          </div>
        </div>
        
        {/* Right Side: Login Form Section */}
        <div className="form-section">
          <div className="form-container">
            <h2>Create your account</h2>
            <form>
              <label htmlFor="userID">User ID</label>
              <div className="user-id-container">
                <input type="text" id="userID" placeholder="Enter User ID" />
                <button type="button" className="availability-button">Check Availability</button>
              </div>

              <div className="name-inputs">
                <div>
                  <label htmlFor="firstName">First name</label>
                  <input type="text" id="firstName" placeholder="First name" />
                </div>
                <div>
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" id="lastName" placeholder="Last name" />
                </div>
              </div>

              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" />

              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" placeholder="Confirm Password" />

              <div className="form-buttons">
                <button type="submit" className="signup-button">Sign-up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
