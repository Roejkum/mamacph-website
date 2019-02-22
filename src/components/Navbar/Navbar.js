import React from 'react';
import Link from 'gatsby-link';
import AniLink from "gatsby-plugin-transition-link/AniLink";


import logo from '../../img/logo_MAMA.png';
import videoIcon from '../../img/video.png';
import webIcon from '../../img/web.png';
import arVrIcon from '../../img/arvr.png';
import './Navbar.scss';

const Navbar = () => (

  <div className="brand">
      <AniLink cover direction="right" duration={1} to="/" hex="#340d6a" className="logo">
        <img src={logo} alt="MAMA logo"/>
      </AniLink>
    </div>


  // <nav className="navbar is-primary ">
  //   <div className="row">
  //   <div className="col-xs-12 col-sm-10 col-sm-offset-1">
  //     <div className="navbar-brand">
  //       <Link to="/" className="navbar-item">
  //         <img src={logo} alt="MAMA logo" style={{ width: 'auto'}} />
          
  //       </Link>
  //     </div>
  //     {/* <div className="navbar-end">
  //       <Link activeClassName="active" className="navbar-item has-text-black has-text-weight-bold" to="/web">
  //     <span className="icon-menu">
  //         <img src={webIcon} alt="Website Icon"/>
  //       </span>
  //         Website 
  //       </Link>
  //       <Link activeClassName="active" className="navbar-item has-text-black has-text-weight-bold" to="/arvr">
  //     <span className="icon-menu">
  //         <img src={arVrIcon} alt="AR/VR Icon"/>
  //       </span>
  //         VR/AR
  //       </Link>
  //       <Link activeClassName="active" className="navbar-item has-text-black has-text-weight-bold" to="/video">
        
  //       <span className="icon-menu">
  //       <img src={videoIcon} alt="Video Icon"/>
  //     </span>
  //         Video
  //       </Link>
  //     </div> */}
  //   </div>
  //   </div>
  // </nav>
)

export default Navbar;
