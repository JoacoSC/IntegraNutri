import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeletePatient } from '../store/patients';
import { DeleteButton } from '../common';

// Third-party library imports
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import {
  PregnantIMCReferenceData,
} from "../data";

import PregnantIMC from '../../assets/imgs/patient/pregnantIMC.png'
import { useForm } from '../hooks';
import { ModalWrapper } from './components';

export const ModalPregnantIMCHistory = ({ imcPregnant }) => {

    const [openModal, setOpenModal] = useState(false);

    const form = useRef();
    
    // console.log(imcPregnant)

    const [options, setOptions] = useState({
        maintainAspectRatio : false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Gráfico de IMC según semana gestacional',
            },
        },
    });

    const [referenceData, setReferenceData] = useState({
        labels: PregnantIMCReferenceData.map( (data) => data.week ),
        datasets: [
            {
                label: "Bajo peso",
                data: PregnantIMCReferenceData.map( (data) => data.UnderWeight ),
                borderColor: 'rgba(0, 108, 239, 0.2)',
                backgroundColor: 'rgba(0, 108, 239, 0.2)',
                pointRadius: 2,
            },
            {
                label: "Normal",
                data: PregnantIMCReferenceData.map( (data) => data.Normal ),
                borderColor: 'rgba(49, 255, 45, 0.2)',
                backgroundColor: 'rgba(49, 255, 45, 0.2)',
                pointRadius: 2,
            },
            {
                label: "Sobrepeso",
                data: PregnantIMCReferenceData.map( (data) => data.OverWeight ),
                borderColor: 'rgba(255, 129, 45, 0.2)',
                backgroundColor: 'rgba(255, 129, 45, 0.2)',
                pointRadius: 2,
            },
            {
                label: "Obesidad",
                data: PregnantIMCReferenceData.map( (data) => data.Obese ),
                borderColor: 'rgba(255, 60, 45, 0.2)',
                backgroundColor: 'rgba(255, 60, 45, 0.2)',
                pointRadius: 2,
            },
            {
                label: "Paciente",
                data: PregnantIMCReferenceData.map( (data) => data.Patient ),
                borderColor: '#452372',
                backgroundColor: '#452372',
                pointRadius: 3,
            },
        ]
    });

    const closeModal = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
    }

    useEffect(() => {
    if(imcPregnant){
        if( imcPregnant.length > 0 ){
    
            // Primero, crea un nuevo conjunto de datos para el paciente
            let patientData = imcPregnant.map((data) => {
                return {
                    week: `Semana ${data.E}`,
                    Patient: parseFloat(data.A),
                };
            });
        
            // Luego, combina los datos del paciente con PregnantIMCReferenceData
            let combinedData = PregnantIMCReferenceData.map((data, index) => {
                // Encuentra los datos del paciente para la semana correspondiente
                let patientWeekData = patientData.find((d) => d.week === data.week);
        
                // Si se encontraron datos del paciente, úsalos. Si no, usa el valor original.
                return {
                    ...data,
                    Patient: patientWeekData ? patientWeekData.Patient : data.Patient,
                };
            });
        
            // Finalmente, usa combinedData en lugar de PregnantIMCReferenceData
            setReferenceData({
                labels: combinedData.map((data) => data.week),
                datasets: [
                    {
                    label: "Bajo peso",
                    data: PregnantIMCReferenceData.map( (data) => data.UnderWeight ),
                    borderColor: 'rgba(0, 108, 239, 0.2)',
                    backgroundColor: 'rgba(0, 108, 239, 0.2)',
                    pointRadius: 2,
                },
                {
                    label: "Normal",
                    data: PregnantIMCReferenceData.map( (data) => data.Normal ),
                    borderColor: 'rgba(49, 255, 45, 0.2)',
                    backgroundColor: 'rgba(49, 255, 45, 0.2)',
                    pointRadius: 2,
                },
                {
                    label: "Sobrepeso",
                    data: PregnantIMCReferenceData.map( (data) => data.OverWeight ),
                    borderColor: 'rgba(255, 129, 45, 0.2)',
                    backgroundColor: 'rgba(255, 129, 45, 0.2)',
                    pointRadius: 2,
                },
                {
                    label: "Obesidad",
                    data: PregnantIMCReferenceData.map( (data) => data.Obese ),
                    borderColor: 'rgba(255, 60, 45, 0.2)',
                    backgroundColor: 'rgba(255, 60, 45, 0.2)',
                    pointRadius: 2,
                },
                    {
                    label: "Paciente",
                    data: combinedData.map((data) => data.Patient),
                    borderColor: '#452372',
                    backgroundColor: '#452372',
                    pointRadius: 3,
                    },
                ]
            });
        }
    }

    }, [imcPregnant])
    

    return (
        <>
            
            <button className='btn-sm' onClick={ () => setOpenModal(true) }>
                Ver historial de IMC para gestantes
            </button>

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="IMC según semana gestacional"
            >

                <form ref={form}>
                    <div className="modal-auto-height-container-form">
                        
                        <div className="canvas">
                            <Line data={ referenceData } options={ options } />
                        </div>

                        <img src={ PregnantIMC } className='modal-chart'/>

                    </div>
                </form>
            </ModalWrapper>
        </>
    )
}
