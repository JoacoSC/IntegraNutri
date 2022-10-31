import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const isLogged = true;

  return ( isLogged )
  ? children
  : <Navigate to="/auth/login" />
}
