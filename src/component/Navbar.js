import React, { useState } from "react"
import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='home'>
          <h3 className='logo'>IEM-ICICI</h3>
        </Link>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/impdt' className='impdt'>
            <li>Important Dates</li>
          </Link>
          <Link to='/call' className='call'>
            <li>Call For Papers</li>
            
          </Link>
          <Link to='/speaker' className='speaker'>
            <li>Speakers</li>
          </Link>
          <Link to='/committee' className='committee'>
            <li>Committee</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact Us</li>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar