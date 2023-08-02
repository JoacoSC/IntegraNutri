import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import './components';

import PA_M1 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_1.svg'
import PA_M2 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_2.svg'
import PA_M3 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_3.svg'
import PA_M4 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_4.svg'
import PA_M5 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_5.svg'
import PA_M6 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_6.svg'
import PA_M7 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_7.svg'
import PA_M8 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_8.svg'
import PA_M9 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_9.svg'
import PA_M10 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_10.svg'
import PA_M11 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_11.svg'
import PA_M12 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_12.svg'
import PA_M13 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_13.svg'
import PA_M14 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_14.svg'
import PA_M15 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_15.svg'
import PA_M16 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_16.svg'
import PA_M17 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_masculino_17.svg'

import PA_F1 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_1.svg'
import PA_F2 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_2.svg'
import PA_F3 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_3.svg'
import PA_F4 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_4.svg'
import PA_F5 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_5.svg'
import PA_F6 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_6.svg'
import PA_F7 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_7.svg'
import PA_F8 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_8.svg'
import PA_F9 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_9.svg'
import PA_F10 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_10.svg'
import PA_F11 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_11.svg'
import PA_F12 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_12.svg'
import PA_F13 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_13.svg'
import PA_F14 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_14.svg'
import PA_F15 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_15.svg'
import PA_F16 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_16.svg'
import PA_F17 from '../../assets/imgs/patient/imgs_presion_arterial/presion_arterial_femenino_17.svg'
// import PA_masculino from '../../assets/imgs/patient/perimetro_cintura_masculino_v2.svg'
// import PA_femenino from '../../assets/imgs/patient/perimetro_cintura_femenino_v2.svg'
// import PA_femenino from '../../assets/imgs/patient/perimetro_cintura_femenino_v2.svg'
import HeartIconWhite from '../../assets/imgs/patient/heart_icon_white.svg'
import { startUpdatingCurrentPatientPresionArterial } from '../store/currentPatient';

