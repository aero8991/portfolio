import React from 'react'
import "./header.css"
import CTA from './CTA'
import MainIMG from '../../assets/dan_pic.png'
import HeaderSocials from './HeaderSocials'
import {FaArrowCircleRight} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Daniel Rossano</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={MainIMG} alt='mainImg'className='img'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down <FaArrowCircleRight /></a>
      </div>
    </header>
  )
}

export default Header