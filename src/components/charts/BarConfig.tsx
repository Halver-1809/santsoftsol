import React from 'react';
import Chart from 'react-apexcharts';

type ChartProps = {
  chartData: any[];      // Datos del gráfico
  chartOptions: any;     // Opciones de configuración del gráfico
};

class ColumnChartNomina extends React.Component<ChartProps> {
  constructor(props: ChartProps) {
    super(props);
  }

  render() {
    return (
      <Chart
        options={this.props.chartOptions}  // Opciones pasadas
        series={this.props.chartData}      // Datos del gráfico
        type="bar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default ColumnChartNomina;
