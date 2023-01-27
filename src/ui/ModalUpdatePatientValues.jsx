import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientWeight, updateCurrentPatientWeight } from '../store/currentPatient';
import './components';

export const ModalUpdatePatientValues = ({ type = '', age = 'NaN años NaN meses NaN días', uid, patientID, weight }) => {

    const [openModal, setOpenModal] = useState(false);

    const { weightForm, stature, onInputChange } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(weightForm !== undefined){
            updateWeight()
        }
        

        if(stature !== undefined){
            console.log('Estatura: ', stature, 'Edad: ', age )
            console.log('entre a stature')
        }

    }


    const updateWeight = () => {
        const newWeight = [ ...weight, { A: weightForm, B: age, C: format( new Date(), "dd/MM/yyyy") } ]
        dispatch( updateCurrentPatientWeight( newWeight ) )
        dispatch( startUpdatingCurrentPatientWeight( uid, patientID, newWeight ) )
    }
    

    const calculateAge = () => {
        let d1 = fromUnixTime( unixBirthday ).getDate();
        let m1 = fromUnixTime( unixBirthday ).getMonth();
        let y1 = fromUnixTime( unixBirthday ).getFullYear();
        let date = new Date();
        let d2 = date.getDate();
        let m2 = date.getMonth();
        let y2 = date.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2) {
            d2 = d2 + month[m2];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;
        if( y === 0 ){
            
            return m + " meses " + d + " días";
        }else{
            return y + " años " + m + " meses " + d + " días";
        }
    }

    return (
        <>
            <div className="weight-update-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
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
                className="modal-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Actualizar { type }
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    {
                                        (type === 'peso')
                                        ?   'Nuevo peso'
                                        :   'Nueva estatura'
                                    }
                                </label>
                                    {
                                        (type === 'peso')
                                        ?   <input className="input-text-style" type="text" name="weightForm" onChange={ onInputChange }/>
                                        :   <input className="input-text-style" type="text" name="stature" onChange={ onInputChange }/>
                                    }
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Edad del paciente</label>
                                <input className="input-text-style" type="text" name="age" defaultValue={ age } onChange={ onInputChange }/>
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
