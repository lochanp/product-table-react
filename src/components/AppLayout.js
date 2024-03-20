import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ActionItems from './ActionItems';
import DataTable from './DataTable';
import FilterItemsContainer from './FilterItemsContainer';

const AppLayout = () => {
  const [openFilters, setOpenFilters] = useState(false);
  return (
    <body className='page-container'>
      <section className='page-layout'>
        <Sidebar />
        <section className='main-content-container'>
          <Header />
          <div className='filter-layout'>
            <main className='main-content'>
              <ActionItems setOpenFilters={setOpenFilters} openFilters={openFilters} />
              <DataTable />
            </main>
            <FilterItemsContainer setOpenFilters={setOpenFilters} openFilters={openFilters} />
          </div>
        </section>
      </section>
    </body>
  );
};

export default AppLayout;
