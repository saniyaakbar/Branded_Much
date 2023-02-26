import React, { useEffect, useState } from 'react'
import './Services.css'
import { Link } from 'react-router-dom'
import image1 from '../../assets/aboutImg1.avif'

function Sec2() {

    const [cardData, setcardData] = useState([]);

    const data = [
        {
            title: "BRANDING",
            image: "",
            bodyData: "Get your Business a Unique Name, Logo, and Brand assets"
        },
        {
            title: "WEBSITE",
            image: "",
            bodyData: "Get your Brand a HOME on the Internet with it's own Website"
        },
        {
            title: "SOCIAL MEDIA",
            image: "",
            bodyData: "Put your brand out there with it's own Social Media Pages"
        },
        {
            title: "DESIGN & CONTENT",
            image: "",
            bodyData: "Help your Brand with online communication and designs on Social Media"
        },

    ]

    useEffect(() => {
        setcardData(data);

        return () => {

        }
    }, [])

    const display = cardData.map((e,i) => {
        return <div key={i} className="card_service">
                    <img className='card_service_image' src={image1} alt="" />
                    <h3>{e.title}</h3>
                    <p>{e.bodyData}</p>
                    <Link>Know More</Link>
                </div>
    })


    return (
        <div className='service_sec2'>
            <h1>Start Your Social Makeover</h1>

            <div className="service_card">
                {display}

            </div>

        </div>
    )
}

export default Sec2