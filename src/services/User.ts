import axiosInstance from './index';
import { User } from './config';
import { Roles, Users } from '@/types/Auth';

const loginUser = (data: { email: string; password: string }) => {
  return axiosInstance<{ token: string }>({
    method: 'post',
    url: User.login,
    data,
  });
};

const registerCustomer = (data: {
  name: string;
  email: string;
  password: string;
  name_company: string;
  rol: string;
}) => {
  return axiosInstance<{ message: string }>({
    method: 'post',
    url: User.register,
    data,
  }).then((response) => {
    return response;
  });
};

const getAllRolesUser = () => {
  return axiosInstance<Roles[]>({
    method: 'get',
    url: User.roles,
  }).then((response) => {
    return response;
  });
};

const getAllUsersCompany = (companyName: string) => {
  return axiosInstance<Users[]>({
    method: 'get',
    url: `${User.users}/${companyName}`,
  }).then((response) => {
    return response;
  });
};

const updateRoleUser = (data: { userId: string; role_name: string }) => {
  return axiosInstance({
    method: 'put',
    url: `${User.updateRole}`,
    data,
  }).then((response) => {
    return response;
  });
};

const updateDataUser = (data: FormData) => {
  return axiosInstance<{
    message: string;
  }>({
    method: 'put',
    url: `${User.updateData}`,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response) => {
    return response;
  });
};

export {
  loginUser,
  registerCustomer,
  getAllRolesUser,
  getAllUsersCompany,
  updateRoleUser,
  updateDataUser,
};
