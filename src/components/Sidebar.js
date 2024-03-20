import React, { useState } from 'react';
import CorporateNewsIcon from '../assets/icons/menuIcons/CorporateNewsIcon';
import LiveNewsIcon from '../assets/icons/menuIcons/LiveNewsIcon';
import StockAction from '../assets/icons/menuIcons/StockAction';
import Tables from '../assets/icons/menuIcons/Tables';
import CollapseBtn from '../assets/icons/CollapseBtn.png';

const Sidebar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const menuItems = [
    {
      title: 'Menu1',
      icon: <LiveNewsIcon />
    },
    {
      title: 'Menu2',
      icon: <Tables />
    },
    {
      title: 'Menu3',
      icon: <CorporateNewsIcon />
    },
    {
      title: 'Menu4',
      icon: <StockAction />
    }
  ];

  return (
    <section className={`sidebar-container ${openSideBar ? 'open' : ''}`}>
      <div className='logo-container'>
        <p className='logo'>logo</p>
      </div>
      <div className='menu-container'>
        <ul className='menu-list-container'>
          {menuItems.map((menuItem, i) => (
            <li key={i} className='menu-list'>
              {menuItem.icon}
              <span className={`${openSideBar ? 'menu-title' : 'sidebar-hidden'}`}>{menuItem.title}</span>
            </li>
          ))}
        </ul>
        <img className='collapse-btn' src={CollapseBtn} alt='icon' onClick={() => setOpenSideBar(!openSideBar)}></img>
      </div>
    </section>
  );
};

export default Sidebar;