export const ModalPresionArterial = ({ patientObject }) => {

    const { uid, patientID, ageText, ageForCalcs, stature } = patientObject;

    const { gender } = useSelector( state => state.currentPatient )

    const [openModal, setOpenModal] = useState(false);

    const [PAClasificacion, setPAClasificacion] = useState('');

    const statureLength = stature?.length;
    
    const { 
        PAMedicion,
        PARegistro,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        const presionArterial = {
            PAMedicion,
            PARegistro,
            PAClasificacion
        }

        dispatch( startUpdatingCurrentPatientPresionArterial( uid, patientID, presionArterial ) )

        // dispatch( startUpdatingCurrentPatientPerimetroCintura( uid, patientID, perimetroCintura ) )

    }

    const onModalClose = () => {
        setOpenModal(false)
        setPAClasificacion( '' )
    }

    useEffect(() => {
        
        if( PARegistro === '50' ){
            setPAClasificacion( 'Normal' )
        }else if( PARegistro === '90' ){
            setPAClasificacion( 'Presión Arterial Elevada' )
        }else if( PARegistro === '95' ){
            setPAClasificacion( 'HTA Etapa I' )
        }else if( PARegistro === '95plus12' ){
            setPAClasificacion( 'HTA Etapa II' )
        }else{
            setPAClasificacion( '' )
        }

    }, [PARegistro])

    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={ HeartIconWhite }/>
                </label>
                <p>
                    Evaluación de presión arterial&nbsp;
                </p>
            </button>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-perimetro-cefalico-container"
                >
                <div className="btn-modal-close" onClick={ () => onModalClose() }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Evaluación de presión arterial
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="modal-perimetro-cefalico-container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    PA
                                </label>
                                    <input className="input-text-style h-2" type="text" step=".01" name="PAMedicion" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Percentil
                                </label>
                                    <select className="input-text-style h-2" name="PARegistro" onChange={ onInputChange }>
                                        <option>Seleccione una opción</option>
                                        <option value='50'>50</option>
                                        <option value='90'>90</option>
                                        <option value='95'>95</option>
                                        <option value='95plus12'>95 + 12mm Hg</option>
                                    </select>
                            </div>            
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Clasificación
                                </label>
                                <div className='flex-direction-row'>
                                    <input className="input-text-style h-2" type="text" name="PAClasificacion" value={ PAClasificacion } readOnly/>
                                    {/* {
                                        (PAClasificacion === 'Macrocefalia')
                                        ?   <div className="perimetro-cefalico-info" data-tooltip="En caso de Macrocefalia, hay que corregir por talla. Se debe modificar la edad con la que se evalúa el PCe del niño o niña, por aquella edad en la que su talla corresponda a la mediana.">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16ZM11 7V13H13L13 7H11Z" fill="#FF3939"/>
                                                </svg>
                                            </div>
                                        :   null
                                    } */}
                                </div>
                            </div>            
                        </div>
                        <div className='modal-chart-info-container'>
                            <div className='modal-chart-info'>
                                <b>Edad: </b>{ ageText }
                            </div>
                            <div className='modal-chart-info'>
                                <b>Estatura: </b>
                                {   (statureLength > 0)
                                    ? stature[statureLength - 1].A + ' cm'
                                    : ''
                                }
                            </div>
                        </div>
                        <div className="modal-chart-container">
                            {
                                (gender === 'Masculino')
                                ?   <>
                                        {/* <p className='modal-chart-title'>
                                            PERÍMETRO DE CINTURA POR EDAD EN NIÑOS Y ADOLESCENTES DE 5 a 19 AÑOS
                                        </p>*/}
                                        {
                                            ( ageForCalcs.y === 1 )
                                            ?   <img src={ PA_M1 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 2 )
                                            ?   <img src={ PA_M2 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 3 )
                                            ?   <img src={ PA_M3 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 4 )
                                            ?   <img src={ PA_M4 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 5 )
                                            ?   <img src={ PA_M5 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 6 )
                                            ?   <img src={ PA_M6 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 7 )
                                            ?   <img src={ PA_M7 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 8 )
                                            ?   <img src={ PA_M8 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 9 )
                                            ?   <img src={ PA_M9 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 10 )
                                            ?   <img src={ PA_M10 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 11 )
                                            ?   <img src={ PA_M11 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 12 )
                                            ?   <img src={ PA_M12 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 13 )
                                            ?   <img src={ PA_M13 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 14 )
                                            ?   <img src={ PA_M14 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 15 )
                                            ?   <img src={ PA_M15 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 16 )
                                            ?   <img src={ PA_M16 } className='modal-chart'/>
                                            :   null
                                        }
                                        {
                                            ( ageForCalcs.y === 17 )
                                            ?   <img src={ PA_M17 } className='modal-chart'/>
                                            :   null
                                        }
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
                                                PERÍMETRO DE CINTURA POR EDAD EN NIÑAS Y ADOLESCENTES DE 5 a 19 AÑOS
                                            </p> */}
                                            {
                                                ( ageForCalcs.y === 1 )
                                                ?   <img src={ PA_F1 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 2 )
                                                ?   <img src={ PA_F2 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 3 )
                                                ?   <img src={ PA_F3 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 4 )
                                                ?   <img src={ PA_F4 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 5 )
                                                ?   <img src={ PA_F5 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 6 )
                                                ?   <img src={ PA_F6 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 7 )
                                                ?   <img src={ PA_F7 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 8 )
                                                ?   <img src={ PA_F8 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 9 )
                                                ?   <img src={ PA_F9 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 10 )
                                                ?   <img src={ PA_F10 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 11 )
                                                ?   <img src={ PA_F11 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 12 )
                                                ?   <img src={ PA_F12 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 13 )
                                                ?   <img src={ PA_F13 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 14 )
                                                ?   <img src={ PA_F14 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 15 )
                                                ?   <img src={ PA_F15 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 16 )
                                                ?   <img src={ PA_F16 } className='modal-chart'/>
                                                :   null
                                            }
                                            {
                                                ( ageForCalcs.y === 17 )
                                                ?   <img src={ PA_F17 } className='modal-chart'/>
                                                :   null
                                            }
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
                        
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
