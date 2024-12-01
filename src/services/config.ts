function getBackendURL() {
  if (process.env.NODE_ENV === "development") {
    return "https://server-smart-ecd79232406a.herokuapp.com";
  } else {
    return "https://server-smart-ecd79232406a.herokuapp.com";
  }
}

export const baseURL = getBackendURL();

const userUrl = `${baseURL}/api/user`;
const rolUrl = `${baseURL}/api/rol`;
const templateUrl = `${baseURL}/api/template`;
const companyUrl = `${baseURL}/api/company`;
const sheertUrl = `${baseURL}/api/sheert`;
const fieldUrl = `${baseURL}/api/field`;
const adminUrl = `${baseURL}/api/superadmin`;
const projectUrl = `${baseURL}/api/projects`;
const moduleUrl = `${baseURL}/api/module`;

const Company = {
  getAllCompanies: `${companyUrl}/query/companies`,
  createCompany: `${companyUrl}/create/register_company`,
};

const User = {
  login: `${userUrl}/login`,
  register: `${userUrl}/register`,
  roles: `${rolUrl}/user`,
  users: `${userUrl}`,
  updateRole: `${userUrl}/role`,
  updateData: `${userUrl}/data_user`,
  refreshToken: `${userUrl}/new_token`,
};

const Template = {
  createTemplate: `${templateUrl}/create/template`,
  getAllTemplates: `${templateUrl}/query/template`,
  getAllTemplateUser: `${companyUrl}/query/template_company`,
  getFieldsTemplate: `${templateUrl}/query/template_company`,
  finalizedTemplate: `${templateUrl}/update/finalized-status-template`,
  deleteTemplateUser:  `${templateUrl}/delete/template_company`,
};

const Sheet = {
  getAllSheet:  `${sheertUrl}/query/sheert`,
  updatedSheertStatus: `${sheertUrl}/update/finalized-status-sheert`,
};

const Field = {
  updateFields:  `${fieldUrl}/update/field`,
  updateList: `${fieldUrl}/update/list`,
};

const Admin = {
  getSheertCustomer: `${adminUrl}/query/sheert/SA`,
  getFieldsCustomer: `${adminUrl}/query/template_company/SA`,
  getTemplatesCustomer: `${adminUrl}/query/templates/companies/SA`,
};

const Project = {
  deleteProject: `${projectUrl}/delete/projects`,
  getProjectForRole: `${projectUrl}/query/projects`,
  createAssingUserForProject: `${projectUrl}/assing`,
  createProject: `${projectUrl}/create`,
};

const Module = {
  getModulesTheProjects: `${moduleUrl}/query/modules_project`,
  getModulesAvailables: `${moduleUrl}/query/module`,

  assignUserInTheModules: `${moduleUrl}/assignUsers`,
  assignModulesInTheProjects: `${moduleUrl}/assignModules`,
  
  listUsersAvailables: `${moduleUrl}/users`,

  createPreconfiguration: `${moduleUrl}/uploadpreconfig`,
  getDocumentsPreconfiguration: `${moduleUrl}/preconfig`,

  getFolderDocuments: `${moduleUrl}/folders_revision`,
  getDocumentsRevision: `${moduleUrl}/documents_revision`,
  createRevision: `${moduleUrl}/upload`,
};

export { User, Template, Sheet, Company, Field, Admin, Project, Module };