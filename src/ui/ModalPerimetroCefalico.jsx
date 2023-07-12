import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import { startUpdatingCurrentPatientPerimetroCefalico } from '../store/currentPatient';
import './components';
import PCe_masculino from '../../assets/imgs/patient/perimetro_cefalico_masculino.png'
import PCe_femenino from '../../assets/imgs/patient/perimetro_cefalico_femenino.png'

export const ModalPerimetroCefalico = ({
        uid,
        patientID
    }) => {

    const { gender } = useSelector( state => state.currentPatient )

    const [openModal, setOpenModal] = useState(false);

    const [PCeClasificacion, setPCeClasificacion] = useState('');
    
    const { 
        PCeMedicion,
        PCeRegistro,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        const perimetroCefalico = {
            PCeMedicion,
            PCeRegistro,
            PCeClasificacion
        }

        dispatch( startUpdatingCurrentPatientPerimetroCefalico( uid, patientID, perimetroCefalico ) )

    }

    const onModalClose = () => {
        setOpenModal(false)
        setPCeClasificacion( '' )
    }

    useEffect(() => {
        
        if( PCeRegistro === '+2DE' ){
            setPCeClasificacion( 'Macrocefalia' )
        }else if( PCeRegistro === '+1DE' ){
            setPCeClasificacion( 'Normal' )
        }else if( PCeRegistro === 'Mediana' ){
            setPCeClasificacion( 'Normal' )
        }else if( PCeRegistro === '-1DE' ){
            setPCeClasificacion( 'Normal' )
        }else if( PCeRegistro === '-2DE' ){
            setPCeClasificacion( 'Microcefalia' )
        }else{
            setPCeClasificacion( '' )
        }

    }, [PCeRegistro])
    

    return (
        <>
            <div className="alt-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                Calcular Perímetro Cefálico&nbsp;
                <svg width="22" height="20" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="13" cy="15" r="7.75" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="10.75" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                    <circle cx="15.25" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.6188 17.25C10.3383 17.25 10.198 17.25 10.124 17.3631C10.05 17.4763 10.099 17.5884 10.1971 17.8127C10.6285 18.7994 11.7207 19.5 13 19.5C14.2793 19.5 15.3715 18.7994 15.8029 17.8127C15.901 17.5884 15.95 17.4763 15.876 17.3631C15.802 17.25 15.6618 17.25 15.3813 17.25H10.6188Z" fill="white"/>
                    <path d="M24 4L21.25 1M24 4L21.25 7M24 4L2 4M2 4L4.75 7M2 4L4.75 1" stroke="white" strokeWidth="2"/>
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
                className="modal-perimetro-cefalico-container"
                >
                <div className="btn-modal-close" onClick={ () => onModalClose() }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Calcular Perímetro Cefálico
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="modal-perimetro-cefalico-container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Medición
                                </label>
                                    <input className="input-text-style h-2" type="number" step=".01" name="PCeMedicion" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Registro
                                </label>
                                    <select className="input-text-style h-2" name="PCeRegistro" onChange={ onInputChange }>
                                        <option selected>Seleccione una opción</option>
                                        <option value='+2DE'>+ 2DE</option>
                                        <option value='+1DE'>+ 1DE</option>
                                        <option value='Mediana'>Mediana</option>
                                        <option value='-1DE'>- 1DE</option>
                                        <option value='-2DE'>- 2DE</option>
                                    </select>
                            </div>            
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">
                                    Clasificación
                                </label>
                                <div className='flex-direction-row'>
                                    <input className="input-text-style h-2" type="text" name="PCeClasificacion" value={ PCeClasificacion } readOnly/>
                                    {
                                        (PCeClasificacion === 'Macrocefalia')
                                        ?   <div className="perimetro-cefalico-info" data-tooltip="En caso de Macrocefalia, hay que corregir por talla. Se debe modificar la edad con la que se evalúa el PCe del niño o niña, por aquella edad en la que su talla corresponda a la mediana.">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16ZM11 7V13H13L13 7H11Z" fill="#FF3939"/>
                                                </svg>
                                            </div>
                                        :   null
                                    }
                                </div>
                            </div>            
                        </div>
                        <div className="modal-chart-container">
                            {
                                (gender === 'Masculino')
                                ?   <>
                                        <p className='modal-chart-title'>
                                            PERÍMETRO CEFÁLICO POR EDAD EN NIÑOS DESDE EL NACIMIENTO A 3 AÑOS
                                        </p>
                                        {/* <br/>
                                        <p className='modal-chart-subtitle'>
                                            MEDIANA Y DESVIACIÓN ESTÁNDAR
                                        </p> */}
                                        <img src={ PCe_masculino } className='modal-chart'/> 
                                        <p className='modal-chart-ref'>
                                            Referencias:
                                        </p>
                                        <br/>
                                        <p className='modal-chart-ref'>
                                            Departamento de Nutrición y. Alimentos Ministerio de Salud. (2018). PATRONES DE CRECIMIENTO PARA LA EVALUACIÓN NUTRICIONAL DE NIÑOS, NIÑAS Y ADOLESCENTES DESDE EL NACIMIENTO HASTA LOS 19 AÑOS DE EDAD.
                                        </p>
                                    </>
                                :   (gender === 'Femenino')
                                    ?   <>
                                            <p className='modal-chart-title'>
                                                PERÍMETRO CEFÁLICO POR EDAD EN NIÑAS DESDE EL NACIMIENTO A 3 AÑOS
                                            </p>
                                            {/* <br/>
                                            <p className='modal-chart-subtitle'>
                                                MEDIANA Y DESVIACIÓN ESTÁNDAR
                                            </p> */}
                                            <img src={ PCe_femenino } className='modal-chart'/> 
                                            <p className='modal-chart-ref'>
                                                Referencias:
                                            </p>
                                            <br/>
                                            <p className='modal-chart-ref'>
                                                Departamento de Nutrición y. Alimentos Ministerio de Salud. (2018). PATRONES DE CRECIMIENTO PARA LA EVALUACIÓN NUTRICIONAL DE NIÑOS, NIÑAS Y ADOLESCENTES DESDE EL NACIMIENTO HASTA LOS 19 AÑOS DE EDAD.
                                            </p>
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
