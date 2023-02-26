import React from 'react'
import './Css/Segment2.css'
import home5 from "../assets/home5-1.png"
function Segment4() {
  return (
    <div id='four' className='segment'>
        <div className="segleft segEvenLeft">
            <h1>Add some Ads </h1>
            <p>A digital Ad can be the last spice you might want to add to your Social Makeover!
Get Quality Leads generated through your own video Ads created by industry specialists.
</p>
        </div>
        <div className="segEvenright">
            <img src={home5} alt="" />
        </div>
        
    </div>
  )
}

export default Segment4