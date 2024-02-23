import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";
import { useForm } from "../hooks";
import { startUpdatingExamsHistory } from "../store/currentPatient";

export const ModalAddPatientExam = ({ uid, patientID }) => {

    const dispatch = useDispatch();

    const form = useRef();

    const [openModal, setOpenModal] = useState(false);
    
    const { examsHistory = [] } = useSelector( state => state.currentPatient )

    const {
        exam_date_form = '',
        exam_validity_date_form = '',
        hematocrito_form = '',
        hemoglobina_form = '',
        hemoglobina_glicosilada_form = '',
        glicemia_capilar_form = '',
        fecha_glicemia_form = '',
        glicemia_ayunas_form = '',
        glicemia_ayunas_cien_form = '',
        sobrecarga_glucosa_form = '',
        microalbuminuria_form = '',
        albuminuria_form = '',
        rac_form = '',
        clasificacion_albuminuria_form = '',
        vfg_form = '',
        vfg_variables_form = '',
        creatinina_form = '',
        urea_form = '',
        acido_urico_form = '',
        orina_completa_form = '',
        obs_orina_completa_alterada_form = '',
        colesterol_total_form = '',
        colesterol_hdl_form = '',
        trigliceridos_form = '',
        colesterol_ldl_form = '',
        sodio_form = '',
        potasio_form = '',
        cloro_form = '',
        tsh_form = '',
        pruebas_tiroideas_form = '',
        otros_form = '',
        onInputChange,
        formState
    } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();
        const exam = {
            exam_date: exam_date_form,
            exam_validity_date: exam_validity_date_form,
            hematocrito: hematocrito_form,
            hemoglobina: hemoglobina_form,
            hemoglobina_glicosilada: hemoglobina_glicosilada_form,
            glicemia_capilar: glicemia_capilar_form,
            fecha_glicemia: fecha_glicemia_form,
            glicemia_ayunas: glicemia_ayunas_form,
            glicemia_ayunas_cien: glicemia_ayunas_cien_form,
            sobrecarga_glucosa: sobrecarga_glucosa_form,
            microalbuminuria: microalbuminuria_form,
            albuminuria: albuminuria_form,
            rac: rac_form,
            clasificacion_albuminuria: clasificacion_albuminuria_form,
            vfg: vfg_form,
            vfg_variables: vfg_variables_form,
            creatinina: creatinina_form,
            urea: urea_form,
            acido_urico: acido_urico_form,
            orina_completa: orina_completa_form,
            obs_orina_completa_alterada: obs_orina_completa_alterada_form,
            colesterol_total: colesterol_total_form,
            colesterol_hdl: colesterol_hdl_form,
            trigliceridos: trigliceridos_form,
            colesterol_ldl: colesterol_ldl_form,
            sodio: sodio_form,
            potasio: potasio_form,
            cloro: cloro_form,
            tsh: tsh_form,
            pruebas_tiroideas: pruebas_tiroideas_form,
            otros: otros_form,
        }

        const newExamsHistory = [ ...examsHistory, exam ]

        console.log('patientID: ',patientID)

        dispatch(startUpdatingExamsHistory( uid, patientID, newExamsHistory ));

        setOpenModal(false)
    }

    return (
                <>
            
            <button className="btn-sm" type="button" onClick={() => setOpenModal(true)}>
                Agregar examen
            </button>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-patient-exams-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Exámenes
                </h1>

                <form ref={ form } onSubmit={ onSubmit }>
                    <div className="patient-exams-container">
                        <div className="patient-exams-wrapper">
                            <div className="patient-exams-item-container">
                                <div className="patient-exams-header">
                                    <div className="patient-exams-title-container">
                                        <p className="patient-exams-title">Agregar nuevo examen</p>
                                    </div>
                                </div>
                                
                                <div className="exams-container">
                                    <div className="exam-item">
                                        <p><b>Fecha de realización de batería de exámen</b></p>
                                        <input className="input-text-style input-date" type="date" name="exam_date_form" onChange={ onInputChange } required/>
                                        <span className="input-date-icon"></span>
                                    </div>
                                    <div className="exam-item">
                                        <p><b>Fecha de vigencia  de batería de exámen</b></p>
                                        <input className="input-text-style input-date" type="date" name="exam_validity_date_form" onChange={ onInputChange } required/>
                                        <span className="input-date-icon"></span>
                                    </div>
                                    <div className="exam-item">
                                        <p>Hematocrito</p>
                                        <input type="text" name="hematocrito_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Hemoglobina (Hb)</p>
                                        <input type="text" name="hemoglobina_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Hemoglobina Glicosilada (HbA1c)</p>
                                        <input type="text" name="hemoglobina_glicosilada_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Glicemia capilar  (mg/dl )</p>
                                        <input type="text" name="glicemia_capilar_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Fecha Glicemia en ayuno</p>
                                        <input className="input-text-style input-date" type="date" name="fecha_glicemia_form" onChange={ onInputChange }/>
                                        <span className="input-date-icon"></span>
                                    </div>
                                    <div className="exam-item">
                                        <p>Glicemia en ayunas  (mg/dl)</p>
                                        <input type="text" name="glicemia_ayunas_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Glicemia en ayunas entre 100 y 125 mg/dl</p>
                                        <input type="text" name="glicemia_ayunas_cien_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Resultado prueba de sobrecarga a la glucosa (PTGO)</p>
                                        <input type="text" name="sobrecarga_glucosa_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Microalbuminuria (mg/gr de creatininuria)</p>
                                        <input type="text" name="microalbuminuria_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Albuminuria</p>
                                        <input type="text" name="albuminuria_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>RAC Relación Albumina/Creatinina</p>
                                        <input type="text" name="rac_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Clasificación Albuminuria</p>
                                        <input type="text" name="clasificacion_albuminuria_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>VFG MDRD-4</p>
                                        <input type="text" name="vfg_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>VFG MDRD-4 variables IDMS con calibración</p>
                                        <input type="text" name="vfg_variables_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Creatinina</p>
                                        <input type="text" name="creatinina_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Urea</p>
                                        <input type="text" name="urea_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Acido Urico  (mg/dl)</p>
                                        <input type="text" name="acido_urico_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Orina Completa</p>
                                        <input type="text" name="orina_completa_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Obs. Orina Completa Alterada</p>
                                        <input type="text" name="obs_orina_completa_alterada_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Colesterol Total (mg/dL)</p>
                                        <input type="text" name="colesterol_total_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Colesterol HDL (mg/dl)</p>
                                        <input type="text" name="colesterol_hdl_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Triglicéridos (mg/dL)</p>
                                        <input type="text" name="trigliceridos_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Colesterol LDL (mg/dl)</p>
                                        <input type="text" name="colesterol_ldl_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Sodio</p>
                                        <input type="text" name="sodio_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Potasio</p>
                                        <input type="text" name="potasio_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Cloro</p>
                                        <input type="text" name="cloro_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>Hormona Tiroestimulante TSH (uIU/ml)</p>
                                        <input type="text" name="tsh_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-item">
                                        <p>T4 (Pruebas tiroideas) LIBRE</p>
                                        <input type="text" name="pruebas_tiroideas_form" onChange={ onInputChange }/>
                                    </div>
                                    <div className="exam-other-item">
                                        <p>Otros </p>
                                        
                                    </div>
                                    <div className="exam-other-item">
                                        <textarea type="text" name="otros_form" onChange={ onInputChange }/>
                                        
                                    </div>
                                    <div className="exam-submit-btn-container">
                                        <button className="btn-sm" type="submit">
                                            Guardar nuevo examen
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
