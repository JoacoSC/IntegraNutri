import { addDays, format, formatDistance, formatDistanceToNowStrict, fromUnixTime, getUnixTime, set } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientCorrectedAge, startUpdatingCurrentPatientUnixCorrectedBirthday, updateCurrentPatientCorrectedAge, updateCurrentPatientUnixCorrectedBirthday } from '../store/currentPatient';
import './components';

import UpdateValues from '../../assets/imgs/patient/refresh_icon.svg'

export const ModalUpdateCorrectedAge = ({ updateCorrectedAgeObject }) => {

    const { age, unixBirthday, uid, patientID } = updateCorrectedAgeObject;

    const [openModal, setOpenModal] = useState(false);

    const [correctedAge, setCorrectedAge] = useState({
        d: 0,
        m: 0,
        y: 0,
    });

    const [birthday, setBirthday] = useState()

    const [unixCorrectedBirthday, setUnixCorrectedBirthday] = useState()

    const {
        birthdayForm,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();


    const onSubmit = ( event ) => {
        event.preventDefault();

    }

    const updatePatientValues = () => {
        
        setOpenModal(false)

        // const correctedUnixBirthday = birthdayForm;

        const correctedAge = calculateAgeObject( unixCorrectedBirthday );

        const correctedAgeIsSet = true;

        console.log('correctedAge: ', correctedAge)
        
        dispatch( updateCurrentPatientCorrectedAge({ correctedAge, correctedAgeIsSet }) );
        dispatch( startUpdatingCurrentPatientCorrectedAge( uid, patientID, correctedAge, correctedAgeIsSet ) );

        dispatch( updateCurrentPatientUnixCorrectedBirthday({ unixCorrectedBirthday, correctedAgeIsSet }) );
        dispatch( startUpdatingCurrentPatientUnixCorrectedBirthday( uid, patientID, unixCorrectedBirthday, correctedAgeIsSet )  );


    }
    
    const deleteCorrectedAge = () => {

        setOpenModal(false)

        const correctedAge = {
            y: 0,
            m: 0,
            d: 0,
        };

        const unixCorrectedBirthday = null;
        const correctedAgeIsSet = false;

        dispatch( updateCurrentPatientCorrectedAge({ correctedAge, correctedAgeIsSet }) );
        dispatch( startUpdatingCurrentPatientCorrectedAge( uid, patientID, correctedAge, correctedAgeIsSet ) );

        dispatch( updateCurrentPatientUnixCorrectedBirthday({ unixCorrectedBirthday, correctedAgeIsSet }) );
        dispatch( startUpdatingCurrentPatientUnixCorrectedBirthday( uid, patientID, unixCorrectedBirthday, correctedAgeIsSet )  );
    }

    const calculateAgeObject = ( unixCorrectedBirthday ) => {
        let d1 = fromUnixTime( unixCorrectedBirthday ).getDate();
        let m1 = fromUnixTime( unixCorrectedBirthday ).getMonth();
        let y1 = fromUnixTime( unixCorrectedBirthday ).getFullYear();
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
        
        return {y, m, d};
        
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

            if( d <= 15 ){
                if( m === 1 ){
                    return m + " mes"
                }else{
                    return m + " meses"
                }
            }else{
                m2 = m + 1;
                if( m2 === 1 ){
                    return m2 + " mes"
                }else{
                    return m2 + " meses"
                }
            }
            
        }
        if( y > 0 ){

            if( d <= 15 ){
                return y + " años " + m + " meses";
            }else{
                m2 = m + 1;
                return y + " años " + m2 + " meses";
            }
        }
    }

    const calculateCorrectedAge = ( unixCorrectedBirthday ) => {
        
        let d1 = fromUnixTime( unixCorrectedBirthday ).getDate();
        let m1 = fromUnixTime( unixCorrectedBirthday ).getMonth();
        let y1 = fromUnixTime( unixCorrectedBirthday ).getFullYear();
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

            if( d <= 15 ){
                if( m === 1 ){
                    return m + " mes"
                }else{
                    return m + " meses"
                }
            }else{
                m2 = m + 1;
                if( m2 === 1 ){
                    return m2 + " mes"
                }else{
                    return m2 + " meses"
                }
            }
            
        }
        if( y > 0 ){

            if( d <= 15 ){
                return y + " años " + m + " meses";
            }else{
                m2 = m + 1;
                return y + " años " + m2 + " meses";
            }
        }
    }

    const updateCorrectedAgeAndBirthday = () => {

        if( unixBirthday !== null ){

            setCorrectedAge( calculateAge() );
            let actualBirthday = format( fromUnixTime( unixBirthday ), 'yyyy-MM-dd' )
            setBirthday(actualBirthday);
        }
    }

    useEffect(() => {
        updateCorrectedAgeAndBirthday();
    }, [unixBirthday])

    useEffect(() => {
        
        setUnixCorrectedBirthday( getUnixTime(addDays( set( new Date( birthdayForm ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 )) )
        setCorrectedAge( calculateCorrectedAge( unixCorrectedBirthday ) );
        
    }, [onInputChange])
    
    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={ UpdateValues }/>
                </label>
                <p>
                    Crear/Modificar Edad Corregida&nbsp;
                </p>
            </button>
            {/* <div className="weight-update-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                Crear/Modificar Edad Corregida&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path stroke="#fff" strokeWidth="2" d="m11.667 12.5-3.334 3.333 3.334 3.334"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M15.052 7.083A5.834 5.834 0 0 1 10 15.833"/>
                    <path stroke="#fff" strokeWidth="2" d="m8.333 7.5 3.334-3.333L8.333.833"/>
                    <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M4.948 12.917A5.833 5.833 0 0 1 10 4.167"/>
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
                                <label className="input-label">Fecha de Nacimiento Corregida</label>
                                <input className="input-text-style" type="date" name="birthdayForm" defaultValue={ birthday } onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Edad Corregida</label>
                                <input className="input-text-style" type="text" name="correctedAgeForm" value={ correctedAge } readOnly/>
                            </div>
                        </div>
                        
                        <div className="form-btn-group">
                            <button className="btn-modal-primary" type="submit" onClick={ () => updatePatientValues() }>
                                Actualizar
                            </button>
                            <button className="btn-modal-alt" type="submit" onClick={ () => deleteCorrectedAge() }>
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
