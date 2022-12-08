import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale'
import { add, format, fromUnixTime, getUnixTime, set, setHours, setMinutes, setSeconds } from 'date-fns'

import { startLogout } from '../../store/auth';
import { AppLayout } from '../../layout/AppLayout';
import { ModalPacienteEspontaneo } from '../../ui'
import { addHours, setDefaultOptions } from 'date-fns/esm';
import { Link } from 'react-router-dom';
import { ModalEditJournal } from '../../ui/ModalEditJournal';



export const JournalPage = () => {

    setDefaultOptions({ locale: es })

    const dispatch = useDispatch();

    const { displayName } = useSelector( state => state.auth )
    
    const { patients } = useSelector( state => state.patients )

    const {
      workingDayStartHours,
      workingDayStartMinutes,
      consultationHours,
      consultationMinutes,
      consultationsPerDay,
    } = useSelector((state) => state.journal);

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

    // const [isEditingJournal, setIsEditingJournal] = useMemo( () => /* ALGO */  );
    
    const daysRange = 60;

    // console.log(consultationSlotsArray)

    // TODO:
    // TODO:
    // TODO:
    // TODO:
    // TODO:

    // console.log(consultationSlotsArray) este array trae la fecha y hora exacta de cada Slot
    // Por lo tanto debería comparar cada valor con un array de consultas (que también debo crear y almacenar en la base de datos)
    // Tendría que crear una propiedad nextConsultation para cada paciente, y ahí almacenar la próxima consulta
    // Además, tendría que agregar ese valor en el formulario para agregar un paciente espontáneo, y eso quedaría listo
    // También, debería buscar todos los pacientes del nutricionista al iniciar sesión, luego consultar todas las nextConsultation de los pacientes
    // Y con eso, comparar en el consultationSlotsArray para ver cuál Slot llenar.

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
    //     hours: 12,
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
                console.log(`${consultationIndex}: ${consultationIndex} - ${patientIndex}: ${patient.nextConsultation}`)
                consultationSlotsArray[consultationIndex] = {...consultationSlot, patient }
                console.log(consultationSlot)
            }
            
        });
        
    });

    console.log(consultationSlotsArray)
        
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

    

    return (
    
        <AppLayout>

            <div className="main">
                <div className="logout">
                    <button className="btn-logout" type="button" onClick={ onLogout }>
                        Cerrar sesión
                    </button>
                </div>
                <div className="main-welcome">
                    <h1>Dr. { displayName }</h1>
                    <p>Hola doctor, echemos un vistazo a sus pacientes de hoy</p>

                </div>
                <div className="next-consultation">
                    <h3>Próximas consultas</h3>
                    <ModalPacienteEspontaneo />
                </div>
                <div className="journal">
                    <div className="month-days">
                        { daysArray.map( (day, index) => (

                            <div className="day" key={ index }>
                                {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                <div className="day-ellipse" onClick={ () => handleCurrentDay( index ) }>{ format( day, "dd") }</div>
                                <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div>
                            </div>
                        ))}
                    </div>
                    <div className="month-line"></div>
                    <div className="today">
                        <div className="today-label">{ capitalizeFirst(format( currentDay, "PPPP"))}</div>
                        <div className="patient-number">8 Pacientes</div>
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
                                        ?   <Link to="../patient" className="consultation-info">
                                                <div className="avatar">LA</div>
                                                <div className="patient-info">
                                                    <div className="patient-name">{ consultationSlot.patient.displayName }</div>
                                                    <div className="consultation-hour">8:00 - 9:00</div>
                                                </div>
                                            </Link>

                                        : <div className="empty-consultation">
                                                <div className="empty-consultation-text">
                                                    Hora disponible
                                                </div>
                                            </div>
                                    }

                                </div>
                            </div>
                        
                        ))}
                        
                    </div>
                    <ModalEditJournal/>
                </div>
            </div>
        </AppLayout>
        
  )
}
