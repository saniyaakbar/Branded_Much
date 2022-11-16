import React, { Fragment, useState } from 'react'
import css from './Css/Nav.css'
import logo from '../assets/logo.png'
import {NavLink, Link } from "react-router-dom"


function Nav() {



    var pages = [
        {page: "Home", link : '/'},
        {page: "Services", link : '/Services'},
        {page: "About Us", link : '/About'},
        {page: "Blog", link : '/Blog'},
        {page: "Free Consultation", link : '/FreeConsultation'},
        ];



    return (
        <Fragment>

            <div className='nav'>
                <div id="left">
                    <div id="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div id="allLinks">
                        {pages.map((p, i) => <div key={i} className='links '  >
                            
                            <NavLink style={({ isActive }) => isActive ? {color:'blue'} : {}}  to={p.link} className = "links" exact = {p.page === "Home" ? "true" : "false"}>{p.page}</NavLink>
                            
                            <div className="line"></div>
                        </div>)}

                    </div>
                </div>
                <div id="right">

                    <div className='links'>
                        <Link className='links' to="/">English</Link>

                    </div>
                    <div className='links'>
                        <Link className='links' to="/">Sign In</Link>

                    </div>

                </div>
            </div>

        </Fragment>
    )
}

export default Nav