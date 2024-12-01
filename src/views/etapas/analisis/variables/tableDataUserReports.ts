type RowObj = {
  analysisName: string;
  analysisDate: string;
  type: string;
  status: string;
  actions: string;
};

const tableDataMigrationAnalysis: RowObj[] = [
  {
    analysisName: "Evaluación inicial del sistema",
    analysisDate: "Oct 10, 2024",
    type: "DEV",
    status: "Completado",
    actions: "Detalles"
  },
  {
    analysisName: "Evaluación - Análisis sistema de calidad HCM",
    analysisDate: "Nov 7, 2024",
    type: "QAS",
    status: "En progreso",
    actions: "Detalles"
  },

];

export default tableDataMigrationAnalysis;
