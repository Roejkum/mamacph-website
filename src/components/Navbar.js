import React from 'react';
import Link from 'gatsby-link';

import logo from '../img/mamalogo.png';
import videoIcon from '../img/video.png';
import webIcon from '../img/web.png';
import arVrIcon from '../img/arvr.png';

const Navbar = () => (
  <nav className="navbar is-primary ">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="Kaldi" style={{ width: 'auto'}} />
          
        </Link>
      </div>
      <div className="navbar-end">
        <Link activeClassName="active" className="navbar-item has-text-black has-text-weight-bold" to="/web">
      <span className="icon-menu">
          <img src={webIcon} />
        </span>
          Website 
        </Link>
        <Link activeClassName="active" className="navbar-item has-text-black has-text-weight-bold" to="/arvr">
      <span className="icon-menu">
          <img src={arVrIcon} />
        </span>
          VR/AR
        </Link>
        <Link activeClassName="active" className="navbar-item has-text-black has-text-weight-bold" to="/video">
        
        <span className="icon-menu">
        <img src={videoIcon} />
      </span>
          Video
        </Link>
      </div>
      {/* <div className="navbar-mobile">
        <button className="navbarToggle collapsed">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>
      </div> */}
    </div>
  </nav>
)

export default Navbar
