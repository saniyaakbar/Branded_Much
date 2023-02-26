import React from 'react'
import './Css/Landing2.css'
import home2 from "../assets/home2.png"
function Landing2() {
  return (
    <div id='landing2'>
        <div className="left">
            <h1>A true <br />  one-stop Solution</h1>
            <p>At Branded Much you’ll find the hidden voice of your Startup, the story that will generate Leads, Users, Conversions, Engagement & Numbers you’ve been dreaming of.</p>
            <p>With a mix of greatest communication & flawless design, we help you rock your branding from Day 1!</p>
        </div>
        <div className="right">
            <img src={home2} alt="" />
        </div>
        
    </div>
  )
}

export default Landing2