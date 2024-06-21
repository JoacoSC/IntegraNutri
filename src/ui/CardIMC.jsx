import React, { useEffect, useState } from 'react';
import AdultIMCChart from '../../assets/imgs/patient/imc_chart_svg_v2.svg';
import ElderlyIMCChart from '../../assets/imgs/patient/elderly_imc_chart_svg_v2.svg';
import IMCArrow from '../../assets/imgs/patient/imc_arrow.svg?react';
import { ModalDeletePregnantIMC, ModalPregnantIMC, ModalPregnantIMCHistory } from './';

const CardIMC = ({ patientObject, nutritionalRating, ageForCalcs, imcPregnant, ageText, biologicalSex }) => {
    
    const [ inclination, setInclination ] = useState(-45);
    const [ lastImcPregnant, setLastImcPregnant ] = useState(0)
    const [ patientIsAdult, setPatientIsAdult ] = useState(false)
    const [ patientIsElderly, setPatientIsElderly ] = useState(false)
    const [ containerHeight, setContainerHeight ] = useState('500')
    const { imc, imcRatingResult } = nutritionalRating;

    // console.log(nutritionalRating)

    const calculateChartIndicatorInclination = () => {
        // Rango de IMC y de inclinación
        const minIMC = 13.5;
        const maxIMC = 45;
        const minInclination = -90;
        const maxInclination = 90;
        let clampedIMC = null;
    
        // Asegurarse de que el IMC esté dentro del rango permitido
        if(imcPregnant){
            
            if(imcPregnant.length > 0){
    
                clampedIMC = Math.max(minIMC, Math.min(maxIMC, lastImcPregnant.A));
            }else{
    
                clampedIMC = Math.max(minIMC, Math.min(maxIMC, imc));
            }
        }else{
            clampedIMC = Math.max(minIMC, Math.min(maxIMC, imc));
        }
    
        // Calcular la inclinación correspondiente al IMC
        const inclination = ((clampedIMC - minIMC) / (maxIMC - minIMC)) * (maxInclination - minInclination) + minInclination;
    
        // Actualizar el estado de la inclinación
        setInclination(inclination);
    }
    

    useEffect(() => {
        calculateChartIndicatorInclination();
    }, [nutritionalRating, lastImcPregnant])

    useEffect(() => {


        if(imcPregnant){
            if( imcPregnant.length > 0 ){
                
                setLastImcPregnant( imcPregnant[ imcPregnant.length -1 ] )
                
            }
        }

    }, [imcPregnant])

    useEffect(() => {
        if( ageForCalcs.y < 19 || ageForCalcs.y === 19 && ageForCalcs.m < 2 ){

            setPatientIsAdult(false)
            setContainerHeight('auto')
            // console.log('first')
        }else if(ageForCalcs.y > 65){
            setPatientIsAdult(true)
            setPatientIsElderly(true)
            setContainerHeight('500')
            // console.log('second')
        }else{
            setPatientIsAdult(true)
            setPatientIsElderly(false)
            setContainerHeight('500')
            // console.log('third')
        }
    }, [ageForCalcs])
    
    // console.log(ageForCalcs)
    // console.log(patientIsAdult)
    // console.log(patientIsElderly)
    
    return (
        <div className={`patient-secondary-card h-${containerHeight}`}>
            <div className='patient-secondary-card-title'>
                IMC
            </div>
            <div className='patient-secondary-card-content'>
                <div className='imc-card'>
                    {
                        (patientIsAdult)
                        ?   (patientIsElderly)
                            ?   <div className="indicator">
                                    <img src={ ElderlyIMCChart } className='indicator-img' />
                                    <div className="hand" style={{ transform: `rotate(${inclination}deg)` }}></div>
                                    <div className="hand-base"></div>
                                </div>
                            :   <div className="indicator">
                                    <img src={ AdultIMCChart } className='indicator-img' />
                                    <div className="hand" style={{ transform: `rotate(${inclination}deg)` }}></div>
                                    <div className="hand-base"></div>
                                </div>
                        
                        :   null
                    }
                    <div className='indicator-result'>
                        {
                            (patientIsAdult)
                            ?   <>
                                    <strong className='font-size-10'>*Gráfico no aplica en caso de gestantes</strong>
                                    <h3>Resultados</h3>
                                </>
                            :   null
                        }
                            
                        {
                            (imcPregnant)
                            ?   (imcPregnant.length > 0)
                                ?   <>
                                        <p><strong>IMC:</strong> {lastImcPregnant.A}</p>
                                        <p><strong>Clasificación: </strong>{lastImcPregnant.D}</p>
                                        <p><strong>Semana de gestación: </strong>{lastImcPregnant.E}</p>
                                    </>
                                :   <>
                                        <p><strong>IMC:</strong> {(imc)?imc:'No hay datos'}</p>
                                        <p><strong>Clasificación: </strong>{(imcRatingResult)?imcRatingResult:'No hay datos'}</p>
                                    </>
                            :   <>
                                    <p><strong>IMC:</strong> {(imc)?imc:'No hay datos'}</p>
                                    <p><strong>Clasificación: </strong>{(imcRatingResult)?imcRatingResult:'No hay datos'}</p>
                                </>
                            
                        }
                    </div>
                    {
                        ( biologicalSex === 'Femenino' && ageForCalcs.y > 13 && ageForCalcs.y < 50 )
                        ?   <div className='imc-card-btn-container'>
                                <ModalPregnantIMC 
                                    patientObject = {patientObject}
                                    imcPregnant = {imcPregnant}
                                    ageText = {ageText}
                                />
                                <ModalDeletePregnantIMC 
                                    patientObject = {patientObject}
                                />
                                <ModalPregnantIMCHistory
                                    imcPregnant = {imcPregnant}
                                />
                            </div>
                        :   null
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default CardIMC;
