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

        setOpenModal(false)

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

            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-auto-height-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    IMC según semana gestacional
                </h1>

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

                        <div className="form-btn-group">
                            <button className="btn-modal-alt" onClick={ closeModal }>
                                Cerrar
                            </button>
                            <button className="btn-modal-submit" type="submit" onClick={ onSubmit }>
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
