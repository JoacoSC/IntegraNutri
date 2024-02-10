import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

import { AppLayout } from "../../layout/AppLayout"
import { Footer } from "../../ui";
import { LoadingScreen } from "../../ui/LoadingScreen"
import { add, format, fromUnixTime, getUnixTime, sub } from "date-fns";
import { setDefaultOptions } from 'date-fns/esm';
import { es } from 'date-fns/locale'

import Nutri_face_scarf from '../../../assets/imgs/navbar/Nutri_face_scarf.svg'
import { Link } from "react-router-dom";
import { startLoadingMyJournal } from "../../store/journal";
import { AlertBox } from "../../ui/AlertBox";

export const HomePage = () => {

    setDefaultOptions({ locale: es })

    const dispatch = useDispatch();

    const { uid, email, isNutritionist } = useSelector( state => state.auth )

    const { userDataID, displayName, rut, region, city } = useSelector( state => state.userInfo )

    const { patients } = useSelector( state => state.patients )

    const { message } = useSelector( state => state.subscription )

    const [isLoading, setIsLoading] = useState( true );

    const [currentTime, setCurrentTime] = useState( getUnixTime( new Date() ) );

    const [nextConsultationPatientsSorted, setNextConsultationPatientsSorted] = useState([])

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    function compare( a, b ) {
        if ( a.nextConsultation < b.nextConsultation ){
          return -1;
        }
        if ( a.nextConsultation > b.nextConsultation ){
          return 1;
        }
        return 0;
      }

    const handlePatientsArray = () => {

        let patientsWithNextConsultation = [];
        let firstFivePatients = [];

        patients.map( ( patient ) => (
            ( patient.nextConsultation !== null && patient.nextConsultation > currentTime )
            ?   patientsWithNextConsultation = [ patient, ...patientsWithNextConsultation ]
            :   null
        ) )

        patientsWithNextConsultation.sort( compare );

        if( patientsWithNextConsultation.length > 4 ){

            for (let i = 0; i < 5; i++) {
                
                firstFivePatients = [ ...firstFivePatients, patientsWithNextConsultation[i] ]
            }

            setNextConsultationPatientsSorted( firstFivePatients );

        }else{
            setNextConsultationPatientsSorted( patientsWithNextConsultation );
        }

        // console.log('firstFivePatients: ', firstFivePatients)
        // console.log('patientsWithNextConsultation: ', patientsWithNextConsultation)

        
    }

    const handleLoadingScreen = () => {

        console.log('rut: ', rut)
        // console.log('isLoading: ', isLoading)

        if( rut !== null ){
            setIsLoading( false )
            // console.log('newJournalIsSet: ', newJournalIsSet)
            // console.log('newJournal: ', newJournal)
        }else{
            setIsLoading( true )
        }
    }

    useEffect(() => {

        handleLoadingScreen();
        
    }, [rut])

    useEffect(() => {
        if( patients !== undefined ){

            handlePatientsArray();
        }
    }, [patients])

    useEffect(() => {
    
        if( isNutritionist !== null && isNutritionist !== false ){
            dispatch ( startLoadingMyJournal( uid ) )
            
        }
    }, [isNutritionist])
    
    return (
        <AppLayout>
        {
            ( isLoading )
            ?   <LoadingScreen isLoading = { isLoading } />
            : <>

            <div className="main">
                    {/* {
                        (!journalIsSet) ? <ModalWelcome /> : null
                    } */}
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
                    { message && <AlertBox message={ message }/>}
                    <div className="home-container">
                        <div className="home-item-container">
                            <div className="sub-title">
                                <h3>Próximos pacientes</h3>
                            </div>
                            <div className="home-item">
                                {
                                    ( nextConsultationPatientsSorted.length > 0 )
                                    ?   nextConsultationPatientsSorted.map( ( patient, index ) => (
                                            ( patient.nextConsultation > currentTime )
                                            ?   <Link to={'../patient?patientID='+patient.id} className="next-patient-item" key={ index }>
                                                    <div>
                                                        { patient.displayName }
                                                    </div>
                                                    <div className="next-patient-date-time">
                                                        { 
                                                            ( format( fromUnixTime( patient.nextConsultation ), "dd/MM/yyyy") === format( fromUnixTime( currentTime ), "dd/MM/yyyy") )
                                                            ?   'Hoy ' + format( fromUnixTime( patient.nextConsultation ), 'HH:mm' )
                                                            :   ( format( sub( fromUnixTime( patient.nextConsultation ), { days: 1 } ), "dd/MM/yyyy") === format( fromUnixTime( currentTime ), "dd/MM/yyyy") )
                                                                ?   'Mañana ' + format( fromUnixTime( patient.nextConsultation ), 'HH:mm' )
                                                                :   capitalizeFirst(format( fromUnixTime( patient.nextConsultation ), "dd/MM/yyyy HH:mm"))
                                                        }
                                                    </div>
                                                </Link>
                                            :   null
                                        ) )
                                    :   <div className="next-patient-item">
                                            No hay pacientes agendados
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="home-item-container">
                            <div className="id-card-container">
                                <div className="id-card-avatar">
                                    <img src={ Nutri_face_scarf } className="id-card-avatar-img" alt="Icono IntegraNutri"/>
                                </div>
                                <div className="id-card-data">
                                    <p className="id-card-data-name">{ displayName }</p>
                                </div>
                                <div className="id-card-data">
                                    <p>{ rut.formatted }</p>
                                </div>
                                <div className="id-card-data">
                                    <p>{ region }, { city }</p>
                                </div>
                                <div className="id-card-data">
                                    <p>{ email }</p>
                                </div>
                                <div className="id-card-data">
                                    <p className="id-card-data-link">{ `integranutri.cl/share?uid=${uid}` }</p>
                                </div>
                                <div className="id-card-data">
                                    <p className="id-card-data-uid">UID: { uid }</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
            </div>
            <Footer/>
            </>
        }
        </AppLayout>
    )
}
