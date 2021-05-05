import React from 'react';
import Hamburger from '../../core/google-icons/hamburger.svg'
import Refresh from '../../core/google-icons/refresh.svg'
import Search from '../../core/google-icons/search.svg'
import Settings from '../../core/google-icons/settings.svg'

export const Navbar: React.FC = () => {
  return <header className="rx-navbar">
    <div className="content">
      <img src={Hamburger} alt="hamburger"/>
      <div>icona</div>

      <img src={Search} alt="search"/>

      <img src={Refresh} alt="refresh"/>
      icona
      <img src={Settings} alt="settings"/>

      <div>icona button</div>
      <div>avatar</div>
    </div>
  </header>
};
