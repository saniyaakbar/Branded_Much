import React, { Fragment, useState } from 'react'
import './Css/ContactUs.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import logo from '../assets/logo.png'
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
          <button id='btn'>Contact Us</button>
        </div>

      </div>


      <Footer />
    </Fragment>
  )
}

export default ContactUs