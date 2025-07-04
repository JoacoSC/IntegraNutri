import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale'

import { startLogout } from '../../store/auth';
import { AppLayout } from '../../layout/AppLayout';
import { setDefaultOptions } from 'date-fns/esm';
import { ModalNewPatient, ModalNewConsultation, Footer } from '../../ui';
import { getUnixTime, set } from 'date-fns';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { clearCurrentPatient } from '../../store/currentPatient';
import { ModalDeletePatient } from '../../ui/ModalDeletePatient';
import { clearReminder24Hours } from '../../store/reminder24Hours';
import { clearFrequencyOfConsumption } from '../../store/frequencyOfConsumption';



export const MyPatientsPage = () => {

    setDefaultOptions({ locale: es })

    const { displayName } = useSelector( state => state.auth )

    const { patients } = useSelector( state => state.patients )
    
    const dispatch = useDispatch();

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    useEffect(() => {
        
        dispatch( clearCurrentPatient() );
        dispatch( clearReminder24Hours() );
        dispatch( clearFrequencyOfConsumption() );
        

    }, [])
    

    const ConsultationSlot1 = getUnixTime(set( new Date(), { hours: 18, minutes: 30, seconds: 0, miliseconds: 0} ));
    const ConsultationSlot2 = getUnixTime(set( new Date(), { hours: 19, minutes: 30, seconds: 0, miliseconds: 0} ));

    return (
    
        <AppLayout>
        
            <div className="main">
                <div className="logout-section">
                    <button className="btn-logout" type="button" onClick={ onLogout }>
                        Cerrar sesión
                    </button>
                </div>
                <div className="welcome-section">
                    <h1 className='text-4xl custom-font-bold leading-tight my-4'>Nut. { displayName }</h1>
                </div>
                <div className="sub-title">
                    <div className='sub-title-btn-container'>
                        <ModalNewPatient />

                    </div>
                </div>
                <div className="main-patient-list">
                       
                    <div className="patients-wrapper">
                    {
                        ( patients.length === 0 )

                        ?   <div className="no-patients">
                                <div className="patient-info-wrapper">
                                    <div className="patient-name">No tienes pacientes registrados!</div>
                                    <div className="patient-info"></div>
                                </div>
                            </div>
                            
                        :   patients.map(( patient ) => (
                            <div className='patient-item-container' key={ patient.id }>
                                <Link to={'../patient?patientID='+patient.id} className="patient-item">
                                    <div className="avatar-container">
                                        <div className="avatar">{ patient.displayName.substring(0,2) }</div>
                                    </div>
                                    <div className="my-patients-patient-info">
                                        <div className="my-patients-patient-name">{ patient.displayName }</div>
                                        <div className="my-patients-info-container">
                                        <div className="my-patients-info-item-container">
                                            Rut
                                            <div className="my-patients-info-rut">
                                                <p>{ patient.rut.formatted }</p>
                                            </div>
                                        </div>
                                        <div className="my-patients-info-item-container">
                                            Comuna
                                            <div className="my-patients-info-city">
                                                <p>{ patient.city }</p>
                                            </div>

                                        </div>
                                        <div className="my-patients-info-item-container">
                                            Región
                                            <div className="my-patients-info-region">
                                                <p>{ patient.region }</p>
                                            </div>

                                        </div>
                                        {/* <div className="my-patients-info-actions">
                                            Acción
                                            <div className="my-patients-info-delete">
                                                Eliminar
                                            </div>

                                        </div> */}
                                        </div>
                                        {/* <div className="consultation-hour">
                                            {format(fromUnixTime(consultationSlot.patient.nextConsultation), "hh:mm") +
                                            " - " +
                                            format(
                                                add(fromUnixTime(consultationSlot.patient.nextConsultation), {
                                                hours: consultationHours,
                                                minutes: consultationMinutes,
                                                }),
                                                "hh:mm"
                                            )}
                                        </div> */}
                                    </div>
                                </Link>
                                <div className="my-patients-info-actions">
                                    Acción
                                    <ModalDeletePatient displayName={ patient.displayName } patientID={ patient.id } />

                                </div>
                            </div>


                        ))
                    }

                    </div>

                </div>
            </div>
            <Footer/>
        </AppLayout>
        
  )
}
