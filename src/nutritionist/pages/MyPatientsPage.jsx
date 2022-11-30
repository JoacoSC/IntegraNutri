import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { es } from 'date-fns/locale'
import { add, format, getUnixTime, set, setHours, setMinutes, setSeconds } from 'date-fns'

import { startLogout } from '../../store/auth';
import { AppLayout } from '../../layout/AppLayout';
import { ModalPacienteEspontaneo } from '../../ui'
import { addHours, setDefaultOptions } from 'date-fns/esm';
import { Link } from 'react-router-dom';
import { ModalNewPatient } from '../../ui/ModalNewPatient';



export const MyPatientsPage = () => {

    setDefaultOptions({ locale: es })

    const { displayName } = useSelector( state => state.auth )

    const { patients } = useSelector( state => state.patients )
    
    const dispatch = useDispatch();

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

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
                        patients.map(( patient ) => (

                            <Link to="../patient" className="patient-item" key={ patient.id }>
                                <div className="avatar">LA</div>
                                <div className="patient-info-wrapper">
                                    <div className="patient-name">{ patient.displayName }</div>
                                    <div className="patient-info">{ patient.rut }</div>
                                </div>
                            </Link>

                        ))
                    }

                    </div>

                </div>
            </div>
        </AppLayout>
        
  )
}
