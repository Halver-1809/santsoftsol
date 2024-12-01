import axiosInstance from "./index";

import { Field } from "./config";

const updateFields = (
  fieldsData: { cod_config: number; Value: any }[],
  rolesData: { cod_permission: number; Value: any }[],
  cod_module: number,
  cod_project: number
) => {
  const body = {
    fields: fieldsData,
    roles: rolesData,
    is_edit: true,
  };

  return axiosInstance<{ message: string }>({
    method: "put",
    url: `${Field.updateFields}/${cod_module}/${cod_project}`,
    data: body,
  }).then((response) => {
    return response;
  });
};

const updateList = (
  updatesData: { cod_option: string; Value: string }[],
  cod_module: number,
  cod_project: number
) => {
  const body = {
    updates: updatesData,
  };

  return axiosInstance<{ message: string }>({
    method: "put",
    url: `${Field.updateList}/${cod_module}/${cod_project}`,
    data: body,
  }).then((response) => {
    return response;
  });
};

export { updateFields, updateList };
