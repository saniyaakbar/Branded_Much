import React from 'react'
import './Css/Segment2.css'
import home3 from "../assets/home3-1.png"
function Segment2() {
  return (
    <div id='two' className='segment '>
        <div className="segleft segEvenLeft">
            <h1>Create your <br /> own online presence</h1>
            <p>Our Experts are here to help you name your Business, get your Brand it’s Logo, Color Palette, Brand stationeries ready to rock on your website and social media pages</p>
            <p>Lacking a website and social media handles? Don’t worry, We have got your back!</p>
        </div>
        <div className="segEvenright">
            <img src={home3} alt="" />
        </div>
        
    </div>
  )
}

export default Segment2