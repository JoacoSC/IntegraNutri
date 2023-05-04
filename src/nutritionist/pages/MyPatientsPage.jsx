import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale'

import { startLogout } from '../../store/auth';
import { AppLayout } from '../../layout/AppLayout';
import { setDefaultOptions } from 'date-fns/esm';
import { ModalNewPatient, ModalNewConsultation } from '../../ui';
import { getUnixTime, set } from 'date-fns';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { clearCurrentPatient } from '../../store/currentPatient';
import { ModalDeletePatient } from '../../ui/ModalDeletePatient';



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

    }, [])
    

    const ConsultationSlot1 = getUnixTime(set( new Date(), { hours: 18, minutes: 30, seconds: 0, miliseconds: 0} ));
    const ConsultationSlot2 = getUnixTime(set( new Date(), { hours: 19, minutes: 30, seconds: 0, miliseconds: 0} ));

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
                </div>
                <div className="next-consultation">
                    <h3>Mis pacientes</h3>
                    <ModalNewPatient />
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
                                                { patient.rut.formatted }
                                            </div>
                                        </div>
                                        <div className="my-patients-info-item-container">
                                            Comuna
                                            <div className="my-patients-info-city">
                                                { patient.city }
                                            </div>

                                        </div>
                                        <div className="my-patients-info-item-container">
                                            Región
                                            <div className="my-patients-info-region">
                                                { patient.region }
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
        </AppLayout>
        
  )
}
