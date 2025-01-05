import { useState, useEffect } from 'react';
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
} from "../data";

export const useHandleChartsSwitch = (biologicalSex, ageForCalcs, weight, stature, imc, setLastWeight, setLastStature) => {
    const [active, setActive] = useState("0");
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
    });
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
            setLastWeight( String(weight[weight.length - 1].A).replace(/,/g, '.') );
            setLastStature( String(stature[stature.length - 1].A).replace(/,/g, '.') );
            
            // console.log(lastWeight)
        }
    
    }, [weight, stature])

    const handleChartsSwitch = (event) => {
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

            if( biologicalSex === "Femenino" ){

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

            if( biologicalSex === "Masculino" ){

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

            if( biologicalSex === "Femenino" ){

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

            if( biologicalSex === "Masculino" ){

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

            if( biologicalSex === "Femenino" ){

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

            if( biologicalSex === "Masculino" ){

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
            
            if( biologicalSex === "Femenino" ){

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

            if( biologicalSex === "Masculino" ){

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
    };

  return {
    active,
    options,
    userData,
    referenceData,
    handleChartsSwitch,
};
};
