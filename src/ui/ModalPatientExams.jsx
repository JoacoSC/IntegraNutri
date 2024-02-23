import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";
import { useForm } from "../hooks";
import { ShowExamsHistoryManager, ShowExamsManager } from "./";

export const ModalPatientExams = ({ uid, patientID }) => {

    const dispatch = useDispatch();

    const form = useRef();

    const [openModal, setOpenModal] = useState(false);
    const [showExamsHistory, setShowExamsHistory] = useState(true)
    
    const { 
        examsHistory = [{
            exam_date: '',
            exam_validity_date: '',
            hematocrito: '',
            hemoglobina: '',
            hemoglobina_glicosilada: '',
            glicemia_capilar: '',
            fecha_glicemia: '',
            glicemia_ayunas: '',
            glicemia_ayunas_cien: '',
            sobrecarga_glucosa: '',
            microalbuminuria: '',
            albuminuria: '',
            rac: '',
            clasificacion_albuminuria: '',
            vfg: '',
            vfg_variables: '',
            creatinina: '',
            urea: '',
            acido_urico: '',
            orina_completa: '',
            obs_orina_completa_alterada: '',
            colesterol_total: '',
            colesterol_hdl: '',
            trigliceridos: '',
            colesterol_ldl: '',
            sodio: '',
            potasio: '',
            cloro: '',
            tsh: '',
            pruebas_tiroideas: '',
            otros: '',
        }],
        actualExamIndex = examsHistory.length - 1
    } = useSelector( state => state.currentPatient )

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

    const showPreviousExams = ( event ) => {
        event.preventDefault();

        console.log('showPreviousExams')
        setShowExamsHistory( !showExamsHistory )

    }

    useEffect(() => {
        setShowExamsHistory( !showExamsHistory )
    }, [actualExamIndex])
    

    // console.log('examsHistory: ', examsHistory)
    // console.log('actualExamIndex: ', actualExamIndex)

    return (
                <>
            
            <button className="btn-sm" type="button" onClick={() => setOpenModal(true)}>
                Ver exámenes
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

                <form ref={ form }>
                    <div className="patient-exams-container">
                        <div className="patient-exams-wrapper">
                            <div className="patient-exams-item-container">
                                <div className="patient-exams-header">
                                    <div className="patient-exams-title-container">
                                        <p className="patient-exams-title">
                                            {
                                                (showExamsHistory)
                                                ?   'Exámenes ingresados'
                                                :   ( actualExamIndex === examsHistory.length - 1 )
                                                    ?   'Último examen ingresado'
                                                    :   'Fecha de examen: ' + examsHistory[ actualExamIndex ].exam_date
                                            
                                            }
                                        </p>
                                    </div>
                                    <div className="patient-exams-btn-container">
                                        {
                                            (examsHistory.length > 1)
                                                ?   <button className="btn-sm" onClick={ showPreviousExams }>
                                                    {
                                                        (showExamsHistory)
                                                        ?   'Volver'
                                                        :   'Ver todos los exámenes'
                                                    }
                                                    </button>
                                                :   null
                                        }
                                    </div>
                                </div>
                                {
                                    ( showExamsHistory )
                                        ?   <ShowExamsHistoryManager examsHistory={ examsHistory }/>
                                        :   <ShowExamsManager examsHistory={ examsHistory[actualExamIndex] }/>
                                    
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
