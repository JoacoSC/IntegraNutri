import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientTallaDiana } from '../store/currentPatient';
import './components';

import TallaDianaIcon from '../../assets/imgs/patient/talla_diana_icon.svg'

export const ModalTallaDiana = ({ patientObject }) => {

    const { uid, patientID, gender } = patientObject;

    const [openModal, setOpenModal] = useState(false);

    const { 
        fatherStature,
        motherStature,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        const fatherStatureValue = parseInt(fatherStature, 10);
        const motherStatureValue = parseInt(motherStature, 10);
        
        if( gender === 'Masculino' ){
            const tallaDiana = ( fatherStatureValue + ( motherStatureValue + 13 ) ) /2
            dispatch( startUpdatingCurrentPatientTallaDiana( uid, patientID, tallaDiana ) )

        }else if( gender === 'Femenino' ){
            const tallaDiana = ( ( fatherStatureValue - 13 ) + motherStatureValue ) /2
            dispatch( startUpdatingCurrentPatientTallaDiana( uid, patientID, tallaDiana ) )
            
        }else{
            console.log('No c')
        }

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
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-talla-diana-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Calcular Talla Diana
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="weight-stature-container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Estatura del padre
                                </label>
                                    <input className="input-text-style" type="number" name="fatherStature" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Estatura de la madre
                                </label>
                                    <input className="input-text-style" type="number" name="motherStature" onChange={ onInputChange }/>
                            </div>            
                        </div>
                        
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Calcular
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
