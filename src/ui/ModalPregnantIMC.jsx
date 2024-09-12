import { useRef, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { startDeletePatient } from '../store/patients';
import { DeleteButton } from '../common';

import PregnantIMC from '../../assets/imgs/patient/pregnantIMC.png'
import { useForm } from '../hooks';
import { format } from 'date-fns';
import { startUpdatingCurrentPatientIMCPregnant } from '../store/currentPatient';
import { ModalWrapper } from './components';

export const ModalPregnantIMC = ({ patientObject, imcPregnant, ageText }) => {

    const [openModal, setOpenModal] = useState(false);

    const { uid, patientID } = patientObject;

    const form = useRef();

    const dispatch = useDispatch();

    const { 
        imc,
        rating,
        week,
        onInputChange
    } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();

        let newImcPregnant = [];

        if(imcPregnant){
            newImcPregnant = [ ...imcPregnant, { A: imc, B: ageText, C: format( new Date(), "dd/MM/yyyy"), D: rating, E: week } ]

        }else{
            newImcPregnant = [ { A: imc, B: ageText, C: format( new Date(), "dd/MM/yyyy"), D: rating, E: week } ]
            
        }

        dispatch( startUpdatingCurrentPatientIMCPregnant( uid, patientID, newImcPregnant ) )

        setOpenModal(false);

    }

    const closeModal = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
    }

    return (
        <>
            
            <button className='btn-sm' onClick={ () => setOpenModal(true) }>
                Ingresar IMC para gestantes
            </button>

            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="IMC según semana gestacional"
                footerButtons={[
                    { text: "Guardar", onClick: onSubmit, className: "btn-modal-action" }
                ]}
            >

                <form ref={form}>
                    <div className="modal-auto-height-container-form">
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Medición
                                </label>
                                    <input className="input-text-style h-2" type="number" step=".01" name="imc" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Registro
                                </label>
                                    <select className="input-text-style h-2" name="rating" onChange={ onInputChange }>
                                        <option>Seleccione una opción</option>
                                        <option value='Bajo peso'>Bajo peso</option>
                                        <option value='Normal'>Normal</option>
                                        <option value='Sobrepeso'>Sobrepeso</option>
                                        <option value='Obesidad'>Obesidad</option>
                                    </select>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Semana de gestación
                                </label>
                                <select className="input-text-style h-2" name="week" onChange={ onInputChange }>
                                    <option>Seleccione una opción</option>
                                    {
                                        Array.from({length: 37}, (_, i) => i + 6).map((semana) => 
                                            <option key={semana} value={semana}>Semana {semana}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>

                        <img src={ PregnantIMC } className='modal-chart'/>

                    </div>
                </form>
            </ModalWrapper>
        </>
    )
}
