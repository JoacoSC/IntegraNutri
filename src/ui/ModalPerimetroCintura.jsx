import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientPerimetroCintura } from '../store/currentPatient';

import PC_masculino from '../../assets/imgs/patient/perimetro_cintura_masculino_v2.svg'
import PC_femenino from '../../assets/imgs/patient/perimetro_cintura_femenino_v2.svg'
import TallaDianaIcon from '../../assets/imgs/patient/talla_diana_icon.svg'
import './components';

export const ModalPerimetroCintura = ({ patientObject }) => {

    const { uid, patientID } = patientObject;

    const { gender } = useSelector( state => state.currentPatient )

    const [openModal, setOpenModal] = useState(false);

    const [PCClasificacion, setPCClasificacion] = useState('');
    
    const { 
        PCMedicion,
        PCRegistro,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        const perimetroCintura = {
            PCMedicion,
            PCRegistro,
            PCClasificacion
        }

        dispatch( startUpdatingCurrentPatientPerimetroCintura( uid, patientID, perimetroCintura ) )

    }

    const onModalClose = () => {
        setOpenModal(false)
        setPCClasificacion( '' )
    }

    useEffect(() => {
        
        if( PCRegistro === 'menor75' ){
            setPCClasificacion( 'Normal' )
        }else if( PCRegistro === 'entre7590' ){
            setPCClasificacion( 'Riesgo de Obesidad Abdominal' )
        }else if( PCRegistro === 'mayor90' ){
            setPCClasificacion( 'Obesidad Abdominal' )
        }else{
            setPCClasificacion( '' )
        }

    }, [PCRegistro])
    

    return (
        <>
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={ TallaDianaIcon }/>
                </label>
                <p>
                    Calcular Perímetro de Cintura&nbsp;
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
                    Calcular Perímetro de Cintura
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="modal-perimetro-cefalico-container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Medición
                                </label>
                                    <input className="input-text-style h-2" type="number" step=".01" name="PCMedicion" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Registro
                                </label>
                                    <select className="input-text-style h-2" name="PCRegistro" onChange={ onInputChange }>
                                        <option selected>Seleccione una opción</option>
                                        <option value='menor75'>&lt; p75</option>
                                        <option value='entre7590'>{"≥"} p75 y &lt; p90</option>
                                        <option value='mayor90'>{"≥"} p90</option>
                                    </select>
                            </div>            
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Clasificación
                                </label>
                                <div className='flex-direction-row'>
                                    <input className="input-text-style h-2" type="text" name="PCClasificacion" value={ PCClasificacion } readOnly/>
                                    {/* {
                                        (PCClasificacion === 'Macrocefalia')
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
                        <div className="modal-chart-container">
                            {
                                (gender === 'Masculino')
                                ?   <>
                                        {/* <p className='modal-chart-title'>
                                            PERÍMETRO DE CINTURA POR EDAD EN NIÑOS Y ADOLESCENTES DE 5 a 19 AÑOS
                                        </p>                                         */}
                                        <img src={ PC_masculino } className='modal-chart'/>
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
                                            <img src={ PC_femenino } className='modal-chart'/>
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
