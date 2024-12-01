import axiosInstance from './index';

import { Module } from './config';

const getModulesTheProjects = (codProject: number) => {
  return axiosInstance({
    method: 'get',
    url: `${Module.getModulesTheProjects}/${codProject}`,
  }).then((response) => {
    return response.data;
  });
};

const getModulesAvailables = () => {
  return axiosInstance({
    method: 'get',
    url: `${Module.getModulesAvailables}`,
  }).then((response) => {
    return response.data;
  });
};

const assignModulesProjects = (payload: {
  module: { cod_project: number; cod_module: number }[];
}) => {
  return axiosInstance({
    method: 'post',
    url: `${Module.assignModulesInTheProjects}`,
    data: payload,
  }).then((response) => {
    return response.data;
  });
};

const assignUsersToModules = (payload: {
  module: { cod_project: number; cod_module: number; cod_user: string }[];
}) => {
  return axiosInstance({
    method: 'post',
    url: `${Module.assignUserInTheModules}`,
    data: payload,
  }).then((response) => {
    return response.data;
  });
};

const listUsersAvaiblablesModule = (
  companyName: string,
  cod_project: number,
  cod_module: number,
) => {
  return axiosInstance({
    method: 'get',
    // Ajustamos la URL correctamente
    url: `${
      Module.listUsersAvailables
    }/${cod_project}/${cod_module}?companyName=${encodeURIComponent(
      companyName,
    )}`,
  }).then((response) => {
    return response.data;
  });
};

const createDocumentPreconfiguration = (data: FormData) => {
  return axiosInstance<{
    message: string;
  }>({
    method: 'post',
    url: `${Module.createPreconfiguration}`,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response) => {
    return response;
  });
};

const getDocumentsPreconfiguration = (
  cod_project: number,
  cod_module: number,
) => {
  return axiosInstance({
    method: 'get',
    url: `${Module.getDocumentsPreconfiguration}/${cod_project}/${cod_module}`,
  }).then((response) => {
    return response;
  });
};

const getFolderDocuments = () => {
  return axiosInstance({
    method: 'get',
    url: `${Module.getFolderDocuments}`,
  }).then((response) => {
    return response;
  });
};

const getDocumentsRevision = (name_company: string, id_file: number, cod_project: number, cod_module: number) => {
  return axiosInstance({
    method: 'get',
    url: `${Module.getDocumentsRevision}`,
    params: {
      name_company,
      id_file,
      cod_project,
      cod_module,
    },
  }).then((response) => {
    return response;
  });
};


const createDocumentRevision = (data: FormData) => {
  return axiosInstance<{
    message: string;
  }>({
    method: 'post',
    url: `${Module.createRevision}`,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response) => {
    return response;
  });
};

export {
  getModulesTheProjects,
  getModulesAvailables,
  assignModulesProjects,
  assignUsersToModules,
  listUsersAvaiblablesModule,
  createDocumentPreconfiguration,
  createDocumentRevision,
  getDocumentsPreconfiguration,
  getDocumentsRevision,
  getFolderDocuments
};
