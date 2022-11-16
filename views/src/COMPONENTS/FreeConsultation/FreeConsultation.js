import React from 'react'
import './FreeConsultation.css'
import image1 from '../../assets/FreeConsultationImg.png'
import Nav from '../Nav'


function FreeConsultation() {
  return (
    <div className='freeConsultation'>
      <Nav/>
      <img id='freeimg1' src={image1} alt="" />

    <div className='FreecenterText'>
    <h3>Having a hard time deciding the next step for your business or maybe just the idea yet?</h3>
      <p>Book a Free Consultation with our team to help you out of the block and lead your Brand on a journey to establish its identity!</p>
      
    </div>
      <button id='freeBtn'>Book Now</button>
    </div>
  )
}

export default FreeConsultation