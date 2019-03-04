import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";


import logo from '../../img/logo_MAMA.png';
import './Navbar.scss';

const Navbar = () => (
      <AniLink cover direction="right" duration={0.5} to="/" bg="#340d6a" >
        <div className="brand">
          <img src={logo} alt="MAMA logo"/>
        </div>
      </AniLink>
)

export default Navbar;
