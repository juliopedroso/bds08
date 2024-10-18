import './App.css';
import Filter from './Components/Filter';
import Header from './Components/Header';
import PieChartCard from './Components/PieChartCard';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <PieChartCard />
      </div>
    </>
  );
}

export default App;
