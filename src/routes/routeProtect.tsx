import { FullScreenLoading } from "@/components/loadings";
import useAuth from "@/hooks/useAuth";
import { ReactElement } from "react";
import { Navigate, useLocation } from "react-router";

type ProtectedRouteProps = {
  requireAuth?: boolean;
  children: ReactElement;
};

export const ProtectedRoute = ({ children, requireAuth = true }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const { pathname } = useLocation();

  if (isLoading) {
    return <FullScreenLoading />;
  } 

  if (requireAuth && !user) {
    return (
      <Navigate
        replace
        to={`/home${pathname !== '/' ? `?url=${window.encodeURIComponent(pathname)}` : ""}`}
      />
    );
  } 

  if (pathname === "/") {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default ProtectedRoute;
