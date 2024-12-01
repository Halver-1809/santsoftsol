import axiosInstance from "./index";

import { Sheet } from "./config";
import { HeaderSheet } from "../types/Template";

const getSheertTemplateById = (cod_module: number, cod_project: number ) => {
  return axiosInstance<HeaderSheet>({
    method: "get",
    url: `${Sheet.getAllSheet}/${cod_module}/${cod_project}`,
  }).then((response) => {
    return response;
  });
};

const finishSheetByCode = (data: { cod_sheert: number, cod_project: number, finalized: boolean }, cod_module: number) => {
  return axiosInstance({
    method: "put",
    url: `${Sheet.updatedSheertStatus}/${cod_module}`,
    data
  }).then((response) => {
    return response;
  });
};


export { getSheertTemplateById, finishSheetByCode };
