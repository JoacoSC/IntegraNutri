import { useSelector } from 'react-redux';
import './components';
import BiologicalAge from '../../assets/imgs/patient/biological_age.svg'
import PerimetroCinturaForAvatar from '../../assets/imgs/patient/perimetro_cintura-for-avatar.svg'
import { useEffect, useState } from 'react';
import { fromUnixTime } from 'date-fns';

export const CardEstadioTanner = ({ nutritionalCalification }) => {

    const { weight, stature, unixBiologicalBirthday = 0, estadioTanner, biologicalSex } = useSelector((state) => state.currentPatient);

    const weightCalificationResult = nutritionalCalification.weightCalificationResult;
    

    // console.log( estadioTanner )

    const [biologicalAgeText, setBiologicalAgeText] = useState('');

    const [tannerIMC, setTannerIMC] = useState(0);

    const calculateAge = ( value ) => {
        let d1 = fromUnixTime( value ).getDate();
        let m1 = fromUnixTime( value ).getMonth();
        let y1 = fromUnixTime( value ).getFullYear();
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

    const calculateTannerIMC = ( weight, stature ) => {

        let lastWeight = weight[weight?.length - 1].A;
        let lastStature = stature[stature?.length - 1].A;
    
        // Reemplaza las comas por puntos
        if (typeof lastWeight === 'string') {
            lastWeight = parseFloat(lastWeight.replace(',', '.'));
        }
        if (typeof lastStature === 'string') {
            lastStature = parseFloat(lastStature.replace(',', '.'));
        }
    
        const IMC = lastWeight / (lastStature/100)**2;
    
        // console.log('lastWeight: ', lastWeight);
        // console.log('lastStature: ', lastStature);
        // console.log('lastStature: ', (lastStature/100));
    
        return IMC.toFixed(2);
    
    }
    

    useEffect(() => {
        
        setBiologicalAgeText(calculateAge( unixBiologicalBirthday ));
        setTannerIMC( calculateTannerIMC( weight, stature ) )

    }, [unixBiologicalBirthday, weight, stature])

    return (
        <div className='patient-secondary-card'>
            <div className='patient-secondary-card-title'>
                Estadio de Tanner
            </div>
            <div className='patient-secondary-card-content pl-2'>
                <div className='perimetro-cintura-avatar-container flex-column'>
                    {
                        <img src={ BiologicalAge } className='perimetro-cintura-avatar'/>
                        
                    }
                </div>
                <div className='perimetro-cefalico-value-container flex-column padding-left-none'>
                    <p className='perimetro-cefalico-value'><b>Edad biológica:&nbsp;</b>{ biologicalAgeText }</p>
                    <p className='perimetro-cefalico-value'><b>Estadio Tanner:&nbsp;</b>Grado { estadioTanner }</p>
                    <p className='perimetro-cefalico-value'>
                        <b>IMC:&nbsp;</b>{ `${ tannerIMC } (${ weightCalificationResult })` }
                    </p>
                </div>
                {/* <div className="alt-button-info" data-tooltip="Este resultado puede presentar una variabilidad de hasta +-8,5 cm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8ZM13 17V11H11V17H13Z" fill="#6D22D0"/>
                    </svg>
                </div> */}
                
            </div>
            {/* <div className='patient-secondary-card-footer'>
                <p>Este resultado puede presentar una variabilidad de hasta +-8,5 cm</p>
            </div> */}

        </div>
    )
}
