import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { startCreatingPatientFromEmail } from "../../store/auth";
import '../components/PatientActivationStyles.css';

export const PatientActivationPage = () => {

    const location = useLocation();

    const dispatch = useDispatch();

    const { email = '', password = '', uid = '', patientUID = '' } = queryString.parse( location.search );

    // console.log( email, password, uid, patientUID );

    dispatch( startCreatingPatientFromEmail( email, password, uid, patientUID ) );

    return (
    <>
        <div className="activation-background">
            <div className="activation-container">
                <h1 className="text-4xl custom-font-bold leading-tight my-4">Activando su cuenta...</h1>
            </div>
        </div>
    </>
  )
}
