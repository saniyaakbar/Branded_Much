import React from 'react'
import image1 from '../../assets/serviceSec1img.png'


function Sec1() {
  return (
    <div className='service_sec1'>
        <img id='sec1_img' src={image1} alt="" />
        
       <div id="serviceTextDiv">
       <h1>Style your Business into a Brand </h1>
        <h3>BOOK FREE CONSULTATION</h3>
        <button>Book Now</button>
       </div>
    </div>
  )
}

export default Sec1