import { CompanyCustomer } from '../types/Company';
import { Company } from './config';
import axiosInstance from './index';

const getCompaniesByCustomers = () => {
  return axiosInstance<CompanyCustomer>({
    method: 'get',
    url: Company.getAllCompanies,
  }).then((response) => {
    return response;
  });
};

const createCompanyCustomer = (data: FormData) => {
  return axiosInstance<{ message: string }>({
    method: 'post',
    url: Company.createCompany,
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response) => {
    return response;
  });
};

export { getCompaniesByCustomers, createCompanyCustomer };
