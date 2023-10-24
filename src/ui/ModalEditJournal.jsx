import { useEffect, useState } from "react";
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
                    <div className="modal-edit-journal-container-form" onSubmit={ onSubmit }>
                    <div className="flex-column">
                        <label className="pt-1 pb-2">Días de la semana</label>
                        <div className="journal-row-container">
                            <div className="journal-row-item">
                                <input type="checkbox" name="checkEverything"></input> 
                                <label className="">Seleccionar todos</label>
                            </div>
                        </div>
                        <hr/>
                        <div className="journal-row-container">
                            <div className="journal-row-title">
                                <input type="checkbox" value={ isMondayChecked } onChange={ handleMondayCheckbox }/>                                
                                <label className="">Lunes:</label>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Inicio de la jornada:</label>
                                <input type="time" name="mondayStartTime" disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Fin de la jornada:</label>
                                <input type="time" name="mondayEndTime" disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                            </div>
                        </div>
                        <hr/>
                        <div className="journal-row-container">
                            <div className="journal-row-title">
                                <input type="checkbox" value={ isTuesdayChecked } onChange={ handleTuesdayCheckbox }/> 
                                <label className="">Martes:</label>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Inicio de la jornada:</label>
                                <input type="time" name="tuesdayStartTime" disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Fin de la jornada:</label>
                                <input type="time" name="tuesdayEndTime" disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                            </div>
                        </div>
                        <hr/>
                        <div className="journal-row-container">
                            <div className="journal-row-title">
                                <input type="checkbox" value={ isWednesdayChecked } onChange={ handleWednesdayCheckbox }/> 
                                <label className="">Miércoles:</label>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Inicio de la jornada:</label>
                                <input type="time" name="wednesdayStartTime" disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Fin de la jornada:</label>
                                <input type="time" name="wednesdayEndTime" disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                            </div>
                        </div>
                        <hr/>
                        <div className="journal-row-container">
                            <div className="journal-row-title">
                                <input type="checkbox" value={ isThursdayChecked } onChange={ handleThursdayCheckbox }/> 
                                <label className="">Jueves:</label>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Inicio de la jornada:</label>
                                <input type="time" name="thursdayStartTime" disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Fin de la jornada:</label>
                                <input type="time" name="thursdayEndTime" disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                            </div>
                        </div>
                        <hr/>
                        <div className="journal-row-container">
                            <div className="journal-row-title">
                                <input type="checkbox" value={ isFridayChecked } onChange={ handleFridayCheckbox }/> 
                                <label className="">Viernes:</label>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Inicio de la jornada:</label>
                                <input type="time" name="fridayStartTime" disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Fin de la jornada:</label>
                                <input type="time" name="fridayEndTime" disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                            </div>
                        </div>
                        <hr/>
                        <div className="journal-row-container">
                            <div className="journal-row-title">
                                <input type="checkbox" value={ isSaturdayChecked } onChange={ handleSaturdayCheckbox }/> 
                                <label className="">Sábado:</label>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Inicio de la jornada:</label>
                                <input type="time" name="saturdayStartTime" disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Fin de la jornada:</label>
                                <input type="time" name="saturdayEndTime" disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                            </div>
                        </div>
                        <hr/>
                        <div className="journal-row-container">
                            <div className="journal-row-title">
                                <input type="checkbox" value={ isSundayChecked } onChange={ handleSundayCheckbox }/> 
                                <label className="">Domingo:</label>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Inicio de la jornada:</label>
                                <input type="time" name="sundayStartTime" disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                            </div>
                            <div className="journal-row-item">
                                <label className="">Fin de la jornada:</label>
                                <input type="time" name="sundayEndTime" disabled={ !isSundayChecked } onChange={ onInputChange }></input>
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
