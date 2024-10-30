import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import Header from './Components/Header';
import SalesByGender from './Components/SalesByGender';
import { FilterData } from './types';


function App() {
  const [filterData, setFilterData] = useState<FilterData>();


  function onFilterChange(filter: FilterData): void {
    setFilterData(filter);
    console.log(filter);
  }

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByGender filterData={filterData} />
      </div>
    </>
  );
}

export default App;
