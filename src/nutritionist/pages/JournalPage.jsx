import { useEffect, useState, useMemo } from 'react';
import { add, format, getUnixTime, set, setHours, setMinutes, setSeconds } from 'date-fns'
import { es } from 'date-fns/locale'

import { AppLayout } from '../../layout/AppLayout';
import { ModalPacienteEspontaneo } from '../../ui'
import { addHours, setDefaultOptions } from 'date-fns/esm';
import { Link } from 'react-router-dom';
import { ModalEditJournal } from '../../ui/ModalEditJournal';
import { useSelector } from 'react-redux';



export const JournalPage = () => {

    setDefaultOptions({ locale: es })

    const { workingDayStartHours, workingDayStartMinutes, consultationHours, consultationMinutes, consultationsPerDay } = useSelector( state => state.journal )
    
    const [ daysArray, setDaysArray ] = useState([ new Date() ]);

    const [currentDay, setCurrentDay] = useState( set( new Date(), { hours: workingDayStartHours, minutes: workingDayStartMinutes, seconds: 0, miliseconds: 0} ) );

    const [consultationSlotsArray, setConsultationSlotsArray] = useState([]);

    // const [isEditingJournal, setIsEditingJournal] = useMemo( () => /* ALGO */  );
    
    const daysRange = 60;

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleCurrentDay = ( key ) => {
        
        const currentDay = daysArray[ key ];
        const formattedCurrentDay = set( currentDay, { hours: workingDayStartHours, minutes: workingDayStartMinutes, seconds: 0, miliseconds: 0} )
        setCurrentDay( formattedCurrentDay );
    }
    
    useEffect(() => {
        const array = []
        
        for (let i = 0; i < daysRange; i++) {
            array.push(add(new Date(), { days: i }));
        }
        
        setDaysArray(array)
        
    }, []);
 
    useEffect(() => {
        const array = []
        let tempCurrentDay = currentDay
        array[0] = currentDay

        for (let i = 1; i < consultationsPerDay; i++) {
            tempCurrentDay = add( tempCurrentDay, { hours: consultationHours, minutes: consultationMinutes})
            array[i] = tempCurrentDay
            
        }
        setConsultationSlotsArray( array )
    }, [ currentDay ])

    return (
    
        <AppLayout>

            <div className="main">
                <div className="main-welcome">
                    <h1>Dr. Galleguillos</h1>
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
                                        <div className="hour">{ format( consultationSlot, "hh")}:{format( consultationSlot, "mm")}</div>
                                        <div className="ampm">{format( consultationSlot, "aa")}</div>
                                    </div>
                                    <div className="hr"></div>
                                </div>
                                <div className="consultation-wrapper">
                                    <div className="blank-space"></div>
                                    

                                    <Link to="../patient" className="consultation-info">
                                        <div className="avatar">LA</div>
                                        <div className="patient-info">
                                            <div className="patient-name">Logan Anderson</div>
                                            <div className="consultation-hour">8:00 - 9:00</div>
                                        </div>
                                    </Link>
                                    
                                    {/* <div className="empty-consultation">
                                        <div className="empty-consultation-text">
                                            Hora disponible
                                        </div>
                                    </div> */}

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
