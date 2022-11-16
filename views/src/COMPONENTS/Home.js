import React, { Fragment } from 'react'
import About from './About/About'
import ContactUs from './ContactUs'
import FreeConsultation from './FreeConsultation/FreeConsultation'
import Landing from './Landing'
import Nav from './Nav'
import Segment2 from './Segment2'
import Segment3 from './Segment3'
import Segment4 from './Segment4'
import Segment5 from './Segment5'
import Services from './Services/Services'
import Blog from './Blog/Blog'
import Landing2 from './Landing2'


function Home() {
  return (
  <Fragment>
    {/* <Blog/> */}
    {/* <FreeConsultation/> */}
    {/* <Services/> */}
    <Nav/>
    <Landing/>
    {/* <Landing2/> */}
    <Segment2/>
    <Segment3/>
    <Segment4/>
    <Segment5/>
    <ContactUs/>
 
  </Fragment>
  )
}

export default Home