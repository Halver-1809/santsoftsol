import axiosInstance from './index';

import { Admin } from './config';
import { HeaderSheet, RootObject, TemplateData } from '../types/Template';

const getTemplatesCustomer = (company: string) => {
  return axiosInstance<TemplateData[]>({
    method: 'get',
    url: `${Admin.getTemplatesCustomer}/${company}`,
  }).then((response) => {
    return response;
  });
};

const getSheertTemplateCustomer = (name_module: number, company: number) => {
  return axiosInstance<HeaderSheet>({
    method: 'get',
    url: `${Admin.getSheertCustomer}/${name_module}/${company}`,
  }).then((response) => {
    return response;
  });
};

const getFieldsTemplateCustomer = (
  name_module: string,
  cod_sheert: number,
  company: string,
) => {
  return axiosInstance<RootObject>({
    method: 'get',
    url: `${Admin.getFieldsCustomer}/${name_module}/${cod_sheert}/${company}`,
  }).then((response) => {
    return response.data;
  });
};

export { getSheertTemplateCustomer, getFieldsTemplateCustomer, getTemplatesCustomer };
