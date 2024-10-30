import { useState } from 'react';
import './App.css';
import Filter from './Components/Filter';
import Header from './Components/Header';
import SalesByGender from './Components/SalesByGender';
import { FilterData } from './types';


function App() {

  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
    console.log(filterData);
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByGender />
      </div>
    </>
  );
}

export default App;
