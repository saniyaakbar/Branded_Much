import React from 'react'
import image1 from '../../assets/aboutSec3Img1.jpg'

function Sec3() {
    return (
        <div className='sec3'>

            <div className='centerAlign'>
                <h2>How we do?</h2>
                <p>Well for starters, we hear you and then we heart your brand.
                    We follow a simple routine of helping you with a free consultation to understand your needs and then devise a strategy that befits your business plan.</p>
                <img id='sec3img' src={image1} alt="" />
            </div>
        </div>
    )
}

export default Sec3