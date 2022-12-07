import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale'

import { startLogout } from '../../store/auth';
import { AppLayout } from '../../layout/AppLayout';
import { setDefaultOptions } from 'date-fns/esm';
import { ModalNewPatient, ModalNewConsultation } from '../../ui';
import { getUnixTime, set } from 'date-fns';



export const MyPatientsPage = () => {

    setDefaultOptions({ locale: es })

    const { displayName } = useSelector( state => state.auth )

    const { patients } = useSelector( state => state.patients )
    
    const dispatch = useDispatch();

    const onLogout = () => {
        
        dispatch( startLogout() );

    }
    console.log(patients.length)

    const ConsultationSlot1 = getUnixTime(set( new Date(), { hours: 18, minutes: 30, seconds: 0, miliseconds: 0} ));
    console.log(ConsultationSlot1)
    const ConsultationSlot2 = getUnixTime(set( new Date(), { hours: 19, minutes: 30, seconds: 0, miliseconds: 0} ));
    console.log(ConsultationSlot2)

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

                            <div className="patient-item" key={ patient.id }>
                                <div className="avatar">{ patient.displayName.substring(0,2) }</div>
                                <div className="patient-info-wrapper">
                                    <div className="patient-name">{ patient.displayName }</div>
                                    <div className="patient-info">{ patient.rut +" "+ patient.city +", "+ patient.region }</div>
                                    <div className="patient-info">{ ConsultationSlot1 }</div>
                                    <div className="patient-info">{ ConsultationSlot2 }</div>
                                    <div className="patient-info">{ patient.nextConsultation }</div>
                                    <div className="patient-info">{ 
                                        ( ConsultationSlot1 == patient.nextConsultation )
                                        ? 'Son iguales!!'
                                        : 'No son iguales :('
                                    }</div>
                                    <div className="patient-info">{ 
                                        ( ConsultationSlot2 == patient.nextConsultation )
                                        ? 'Son iguales!!'
                                        : 'No son iguales :('
                                    }</div>
                                    
                                </div>
                                <ModalNewConsultation />
                            </div>

                        ))
                    }

                    </div>

                </div>
            </div>
        </AppLayout>
        
  )
}
