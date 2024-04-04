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
import { Anamnesis, Diagnosis, FrequencyTable, Indications, PatientCard, PatientGraphs, PatientNavbar, PhysicalExam, ReminderTable } from "../components";
import { startLoadingMyNutritionistData } from "../../store/myNutritionist";

// Asset imports
/**/

export const InfantJuvenileComponent = () => {

    // React imports
    const { uid, displayName, photoURL, isNutritionistStatus } = useSelector(state => state.auth);
    const { patientName, nextConsultation, anamnesis, physical_exam, diagnosis, indications, weight, stature, imc, unixBirthday, unixCorrectedBirthday, unixBiologicalBirthday, biologicalSex, genderIdentity = '', age, correctedAgeIsSet = null, correctedAge = { d: 0, m: 0, y: 0, }, biologicalAgeIsSet, biologicalAge = { d: 0, m: 0, y: 0, }, tallaDiana, perimetroCefalico, perimetroCintura, presionArterial, portionDistribution,
        } = useSelector((state) => state.currentPatient);
    const dispatch = useDispatch();
    const location = useLocation();
    const { patientID = '' } = queryString.parse(location.search);
    
    // Local state variables
    const [lastWeight, setLastWeight] = useState(0);
    const [lastStature, setLastStature] = useState(0);
    const [ageText, setAgeText] = useState('');
    const [ageForCalcs, setAgeForCalcs] = useState({ d: 0, m: 0, y: 0 });
    const [unixBirthdayForCalcs, setUnixBirthdayForCalcs] = useState(0);
    
    // Local constants
    const weightLength = weight?.length;
    const statureLength = stature?.length;
    
    
    const defaultPatient = {
        unixAge: 0,
        weight: 0,
        stature: 0,
        anamnesis: anamnesis,
        physical_exam: physical_exam,
        diagnosis: diagnosis,
        indications: indications,
        graphs: "Escribe aquí :)",
    };
    const patientObject = {
        'uid' : uid,
        'patientID' : patientID,
        'type': 'peso',
        'age' : age,
        'ageText' : ageText,
        'weight' : weight,
        'lastWeight' : lastWeight,
        'stature' : stature,
        'lastStature' : lastStature,
        'imc' : imc,
        'unixBirthday' : unixBirthday,
        'biologicalSex' : biologicalSex,
        'ageForCalcs' : ageForCalcs,
        }  
  
    // Local hooks
    const nutritionalRating = useRatingIndicator(
      lastWeight,
      lastStature,
      ageForCalcs,
      unixBirthdayForCalcs,
      biologicalSex
    );
    const { formAnamnesis, formPhysical_exam, formDiagnosis, formIndications, onInputChange } = useForm(defaultPatient);
  
    // Local functions
    const onLogout = () => {
      dispatch(startLogout());
    };
    const onSubmit = (event, formValue, updateFunc, startUpdatingFunc) => {
      event.preventDefault();
      const value = formValue === undefined ? "" : formValue;
      dispatch(updateFunc({ value }));
      dispatch(startUpdatingFunc(uid, patientID, value));
    };
    const onAnamnesisSubmit = (event) => onSubmit(event, formAnamnesis, updateCurrentPatientAnamnesis, startUpdatingCurrentPatientAnamnesis);
    const onPhysical_examSubmit = (event) => onSubmit(event, formPhysical_exam, updateCurrentPatientPhysical_exam, startUpdatingCurrentPatientPhysical_exam);
    const onDiagnosisSubmit = (event) => onSubmit(event, formDiagnosis, updateCurrentPatientDiagnosis, startUpdatingCurrentPatientDiagnosis);
    const onIndicationsSubmit = (event) => onSubmit(event, formIndications, updateCurrentPatientIndications, startUpdatingCurrentPatientIndications);
    
    // useEffect hooks
    useEffect(() => {
      if (isNutritionistStatus === false) {
        dispatch(startLoadingMyNutritionistData(photoURL));
      }
    }, [isNutritionistStatus]);

    

    useEffect(() => {
      if (age) {
        const { utilsAgeForCalcs, utilsUnixBirthdayForCalcs, utilsAgeText } = calculateAgeForCalcsObject(
          age,
          biologicalAge,
          correctedAge,
          unixBirthday,
          unixBiologicalBirthday,
          unixCorrectedBirthday,
          biologicalAgeIsSet,
          correctedAgeIsSet
        );
        setAgeForCalcs(utilsAgeForCalcs);
        setUnixBirthdayForCalcs(utilsUnixBirthdayForCalcs);
        setAgeText(utilsAgeText);
      }
    }, [age, unixCorrectedBirthday, unixBiologicalBirthday]);

    useEffect(() => {
      const result = calculateAgeObject(unixBirthday);
      dispatch(updateCurrentPatientAge(result));
    }, [unixBirthday]);

    useEffect(() => {
      if (correctedAgeIsSet) {
        const correctedAge = calculateAgeObject(unixCorrectedBirthday);
        dispatch(updateCurrentPatientCorrectedAge(correctedAge));
      }
    }, [correctedAgeIsSet]);

    useEffect(() => {
      if (biologicalAgeIsSet) {
        const biologicalAge = calculateAgeObject(unixBiologicalBirthday);
        dispatch(updateCurrentPatientBiologicalAge(biologicalAge));
      }
    }, [biologicalAgeIsSet]);
    
    useEffect(() => {
      dispatch(switchPatientPasswordChangedSuccesfully(false));
      dispatch(disableConfirmBtn(false));
      dispatch(switchError(false));
      dispatch(setErrorCode(null));
    }, []);

  return (
    <>
      <div className="logout-section">
        <button className="btn-logout" type="button" onClick={onLogout}>
            Cerrar sesión
        </button>
        </div>
        <div className="patient-wrapper">

            <PatientNavbar patientObject={ patientObject }/>

            <div className="patient-primary-card-row">
                <PatientCard 
                    patientName={patientName}
                    biologicalSex={biologicalSex}
                    genderIdentity={genderIdentity}
                    unixBirthday={unixBirthday}
                    ageText={ageText}
                    correctedAgeIsSet={correctedAgeIsSet}
                    weightLength={weightLength}
                    weight={weight}
                    statureLength={statureLength}
                    stature={stature}
                />
                <CardPatientExams uid = { uid } patientID = { patientID }/>
            </div>
            <div className="patient-secondary-card-row">
                {
                    (portionDistribution)
                    ?   (isNutritionistStatus)
                        ?   <CardMealTimePortionDistribution patientID= { patientID } />
                        :   <CardMealTimePortionDistribution patientID= { displayName } />
                    :   null
                }    
                {
                    (biologicalAgeIsSet)
                    ?   <CardEstadioTanner nutritionalRating = { nutritionalRating }/>
                    :   null
                }    
                {
                    (!!presionArterial && ageForCalcs.y > 0)
                    ?   <CardPresionArterial/>
                    :   null
                }
                {
                    (!!tallaDiana)
                    ?   <CardTallaDiana/>
                    :   null
                }
                {
                    (!!perimetroCefalico && ageForCalcs.y < 3)
                    ?   <CardPerimetroCefalico/>
                    :   null
                }
                {
                    (!!perimetroCintura && ageForCalcs.y > 5)
                    ?   <CardPerimetroCintura/>
                    :   null
                }
                
            </div>
        </div>
        <div className="accordion-container">
            <div className="left-container">
            {
                (isNutritionistStatus)
                    ?   <Anamnesis 
                            defaultPatient = {defaultPatient}
                            onInputChange = {onInputChange}
                            isNutritionistStatus = {isNutritionistStatus}
                            onAnamnesisSubmit = {onAnamnesisSubmit}
                        />
                    :   null
            }
                <PhysicalExam 
                    defaultPatient = {defaultPatient}
                    onInputChange = {onInputChange}
                    isNutritionistStatus = {isNutritionistStatus}
                    onPhysical_examSubmit = {onPhysical_examSubmit}
                />
                <Diagnosis 
                    defaultPatient = {defaultPatient}
                    onInputChange = {onInputChange}
                    isNutritionistStatus = {isNutritionistStatus}
                    onDiagnosisSubmit = {onDiagnosisSubmit}
                />
                
            </div>
            <div className="right-container">
                <Indications 
                    defaultPatient = {defaultPatient}
                    onInputChange = {onInputChange}
                    isNutritionistStatus = {isNutritionistStatus}
                    onIndicationsSubmit = {onIndicationsSubmit}
                />
                <PatientGraphs 
                    ageForCalcs = {ageForCalcs}
                    setLastWeight = {setLastWeight}
                    setLastStature = {setLastStature}
                    nutritionalRating = {nutritionalRating}
                />
                
            </div>
        </div>
        <div className="patient-section">
            <ReminderTable
                uid={ uid }
                patientID={ patientID }
            />
        </div>
        <div className="patient-section">
            <FrequencyTable
                uid={ uid }
                patientID={ patientID }
            />
        </div>
    </>
  )
}
