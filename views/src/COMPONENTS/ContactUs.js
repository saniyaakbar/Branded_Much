import React, { Fragment, useState } from 'react'
import './Css/ContactUs.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import logo from '../assets/logo (2).png'
import facebook from "../assets/logos/facebook-icon.webp"
import insta from "../assets/logos/google-play-icon.webp"
import google from "../assets/logos/Instagram-icon.webp"
import pinterest from "../assets/logos/pinterest-icon.webp"
import youtube from "../assets/logos/twitter-icon.webp"
import twitter from "../assets/logos/youtube-icon.webp"


function ContactUs() {

  var icons = [facebook,
    google,
    insta,
    pinterest,
    youtube,
    twitter]

  var settings = [
    "TOS", "Privacy", "Cookie Policy", "@2022 Copyright Details"
  ]

  return (
    <Fragment>
 
      <div className="wavefooter">
      <svg className="wave-svg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path className="wave-svg-fill" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
      </div>
       
      <div className='contactus'>
     
        <div className="leftContact">

          <div id="footerLogo">
            <img src={logo} />
            <div id="icons">
              {
                icons.map((e, i) => <div key={i} className='icon'><Link key={i} to="/"><img className='iconImg' src={e} alt="" /></Link></div>)
              }

            </div>

            <div id="settings">
              {
                settings.map((e, i) => <div key={i} className='setting'>
                  <Link key={i} to="/">{e}</Link>
                  {i < settings.length-1 ?
                  <div className="line"></div>
                    :""
}
                  </div>)
              }

            </div>
          </div>

        </div>

        <div id="rightContact">
          <h1>Want to know more <br /> About us?</h1>
          <Link to='/FreeConsultation'><button id='btn'>Contact Us</button></Link>
          
        </div>

      </div>


      {/* <Footer /> */}
    </Fragment>
  )
}

export default ContactUs