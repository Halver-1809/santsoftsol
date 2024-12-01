import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  AuthContext as AuthContextType,
  User,
  Login
} from "../types/Auth";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../services/User";
import { RefreshToken } from "../services/Validate";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState<string | null>(localStorage.getItem("Authorization"));
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const redirectUrl = searchParams.get("url");
  const navigate = useNavigate();
  const [imageTimestamp, setImageTimestamp] = useState<number>(Date.now()); // Estado para el timestamp de la imagen
  const role = user?.role_name;

  useEffect(() => {
    document.addEventListener("unauthorized", logout);
    getUser();
    return () => document.removeEventListener("unauthorized", logout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getUser = (): void => {
    if (token) {
      const decoded = jwtDecode<User>(token);
      setUser(decoded);
    }
    if (isLoading) setIsLoading(false);
  };

  const login: Login = async (data) => {
    try {
      const {
        data: { token },
      } = await loginUser(data);
      const decoded = jwtDecode<User>(token);
      setUser(decoded);
      setToken(token);
      localStorage.setItem("Authorization", token);
      navigate(redirectUrl || "/pages");
    } catch (error) {
      console.log('error');
    }
  };

  const logout = () => {
    const root = document.querySelector("html");
    if (root) root.removeAttribute("style");
    localStorage.removeItem("Authorization");
    setToken(null);
    setUser(null);
    navigate("/auth/sign-in");
  };

  const refreshToken = async () => {
    try {
      const {
        data: { token },
      } = await RefreshToken();
      const decoded = jwtDecode<User>(token);
      setUser(decoded);
      setToken(token);
      localStorage.setItem("Authorization", token);
      setImageTimestamp(Date.now());
    } catch (error) {
      logout();
    }
  };

  const context = { user, isLoading, setUser, login, logout, token, role, refreshToken, imageTimestamp };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
