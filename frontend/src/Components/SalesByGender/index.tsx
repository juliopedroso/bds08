import './styles.css';

import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { formatPrice } from '../../utils/formatters';
import PieChartCard from '../PieChartCard';
import { buildSalesByGenderChart, sumSalesByGender } from './helper';
import { FilterData, PieChartConfig, SalesByGender } from '../../types';

type Props = {
  filterData?: FilterData;
}
function SalesByGenderComponent({ filterData }: Props) {

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    makeRequest.get<SalesByGender[]>('/sales/by-gender', { params })
      .then(response => {
        const newTotalSum = sumSalesByGender(response.data);
        setTotalSum(newTotalSum);
        const newSalesByGender = buildSalesByGenderChart(response.data);
        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by store');
      });
  }, [params])

  return (
    <div className="sales-by-gender-container base-card">
      <div className="sales-by-gender-content-top">
        <h4>{formatPrice(totalSum)}</h4>
        <h6>Total de vendas</h6>
      </div>
      <div className="sales-by-gender-content-bottom">
        <PieChartCard labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </div>
  );
}

export default SalesByGenderComponent;
