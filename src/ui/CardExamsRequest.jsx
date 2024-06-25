import { useSelector } from 'react-redux';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';

import PDFGenerator from '../common/PDFGenerator';
import './components';
import PDFWatermarkAdder from '../common/PDFWatermarkAdder';
import PDFExamDataAdder from '../common/PDFExamDataAdder';
import { format, fromUnixTime, getDate } from 'date-fns';

export const CardExamsRequest = ({ patientID }) => {

    const { patientName, rut, patientExams, unixBirthday } = useSelector((state) => state.currentPatient);
    const { rut: nutritionistRut } = useSelector((state) => state.userInfo);
    const { displayName, email, isNutritionistStatus } = useSelector((state) => state.auth);
    const { nutritionistData } = useSelector((state) => state.myNutritionist);

    let data = null;
    if(isNutritionistStatus){
        data = {
            patientData: {
                name: patientName,
                rut: rut.formatted,
                birthday: format(fromUnixTime( unixBirthday ), 'dd/MM/yyyy'),
            },
            patientID: patientID,
            tableData: patientExams.examRequest,
            examDate: {
                    d: patientExams.examRequest.examDate.d,
                    m: patientExams.examRequest.examDate.m,
                    y: patientExams.examRequest.examDate.y,
                },
            nutritionistData: {
                nutritionist: 'Nutricionista',
                name: displayName,
                contact: email,
                rut: nutritionistRut.formatted,
            }
        }
    }else{
        data = {
            patientData: {
                name: patientName,
                rut: rut.formatted,
            },
            patientID: patientID,
            tableData: patientExams.examRequest,
            nutritionistName: nutritionistData.displayName,
            nutritionistContact: '+56 9 ' +nutritionistData.phone,
        }
    }

    const handleDownload = async () => {
        await PDFExamDataAdder({data});
        // const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        // saveAs(blob, 'Distribución de porciones.pdf');
    }

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                Solicitudes de exámenes
            </div>
            <div className='patient-secondary-card-content'>
            <div className='flex-column'>
                <p className='font-size-14 font-weight-500 text-align-center pb-1'>Descarga la solicitud de exámenes del paciente aquí.</p>
                    
                <button className='btn-sm' onClick={handleDownload}>
                    Descargar archivo PDF
                </button>

            </div>

            </div>

        </div>
    )
}

