import './App.css';
import Filter from './Components/Filter';
import Header from './Components/Header';
import SalesByGender from './Components/SalesByGender';


function App() {

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByGender />
      </div>
    </>
  );
}

export default App;
