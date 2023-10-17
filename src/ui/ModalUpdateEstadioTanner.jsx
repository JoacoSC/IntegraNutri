import { addDays, differenceInMilliseconds, format, formatDistance, formatDistanceToNowStrict, fromUnixTime, getUnixTime, milliseconds, set, sub, subMilliseconds, subMonths } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { updateCurrentPatientEstadioTanner, startUpdatingCurrentPatientUnixBiologicalBirthday, updateCurrentPatientBiologicalAge, updateCurrentPatientUnixBiologicalBirthday } from '../store/currentPatient';
import './components';

import UpdateValues from '../../assets/imgs/patient/refresh_icon.svg'
import CorrectedAgeIcon from '../../assets/imgs/patient/corrected_age_icon.svg'
import Tanner_masculino from '../../assets/imgs/patient/estadios_tanner/estadios_tanner_masculino.jpg'
import Tanner_femenino from '../../assets/imgs/patient/estadios_tanner/estadios_tanner_femenino.jpg'

export const ModalUpdateEstadioTanner = ({ patientObject }) => {

    const { gender, age, ageForCalcs, unixBirthday, uid, patientID } = patientObject;

    const [openModal, setOpenModal] = useState(false);

    const [correctedAge, setCorrectedAge] = useState({
        d: 0,
        m: 0,
        y: 0,
    });

    const [biologicalAgeText, setBiologicalAgeText] = useState("");

    const [biologicalAge, setBiologicalAge] = useState(null);

    const [chronologicalAgeText, setChronologicalAgeText] = useState("");

    const [chronologicalAge, setChronologicalAge] = useState( age );
    
    const [ageDifferenceText, setAgeDifferenceText] = useState("");

    const [ageDifference, setAgeDifference] = useState(0);

    const [ageDifferenceDateObject, setAgeDifferenceDateObject] = useState({
        d: 0,
        m: 0,
        y: 0,
    });

    const [disableMesesMenarquia, setDisableMesesMenarquia] = useState(true);

    const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);

    const [inputTextStyleClassname, setInputTextStyleClassname] = useState('input-text-style input-text-width-w-icon h-2');

    const [btnModalPrimaryClassname, setBtnModalPrimaryClassname] = useState('btn-modal-primary');

    const [biologicalAgeMilliseconds, setBiologicalAgeMilliseconds] = useState(0)
    const [chronologicalAgeMilliseconds, setChronologicalAgeMilliseconds] = useState(0)

    const [birthday, setBirthday] = useState()

    const [unixCorrectedBirthday, setUnixCorrectedBirthday] = useState()

    const {
        estadioTanner,
        mesesMenarquia = 0,
        ChronologicalAge,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();


    const onSubmit = ( event ) => {
        event.preventDefault();

    }

    const updatePatientValues = () => {
        
        setOpenModal(false)

        // const correctedUnixBirthday = birthdayForm;

        const unixBiologicalBirthday = getUnixTime( sub( new Date(), {
            years: biologicalAge.y,
            months: biologicalAge.m,
            days: biologicalAge.d,
        } ) );

        const biologicalAgeIsSet = true;

        // console.log('mesesMenarquia: ', mesesMenarquia)
        
        dispatch( updateCurrentPatientBiologicalAge( biologicalAge ) );
        dispatch( updateCurrentPatientEstadioTanner( estadioTanner ) );
        
        // dispatch( startUpdatingCurrentPatientBiologicalAge( uid, patientID, biologicalAge, biologicalAgeIsSet ) );

        dispatch( updateCurrentPatientUnixBiologicalBirthday({ unixBiologicalBirthday, biologicalAgeIsSet }) );
        dispatch( startUpdatingCurrentPatientUnixBiologicalBirthday( uid, patientID, unixBiologicalBirthday, biologicalAgeIsSet, estadioTanner )  );


    }
    
    const deleteCorrectedAge = () => {

        setOpenModal(false)

        setBiologicalAge({
            y: 0,
            m: 0,
            d: 0,
        });

        const unixBiologicalBirthday = null;
        const biologicalAgeIsSet = false;

        dispatch( updateCurrentPatientBiologicalAge( biologicalAge ) );
        dispatch( updateCurrentPatientEstadioTanner( null ) );
        // dispatch( startUpdatingCurrentPatientBiologicalAge( uid, patientID, biologicalAge, biologicalAgeIsSet ) );

        dispatch( updateCurrentPatientUnixBiologicalBirthday({ unixBiologicalBirthday, biologicalAgeIsSet }) );
        dispatch( startUpdatingCurrentPatientUnixBiologicalBirthday( uid, patientID, unixBiologicalBirthday, biologicalAgeIsSet, estadioTanner )  );
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

    const calculateAge = ( value ) => {
        let d1 = fromUnixTime( value ).getDate();
        let m1 = fromUnixTime( value ).getMonth();
        let y1 = fromUnixTime( value ).getFullYear();
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
                if( m2 === 12 ){
                    y2 = y + 1;
                    m2 = 0;
                    return y2 + " años " + m2 + " meses";
                }else{

                    return y + " años " + m2 + " meses";
                }
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
                if( m2 === 12 ){
                    y2 = y + 1;
                    m2 = 0;
                    return y2 + " años " + m2 + " meses";
                }else{

                    return y + " años " + m2 + " meses";
                }
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

    const handleEstadioTanner = () => {

        if( gender === 'Femenino'){
            if( estadioTanner === 'I' ){
                setDisableMesesMenarquia( true )
                setBiologicalAgeText('< 10 años y 6 meses')
                setBiologicalAge(null)
            }else if( estadioTanner === 'II' ){
                setDisableMesesMenarquia( true )
                setBiologicalAgeText('10 años y 6 meses')
                setBiologicalAge({
                    y: 10,
                    m: 6,
                    d: 0,
                })
            }else if( estadioTanner === 'III' ){
                setDisableMesesMenarquia( true )
                setBiologicalAgeText('11 años')
                setBiologicalAge({
                    y: 11,
                    m: 0,
                    d: 0,
                })
            }else if( estadioTanner === 'IV' ){
                setDisableMesesMenarquia( true )
                setBiologicalAgeText('12 años, si no hay menarquia')
                setBiologicalAge({
                    y: 12,
                    m: 0,
                    d: 0,
                })
            }else if( estadioTanner === 'V' ){
                setDisableMesesMenarquia( false )
                setBiologicalAgeText('12 años y 8 meses')
                setBiologicalAge({
                    y: 12,
                    m: 8,
                    d: 0,
                })
            }else{
                setBiologicalAgeText('Ingrese un valor válido')
                setBiologicalAge(null)
            }
        }

        if( gender === 'Masculino' ){
            if( estadioTanner === 'I' ){
                setBiologicalAgeText('< 12 años')
                setBiologicalAge(null)
            }else if( estadioTanner === 'II' ){
                setBiologicalAgeText('12 años')
                setBiologicalAge({
                    y: 12,
                    m: 0,
                    d: 0,
                })
            }else if( estadioTanner === 'III' ){
                setBiologicalAgeText('12 años y 6 meses')
                setBiologicalAge({
                    y: 12,
                    m: 6,
                    d: 0,
                })
            }else if( estadioTanner === 'IV' ){
                setBiologicalAgeText('13 años y 6 meses')
                setBiologicalAge({
                    y: 13,
                    m: 6,
                    d: 0,
                })
            }else if( estadioTanner === 'V' ){
                setBiologicalAgeText('14 años y 6 meses')
                setBiologicalAge({
                    y: 14,
                    m: 6,
                    d: 0,
                })
            }else{
                setBiologicalAgeText('Ingrese un valor válido')
                setBiologicalAge(null)
            }
        }
        

        
    }

    const handleMesesMenarquia = () => {
        
        if( mesesMenarquia === 0 ){

        }else{

            const tempBiologicalAge = calculateAgeObject( getUnixTime( subMonths( sub( new Date(), {
                years: 12,
                months: 8,
                days: 0,
            } ), mesesMenarquia ) ) )

            // console.log(tempBiologicalAge)

            setBiologicalAge({
                y: tempBiologicalAge.y,
                m: tempBiologicalAge.m,
                d: 0,
            })

            setBiologicalAgeText(` ${ tempBiologicalAge.y } años y ${ tempBiologicalAge.m } meses`)
            
    
            // setAgeDifferenceText( calculateAge( getUnixTime( subMonths( subMilliseconds( new Date(), ageDifference ), mesesMenarquia ) ) ) )
            
        }

    }

    const setBiologicalChronologicalAgeMilliseconds = () => {

        if( biologicalAge!== null ){

            setBiologicalAgeMilliseconds( milliseconds({
                years: biologicalAge.y,
                months: biologicalAge.m,
                days: biologicalAge.d
            }));

            setChronologicalAgeMilliseconds( milliseconds({
                years: chronologicalAge.y,
                months: chronologicalAge.m,
                days: chronologicalAge.d
            }));

            // console.log('biologicalAgeMilliseconds: ', biologicalAgeMilliseconds)
            // console.log('chronologicalAgeMilliseconds: ', chronologicalAgeMilliseconds)

        }else{
            setBiologicalAgeMilliseconds(0)
            setChronologicalAgeMilliseconds(0)
        }
    }

    const handleAgeDifference = () => {

        setAgeDifference(Math.abs(biologicalAgeMilliseconds - chronologicalAgeMilliseconds))
    }

    const handleAgeDifferenceDate = () => {

        if( ageDifference === 0){
            setAgeDifferenceText('Indefinido')
        }else{

            setAgeDifferenceText( calculateAge( getUnixTime( subMilliseconds( new Date(), ageDifference ) ) ) )
        }
    }

    const handleAgeDifferenceDateObject = () => {
        if( ageDifference === 0){
            setAgeDifferenceDateObject({
                y: 0,
                m: 0,
                d: 0,
            })
        }else{
            setAgeDifferenceDateObject( calculateAgeObject( getUnixTime( subMilliseconds( new Date(), ageDifference ) ) ) )
        }
    }

    useEffect(() => {
        updateCorrectedAgeAndBirthday();
    }, [unixBirthday])

    useEffect(() => {
        
        handleEstadioTanner();

    }, [estadioTanner])

    useEffect(() => {
        
        handleMesesMenarquia();

    }, [mesesMenarquia])

    
    useEffect(() => {
        
        setBiologicalChronologicalAgeMilliseconds();

    }, [biologicalAge])
    
    useEffect(() => {
        
        handleAgeDifference();

    }, [biologicalAgeMilliseconds, chronologicalAgeMilliseconds])

    useEffect(() => {
        
        handleAgeDifferenceDate();

    }, [ageDifference, mesesMenarquia])

    useEffect(() => {
        
        handleAgeDifferenceDateObject();

    }, [ageDifference])

    useEffect(() => {

        if( ageDifferenceDateObject.y === 0 && ageDifferenceDateObject.m === 0 && ageDifferenceDateObject.d === 0 ){
            // console.log('Es indefinido');
        }else{
            // console.log('No es indefinido');
        }
        if( ageDifferenceDateObject.y === 0 && ageDifferenceDateObject.m === 0 && ageDifferenceDateObject.d === 0 ){   

            setDisableSubmitBtn( true )
            setInputTextStyleClassname( 'input-text-style input-text-width-w-icon h-2' )
            setBtnModalPrimaryClassname( 'btn-modal-primary-disabled' )

        }else{
            if( ageDifferenceDateObject.y < 1 ){
                setDisableSubmitBtn( true )
                setInputTextStyleClassname( 'input-text-danger-style input-text-width-w-icon h-2' )
                setBtnModalPrimaryClassname( 'btn-modal-primary-disabled' )
            }else{
                setDisableSubmitBtn( false )
                setInputTextStyleClassname( 'input-text-success-style input-text-width h-2' )
                setBtnModalPrimaryClassname( 'btn-modal-primary' )
            }

        }

    }, [ageDifferenceDateObject])

    useEffect(() => {
        setChronologicalAgeText( calculateAge( unixBirthday ) );
    }, [])
    
    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    {/* <img src={ UpdateValues }/> */}
                    <img src={ CorrectedAgeIcon }/>
                </label>
                <p>
                    Crear/Modificar Estadio de Tanner&nbsp;
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
                className="modal-estadio-tanner-container"
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
                    <div className="modal-perimetro-cefalico-container-form " onSubmit={ onSubmit }>

                        <div className="form-group wrap justify-content-center">
                            
                            <div className="form-item w-50 pr-8 align-items-center">
                                <label className="input-label">
                                    Registro
                                </label>
                                    <select className="input-text-style input-text-width h-2" name="estadioTanner" onChange={ onInputChange }>
                                        <option>Seleccione una opción</option>
                                        <option value='I'>Grado I</option>
                                        <option value='II'>Grado II</option>
                                        <option value='III'>Grado III</option>
                                        <option value='IV'>Grado IV</option>
                                        <option value='V'>Grado V</option>
                                    </select>
                            </div>            
                            <div className="form-item w-50 pr-8 align-items-center">
                                <label className="input-label">
                                    Edad Biológica
                                </label>
                                <div className='flex-direction-row'>
                                    <input className="input-text-style input-text-width h-2" type="text" value={ biologicalAgeText } name="BiologicalAge" readOnly/>
                                    
                                </div>
                            </div>            
                            <div className="form-item w-50 pr-8 align-items-center">
                                <label className="input-label">
                                    Edad Cronológica
                                </label>
                                <div className='flex-direction-row'>
                                    <input className="input-text-style input-text-width h-2" type="text" value={ chronologicalAgeText } name="ChronologicalAge" readOnly/>
                                    
                                </div>
                            </div>            
                            <div className="form-item w-50 pr-8 align-items-center">
                                <label className="input-label">
                                    Diferencia
                                </label>
                                <div className='flex-direction-row'>
                                    <input className={ inputTextStyleClassname } type="text" value={ ageDifferenceText } name="AgeDifference" readOnly/>
                                    
                                {
                                    (disableSubmitBtn === true)
                                    ?   <div className="perimetro-cefalico-info" data-tooltip="Cuando la edad biológica y la edad cronológica (edad desde el nacimiento) presenten una diferencia mayor a 1 año se justifica evaluar por edad biológica.">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16ZM11 7V13H13L13 7H11Z" fill="#6D22D0"/>
                                            </svg>
                                        </div>
                                    :   null
                                }
                                </div>
                            </div>
                            <div className="form-item w-50 pr-8 align-items-center">
                                <label className="input-label text-align-center">
                                    Meses transcurridos desde su menarquia (opcional)
                                </label>
                                <div className='flex-direction-row'>
                                    <input
                                        className="input-text-style input-text-width h-2"
                                        type="text"
                                        name="mesesMenarquia"
                                        disabled={ disableMesesMenarquia }
                                        onChange={ onInputChange }/>
                                    
                                </div>
                            </div>            
                        </div>
                        <div className="modal-chart-container">
                            {
                                (gender === 'Masculino')
                                ?   <>
                                        {/* <p className='modal-chart-title'>
                                            PERÍMETRO CEFÁLICO POR EDAD EN NIÑOS DESDE EL NACIMIENTO A 3 AÑOS
                                        </p> */}
                                        {/* <br/>
                                        <p className='modal-chart-subtitle'>
                                            MEDIANA Y DESVIACIÓN ESTÁNDAR
                                        </p> */}
                                        <img src={ Tanner_masculino } className='modal-chart border-radius-5'/> 
                                        {/* <p className='modal-chart-ref'>
                                            Referencias:
                                        </p>
                                        <br/>
                                        <p className='modal-chart-ref'>
                                            Departamento de Nutrición y. Alimentos Ministerio de Salud. (2018). PATRONES DE CRECIMIENTO PARA LA EVALUACIÓN NUTRICIONAL DE NIÑOS, NIÑAS Y ADOLESCENTES DESDE EL NACIMIENTO HASTA LOS 19 AÑOS DE EDAD.
                                        </p> */}
                                    </>
                                :   (gender === 'Femenino')
                                    ?   <>
                                            {/* <p className='modal-chart-title'>
                                                PERÍMETRO CEFÁLICO POR EDAD EN NIÑAS DESDE EL NACIMIENTO A 3 AÑOS
                                            </p> */}
                                            {/* <br/>
                                            <p className='modal-chart-subtitle'>
                                                MEDIANA Y DESVIACIÓN ESTÁNDAR
                                            </p> */}
                                            <img src={ Tanner_femenino } className='modal-chart border-radius-5'/> 
                                            {/* <p className='modal-chart-ref'>
                                                Referencias:
                                            </p>
                                            <br/>
                                            <p className='modal-chart-ref'>
                                                Departamento de Nutrición y. Alimentos Ministerio de Salud. (2018). PATRONES DE CRECIMIENTO PARA LA EVALUACIÓN NUTRICIONAL DE NIÑOS, NIÑAS Y ADOLESCENTES DESDE EL NACIMIENTO HASTA LOS 19 AÑOS DE EDAD.
                                            </p> */}
                                        </>
                                    :   null
                            }
                        </div>
                        
                        <div className="form-btn-group">
                            <button
                                className={ btnModalPrimaryClassname }
                                type="submit"
                                onClick={ () => updatePatientValues() }
                                disabled={ disableSubmitBtn }
                            >
                                Actualizar
                            </button>
                            <button
                                className="btn-modal-alt"
                                type="submit"
                                onClick={ () => deleteCorrectedAge() }
                            >
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
