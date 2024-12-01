import axiosInstance from './index';

import { Template } from './config';
import { TemplateData, RootObject } from '../types/Template';

const createTemplate = (name_module: string, cod_template: number) => {
  return axiosInstance<{
    message: string;
  }>({
    method: 'post',
    url: `${Template.createTemplate}/${name_module}`,
    data: { cod_template },
  }).then((response) => {
    return response;
  });
};


const getInfoSheetById = (
  cod_project: number,
  cod_sheet: number,
  cod_module: number,
) => {
  return axiosInstance<RootObject>({
    method: 'get',
    url: `${Template.getFieldsTemplate}/${cod_project}/${cod_sheet}/${cod_module}`,
  }).then((response) => {
    return response.data;
  });
};


const getAllTemplateUser = (params?: {}) => {
  return axiosInstance<TemplateData[]>({
    method: 'get',
    url: Template.getAllTemplateUser,
    params,
  }).then((response) => {
    return response;
  });
};

const getAllTemplates = (params?: {}) => {
  return axiosInstance<TemplateData[]>({
    method: 'get',
    url: Template.getAllTemplates,
    params,
  }).then((response) => {
    return response;
  });
};

const finishTemplateByName = (
  data: { cod_project: number; finalized: boolean },
  cod_module: number,
) => {
  return axiosInstance({
    method: 'put',
    url: `${Template.finalizedTemplate}/${cod_module}`,
    data,
  }).then((response) => {
    return response;
  });
};

const deleteTemplateCustomer = (codTemplate: number, nameModule: string) => {
  return axiosInstance<RootObject>({
    method: 'delete',
    url: `${Template.deleteTemplateUser}/${codTemplate}/${nameModule}`,
  }).then((response) => {
    return response.data;
  });
};

export {
  createTemplate,
  getAllTemplateUser,
  getInfoSheetById,
  getAllTemplates,
  finishTemplateByName,
  deleteTemplateCustomer,
};
