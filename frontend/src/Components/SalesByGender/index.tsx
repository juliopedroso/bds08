import './styles.css';

import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import { formatPrice } from '../../utils/formatters';
import PieChartCard from '../PieChartCard';
import { buildSalesByGenderChart, sumSalesByGender } from './helper';
import { PieChartConfig } from '../../types';

function SalesByGender() {

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    makeRequest.get('/sales/by-gender')
      .then(response => {
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
  }, [])

  return (
    <div className="pie-chart-container base-card">
      <div className="pie-chart-content-top">
        <h4>{formatPrice(totalSum)}</h4>
        <h6>Total de Vendas</h6>
      </div>
      <div className="pie-chart-content-bottom">
        <PieChartCard labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </div>
  );
}

export default SalesByGender;
