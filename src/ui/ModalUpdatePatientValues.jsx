import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientIMC ,startUpdatingCurrentPatientStature, startUpdatingCurrentPatientWeight, updateCurrentPatientIMC, updateCurrentPatientStature, updateCurrentPatientWeight } from '../store/currentPatient';
import './components';

export const ModalUpdatePatientValues = ({
        type = '',
        age = 'NaN años NaN meses',
        uid,
        patientID,
        weight = {
            A: null,
            B: null,
            C: null,
        },
        stature = {
            A: null,
            B: null,
            C: null,
        },
        imc = {
            A: null,
            B: null,
            C: null,
        },
        lastWeight,
        lastStature
    }) => {

    const [openModal, setOpenModal] = useState(false);

    const { 
        weightForm = lastWeight,
        statureForm = lastStature,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        updatePatientValues();

    }

    const updatePatientValues = () => {
        const newWeight = [ ...weight, { A: weightForm, B: age, C: format( new Date(), "dd/MM/yyyy") } ];
        const newStature = [ ...stature, { A: statureForm, B: age, C: format( new Date(), "dd/MM/yyyy") } ];
        const IMCValue = weightForm / (statureForm/100)**2

        const newIMC = [ ...imc, { A: IMCValue, B: age, C: format( new Date(), "dd/MM/yyyy") } ]

        dispatch( updateCurrentPatientWeight( newWeight ) );
        dispatch( startUpdatingCurrentPatientWeight( uid, patientID, newWeight ) );

        dispatch( updateCurrentPatientStature( newStature ) );
        dispatch( startUpdatingCurrentPatientStature( uid, patientID, newStature ) );

        dispatch( updateCurrentPatientIMC( newIMC ) );
        dispatch( startUpdatingCurrentPatientIMC( uid, patientID, newIMC ) );
    }

    return (
        <>
            <div className="weight-update-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                Actualizar peso/talla&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path stroke="#fff" strokeWidth="2" d="m11.667 12.5-3.334 3.333 3.334 3.334"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M15.052 7.083A5.834 5.834 0 0 1 10 15.833"/>
                    <path stroke="#fff" strokeWidth="2" d="m8.333 7.5 3.334-3.333L8.333.833"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M4.948 12.917A5.833 5.833 0 0 1 10 4.167"/>
                </svg>

            </div>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-weight-stature-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Actualizar peso/talla
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="weight-stature-container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Ingrese el peso del paciente
                                </label>
                                    <input className="input-text-style" type="text" name="weightForm" defaultValue={ lastWeight } onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Ingrese la talla del paciente
                                </label>
                                    <input className="input-text-style" type="text" name="statureForm" defaultValue={ lastStature } onChange={ onInputChange }/>
                            </div>
                                    
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Edad del paciente</label>
                                <input className="input-text-style" type="text" name="age" defaultValue={ age } readOnly/>
                            </div>                
                        </div>
                        
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Actualizar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
