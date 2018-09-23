import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../Navbar/Navbar';
import './layout.scss';

const Layout = ({ children }) => (
  <div>
    <Helmet> 
      <title>MAMA | Digitale interaktive løsninger</title>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    </Helmet>
    <Navbar />
    
    <div className="page-content">{children}</div>
  </div>
)

export default Layout