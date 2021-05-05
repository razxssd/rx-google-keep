import React from 'react';
import {Navbar, Sidenav} from "../index";

export const Layout: React.FC = ({children}) => {
  return <div className="rx-google-keep-wrapper">
    <Navbar />
    <div className="rx-google-keep-content">
      <Sidenav />
      <div>{children}</div>
    </div>
  </div>
};
