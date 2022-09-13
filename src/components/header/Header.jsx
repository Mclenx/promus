import React from 'react';
import './header.css';
import CTA from './CTA';

import ME2 from '../../assests/ME2.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="header">
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Eric Boisvert</h1>
      <h5 className="text-light">Front End Developer</h5>
    <CTA />
    <HeaderSocials />

    <div className="me">
      <img src={ME2} alt="handsome young man" />
    </div>

    <a href="#contact" className='scroll__down'> Scroll Down</a>
    </div>
    </header>
  )
}

export default Header