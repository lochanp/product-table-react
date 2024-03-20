import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='pagination'>
      <p
        className='arrow'
        style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        onClick={() => paginate(currentPage === 1 || currentPage === '1' ? currentPage : currentPage - 1)}
      >
        &lt;
      </p>
      {pageNumbers.map(number => (
        <li key={number} className='page-item'>
          <a
            onClick={() => paginate(number)}
            href='!#'
            className={currentPage === number ? 'page-link-active' : 'page-link'}
          >
            {number}
          </a>
        </li>
      ))}
      <p
        className='arrow'
        style={{ cursor: pageNumbers.length == currentPage ? 'not-allowed' : 'pointer' }}
        aria-disabled={pageNumbers.length === currentPage ? true : false}
        onClick={() => paginate(pageNumbers.length === currentPage ? currentPage : currentPage + 1)}
      >
        &gt;
      </p>
    </ul>
  );
};

export default Pagination;
