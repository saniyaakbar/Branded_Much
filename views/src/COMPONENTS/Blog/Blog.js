import React from 'react'
import Nav from '../Nav'
import './Blog.css'
import image1 from '../../assets/blogImg1.png'


function Blog() {
  return (
    <div className='blog'>
      <Nav/>

      <div className='blogcenterText'>
      <h2>Stay Tuned With Trend</h2>
      <p>We send out weekly newsletters to keep you updated with new technologies, trends, and media insights to grow your business for <span>free.</span> </p>
      <button id='blogbtn'>Sign Up Now</button>

      </div>
     
      <img id='blogimg' src={image1} alt="" />
    </div>
  )
}

export default Blog