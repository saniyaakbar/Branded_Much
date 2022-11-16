import React from 'react'
import Sec1 from "./Sec1.js";
import Nav from '../Nav'
import './Services.css'
import Sec2 from './Sec2.js';
import Sec3 from './Sec3.js';
import ContactUs from '../ContactUs'

function Services() {
  return (
    <div className='services'>
        <Nav/>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <ContactUs/>
    </div>
  )
}

export default Services