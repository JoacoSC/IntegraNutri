import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientCorrectedAge, updateCurrentPatientCorrectedAge } from '../store/currentPatient';
import './components';

export const ModalUpdateCorrectedAge = ({
        age = {
            d: 0,
            m: 0,
            y: 0,
          },
        uid,
        patientID
    }) => {

    const [openModal, setOpenModal] = useState(false);

    const [correctedAge, setcorrectedAge] = useState({
        d: 0,
        m: 0,
        y: 0,
      })

    const { 
        yearsForm = age.y,
        monthsForm = age.m,
        daysForm = age.d,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

    }

    const updatePatientValues = () => {

        console.log('updatePatientValues')

        setOpenModal(false)

        const correctedAge = {
            d: daysForm,
            m: monthsForm,
            y: yearsForm,
        }

        console.log('correctedAge: ', correctedAge)
        
        dispatch( updateCurrentPatientCorrectedAge( correctedAge ) );
        dispatch( startUpdatingCurrentPatientCorrectedAge( uid, patientID, correctedAge ) );

    }
    
    const turnCorrectedAgeToZero = () => {

        console.log('turnCorrectedAgeToZero')

        setOpenModal(false)

        const correctedAge = {
            d: 0,
            m: 0,
            y: 0,
        }

        console.log('correctedAge: ', correctedAge)
        
        dispatch( updateCurrentPatientCorrectedAge( correctedAge ) );
        dispatch( startUpdatingCurrentPatientCorrectedAge( uid, patientID, correctedAge ) );
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
                Modificar Edad Corregida&nbsp;
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
                    Actualizar edad corregida
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="weight-stature-container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Años</label>
                                <input className="input-text-style" type="text" name="yearsForm" defaultValue={ age.y } onChange={ onInputChange }/>
                            </div>                
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Meses</label>
                                <input className="input-text-style" type="text" name="monthsForm" defaultValue={ age.m } onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Días</label>
                                <input className="input-text-style" type="text" name="daysForm" defaultValue={ age.d } onChange={ onInputChange }/>
                            </div>
                        </div>
                        
                        <div className="form-btn-group">
                            <button className="btn-modal-primary" type="submit" onClick={ () => updatePatientValues() }>
                                Actualizar
                            </button>
                            <button className="btn-modal-alt" type="submit" onClick={ () => turnCorrectedAgeToZero() }>
                                Eliminar edad corregida
                            </button>
                        </div>
                        
                        
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
