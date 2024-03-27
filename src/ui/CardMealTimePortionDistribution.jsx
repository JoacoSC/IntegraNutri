import { useSelector } from 'react-redux';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';

import PDFGenerator from '../common/PDFGenerator';
import './components';
import PDFWatermarkAdder from '../common/PDFWatermarkAdder';

export const CardMealTimePortionDistribution = ({ patientID }) => {

    const { patientName, rut, portionDistribution } = useSelector((state) => state.currentPatient);

    const data = {
        patientID: patientID,
        patientName: patientName,
        rut: rut.formatted,
        tableData: portionDistribution,
    }

    const handleDownload = async () => {
        await PDFWatermarkAdder({data});
        // const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        // saveAs(blob, 'Distribución de porciones.pdf');
    }

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                Distribución de porciones
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

