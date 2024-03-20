import React from 'react';
import NotificationIcon from '../assets/icons/NotificationIcon.png';

const Header = () => {
  return (
    <section className='header-container'>
      <h1 className='title'>Products</h1>
      <div className='profile-info'>
        <img src={NotificationIcon} alt='icon'></img>
        <div className='profile-icon'>
          <div className='profile'>
            <div className='img'></div>
            <p>Mathews Gill</p>
            <p>&#8964;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
