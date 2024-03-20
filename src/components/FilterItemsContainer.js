import React from 'react';

const FilterItemsContainer = ({ openFilters, setOpenFilters }) => {
  return (
    <div className={`filter-items-container ${!openFilters ? 'close' : ''}`}>
      <section className='top-section'>
        <p>Filters</p>
        <span onClick={() => setOpenFilters(!openFilters)}>&times; </span>
      </section>
      <div className='main-form-container'>
        <section className='fields-section'>
          <div className='input-field'>
            <label for='product-name'>Product Name</label>
            <input type='text' name='product-name' id='product-name' placeholder='Product Name'></input>
          </div>
          <div className='input-field'>
            <label for='category'>Category</label>
            <select id='category' name='category'>
              <option value='' disabled selected hidden>
                Category
              </option>
              <option value='item1'>Item 1</option>
              <option value='item2'>Item 2</option>
              <option value='item3'>Item 3</option>
              <option value='item4'>Item 4</option>
            </select>
          </div>
          <div className='input-field'>
            <label for='event-name'>Event Name</label>
            <input type='text' name='event-name' id='event-name' placeholder='Event Name'></input>
          </div>
          <div className='input-field'>
            <label for='match-name'>Match Name</label>
            <input type='text' name='match-name' id='match-name' placeholder='Match Name'></input>
          </div>
          <div className='input-field'>
            <label for='team'>Team</label>
            <select id='team' name='team'>
              <option value='' disabled selected hidden>
                Team
              </option>
              <option value='item1'>Item 1</option>
              <option value='item2'>Item 2</option>
              <option value='item3'>Item 3</option>
              <option value='item4'>Item 4</option>
            </select>
          </div>
        </section>
        <div className='buttons'>
          <button className='action-btn'>Apply</button>
          <p className='reset-btn'>Reset</p>
        </div>
      </div>
    </div>
  );
};

export default FilterItemsContainer;
