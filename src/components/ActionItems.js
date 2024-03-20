import React from 'react';
import SearchIcon from '../assets/icons/SearchIcon.png';
import AddIcon from '../assets/icons/AddIcon.png';
import FilterIcon from '../assets/icons/FilterIcon.png';
import ExportIcon from '../assets/icons/ExportIcon.png';

const ActionItems = ({ setOpenFilters, openFilters }) => {
  return (
    <div className='action-items-container'>
      <div className='tabs-container'>
        <div className='tab'>Paris Olympic 2024 - 300</div>
        <div className='tab'>T20 World Cup 2024 - 200</div>
        <div className='tab'>Manchester United - 200</div>
        <div className='tab'>Mumbai City FC - 220</div>
        <div className='tab'>Motorsports - 10</div>
      </div>
      <div className='action-items'>
        <div className='searchbar'>
          <p>Search</p>
          <div className='search-container'>
            <img src={SearchIcon} alt='search icon'></img>
            <input type='text' name='search' id='search' placeholder='Search' />
          </div>
        </div>
        <div className='button-container'>
          <button className='action-btn common-btn'>
            <img src={AddIcon} alt='add icon'></img>
            <span>Add Products</span>
          </button>
          <button className='common-btn filter' onClick={() => setOpenFilters(!openFilters)}>
            <img src={FilterIcon} alt='filter icon'></img>
            <span>Filters</span>
          </button>
          <button className='common-btn export'>
            <img src={ExportIcon} alt='export icon'></img>
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionItems;
