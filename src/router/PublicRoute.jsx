import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  
    const { isLogged } = useSelector( state => state.auth);
    // const isLogged = false;
    console.log('2. Estoy en PublicRoute, y de aquí entro a -> AuthRoutes')

    return ( !isLogged )
    ? children
    : <Navigate to="../nutritionist" />
}
