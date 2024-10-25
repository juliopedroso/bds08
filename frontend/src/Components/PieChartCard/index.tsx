import ReactApexChart from 'react-apexcharts';
import './styles.css';
import { buildPieChartConfig } from './helpers';

type props = {
  labels?: string[];
  series?: number[];
};

function PieChartCard({ labels = [], series = [] }: props) {
  return (
    <div className="pie-chart-card">
      <ReactApexChart options={buildPieChartConfig(labels, "")}
        type="donut"
        width="280"
        height="280"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
