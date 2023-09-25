import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { add, addDays, format, formatDistanceToNowStrict, fromUnixTime, getUnixTime, set, sub } from "date-fns";
import queryString from "query-string";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


import { useForm, useCalificationIndicator } from "../../hooks";
import { startLogout } from "../../store/auth";
import {
    startLoadingCurrentPatient,
    startLoadingPatientInfo,
    startUpdatingCurrentPatientAnamnesis,
    startUpdatingCurrentPatientDiagnosis,
    startUpdatingCurrentPatientIndications,
    startUpdatingCurrentPatientPhysical_exam,
    startUpdatingCurrentPatientStature,
    startUpdatingCurrentPatientWeight,
    updateCurrentPatientAnamnesis,
    updateCurrentPatientDiagnosis,
    updateCurrentPatientIndications,
    updateCurrentPatientPhysical_exam,
    updateCurrentPatientStature,
    updateCurrentPatientWeight,
    updateCurrentPatientAge,
    clearCurrentPatient,
    updateCurrentPatientCorrectedAge
} from "../../store/currentPatient";

import { AppLayout } from "../../layout/AppLayout";
import {
    GirlsPEFromZeroToTwoYears,
    GirlsPEFromTwoToFiveYears,
    GirlsPEFromFiveToTenYears,
    GirlsTEFromZeroToTwoYears,
    GirlsTEFromTwoToFiveYears,
    GirlsTEFromFiveToNineteenYears,
    GirlsPTFromZeroToTwoYears,
    GirlsPTFromTwoToFiveYears,
    GirlsIMCEFromFiveToNineteenYears,
    BoysPEFromZeroToTwoYears,
    BoysPEFromTwoToFiveYears,
    BoysPEFromFiveToTenYears,
    BoysTEFromZeroToTwoYears,
    BoysTEFromTwoToFiveYears,
    BoysTEFromFiveToNineteenYears,
    BoysPTFromZeroToTwoYears,
    BoysPTFromTwoToFiveYears,
    BoysIMCEFromFiveToNineteenYears,
    DefaultData,
} from "../../data";
import { LoadingScreen } from "../../ui/LoadingScreen";
import { disableConfirmBtn, setErrorCode, switchError, switchPatientPasswordChangedSuccesfully } from "../../store/loginHelper";
import {
    CardEstadioTanner,
    CardPatientExams,
    CardPerimetroCefalico,
    CardPerimetroCintura,
    CardTallaDiana,
    Dropdown,
    Footer,
    ModalPerimetroCefalico,
    ModalPerimetroCintura,
    ModalPresionArterial,
    ModalTallaDiana,
    ModalUpdateCorrectedAge,
    ModalUpdatePatientValues
} from "../../ui";
import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import Dropdown_arrow from '../../../assets/imgs/patient/dropdown_arrow.svg'
import { CardPresionArterial } from "../../ui/CardPresionArterial";


