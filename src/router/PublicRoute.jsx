import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  
    const isLogged = true;

    return ( !isLogged )
    ? children
    : <Navigate to="../nutritionist" />
}
