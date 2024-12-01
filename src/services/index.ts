import Axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

const axiosInstance = Axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("Authorization");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const fixEncoding = (text: string): string => {
  const replacements: { [key: string]: string } = {
    'Ã¡': 'á',
    'Ã©': 'é',
    'Ã­': 'í',
    'Ã³': 'ó',
    '�': 'ó',
    'Ãº': 'ú',
    'Ã±': 'ñ',
    'Ã': 'Á',
    'Ã‰': 'É',
    'Ã': 'Í',
    'Ã“': 'Ó',
    'Ãš': 'Ú',
    'Ã‘': 'Ñ',
    'Â¡': '¡',
    'Â¿': '¿',
    'Â': '',
    '¢': 'ó',
    ',': 'é',
    '£': 'ú',
    '¡': 'í'
  };

  return text.replace(/Ã¡|Ã©|Ã­|Ã³|Ãº|Ã±|Ã|Ã‰|Ã|Ã“|Ãš|Ã‘|Â¡|Â¿|Â|�|¢|,|£|¡/g, match => replacements[match] || match);
};

const fixEncodingForObject = (data: any): any => {
  if (typeof data === 'string') {
    return fixEncoding(data);
  } else if (Array.isArray(data)) {
    return data.map(fixEncodingForObject);
  } else if (typeof data === 'object' && data !== null) {
    const fixedObject: { [key: string]: any } = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        fixedObject[key] = fixEncodingForObject(data[key]);
      }
    }
    return fixedObject;
  }
  return data;
};
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if ((response?.status === 200 || response?.status === 201) && response.data?.message) {
      toast(response.data.message, {
        type: "success",
      });
    }

    if (response?.data) {
      response.data = fixEncodingForObject(response.data);
      // Si decides manejar otros casos
    }

    return response;
  },
  (error) => {
    if (error?.response?.data?.message) {
      toast(error.response.data.message, {
        type: "error",
      });
    }

    if (error?.response?.status === 401) {
      document.dispatchEvent(new CustomEvent("unauthorized"));
    }

    return Promise.reject(error?.response?.data);
  }
);


export default axiosInstance;
