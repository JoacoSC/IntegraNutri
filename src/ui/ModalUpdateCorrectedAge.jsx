import { addDays, format, formatDistance, formatDistanceToNowStrict, fromUnixTime, getUnixTime, set } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientCorrectedAge, startUpdatingCurrentPatientUnixCorrectedBirthday, updateCurrentPatientCorrectedAge, updateCurrentPatientUnixCorrectedBirthday } from '../store/currentPatient';
import './components';

import UpdateValues from '../../assets/imgs/patient/refresh_icon.svg'
import CorrectedAgeIcon from '../../assets/imgs/patient/corrected_age_icon.svg'
import { ModalWrapper } from './components';

export const ModalUpdateCorrectedAge = ({ patientObject }) => {

    const { age, unixBirthday, uid, patientID } = patientObject;

    const [openModal, setOpenModal] = useState(false);

    const [correctedAge, setCorrectedAge] = useState({
        d: 0,
        m: 0,
        y: 0,
    });

    const [birthday, setBirthday] = useState()

    const [unixCorrectedBirthday, setUnixCorrectedBirthday] = useState()

    const [isModified, setIsModified] = useState(false); // Track if the form has been modified

    const {
        birthdayForm,
        onInputChange
    } = useForm();

    const onInputChangeWithTracking = (event) => {
        onInputChange(event); // Call the existing input change handler
        setIsModified(true); // Mark the form as modified
    };

    const dispatch = useDispatch();


    const onSubmit = ( event ) => {
        event.preventDefault();

    }

    const updatePatientValues = () => {
        if (!isModified) return; // Prevent updating if no changes were made

        setOpenModal(false);

        const correctedAge = calculateAgeObject(unixCorrectedBirthday);
        const correctedAgeIsSet = true;

        dispatch(updateCurrentPatientCorrectedAge(correctedAge));
        dispatch(updateCurrentPatientUnixCorrectedBirthday({ unixCorrectedBirthday, correctedAgeIsSet }));
        dispatch(startUpdatingCurrentPatientUnixCorrectedBirthday(uid, patientID, unixCorrectedBirthday, correctedAgeIsSet));

        setIsModified(false); // Reset modification state after update
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

        dispatch( updateCurrentPatientCorrectedAge( correctedAge ) );
        // dispatch( startUpdatingCurrentPatientCorrectedAge( uid, patientID, correctedAge, correctedAgeIsSet ) );

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
            d2 = d2 + month[m2 + 1];
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
            d2 = d2 + month[m2 + 1];
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
        
        // console.log('----')
        let d1 = fromUnixTime( unixCorrectedBirthday ).getDate();
        // console.log('d1: ', d1)
        let m1 = fromUnixTime( unixCorrectedBirthday ).getMonth();
        // console.log('m1: ', m1)
        let y1 = fromUnixTime( unixCorrectedBirthday ).getFullYear();
        // console.log('y1: ', y1)
        let date = new Date();
        let d2 = date.getDate();
        // console.log('d2: ', d2)
        let m2 = date.getMonth();
        // console.log('m2: ', m2)
        let y2 = date.getFullYear();
        // console.log('y2: ', y2)
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2) { // (1 > 6) --- (31 > 6) --- (30 > 6)
            d2 = d2 + month[m2 + 1]; // 36 ---- 37
            m2 = m2 - 1; // 7 ---- 8
        }
        if (m1 > m2) { // (8 > 8) --- (7 > 7) --- (7 > 7)
            m2 = m2 + 12; // 
            y2 = y2 - 1; // 
        }
        let d = d2 - d1; // d = 5 --- d = 5 --- d = 6
        let m = m2 - m1; // m = 0 --- m = 0 --- m = 0
        let y = y2 - y1; // y = 0 --- y = 0 --- y = 0

        // console.log('d: ', d)
        // console.log('d1: ', d1)
        // console.log('d2: ', d2)
        // console.log('m: ', m)
        // console.log('m1: ', m1)
        // console.log('m2: ', m2)
        // console.log('y: ', y)
        // console.log('y1: ', y1)
        // console.log('y2: ', y2)

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
        setUnixCorrectedBirthday(
            getUnixTime(addDays(set(new Date(birthdayForm), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0 }), 1))
        );
        setCorrectedAge(calculateCorrectedAge(unixCorrectedBirthday));
    }, [onInputChange])
    
    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    {/* <img src={ UpdateValues }/> */}
                    <img src={ CorrectedAgeIcon }/>
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
            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Actualizar edad corregida"
                footerButtons={[
                    { text: "Actualizar", onClick: updatePatientValues, className: "btn-modal-action", disabled: !isModified },
                    { text: "Eliminar edad corregida", onClick: deleteCorrectedAge, className: "btn-modal-action-alt" },
                ]}
            >
                <form onSubmit={ onSubmit }>
                    <div className="" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Fecha de Nacimiento Corregida</label>
                                <input className="input-text-style" type="date" name="birthdayForm" defaultValue={ birthday } onChange={ onInputChangeWithTracking }/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Edad Corregida</label>
                                <input className="input-text-style" type="text" name="correctedAgeForm" value={ correctedAge } readOnly/>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </ModalWrapper>
        </>
    )
}
