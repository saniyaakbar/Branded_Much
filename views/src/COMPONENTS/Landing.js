import React from 'react'
import './Css/Landing.css'
import Landing2 from './Landing2'
import home1 from "../assets/Home1.png"
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div id='Landing'>

        <div id="landingCard">
        
        <h1 id='heading'>Ideas to Brand <br /> in just a few clicks</h1>
        <p>All the help you need to  create your <br /> Business’s Social Presence in one place</p>
       <Link to='/FreeConsultation'><button>Get Started</button></Link> 


        </div>

        <img src={home1} alt="" />




        <Landing2/>

    </div>
  )
}

export default Landing