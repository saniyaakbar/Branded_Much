import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/duongcam1621-cat.gif'
import image2 from '../../assets/killedCat.gif'


function Sec3() {
    return (
        <div className='service_sec3'>

            <div className="service_box">
                <img id='service_gif1' src={image1} alt="" />
                <h1 id='service_gif_text1'>Is your Startup Branded Much?</h1>
            </div>
            <div className=" service_box service_box2">
                <img id='service_gif2' src={image2} alt="" />
                <h1 id='service_gif_text2'>Don’t let your curiosity kill the Cat!</h1>

            </div>

            <p id='service_gif_text3'>Get answers to your questions and discover the true potential of your idea, business or an already established brand. </p>
            <Link to='/FreeConsultation'><button id='service_gif_btn'>Ask Now</button></Link>

        </div>
    )
}

export default Sec3