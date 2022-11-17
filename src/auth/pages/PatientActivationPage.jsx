import { useLocation } from "react-router-dom";
import queryString from "query-string";
import '../components/PatientActivationStyles.css';

export const PatientActivationPage = () => {

    const location = useLocation();

    const { email = '', password = '' } = queryString.parse( location.search );

    console.log( email, password);

    return (
    <>
        <div className="activation-background">
            <div className="activation-container">
                <h1>Activando su cuenta...</h1>
            </div>
        </div>
    </>
  )
}
