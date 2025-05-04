import { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";

import { useForm } from "../hooks";
import { isEditingJournal, newJournalIsSet, setNewJournal, startCreatingNewJournal, startEditJournal } from "../store/journal";

import './components';
import { ModalWrapper } from "./components";

export const ModalEditJournal = () => {

    const [openModal, setOpenModal] = useState(false);

    const [isMondayChecked, setIsMondayChecked] = useState(false);
    const [isTuesdayChecked, setIsTuesdayChecked] = useState(false);
    const [isWednesdayChecked, setIsWednesdayChecked] = useState(false);
    const [isThursdayChecked, setIsThursdayChecked] = useState(false);
    const [isFridayChecked, setIsFridayChecked] = useState(false);
    const [isSaturdayChecked, setIsSaturdayChecked] = useState(false);
    const [isSundayChecked, setIsSundayChecked] = useState(false);
    
    const [monday, setMonday] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [tuesday, setTuesday] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [wednesday, setWednesday] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [thursday, setThursday] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [friday, setFriday] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [saturday, setSaturday] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [sunday, setSunday] = useState({
        journalAM: [],
        journalPM: [],
    });

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
        newJournal,
    } = useSelector((state) => state.journal);

    const {
        mondayConsultationDurationHours = '00',
        mondayConsultationDurationMinutes = '45',
        mondayPostConsultationDurationHours = '00',
        mondayPostConsultationDurationMinutes = '15',
        mondayStartTimeAM = '08:00',
        mondayStartTimePM = '14:00',
        mondayConsultationQuantityAM = '5',
        mondayConsultationQuantityPM = '4',
        tuesdayConsultationDurationHours = '00',
        tuesdayConsultationDurationMinutes = '45',
        tuesdayPostConsultationDurationHours = '00',
        tuesdayPostConsultationDurationMinutes = '15',
        tuesdayStartTimeAM = '08:00',
        tuesdayStartTimePM = '14:00',
        tuesdayConsultationQuantityAM = '5',
        tuesdayConsultationQuantityPM = '4',
        wednesdayConsultationDurationHours = '00',
        wednesdayConsultationDurationMinutes = '45',
        wednesdayPostConsultationDurationHours = '00',
        wednesdayPostConsultationDurationMinutes = '15',
        wednesdayStartTimeAM = '08:00',
        wednesdayStartTimePM = '14:00',
        wednesdayConsultationQuantityAM = '5',
        wednesdayConsultationQuantityPM = '4',
        thursdayConsultationDurationHours = '00',
        thursdayConsultationDurationMinutes = '45',
        thursdayPostConsultationDurationHours = '00',
        thursdayPostConsultationDurationMinutes = '15',
        thursdayStartTimeAM = '08:00',
        thursdayStartTimePM = '14:00',
        thursdayConsultationQuantityAM = '5',
        thursdayConsultationQuantityPM = '4',
        fridayConsultationDurationHours = '00',
        fridayConsultationDurationMinutes = '45',
        fridayPostConsultationDurationHours = '00',
        fridayPostConsultationDurationMinutes = '15',
        fridayStartTimeAM = '08:00',
        fridayStartTimePM = '14:00',
        fridayConsultationQuantityAM = '5',
        fridayConsultationQuantityPM = '4',
        saturdayConsultationDurationHours = '00',
        saturdayConsultationDurationMinutes = '45',
        saturdayPostConsultationDurationHours = '00',
        saturdayPostConsultationDurationMinutes = '15',
        saturdayStartTimeAM = '08:00',
        saturdayStartTimePM = '14:00',
        saturdayConsultationQuantityAM = '5',
        saturdayConsultationQuantityPM = '4',
        sundayConsultationDurationHours = '00',
        sundayConsultationDurationMinutes = '45',
        sundayPostConsultationDurationHours = '00',
        sundayPostConsultationDurationMinutes = '15',
        sundayStartTimeAM = '08:00',
        sundayStartTimePM = '14:00',
        sundayConsultationQuantityAM = '5',
        sundayConsultationQuantityPM = '4',
        // tuesdayStartTime = '08:00',
        // wednesdayStartTime = '08:00',
        // thursdayStartTime = '08:00',
        // fridayStartTime = '08:00',
        // saturdayStartTime = '08:00',
        // sundayStartTime = '08:00',
        // mondayConsultationDuration = '00:45',
        // mondayPostConsultationDuration = '00:15',
        // mondayConsultationPerDay = '10',
        // tuesdayConsultationDuration = '00:45',
        // tuesdayPostConsultationDuration = '00:15',
        // tuesdayConsultationPerDay = '10',
        // wednesdayConsultationDuration = '00:45',
        // wednesdayPostConsultationDuration = '00:15',
        // wednesdayConsultationPerDay = '10',
        // thursdayConsultationDuration = '00:45',
        // thursdayPostConsultationDuration = '00:15',
        // thursdayConsultationPerDay = '10',
        // fridayConsultationDuration = '00:45',
        // fridayPostConsultationDuration = '00:15',
        // fridayConsultationPerDay = '10',
        // saturdayConsultationDuration = '00:45',
        // saturdayPostConsultationDuration = '00:15',
        // saturdayConsultationPerDay = '10',
        // sundayConsultationDuration = '00:45',
        // sundayPostConsultationDuration = '00:15',
        // sundayConsultationPerDay = '10',
        onInputChange,
        formState } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();
        
        const newJournal = {
            monday: {},
            tuesday: {},
            wednesday: {},
            thursday: {},
            friday: {},
            saturday: {},
            sunday: {},
        }

        if( isMondayChecked ){
            // console.log( monday )
            newJournal.monday = monday;
        }
        if( isTuesdayChecked ){
            // console.log( tuesday )
            newJournal.tuesday = tuesday;
        }
        if( isWednesdayChecked ){
            // console.log( wednesday )
            newJournal.wednesday = wednesday;
        }
        if( isThursdayChecked ){
            // console.log( thursday )
            newJournal.thursday = thursday;
        }
        if( isFridayChecked ){
            // console.log( friday )
            newJournal.friday = friday;
        }
        if( isSaturdayChecked ){
            // console.log( saturday )
            newJournal.saturday = saturday;
        }
        if( isSundayChecked ){
            // console.log( sunday )
            newJournal.sunday = sunday;
        }

        // console.log('newJournal: ', newJournal)

        dispatch( startCreatingNewJournal( journalID, newJournal ) )

        onModalClose();
        
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

    const handleJournalPreview = ( consultationDurationHours, consultationDurationMinutes, postConsultationDurationHours, postConsultationDurationMinutes, consultationQuantityAM, consultationQuantityPM, startTimeAM, startTimePM ) => {
        
        const consultationDuration = consultationDurationHours + ':' + consultationDurationMinutes;

        const postConsultationDuration = postConsultationDurationHours + ':' + postConsultationDurationMinutes;

        const consultationInterval = handleSumOfTimeValues( consultationDuration, postConsultationDuration )
        
        const journalAM = []

        for (let i = 1; i <= consultationQuantityAM; i++) {
            
            if( i < 2 ){
                
                let startTime = startTimeAM;
                let endTime = handleSumOfTimeValues( startTimeAM, consultationDuration )
                journalAM?.push({ startTime: startTime, endTime: endTime });
            }else{
                let sumValue = '00:00';
                for (let j = 1; j < i; j++) {
                    
                    sumValue = handleSumOfTimeValues( sumValue, consultationInterval )
                    // console.log('sumValue: ', sumValue)
                }

                let startTime = handleSumOfTimeValues( startTimeAM, sumValue )
                let endTime = handleSumOfTimeValues( startTime, consultationDuration )
                journalAM?.push({ startTime: startTime, endTime: endTime });
            }
        }
        
        // console.log(journalAM)

        const journalPM = []

        for (let i = 1; i <= consultationQuantityPM; i++) {
            
            if( i < 2 ){
                
                let startTime = startTimePM;
                let endTime = handleSumOfTimeValues( startTimePM, consultationDuration )
                journalPM?.push({ startTime: startTime, endTime: endTime });
            }else{
                let sumValue = '00:00';
                for (let j = 1; j < i; j++) {
                    
                    sumValue = handleSumOfTimeValues( sumValue, consultationInterval )
                    // console.log('sumValue: ', sumValue)
                }

                let startTime = handleSumOfTimeValues( startTimePM, sumValue )
                let endTime = handleSumOfTimeValues( startTime, consultationDuration )
                journalPM?.push({ startTime: startTime, endTime: endTime });
            }
        }
        
        // console.log(journalPM)

        return{
            journalAM,
            journalPM
        }
        
    }

    const handleSumOfTimeValues = ( value1 , value2) => {

        let time1 = value1.split(':');
        let time2 = value2.split(':');
        
        let secondSum = Number(time1[1]) + Number(time2[1]);
        let minSum = Number(time1[0]) + Number(time2[0]);
        
        if(secondSum > 59){
          secondSum = Math.abs(60 - secondSum);
          minSum += 1;
        }
        
        if(secondSum < 10){
          secondSum = `0${secondSum}`;
        }
        
        if(minSum < 10){
          minSum = `0${minSum}`;
        }
        
        return `${minSum}:${secondSum}`;

    }

    useEffect(() => {
        setIsMondayChecked( false )
        setIsTuesdayChecked( false )
        setIsWednesdayChecked( false )
        setIsThursdayChecked( false )
        setIsFridayChecked( false )
        setIsSaturdayChecked( false )
        setIsSundayChecked( false )
    }, [ openModal ])

    useEffect(() => { 

        setMonday( handleJournalPreview( 
            mondayConsultationDurationHours,
            mondayConsultationDurationMinutes,
            mondayPostConsultationDurationHours,
            mondayPostConsultationDurationMinutes,
            mondayConsultationQuantityAM,
            mondayConsultationQuantityPM,
            mondayStartTimeAM,
            mondayStartTimePM
            ) );

    }, [mondayConsultationDurationHours,
        mondayConsultationDurationMinutes,
        mondayPostConsultationDurationHours,
        mondayPostConsultationDurationMinutes,
        mondayStartTimeAM,
        mondayConsultationQuantityAM,
        mondayStartTimePM,
        mondayConsultationQuantityPM])

    useEffect(() => {

        setTuesday( handleJournalPreview( 
            tuesdayConsultationDurationHours,
            tuesdayConsultationDurationMinutes,
            tuesdayPostConsultationDurationHours,
            tuesdayPostConsultationDurationMinutes,
            tuesdayConsultationQuantityAM,
            tuesdayConsultationQuantityPM,
            tuesdayStartTimeAM,
            tuesdayStartTimePM
            ) );

    }, [tuesdayConsultationDurationHours,
        tuesdayConsultationDurationMinutes,
        tuesdayPostConsultationDurationHours,
        tuesdayPostConsultationDurationMinutes,
        tuesdayStartTimeAM,
        tuesdayConsultationQuantityAM,
        tuesdayStartTimePM,
        tuesdayConsultationQuantityPM])

    useEffect(() => {

        setWednesday( handleJournalPreview( 
            wednesdayConsultationDurationHours,
            wednesdayConsultationDurationMinutes,
            wednesdayPostConsultationDurationHours,
            wednesdayPostConsultationDurationMinutes,
            wednesdayConsultationQuantityAM,
            wednesdayConsultationQuantityPM,
            wednesdayStartTimeAM,
            wednesdayStartTimePM
            ) );

    }, [wednesdayConsultationDurationHours,
        wednesdayConsultationDurationMinutes,
        wednesdayPostConsultationDurationHours,
        wednesdayPostConsultationDurationMinutes,
        wednesdayStartTimeAM,
        wednesdayConsultationQuantityAM,
        wednesdayStartTimePM,
        wednesdayConsultationQuantityPM])

    useEffect(() => {

        setThursday( handleJournalPreview( 
            thursdayConsultationDurationHours,
            thursdayConsultationDurationMinutes,
            thursdayPostConsultationDurationHours,
            thursdayPostConsultationDurationMinutes,
            thursdayConsultationQuantityAM,
            thursdayConsultationQuantityPM,
            thursdayStartTimeAM,
            thursdayStartTimePM
            ) );

    }, [thursdayConsultationDurationHours,
        thursdayConsultationDurationMinutes,
        thursdayPostConsultationDurationHours,
        thursdayPostConsultationDurationMinutes,
        thursdayStartTimeAM,
        thursdayConsultationQuantityAM,
        thursdayStartTimePM,
        thursdayConsultationQuantityPM])
        
    useEffect(() => {

        setFriday( handleJournalPreview( 
            fridayConsultationDurationHours,
            fridayConsultationDurationMinutes,
            fridayPostConsultationDurationHours,
            fridayPostConsultationDurationMinutes,
            fridayConsultationQuantityAM,
            fridayConsultationQuantityPM,
            fridayStartTimeAM,
            fridayStartTimePM
            ) );

    }, [fridayConsultationDurationHours,
        fridayConsultationDurationMinutes,
        fridayPostConsultationDurationHours,
        fridayPostConsultationDurationMinutes,
        fridayStartTimeAM,
        fridayConsultationQuantityAM,
        fridayStartTimePM,
        fridayConsultationQuantityPM])

    useEffect(() => {

        setSaturday( handleJournalPreview( 
            saturdayConsultationDurationHours,
            saturdayConsultationDurationMinutes,
            saturdayPostConsultationDurationHours,
            saturdayPostConsultationDurationMinutes,
            saturdayConsultationQuantityAM,
            saturdayConsultationQuantityPM,
            saturdayStartTimeAM,
            saturdayStartTimePM
            ) );

    }, [saturdayConsultationDurationHours,
        saturdayConsultationDurationMinutes,
        saturdayPostConsultationDurationHours,
        saturdayPostConsultationDurationMinutes,
        saturdayStartTimeAM,
        saturdayConsultationQuantityAM,
        saturdayStartTimePM,
        saturdayConsultationQuantityPM])

    useEffect(() => {

        setSunday( handleJournalPreview( 
            sundayConsultationDurationHours,
            sundayConsultationDurationMinutes,
            sundayPostConsultationDurationHours,
            sundayPostConsultationDurationMinutes,
            sundayConsultationQuantityAM,
            sundayConsultationQuantityPM,
            sundayStartTimeAM,
            sundayStartTimePM
            ) );

    }, [sundayConsultationDurationHours,
        sundayConsultationDurationMinutes,
        sundayPostConsultationDurationHours,
        sundayPostConsultationDurationMinutes,
        sundayStartTimeAM,
        sundayConsultationQuantityAM,
        sundayStartTimePM,
        sundayConsultationQuantityPM])

    return (
        <>
            <button className="btn-edit" type="button" onClick={ () => onModalOpen() }></button>
            <ModalWrapper
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                title="Editar agenda de consultas"
                footerButtons={[
                    { text: "Aplicar", onClick: onSubmit, className: "btn-modal-action" }
                ]}
            >
                <form>
                    <div className="modal-edit-journal-container-form">
                    <div className="custom-flex-column width-100">
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
                                <input className="custom-pr-2" type="checkbox" ref={ mondayCheckbox } value={ isMondayChecked } onChange={ handleMondayCheckbox }/>
                                Lunes
                                </label>
                                <div className="accordion-content modal-accordion-content custom-flex-column journal-content-background">
                                    <div className="journal-row-item gap-0">
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="mondayConsultationDurationHours" defaultValue='00' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="mondayConsultationDurationMinutes" defaultValue='45' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="mondayPostConsultationDurationHours" defaultValue='00' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="mondayPostConsultationDurationMinutes" defaultValue='15' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="custom-flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input className="font-metropolis-08" type="time" name="mondayStartTimeAM" defaultValue='08:00' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="mondayConsultationQuantityAM" defaultValue='5' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="custom-flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input className="font-metropolis-08" type="time" name="mondayStartTimePM" defaultValue='14:00' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="mondayConsultationQuantityPM" defaultValue='4' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item width-100">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-preview custom-flex-row width-100">
                                            <div className="AM-preview">
                                                { monday?.journalAM?.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lunch-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { monday?.journalPM?.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                name="patient_accordion"
                                id="tuesdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="tuesdayAccordion">
                                <input className="custom-pr-2" type="checkbox" ref={ tuesdayCheckbox } value={ isTuesdayChecked } onChange={ handleTuesdayCheckbox }/>
                                Martes
                                </label>
                                <div className="accordion-content modal-accordion-content custom-flex-column journal-content-background">
                                    <div className="journal-row-item gap-0">
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="tuesdayConsultationDurationHours" defaultValue='00' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="tuesdayConsultationDurationMinutes" defaultValue='45' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="tuesdayPostConsultationDurationHours" defaultValue='00' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="tuesdayPostConsultationDurationMinutes" defaultValue='15' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="custom-flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input className="font-metropolis-08" type="time" name="tuesdayStartTimeAM" defaultValue='08:00' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="tuesdayConsultationQuantityAM" defaultValue='5' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="custom-flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input className="font-metropolis-08" type="time" name="tuesdayStartTimePM" defaultValue='14:00' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="tuesdayConsultationQuantityPM" defaultValue='4' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item width-100">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-preview custom-flex-row width-100">
                                            <div className="AM-preview">
                                                { tuesday?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lunch-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { tuesday?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                name="patient_accordion"
                                id="wednesdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="wednesdayAccordion">
                                <input className="custom-pr-2" type="checkbox" ref={ wednesdayCheckbox } value={ isWednesdayChecked } onChange={ handleWednesdayCheckbox }/>
                                Miércoles
                                </label>
                                <div className="accordion-content modal-accordion-content custom-flex-column journal-content-background">
                                    <div className="journal-row-item gap-0">
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="wednesdayConsultationDurationHours" defaultValue='00' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="wednesdayConsultationDurationMinutes" defaultValue='45' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="wednesdayPostConsultationDurationHours" defaultValue='00' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="wednesdayPostConsultationDurationMinutes" defaultValue='15' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="custom-flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input className="font-metropolis-08" type="time" name="wednesdayStartTimeAM" defaultValue='08:00' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="wednesdayConsultationQuantityAM" defaultValue='5' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="custom-flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input className="font-metropolis-08" type="time" name="wednesdayStartTimePM" defaultValue='14:00' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="wednesdayConsultationQuantityPM" defaultValue='4' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item width-100">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-preview custom-flex-row width-100">
                                            <div className="AM-preview">
                                                { wednesday?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lunch-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { wednesday?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                name="patient_accordion"
                                id="thursdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="thursdayAccordion">
                                <input className="custom-pr-2" type="checkbox" ref={ thursdayCheckbox } value={ isThursdayChecked } onChange={ handleThursdayCheckbox }/>
                                Jueves
                                </label>
                                <div className="accordion-content modal-accordion-content custom-flex-column journal-content-background">
                                    <div className="journal-row-item gap-0">
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="thursdayConsultationDurationHours" defaultValue='00' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="thursdayConsultationDurationMinutes" defaultValue='45' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="thursdayPostConsultationDurationHours" defaultValue='00' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="thursdayPostConsultationDurationMinutes" defaultValue='15' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="custom-flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input className="font-metropolis-08" type="time" name="thursdayStartTimeAM" defaultValue='08:00' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="thursdayConsultationQuantityAM" defaultValue='5' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="custom-flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input className="font-metropolis-08" type="time" name="thursdayStartTimePM" defaultValue='14:00' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="thursdayConsultationQuantityPM" defaultValue='4' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item width-100">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-preview custom-flex-row width-100">
                                            <div className="AM-preview">
                                                { thursday?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lunch-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { thursday?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                name="patient_accordion"
                                id="fridayAccordion"
                                />
                                <label className="accordion-label" htmlFor="fridayAccordion">
                                <input className="custom-pr-2" type="checkbox" ref={ fridayCheckbox } value={ isFridayChecked } onChange={ handleFridayCheckbox }/>
                                Viernes
                                </label>
                                <div className="accordion-content modal-accordion-content custom-flex-column journal-content-background">
                                    <div className="journal-row-item gap-0">
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="fridayConsultationDurationHours" defaultValue='00' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="fridayConsultationDurationMinutes" defaultValue='45' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="fridayPostConsultationDurationHours" defaultValue='00' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="fridayPostConsultationDurationMinutes" defaultValue='15' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="custom-flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input className="font-metropolis-08" type="time" name="fridayStartTimeAM" defaultValue='08:00' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="fridayConsultationQuantityAM" defaultValue='5' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="custom-flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input className="font-metropolis-08" type="time" name="fridayStartTimePM" defaultValue='14:00' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="fridayConsultationQuantityPM" defaultValue='4' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item width-100">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-preview custom-flex-row width-100">
                                            <div className="AM-preview">
                                                { friday?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lunch-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { friday?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                name="patient_accordion"
                                id="saturdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="saturdayAccordion">
                                <input className="custom-pr-2" type="checkbox" ref={ saturdayCheckbox } value={ isSaturdayChecked } onChange={ handleSaturdayCheckbox }/>
                                Sábado
                                </label>
                                <div className="accordion-content modal-accordion-content custom-flex-column journal-content-background">
                                    <div className="journal-row-item gap-0">
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="saturdayConsultationDurationHours" defaultValue='00' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="saturdayConsultationDurationMinutes" defaultValue='45' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="saturdayPostConsultationDurationHours" defaultValue='00' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="saturdayPostConsultationDurationMinutes" defaultValue='15' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="custom-flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input className="font-metropolis-08" type="time" name="saturdayStartTimeAM" defaultValue='08:00' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="saturdayConsultationQuantityAM" defaultValue='5' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="custom-flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input className="font-metropolis-08" type="time" name="saturdayStartTimePM" defaultValue='14:00' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="saturdayConsultationQuantityPM" defaultValue='4' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item width-100">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-preview custom-flex-row width-100">
                                            <div className="AM-preview">
                                                { saturday?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lunch-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { saturday?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="journal-row-container">
                            <div className="modal-accordion width-100">
                                <input
                                className="accordion-input"
                                type="checkbox"
                                name="patient_accordion"
                                id="sundayAccordion"
                                />
                                <label className="accordion-label" htmlFor="sundayAccordion">
                                <input className="custom-pr-2" type="checkbox" ref={ sundayCheckbox } value={ isSundayChecked } onChange={ handleSundayCheckbox }/>
                                Domingo
                                </label>
                                <div className="accordion-content modal-accordion-content custom-flex-column journal-content-background">
                                    <div className="journal-row-item gap-0">
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="sundayConsultationDurationHours" defaultValue='00' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div className="custom-flex-row">
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="sundayConsultationDurationMinutes" defaultValue='45' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="sundayPostConsultationDurationHours" defaultValue='00' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                    Horas

                                                </div>
                                                <div>
                                                    <input className="font-metropolis-08 consultation-duration-input" type="number" name="sundayPostConsultationDurationMinutes" defaultValue='15' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                    Minutos

                                                </div>
                                            </div>
                                        </div>                                        
                                        <div className="journal-item-background journal-row-item custom-flex-row">
                                            <div className="custom-flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input className="font-metropolis-08" type="time" name="sundayStartTimeAM" defaultValue='08:00' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="sundayConsultationQuantityAM" defaultValue='5' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="custom-flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input className="font-metropolis-08" type="time" name="sundayStartTimePM" defaultValue='14:00' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number font-metropolis-08" type="number" name="sundayConsultationQuantityPM" defaultValue='4' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item width-100">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-preview custom-flex-row width-100">
                                            <div className="AM-preview">
                                                { sunday?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="lunch-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { sunday?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="journal-consultation-preview-container" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="journal-consultation-preview">{ consultationSlot.startTime + ' - ' + consultationSlot.endTime }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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
                        {/* <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Aplicar
                            </button>
                        </div> */}
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
            </ModalWrapper>
        </>
    )
}
