	import React from 'react';
	import ReactApexChart from 'react-apexcharts';

	type ChartProps = {
		chartData: number[];
		chartOptions: any;
		onDivisionSelect: (details: string[]) => void;
	};

	// Definición de ChartState
	type ChartState = {
		chartData: number[];
		chartOptions: any;
		selectedDivisionDetails: string[];
	};

	class PieChartDivision extends React.Component<ChartProps, ChartState> {
		constructor(props: ChartProps) {
			super(props);
			this.state = {
				chartData: [],
				chartOptions: {},
				selectedDivisionDetails: [],
			};
		}

		componentDidMount() {
			this.setState({
				chartData: this.props.chartData,
				chartOptions: this.props.chartOptions,
			});
		}

		handleDataPointSelectionGroup = (event: any, chartContext: any, config: any) => {
			const selectedIndex = config.dataPointIndex;
			const divisionLabels = [
				'CO01 - Smurfit Kappa Cartón Colombia',
				'CO04 - Reforestadora Andina',
				'CO05 - Papelsa',
				'CO06 - Transbonsal',
				'CO07 - Packing',
				'CO08 - Colrecicladora',
				'CO10 - Colombates',
				'CO16 - Corrumed',
				'CO20 - Fundación SKC'
			];

			const details: { [key: string]: string[] } = {
				'CO01 - Smurfit Kappa Cartón Colombia': [
					'0001 - Yumbo',
					'0002 - Medellín',
					'0003 - Barranquilla',
					'0004 - Bogotá',
					'0005 - Manizales',
					'0006 - Popayan',
					'0007 - Armenia'
				],
				'CO04 - Reforestadora Andina': [
					'0001 - Yumbo'
				],
				'CO05 - Papelsa': [
					'0002 - Medellín',
					'0004 - Bogotá',
					'0013 - Calí',
					'0014 - Barbosa Molino',
					'0015 - Barbosa Corrugado',
					'0016 - Corporativo'
				],
				'CO06 - Transbonsal': [
					'0001 - Yumbo'
				],
				'CO07 - Packing': [
					'0012 - Tocancipá'
				],
				'CO08 - Colrecicladora': [
					'0001 - Yumbo',
					'0002 - Medellín',
					'0003 - Barranquilla',
					'0004 - Bogotá',
					'0008 - Cartagena'
				],
				'CO10 - Colombates': [
					'0001 - Yumbo',
					'0002 - Medellín',
					'0003 - Barranquilla',
					'0004 - Bogotá',
					'0005 - Manizales'
				],
				'CO16 - Corrumed': [
					'0002 - Medellín'
				],
				'CO20 - Fundación SKC': [
					'0001 - Yumbo',
					'0006 - Popayan',
					'0007 - Armenia',
					'0010 - Río Sucio',
					'0011 - Pereira'
				]
			};


			const selectedDivision = divisionLabels[selectedIndex];
			const divisionDetails = details[selectedDivision] || [];

			// Llamar a la función pasada por props para actualizar los detalles en el componente principal
			this.props.onDivisionSelect(divisionDetails);
		};

		render() {
			return (
				<ReactApexChart
					options={{
						...this.state.chartOptions,
						chart: {
							...this.state.chartOptions.chart,
							events: {
								dataPointSelection: this.handleDataPointSelectionGroup,
							},
						},
					}}
					series={this.state.chartData}
					type="pie"
					width="100%"
					height="100%"
				/>
			);
		}
	}

	export default PieChartDivision;
