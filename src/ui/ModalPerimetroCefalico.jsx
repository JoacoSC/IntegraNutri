import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { CSSTransition } from "react-transition-group";

import { useForm } from '../hooks';
import { startUpdatingCurrentPatientPerimetroCefalico } from '../store/currentPatient';
import PCe_masculino from '../../assets/imgs/patient/perimetro_cefalico_masculino_v2.svg'
import PCe_femenino from '../../assets/imgs/patient/perimetro_cefalico_femenino_v2.svg'
import PerimetroCefalicoIcon from '../../assets/imgs/patient/perimetro_cefalico-for-avatar-icon.svg'
import './components';
import { DangerTooltip } from '../common';


export const ModalPerimetroCefalico = ({ patientObject }) => {

    const { uid, patientID } = patientObject;

    const { biologicalSex } = useSelector( state => state.currentPatient )

    const [openModal, setOpenModal] = useState(false);

    const [PCeClasificacion, setPCeClasificacion] = useState('');

    const tooltipMessage = 'En caso de Macrocefalia, hay que corregir por talla. Se debe modificar la edad con la que se evalúa el PCe del niño o niña, por aquella edad en la que su talla corresponda a la mediana.';
    
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
            <button onClick={ () => setOpenModal(true) } className='dropdown-item-btn'>
                <label className='dropdown-item-img'>
                    <img src={ PerimetroCefalicoIcon }/>
                </label>
                <p>
                    Calcular Perímetro Cefálico&nbsp;
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
                                    <input className="input-text-style h-2 mr-05" type="text" name="PCeClasificacion" value={ PCeClasificacion } readOnly/>
                                    {
                                        (PCeClasificacion === 'Macrocefalia')
                                        ?   <DangerTooltip tooltipMessage = { tooltipMessage }/>
                                        :   null
                                    }
                                </div>
                            </div>            
                        </div>
                        <div className="modal-chart-container">
                            {
                                (biologicalSex === 'Masculino')
                                ?   <>
                                        {/* <p className='modal-chart-title'>
                                            PERÍMETRO CEFÁLICO POR EDAD EN NIÑOS DESDE EL NACIMIENTO A 3 AÑOS
                                        </p> */}
                                        {/* <br/>
                                        <p className='modal-chart-subtitle'>
                                            MEDIANA Y DESVIACIÓN ESTÁNDAR
                                        </p> */}
                                        <img src={ PCe_masculino } className='modal-chart'/> 
                                        {/* <p className='modal-chart-ref'>
                                            Referencias:
                                        </p>
                                        <br/>
                                        <p className='modal-chart-ref'>
                                            Departamento de Nutrición y. Alimentos Ministerio de Salud. (2018). PATRONES DE CRECIMIENTO PARA LA EVALUACIÓN NUTRICIONAL DE NIÑOS, NIÑAS Y ADOLESCENTES DESDE EL NACIMIENTO HASTA LOS 19 AÑOS DE EDAD.
                                        </p> */}
                                    </>
                                :   (biologicalSex === 'Femenino')
                                    ?   <>
                                            {/* <p className='modal-chart-title'>
                                                PERÍMETRO CEFÁLICO POR EDAD EN NIÑAS DESDE EL NACIMIENTO A 3 AÑOS
                                            </p> */}
                                            {/* <br/>
                                            <p className='modal-chart-subtitle'>
                                                MEDIANA Y DESVIACIÓN ESTÁNDAR
                                            </p> */}
                                            <img src={ PCe_femenino } className='modal-chart'/> 
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
