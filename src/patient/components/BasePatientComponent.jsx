// React imports
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Third-party library imports
import queryString from "query-string";

// Local module imports
import { useForm, useHandleChartsSwitch, useRatingIndicator, useRatingIndicatorAdult } from "../../hooks";
import { startLogout } from "../../store/auth";
import { startLoadingCurrentPatient, startLoadingPatientInfo, startUpdatingCurrentPatientAnamnesis, startUpdatingCurrentPatientDiagnosis, startUpdatingCurrentPatientIndications, startUpdatingCurrentPatientPhysical_exam, updateCurrentPatientAnamnesis, updateCurrentPatientDiagnosis, updateCurrentPatientIndications, updateCurrentPatientPhysical_exam, updateCurrentPatientAge, clearCurrentPatient, updateCurrentPatientCorrectedAge, updateCurrentPatientBiologicalAge } from "../../store/currentPatient";
import { disableConfirmBtn, setErrorCode, switchError, switchPatientPasswordChangedSuccesfully } from "../../store/loginHelper";
import { calculateAgeForCalcsObject, calculateAgeObject } from "../../utils";

// Component imports
import { CardExamsRequest, CardMealTimePortionDistribution, CardPatientExams } from "../../ui";
import { AdultElderlyPregnantComponent, Anamnesis, Diagnosis, FrequencyTable, Indications, InfantJuvenileComponent, PatientCard, PatientGraphs, PatientNavbar, PhysicalExam, ReminderTable } from "../components";
import { startLoadingMyNutritionistData } from "../../store/myNutritionist";
import CardIMC from "../../ui/CardIMC";
import { AlertBox } from "../../ui/AlertBox";
import { CardNutritionalIndications } from "../../ui/CardNutritionalIndications";

// Asset imports
/**/

