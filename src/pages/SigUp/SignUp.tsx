import React from 'react'
import Header from '../../Components/Header/Header'
import { NavLink } from 'react-router-dom'

function SignUp() {
  return (
    <>
    <Header/>
    <div className="sign-in-container">
      <div className="sign-in-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="text" placeholder="Country" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className='submitBtn'><NavLink to="/signIn" className='navLink'>SignUp</NavLink>
          </button>
          {/* <button type="submit">Sign Up</button><br /><br /> */}
          <p>Already have an account? <a href="/signIn">SignIn</a></p>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp
