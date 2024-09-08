import React from 'react';
import './SignIn.css';
import Header from '../../Components/Header/Header';
import { NavLink } from 'react-router-dom';

function SignIn() {
  return (
    <>
    <Header/>
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className='submitBtn'><NavLink to="/dashboard" className='navLink'>SignIn</NavLink>
          </button><br /><br />
          
          {/* <NavLink to="/SignUp">SignIn</NavLink> */}
        </form>
        <p>Don't have an account? <a href="/signUp">SignUp</a></p>
      </div>
    </div>
    </>
  );
}

export default SignIn;