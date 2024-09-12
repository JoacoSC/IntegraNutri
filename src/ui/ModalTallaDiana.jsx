import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientTallaDiana } from '../store/currentPatient';
import './components';

import TallaDianaIcon from '../../assets/imgs/patient/talla_diana_icon.svg'
import { ModalWrapper } from './components';

export const ModalTallaDiana = ({ patientObject }) => {

    const { uid, patientID, biologicalSex } = patientObject;

    const [openModal, setOpenModal] = useState(false);

    const { 
        fatherStature,
        motherStature,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        const fatherStatureValue = parseFloat(fatherStature.replace(/,/g, '.'));
        const motherStatureValue = parseFloat(motherStature.replace(/,/g, '.'));
        
        if( biologicalSex === 'Masculino' ){
            const tallaDiana = ( fatherStatureValue + ( motherStatureValue + 13 ) ) /2
            dispatch( startUpdatingCurrentPatientTallaDiana( uid, patientID, tallaDiana ) )

        }else if( biologicalSex === 'Femenino' ){
            const tallaDiana = ( ( fatherStatureValue - 13 ) + motherStatureValue ) /2
            dispatch( startUpdatingCurrentPatientTallaDiana( uid, patientID, tallaDiana ) )
            
        }else{
            // console.log('No c')
        }

        setOpenModal(false);

    }

    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={ TallaDianaIcon }/>
                </label>
                <p>
                    Calcular Talla Diana&nbsp;
                </p>
            </button>
            {/* <div className="alt-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                Calcular Talla Diana&nbsp;
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 12H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M5 17H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M19 20L22 17M19 20L16 17M19 20L19 4M19 4L16 7M19 4L22 7" stroke="white" strokeWidth="2"/>
                </svg>

            </div> */}
            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Calcular Talla Diana"
                footerButtons={[
                    { text: "Calcular", onClick: onSubmit, className: "btn-modal-action" }
                ]}
            >

                <form onSubmit={ onSubmit }>
                    <div className="" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Estatura del padre
                                </label>
                                    <input className="input-text-style" type="text" name="fatherStature" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Estatura de la madre
                                </label>
                                    <input className="input-text-style" type="text" name="motherStature" onChange={ onInputChange }/>
                            </div>            
                        </div>
                        
                    </div>
                </form>
            </ModalWrapper>
        </>
    )
}
