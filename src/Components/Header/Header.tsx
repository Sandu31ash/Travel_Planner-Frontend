import React, { useState } from 'react'
import './Header.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {

  const [activate, setActivate] = useState('menu')
  const showNavBar = () => {
    setActivate("menu showMenu");
  }

  const removeShowNavBar = () => {
    setActivate("menu");
  }



  return (
    <div className='NavBar'>
      {/* ... (rest of the code) */}
      <div className={activate}>
        <div className="lists flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/flights">Flights</Link>
          </li>
          {/* ... (rest of the links) */}
        </div>
        {/* ... (rest of the code) */}
      </div>
      {/* ... (rest of the code) */}
    </div>
  );
}

export default Header
