import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial'
import { FaArrowAltCircleDown } from "react-icons/fa";



const Header = () => {
  return (
    <><div className="container header_container">
      <h4 align="center">Hi I'm</h4>
      <h1 align="center">Ibrahim Hamid</h1>
      <h5 align="center" className="text-light">Web and Mobile Developer.</h5>
      <CTA />
      <HeaderSocial />
      {/* <div className='me'>
        <img src={ME} alt="me" /> */}
      {/* </div> */}
      <div className="container header_container"> <a href="#contact" className='scroll__down'><FaArrowAltCircleDown /></a></div>
      </div>

      </>

  
  )
}

export default Header