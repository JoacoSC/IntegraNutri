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

export const ModalDeletePregnantIMC = ({ patientObject }) => {

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

    const onDelete = ( event ) => {
        event.preventDefault();

        console.log('Borrando historial de IMC para gestantes')

        let newImcPregnant = [];

        dispatch( startUpdatingCurrentPatientIMCPregnant( uid, patientID, newImcPregnant ) )

        setOpenModal(false)

    }

    const closeModal = ( event ) => {
        event.preventDefault();

        setOpenModal(false);
    }

    return (
        <>
            
            <button className='btn-sm-alt' onClick={ () => setOpenModal(true) }>
                Eliminar IMC para gestantes
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
                    Cambio de cálculo de IMC
                </h1>

                <form ref={form}>
                    <div className="modal-auto-height-container-form">
                        <div className="form-group">
                            <div className="form-item pr-8">
                                <label className="input-label text-align-center">
                                    Está a punto de eliminar el historial de Índice de Masa Corporal (IMC) específico para gestantes. ¿Desea continuar?
                                    <br/><br/>Al confirmar esta acción, la aplicación dejará de utilizar los parámetros de IMC diseñados específicamente para gestantes y retomará el cálculo estándar de IMC basado en los parámetros generales para adultos.
                                </label>
                            </div>
                        </div>
                        <div className="form-btn-group">
                            <button className="btn-modal-submit" type="submit" onClick={ closeModal }>
                                Cancelar
                            </button>
                            <button className="btn-modal-alt" onClick={ onDelete }>
                                Confirmar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