export const BasePatientComponent = () => {

    // React imports
    const { uid, displayName, photoURL, isNutritionistStatus } = useSelector(state => state.auth);
    const { patientName, email, phone, nextConsultation, anamnesis, physical_exam, diagnosis, indications, weight, stature, imc, imcPregnant, unixBirthday, unixCorrectedBirthday, unixBiologicalBirthday, biologicalSex, genderIdentity = '', age, correctedAgeIsSet = null, correctedAge = { d: 0, m: 0, y: 0, }, biologicalAgeIsSet, biologicalAge = { d: 0, m: 0, y: 0, }, tallaDiana, perimetroCefalico, perimetroCintura, presionArterial, portionDistribution, patientExams, anthropometry: anthropometryHistory, energyRequirements = '', adultEnergyRequirements = '', estimations = ''
      } = useSelector((state) => state.currentPatient);
    const { membership, isActive } = useSelector(state => state.subscription);
    const dispatch = useDispatch();
    const location = useLocation();
    const { patientID = '' } = queryString.parse(location.search);

    const anthropometry = anthropometryHistory[anthropometryHistory.length - 1];
  
  // Local state variables
  const [lastWeight, setLastWeight] = useState(0);
  const [lastStature, setLastStature] = useState(0);
  const [ageText, setAgeText] = useState('');
  const [ageForCalcs, setAgeForCalcs] = useState({ d: 0, m: 0, y: 0 });
  const [unixBirthdayForCalcs, setUnixBirthdayForCalcs] = useState(0);
  const [patientIsAdult, setPatientIsAdult] = useState(false);
  const [message, setMessage] = useState('');
  
  // Local constants
  const weightLength = weight?.length;
  const statureLength = stature?.length;

  const isInDevelopment = true;
  
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
      'email' : email,
      'phone' : phone,
      'patientName' : patientName,
      'type': 'peso',
      'age' : age,
      'ageText' : ageText,
      'weight' : weight,
      'lastWeight' : lastWeight,
      'stature' : stature,
      'lastStature' : lastStature,
      'imc' : imc,
      'imcPregnant' : imcPregnant,
      'unixBirthday' : unixBirthday,
      'biologicalSex' : biologicalSex,
      'ageForCalcs' : ageForCalcs,
      }

  // Local hooks
  let nutritionalRating = {};
  if(ageForCalcs.y < 19 || (ageForCalcs.y === 19 && ageForCalcs.m <= 1)){
    nutritionalRating = useRatingIndicator(
      lastWeight,
      lastStature,
      ageForCalcs,
      unixBirthdayForCalcs,
      biologicalSex
    );
  }else{
    nutritionalRating = useRatingIndicatorAdult(
      lastWeight,
      lastStature,
      ageForCalcs,
      unixBirthdayForCalcs,
      biologicalSex
    );
  }
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
  
  const shouldRenderInfantJuvenileComponent = (
    (ageForCalcs.y < 19 || (ageForCalcs.y === 19 && ageForCalcs.m <= 1)) &&
    (isActive && (membership.id === 0 || membership.id === 1))
  );
  
  const shouldRenderAdultElderlyPregnantComponent = (
    (ageForCalcs.y >= 19 && (ageForCalcs.y > 19 || ageForCalcs.m > 1)) && 
    (membership.id === 0 || membership.id === 1)
  );

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
    if (ageForCalcs) {
      if (ageForCalcs.y < 19 || (ageForCalcs.y === 19 && ageForCalcs.m <= 1)) {
        setPatientIsAdult(false);
        setMessage(`🚨 ¡Importante! 🚨\n\nEstimado nutricionista,\n\nQueremos informarte que hemos detectado que el paciente en cuestión tiene menos de 19 años y 1 mes de edad. Por lo tanto, no se clasifica como un adulto según los criterios de nuestra suscripción.\n\nLa suscripción activa actualmente en su cuenta está diseñada específicamente para atender a pacientes adultos, de tercera edad y gestantes. Esto significa que los cálculos y mediciones proporcionados por nuestra plataforma en esta suscripción pueden no ser precisos para pacientes menores de 19 años.\n\nRecomendamos encarecidamente que el nutricionista tenga en cuenta esta limitación al interpretar los resultados y al proporcionar recomendaciones. Siempre es importante adaptar el enfoque nutricional a la etapa de vida y las necesidades específicas del paciente.\n\nSi tienes alguna pregunta adicional o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte.\n\n¡Gracias por confiar en nuestro servicio!\n\nAtentamente, El equipo de IntegraNutri`);
      }else{
        setPatientIsAdult(true);
      }
    }
  }, [ageForCalcs]);
  
  
  
  useEffect(() => {
    dispatch(switchPatientPasswordChangedSuccesfully(false));
    dispatch(disableConfirmBtn(false));
    dispatch(switchError(false));
    dispatch(setErrorCode(null));
  }, []);

  const commonProps = {
    uid,
    isNutritionistStatus,
    patientID,
    displayName,
    portionDistribution,
    patientExams,
    patientIsAdult,
    patientObject,
    nutritionalRating,
    ageForCalcs,
    imcPregnant,
    ageText,
    biologicalSex,
    biologicalAgeIsSet,
    presionArterial,
    tallaDiana,
    perimetroCefalico,
    perimetroCintura,
    anthropometry,
    anthropometryHistory,
    energyRequirements,
    adultEnergyRequirements,
    estimations
    };

    return (
        <>
            <div className="logout-section">
                <button className="btn-logout" type="button" onClick={onLogout}>
                    Cerrar sesión
                </button>
            </div>
            {
                (!patientIsAdult && !isActive && (membership.id === 0 || membership.id === 1 || membership.id === 2)) 
                ? message && <AlertBox message={message} alertClassname={'alert'} /> 
                : null
            }

            <div className="patient-wrapper">

                <PatientNavbar 
                  patientObject={ patientObject }
                  commonProps={ commonProps }
                />

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
                </div>
                    {shouldRenderInfantJuvenileComponent && (
                        <InfantJuvenileComponent commonProps={commonProps} />
                    )}
                    
                    {shouldRenderAdultElderlyPregnantComponent && (
                        <AdultElderlyPregnantComponent commonProps={commonProps} />
                    )}
                    
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
                        patientObject = {patientObject}
                        setLastWeight = {setLastWeight}
                        setLastStature = {setLastStature}
                        nutritionalRating = {nutritionalRating}
                    />
                    
                </div>
            </div>
            {
            (isNutritionistStatus)
            ? <>
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
            : null
            }

        </>
    )
}
