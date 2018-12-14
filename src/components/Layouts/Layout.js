import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../Navbar/Navbar';
import './layout.scss';

const Layout = ({ children }) => (
  <>
    <Helmet> 
      <title>MAMA | Digitale interaktive løsninger</title>
      <meta name="description" content="Web design - web developmemt " />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    </Helmet>
    <Navbar />
    
    <div className="page-content">
      {children}
    </div>
  </>
)

export default Layout