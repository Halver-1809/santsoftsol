// ColumnChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

type ChartProps = {
  chartData: any[];
  chartOptions: any;
};

class ColumnChartNomina extends React.Component<ChartProps> {
  constructor(props: ChartProps) {
    super(props);
  }

  render() {
    return (
      <Chart
        options={this.props.chartOptions}  // Se pasan las opciones
        series={this.props.chartData}      // Se pasan los datos
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default ColumnChartNomina;

