import { useSelector } from 'react-redux';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';

import './components';
import { format, fromUnixTime, getDate } from 'date-fns';
import PDFNutritionalIndications from '../common/PDFNutritionalIndications';

export const CardNutritionalIndications = ({ patientID }) => {

    const { patientName, rut, patientExams, imc, weight, stature } = useSelector((state) => state.currentPatient);
    const { rut: nutritionistRut } = useSelector((state) => state.userInfo);
    const { displayName, email, isNutritionistStatus } = useSelector((state) => state.auth);
    const { nutritionistData } = useSelector((state) => state.myNutritionist);

    let data = null;
    if(isNutritionistStatus){
        data = {
            patientData: {
                name: patientName,
                rut: rut.formatted,
                imc: parseFloat(imc[imc.length - 1]?.A).toFixed(2),
                weight: parseFloat(weight[weight.length - 1]?.A).toFixed(2) + ' kg',
                stature: parseFloat(stature[stature.length - 1]?.A).toFixed(2) + ' cm',

            },
            patientID: patientID,
            tableData: patientExams.nutritionalIndications,
            indicationsDate: {
                    d: patientExams.nutritionalIndications.indicationsDate.d,
                    m: patientExams.nutritionalIndications.indicationsDate.m,
                    y: patientExams.nutritionalIndications.indicationsDate.y,
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
            tableData: patientExams.nutritionalIndications,
            nutritionistName: nutritionistData.displayName,
            nutritionistContact: '+56 9 ' +nutritionistData.phone,
        }
    }

    const handleDownload = async () => {
        await PDFNutritionalIndications({data});
        // const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        // saveAs(blob, 'Distribución de porciones.pdf');
    }

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                Indicaciones nutricionales
            </div>
            <div className='patient-secondary-card-content'>
            <div className='flex-column'>
                <p className='font-size-14 font-weight-500 text-align-center pb-1'>Descarga las indicaciones nutricionales del paciente aquí.</p>
                    
                <button className='btn-sm' onClick={handleDownload}>
                    Descargar archivo PDF
                </button>

            </div>

            </div>

        </div>
    )
}

