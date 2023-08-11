import { useSelector } from 'react-redux';
import { ModalAddPatientExam } from './ModalAddPatientExam';
import './components';
import ExamIcon from '../../assets/imgs/patient/exam_icon.svg'
import { ModalPatientExams } from './ModalPatientExams';

export const CardPatientExams = ({ uid, patientID }) => {

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
        }]
    } = useSelector( state => state.currentPatient )

    return (
        <div className='patient-secondary-card h-400'>
            <div className='patient-secondary-card-title'>
                Exámenes
            </div>
            <div className='patient-secondary-card-content pb-1 pt-1'>
                <div className='perimetro-cintura-avatar-container'>
                    <img src={ ExamIcon } className='perimetro-cintura-avatar'/>
                </div>
                <div className='perimetro-cefalico-value-container flex-column pl-1'>
                    <p className='perimetro-cefalico-value flex-column'>
                        <b>Glicemia en ayunas&nbsp;</b>
                        {
                            ( examsHistory[examsHistory.length - 1].glicemia_ayunas !== '' )
                            ?   examsHistory[examsHistory.length - 1].glicemia_ayunas + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value flex-column'>
                        <b>Colesterol total&nbsp;</b>
                        {
                            ( examsHistory[examsHistory.length - 1].colesterol_total !== '' )
                            ?   examsHistory[examsHistory.length - 1].colesterol_total + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value flex-column'>
                        <b>Colesterol HDL&nbsp;</b>
                        {
                            ( examsHistory[examsHistory.length - 1].colesterol_hdl !== '' )
                            ?   examsHistory[examsHistory.length - 1].colesterol_hdl + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value flex-column'>
                        <b>Trigliceridos&nbsp;</b>
                        {
                            ( examsHistory[examsHistory.length - 1].trigliceridos !== '' )
                            ?   examsHistory[examsHistory.length - 1].trigliceridos + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value flex-column'>
                        <b>Colesterol LDL&nbsp;</b>
                        {
                            ( examsHistory[examsHistory.length - 1].colesterol_ldl !== '' )
                            ?   examsHistory[examsHistory.length - 1].colesterol_ldl + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                </div>
                    
                {/* <div className="alt-button-info" data-tooltip="Este resultado puede presentar una variabilidad de hasta +-8,5 cm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM13 17V11H11V17H13Z" fill="#6D22D0"/>
                    </svg>
                </div> */}
                
            </div>
            <div className='flex-row'>
                        <ModalAddPatientExam uid={ uid } patientID={ patientID }/>
                        <ModalPatientExams uid={ uid } patientID={ patientID }/>

                    </div>
            {/* <div className='patient-secondary-card-footer'>
                <p>Este resultado puede presentar una variabilidad de hasta +-8,5 cm</p>
            </div> */}

        </div>
    )
}
