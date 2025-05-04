import { useSelector } from 'react-redux';
import './components';
import BiologicalAge from '../../assets/imgs/patient/biological_age.svg'
import PerimetroCinturaForAvatar from '../../assets/imgs/patient/perimetro_cintura-for-avatar.svg'
import { useEffect, useState } from 'react';
import { fromUnixTime } from 'date-fns';

export const CardEstadioTanner = ({ nutritionalRating }) => {

    const { weight, stature, unixBiologicalBirthday = 0, estadioTanner, biologicalSex } = useSelector((state) => state.currentPatient);

    const weightRatingResult = nutritionalRating.weightRatingResult;
    
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

        if( weight && stature ){

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
        
            return IMC.toFixed(2);
        }else{
            return 'No disponible';
        }

    
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
            <div className='patient-secondary-card-content custom-pl-2'>
                <div className='perimetro-cintura-avatar-container custom-flex-column'>
                    {
                        <img src={ BiologicalAge } className='perimetro-cintura-avatar'/>
                        
                    }
                </div>
                <div className='perimetro-cefalico-value-container custom-flex-column padding-left-none'>
                    <p className='perimetro-cefalico-value'><b>Edad biológica:&nbsp;</b>{ biologicalAgeText }</p>
                    <p className='perimetro-cefalico-value'><b>Estadio Tanner:&nbsp;</b>Grado { estadioTanner }</p>
                    <p className='perimetro-cefalico-value'>
                        <b>IMC:&nbsp;</b>{ `${ tannerIMC } (${ weightRatingResult })` }
                    </p>
                </div>
            </div>
        </div>
    )
}
