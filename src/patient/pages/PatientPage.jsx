// React imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Third-party library imports
import queryString from "query-string";

// Local module imports
import { useForm, useRatingIndicator, useHandleChartsSwitch } from "../../hooks";
import { startLogout } from "../../store/auth";
import { startLoadingCurrentPatient, startLoadingPatientInfo, startUpdatingCurrentPatientAnamnesis, startUpdatingCurrentPatientDiagnosis, startUpdatingCurrentPatientIndications, startUpdatingCurrentPatientPhysical_exam, updateCurrentPatientAnamnesis, updateCurrentPatientDiagnosis, updateCurrentPatientIndications, updateCurrentPatientPhysical_exam, updateCurrentPatientAge, clearCurrentPatient, updateCurrentPatientCorrectedAge, updateCurrentPatientBiologicalAge } from "../../store/currentPatient";
import { disableConfirmBtn, setErrorCode, switchError, switchPatientPasswordChangedSuccesfully } from "../../store/loginHelper";
import { calculateAgeForCalcsObject, calculateAgeObject } from "../../utils";

// Component imports
import { AppLayout } from "../../layout/AppLayout";
import { LoadingScreen } from "../../ui/LoadingScreen";
import { CardEstadioTanner, CardMealTimePortionDistribution, CardPatientExams, CardPerimetroCefalico, CardPerimetroCintura, CardTallaDiana, Dropdown, Footer } from "../../ui";
import { CardPresionArterial } from "../../ui/CardPresionArterial";
import { AdultElderlyPregnantComponent, Anamnesis, Diagnosis, FreeTrialComponent, FrequencyTable, Indications, InfantJuvenileComponent, PatientCard, PatientGraphs, PatientNavbar, PhysicalExam, ReminderTable } from "../components";
import { startLoadingMyNutritionistData } from "../../store/myNutritionist";

// Asset imports
/**/

export const PatientPage = () => {
    // React imports
    const { uid, displayName, photoURL, isNutritionistStatus } = useSelector(state => state.auth);
    const { membership } = useSelector(state => state.subscription);
    const { email } = useSelector((state) => state.currentPatient);
    const dispatch = useDispatch();
    const location = useLocation();
    const { patientID = '' } = queryString.parse(location.search);
  
    // Local state variables
    const [isLoading, setIsLoading] = useState(true);
    
    // Local constants
    
    // Local hooks
    
    // useEffect hooks

    useEffect(() => {
      if (patientID === '') {
        dispatch(clearCurrentPatient());
        dispatch(startLoadingPatientInfo(displayName, photoURL));
      } else {
        dispatch(clearCurrentPatient());
        dispatch(startLoadingCurrentPatient(uid, patientID));
      }
    }, [patientID]);

    useEffect(() => {
      if (email !== null) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    }, [email]);
      
    // Return statement
    return (
      <>
        <AppLayout>
            <div className="main">
            {
                ( isLoading )
                ?   <LoadingScreen isLoading = { isLoading } />
                : <>
                    {
                        (membership.id === 0)
                        ? <InfantJuvenileComponent membership = {membership} />
                        : (membership.id === 2 || membership.id === 1 )
                        ? <AdultElderlyPregnantComponent membership = {membership} />
                        : null
                    }
                </>
            }
            </div>
            <Footer/>
        </AppLayout>
      </>
    );
}
