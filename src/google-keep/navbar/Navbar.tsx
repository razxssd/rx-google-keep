import React from 'react';
import { hamburger, refresh, search, avatar, settings, list, app_google } from '../../core/google-icons/index'
import { Tooltip } from "../../core/components";
import { useSelector } from "react-redux";
import { getLayoutNavbarIsBodyAtTop } from "../../store/selectors/layout.selector";

export const Navbar: React.FC = () => {
  const isBodyAtTop = useSelector(getLayoutNavbarIsBodyAtTop);

  return <header className={`rx-navbar ${!isBodyAtTop ? 'shadow' : ''}`}>
    <div className="content">
      <div className="rx-navbar-section-one">
        <Tooltip label='Menu principale'>
          <div className="icon-container">
            {hamburger}
          </div>
        </Tooltip>


        <div className="rx-navbar-title">
          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="google keep"/>
          <span className="rx-navbar-title-text">Keep</span>
        </div>
      </div>

      <div className="rx-navbar-section-two">
        <form className="rx-navbar-form">
          <div className="rx-search-box">
            <div className="icon-container">{search}</div>
            <input type="search" aria-label="Search through site content" placeholder="Cerca"/>
          </div>
        </form>

        <div className="icon-container ml-auto">{refresh}</div>
        <div className="icon-container">{list}</div>
        <div className="icon-container">{settings}</div>
      </div>

      <div className="rx-navbar-section-three">
        <div className="rx-navbar-data">
          <div className="icon-container">{app_google}</div>
          <div className="avatar-container">{avatar}</div>
        </div>
      </div>
    </div>
  </header>
};
