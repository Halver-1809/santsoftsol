export interface Companies {
  cod_company: number;
  name: string;
  description: string;
  image_url: string;
  banner_url: string;
}

export interface CompanyCustomer extends Array<Companies> {}