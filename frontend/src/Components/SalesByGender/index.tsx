import './styles.css';

import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { formatPrice } from '../../utils/formatters';
import PieChartCard from '../PieChartCard';
import { sumSalesByGender } from './helper';


function SalesByGender() {

  const [salesByGender, setSalesByGender] = useState();
  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    makeRequest.get('/sales/by-gender?storeId=0')
      .then(response => {
        setSalesByGender(response.data);
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
      })

  }, [])


  return (
    <div className="pie-chart-container base-card">

      <div className="pie-chart-content-top">
        <h4>{formatPrice(totalSum)}</h4>
        <h6>Total de Vendas</h6>

      </div>
      <div className="pie-chart-content-bottom">
        <PieChartCard labels={['Feminino', 'Masculino', 'Outros']} series={[20, 30, 50]} />
      </div>
    </div>

  );
}

export default SalesByGender;
