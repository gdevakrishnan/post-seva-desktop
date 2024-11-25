import React, { Fragment } from 'react';
import '../static/login.css'; // Using the same CSS for consistent styling
import logo from '../assets/logo.png';

function SignIn() {
  return (
    <Fragment>
      <div className="container">
        {/* Left Side: India Post Branding Section */}
        <div className="branding-section">
          <div className="branding-content">
            <img src={logo} alt="India Post Logo" className="logo" />
            <h1>भारतीय डाक</h1>
            <h3>डाक सेवा-जन सेवा</h3>
            <h2>India Post</h2>
            <p>Dak Sewa-Jan Sewa</p>
            <button className="signin-button">Create an Account</button>
          </div>
        </div>

        {/* Right Side: Sign-in Form Section */}
        <div className="form-section">
          <div className="form-container">
            <h2>Sign In to your account</h2>
            <form>
              <label htmlFor="userID">User ID</label>
              <input type="text" id="userID" placeholder="Enter User ID" />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" />

              <div className="form-buttons">
                <button type="submit" className="signup-button">Sign-in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SignIn;
