import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientIMC ,startUpdatingCurrentPatientStature, startUpdatingCurrentPatientWeight, updateCurrentPatientIMC, updateCurrentPatientStature, updateCurrentPatientWeight } from '../store/currentPatient';
import { ModalWrapper } from "./components";
import './components';

import UpdateValues from '../../assets/imgs/patient/refresh_icon.svg'
import { ConfirmationMessage } from '../common';

export const ModalUpdatePatientValues = ({ patientObject }) => {

    const { ageText, uid, patientID, weight, stature, imc, lastWeight, lastStature} = patientObject;

    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [calculationMessage, setCalculationMessage] = useState({ text: '', type: '' });

    const { 
        weightForm = lastWeight,
        statureForm = lastStature,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        setCalculationMessage({
            text: "",
            type: "",
        });
        
        updatePatientValues();
        

    }
    
    const updatePatientValues = () => {
    
        const weightFormValidation = parseFloat(weightForm.replace(/,/g, '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
        const statureFormValidation = parseFloat(statureForm.replace(/,/g, '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
    
        const invalidWeight = weightForm.includes('..') || weightForm.includes(',') || weightForm.split('.').length > 2;
        const invalidStature = statureForm.includes('..') || statureForm.includes(',') || statureForm.split('.').length > 2;
        
        if (isNaN(weightFormValidation) || isNaN(statureFormValidation) || invalidWeight || invalidStature) {
            // Handle invalid input
            setCalculationMessage({
                text: "Ingresó un valor inválido para peso o talla (por favor utilice un punto '.' como separador de decimales).",
                type: "error",
            });
            return;
        }
    
        const newWeight = [ ...weight, { A: weightFormValidation, B: ageText, C: format( new Date(), "dd/MM/yyyy") } ];
        const newStature = [ ...stature, { A: statureFormValidation, B: ageText, C: format( new Date(), "dd/MM/yyyy") } ];
        const IMCValue = weightFormValidation / (statureFormValidation/100)**2
    
        const newIMC = [ ...imc, { A: IMCValue, B: ageText, C: format( new Date(), "dd/MM/yyyy") } ]
    
        dispatch( updateCurrentPatientWeight( newWeight ) );
        dispatch( startUpdatingCurrentPatientWeight( uid, patientID, newWeight ) );
    
        dispatch( updateCurrentPatientStature( newStature ) );
        dispatch( startUpdatingCurrentPatientStature( uid, patientID, newStature ) );
    
        dispatch( updateCurrentPatientIMC( newIMC ) );
        dispatch( startUpdatingCurrentPatientIMC( uid, patientID, newIMC ) );

        setCalculationMessage({
            text: "Peso y talla actualizados correctamente. Puede cerrar esta ventana.",
            type: "success",
        });
    }

    const onCloseModal = () => {
        setOpenModal(false)
        setOpenDropdown(false)
        // console.log('openDropdown',openDropdown)
    }

    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={ UpdateValues }/>
                </label>
                <p>
                    Actualizar peso/talla&nbsp;
                </p>
            </button>
            {/* <div className="weight-update-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                Actualizar peso/talla&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path stroke="#fff" strokeWidth="2" d="m11.667 12.5-3.334 3.333 3.334 3.334"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M15.052 7.083A5.834 5.834 0 0 1 10 15.833"/>
                    <path stroke="#fff" strokeWidth="2" d="m8.333 7.5 3.334-3.333L8.333.833"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M4.948 12.917A5.833 5.833 0 0 1 10 4.167"/>
                </svg>

            </div> */}
            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Actualizar peso/talla"
                footerButtons={[
                    { text: "Actualizar", onClick: onSubmit, className: "btn-modal-action" }
                ]}
            >

                <form onSubmit={ onSubmit }>
                    <div className="" onSubmit={ onSubmit }>

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
                                <input className="input-text-style" type="text" name="ageText" defaultValue={ ageText } readOnly/>
                            </div>                
                        </div>
                            <ConfirmationMessage message={calculationMessage} />
                    </div>
                </form>
            </ModalWrapper>
        </>
    )
}
