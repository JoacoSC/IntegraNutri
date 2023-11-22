import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth";

import { AppLayout } from "../../layout/AppLayout"
import { Footer } from "../../ui";
import { LoadingScreen } from "../../ui/LoadingScreen"
import { add, format, fromUnixTime, getUnixTime, sub } from "date-fns";
import { setDefaultOptions } from 'date-fns/esm';
import { es } from 'date-fns/locale'

export const HomePage = () => {

    setDefaultOptions({ locale: es })

    const dispatch = useDispatch();

    const { uid, displayName } = useSelector( state => state.auth )

    const { patients } = useSelector( state => state.patients )

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

    useEffect(() => {

        // console.log('isNutritionist: ', isNutritionist)
        // console.log('isLoading: ', isLoading)

        if( uid !== null ){
            setIsLoading( false )
            // console.log('newJournalIsSet: ', newJournalIsSet)
            // console.log('newJournal: ', newJournal)
        }else{
            setIsLoading( true )
        }
    

    }, [uid])

    useEffect(() => {
        if( patients !== undefined ){

            handlePatientsArray();
        }
    }, [patients])
    
    
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
                    <div className="home-item-container">
                        <div className="sub-title">
                            <h3>Próximos pacientes</h3>
                        </div>
                        <div className="home-item">
                            {
                                nextConsultationPatientsSorted.map( ( patient, index ) => (
                                    ( patient.nextConsultation > currentTime )
                                    ?   <div className="next-patient-item" key={ index }>
                                            <div>
                                                { patient.displayName }
                                            </div>
                                            <div>
                                                { 
                                                    ( format( fromUnixTime( patient.nextConsultation ), "dd/MM/yyyy") === format( fromUnixTime( currentTime ), "dd/MM/yyyy") )
                                                    ?   'Hoy'
                                                    :   ( format( sub( fromUnixTime( patient.nextConsultation ), { days: 1 } ), "dd/MM/yyyy") === format( fromUnixTime( currentTime ), "dd/MM/yyyy") )
                                                        ?   'Mañana'
                                                        :   capitalizeFirst(format( fromUnixTime( patient.nextConsultation ), "dd/MM/yyyy"))
                                                }
                                            </div>
                                            <div>
                                                { format( fromUnixTime( patient.nextConsultation ), 'HH:mm' ) }
                                            </div>
                                        </div>
                                    :   null
                                ) )
                            }
                        </div>
                    </div>
                    
            </div>
            <Footer/>
            </>
        }
        </AppLayout>
    )
}
