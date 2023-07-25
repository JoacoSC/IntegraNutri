import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { useForm } from '../hooks';
import './components';
import PA_masculino from '../../assets/imgs/patient/perimetro_cintura_masculino_v2.svg'
import PA_femenino from '../../assets/imgs/patient/perimetro_cintura_femenino_v2.svg'

export const ModalPresionArterial = () => {

    const { gender } = useSelector( state => state.currentPatient )

    const [openModal, setOpenModal] = useState(false);

    const [PAClasificacion, setPAClasificacion] = useState('');
    
    const { 
        PAMedicion,
        PARegistro,
        onInputChange
    } = useForm();

    const dispatch = useDispatch();

    const onSubmit = ( event ) => {
        event.preventDefault();

        const perimetroCintura = {
            PAMedicion,
            PARegistro,
            PAClasificacion
        }

        console.log(perimetroCintura)

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
            <div className="weight-update-btn" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                Evaluación de presión arterial&nbsp;
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
                                        <option selected>Seleccione una opción</option>
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
                        <div className="modal-chart-container">
                            {
                                (gender === 'Masculino')
                                ?   <>
                                        {/* <p className='modal-chart-title'>
                                            PERÍMETRO DE CINTURA POR EDAD EN NIÑOS Y ADOLESCENTES DE 5 a 19 AÑOS
                                        </p>                                         */}
                                        <img src={ PA_masculino } className='modal-chart'/>
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
                                            <img src={ PA_femenino } className='modal-chart'/>
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
