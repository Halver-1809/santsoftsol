import { Dispatch, SetStateAction } from "react";

export type User = {
  id: string;
  email: string;
  cod_company: any;
  cod_ruser: string;
  role_name: string;
  name: string;
  name_company: string;
  img_user?: string;
};

export type AuthContext = {
  user: User | null;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
  login: Login;
  logout: () => void;
  refreshToken: () => Promise<void>;
  imageTimestamp: any;
  token: string | null;
  role: string
};

export interface Roles {
  cod_ruser: number;
  role_name: string;
}

export interface Users {
  name: string;
  cod_user: string;
  email: string;
  role_name: string;
}

export type Login = (data: { email: string; password: string }) => void;