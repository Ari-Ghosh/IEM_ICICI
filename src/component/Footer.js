import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from "react-router-dom"


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <h3>IEM-ICICI</h3>
                    <div className="social">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <Link to='/' className='home'>
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <Link to='/contact' className='contact'>
                                <li>Contact</li>
                            </Link>
                            <li>Terms & Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer