import React, { useRef } from 'react';
import './Home.css'

import homeImg from '../../Assets/travel_girl.png'
import { FaPlay } from "react-icons/fa";
import Header from '../../Components/Header/Header';
import SignIn from '../SignIn/SignIn';
import { NavLink } from 'react-router-dom';

const Home = () => {

// const videoRef = useRef(null);

// const handlePlayClick = () => {
//     videoRef.current.play();
//   };
  return (
    <>
    <Header/>
    <div className='Home container section'>
        <div className="textDiv grid">
            <span className='redText'>Find the best destinations easily in beautiful Sri Lanka</span>
            <h2>Plan, Travel, Enjoy and be relax while your travel..</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas suscipit perferendis veritatis dolorem quasi, dolor voluptates alias tempora rerum delectus cum saepe impedit! Voluptates quidem recusandae in consectetur iusto.</p>
            <div className='buttons flex'>
            <NavLink to="/signIn" className='navLink'><button className='btn'>SignIn</button></NavLink>
                <div className='playBtn flex'>
                    <FaPlay className='icon'/>
                    <span>Play Demo</span>
                </div>
                {/* <video ref={videoRef} src='src\Assets\Beach.mp4' autoPlay loop /> */}
            </div>
        </div>

        <div className='imgDiv flex'>
            <img src={homeImg} alt="HomeImg" />
        </div>

    </div>
    </>
  );
}

export default Home
