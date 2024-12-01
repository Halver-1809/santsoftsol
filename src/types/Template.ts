export type FormTheme = 'dark' | 'light';

export type FormRules = {
  required?: { value?: boolean; message?: string };
  pattern?: { value?: RegExp | string; message?: string };
  minLength?: { value?: number; message?: string };
  maxLength?: { value?: number; message?: string };
  min?: { value?: string; message?: string };
  max?: { value?: string; message?: string };
};

export type TemplateData = {
  cod_template: number;
  title: string;
  updated_at?: string;
  created_at?: string;
  name_module: string;
  finalized?: boolean;
};

export type PageMeta = {
  page: number;
  total: number;
  totalPages: number;
};

export type HeaderSheet = {
  cod_sheert: number;
  title: string;
  description: string;
  finalized: boolean;
  cod_template: number;
  updated_at: string;
};
export interface Option {
  cod_option: number;
  cod_list: number;
  cod_id: number;
  value: string;
}
export interface Config {
  cod_config: number;
  cod_id: number;
  name: string;
  cod_section?: string;
  value: string | null;
  cod_sheert: number;
  options?: Option[];
}
export interface Role {
  cod_permission: number;
  cod_roles: number;
  cod_id: number;
  cod_sheert: number;
  rol: string;
  name: string;
  value: string;
}
export interface DataField {
  cod_id: number;
  cod_sheert: number;
  name: string;
  value: string;
  cod_section?: string;
  title?: string /* titulo de la sección */;
  detailField?: DataField[]; // Arreglo de DataField para agrupar los relacionados
}
export interface Field {
  cod_id: number;
  data: DataField[];
  config: Config[];
  roles: Role[];
}

export interface Section {
  cod_section: number;
  fields: Field[];
  title: string;
}
export interface RootObject {
  fields?: Field[];
  sections?: Section[];
  sheertCompanyData: HeaderSheet[];
}

type PermissionType = 'input' | 'checkbox';

export interface UniquePermission {
  name: string;
  type: PermissionType;
}

export interface FieldsUpdate {
  name: string;
  value: string;
  cod_config: number;
}

export interface RolesUpdate {
  roleName: string;
  cod_permission: number;
  value: string;
}

export interface DocumentPreconfiguration {
  title: string;
  description: string;
  document: string;
}

export interface DocumentRevision {
  title: string;
  description: string;
  file_urls: string[];
}