export const PatientPage = () => {

    
    const { uid, displayName, photoURL, isNutritionistStatus } = useSelector( state => state.auth )

    const {
        email,
        patientName,
        nextConsultation,
        anamnesis,
        physical_exam,
        diagnosis,
        indications,
        weight,
        stature,
        imc,
        unixBirthday,
        unixCorrectedBirthday,
        gender,
        age,
        correctedAgeIsSet = null,
        correctedAge = {
            d: 0,
            m: 0,
            y: 0,
        },
        biologicalAgeIsSet,
        biologicalAge = {
            d: 0,
            m: 0,
            y: 0,
        },
        tallaDiana,
        perimetroCefalico,
        perimetroCintura,
        presionArterial,
    } = useSelector((state) => state.currentPatient);

    const [isLoading, setIsLoading] = useState( true );
    
    const [lastWeight, setLastWeight] = useState(0);
    const [lastStature, setLastStature] = useState(0);
    const [ageText, setAgeText] = useState('');
    const [ageForCalcs, setAgeForCalcs] = useState({
        d: 0,
        m: 0,
        y: 0,
    });
    const [unixBirthdayForCalcs, setUnixBirthdayForCalcs] = useState(0)
    

    const [active, setActive] = useState("0");

    const weightLength = weight?.length;
    const statureLength = stature?.length;

    const nutritionalCalification = useCalificationIndicator(
        lastWeight,
        lastStature,
        ageForCalcs,
        unixBirthdayForCalcs,
        gender
    );

    // console.log('nutritionalCalification: ', nutritionalCalification)

    const [showHideReferenceChart, setShowHideReferenceChart] = useState(true)

    const [ hideChartButtons, setHideChartButtons ] = useState({
        PEButton: false,
        TEButton: false,
        PTButton: false,
        IMCButton: false,
    })

    const [referenceData, setReferenceData] = useState({
        labels: DefaultData.map( (data) => data.months ),
        datasets: [
            {
                label: "-2DE (Kg)",
                data: DefaultData.map( (data) => data.Minus2DE ),
                borderColor: 'rgba(0,174,239, 0.3)',
                backgroundColor: 'rgba(0,174,239, 0.3)',
                pointRadius: 1,
            },
            {
                label: "-1DE (Kg)",
                data: DefaultData.map( (data) => data.Minus1DE ),
                borderColor: 'rgba(237,2,140, 0.3)',
                backgroundColor: 'rgba(237,2,140, 0.3)',
                pointRadius: 1,
            },
            {
                label: "Mediana (Kg)",
                data: DefaultData.map( (data) => data.Median ),
                borderColor: 'rgba(35,31,32, 0.3)',
                backgroundColor: 'rgba(35,31,32, 0.3)',
                pointRadius: 1,
            },
            {
                label: "+1DE (Kg)",
                data: DefaultData.map( (data) => data.Plus1DE ),
                borderColor: 'rgba(237,2,140, 0.3)',
                backgroundColor: 'rgba(237,2,140, 0.3)',
                pointRadius: 1,
            },
            {
                label: "+2DE (Kg)",
                data: DefaultData.map( (data) => data.Plus2DE ),
                borderColor: 'rgba(0,174,239, 0.3)',
                backgroundColor: 'rgba(0,174,239, 0.3)',
                pointRadius: 1,
            },
        ]
    });

    const [options, setOptions] = useState({
        maintainAspectRatio : false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Seleccione un gráfico, por favor',
            },
        },
    })

    const [userData, setUserData] = useState({
        labels: 'A',
        datasets: [
            
            {
                label: "Seleccione un gráfico, por favor",
                data: 0,
                borderColor: '#F58220',
                backgroundColor: '#F58220',
            },
        ]
    });

    const updateChart = () => {

        setUserData({
            labels: DefaultData?.map( (data) => data.B ),
            datasets: [
                
                {
                    label: "Grafico del paciente",
                    data: DefaultData?.map( (data) => data.A ),
                    borderColor: '#F58220',
                    backgroundColor: '#F58220',
                },
            ]
        })
    }

    useEffect(() => {

        updateChart();        
        if( weight !== null && stature !== null ){
            // tt = tt.replace(/,/g, '.')
            setLastWeight( weight[weight.length - 1].A?.replace(/,/g, '.') )
            setLastStature( stature[stature.length - 1].A?.replace(/,/g, '.') )
            
            // console.log(lastWeight)
        }

    }, [weight, stature])

    const generateAgeText = ( unix ) => {

        let d1 = fromUnixTime( unix ).getDate();
        let m1 = fromUnixTime( unix ).getMonth();
        let y1 = fromUnixTime( unix ).getFullYear();
        let date = new Date();
        let d2 = date.getDate();
        let m2 = date.getMonth();
        let y2 = date.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2) {
            d2 = d2 + month[m2 + 1];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;

        if( y === 0 ){

            if( d <= 15 ){
                if( m === 1 ){
                    return m + " mes"
                }else{
                    return m + " meses"
                }
            }else{
                m2 = m + 1;
                if( m2 === 1 ){
                    return m2 + " mes"
                }else{
                    return m2 + " meses"
                }
            }
            
        }
        if( y > 0 ){

            if( d <= 15 ){
                return y + " años " + m + " meses";
            }else{
                m2 = m + 1;
                if( m2 === 12 ){
                    y2 = y + 1;
                    m2 = 0;
                    return y2 + " años " + m2 + " meses";
                }else{

                    return y + " años " + m2 + " meses";
                }
            }
        }
    }
    
    const defaultPatient = {
        unixAge: 0,
        weight: 0,
        stature: 0,
        anamnesis: anamnesis,
        physical_exam: physical_exam,
        diagnosis: diagnosis,
        indications: indications,
        graphs: "Escribe aquí :)",
    }

    const { consultationHours, consultationMinutes } = useSelector( state => state.journal )

    const dispatch = useDispatch();

    const location = useLocation();

    const {
      formWeight,
      formStature,
      formAnamnesis,
      formPhysical_exam,
      formDiagnosis,
      formIndications,
      graphs,
      onInputChange,
    } = useForm(defaultPatient);

    const { patientID = '' } = queryString.parse( location.search );

    useEffect(() => {
        
        if( patientID === '' ){

            dispatch( clearCurrentPatient() );
            dispatch( startLoadingPatientInfo( displayName, photoURL ) )
    
        }else{
            dispatch( clearCurrentPatient() );    
            dispatch( startLoadingCurrentPatient( uid, patientID ) )            
        }
    
    }, [patientID])

    useEffect(() => {

        let d1 = fromUnixTime( unixBirthday ).getDate();
        let m1 = fromUnixTime( unixBirthday ).getMonth();
        let y1 = fromUnixTime( unixBirthday ).getFullYear();
        let date = new Date();
        let d2 = date.getDate();
        let m2 = date.getMonth();
        let y2 = date.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2) {
            d2 = d2 + month[m2 + 1];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;
        
        dispatch( updateCurrentPatientAge({ y, m, d }) );
        dispatch( updateCurrentPatientCorrectedAge({ y, m, d }) );
        
    }, [unixBirthday])
    
    
    const onLogout = () => {
            
        dispatch( startLogout() );
    
    }

    const onAnamnesisSubmit = ( event ) => {
        event.preventDefault();

        if( formAnamnesis === undefined ){
            const blankSpace = "";

            dispatch( updateCurrentPatientAnamnesis({ blankSpace }) )
            dispatch( startUpdatingCurrentPatientAnamnesis( uid, patientID, blankSpace ) )
        }else{

            dispatch( updateCurrentPatientAnamnesis({ formAnamnesis }) )
            dispatch( startUpdatingCurrentPatientAnamnesis( uid, patientID, formAnamnesis ) )
        }        
    }
    const onPhysical_examSubmit = ( event ) => {
        event.preventDefault();

        if( formPhysical_exam === undefined ){
            const blankSpace = "";

            dispatch( updateCurrentPatientPhysical_exam({ blankSpace }) )
            dispatch( startUpdatingCurrentPatientPhysical_exam( uid, patientID, blankSpace ) )
        }else{

            dispatch( updateCurrentPatientPhysical_exam({ formPhysical_exam }) )
            dispatch( startUpdatingCurrentPatientPhysical_exam( uid, patientID, formPhysical_exam ) )
        }

    }
    const onDiagnosisSubmit = ( event ) => {
        event.preventDefault();

        if( formDiagnosis === undefined ){
            const blankSpace = "";

            dispatch( updateCurrentPatientDiagnosis({ blankSpace }) )
            dispatch( startUpdatingCurrentPatientDiagnosis( uid, patientID, blankSpace ) )
        }else{

            dispatch( updateCurrentPatientDiagnosis({ formDiagnosis }) )
            dispatch( startUpdatingCurrentPatientDiagnosis( uid, patientID, formDiagnosis ) )
        }
    }
    const onIndicationsSubmit = ( event ) => {
        event.preventDefault();

        if( formIndications === undefined ){
            const blankSpace = "";

            dispatch( updateCurrentPatientIndications({ blankSpace }) )
            dispatch( startUpdatingCurrentPatientIndications( uid, patientID, blankSpace ) )
        }else{

            dispatch( updateCurrentPatientIndications({ formIndications }) )
            dispatch( startUpdatingCurrentPatientIndications( uid, patientID, formIndications ) )
        }
    }
    // const onWeightSubmit = ( event ) => {
    //     event.preventDefault();

    //     dispatch( updateCurrentPatientWeight({ formWeight }) )
    //     dispatch( startUpdatingCurrentPatientWeight( uid, patientID, formWeight ) )
    // }

    // const onStatureSubmit = ( event ) => {
    //     event.preventDefault();

    //     dispatch( updateCurrentPatientStature({ formStature }) )
    //     dispatch( startUpdatingCurrentPatientStature( uid, patientID, formStature ) )
    // }

    const onShowHideReferenceChart = () => {
        setShowHideReferenceChart( !showHideReferenceChart )
    }

    const handleHideChartButtons = () => {

        // PE Button
        if( ageForCalcs.y <= 1 || ageForCalcs === 2 && ageForCalcs.m === 0 ){
            // De cero a dos
            
            setHideChartButtons({
                PEButton: false,
                TEButton: false,
                PTButton: false,
                IMCButton: true,
            })
        }
        if ( ageForCalcs.y === 2 && ageForCalcs.m > 0 ){
            // De dos a cinco
            
            setHideChartButtons({
                PEButton: false,
                TEButton: false,
                PTButton: false,
                IMCButton: true,
            })
        }
        
        if( ageForCalcs.y > 2 && ageForCalcs.y <= 4 || ageForCalcs.y === 5 && ageForCalcs.m === 0 ){
            // De dos a cinco
            
            setHideChartButtons({
                PEButton: false,
                TEButton: false,
                PTButton: false,
                IMCButton: true,
            })
        }

        if( ageForCalcs.y === 5 && ageForCalcs.m > 0 ){
            // De cinco a diez
            
            setHideChartButtons({
                PEButton: true,
                TEButton: false,
                PTButton: true,
                IMCButton: false,
            })
        }
        if( ageForCalcs.y > 5 && ageForCalcs.y <= 9 || ageForCalcs.y === 10 && ageForCalcs.m === 0 ){
            // De cinco a diez
            
            setHideChartButtons({
                PEButton: true,
                TEButton: false,
                PTButton: true,
                IMCButton: false,
            })
        }

        if( ageForCalcs.y === 10 && ageForCalcs.m > 0 ){
            // De diez a diecinueve
            
            setHideChartButtons({
                PEButton: true,
                TEButton: false,
                PTButton: true,
                IMCButton: false,
            })
        }
        if( ageForCalcs.y > 10 && ageForCalcs.y <= 18 || ageForCalcs.y === 19 && ageForCalcs.m === 0 ){
            // De diez a diecinueve
            
            setHideChartButtons({
                PEButton: true,
                TEButton: false,
                PTButton: true,
                IMCButton: false,
            })
        }
        
    }

    useEffect(() => {

        if( correctedAgeIsSet ){
            // console.log('correctedAge: ', correctedAge)
            
            if(correctedAge.d > 15){
                if(correctedAge.m == 11){
                    
                    setAgeForCalcs({
                        d: 0,
                        m: 0,
                        y: correctedAge.y + 1,
                    });
                }else{

                    // console.log('correctedAge.m: ', correctedAge.m)
                    // console.log('correctedAge.m + 1: ', correctedAge.m + 1)

                    setAgeForCalcs({
                        d: 0,
                        m: correctedAge.m + 1,
                        y: correctedAge.y,
                    });
                    // console.log('corrected_ageForCalcs11: ', ageForCalcs)
                }
            }else{
                setAgeForCalcs({
                    d: 0,
                    m: correctedAge.m,
                    y: correctedAge.y,
                });
            }
            setUnixBirthdayForCalcs(unixCorrectedBirthday);
            setAgeText( generateAgeText( unixCorrectedBirthday ) );
            
            // console.log('corrected_ageForCalcs: ', ageForCalcs)
        }else{

            if(age.d > 15){
                if(age.m == 11){
                    
                    setAgeForCalcs({
                        d: 0,
                        m: 0,
                        y: age.y + 1,
                    });
                }else{

                    setAgeForCalcs({
                        d: 0,
                        m: age.m + 1,
                        y: age.y,
                    });
                }
            }else{
                setAgeForCalcs({
                    d: 0,
                    m: age.m,
                    y: age.y,
                });
            }
            setUnixBirthdayForCalcs(unixBirthday);
            setAgeText( generateAgeText( unixBirthday ) );
            // console.log('ageForCalcs: ', ageForCalcs)

        }

        handleHideChartButtons();
        

    }, [correctedAge])

    useEffect(() => {
        handleHideChartButtons();
    }, [ageForCalcs])
    

    // console.log('ageForCalcs: ', ageForCalcs)
    

    const handleChartsSwitch = ( event ) => {
        const id = event.target.id;
        setActive( id );
        
        if( id === "1"){
            
            setOptions({
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Gráfico P/E del paciente',
                    },
                }
            });
            setUserData({
                labels: weight?.map( (data) => data.B ),
                datasets: [
                    
                    {
                        label: "P/E del paciente (Kg)",
                        data: weight?.map( (data) => data.A ),
                        borderColor: '#ffa41d',
                        backgroundColor: '#ffa41d',
                    },
                ]
            })

            if( gender === "Femenino" ){

                // Graficos P/E

                if( ageForCalcs.y <= 1 || ageForCalcs === 2 && ageForCalcs.m === 0 ){

                    // console.log('entré a GirlsPEFromZeroToTwoYears')
                    
                    setReferenceData({
                        labels: GirlsPEFromZeroToTwoYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPEFromZeroToTwoYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPEFromZeroToTwoYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPEFromZeroToTwoYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPEFromZeroToTwoYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPEFromZeroToTwoYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if ( ageForCalcs.y === 2 && ageForCalcs.m > 0 ){

                    // console.log('entré a GirlsPEFromTwoToFiveYears')

                    setReferenceData({
                        labels: GirlsPEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 2 && ageForCalcs.y <= 4 || ageForCalcs.y === 5 && ageForCalcs.m === 0 ){
                    // console.log('entré a GirlsPEFromTwoToFiveYears')
                    
                    setReferenceData({
                        labels: GirlsPEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y === 5 && ageForCalcs.m > 0 ){
                    
                    // console.log('entré a GirlsPEFromFiveToTenYears')
                                        
                    setReferenceData({
                        labels: GirlsPEFromFiveToTenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 5 && ageForCalcs.y <= 9 || ageForCalcs.y === 10 && ageForCalcs.m === 0 ){

                    // console.log('entré a GirlsPEFromFiveToTenYears')
                    
                    setReferenceData({
                        labels: GirlsPEFromFiveToTenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPEFromFiveToTenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }

            if( gender === "Masculino" ){

                // Graficos P/E

                if( ageForCalcs.y <= 1 || ageForCalcs === 2 && ageForCalcs.m === 0 ){

                    // console.log('entré a BoysPEFromZeroToTwoYears')
                    
                    setReferenceData({
                        labels: BoysPEFromZeroToTwoYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPEFromZeroToTwoYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPEFromZeroToTwoYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPEFromZeroToTwoYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPEFromZeroToTwoYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPEFromZeroToTwoYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if ( ageForCalcs.y === 2 && ageForCalcs.m > 0 ){

                    // console.log('entré a BoysPEFromTwoToFiveYears')

                    setReferenceData({
                        labels: BoysPEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 2 && ageForCalcs.y <= 4 || ageForCalcs.y === 5 && ageForCalcs.m === 0 ){
                    // console.log('entré a BoysPEFromTwoToFiveYears')
                    
                    setReferenceData({
                        labels: BoysPEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y === 5 && ageForCalcs.m > 0 ){
                    
                    // console.log('entré a BoysPEFromFiveToTenYears')
                                        
                    setReferenceData({
                        labels: BoysPEFromFiveToTenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 5 && ageForCalcs.y <= 9 || ageForCalcs.y === 10 && ageForCalcs.m === 0 ){

                    // console.log('entré a BoysPEFromFiveToTenYears')
                    
                    setReferenceData({
                        labels: BoysPEFromFiveToTenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPEFromFiveToTenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }

        }

        if( id === "2"){
            
            setOptions({
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Gráfico T/E del paciente',
                    },
                }
            });
            setUserData({
                labels: stature?.map( (data) => data.B ),
                datasets: [
                    
                    {
                        label: "T/E del paciente (Cm)",
                        data: stature?.map( (data) => data.A ),
                        borderColor: '#3d8eff',
                        backgroundColor: '#3d8eff',
                    },
                ]
            })

            if( gender === "Femenino" ){

                // Graficos T/E

                if( ageForCalcs.y <= 1 || ageForCalcs === 2 && ageForCalcs.m === 0 ){

                    // console.log('entré a GirlsTEFromZeroToTwoYears')
                    
                    setReferenceData({
                        labels: GirlsTEFromZeroToTwoYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: GirlsTEFromZeroToTwoYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: GirlsTEFromZeroToTwoYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: GirlsTEFromZeroToTwoYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: GirlsTEFromZeroToTwoYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: GirlsTEFromZeroToTwoYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if ( ageForCalcs.y === 2 && ageForCalcs.m > 0 ){

                    // console.log('entré a GirlsTEFromTwoToFiveYears')

                    setReferenceData({
                        labels: GirlsTEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 2 && ageForCalcs.y <= 4 || ageForCalcs.y === 5 && ageForCalcs.m === 0 ){
                    // console.log('entré a GirlsTEFromTwoToFiveYears')
                    
                    setReferenceData({
                        labels: GirlsTEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: GirlsTEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y === 5 && ageForCalcs.m > 0 ){
                    
                    // console.log('entré a GirlsTEFromFiveToNineteenYears')
                                        
                    setReferenceData({
                        labels: GirlsTEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 5 && ageForCalcs.y <= 18 || ageForCalcs.y === 19 && ageForCalcs.m === 0 ){

                    // console.log('entré a GirlsTEFromFiveToNineteenYears')
                    
                    setReferenceData({
                        labels: GirlsTEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: GirlsTEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }

            if( gender === "Masculino" ){

                // Graficos T/E

                if( ageForCalcs.y <= 1 || ageForCalcs === 2 && ageForCalcs.m === 0 ){

                    // console.log('entré a BoysTEFromZeroToTwoYears')
                    
                    setReferenceData({
                        labels: BoysTEFromZeroToTwoYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: BoysTEFromZeroToTwoYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: BoysTEFromZeroToTwoYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: BoysTEFromZeroToTwoYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: BoysTEFromZeroToTwoYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: BoysTEFromZeroToTwoYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if ( ageForCalcs.y === 2 && ageForCalcs.m > 0 ){

                    // console.log('entré a BoysTEFromTwoToFiveYears')

                    setReferenceData({
                        labels: BoysTEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 2 && ageForCalcs.y <= 4 || ageForCalcs.y === 5 && ageForCalcs.m === 0 ){
                    // console.log('entré a BoysTEFromTwoToFiveYears')
                    
                    setReferenceData({
                        labels: BoysTEFromTwoToFiveYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: BoysTEFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y === 5 && ageForCalcs.m > 0 ){
                    
                    // console.log('entré a BoysTEFromFiveToNineteenYears')
                                        
                    setReferenceData({
                        labels: BoysTEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 5 && ageForCalcs.y <= 18 || ageForCalcs.y === 19 && ageForCalcs.m === 0 ){

                    // console.log('entré a BoysTEFromFiveToNineteenYears')
                    
                    setReferenceData({
                        labels: BoysTEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Cm)",
                                data: BoysTEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }
        }

        if( id === "3"){
            
            setOptions({
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Gráfico P/T del paciente',
                    },
                }
            });
            setUserData({
                labels: stature?.map( (data) => data.A + ' cm'),
                datasets: [
                    
                    {
                        label: "P/T del paciente (Kg)",
                        data: weight?.map( (data) => data.A ),
                        borderColor: '#1dffce',
                        backgroundColor: '#1dffce',
                    },
                ]
            })

            if( gender === "Femenino" ){

                // Graficos P/E

                if( ageForCalcs.y <= 1 || ageForCalcs === 2 && ageForCalcs.m === 0 ){

                    // console.log('entré a GirlsPTFromZeroToTwoYears')
                    
                    setReferenceData({
                        labels: GirlsPTFromZeroToTwoYears.map( (data) => data.stature ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPTFromZeroToTwoYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPTFromZeroToTwoYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPTFromZeroToTwoYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPTFromZeroToTwoYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPTFromZeroToTwoYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if ( ageForCalcs.y === 2 && ageForCalcs.m > 0 ){

                    // console.log('entré a GirlsPTFromTwoToFiveYears')

                    setReferenceData({
                        labels: GirlsPTFromTwoToFiveYears.map( (data) => data.stature ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 2 && ageForCalcs.y <= 4 || ageForCalcs.y === 5 && ageForCalcs.m === 0 ){
                    // console.log('entré a GirlsPTFromTwoToFiveYears')
                    
                    setReferenceData({
                        labels: GirlsPTFromTwoToFiveYears.map( (data) => data.stature ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: GirlsPTFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }

            if( gender === "Masculino" ){

                // Graficos P/E

                if( ageForCalcs.y <= 1 || ageForCalcs === 2 && ageForCalcs.m === 0 ){

                    // console.log('entré a BoysPTFromZeroToTwoYears')
                    
                    setReferenceData({
                        labels: BoysPTFromZeroToTwoYears.map( (data) => data.stature ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPTFromZeroToTwoYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPTFromZeroToTwoYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPTFromZeroToTwoYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPTFromZeroToTwoYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPTFromZeroToTwoYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if ( ageForCalcs.y === 2 && ageForCalcs.m > 0 ){

                    // console.log('entré a BoysPTFromTwoToFiveYears')

                    setReferenceData({
                        labels: BoysPTFromTwoToFiveYears.map( (data) => data.stature ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 2 && ageForCalcs.y <= 4 || ageForCalcs.y === 5 && ageForCalcs.m === 0 ){
                    // console.log('entré a BoysPTFromTwoToFiveYears')
                    
                    setReferenceData({
                        labels: BoysPTFromTwoToFiveYears.map( (data) => data.stature ),
                        datasets: [
                            {
                                label: "-2DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg)",
                                data: BoysPTFromTwoToFiveYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }
        }

        if( id === "4"){
            
            setOptions({
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Gráfico IMC/E del paciente',
                    },
                }
            });
            setUserData({
                labels: imc?.map( (data) => data.B ),
                datasets: [
                    
                    {
                        label: "IMC/E del paciente (Kg/m²)",
                        data: imc?.map( (data) => data.A ),
                        borderColor: '#fd31e5',
                        backgroundColor: '#fd31e5',
                    },
                ]
            })
            
            if( gender === "Femenino" ){

                // Graficos IMC/E

                if( ageForCalcs.y === 5 && ageForCalcs.m > 0 ){
                    
                    // console.log('entré a GirlsIMCEFromFiveToNineteenYears')
                                        
                    setReferenceData({
                        labels: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+3DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Plus3DE ),
                                borderColor: 'rgba(0,166,110, 0.3)',
                                backgroundColor: 'rgba(0,166,110, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 5 && ageForCalcs.y <= 18 || ageForCalcs.y === 19 && ageForCalcs.m === 0 ){

                    // console.log('entré a GirlsIMCEFromFiveToNineteenYears')
                    
                    setReferenceData({
                        labels: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+3DE (Kg/m²)",
                                data: GirlsIMCEFromFiveToNineteenYears.map( (data) => data.Plus3DE ),
                                borderColor: 'rgba(0,166,110, 0.3)',
                                backgroundColor: 'rgba(0,166,110, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }

            if( gender === "Masculino" ){

                // Graficos IMC/E

                if( ageForCalcs.y === 5 && ageForCalcs.m > 0 ){
                    
                    // console.log('entré a BoysIMCEFromFiveToNineteenYears')
                                        
                    setReferenceData({
                        labels: BoysIMCEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+3DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Plus3DE ),
                                borderColor: 'rgba(0,166,110, 0.3)',
                                backgroundColor: 'rgba(0,166,110, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
                if( ageForCalcs.y > 5 && ageForCalcs.y <= 18 || ageForCalcs.y === 19 && ageForCalcs.m === 0 ){

                    // console.log('entré a BoysIMCEFromFiveToNineteenYears')
                    
                    setReferenceData({
                        labels: BoysIMCEFromFiveToNineteenYears.map( (data) => data.months ),
                        datasets: [
                            {
                                label: "-2DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Minus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "-1DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Minus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "Mediana (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Median ),
                                borderColor: 'rgba(35,31,32, 0.3)',
                                backgroundColor: 'rgba(35,31,32, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+1DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Plus1DE ),
                                borderColor: 'rgba(237,2,140, 0.3)',
                                backgroundColor: 'rgba(237,2,140, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+2DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Plus2DE ),
                                borderColor: 'rgba(0,174,239, 0.3)',
                                backgroundColor: 'rgba(0,174,239, 0.3)',
                                pointRadius: 1,
                            },
                            {
                                label: "+3DE (Kg/m²)",
                                data: BoysIMCEFromFiveToNineteenYears.map( (data) => data.Plus3DE ),
                                borderColor: 'rgba(0,166,110, 0.3)',
                                backgroundColor: 'rgba(0,166,110, 0.3)',
                                pointRadius: 1,
                            },
                        ]
                    })
                }
            }
        }

        if( id === "5"){
            
            setOptions({
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Gráfico PCe/E del paciente',
                    },
                }
            });
            setUserData({
                labels: weight?.map( (data) => data.B ),
                datasets: [
                    
                    {
                        label: "PCe/E del paciente (Cm)",
                        data: weight?.map( (data) => data.A ),
                        borderColor: '#90fd31',
                        backgroundColor: '#90fd31',
                    },
                ]
            })
        }
    }

    useEffect(() => {

        if( email !== null ){
            setIsLoading( false )
        }else{
            setIsLoading( true )
        }
    

    }, [email])

    useEffect(() => {
    
        dispatch( switchPatientPasswordChangedSuccesfully( false ) )
        dispatch( disableConfirmBtn( false ) );
        dispatch( switchError( false ) );
        dispatch( setErrorCode( null ) );
    }, []);

    const patientObject = {
        'uid' : uid,
        'patientID' : patientID,
        'type': 'peso',
        'age' : age,
        'ageText' : ageText,
        'weight' : weight,
        'lastWeight' : lastWeight,
        'stature' : stature,
        'lastStature' : lastStature,
        'imc' : imc,
        'unixBirthday' : unixBirthday,
        'gender' : gender,
        'ageForCalcs' : ageForCalcs,
    }
    
    return (
      <>
        <AppLayout>
            <div className="main">
            {
                ( isLoading )
                ?   <LoadingScreen isLoading = { isLoading } />
                : <>
                    <div className="logout">
                    <button className="btn-logout" type="button" onClick={onLogout}>
                        Cerrar sesión
                    </button>
                    </div>
                    <div className="patient-wrapper">
                        <div className="patient-navbar">
                            <div className="patient-consultation-time-container">
                                <div className="patient-consultation-time">
                                    <b>
                                        Siguiente consulta:
                                    </b>
                                    {nextConsultation !== null
                                        ? 
                                        " " +
                                        format(fromUnixTime(nextConsultation), "dd/MMM/yyyy") +
                                        " de " +
                                        format(fromUnixTime(nextConsultation), "hh:mm") +
                                        " a " +
                                        format(
                                            add(fromUnixTime(nextConsultation), {
                                            hours: consultationHours,
                                            minutes: consultationMinutes,
                                            }),
                                            "hh:mm"
                                        )
                                        : " No hay horas agendadas"}
                                </div>
                                {/* <div className="patient-consultation-time">
                                    {nextConsultation !== null
                                        ? 
                                        : ""}
                                </div> */}
                            </div>
                            {
                                (isNutritionistStatus)
                                ?   <Dropdown
                                        patientObject = { patientObject }
                                    />
                                :   null
                            }
                            
                        </div>
                        <div className="patient-primary-card-row">
                            <div className="patient-primary-card">
                                <div className="patient-data">
                                    <div className="patient-avatar">
                                    {/* {patientName.substring(0, 2)} */}
                                    <img src={ IntegraNutri_ellipse } className="logo-item" alt="Icono IntegraNutri"/>
                                    </div>
                                    <div className="patient-name">{patientName}</div>
                                    <div className="patient-gender"><b>Género: </b>{gender}</div>
                                    <div className="patient-gender"><b>Fecha de nacimiento: </b>
                                    {   (unixBirthday)
                                        ?   format(fromUnixTime(unixBirthday), "dd/MMM/yyyy")
                                        :   null
                                        
                                    }</div>
                                    
                                </div>
                                <div className="patient-info-container">
                                    <div className="patient-info-first-half-container">
                                        <div className="patient-age">
                                            {/* <div className="age-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="none" viewBox="0 0 43 43">
                                                    <circle cx="21.5" cy="21.5" r="21.5" fill="#DBFFD6"/>
                                                    <circle cx="20" cy="17" r="4" stroke="#5EC151" strokeLinecap="round" strokeWidth="2"/>
                                                    <path fill="#5EC151" fillRule="evenodd" d="M21.327 24.076C20.889 24.026 20.445 24 20 24c-1.92 0-3.806.474-5.369 1.373-1.562.9-2.75 2.197-3.3 3.738a1 1 0 0 0 1.883.672c.362-1.01 1.182-1.967 2.415-2.676 1.014-.584 2.235-.957 3.529-1.07a3.005 3.005 0 0 1 2.169-1.961Z" clipRule="evenodd"/>
                                                    <rect width="9" height="8" x="22" y="23" stroke="#5EC151" strokeWidth="2" rx="2"/>
                                                    <path fill="#5EC151" d="M22 25a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2h-9Z"/>
                                                    <path stroke="#5EC151" strokeLinecap="round" strokeWidth="2" d="M24 22v1m5-1v1"/>
                                                    <rect width="2" height="1" x="24" y="26" fill="#5EC151" rx=".5"/>
                                                    <rect width="2" height="1" x="24" y="28" fill="#5EC151" rx=".5"/>
                                                    <rect width="2" height="1" x="27" y="26" fill="#5EC151" rx=".5"/>
                                                    <rect width="2" height="1" x="27" y="28" fill="#5EC151" rx=".5"/>
                                                </svg>
                                            </div> */}
                                            <div className="patient-parameter-title">
                                                {/* <img src={ Age_icon } className="patient-parameter-icon" alt="Icono IntegraNutri"/> */}
                                                <p>Edad</p>
                                            </div>
                                            <div className="patient-parameter-value-container">
                                                <p className="patient-parameter-value">
                                                    { generateAgeText( unixBirthday ) }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="patient-corrected-age">
                                            {/* <div className="age-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" fill="none" viewBox="0 0 43 43">
                                                    <circle cx="21.5" cy="21.5" r="21.5" fill="#D6EEFF"/>
                                                    <circle cx="20" cy="17" r="4" stroke="#5192C1" strokeLinecap="round" strokeWidth="2"/>
                                                    <path fill="#5192C1" fillRule="evenodd" d="M21.327 24.076C20.889 24.026 20.445 24 20 24c-1.92 0-3.806.474-5.369 1.373-1.562.9-2.75 2.197-3.3 3.738a1 1 0 0 0 1.883.672c.362-1.01 1.182-1.967 2.415-2.676 1.014-.584 2.235-.957 3.529-1.07a3.005 3.005 0 0 1 2.169-1.961Z" clipRule="evenodd"/>
                                                    <rect width="9" height="8" x="22" y="23" stroke="#5192C1" strokeWidth="2" rx="2"/>
                                                    <path fill="#5192C1" d="M22 25a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2h-9Z"/>
                                                    <path stroke="#5192C1" strokeLinecap="round" strokeWidth="2" d="M24 22v1m5-1v1"/>
                                                    <rect width="2" height="1" x="24" y="26" fill="#5192C1" rx=".5"/>
                                                    <rect width="2" height="1" x="24" y="28" fill="#5192C1" rx=".5"/>
                                                    <rect width="2" height="1" x="27" y="26" fill="#5192C1" rx=".5"/>
                                                    <rect width="2" height="1" x="27" y="28" fill="#5192C1" rx=".5"/>
                                                </svg>
                                            </div> */}
                                            <div className="patient-parameter-title">Edad Corregida</div>
                                            <div className="patient-parameter-value-container">
                                                {   ( correctedAgeIsSet === true )
                                                    ?   <p className="patient-parameter-value">
                                                            { generateAgeText( unixCorrectedBirthday ) }
                                                        </p>
                                                    :   <p className="patient-parameter-value">
                                                            No aplica
                                                        </p>
                                                }
                                            </div>
                                        </div>  

                                    </div>
                                    <div className="patient-info-second-half-container">
                                        <div className="patient-weight">
                                            {/* <div className="weight-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="43"
                                                height="43"
                                                fill="none"
                                                viewBox="0 0 43 43"
                                            >
                                                <circle cx="21.5" cy="21.5" r="21.5" fill="#F5EEFF" />
                                                <path
                                                stroke="#452372"
                                                strokeLinecap="round"
                                                strokeWidth="2"
                                                d="M33.591 26.106a12 12 0 1 0-23.182 0M22 11v2.667m-8.485.847L15.4 16.4m15.085-1.886L28.6 16.4m4.991 9.705-2.576-.69m-20.606.69 2.576-.69"
                                                />
                                                <path
                                                stroke="#927CB0"
                                                strokeWidth="2"
                                                d="M24.717 22.618c.485 1.04-.204 2.388-1.54 3.01-1.334.622-2.81.284-3.294-.756-.553-1.186-2.143-7.956-2.964-11.532-.12-.522.547-.833.87-.405 2.212 2.927 6.375 8.497 6.928 9.683Z"
                                                />
                                            </svg>
                                            </div> */}
                                            <div className="patient-parameter-title">
                                                Peso
                                                {/* <span className="weight-indicator-panel"><p>Obesidad</p></span> */}
                                            </div>
                                            <div className="patient-parameter-value-container">
                                                <p className= "patient-parameter-value"> {
                                                    (weightLength > 1)
                                                    ?   <>
                                                            {weight[weightLength - 1].A}
                                                            &nbsp;Kg
                                                        </>
                                                    : 'No hay datos'
                                                } </p>
                                                
                                                
                                            </div>
                                            
                                        </div>
                                        <div className="patient-stature">
                                            {/* <div className="stature-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="43"
                                                height="43"
                                                fill="none"
                                                viewBox="0 0 43 43"
                                            >
                                                <circle cx="21.5" cy="21.5" r="21.5" fill="#FFF3F1" />
                                                <path
                                                fill="#FF8976"
                                                d="m18 12-.707-.707.707-.707.707.707L18 12Zm1 15a1 1 0 1 1-2 0h2Zm-6.707-10.707 5-5 1.414 1.414-5 5-1.414-1.414Zm6.414-5 5 5-1.414 1.414-5-5 1.414-1.414ZM19 12v15h-2V12h2Zm7 20-.707.707.707.707.707-.707L26 32Zm1-15a1 1 0 1 0-2 0h2Zm-6.707 10.707 5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM27 32V17h-2v15h2Z"
                                                />
                                            </svg>
                                            </div> */}
                                            <div className="patient-parameter-title">Talla</div>
                                            <div className="patient-parameter-value-container">
                                                <p className= "patient-parameter-value"> { 
                                                    (statureLength > 1)
                                                    ?   <>
                                                        {stature[statureLength - 1].A}
                                                        &nbsp;Cm

                                                    </> 
                                                    : 'No hay datos'
                                                } </p>
                                                
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <button type="submit" hidden></button>
                            </div>
                            <div>
                                {
                                    <CardPatientExams uid = { uid } patientID = { patientID }/>
                                }
                                
                                

                            </div>
                        </div>
                        <div className="patient-secondary-card-row">

                            {
                                (biologicalAgeIsSet)
                                ?   <CardEstadioTanner/>
                                :   null
                            }    
                                
                            {
                                (!!presionArterial && ageForCalcs.y > 0)
                                ?   <CardPresionArterial/>
                                :   null
                            }
                            {
                                (!!tallaDiana)
                                ?   <CardTallaDiana/>
                                :   null
                            }
                            {
                                (!!perimetroCefalico && ageForCalcs.y < 3)
                                ?   <CardPerimetroCefalico/>
                                :   null
                            }
                            {
                                (!!perimetroCintura && ageForCalcs.y > 5)
                                ?   <CardPerimetroCintura/>
                                :   null
                            }
                            
                        </div>
                        {/* <div className="patient-alt-buttons">
                            <div className="alt-button-container">
                            {
                                (isNutritionistStatus)
                                ?   <ModalTallaDiana uid={ uid } patientID={ patientID } />
                                :   <>
                                        <div className="talla-diana-btn-patient" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                                            Talla Diana&nbsp;
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 7H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                <path d="M5 12H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                <path d="M5 17H12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                <path d="M19 20L22 17M19 20L16 17M19 20L19 4M19 4L16 7M19 4L22 7" stroke="white" strokeWidth="2"/>
                                            </svg>

                                        </div>
                                    </>
                            }
                                {
                                    (!!tallaDiana)

                                    ?<div className="alt-button-result">
                                        { tallaDiana } cm
                                        <div className="alt-button-info" data-tooltip="Este resultado puede presentar una variabilidad de hasta +-8,5 cm">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM13 17V11H11V17H13Z" fill="#6D22D0"/>
                                            </svg>
                                        </div>
                                    </div>
                                    : null
                                    
                                }
                                
                            </div>

                            {
                                ( ageForCalcs.y < 3 )
                                    ?   <div className="alt-button-container">
                                            {
                                                ( ageForCalcs.y < 3 )
                                                ?   (isNutritionistStatus)
                                                    ?   <ModalPerimetroCefalico uid={ uid } patientID={ patientID } />
                                                    :   <>
                                                            <div className="perimetro-cefalico-btn-patient" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                                                                Perímetro Cefálico&nbsp;
                                                                <svg width="22" height="20" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="13" cy="15" r="7.75" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                                    <circle cx="10.75" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                                                                    <circle cx="15.25" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.6188 17.25C10.3383 17.25 10.198 17.25 10.124 17.3631C10.05 17.4763 10.099 17.5884 10.1971 17.8127C10.6285 18.7994 11.7207 19.5 13 19.5C14.2793 19.5 15.3715 18.7994 15.8029 17.8127C15.901 17.5884 15.95 17.4763 15.876 17.3631C15.802 17.25 15.6618 17.25 15.3813 17.25H10.6188Z" fill="white"/>
                                                                    <path d="M24 4L21.25 1M24 4L21.25 7M24 4L2 4M2 4L4.75 7M2 4L4.75 1" stroke="white" strokeWidth="2"/>
                                                                </svg>

                                                            </div>
                                                        </>
                                                : null
                                            }
                                            {
                                                ( ageForCalcs.y < 3 )
                                                    ?   (!!perimetroCefalico)
                                                        ?<div className="alt-button-result">
                                                            { perimetroCefalico.PCeMedicion } cm - { perimetroCefalico.PCeClasificacion }
                                                        </div>
                                                        : null
                                                    :   null
                                                
                                                
                                            }
                                            </div>
                                    :   null
                            }

                            {
                                ( ageForCalcs.y >= 5 )
                                ?   <div className="alt-button-container">
                                        {
                                            
                                            ( ageForCalcs.y >= 5 )
                                            ?   (isNutritionistStatus)
                                                ?   <ModalPerimetroCintura uid={ uid } patientID={ patientID } />
                                                :   <>
                                                        <div className="perimetro-cefalico-btn-patient" data-tooltip="Actualizar" onClick={() => setOpenModal(true)}>
                                                            Perímetro Cintura&nbsp;
                                                            <svg width="22" height="20" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle cx="13" cy="15" r="7.75" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                                                <circle cx="10.75" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                                                                <circle cx="15.25" cy="13.5" r="1" fill="white" stroke="white" strokeWidth="0.5" strokeLinecap="round"/>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M10.6188 17.25C10.3383 17.25 10.198 17.25 10.124 17.3631C10.05 17.4763 10.099 17.5884 10.1971 17.8127C10.6285 18.7994 11.7207 19.5 13 19.5C14.2793 19.5 15.3715 18.7994 15.8029 17.8127C15.901 17.5884 15.95 17.4763 15.876 17.3631C15.802 17.25 15.6618 17.25 15.3813 17.25H10.6188Z" fill="white"/>
                                                                <path d="M24 4L21.25 1M24 4L21.25 7M24 4L2 4M2 4L4.75 7M2 4L4.75 1" stroke="white" strokeWidth="2"/>
                                                            </svg>

                                                        </div>
                                                    </>
                                            : null
                                        }
                                        {
                                            ( ageForCalcs.y >= 5 )
                                                ?   (!!perimetroCintura)
                                                        ?<div className="alt-button-result">
                                                            { perimetroCintura.PCMedicion } cm - { perimetroCintura.PCClasificacion }
                                                        </div>
                                                        : null
                                                :   null
                                            
                                            
                                        }
                                    </div>
                                : null
                            }
                            
                        </div> */}
                    </div>
                    
                    
                    
                    <div className="accordion-container">
                    <div className="left-container">
                    {
                        (isNutritionistStatus)
                            ?   <form onSubmit={onAnamnesisSubmit}>
                                    <div className="accordion">
                                        <input
                                        className="accordion-input"
                                        type="checkbox"
                                        // defaultChecked
                                        name="patient_accordion"
                                        id="anamnesis"
                                        />
                                        <label className="accordion-label" htmlFor="anamnesis">
                                        Anamnesis
                                        </label>
                                        <div className="accordion-content">
                                        <textarea
                                            className="input-text-patient-page"
                                            name="formAnamnesis"
                                            spellCheck={false}
                                            defaultValue={defaultPatient.anamnesis}
                                            onChange={onInputChange}
                                            readOnly={ !isNutritionistStatus }
                                            placeholder="Escriba aquí :)"
                                        ></textarea>
                                        {/* <input className="input-text-patient-page" type="text" value="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione at praesentium sed rerum voluptatibus quo aut aspernatur temporibus corrupti eos consequuntur quidem nam quisquam esse dolor, illo tenetur libero repudiandae nulla, recusandae autem. Molestias quam saepe officia dolor nulla eos, eaque aliquam quaerat adipisci recusandae inventore sit maxime possimus asperiores quas omnis debitis non accusamus. Laborum, aspernatur numquam obcaecati tempora quo, assumenda minima, nostrum dolorum eveniet quasi optio quae blanditiis ducimus. Voluptatibus aut aperiam quis quasi ipsum perferendis sapiente nulla itaque" name="name"/> */}
                                        {/* <input type="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet inventore quis repellendus veniam unde sit, laboriosam, perspiciatis ullam voluptate, dolor tempore. Quisquam, numquam? Vero nesciunt dignissimos possimus laborum accusantium veniam maxime, delectus assumenda aspernatur, illo unde modi optio quia non magni consequatur reprehenderit eveniet ad! Eveniet consectetur minima aperiam corporis maxime perspiciatis, velit similique fugit quasi, est quaerat consequatur qui laborum deleniti eos necessitatibus quas reiciendis quibusdam nam aut excepturi repellat aliquam obcaecati voluptatum? Veniam, provident consequuntur itaque recusandae ad dicta facere quam culpa molestiae vel corporis nesciunt, exercitationem corrupti repellendus cum rerum perferendis eaque distinctio tenetur quibusdam! Eius, voluptates.</input> */}
                                        {   ( isNutritionistStatus )
                                            ?   <button
                                                className="btn-save-changes"
                                                type="submit"
                                                ></button>
                                            : null
                                        }
                                        </div>
                                    </div>
                                </form>
                            :   null
                    }
                        
                        <form onSubmit={onPhysical_examSubmit}>
                        <div className="accordion">
                            <input
                            className="accordion-input"
                            type="checkbox"
                            // defaultChecked
                            name="patient_accordion"
                            id="examen_fisico"
                            />
                            <label className="accordion-label" htmlFor="examen_fisico">
                            Examen físico
                            </label>
                            <div className="accordion-content">
                            <textarea
                                className="input-text-patient-page"
                                name="formPhysical_exam"
                                spellCheck={false}
                                defaultValue={defaultPatient.physical_exam}
                                onChange={onInputChange}
                                readOnly={ !isNutritionistStatus }
                                placeholder="Escriba aquí :)"
                            ></textarea>
                            {   ( isNutritionistStatus )
                                ?   <button
                                    className="btn-save-changes"
                                    type="submit"
                                    ></button>
                                : null
                            }
                            </div>
                        </div>
                        </form>
                        <form onSubmit={onDiagnosisSubmit}>
                        <div className="accordion">
                            <input
                            className="accordion-input"
                            type="checkbox"
                            // defaultChecked
                            name="patient_accordion"
                            id="diagnostico"
                            />
                            <label className="accordion-label" htmlFor="diagnostico">
                            Diagnóstico
                            </label>
                            <div className="accordion-content">
                            <textarea
                                className="input-text-patient-page h-50"
                                name="formDiagnosis"
                                spellCheck={false}
                                defaultValue={defaultPatient.diagnosis}
                                onChange={onInputChange}
                                readOnly={ !isNutritionistStatus }
                                placeholder="Escriba aquí :)"
                            ></textarea>
                            {   ( isNutritionistStatus )
                                ?   <button
                                    className="btn-save-changes"
                                    type="submit"
                                    ></button>
                                : null
                            }
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="right-container">
                        <form onSubmit={onIndicationsSubmit}>
                        <div className="accordion">
                            <input
                            className="accordion-input"
                            type="checkbox"
                            // defaultChecked
                            name="patient_accordion"
                            id="indicaciones"
                            />
                            <label className="accordion-label" htmlFor="indicaciones">
                            Indicaciones
                            </label>
                            <div className="accordion-content">
                            <textarea
                                className="input-text-patient-page"
                                name="formIndications"
                                spellCheck={false}
                                defaultValue={defaultPatient.indications}
                                onChange={onInputChange}
                                readOnly={ !isNutritionistStatus }
                                placeholder="Escriba aquí :)"
                            ></textarea>
                            {   ( isNutritionistStatus )
                                ?   <button
                                    className="btn-save-changes"
                                    type="submit"
                                    ></button>
                                : null
                            }
                            </div>
                        </div>
                        </form>
                        <div className="accordion">
                        <input
                            className="accordion-input"
                            type="checkbox"
                            defaultChecked
                            name="patient_accordion"
                            id="graficos"
                        />
                        <label className="accordion-label" htmlFor="graficos">
                            Gráficos
                        </label>
                        <div className="accordion-content">
                            <div className="calification-wrapper">
                                <div className="calification-indicator-container">
                                    <p className="calification-title">Calificación nutricional: </p>
                                    <span className="calification-indicator-chart"><p>{ nutritionalCalification.weightCalificationResult }</p></span>
                                </div>
                                <div className="calification-indicator-container">
                                    <p className="calification-title">Calificación estatural: </p>
                                    <span className="calification-indicator-chart"><p>{ nutritionalCalification.statureCalificationResult }</p></span>
                                </div>

                            </div>

                            <div className="canvas">
                                <Line data={ userData } options={ options } />

                            </div>
                            
                            <div className="charts-switch-container">

                                <div className="charts-switch-wrapper">
                                    <button
                                        className={ active === "1" ? "charts-switch-btn-active" : "charts-switch-btn" }
                                        onClick={ handleChartsSwitch }
                                        id={"1"}
                                        hidden={ hideChartButtons.PEButton }
                                    >
                                        P/E
                                    </button>

                                    <button
                                        className={ active === "2" ? "charts-switch-btn-active" : "charts-switch-btn" }
                                        onClick={ handleChartsSwitch }
                                        id={"2"}
                                        hidden={ hideChartButtons.TEButton }
                                    >
                                        T/E
                                    </button>
                                    <button
                                        className={ active === "3" ? "charts-switch-btn-active" : "charts-switch-btn" }
                                        onClick={ handleChartsSwitch }
                                        id={"3"}
                                        hidden={ hideChartButtons.PTButton }
                                    >
                                        P/T
                                    </button>
                                    <button
                                        className={ active === "4" ? "charts-switch-btn-active" : "charts-switch-btn" }
                                        onClick={ handleChartsSwitch }
                                        id={"4"}
                                        hidden={ hideChartButtons.IMCButton }
                                    >
                                        IMC/E
                                    </button>                                

                                </div>
                            </div>

                            <div className="show-reference-chart-container">
                                <button className="btn-show-reference-chart" type="button" onClick={ onShowHideReferenceChart }>
                                    <span className="btn-reference-title">Mostrar/Ocultar referencia</span>
                                </button>                            
                            </div>
                            
                            <div className="reference-chart-title-container">
                                <p className="reference-chart-title" hidden={ showHideReferenceChart }>Gráfico de referencia:</p>
                            </div>
                            <div className="canvas" hidden={ showHideReferenceChart }>
                                <Line data={ referenceData } options={ options } />

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </>
            }
            </div>
            <Footer/>
        </AppLayout>
      </>
    );
}
