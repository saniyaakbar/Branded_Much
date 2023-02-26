import React from 'react'
import './Css/Segment2.css'
import home4 from "../assets/home4-1.png"

function Segment3() {
  return (
    <div id='three' className='segment'>
        <div className="segleft segOddLeft">
            <h1>Your Brand Story = Your Secret Recipe to 10X your Business
</h1>
            <p>Share your brand’s story with the world through Social Media Marketing on your Brand’s official Handles through our impeccable strategies & concepts driven by trends.</p>
        </div>
        <div className="segOddright">
            <img src={home4} alt="" />
        </div>
        
    </div>
  )
}

export default Segment3