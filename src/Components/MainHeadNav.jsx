import React, { useState } from 'react';
import MenuItems from './MenuItems';
import './Css/header.css';
import My_logo from '../assets/My_logo.png';
import DarkMode from './DarkMode';

const MainHeadNav = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <header className='bg-blue-800 header-section'>
      <div className='page-width md:container'>
        <div className='header-wrapper'>
          <div className='logo-wrapper'>
            <a className='logo-link' href='#About'>
              <img src={My_logo} alt='Aman gupta' className='w-20' />
            </a>
          </div>
          <nav className='navbar-wrapper'>
            <ul className='navbar-nav'>
              <MenuItems />
            </ul>
          </nav>
          <div className='header-drawer'>
            <button className='w-6 h-6 mobNav' onClick={toggleMobileNav}>
              <i class={`fa-solid ${isMobileNavVisible ? 'fa-xmark' : 'fa-bars'} text-[24px] h-full w-6 text-white`} />
            </button>
          </div>
          <div className='header-icons'>
            <DarkMode />
          </div>
        </div>
      </div>
      <nav className={`mob-navbar-wrapper ${isMobileNavVisible ? 'visible' : ''} bg-blue-800 `} id='mobNav'>
        <ul className='mob-navbar-nav'>
            <MenuItems onMenuItemClick={toggleMobileNav}  />
        </ul>
      </nav>
    </header>
    
  );
}

export default MainHeadNav;
