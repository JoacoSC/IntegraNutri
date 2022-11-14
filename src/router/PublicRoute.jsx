import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  
    const isLogged = false;

    return ( !isLogged )
    ? children
    : <Navigate to="../nutritionist" />
}
