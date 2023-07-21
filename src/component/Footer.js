import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className='footer'>
            <div className="container_footer">
                <div className="top">
                    <Link to='/' className='home'>
                        <p>@ ICIEM 2024 Conference Community</p>
                    </Link>
                    <Link to='/contact' className='contact'>
                        <li>Contact Us</li>
                    </Link>
                    //<div className="social">
                    //    <FaFacebook className='icon' />
                    //    <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer