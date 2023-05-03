import { useEffect, useState, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale'
import { add, format, fromUnixTime, getUnixTime, set, setHours, setMinutes, setSeconds } from 'date-fns'

import { startLogout } from '../../store/auth';
import { AppLayout } from '../../layout/AppLayout';
import { ModalNewConsultation, ModalPacienteEspontaneo } from '../../ui'
import { addHours, setDefaultOptions } from 'date-fns/esm';
import { Link } from 'react-router-dom';
import { ModalEditJournal } from '../../ui/ModalEditJournal';
import { startCreatingJournal, startLoadingMyJournal } from '../../store/journal';
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

    const daysRef = useRef( new Array() );

    // const [isEditingJournal, setIsEditingJournal] = useMemo( () => /* ALGO */  );
    
    const daysRange = 60;

    // console.log(consultationSlotsArray)


    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleCurrentDay = ( key ) => {
        
        const currentDay = daysArray[ key ];
        const formattedCurrentDay = set(currentDay, {
          hours: workingDayStartHours,
          minutes: workingDayStartMinutes,
          seconds: 0,
          miliseconds: 0,
        });
        setCurrentDay( formattedCurrentDay );
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
            if (consultationSlot == patient.nextConsultation) {
                // console.log(`${consultationIndex}: ${consultationIndex} - ${patientIndex}: ${patient.nextConsultation}`)
                consultationSlotsArray[consultationIndex] = {...consultationSlot, patient }
                // console.log(consultationSlot)
            }
            
        });
        
    });

    // console.log(consultationSlotsArray)

    // dispatch ( startLoadingMyJournal( uid ) );
    
        
        // setDaysArray(array)


 
    useEffect(() => {
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
        setConsultationSlotsArray( array )
    }, [ currentDay ])

    // const onNewConsultation = ( consultationSlot ) => {
    //     console.log( fromUnixTime( consultationSlot ) )

    // }

    useEffect(() => {

        daysRef.current[0]?.click();
        dispatch( clearCurrentPatient() );
    
    }, [patients])

    let patientsNumber = 0;

    consultationSlotsArray.map(( consultationSlot ) => (
        ( consultationSlot.patient != null )
        ? patientsNumber += 1
        : null
    ))

    useEffect(() => {

        // console.log('isNutritionist: ', isNutritionist)
        // console.log('isLoading: ', isLoading)

        if( journalID !== null ){
            setIsLoading( false )
        }else{
            setIsLoading( true )
        }
    

    }, [journalID])
    
    useEffect(() => {
    
        setUpdateJournal( !updateJournal )
        daysRef.current[0]?.click();
        // console.log('first')

    }, [ isEditingJournal ])

    useEffect(() => {
    
        setIsAddingNewConsultation( !isAddingNewConsultation )
        daysRef.current[0]?.click();
        // console.log('first')

    }, [ isAddingNewConsultation ])
    
    useEffect(() => {
    
        if( isNutritionist !== null && isNutritionist !== false ){
            dispatch ( startLoadingMyJournal( uid ) )
            
        }
    }, [isNutritionist])
    
    return (
    
        <AppLayout>

            <div className="main">
            {
                ( isLoading )
                ?   <LoadingScreen isLoading = { isLoading } />
                : <>
                    {
                        (!journalIsSet) ? <ModalWelcome /> : null
                    }
                    <div className="logout">
                        <button className="btn-logout" type="button" onClick={ onLogout }>
                            Cerrar sesión
                        </button>
                    </div>
                    <div className="main-welcome">
                        <h1>Nut. { displayName }</h1>
                        <p>Hola nutricionista, echemos un vistazo a sus pacientes de hoy</p>

                    </div>
                    <div className="next-consultation">
                        <h3>Próximas consultas</h3>
                        {/* <ModalPacienteEspontaneo /> */}
                    </div>
                    <div className="journal">
                        <div className="month-days">
                            { daysArray.map( (day, index) => (

                                <div className="day" key={ index }>
                                    {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                    <div className="day-ellipse" ref={(element) => daysRef.current.push(element)} onClick={ () => handleCurrentDay( index ) }>{ format( day, "dd") }</div>
                                    <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div>
                                </div>
                            ))}
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
                                                    
                                                :   <div><div className="hour">{ format( fromUnixTime(consultationSlot), "hh")}:{format( fromUnixTime(consultationSlot), "mm")}</div>
                                                    <div className="ampm">{format( fromUnixTime(consultationSlot), "aa")}</div></div>
                                            }
                                            
                                        </div>
                                        <div className="hr"></div>
                                    </div>
                                    <div className="consultation-wrapper">
                                        <div className="blank-space"></div>

                                        {
                                            (consultationSlot.patient != undefined )
                                            ?   <Link to={'../patient?patientID='+consultationSlot.patient.id} className="consultation-info">
                                                    <div className="avatar">{ consultationSlot.patient.displayName.substring(0,2) }</div>
                                                    <div className="journal-patient-info">
                                                        <div className="patient-name">{ consultationSlot.patient.displayName }</div>
                                                        <div className="consultation-hour">
                                                            {format(fromUnixTime(consultationSlot.patient.nextConsultation), "hh:mm") +
                                                            " - " +
                                                            format(
                                                                add(fromUnixTime(consultationSlot.patient.nextConsultation), {
                                                                hours: consultationHours,
                                                                minutes: consultationMinutes,
                                                                }),
                                                                "hh:mm"
                                                            )}
                                                        </div>
                                                    </div>
                                                </Link>

                                            :   <ModalNewConsultation consultationSlot = { consultationSlot }/>
                                        }

                                    </div>
                                </div>
                            
                            ))}
                            
                        </div>
                        <ModalEditJournal/>
                    </div>
                </>
            }
                
                
            </div>
        </AppLayout>
        
  )
}
