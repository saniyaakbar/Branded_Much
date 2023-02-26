import React, { Fragment, useRef, useState } from 'react'
import css from './Css/Nav.css'
import logo from '../assets/logo (2).png'
import { NavLink, Link } from "react-router-dom"
import { AiOutlineMenu } from 'react-icons/ai'

function Nav() {

    const dropelem = useRef(null)


    const [open, setopen] = useState(false)

    const handlemenubutton = () => {
        setopen(!open);
        // console.log(dropelem);
        if (open) {
            dropelem.current.style.display = "none"

        }
        else {
            dropelem.current.style.display = "initial"

        }
        console.log(open)
    }

    var pages = [
        { page: "Home", link: '/' },
        { page: "Services", link: '/Services' },
        { page: "About Us", link: '/About' },
        { page: "Blog", link: '/Blog' },
        { page: "Free Consultation", link: '/FreeConsultation' },
    ];



    return (
        <Fragment>

            <div className='nav'>
                <div id="left">
                    <div id="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="links_desktop">
                        <div id="allLinks">
                            {pages.map((p, i) => <div key={i} className='links '  >

                                <NavLink style={({ isActive }) => isActive ? { color: 'blue' } : {}} to={p.link} className="links" end={p.page === "Home" ? "true" : "false"}>{p.page}</NavLink>

                                <div className="line"></div>
                            </div>)}

                        </div>
                    </div>
                </div>
                {/* <div id="right">

                    <div className='links'>
                        <Link className='links' to="/">English</Link>

                    </div>
                    <div className='links'>
                        <Link className='links' to="/">Sign In</Link>

                    </div>

                </div> */}

               

                

                    <div className='menubtn'><button onClick={handlemenubutton}><AiOutlineMenu /></button></div>

                    <div ref={dropelem} className="allLinks_mobile">
                    <div id="logo">
                        <img src={logo} alt="" />
                    </div>
                        <div className='menubtn' id="menubtn2"><button onClick={handlemenubutton}><AiOutlineMenu /></button></div>

                        <img src={logo} alt="" />
                        <div id="allLinks_mob">

                            {pages.map((p, i) => <div ref={dropelem} key={i} className='links_mob'  >
                                <div className="dot"></div>
                                <NavLink style={({ isActive }) => isActive ? { color: 'rgb(121, 239, 255)', } : {}} to={p.link} className="link_mob" end={p.page === "Home" && "true"}>{p.page}</NavLink>

                                <div className="line"></div>
                            </div>
                            )}

                        </div>
                    </div>
                </div>
           

        </Fragment>
    )
}

export default Nav