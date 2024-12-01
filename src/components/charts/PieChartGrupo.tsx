import React from 'react';
import ReactApexChart from 'react-apexcharts';

type ChartProps = {
    chartData: number[];
    chartOptions: any;
    onGroupSelect: (details: string[]) => void;
};

type ChartState = {
    chartData: number[];
    chartOptions: any;
    selectedGroupDetails: string[];
    selectedGroupIndex: number;
};

class PieChartGroup extends React.Component<ChartProps, ChartState> {
    constructor(props: ChartProps) {
        super(props);
        this.state = {
            chartData: [],
            chartOptions: {},
            selectedGroupDetails: [],
            selectedGroupIndex: 0, // Inicializamos con el primer grupo
        };
    }

    componentDidMount() {
        const groupLabels = ['Activo', 'Jubilado/Pensionado', 'Aprendiz', 'Temporal', 'Contratistas'];
        const details: { [key: string]: string[] } = {
            'Activo': [
                '01 - Sindicato Empresa',
                '02 - Trab. Individual',
                '03 - Planta',
                '04 - Empleado',
                '05 - Supernumerario Planta',
                '06 - Supernumerario Empl',
                '17 - Administración',
                '18 - Producción',
                '19 - Trabajador Sindicalizado',
                '20 - Trabajador Sindicalizado',
                '21 - Trab. Sindi. Packing',
                '31 - Proyectos',
                '32 - Ventas',
                '33 - Mantenimiento',
                '34 - Trabajador Indirecto',
                '35 - Convencionado',
                '37 - Sindicato industria'
            ],
            'Jubilado/Pensionado': [
                '07 - Jubilado Empresa',
                '08 - Jubilado Compartido',
                '09 - Jubilado va Comparti',
                '10 - Jubilado Temporal'
            ],
            'Aprendiz': [
                '11 - Aprendiz Lectivo',
                '12 - Aprendiz Productivo',
                '17 - Administración',
                '18 - Producción',
                '32 - Ventas',
                '33 - Mantenimiento',
                '34 - Trabajador Indirecto',
                '35 - Convencionado',
                '36 - Jefatura'
            ],
            'Temporal': [
                '15 - Temporal Administrativo',
                '16 - Temporal Planta'
            ],
            'Contratistas': [
                '14 - Contratistas'
            ]
        };

        // Encontrar el grupo con más elementos
        const maxGroup = Object.keys(details).reduce((prev, current) => 
            details[prev].length > details[current].length ? prev : current
        );

        const selectedGroupDetails = details[maxGroup] || [];

        // Establecer el estado inicial
        this.setState({
            chartData: this.props.chartData,
            chartOptions: this.props.chartOptions,
            selectedGroupDetails: selectedGroupDetails,
            selectedGroupIndex: groupLabels.indexOf(maxGroup),
        });

        // Notificar al componente padre sobre el grupo seleccionado
        this.props.onGroupSelect(selectedGroupDetails);
    }

    handleDataPointSelectionDivision = (event: any, chartContext: any, config: any) => {
        const selectedIndex = config.dataPointIndex;
        const groupLabels = ['Activo', 'Jubilado/Pensionado', 'Aprendiz', 'Temporal', 'Contratistas'];
        const details: { [key: string]: string[] } = {
            'Activo': [
                '01 - Sindicato Empresa',
                '02 - Trab. Individual',
                '03 - Planta',
                '04 - Empleado',
                '05 - Supernumerario Planta',
                '06 - Supernumerario Empl',
                '17 - Administración',
                '18 - Producción',
                '19 - Trabajador Sindicalizado',
                '20 - Trabajador Sindicalizado',
                '21 - Trab. Sindi. Packing',
                '31 - Proyectos',
                '32 - Ventas',
                '33 - Mantenimiento',
                '34 - Trabajador Indirecto',
                '35 - Convencionado',
                '37 - Sindicato industria'
            ],
            'Jubilado/Pensionado': [
                '07 - Jubilado Empresa',
                '08 - Jubilado Compartido',
                '09 - Jubilado va Comparti',
                '10 - Jubilado Temporal'
            ],
            'Aprendiz': [
                '11 - Aprendiz Lectivo',
                '12 - Aprendiz Productivo',
                '17 - Administración',
                '18 - Producción',
                '32 - Ventas',
                '33 - Mantenimiento',
                '34 - Trabajador Indirecto',
                '35 - Convencionado',
                '36 - Jefatura'
            ],
            'Temporal': [
                '15 - Temporal Administrativo',
                '16 - Temporal Planta'
            ],
            'Contratistas': [
                '14 - Contratistas'
            ]
        };

        const selectedGroup = groupLabels[selectedIndex];
        const groupDetails = details[selectedGroup] || [];
        this.props.onGroupSelect(groupDetails);
    };

    render() {
        return (
            <ReactApexChart
                options={{
                    ...this.state.chartOptions,
                    chart: {
                        ...this.state.chartOptions.chart,
                        events: {
                            dataPointSelection: this.handleDataPointSelectionDivision,
                        },
                    },
                    // Establecer el índice del grupo con más elementos como seleccionado por defecto
                    selected: [this.state.selectedGroupIndex],
                }}
                series={this.state.chartData}
                type="pie"
                width="100%"
                height="100%"
            />
        );
    }
}

export default PieChartGroup;
