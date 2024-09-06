import React from 'react'
import './Home.css'

import homeImg from '../../Assets/travel_girl.png'
import { FaPlay } from "react-icons/fa";

const Home = () => {
  return (
    <div className='Home container section'>
        <div className="textDiv grid">
            <span className='redText'>Find the best destinations easily in beautiful Sri Lanka</span>
            <h2>Plan, Travel, Enjoy and be relax while your travel..</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quas suscipit perferendis veritatis dolorem quasi, dolor voluptates alias tempora rerum delectus cum saepe impedit! Voluptates quidem recusandae in consectetur iusto.</p>
            <div className='buttons flex'>
                <button className='btn'>SignIn</button>
                <div className='playBtn flex'>
                    <FaPlay className='icon'/>
                    <span>Play Demo</span>
                </div>
            </div>
        </div>

        <div className='imgDiv flex'>
            <img src={homeImg} alt="HomeImg" />
        </div>

    </div>
  )
}

export default Home
