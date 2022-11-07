import { useEffect, useState } from 'react';
import { add, format, getUnixTime } from 'date-fns'
import { es } from 'date-fns/locale'

import { AppLayout } from '../../layout/AppLayout';
import { ModalPacienteEspontaneo } from '../../ui'
import { setDefaultOptions } from 'date-fns/esm';


export const JournalPage = () => {
    
    const [daysArray, setDaysArray] = useState([ new Date() ]);
    
    const daysRange = 60;
    
    useEffect(() => {
        const array = []
        
        for (let i = 0; i < daysRange; i++) {
            array.push(add(new Date(), { days: i }));
        }
        
        setDaysArray(array)
        
    }, []);
    
    setDefaultOptions({ locale: es })

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    console.log( capitalizeFirst(format(daysArray[0], "eee")) );

    return (
    
        <AppLayout>

            <div className="main">
                <div className="main-welcome">
                    <h1>Dr. Galleguillos</h1>
                    <p>Hola doctor, echemos un vistazo a sus pacientes de hoy</p>

                </div>
                <div className="next-consultation">
                    <h3>Próximas consultas</h3>
                    <ModalPacienteEspontaneo/>
                </div>
                <div className="journal">
                    <div className="month-days">
                        { daysArray.map( day => (

                            <div className="day" key={ getUnixTime(day) }>
                                {/* <div className="month-label">{ capitalizeFirst(format( day, "MMM")) }</div> */}
                                <div className="day-ellipse">{ format( day, "dd") }</div>
                                <div className="day-label">{ capitalizeFirst(format( day, "eee")) }</div>
                            </div>
                        ))}
                    </div>
                    <div className="month-line"></div>
                    <div className="today">
                        <div className="today-label">Martes 27</div>
                        <div className="patient-number">8 Pacientes</div>
                    </div>
                    <div className="today-consultations">
                        <div className="consultation">
                            <div className="time">
                                <div className="hour-wrapper">
                                    <div className="hour">08:00</div>
                                    <div className="ampm">AM</div>
                                </div>
                                <div className="hr"></div>
                            </div>
                            <div className="consultation-wrapper">
                                <div className="blank-space"></div>
                                <div className="consultation-info">
                                    <div className="avatar">LA</div>
                                    <div className="patient-info">
                                        <div className="patient-name">Logan Anderson</div>
                                        <div className="consultation-hour">8:00 - 9:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="consultation">
                            <div className="time">
                                <div className="hour-wrapper">
                                    <div className="hour">09:00</div>
                                    <div className="ampm">AM</div>
                                </div>
                                <div className="hr"></div>
                            </div>
                            <div className="consultation-wrapper">
                                <div className="blank-space"></div>
                                <div className="consultation-info">
                                    <div className="avatar">LC</div>
                                    <div className="patient-info">
                                        <div className="patient-name">Leonard Campbell</div>
                                        <div className="consultation-hour">9:00 - 9:30</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="consultation">
                            <div className="time">
                                <div className="hour-wrapper">
                                    <div className="hour">10:00</div>
                                    <div className="ampm">AM</div>
                                </div>
                                <div className="hr"></div>
                            </div>
                            <div className="consultation-wrapper">
                                <div className="blank-space"></div>
                                <div className="empty-consultation">
                                    <div className="empty-consultation-text">
                                        Hora disponible
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="consultation">
                            <div className="time">
                                <div className="hour-wrapper">
                                    <div className="hour">11:00</div>
                                    <div className="ampm">AM</div>
                                </div>
                                <div className="hr"></div>
                            </div>
                            <div className="consultation-wrapper">
                                <div className="blank-space"></div>
                                <div className="consultation-info">
                                    <div className="avatar">LA</div>
                                    <div className="patient-info">
                                        <div className="patient-name">Logan Anderson</div>
                                        <div className="consultation-hour">11:00 - 12:00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn-edit" type="button"></button>
                </div>
            </div>
        </AppLayout>
        
  )
}
