import React, { useState } from 'react'
import './Header.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  const [activate, setActivate] = useState('menu')
  const showNavBar = () => {
    setActivate("menu showMenu");
  }

  const removeShowNavBar = () => {
    setActivate("menu");
  }



  return (

    // <nav>
    //   <Link to="/">Home</Link>
    //   <ul>
    //     <li><Link to="/flights">Flights</Link></li>
    //     <li><Link to="/accommodations">Accommodations</Link></li>
    //     <li><Link to="/destinations">Destinations</Link></li>
    //     <li><Link to="/weather">Weather</Link></li>
    //     <li><Link to="/itineraries">Itineraries</Link></li>
    //     <li><Link to="/events">Events</Link></li>
    //   </ul>
    // </nav>

    <div className='NavBar'>
      <div className='logoDiv'>
        <h2 className='logo'>Journify</h2>
      </div>
      <div className={activate}>
        <div className='lists flex'>
          {/* <li>
            <a href="">Home</a>
          </li> */}
          {/* <li>
            <a href="">Flights</a>
          </li> */}
          {/* <li><Link to="/flights">Flights</Link></li> */}

          
          <NavLink to="/" className='navLink'>Home</NavLink>
          {/* <NavLink to="/dashboard" className='navLink'>Dashboard</NavLink> */}
          {/* <NavLink to="/accommodations" className='navLink'>Accommodations</NavLink> */}
          <NavLink to="/tripplanner" className='navLink'>Trip Planner</NavLink>
          {/* <NavLink to="/weather" className='navLink'>Weather</NavLink> */}
          <NavLink to="/itineraries" className='navLink'>Itineraries</NavLink>
          <NavLink to="/chatbot" className='navLink'>Jennifer-Chat Bot</NavLink>
          {/* <NavLink to="/signIn" className='navLink'>SignIn</NavLink> */}
          {/* <li>
            <a href="">Accommodations</a>
          </li>
          <li>
            <a href="">Destinations</a>
          </li>
          <li>
            <a href="">Weather</a>
          </li>
          <li>
            <a href="">Itineraries</a>
          </li>
          <li>
            <a href="">Events</a>
          </li> */}
        </div>

        {/* <div className='lists flex' id='listsdown'>
          <li>
            <a href="">Homee</a>
          </li>
          <li>
            <a href="">Flights</a>
          </li>
            <li>
            <a href="">Accommodations</a>
          </li>
          <li>
            <a href="">Destinations</a>
          </li>
          <li>
            <a href="">Weather</a>
          </li>
          <li>
            <a href="">Itineraries</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
        </div> */}

        <div className='btns flex'>
        {/* <NavLink to="/signIn" className='navLink'><button className='btn'>SignIn</button></NavLink> */}
          {/* <button className='btn'><NavLink to="/signIn" className='navLink'></NavLink></button> */}
          <NavLink to="/signIn" className='navLink'><button className='btn'>SignIn</button></NavLink>
          <NavLink to="/signUp" className='navLink'><button className='btn'>SignUp</button></NavLink>
          {/* <button className='btn'>SignUp</button> */}
        </div>
        <div className='closeIcon' onClick={removeShowNavBar}>
          <AiFillCloseCircle className='icon' />
        </div>
      </div>
      <div className='toggleIcon' onClick={showNavBar}>
          <IoMenu className='icon' />
        </div>
    </div>

    // <div className='NavBar'>
    //   {/* ... (rest of the code) */}
    //   <div className={activate}>
    //     <div className="lists flex">
    //       {/* <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/flights">Flights</Link>
    //       </li> */}
    //       {/* ... (rest of the links) */}
    //     </div>
    //     {/* ... (rest of the code) */}
    //   </div>
    //   {/* ... (rest of the code) */}
    // </div>
  );
}

export default Header
