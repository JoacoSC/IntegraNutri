import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale'
import { add, format, fromUnixTime, getUnixTime, set } from 'date-fns'

import { startLogout } from '../../store/auth';
import { AppLayout } from '../../layout/AppLayout';
import { Footer, ModalDeleteConsultation, ModalNewConsultation } from '../../ui'
import { setDefaultOptions } from 'date-fns/esm';
import { Link } from 'react-router-dom';
import { ModalEditJournal } from '../../ui/ModalEditJournal';
import { startLoadingMyJournal } from '../../store/journal';
import { clearCurrentPatient } from '../../store/currentPatient';
import { LoadingScreen } from '../../ui/LoadingScreen';
import { ModalWelcome } from '../../ui/ModalWelcome';

export const JournalPage = () => {

    setDefaultOptions({ locale: es })

    const dispatch = useDispatch();

    const { uid, displayName } = useSelector( state => state.auth )
    
    const { patients } = useSelector( state => state.patients )

    const { isNutritionist } = useSelector( state => state.userInfo )

    const {
        journalID,
        workingDayStartHours,
        workingDayStartMinutes,
        consultationHours,
        consultationMinutes,
        consultationsPerDay,
        journalIsSet,
        isEditingJournal,
        newJournalIsSet,
        newJournal,
    } = useSelector((state) => state.journal);

    // console.log(
    //     'workingDayStartHours: ', workingDayStartHours,
    //     'workingDayStartMinutes: ', workingDayStartMinutes,
    //     'consultationHours: ', consultationHours,
    //     'consultationMinutes: ', consultationMinutes,
    //     'consultationsPerDay: ', consultationsPerDay,
    //     )

    // console.log(workingDayStartHours,
    //     workingDayStartMinutes,
    //     consultationHours,
    //     consultationMinutes,
    //     consultationsPerDay)
    
    const [ daysArray, setDaysArray ] = useState([ new Date() ]);

    const [currentDay, setCurrentDay] = useState(
      set(new Date(), {
        hours: workingDayStartHours,
        minutes: workingDayStartMinutes,
        seconds: 0,
        miliseconds: 0,
      })
    );

    const [consultationSlotsArray, setConsultationSlotsArray] = useState([]);

    const [isLoading, setIsLoading] = useState( true );

    const [updateJournal, setUpdateJournal] = useState(false);

    const [isAddingNewConsultation, setIsAddingNewConsultation] = useState(false);
    
    const [workingDaysArray, setWorkingDaysArray] = useState([]);

    const [patientsNumber, setPatientsNumber] = useState(0)

    // const [patientNextConsultationCounter, setPatientNextConsultationCounter] = useState(0)

    const daysRef = useRef( new Array() );

    // const [isEditingJournal, setIsEditingJournal] = useMemo( () => /* ALGO */  );
    
    const daysRange = 60;

    // console.log(consultationSlotsArray)


    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleCurrentDay = ( key ) => {
        
        if( newJournal === undefined ){

            const currentDay = daysArray[ key ];
            const formattedCurrentDay = set(currentDay, {
              hours: workingDayStartHours,
              minutes: workingDayStartMinutes,
              seconds: 0,
              miliseconds: 0,
            });
            setCurrentDay( formattedCurrentDay );
        }else{
            const currentDay = daysArray[ key ];

            // monday

            if( newJournal?.monday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'lunes' ){
                    if( newJournal?.monday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.monday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.monday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.monday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.monday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // monday
            // tuesday

            if( newJournal?.tuesday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'martes' ){
                    if( newJournal?.tuesday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.tuesday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.tuesday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.tuesday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.tuesday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // tuesday
            // wednesday

            if( newJournal?.wednesday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'miércoles' ){
                    if( newJournal?.wednesday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.wednesday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.wednesday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.wednesday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.wednesday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // wednesday
            // thursday

            if( newJournal?.thursday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'jueves' ){
                    if( newJournal?.thursday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.thursday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.thursday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.thursday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.thursday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // thursday
            // friday

            if( newJournal?.friday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'viernes' ){
                    if( newJournal?.friday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.friday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.friday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.friday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.friday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // friday
            // saturday

            if( newJournal?.saturday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'sábado' ){
                    if( newJournal?.saturday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.saturday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.saturday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.saturday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.saturday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // saturday
            // sunday

            if( newJournal?.sunday?.journalAM !== undefined ){
                if( format( currentDay, "iiii") === 'domingo' ){
                    if( newJournal?.sunday?.journalAM.length > 0 ){
                        
                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.sunday.journalAM[0].startTime.slice(0, 2),
                          minutes: newJournal.sunday.journalAM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }else{

                        const formattedCurrentDay = set(currentDay, {
                          hours: newJournal.sunday.journalPM[0].startTime.slice(0, 2),
                          minutes: newJournal.sunday.journalPM[0].startTime.slice(3, 5),
                          seconds: 0,
                          miliseconds: 0,
                        });
                        // console.log('formattedCurrentDay :', formattedCurrentDay)
                        setCurrentDay( formattedCurrentDay );
                    }
                }
            }
            

            // sunday
            
            
            // setCurrentDay( formattedCurrentDay );
        }
    }

    const handleWorkingDaysArray = () => {
        const tempArray = []

        if( newJournal?.monday?.journalAM !== undefined || newJournal?.monday?.journalPM !== undefined ){
            tempArray.push('lunes');
        }
        if( newJournal?.tuesday?.journalAM !== undefined || newJournal?.tuesday?.journalPM !== undefined ){
            tempArray.push('martes');
        }
        if( newJournal?.wednesday?.journalAM !== undefined || newJournal?.wednesday?.journalPM !== undefined ){
            tempArray.push('miércoles');
        }
        if( newJournal?.thursday?.journalAM !== undefined || newJournal?.thursday?.journalPM !== undefined ){
            tempArray.push('jueves');
        }
        if( newJournal?.friday?.journalAM !== undefined || newJournal?.friday?.journalPM !== undefined ){
            tempArray.push('viernes');
        }
        if( newJournal?.saturday?.journalAM !== undefined || newJournal?.saturday?.journalPM !== undefined ){
            tempArray.push('sábado');
        }
        if( newJournal?.sunday?.journalAM !== undefined || newJournal?.sunday?.journalPM !== undefined ){
            tempArray.push('domingo');
        }
        setWorkingDaysArray( tempArray )
    }

    const onLogout = () => {
        
        dispatch( startLogout() );

    }
    
    useEffect(() => {
        const array = []
        
        for (let i = 0; i < daysRange; i++) {
            array.push(add(new Date(), { days: i }));
        }
        
        setDaysArray(array)
        
    }, []);
        

    // const hora = getUnixTime(set(new Date(), {
    //     hours: 9,
    //     minutes: 30,
    //     seconds: 0,
    //     miliseconds: 0,
    //     }))

    // console.log(hora)
    // console.log(fromUnixTime(1670585400))
    
    // console.log(patients)
    
    patients.forEach(function callback(patient, patientIndex) {

        // console.log(`${patientIndex}: ${patient.nextConsultation}`);
        // console.log(consultationSlotsArray)

        consultationSlotsArray.forEach(function callback(consultationSlot, consultationIndex) {
        
            // console.log(consultationSlot)
            if (consultationSlot.startTime == patient.nextConsultation) {
                // setPatientNextConsultationCounter(patientNextConsultationCounter + 1);
                // console.log('patientNextConsultationCounter: ', patientNextConsultationCounter)
                // console.log(`${consultationIndex}: ${consultationIndex} - ${patientIndex}: ${patient.nextConsultation}`)
                consultationSlotsArray[consultationIndex] = {...consultationSlot, patient }
                // console.log(consultationSlot)
                console.log('consultationSlotsArray :', consultationSlotsArray)
            }
            
        });

        // console.log('consultationSlotsArray: ',consultationSlotsArray)
        
    });

    // console.log(consultationSlotsArray)

    // dispatch ( startLoadingMyJournal( uid ) );
    
        
        // setDaysArray(array)

    const handleConsultationSlotsArrayGeneration = () => {

        if( newJournal === undefined ){
        
            const array = []
            let tempCurrentDay = currentDay
            array[0] = getUnixTime(currentDay)
    
            for (let i = 1; i < consultationsPerDay; i++) {
                tempCurrentDay = add(tempCurrentDay, {
                  hours: consultationHours,
                  minutes: consultationMinutes,
                });
                array[i] = getUnixTime(tempCurrentDay)
                // console.log(array[i])
                
            }
            // console.log('array: ', array)
            setConsultationSlotsArray( array )
        }else{

            // console.log('currentDay :', currentDay)

            // monday

            if( format( currentDay, "iiii") === 'lunes' ){

    
                if( newJournal?.monday?.journalAM !== undefined ){
    
                    const array = []
                    let tempCurrentDay = currentDay
                    let index = 0;
        
                    if( newJournal.monday.journalAM.length > 0 ){
                        // console.log('first')
        
                        const arrayAMLength = newJournal.monday.journalAM.length
                        array[ index ] = {
                                            startTime: getUnixTime(currentDay),
                                            endTime: getUnixTime( add( currentDay, {
                                                hours: newJournal.monday.journalAM[0].endTime.slice(0, 2),
                                                minutes: newJournal.monday.journalAM[0].endTime.slice(3, 5),
                                            } ) ),
                                        }
        
                        for (let i = 1; i < arrayAMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.monday.journalAM[i].startTime.slice(0, 2),
                                minutes: newJournal.monday.journalAM[i].startTime.slice(3, 5),
                            });
                            array[i] =  {
                                            startTime: getUnixTime(tempCurrentDay),
                                            endTime: getUnixTime( add( tempCurrentDay, {
                                                hours: newJournal.monday.journalAM[i].endTime.slice(0, 2),
                                                minutes: newJournal.monday.journalAM[i].endTime.slice(3, 5),
                                            } ) ),
                                        }
                            // console.log(array[i])
                        }
        
                        index = index + arrayAMLength;
                    }
        
                    if( newJournal.monday.journalPM.length > 0 ){
                        // console.log('second')
        
                        const arrayPMLength = newJournal.monday.journalPM.length
                        array[ index ] = {
                                            startTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.monday.journalPM[0].startTime.slice(0, 2),
                                                    minutes: newJournal.monday.journalPM[0].startTime.slice(3, 5),
                                                })),
                                            endTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.monday.journalPM[0].endTime.slice(0, 2),
                                                    minutes: newJournal.monday.journalPM[0].endTime.slice(3, 5),
                                                })),
                                        }
        
                        for (let i = 1; i < arrayPMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.monday.journalPM[i].startTime.slice(0, 2),
                                minutes: newJournal.monday.journalPM[i].startTime.slice(3, 5),
                            });
                            array[index + i] = {
                                                    startTime: getUnixTime(tempCurrentDay),
                                                    endTime: getUnixTime( add( tempCurrentDay, {
                                                        hours: newJournal.monday.journalPM[i].endTime.slice(0, 2),
                                                        minutes: newJournal.monday.journalPM[i].endTime.slice(3, 5),
                                                    } ) ),
                                                }
                            // console.log(array[i])
                        }
                    }
    
                    setConsultationSlotsArray( array )
                }
            }

            // monday
            // tuesday

            if( format( currentDay, "iiii") === 'martes' ){

    
                if( newJournal?.tuesday?.journalAM !== undefined ){
    
                    const array = []
                    let tempCurrentDay = currentDay
                    let index = 0;
        
                    if( newJournal.tuesday.journalAM.length > 0 ){
                        // console.log('first')
        
                        const arrayAMLength = newJournal.tuesday.journalAM.length
                        array[ index ] = {
                            startTime: getUnixTime(currentDay),
                            endTime: getUnixTime( add( currentDay, {
                                hours: newJournal.tuesday.journalAM[0].endTime.slice(0, 2),
                                minutes: newJournal.tuesday.journalAM[0].endTime.slice(3, 5),
                            } ) ),
                        }
        
                        for (let i = 1; i < arrayAMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.tuesday.journalAM[i].startTime.slice(0, 2),
                                minutes: newJournal.tuesday.journalAM[i].startTime.slice(3, 5),
                            });
                            array[i] = {
                                startTime: getUnixTime(tempCurrentDay),
                                endTime: getUnixTime( add( tempCurrentDay, {
                                    hours: newJournal.tuesday.journalAM[i].endTime.slice(0, 2),
                                    minutes: newJournal.tuesday.journalAM[i].endTime.slice(3, 5),
                                } ) ),
                            }
                            // console.log(array[i])
                        }
        
                        index = index + arrayAMLength;
                    }
        
                    if( newJournal.tuesday.journalPM.length > 0 ){
                        // console.log('second')
        
                        const arrayPMLength = newJournal.tuesday.journalPM.length
                        array[ index ] = {
                                            startTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.tuesday.journalPM[0].startTime.slice(0, 2),
                                                    minutes: newJournal.tuesday.journalPM[0].startTime.slice(3, 5),
                                                })),
                                            endTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.tuesday.journalPM[0].endTime.slice(0, 2),
                                                    minutes: newJournal.tuesday.journalPM[0].endTime.slice(3, 5),
                                                })),
                                        }
        
                        for (let i = 1; i < arrayPMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.tuesday.journalPM[i].startTime.slice(0, 2),
                                minutes: newJournal.tuesday.journalPM[i].startTime.slice(3, 5),
                            });
                            array[index + i] = {
                                                startTime: getUnixTime(tempCurrentDay),
                                                endTime: getUnixTime( add( tempCurrentDay, {
                                                    hours: newJournal.tuesday.journalPM[i].endTime.slice(0, 2),
                                                    minutes: newJournal.tuesday.journalPM[i].endTime.slice(3, 5),
                                                } ) ),
                                            }
                            // console.log(array[i])
                        }
                    }
    
                    setConsultationSlotsArray( array )
                }
            }

            // tuesday
            // wednesday

            if( format( currentDay, "iiii") === 'miércoles' ){

    
                if( newJournal?.wednesday?.journalAM !== undefined ){
    
                    const array = []
                    let tempCurrentDay = currentDay
                    let index = 0;
        
                    if( newJournal.wednesday.journalAM.length > 0 ){
                        // console.log('first')
        
                        const arrayAMLength = newJournal.wednesday.journalAM.length
                        array[ index ] = {
                                            startTime: getUnixTime(currentDay),
                                            endTime: getUnixTime( add( currentDay, {
                                                hours: newJournal.wednesday.journalAM[0].endTime.slice(0, 2),
                                                minutes: newJournal.wednesday.journalAM[0].endTime.slice(3, 5),
                                            } ) ),
                                        }
        
                        for (let i = 1; i < arrayAMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.wednesday.journalAM[i].startTime.slice(0, 2),
                                minutes: newJournal.wednesday.journalAM[i].startTime.slice(3, 5),
                            });
                            array[i] = {
                                            startTime: getUnixTime(tempCurrentDay),
                                            endTime: getUnixTime( add( tempCurrentDay, {
                                                hours: newJournal.wednesday.journalAM[i].endTime.slice(0, 2),
                                                minutes: newJournal.wednesday.journalAM[i].endTime.slice(3, 5),
                                            } ) ),
                                        }
                            // console.log(array[i])
                        }
        
                        index = index + arrayAMLength;
                    }
        
                    if( newJournal.wednesday.journalPM.length > 0 ){
                        // console.log('second')
        
                        const arrayPMLength = newJournal.wednesday.journalPM.length
                        array[ index ] = {
                                            startTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.wednesday.journalPM[0].startTime.slice(0, 2),
                                                    minutes: newJournal.wednesday.journalPM[0].startTime.slice(3, 5),
                                                })),
                                            endTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.wednesday.journalPM[0].endTime.slice(0, 2),
                                                    minutes: newJournal.wednesday.journalPM[0].endTime.slice(3, 5),
                                                })),
                                        }
        
                        for (let i = 1; i < arrayPMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.wednesday.journalPM[i].startTime.slice(0, 2),
                                minutes: newJournal.wednesday.journalPM[i].startTime.slice(3, 5),
                            });
                            array[index + i] = {
                                                    startTime: getUnixTime(tempCurrentDay),
                                                    endTime: getUnixTime( add( tempCurrentDay, {
                                                        hours: newJournal.wednesday.journalPM[i].endTime.slice(0, 2),
                                                        minutes: newJournal.wednesday.journalPM[i].endTime.slice(3, 5),
                                                    } ) ),
                                                }
                            // console.log(array[i])
                        }
                    }
    
                    setConsultationSlotsArray( array )
                }
            }

            // wednesday
            // thursday

            if( format( currentDay, "iiii") === 'jueves' ){

    
                if( newJournal?.thursday?.journalAM !== undefined ){
    
                    const array = []
                    let tempCurrentDay = currentDay
                    let index = 0;
        
                    if( newJournal.thursday.journalAM.length > 0 ){
                        // console.log('first')
        
                        const arrayAMLength = newJournal.thursday.journalAM.length
                        array[ index ] = {
                                            startTime: getUnixTime(currentDay),
                                            endTime: getUnixTime( add( currentDay, {
                                                hours: newJournal.thursday.journalAM[0].endTime.slice(0, 2),
                                                minutes: newJournal.thursday.journalAM[0].endTime.slice(3, 5),
                                            } ) ),
                                        }
        
                        for (let i = 1; i < arrayAMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.thursday.journalAM[i].startTime.slice(0, 2),
                                minutes: newJournal.thursday.journalAM[i].startTime.slice(3, 5),
                            });
                            array[i] = {
                                            startTime: getUnixTime(tempCurrentDay),
                                            endTime: getUnixTime( add( tempCurrentDay, {
                                                hours: newJournal.thursday.journalAM[i].endTime.slice(0, 2),
                                                minutes: newJournal.thursday.journalAM[i].endTime.slice(3, 5),
                                            } ) ),
                                        }
                            // console.log(array[i])
                        }
        
                        index = index + arrayAMLength;
                    }
        
                    if( newJournal.thursday.journalPM.length > 0 ){
                        // console.log('second')
        
                        const arrayPMLength = newJournal.thursday.journalPM.length
                        array[ index ] = {
                                            startTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.thursday.journalPM[0].startTime.slice(0, 2),
                                                    minutes: newJournal.thursday.journalPM[0].startTime.slice(3, 5),
                                                })),
                                            endTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.thursday.journalPM[0].endTime.slice(0, 2),
                                                    minutes: newJournal.thursday.journalPM[0].endTime.slice(3, 5),
                                                })),
                                        }
        
                        for (let i = 1; i < arrayPMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.thursday.journalPM[i].startTime.slice(0, 2),
                                minutes: newJournal.thursday.journalPM[i].startTime.slice(3, 5),
                            });
                            array[index + i] = {
                                                    startTime: getUnixTime(tempCurrentDay),
                                                    endTime: getUnixTime( add( tempCurrentDay, {
                                                        hours: newJournal.thursday.journalPM[i].endTime.slice(0, 2),
                                                        minutes: newJournal.thursday.journalPM[i].endTime.slice(3, 5),
                                                    } ) ),
                                                }
                            // console.log(array[i])
                        }
                    }
    
                    setConsultationSlotsArray( array )
                }
            }

            // thursday
            // friday

            if( format( currentDay, "iiii") === 'viernes' ){

    
                if( newJournal?.friday?.journalAM !== undefined ){
    
                    const array = []
                    let tempCurrentDay = currentDay
                    let index = 0;
        
                    if( newJournal.friday.journalAM.length > 0 ){
                        // console.log('first')
        
                        const arrayAMLength = newJournal.friday.journalAM.length
                        array[ index ] = {
                                            startTime: getUnixTime(currentDay),
                                            endTime: getUnixTime( add( currentDay, {
                                                hours: newJournal.friday.journalAM[0].endTime.slice(0, 2),
                                                minutes: newJournal.friday.journalAM[0].endTime.slice(3, 5),
                                            } ) ),
                                        }
        
                        for (let i = 1; i < arrayAMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.friday.journalAM[i].startTime.slice(0, 2),
                                minutes: newJournal.friday.journalAM[i].startTime.slice(3, 5),
                            });
                            array[i] = {
                                            startTime: getUnixTime(tempCurrentDay),
                                            endTime: getUnixTime( add( tempCurrentDay, {
                                                hours: newJournal.friday.journalAM[i].endTime.slice(0, 2),
                                                minutes: newJournal.friday.journalAM[i].endTime.slice(3, 5),
                                            } ) ),
                                        }
                            // console.log(array[i])
                        }
        
                        index = index + arrayAMLength;
                    }
        
                    if( newJournal.friday.journalPM.length > 0 ){
                        // console.log('second')
        
                        const arrayPMLength = newJournal.friday.journalPM.length
                        array[ index ] = {
                                            startTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.friday.journalPM[0].startTime.slice(0, 2),
                                                    minutes: newJournal.friday.journalPM[0].startTime.slice(3, 5),
                                                })),
                                            endTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.friday.journalPM[0].endTime.slice(0, 2),
                                                    minutes: newJournal.friday.journalPM[0].endTime.slice(3, 5),
                                                })),
                                        }
        
                        for (let i = 1; i < arrayPMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.friday.journalPM[i].startTime.slice(0, 2),
                                minutes: newJournal.friday.journalPM[i].startTime.slice(3, 5),
                            });
                            array[index + i] = {
                                                    startTime: getUnixTime(tempCurrentDay),
                                                    endTime: getUnixTime( add( tempCurrentDay, {
                                                        hours: newJournal.friday.journalPM[i].endTime.slice(0, 2),
                                                        minutes: newJournal.friday.journalPM[i].endTime.slice(3, 5),
                                                    } ) ),
                                                }
                            // console.log(array[i])
                        }
                    }
    
                    setConsultationSlotsArray( array )
                }
            }

            // friday
            // saturday

            if( format( currentDay, "iiii") === 'sábado' ){

    
                if( newJournal?.saturday?.journalAM !== undefined ){
    
                    const array = []
                    let tempCurrentDay = currentDay
                    let index = 0;
        
                    if( newJournal.saturday.journalAM.length > 0 ){
                        // console.log('first')
        
                        const arrayAMLength = newJournal.saturday.journalAM.length
                        array[ index ] = {
                                            startTime: getUnixTime(currentDay),
                                            endTime: getUnixTime( add( currentDay, {
                                                hours: newJournal.saturday.journalAM[0].endTime.slice(0, 2),
                                                minutes: newJournal.saturday.journalAM[0].endTime.slice(3, 5),
                                            } ) ),
                                        }
        
                        for (let i = 1; i < arrayAMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.saturday.journalAM[i].startTime.slice(0, 2),
                                minutes: newJournal.saturday.journalAM[i].startTime.slice(3, 5),
                            });
                            array[i] = {
                                            startTime: getUnixTime(tempCurrentDay),
                                            endTime: getUnixTime( add( tempCurrentDay, {
                                                hours: newJournal.saturday.journalAM[i].endTime.slice(0, 2),
                                                minutes: newJournal.saturday.journalAM[i].endTime.slice(3, 5),
                                            } ) ),
                                        }
                            // console.log(array[i])
                        }
        
                        index = index + arrayAMLength;
                    }
        
                    if( newJournal.saturday.journalPM.length > 0 ){
                        // console.log('second')
        
                        const arrayPMLength = newJournal.saturday.journalPM.length
                        array[ index ] = {
                                            startTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.saturday.journalPM[0].startTime.slice(0, 2),
                                                    minutes: newJournal.saturday.journalPM[0].startTime.slice(3, 5),
                                                })),
                                            endTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.saturday.journalPM[0].endTime.slice(0, 2),
                                                    minutes: newJournal.saturday.journalPM[0].endTime.slice(3, 5),
                                                })),
                                        }
        
                        for (let i = 1; i < arrayPMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.saturday.journalPM[i].startTime.slice(0, 2),
                                minutes: newJournal.saturday.journalPM[i].startTime.slice(3, 5),
                            });
                            array[index + i] = {
                                                    startTime: getUnixTime(tempCurrentDay),
                                                    endTime: getUnixTime( add( tempCurrentDay, {
                                                        hours: newJournal.saturday.journalPM[i].endTime.slice(0, 2),
                                                        minutes: newJournal.saturday.journalPM[i].endTime.slice(3, 5),
                                                    } ) ),
                                                }
                            // console.log(array[i])
                        }
                    }
    
                    setConsultationSlotsArray( array )
                }
            }

            // saturday
            // sunday

            if( format( currentDay, "iiii") === 'domingo' ){

    
                if( newJournal?.sunday?.journalAM !== undefined ){
    
                    const array = []
                    let tempCurrentDay = currentDay
                    let index = 0;
        
                    if( newJournal.sunday.journalAM.length > 0 ){
                        // console.log('first')
        
                        const arrayAMLength = newJournal.sunday.journalAM.length
                        array[ index ] = {
                                            startTime: getUnixTime(currentDay),
                                            endTime: getUnixTime( add( currentDay, {
                                                hours: newJournal.sunday.journalAM[0].endTime.slice(0, 2),
                                                minutes: newJournal.sunday.journalAM[0].endTime.slice(3, 5),
                                            } ) ),
                                        }
        
                        for (let i = 1; i < arrayAMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.sunday.journalAM[i].startTime.slice(0, 2),
                                minutes: newJournal.sunday.journalAM[i].startTime.slice(3, 5),
                            });
                            array[i] = {
                                            startTime: getUnixTime(tempCurrentDay),
                                            endTime: getUnixTime( add( tempCurrentDay, {
                                                hours: newJournal.sunday.journalAM[i].endTime.slice(0, 2),
                                                minutes: newJournal.sunday.journalAM[i].endTime.slice(3, 5),
                                            } ) ),
                                        }
                            // console.log(array[i])
                        }
        
                        index = index + arrayAMLength;
                    }
        
                    if( newJournal.sunday.journalPM.length > 0 ){
                        // console.log('second')
        
                        const arrayPMLength = newJournal.sunday.journalPM.length
                        array[ index ] = {
                                            startTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.sunday.journalPM[0].startTime.slice(0, 2),
                                                    minutes: newJournal.sunday.journalPM[0].startTime.slice(3, 5),
                                                })),
                                            endTime: getUnixTime(
                                                set( tempCurrentDay, {               
                                                    hours: newJournal.sunday.journalPM[0].endTime.slice(0, 2),
                                                    minutes: newJournal.sunday.journalPM[0].endTime.slice(3, 5),
                                                })),
                                        }
        
                        for (let i = 1; i < arrayPMLength; i++) {
                            tempCurrentDay = set(tempCurrentDay, {               
                                hours: newJournal.sunday.journalPM[i].startTime.slice(0, 2),
                                minutes: newJournal.sunday.journalPM[i].startTime.slice(3, 5),
                            });
                            array[index + i] = {
                                                    startTime: getUnixTime(tempCurrentDay),
                                                    endTime: getUnixTime( add( tempCurrentDay, {
                                                        hours: newJournal.sunday.journalPM[i].endTime.slice(0, 2),
                                                        minutes: newJournal.sunday.journalPM[i].endTime.slice(3, 5),
                                                    } ) ),
                                                }
                            // console.log(array[i])
                        }
                    }
    
                    setConsultationSlotsArray( array )
                }
            }

            // sunday
            
    
            // for (let i = 1; i < consultationsPerDay; i++) {          SEPARAR ENTRE journalAM y PM
            //     tempCurrentDay = add(tempCurrentDay, {               
            //       hours: consultationHours,                          HACER UN SLICE DEL STRING Y PONERLO AQUÍ
            //       minutes: consultationMinutes,                      LO MISMO
            //     });
            //     array[i] = getUnixTime(tempCurrentDay)               LO MISMO
            //     // console.log(array[i])
                
            // }
            console.log('consultationSlotsArray: ', consultationSlotsArray)
            // setConsultationSlotsArray( array )
        }
    }

    const handlePatientsNumber = () => {

        consultationSlotsArray.map(( consultationSlot ) => (
            ( consultationSlot.patient != null )
            ? setPatientsNumber( patientsNumber + 1)
            : null
        ))
    }
 
    useEffect(() => {
        setPatientsNumber( 0 );
        handleConsultationSlotsArrayGeneration();
    }, [ currentDay ])

    // const onNewConsultation = ( consultationSlot ) => {
    //     console.log( fromUnixTime( consultationSlot ) )

    // }

    useEffect(() => {

        daysRef.current[0]?.click();
        dispatch( clearCurrentPatient() );
    
    }, [patients])

    useEffect(() => {
        
        handlePatientsNumber()
    }, [consultationSlotsArray])
    

    useEffect(() => {

        // console.log('isNutritionist: ', isNutritionist)
        // console.log('isLoading: ', isLoading)

        if( journalID !== null ){
            setIsLoading( false )
            // console.log('newJournalIsSet: ', newJournalIsSet)
            // console.log('newJournal: ', newJournal)
        }else{
            setIsLoading( true )
        }
    

    }, [journalID])
    
    useEffect(() => {
    
        setUpdateJournal( !updateJournal )
        daysRef.current[0]?.click();
        // console.log('first')

    }, [ isEditingJournal, isAddingNewConsultation ])
    
    useEffect(() => {
    
        if( isNutritionist !== null && isNutritionist !== false ){
            dispatch ( startLoadingMyJournal( uid ) )
            
        }
    }, [isNutritionist])

    useEffect(() => {
        handleWorkingDaysArray();
    }, [newJournal])
    

    // const onTest = () => {
    //     // dispatch(startLoadingMyPatientsTest());
    // }
    
    return (
    
        <AppLayout>
        {
            ( isLoading )
            ?   <LoadingScreen isLoading = { isLoading } />
            : <>

            <div className="main">
                    {
                        (!journalIsSet) ? <ModalWelcome /> : null
                    }
                    <div className="logout">
                        <button className="btn-logout" type="button" onClick={ onLogout }>
                            Cerrar sesión
                        </button>
                    </div>
                    {/* <div className="logout">
                        <button className="btn-logout" type="button" onClick={ onTest }>
                            Test
                        </button>
                    </div> */}
                    <div className="main-welcome">
                        <h1>Nut. { displayName }</h1>
                        <p>Hola nutricionista, echemos un vistazo a sus pacientes de hoy</p>

                    </div>
                    <div className="journal">
                    <div className="sub-title">
                        <h3>Próximas consultas</h3>
                        {/* <ModalPacienteEspontaneo /> */}
                    </div>
                    <div className="month-days">
                        { 
                            (newJournal === undefined)
                                ?   daysArray.map( (day, index) => (

                                    <div className="day" key={ index }>
                                        {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                        <div className="day-ellipse" ref={(element) => daysRef.current.push(element)} onClick={ () => handleCurrentDay( index ) }>{ format( day, "dd") }</div>
                                        <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div>
                                    </div>
                                    ))
                                :   daysArray.map( (day, index) => ( 
                                        
                                        workingDaysArray.map( (workingDay) => ( 
                                            ( format( day, "iiii") === workingDay )
                                            ?   <div className="day" key={ index }>
                                                    
                                                    <div className="day-ellipse" ref={(element) => daysRef.current.push(element)} onClick={ () => handleCurrentDay( index ) }>{ format( day, "dd") }</div>
                                                    <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div>
                                                </div>
                                            :   null
                                         ) )
                                 ) )
                            }
                    </div>
                    <div className="month-line"></div>
                    <div className="today">
                        <div className="today-label">{ capitalizeFirst(format( currentDay, "PPPP"))}</div>
                        <div className="patient-number">
                            {
                                ( patientsNumber > 0 )
                                    ?   (patientsNumber > 1) 
                                        ?   `${ patientsNumber } pacientes`
                                        :   `${ patientsNumber } paciente`
                                    :   'No hay pacientes para hoy'
                                
                            }
                        </div>
                    </div>
                    <div className="today-consultations">

                        { consultationSlotsArray.map( ( consultationSlot, index ) => (

                            <div className="consultation" key={ index }>
                                <div className="time">
                                    <div className="hour-wrapper">
                                        {
                                            ( consultationSlot.patient != null )
                                            ?   <div><div className="hour">{ format( fromUnixTime(consultationSlot.patient.nextConsultation), "hh")}:{format( fromUnixTime(consultationSlot.patient.nextConsultation), "mm")}</div>
                                                <div className="ampm">{format( fromUnixTime(consultationSlot.patient.nextConsultation), "aa")}</div></div>
                                                
                                            :   <div><div className="hour">{ format( fromUnixTime(consultationSlot.startTime), "hh")}:{format( fromUnixTime(consultationSlot.startTime), "mm")}</div>
                                                <div className="ampm">{format( fromUnixTime(consultationSlot.startTime), "aa")}</div></div>
                                        }
                                        
                                    </div>
                                    <div className="hr"></div>
                                </div>
                                <div className="consultation-wrapper">
                                    <div className="blank-space"></div>

                                    {
                                        (consultationSlot.patient != undefined )
                                        ?   <>
                                                <div className='consultation-info-container'>
                                                    <Link to={'../patient?patientID='+consultationSlot.patient.id} className="consultation-info">
                                                        <div className="avatar">{ consultationSlot.patient.displayName.substring(0,2) }</div>
                                                        <div className="journal-patient-info">
                                                            <div className="patient-name">{ consultationSlot.patient.displayName }</div>
                                                            <div className="consultation-hour">
                                                                {format(fromUnixTime(consultationSlot.startTime), "hh:mm") +
                                                                " - " +
                                                                format(fromUnixTime(consultationSlot.endTime), "hh:mm")
                                                                }
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className='consultation-action-delete'>
                                                        <ModalDeleteConsultation patient={ consultationSlot.patient } />
                                                    </div>
                                                </div>
                                            </>

                                        :   <ModalNewConsultation consultationSlot = { consultationSlot }/>
                                    }

                                </div>
                            </div>
                        
                        ))}
                        
                    </div>
                    <ModalEditJournal/>
                </div>
            </div>
            <Footer/>
            </>
        }
        </AppLayout>
        
  )
}
