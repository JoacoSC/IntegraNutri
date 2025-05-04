import { useSelector } from 'react-redux';
import { ModalAddPatientExam } from './ModalAddPatientExam';
import './components';
import ExamIcon from '../../assets/imgs/patient/exam_icon.svg'
import { ModalPatientExams } from './ModalPatientExams';

export const CardPatientExams = ({ uid, patientID }) => {

    const { isNutritionistStatus } = useSelector( state => state.auth )

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
        <div className='patient-secondary-card custom-h-400'>
            <div className='patient-secondary-card-title'>
                Exámenes
            </div>
            <div className='patient-secondary-card-content custom-pb-1 custom-pt-1'>
                <div className='perimetro-cintura-avatar-container'>
                    <img src={ ExamIcon } className='perimetro-cintura-avatar'/>
                </div>
                <div className='perimetro-cefalico-value-container custom-flex-column custom-pl-1'>
                    <p className='perimetro-cefalico-value custom-flex-column'>
                        <b>Glicemia en ayunas&nbsp;</b>
                        {
                            ( examsHistory && examsHistory.length > 0 && examsHistory[examsHistory.length - 1].glicemia_ayunas !== '' )
                            ?   examsHistory[examsHistory.length - 1].glicemia_ayunas + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value custom-flex-column'>
                        <b>Colesterol total&nbsp;</b>
                        {
                            ( examsHistory && examsHistory.length > 0 && examsHistory[examsHistory.length - 1].colesterol_total !== '' )
                            ?   examsHistory[examsHistory.length - 1].colesterol_total + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value custom-flex-column'>
                        <b>Colesterol HDL&nbsp;</b>
                        {
                            ( examsHistory && examsHistory.length > 0 && examsHistory[examsHistory.length - 1].colesterol_hdl !== '' )
                            ?   examsHistory[examsHistory.length - 1].colesterol_hdl + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value custom-flex-column'>
                        <b>Trigliceridos&nbsp;</b>
                        {
                            ( examsHistory && examsHistory.length > 0 && examsHistory[examsHistory.length - 1].trigliceridos !== '' )
                            ?   examsHistory[examsHistory.length - 1].trigliceridos + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                    <p className='perimetro-cefalico-value custom-flex-column'>
                        <b>Colesterol LDL&nbsp;</b>
                        {
                            ( examsHistory && examsHistory.length > 0 && examsHistory[examsHistory.length - 1].colesterol_ldl !== '' )
                            ?   examsHistory[examsHistory.length - 1].colesterol_ldl + ' mg/dl'
                            :   'No hay datos'
                        }
                    </p>
                </div>
            </div>
            <div className='patient-secondary-card-btn'>

                {
                    ( isNutritionistStatus )
                    ?   <ModalAddPatientExam uid={ uid } patientID={ patientID }/>
                    :   null
                }
                
                <ModalPatientExams uid={ uid } patientID={ patientID }/>

            </div>
        </div>
    )
}
