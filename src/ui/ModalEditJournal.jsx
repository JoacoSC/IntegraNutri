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
    
    const [mondayJournal, setMondayJournal] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [tuesdayJournal, setTuesdayJournal] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [wednesdayJournal, setWednesdayJournal] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [thursdayJournal, setThursdayJournal] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [fridayJournal, setFridayJournal] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [saturdayJournal, setSaturdayJournal] = useState({
        journalAM: [],
        journalPM: [],
    });
    const [sundayJournal, setSundayJournal] = useState({
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
    } = useSelector((state) => state.journal);

    const {
        mondayConsultationDuration = '00:45',
        mondayPostConsultationDuration = '00:15',
        mondayStartTimeAM = '08:00',
        mondayStartTimePM = '14:00',
        mondayConsultationQuantityAM = '5',
        mondayConsultationQuantityPM = '4',
        tuesdayConsultationDuration = '00:45',
        tuesdayPostConsultationDuration = '00:15',
        tuesdayStartTimeAM = '08:00',
        tuesdayStartTimePM = '14:00',
        tuesdayConsultationQuantityAM = '5',
        tuesdayConsultationQuantityPM = '4',
        wednesdayConsultationDuration = '00:45',
        wednesdayPostConsultationDuration = '00:15',
        wednesdayStartTimeAM = '08:00',
        wednesdayStartTimePM = '14:00',
        wednesdayConsultationQuantityAM = '5',
        wednesdayConsultationQuantityPM = '4',
        thursdayConsultationDuration = '00:45',
        thursdayPostConsultationDuration = '00:15',
        thursdayStartTimeAM = '08:00',
        thursdayStartTimePM = '14:00',
        thursdayConsultationQuantityAM = '5',
        thursdayConsultationQuantityPM = '4',
        fridayConsultationDuration = '00:45',
        fridayPostConsultationDuration = '00:15',
        fridayStartTimeAM = '08:00',
        fridayStartTimePM = '14:00',
        fridayConsultationQuantityAM = '5',
        fridayConsultationQuantityPM = '4',
        saturdayConsultationDuration = '00:45',
        saturdayPostConsultationDuration = '00:15',
        saturdayStartTimeAM = '08:00',
        saturdayStartTimePM = '14:00',
        saturdayConsultationQuantityAM = '5',
        saturdayConsultationQuantityPM = '4',
        sundayConsultationDuration = '00:45',
        sundayPostConsultationDuration = '00:15',
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

        // TODO: El journal ideal debe tener:
        // 
        // El código Unix de cada hora de consulta, esté disponible o no
        // Bajo el código Unix debe haber una propiedad que me indique si la hora de consulta está disponible
        // Otra propiedad con los datos del paciente que agendó esa hora de consulta
        // 
        // 

        console.log({
            mondayConsultationDuration,
            mondayPostConsultationDuration,
            mondayStartTimeAM,
            mondayStartTimePM,
            mondayConsultationQuantityAM,
            mondayConsultationQuantityPM
        })

        // const journalParams = {
        //     workingDays: {
        //         Monday: {
        //             startTime: '09:00',
        //             consultationDuration: '00:45',
        //             consultationsPerDay: 8,
        //         },
        //         Wednesday: {
        //             startTime: '10:00',
        //             consultationDuration: '01:00',
        //             consultationsPerDay: 6,
        //         },
        //         Friday: {
        //             startTime: '09:30',
        //             consultationDuration: '00:45',
        //             consultationsPerDay: 6,
        //         }
        //     }
        // }
        // const journal = {
            
        //     // Unix del día a las 12:00, para calcular el día de la semana, numero de día, etc.
        //     347839273400: {
        //         dayName: 'Monday',
        //         isWorkingDay: boolean,
        //         consultationSlots: {     // En el JournalPage se comparará a través de un arreglo que contenga los días desde hoy
        //                             // hasta 60 días ( o más )
        //             // Horas del día
        //             347839273400: {
        //                 isAvailable: boolean,
        //                 patientData: {
        //                     // Patient data
        //                 }
        //             },
        //             347843234500: {
        //                 isAvailable: boolean,
        //                 patientData: {
        //                     // Patient data
        //                 }
        //             },
        //             347838767600: {
        //                 isAvailable: boolean,
        //                 patientData: {
        //                     // Patient data
        //                 }
        //             },
        //         }
        //     }

        // } 
        
        // if( isMondayChecked ){
        //     console.log({mondayStartTime, mondayEndTime})
        // }
        // if( isTuesdayChecked ){
        //     console.log({tuesdayStartTime, tuesdayEndTime})
        // }
        // if( isWednesdayChecked ){
        //     console.log({wednesdayStartTime, wednesdayEndTime})
        // }
        // if( isThursdayChecked ){
        //     console.log({thursdayStartTime, thursdayEndTime})
        // }
        // if( isFridayChecked ){
        //     console.log({fridayStartTime, fridayEndTime})
        // }
        // if( isSaturdayChecked ){
        //     console.log({saturdayStartTime, saturdayEndTime})
        // }
        // if( isSundayChecked ){
        //     console.log({sundayStartTime, sundayEndTime})
        // }

        // console.log(isMondayChecked)
        // console.log(isTuesdayChecked)
        // console.log(isWednesdayChecked)
        // console.log(isThursdayChecked)
        // console.log(isFridayChecked)
        // console.log(isSaturdayChecked)
        // console.log(isSundayChecked)
        
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

    const handleJournalPreview = ( consultationDuration, postConsultationDuration, consultationQuantityAM, consultationQuantityPM, startTimeAM, startTimePM ) => {
        
        const consultationInterval = handleSumOfTimeValues( consultationDuration, postConsultationDuration )
        
        const journalAM = []

        for (let i = 1; i <= consultationQuantityAM; i++) {
            
            if( i < 2 ){
                
                let startTime = startTimeAM;
                let endTime = handleSumOfTimeValues( startTimeAM, consultationDuration )
                journalAM?.push([ startTime, endTime ]);
            }else{
                let sumValue = '00:00';
                for (let j = 1; j < i; j++) {
                    
                    sumValue = handleSumOfTimeValues( sumValue, consultationInterval )
                    // console.log('sumValue: ', sumValue)
                }

                let startTime = handleSumOfTimeValues( startTimeAM, sumValue )
                let endTime = handleSumOfTimeValues( startTime, consultationDuration )
                journalAM.push([ startTime, endTime ]);
            }
        }
        
        // console.log(journalAM)

        const journalPM = []

        for (let i = 1; i <= consultationQuantityPM; i++) {
            
            if( i < 2 ){
                
                let startTime = startTimePM;
                let endTime = handleSumOfTimeValues( startTimePM, consultationDuration )
                journalPM?.push([ startTime, endTime ]);
            }else{
                let sumValue = '00:00';
                for (let j = 1; j < i; j++) {
                    
                    sumValue = handleSumOfTimeValues( sumValue, consultationInterval )
                    // console.log('sumValue: ', sumValue)
                }

                let startTime = handleSumOfTimeValues( startTimePM, sumValue )
                let endTime = handleSumOfTimeValues( startTime, consultationDuration )
                journalPM.push([ startTime, endTime ]);
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

        setMondayJournal( handleJournalPreview( 
            mondayConsultationDuration,
            mondayPostConsultationDuration,
            mondayConsultationQuantityAM,
            mondayConsultationQuantityPM,
            mondayStartTimeAM,
            mondayStartTimePM
            ) );

    }, [mondayConsultationDuration,
        mondayPostConsultationDuration,
        mondayStartTimeAM,
        mondayConsultationQuantityAM,
        mondayStartTimePM,
        mondayConsultationQuantityPM])

    useEffect(() => {

        setTuesdayJournal( handleJournalPreview( 
            tuesdayConsultationDuration,
            tuesdayPostConsultationDuration,
            tuesdayConsultationQuantityAM,
            tuesdayConsultationQuantityPM,
            tuesdayStartTimeAM,
            tuesdayStartTimePM
            ) );

    }, [tuesdayConsultationDuration,
        tuesdayPostConsultationDuration,
        tuesdayStartTimeAM,
        tuesdayConsultationQuantityAM,
        tuesdayStartTimePM,
        tuesdayConsultationQuantityPM])

    useEffect(() => {

        setWednesdayJournal( handleJournalPreview( 
            wednesdayConsultationDuration,
            wednesdayPostConsultationDuration,
            wednesdayConsultationQuantityAM,
            wednesdayConsultationQuantityPM,
            wednesdayStartTimeAM,
            wednesdayStartTimePM
            ) );

    }, [wednesdayConsultationDuration,
        wednesdayPostConsultationDuration,
        wednesdayStartTimeAM,
        wednesdayConsultationQuantityAM,
        wednesdayStartTimePM,
        wednesdayConsultationQuantityPM])

    useEffect(() => {

        setThursdayJournal( handleJournalPreview( 
            thursdayConsultationDuration,
            thursdayPostConsultationDuration,
            thursdayConsultationQuantityAM,
            thursdayConsultationQuantityPM,
            thursdayStartTimeAM,
            thursdayStartTimePM
            ) );

    }, [thursdayConsultationDuration,
        thursdayPostConsultationDuration,
        thursdayStartTimeAM,
        thursdayConsultationQuantityAM,
        thursdayStartTimePM,
        thursdayConsultationQuantityPM])
        
    useEffect(() => {

        setFridayJournal( handleJournalPreview( 
            fridayConsultationDuration,
            fridayPostConsultationDuration,
            fridayConsultationQuantityAM,
            fridayConsultationQuantityPM,
            fridayStartTimeAM,
            fridayStartTimePM
            ) );

    }, [fridayConsultationDuration,
        fridayPostConsultationDuration,
        fridayStartTimeAM,
        fridayConsultationQuantityAM,
        fridayStartTimePM,
        fridayConsultationQuantityPM])

    useEffect(() => {

        setSaturdayJournal( handleJournalPreview( 
            saturdayConsultationDuration,
            saturdayPostConsultationDuration,
            saturdayConsultationQuantityAM,
            saturdayConsultationQuantityPM,
            saturdayStartTimeAM,
            saturdayStartTimePM
            ) );

    }, [saturdayConsultationDuration,
        saturdayPostConsultationDuration,
        saturdayStartTimeAM,
        saturdayConsultationQuantityAM,
        saturdayStartTimePM,
        saturdayConsultationQuantityPM])

    useEffect(() => {

        setSundayJournal( handleJournalPreview( 
            sundayConsultationDuration,
            sundayPostConsultationDuration,
            sundayConsultationQuantityAM,
            sundayConsultationQuantityPM,
            sundayStartTimeAM,
            sundayStartTimePM
            ) );

    }, [sundayConsultationDuration,
        sundayPostConsultationDuration,
        sundayStartTimeAM,
        sundayConsultationQuantityAM,
        sundayStartTimePM,
        sundayConsultationQuantityPM])

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
                                <div className="accordion-content modal-accordion-content flex-column">
                                    <div className="journal-row-item">
                                        <div className="journal-row-item flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <input type="time" name="mondayConsultationDuration" defaultValue='00:45' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <input type="time" name="mondayPostConsultationDuration" defaultValue='00:15' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                            </div>
                                        </div>                                        
                                        <div className="journal-row-item flex-row">
                                            <div className="flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input type="time" name="mondayStartTimeAM" defaultValue='08:00' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number" type="number" name="mondayConsultationQuantityAM" defaultValue='5' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input type="time" name="mondayStartTimePM" defaultValue='14:00' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number" type="number" name="mondayConsultationQuantityPM" defaultValue='4' disabled={ !isMondayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-monday-preview flex-row">
                                            <div className="AM-preview">
                                                { mondayJournal?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="background-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { mondayJournal?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
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
                                defaultChecked
                                name="patient_accordion"
                                id="tuesdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="tuesdayAccordion">
                                <input type="checkbox" ref={ tuesdayCheckbox } value={ isTuesdayChecked } onChange={ handleTuesdayCheckbox }/>
                                Martes
                                </label>
                                <div className="accordion-content modal-accordion-content flex-column">
                                    <div className="journal-row-item">
                                        <div className="journal-row-item flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <input type="time" name="tuesdayConsultationDuration" defaultValue='00:45' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <input type="time" name="tuesdayPostConsultationDuration" defaultValue='00:15' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                        </div>                                        
                                        <div className="journal-row-item flex-row">
                                            <div className="flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input type="time" name="tuesdayStartTimeAM" defaultValue='08:00' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number" type="number" name="tuesdayConsultationQuantityAM" defaultValue='5' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input type="time" name="tuesdayStartTimePM" defaultValue='14:00' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number" type="number" name="tuesdayConsultationQuantityPM" defaultValue='4' disabled={ !isTuesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-tuesday-preview flex-row">
                                            <div className="AM-preview">
                                                { tuesdayJournal?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="background-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { tuesdayJournal?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
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
                                defaultChecked
                                name="patient_accordion"
                                id="wednesdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="wednesdayAccordion">
                                <input type="checkbox" ref={ wednesdayCheckbox } value={ isWednesdayChecked } onChange={ handleWednesdayCheckbox }/>
                                Miércoles
                                </label>
                                <div className="accordion-content modal-accordion-content flex-column">
                                    <div className="journal-row-item">
                                        <div className="journal-row-item flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <input type="time" name="wednesdayConsultationDuration" defaultValue='00:45' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <input type="time" name="wednesdayPostConsultationDuration" defaultValue='00:15' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                        </div>                                        
                                        <div className="journal-row-item flex-row">
                                            <div className="flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input type="time" name="wednesdayStartTimeAM" defaultValue='08:00' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number" type="number" name="wednesdayConsultationQuantityAM" defaultValue='5' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input type="time" name="wednesdayStartTimePM" defaultValue='14:00' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number" type="number" name="wednesdayConsultationQuantityPM" defaultValue='4' disabled={ !isWednesdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-wednesday-preview flex-row">
                                            <div className="AM-preview">
                                                { wednesdayJournal?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="background-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { wednesdayJournal?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
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
                                defaultChecked
                                name="patient_accordion"
                                id="thursdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="thursdayAccordion">
                                <input type="checkbox" ref={ thursdayCheckbox } value={ isThursdayChecked } onChange={ handleThursdayCheckbox }/>
                                Jueves
                                </label>
                                <div className="accordion-content modal-accordion-content flex-column">
                                    <div className="journal-row-item">
                                        <div className="journal-row-item flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <input type="time" name="thursdayConsultationDuration" defaultValue='00:45' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <input type="time" name="thursdayPostConsultationDuration" defaultValue='00:15' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                        </div>                                        
                                        <div className="journal-row-item flex-row">
                                            <div className="flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input type="time" name="thursdayStartTimeAM" defaultValue='08:00' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number" type="number" name="thursdayConsultationQuantityAM" defaultValue='5' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input type="time" name="thursdayStartTimePM" defaultValue='14:00' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number" type="number" name="thursdayConsultationQuantityPM" defaultValue='4' disabled={ !isThursdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-thursday-preview flex-row">
                                            <div className="AM-preview">
                                                { thursdayJournal?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="background-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { thursdayJournal?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
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
                                defaultChecked
                                name="patient_accordion"
                                id="fridayAccordion"
                                />
                                <label className="accordion-label" htmlFor="fridayAccordion">
                                <input type="checkbox" ref={ fridayCheckbox } value={ isFridayChecked } onChange={ handleFridayCheckbox }/>
                                Viernes
                                </label>
                                <div className="accordion-content modal-accordion-content flex-column">
                                    <div className="journal-row-item">
                                        <div className="journal-row-item flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <input type="time" name="fridayConsultationDuration" defaultValue='00:45' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <input type="time" name="fridayPostConsultationDuration" defaultValue='00:15' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                            </div>
                                        </div>                                        
                                        <div className="journal-row-item flex-row">
                                            <div className="flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input type="time" name="fridayStartTimeAM" defaultValue='08:00' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number" type="number" name="fridayConsultationQuantityAM" defaultValue='5' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input type="time" name="fridayStartTimePM" defaultValue='14:00' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number" type="number" name="fridayConsultationQuantityPM" defaultValue='4' disabled={ !isFridayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-friday-preview flex-row">
                                            <div className="AM-preview">
                                                { fridayJournal?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="background-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { fridayJournal?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
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
                                defaultChecked
                                name="patient_accordion"
                                id="saturdayAccordion"
                                />
                                <label className="accordion-label" htmlFor="saturdayAccordion">
                                <input type="checkbox" ref={ saturdayCheckbox } value={ isSaturdayChecked } onChange={ handleSaturdayCheckbox }/>
                                Sábado
                                </label>
                                <div className="accordion-content modal-accordion-content flex-column">
                                    <div className="journal-row-item">
                                        <div className="journal-row-item flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <input type="time" name="saturdayConsultationDuration" defaultValue='00:45' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <input type="time" name="saturdayPostConsultationDuration" defaultValue='00:15' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                            </div>
                                        </div>                                        
                                        <div className="journal-row-item flex-row">
                                            <div className="flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input type="time" name="saturdayStartTimeAM" defaultValue='08:00' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number" type="number" name="saturdayConsultationQuantityAM" defaultValue='5' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input type="time" name="saturdayStartTimePM" defaultValue='14:00' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number" type="number" name="saturdayConsultationQuantityPM" defaultValue='4' disabled={ !isSaturdayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-saturday-preview flex-row">
                                            <div className="AM-preview">
                                                { saturdayJournal?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="background-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { saturdayJournal?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
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
                                defaultChecked
                                name="patient_accordion"
                                id="sundayAccordion"
                                />
                                <label className="accordion-label" htmlFor="sundayAccordion">
                                <input type="checkbox" ref={ sundayCheckbox } value={ isSundayChecked } onChange={ handleSundayCheckbox }/>
                                Domingo
                                </label>
                                <div className="accordion-content modal-accordion-content flex-column">
                                    <div className="journal-row-item">
                                        <div className="journal-row-item flex-row">
                                            <div className="journal-row-item">
                                                <label className="">Duración de cada consulta:</label>
                                                <input type="time" name="sundayConsultationDuration" defaultValue='00:45' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                            </div>
                                            <div className="journal-row-item">
                                                <label className="">Descanso post-consulta:</label>
                                                <input type="time" name="sundayPostConsultationDuration" defaultValue='00:15' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                            </div>
                                        </div>                                        
                                        <div className="journal-row-item flex-row">
                                            <div className="flex-column">
                                                <label className="">Jornada AM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada AM:</label>
                                                    <input type="time" name="sundayStartTimeAM" defaultValue='08:00' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada AM:</label>
                                                    <input className="journal-input-number" type="number" name="sundayConsultationQuantityAM" defaultValue='5' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                            <div className="flex-column">
                                                <label className="">Jornada PM</label>
                                                <div className="journal-row-item">
                                                    <label className="">Inicio de la jornada PM:</label>
                                                    <input type="time" name="sundayStartTimePM" defaultValue='14:00' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                                <div className="journal-row-item">
                                                    <label className="">Cantidad de consultas de jornada PM:</label>
                                                    <input className="journal-input-number" type="number" name="sundayConsultationQuantityPM" defaultValue='4' disabled={ !isSundayChecked } onChange={ onInputChange }></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-content modal-accordion-content journal-preview-container">
                                    <div className="journal-row-item">
                                        <label className="">Previsualización de la jornada:</label>
                                        <div className="journal-sunday-preview flex-row">
                                            <div className="AM-preview">
                                                { sundayJournal?.journalAM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
                                                        {/* <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div> */}
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="background-preview">Almuerzo</div>
                                            <div className="PM-preview">
                                                { sundayJournal?.journalPM.map( (consultationSlot, index) => (

                                                    <div className="day" key={ index }>
                                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                                        <div className="day-ellipse">{ consultationSlot[0] + ' - ' + consultationSlot[1] }</div>
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
