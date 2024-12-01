export interface ModuleProjects {
  cod_module: number;
  name_module: string;
}
export interface AllModules {
  cod_module: number;
  name_module: string;
  title: any;
}

type Permission = 'superadmin' | 'consultor' | 'customer' | 'admin';
export interface RepositoryFolders {
  id: number;
  name: string;
  description: string;
  permissions: Permission[];
}
