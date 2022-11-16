import React from 'react'
import './About.css'
import image1 from '../../assets/aboutImg1.avif'

import Nav from '../Nav'

function Sec1() {
  return (
    
    <div className='sec1'>
      <Nav/>
      <h1 className='headline'>
      Your Idea today,  <br />
      World's next Big Brand tomorrow 
      </h1>

      <img id='I1' src={image1} alt="" />
    </div>
  )
}

export default Sec1