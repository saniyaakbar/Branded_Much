import React from 'react'
import Nav from '../Nav'
import './FreeConsultationTwo.css'
// import Nav from '../Nav'

function Submitted() {

  

  return (
    <div style={{"color": "black"}} className='submitted' >
      <Nav/>
        {/* <Nav/> */}

        <div className="consultationBox">
        <h1 style={{"font-size":"3vmax" ,"width" : "80%", "position" : "absolute", "left" : "50%", "top" : "20%", "transform" : "translate(-50%,0%)"}}>Hurrey! You took the first step!</h1>
        
        <p style={{"font-size":"1.5vmax" , "position" : "absolute", "left" : "50%", "top" : "35%", "transform" : "translate(-50%,0%)"}}>Now sit back and relax. We will contact you soon</p>
        <button style={{"position": "absolute", "top": "50%"}}>Home</button>
        </div>
        

    </div>
  )
}

export default Submitted