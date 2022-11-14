import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const isLogged = false;

  return ( isLogged )
  ? children
  : <Navigate to="/auth/login" />
}
