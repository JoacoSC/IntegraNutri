import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

  const { isLogged } = useSelector( state => state.auth);
    // const isLogged = false;
  // console.log('4. Yo soy PrivateRoute, aquí entro cuando hago bien el login, y sino te saco a AuthRoutes')

  return ( isLogged )
  ? children
  : <Navigate to="/auth/login" />
}
