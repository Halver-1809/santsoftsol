import axiosInstance from './index';

import { Project } from './config';
import { ProjectCompany } from '@/types/Project';

const deleteProject = (codProject: number) => {
  return axiosInstance({
    method: 'delete',
    url: `${Project.deleteProject}/${codProject}`,
  }).then((response) => {
    return response.data;
  });
};

const getProjectForRoleWithCompany = (name_company?: string) => {
  const url = name_company
    ? `${Project.getProjectForRole}?name_company=${name_company}`
    : `${Project.getProjectForRole}`;

  return axiosInstance<ProjectCompany[]>({
    method: 'get',
    url: url,
  }).then((response) => {
    return response;
  });
};


const createProject = (data: FormData) => {
  return axiosInstance<{
    message: string;
  }>({
    method: 'post',
    url: `${Project.createProject}`,
    data,
    headers: {
        'Content-Type': 'multipart/form-data',
      },
  }).then((response) => {
    return response;
  });
};

export { deleteProject, getProjectForRoleWithCompany, createProject };
