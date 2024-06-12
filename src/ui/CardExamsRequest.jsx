import { useSelector } from 'react-redux';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';

import PDFGenerator from '../common/PDFGenerator';
import './components';
import PDFWatermarkAdder from '../common/PDFWatermarkAdder';
import PDFExamDataAdder from '../common/PDFExamDataAdder';
import { format, fromUnixTime, getDate } from 'date-fns';

export const CardExamsRequest = ({ patientID }) => {

    const { patientName, rut, patientExams, unixBirthday } = useSelector((state) => state.currentPatient);
    const { displayName, email, isNutritionistStatus } = useSelector((state) => state.auth);
    const { nutritionistData } = useSelector((state) => state.myNutritionist);

    let data = null;
    if(isNutritionistStatus){
        data = {
            patientData: {
                name: patientName,
                rut: rut.formatted,
                birthday: format(fromUnixTime( unixBirthday ), 'dd/MM/yyyy'),
                currentDate: {
                    d: new Date().getDate().toString(),
                    m: (new Date().getMonth() + 1).toString().padStart(2, '0'),
                    y: new Date().getFullYear().toString(),
                },
            },
            patientID: patientID,
            tableData: patientExams.examRequest,
            nutritionistData: {
                nutritionist: 'Nutricionista',
                name: displayName,
                contact: email,
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
                <p className='font-size-14 font-weight-500 text-align-center pb-1'>Optimiza tu salud con una distribución equilibrada de porciones. Descarga tu guía personalizada aquí.</p>
                    
                <button className='btn-sm' onClick={handleDownload}>
                    Descargar tabla en PDF
                </button>

            </div>

            </div>

        </div>
    )
}

