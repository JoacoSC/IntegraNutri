import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { add, format, fromUnixTime } from "date-fns";
import queryString from "query-string";

import { useForm } from "../../hooks";
import { startLogout } from "../../store/auth";
import {
    startLoadingCurrentPatient,
    startLoadingPatientInfo,
    startUpdatingCurrentPatientAnamnesis,
    startUpdatingCurrentPatientDiagnosis,
    startUpdatingCurrentPatientIndications,
    startUpdatingCurrentPatientPhysical_exam,
    startUpdatingCurrentPatientStature,
    startUpdatingCurrentPatientWeight,
    updateCurrentPatientAnamnesis,
    updateCurrentPatientDiagnosis,
    updateCurrentPatientIndications,
    updateCurrentPatientPhysical_exam,
    updateCurrentPatientStature,
    updateCurrentPatientWeight,
} from "../../store/currentPatient";

import { AppLayout } from "../../layout/AppLayout";
import { useEffect } from "react";

export const PatientPage = () => {

    
    const { uid, displayName, photoURL, isNutritionistStatus } = useSelector( state => state.auth )
    
    const {
      patientName,
      nextConsultation,
      anamnesis,
      physical_exam,
      diagnosis,
      indications,
      weight,
      stature,
    } = useSelector((state) => state.currentPatient);
    
    const defaultPatient = {
        weight: 0,
        stature: 0,
        anamnesis: anamnesis,
        physical_exam: physical_exam,
        diagnosis: diagnosis,
        indications: indications,
        graphs: "Escribe aquí :)",
    }

    const { consultationHours, consultationMinutes } = useSelector( state => state.journal )

    const dispatch = useDispatch();

    const location = useLocation();

    const {
      formWeight,
      formStature,
      formAnamnesis,
      formPhysical_exam,
      formDiagnosis,
      formIndications,
      graphs,
      onInputChange,
    } = useForm(defaultPatient);

    const { patientID = '' } = queryString.parse( location.search );

    useEffect(() => {
        
        if( patientID === '' ){

            dispatch( startLoadingPatientInfo( displayName, photoURL ) )
    
        }else{
    
            dispatch( startLoadingCurrentPatient( uid, patientID ) )
        }
    
    }, [patientID])
    
    const onLogout = () => {
            
        dispatch( startLogout() );
    
    }

    const onAnamnesisSubmit = ( event ) => {
        event.preventDefault();

        dispatch( updateCurrentPatientAnamnesis({ formAnamnesis }) )
        dispatch( startUpdatingCurrentPatientAnamnesis( uid, patientID, formAnamnesis ) )
    }
    const onPhysical_examSubmit = ( event ) => {
        event.preventDefault();

        dispatch( updateCurrentPatientPhysical_exam({ formPhysical_exam }) )
        dispatch( startUpdatingCurrentPatientPhysical_exam( uid, patientID, formPhysical_exam ) )
    }
    const onDiagnosisSubmit = ( event ) => {
        event.preventDefault();

        dispatch( updateCurrentPatientDiagnosis({ formDiagnosis }) )
        dispatch( startUpdatingCurrentPatientDiagnosis( uid, patientID, formDiagnosis ) )
    }
    const onIndicationsSubmit = ( event ) => {
        event.preventDefault();

        dispatch( updateCurrentPatientIndications({ formIndications }) )
        dispatch( startUpdatingCurrentPatientIndications( uid, patientID, formIndications ) )
    }
    const onWeightSubmit = ( event ) => {
        event.preventDefault();

        dispatch( updateCurrentPatientWeight({ formWeight }) )
        dispatch( startUpdatingCurrentPatientWeight( uid, patientID, formWeight ) )
    }
    const onStatureSubmit = ( event ) => {
        event.preventDefault();

        dispatch( updateCurrentPatientStature({ formStature }) )
        dispatch( startUpdatingCurrentPatientStature( uid, patientID, formStature ) )
    }

    return (
      <>
        <AppLayout>
            <div className="main-content">
                <div className="logout">
                <button className="btn-logout" type="button" onClick={onLogout}>
                    Cerrar sesión
                </button>
                </div>
                <div className="patient-card">
                <div className="patient-data">
                    <div className="patient-avatar">
                    {patientName.substring(0, 2)}
                    </div>
                    <div className="patient-name">{patientName}</div>
                    <div className="patient-consultation-time"></div>
                    <div className="patient-consultation-time">
                    {nextConsultation !== null
                        ? format(fromUnixTime(nextConsultation), "hh:mm") +
                        " - " +
                        format(
                            add(fromUnixTime(nextConsultation), {
                            hours: consultationHours,
                            minutes: consultationMinutes,
                            }),
                            "hh:mm"
                        )
                        : "hh:mm"}
                    </div>
                    <div className="patient-consultation-time">
                    {nextConsultation !== null
                        ? format(fromUnixTime(nextConsultation), "dd/MMM/yyyy")
                        : "hh:mm"}
                    </div>
                </div>

                <div className="patient-weight">
                    <div className="weight-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="43"
                        fill="none"
                        viewBox="0 0 43 43"
                    >
                        <circle cx="21.5" cy="21.5" r="21.5" fill="#F5EEFF" />
                        <path
                        stroke="#452372"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M33.591 26.106a12 12 0 1 0-23.182 0M22 11v2.667m-8.485.847L15.4 16.4m15.085-1.886L28.6 16.4m4.991 9.705-2.576-.69m-20.606.69 2.576-.69"
                        />
                        <path
                        stroke="#927CB0"
                        strokeWidth="2"
                        d="M24.717 22.618c.485 1.04-.204 2.388-1.54 3.01-1.334.622-2.81.284-3.294-.756-.553-1.186-2.143-7.956-2.964-11.532-.12-.522.547-.833.87-.405 2.212 2.927 6.375 8.497 6.928 9.683Z"
                        />
                    </svg>
                    </div>
                    <div className="weight-title">Peso</div>
                    <form className="form-style" onSubmit={onWeightSubmit}>
                    <div className="weight">
                        <input
                        className="weight-value"
                        name="formWeight"
                        type="text"
                        defaultValue={weight}
                        onChange={onInputChange}
                        readOnly={ !isNutritionistStatus }
                        />
                        <div className="weight-kg">Kg</div>
                    </div>
                    </form>
                </div>
                <div className="patient-stature">
                    <div className="stature-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="43"
                        fill="none"
                        viewBox="0 0 43 43"
                    >
                        <circle cx="21.5" cy="21.5" r="21.5" fill="#FFF3F1" />
                        <path
                        fill="#FF8976"
                        d="m18 12-.707-.707.707-.707.707.707L18 12Zm1 15a1 1 0 1 1-2 0h2Zm-6.707-10.707 5-5 1.414 1.414-5 5-1.414-1.414Zm6.414-5 5 5-1.414 1.414-5-5 1.414-1.414ZM19 12v15h-2V12h2Zm7 20-.707.707.707.707.707-.707L26 32Zm1-15a1 1 0 1 0-2 0h2Zm-6.707 10.707 5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM27 32V17h-2v15h2Z"
                        />
                    </svg>
                    </div>
                    <div className="stature-title">Talla</div>
                    <form className="form-style" onSubmit={onStatureSubmit}>
                    <div className="stature">
                        <input
                        className="stature-value"
                        name="formStature"
                        type="text"
                        defaultValue={stature}
                        onChange={onInputChange}
                        readOnly={ !isNutritionistStatus }
                        />
                        <div className="stature-cm">Cm</div>
                    </div>
                    </form>
                </div>
                <button type="submit" hidden></button>
                </div>
                <div className="accordion-container">
                <div className="left-container">
                    <form onSubmit={onAnamnesisSubmit}>
                    <div className="accordion">
                        <input
                        className="accordion-input"
                        type="checkbox"
                        defaultChecked
                        name="patient_accordion"
                        id="anamnesis"
                        />
                        <label className="accordion-label" htmlFor="anamnesis">
                        Anamnesis
                        </label>
                        <div className="accordion-content">
                        <textarea
                            className="input-text-patient-page"
                            name="formAnamnesis"
                            spellCheck={false}
                            defaultValue={defaultPatient.anamnesis}
                            onChange={onInputChange}
                            readOnly={ !isNutritionistStatus }
                        ></textarea>
                        {/* <input className="input-text-patient-page" type="text" value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione at praesentium sed rerum voluptatibus quo aut aspernatur temporibus corrupti eos consequuntur quidem nam quisquam esse dolor, illo tenetur libero repudiandae nulla, recusandae autem. Molestias quam saepe officia dolor nulla eos, eaque aliquam quaerat adipisci recusandae inventore sit maxime possimus asperiores quas omnis debitis non accusamus. Laborum, aspernatur numquam obcaecati tempora quo, assumenda minima, nostrum dolorum eveniet quasi optio quae blanditiis ducimus. Voluptatibus aut aperiam quis quasi ipsum perferendis sapiente nulla itaque" name="name"/> */}
                        {/* <input type="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore quis repellendus veniam unde sit, laboriosam, perspiciatis ullam voluptate, dolor tempore. Quisquam, numquam? Vero nesciunt dignissimos possimus laborum accusantium veniam maxime, delectus assumenda aspernatur, illo unde modi optio quia non magni consequatur reprehenderit eveniet ad! Eveniet consectetur minima aperiam corporis maxime perspiciatis, velit similique fugit quasi, est quaerat consequatur qui laborum deleniti eos necessitatibus quas reiciendis quibusdam nam aut excepturi repellat aliquam obcaecati voluptatum? Veniam, provident consequuntur itaque recusandae ad dicta facere quam culpa molestiae vel corporis nesciunt, exercitationem corrupti repellendus cum rerum perferendis eaque distinctio tenetur quibusdam! Eius, voluptates.</input> */}
                        {   ( isNutritionistStatus )
                            ?   <button
                                className="btn-save-changes"
                                type="submit"
                                ></button>
                            : null
                        }
                        </div>
                    </div>
                    </form>
                    <form onSubmit={onPhysical_examSubmit}>
                    <div className="accordion">
                        <input
                        className="accordion-input"
                        type="checkbox"
                        defaultChecked
                        name="patient_accordion"
                        id="examen_fisico"
                        />
                        <label className="accordion-label" htmlFor="examen_fisico">
                        Examen físico
                        </label>
                        <div className="accordion-content">
                        <textarea
                            className="input-text-patient-page"
                            name="formPhysical_exam"
                            spellCheck={false}
                            defaultValue={defaultPatient.physical_exam}
                            onChange={onInputChange}
                            readOnly={ !isNutritionistStatus }
                        ></textarea>
                        {   ( isNutritionistStatus )
                            ?   <button
                                className="btn-save-changes"
                                type="submit"
                                ></button>
                            : null
                        }
                        </div>
                    </div>
                    </form>
                    <form onSubmit={onDiagnosisSubmit}>
                    <div className="accordion">
                        <input
                        className="accordion-input"
                        type="checkbox"
                        defaultChecked
                        name="patient_accordion"
                        id="diagnostico"
                        />
                        <label className="accordion-label" htmlFor="diagnostico">
                        Diagnóstico
                        </label>
                        <div className="accordion-content">
                        <textarea
                            className="input-text-patient-page"
                            name="formDiagnosis"
                            spellCheck={false}
                            defaultValue={defaultPatient.diagnosis}
                            onChange={onInputChange}
                            readOnly={ !isNutritionistStatus }
                        ></textarea>
                        {   ( isNutritionistStatus )
                            ?   <button
                                className="btn-save-changes"
                                type="submit"
                                ></button>
                            : null
                        }
                        </div>
                    </div>
                    </form>
                </div>
                <div className="right-container">
                    <form onSubmit={onIndicationsSubmit}>
                    <div className="accordion">
                        <input
                        className="accordion-input"
                        type="checkbox"
                        defaultChecked
                        name="patient_accordion"
                        id="indicaciones"
                        />
                        <label className="accordion-label" htmlFor="indicaciones">
                        Indicaciones
                        </label>
                        <div className="accordion-content">
                        <textarea
                            className="input-text-patient-page"
                            name="formIndications"
                            spellCheck={false}
                            defaultValue={defaultPatient.indications}
                            onChange={onInputChange}
                            readOnly={ !isNutritionistStatus }
                        ></textarea>
                        {   ( isNutritionistStatus )
                            ?   <button
                                className="btn-save-changes"
                                type="submit"
                                ></button>
                            : null
                        }
                        </div>
                    </div>
                    </form>
                    <div className="accordion">
                    <input
                        className="accordion-input"
                        type="checkbox"
                        defaultChecked
                        name="patient_accordion"
                        id="graficos"
                    />
                    <label className="accordion-label" htmlFor="graficos">
                        Gráficos
                    </label>
                    <div className="accordion-content">
                        <textarea
                        className="input-text-patient-page"
                        name="graphs"
                        spellCheck={false}
                        defaultValue={defaultPatient.graphs}
                        onChange={onInputChange}
                        ></textarea>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </AppLayout>
      </>
    );
}
