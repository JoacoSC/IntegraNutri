import { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { useForm } from "../hooks";
import { isEditingJournal, startEditJournal } from "../store/journal";

import './components';

export const ModalEditJournal = () => {

    const [openModal, setOpenModal] = useState(false);

    const [isMondayChecked, setIsMondayChecked] = useState(false);
    const [isTuesdayChecked, setIsTuesdayChecked] = useState(false);
    const [isWednesdayChecked, setIsWednesdayChecked] = useState(false);
    const [isThursdayChecked, setIsThursdayChecked] = useState(false);
    const [isFridayChecked, setIsFridayChecked] = useState(false);
    const [isSaturdayChecked, setIsSaturdayChecked] = useState(false);
    const [isSundayChecked, setIsSundayChecked] = useState(false);

    const mondayCheckbox = useRef();
    const tuesdayCheckbox = useRef();
    const wednesdayCheckbox = useRef();
    const thursdayCheckbox = useRef();
    const fridayCheckbox = useRef();
    const saturdayCheckbox = useRef();
    const sundayCheckbox = useRef();

    const dispatch = useDispatch()

    const {
        journalID,
    } = useSelector((state) => state.journal);

    const {
        mondayStartTime,
        mondayEndTime,
        tuesdayStartTime,
        tuesdayEndTime,
        wednesdayStartTime,
        wednesdayEndTime,
        thursdayStartTime,
        thursdayEndTime,
        fridayStartTime,
        fridayEndTime,
        saturdayStartTime,
        saturdayEndTime,
        sundayStartTime,
        sundayEndTime,
        onInputChange,
        formState } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();

        // TODO: El journal ideal debe tener:
        // 
        // El código Unix de cada hora de consulta, esté disponible o no
        // Bajo el código Unix debe haber una propiedad que me indique si la hora de consulta está disponible
        // Otra propiedad con los datos del paciente que agendó esa hora de consulta
        // 
        // 

        const journalParams = {
            workingDays: {
                Monday: {
                    startTime: '09:00',
                    consultationDuration: '00:45',
                    consultationsPerDay: 8,
                },
                Wednesday: {
                    startTime: '10:00',
                    consultationDuration: '01:00',
                    consultationsPerDay: 6,
                },
                Friday: {
                    startTime: '09:30',
                    consultationDuration: '00:45',
                    consultationsPerDay: 6,
                }
            }
        }
        const journal = {
            
            // Unix del día a las 12:00, para calcular el día de la semana, numero de día, etc.
            347839273400: {
                dayName: 'Monday',
                isWorkingDay: boolean,
                consultationSlots: {     // En el JournalPage se comparará a través de un arreglo que contenga los días desde hoy
                                    // hasta 60 días ( o más )
                    // Horas del día
                    347839273400: {
                        isAvailable: boolean,
                        patientData: {
                            // Patient data
                        }
                    },
                    347843234500: {
                        isAvailable: boolean,
                        patientData: {
                            // Patient data
                        }
                    },
                    347838767600: {
                        isAvailable: boolean,
                        patientData: {
                            // Patient data
                        }
                    },
                }
            }

        } 
        
        if( isMondayChecked ){
            console.log({mondayStartTime, mondayEndTime})
        }
        if( isTuesdayChecked ){
            console.log({tuesdayStartTime, tuesdayEndTime})
        }
        if( isWednesdayChecked ){
            console.log({wednesdayStartTime, wednesdayEndTime})
        }
        if( isThursdayChecked ){
            console.log({thursdayStartTime, thursdayEndTime})
        }
        if( isFridayChecked ){
            console.log({fridayStartTime, fridayEndTime})
        }
        if( isSaturdayChecked ){
            console.log({saturdayStartTime, saturdayEndTime})
        }
        if( isSundayChecked ){
            console.log({sundayStartTime, sundayEndTime})
        }

        console.log(isMondayChecked)
        console.log(isTuesdayChecked)
        console.log(isWednesdayChecked)
        console.log(isThursdayChecked)
        console.log(isFridayChecked)
        console.log(isSaturdayChecked)
        console.log(isSundayChecked)
        
        // dispatch( startEditJournal( journalID, workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay ) );
        
        
    }

    const handleSelectEverythingCheckbox = ( event ) => {

        event.preventDefault();
        // const isChecked = event.target.checked;

        // daysRef.current[0]?.click();
        if(!mondayCheckbox.current.checked){   
            mondayCheckbox.current.click();
        }
        if(!tuesdayCheckbox.current.checked){   
            tuesdayCheckbox.current.click();
        }
        if(!wednesdayCheckbox.current.checked){   
            wednesdayCheckbox.current.click();
        }
        if(!thursdayCheckbox.current.checked){   
            thursdayCheckbox.current.click();
        }
        if(!fridayCheckbox.current.checked){   
            fridayCheckbox.current.click();
        }
        if(!saturdayCheckbox.current.checked){   
            saturdayCheckbox.current.click();
        }
        if(!sundayCheckbox.current.checked){   
            sundayCheckbox.current.click();
        }

        setIsMondayChecked( true )
        setIsTuesdayChecked( true )
        setIsWednesdayChecked( true )
        setIsThursdayChecked( true )
        setIsFridayChecked( true )
        setIsSaturdayChecked( true )
        setIsSundayChecked( true )
    }

    const handleMondayCheckbox = ( event ) => {
        // const isChecked = event.target.checked;

        setIsMondayChecked( current => !current )
    }

    const handleTuesdayCheckbox = ( event ) => {
        // const isChecked = event.target.checked;

        setIsTuesdayChecked( current => !current )
    }

    const handleWednesdayCheckbox = ( event ) => {
        // const isChecked = event.target.checked;

        setIsWednesdayChecked( current => !current )
    }

    const handleThursdayCheckbox = ( event ) => {
        // const isChecked = event.target.checked;

        setIsThursdayChecked( current => !current )
    }

    const handleFridayCheckbox = ( event ) => {
        // const isChecked = event.target.checked;

        setIsFridayChecked( current => !current )
    }

    const handleSaturdayCheckbox = ( event ) => {
        // const isChecked = event.target.checked;

        setIsSaturdayChecked( current => !current )
    }

    const handleSundayCheckbox = ( event ) => {
        // const isChecked = event.target.checked;

        setIsSundayChecked( current => !current )
    }


    const onModalOpen = () => {

        setOpenModal(true)
        dispatch( isEditingJournal( true ))
    }

    const onModalClose = () => {

        setOpenModal(false)
        dispatch( isEditingJournal( false ))
    }

    useEffect(() => {
        setIsMondayChecked( false )
        setIsTuesdayChecked( false )
        setIsWednesdayChecked( false )
        setIsThursdayChecked( false )
        setIsFridayChecked( false )
        setIsSaturdayChecked( false )
        setIsSundayChecked( false )
    }, [openModal])

    return (
        <>
            <button className="btn-edit" type="button" onClick={ () => onModalOpen() }></button>
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
                <div className="btn-modal-close" onClick={ () => onModalClose() }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Editar agenda de consultas
                </h1>

                <form onSubmit={ onSubmit }>
                    <div className="modal-edit-journal-container-form">
                    <div className="flex-column width-100">
                        <div className="journal-row-container">
                            <div className="journal-row-item">
                                <button className="btn-select-everything" onClick={ handleSelectEverythingCheckbox }>
                                    Seleccionar todos
                                </button> 
                                {/* <label className="">Seleccionar todos</label> */}
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                defaultChecked
                                name="patient_accordion"
                                id="mondayAccordion"
                                />
                                <label className="accordion-label" htmlFor="mondayAccordion">
                                <input type="checkbox" ref={ mondayCheckbox } value={ isMondayChecked } onChange={ handleMondayCheckbox }/>
                                Lunes
                                </label>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Inicio de la jornada:</label>
                                        <input type="time" name="mondayStartTime" disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Duración de cada consulta:</label>
                                        <input type="time" name="mondayConsultationDuration" disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Descanso post-consulta:</label>
                                        <input type="time" name="mondayPostConsultationDuration" disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Cantidad de consultas del día:</label>
                                        <input className="journal-input-number" type="number" name="mondayConsultationPerDay" disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                // defaultChecked
                                name="patient_accordion"
                                id="tuesdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="tuesdayAccordion">
                                <input type="checkbox" ref={ tuesdayCheckbox } value={ isTuesdayChecked } onChange={ handleTuesdayCheckbox }/>
                                Martes
                                </label>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Inicio de la jornada:</label>
                                        <input type="time" name="tuesdayStartTime" disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Duración de cada consulta:</label>
                                        <input type="time" name="tuesdayConsultationDuration" disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Descanso post-consulta:</label>
                                        <input type="time" name="tuesdayPostConsultationDuration" disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Cantidad de consultas del día:</label>
                                        <input className="journal-input-number" type="number" name="tuesdayConsultationPerDay" disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                // defaultChecked
                                name="patient_accordion"
                                id="wednesdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="wednesdayAccordion">
                                <input type="checkbox" ref={ wednesdayCheckbox } value={ isWednesdayChecked } onChange={ handleWednesdayCheckbox }/>
                                Miércoles
                                </label>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Inicio de la jornada:</label>
                                        <input type="time" name="wednesdayStartTime" disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Duración de cada consulta:</label>
                                        <input type="time" name="wednesdayConsultationDuration" disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Descanso post-consulta:</label>
                                        <input type="time" name="wednesdayPostConsultationDuration" disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Cantidad de consultas del día:</label>
                                        <input className="journal-input-number" type="number" name="wednesdayConsultationPerDay" disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                // defaultChecked
                                name="patient_accordion"
                                id="thursdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="thursdayAccordion">
                                <input type="checkbox" ref={ thursdayCheckbox } value={ isThursdayChecked } onChange={ handleThursdayCheckbox }/>
                                Jueves
                                </label>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Inicio de la jornada:</label>
                                        <input type="time" name="thursdayStartTime" disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Duración de cada consulta:</label>
                                        <input type="time" name="thursdayConsultationDuration" disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Descanso post-consulta:</label>
                                        <input type="time" name="thursdayPostConsultationDuration" disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Cantidad de consultas del día:</label>
                                        <input className="journal-input-number" type="number" name="thursdayConsultationPerDay" disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                // defaultChecked
                                name="patient_accordion"
                                id="fridayAccordion"
                                />
                                <label className="accordion-label" htmlFor="fridayAccordion">
                                <input type="checkbox" ref={ fridayCheckbox } value={ isFridayChecked } onChange={ handleFridayCheckbox }/>
                                Viernes
                                </label>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Inicio de la jornada:</label>
                                        <input type="time" name="fridayStartTime" disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Duración de cada consulta:</label>
                                        <input type="time" name="fridayConsultationDuration" disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Descanso post-consulta:</label>
                                        <input type="time" name="fridayPostConsultationDuration" disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Cantidad de consultas del día:</label>
                                        <input className="journal-input-number" type="number" name="fridayConsultationPerDay" disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                // defaultChecked
                                name="patient_accordion"
                                id="saturdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="saturdayAccordion">
                                <input type="checkbox" ref={ saturdayCheckbox } value={ isSaturdayChecked } onChange={ handleSaturdayCheckbox }/>
                                Sábado
                                </label>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Inicio de la jornada:</label>
                                        <input type="time" name="saturdayStartTime" disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Duración de cada consulta:</label>
                                        <input type="time" name="saturdayConsultationDuration" disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Descanso post-consulta:</label>
                                        <input type="time" name="saturdayPostConsultationDuration" disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Cantidad de consultas del día:</label>
                                        <input className="journal-input-number" type="number" name="saturdayConsultationPerDay" disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                // defaultChecked
                                name="patient_accordion"
                                id="sundayAccordion"
                                />
                                <label className="accordion-label" htmlFor="sundayAccordion">
                                <input type="checkbox" ref={ sundayCheckbox } value={ isSundayChecked } onChange={ handleSundayCheckbox }/>
                                Domingo
                                </label>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Inicio de la jornada:</label>
                                        <input type="time" name="sundayStartTime" disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Duración de cada consulta:</label>
                                        <input type="time" name="sundayConsultationDuration" disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Descanso post-consulta:</label>
                                        <input type="time" name="sundayPostConsultationDuration" disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                    </div>
                                    <div className="journal-row-item">
                                        <label className="">Cantidad de consultas del día:</label>
                                        <input className="journal-input-number" type="number" name="sundayConsultationPerDay" disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                            {/* <div className="form-item w-50 pr-8">
                                <label className="input-label">Hora</label>
                                <select className="select-style" defaultValue={ workingDayStartHours } name="workingDayStartHours" onChange={ onInputChange }>
                                    <option value="0">00</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                            <label className="input-label">Minutos</label>
                                <select className="select-style" placeholder="00" name="workingDayStartMinutes" onChange={ onInputChange }>
                                    <option value="0">00</option>
                                    <option value="5">05</option>
                                    <option value="10">10</option>
                                </select>
                            </div>       */}
                        </div>
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Aplicar
                            </button>
                        </div>
                    </div>
                    {/* <div className="container-form" onSubmit={ onSubmit }>

                        <div className="form-group">
                            <label className="edit-journal-label">Hora de inicio de la jornada:</label>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Hora</label>
                                <select className="select-style" defaultValue={ workingDayStartHours } name="workingDayStartHours" onChange={ onInputChange }>
                                    <option value="0">00</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                            <label className="input-label">Minutos</label>
                                <select className="select-style" placeholder="00" name="workingDayStartMinutes" onChange={ onInputChange }>
                                    <option value="0">00</option>
                                    <option value="5">05</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    <option value="35">35</option>
                                    <option value="40">40</option>
                                    <option value="45">45</option>
                                    <option value="50">50</option>
                                    <option value="55">55</option>
                                </select>
                            </div>      
                        </div>
                        <div className="form-group">
                            <label className="edit-journal-label">Tiempo de cada consulta:</label>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Horas</label>
                                <select className="select-style" name="consultationHours" onChange={ onInputChange }>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Minutos</label>
                                <select className="select-style" defaultValue={ consultationMinutes } name="consultationMinutes" onChange={ onInputChange }>
                                    <option value="0">00</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    <option value="35">35</option>
                                    <option value="40">40</option>
                                    <option value="45">45</option>
                                    <option value="50">50</option>
                                    <option value="55">55</option>
                                </select>
                            </div>      
                        </div>
                        <div className="form-group">
                            <label className="edit-journal-label">Cantidad de consultas en la jornada:</label>
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Consultas</label>
                                <select className="select-style" defaultValue={ consultationsPerDay } name="consultationsPerDay" onChange={ onInputChange }>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8"></div> 
                        </div>
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Aplicar
                            </button>
                        </div>
                    </div> */}
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
