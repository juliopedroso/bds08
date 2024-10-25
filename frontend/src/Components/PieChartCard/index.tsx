import ReactApexChart from 'react-apexcharts';
import './styles.css';
import { buildPieChartConfig } from './helpers';

type props = {
  labels?: string[];
  series?: number[];
};

function PieChartCard({ labels = [], series = [] }: props) {

  return (
    <div className="pie-chart-container base-card">

      <div className="pie-chart-content-top">
        <h4>R$ 746.484,00</h4>
        <h6>Total de Vendas</h6>

      </div>
      <div className="pie-chart-content-bottom">
        <ReactApexChart options={buildPieChartConfig(labels, "")}
          type="donut"
          width="280"
          height="280"
          series={series}
        />
      </div>
    </div>

  );
}

export default PieChartCard;
