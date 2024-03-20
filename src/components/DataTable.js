import React, { useState } from 'react';
import { data } from '../data/fakeData'; // Assuming data is in a separate file
import Pagination from './Pagination';

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allIndexes = Array.from({ length: data.length }, (_, i) => i);
      setSelectedItems(allIndexes);
    } else {
      setSelectedItems([]);
    }
  };

  const toggleItem = index => {
    const selectedIndex = selectedItems.indexOf(index);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== index));
    }
  };
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='main-table-container'>
      <table className='data-table'>
        <thead className='table-head'>
          <tr>
            <th>
              <input type='checkbox' checked={selectAll} onChange={toggleSelectAll} />
            </th>
            <th>Sr No.</th>
            <th>Heading 1</th>
            <th>Heading 2</th>
            <th>Heading 3</th>
            <th>Heading 4</th>
            <th>Heading 5</th>
            <th>Heading 6</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>
                <input type='checkbox' checked={selectedItems.includes(index)} onChange={() => toggleItem(index)} />
              </td>
              <td>{index + 1}.</td>
              <td>{item.heading1}</td>
              <td>{item.heading2}</td>
              <td>{item.heading3}</td>
              <td>{item.heading4}</td>
              <td>{item.heading5}</td>
              <td>{item.heading6}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={data.length} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default DataTable;
