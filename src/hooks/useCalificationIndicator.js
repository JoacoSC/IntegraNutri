import { fromUnixTime } from "date-fns";

export const useCalificationIndicator = ( weight, stature, unixBirthday, gender ) => {

    const calculateAgeForCalificationIndicator = () => {
        let d1 = fromUnixTime( unixBirthday ).getDate();
        let m1 = fromUnixTime( unixBirthday ).getMonth();
        let y1 = fromUnixTime( unixBirthday ).getFullYear();
        let date = new Date();
        let d2 = date.getDate();
        let m2 = date.getMonth();
        let y2 = date.getFullYear();
        let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d1 > d2) {
            d2 = d2 + month[m2];
            m2 = m2 - 1;
        }
        if (m1 > m2) {
            m2 = m2 + 12;
            y2 = y2 - 1;
        }
        let d = d2 - d1;
        let m = m2 - m1;
        let y = y2 - y1;
        
        return {y, m, d};
        
    }

    const age = calculateAgeForCalificationIndicator();

    const result = {
        ok: false,
        ageMsg: 'first',
        msg: 'first',
        age: age,
        stature: stature,
        weight: weight,
    }

    const boysPEfrom0to5 = () => {

        if ( age.y === 0 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 2.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 3.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 4.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 5.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 5.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 6.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 6.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 6.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 6.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 7.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 7.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 7.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 2.5 && weight <= 2.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 3.4 && weight <= 3.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 4.3 && weight <= 4.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 5.0 && weight <= 5.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 5.6 && weight <= 6.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 6.0 && weight <= 6.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 6.4 && weight <= 7.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 6.7 && weight <= 7.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 6.9 && weight <= 7.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 7.1 && weight <= 8.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 7.4 && weight <= 8.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 7.6 && weight <= 8.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 2.9 && weight < 3.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 3.9 && weight < 5.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 4.9 && weight < 6.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 5.7 && weight < 7.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 6.2 && weight < 7.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 6.7 && weight < 8.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 7.1 && weight < 8.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 7.4 && weight < 9.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 7.7 && weight < 9.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 8.0 && weight < 9.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 8.2 && weight < 10.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 8.4 && weight < 10.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 3.9 && weight < 4.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 5.1 && weight < 5.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 6.3 && weight < 7.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 7.2 && weight < 8.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 7.8 && weight < 8.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 8.4 && weight < 9.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 8.8 && weight < 9.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 9.2 && weight < 10.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 9.6 && weight < 10.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 9.9 && weight < 11.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 10.2 && weight < 11.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 10.5 && weight < 11.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 4.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 5.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 7.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 8.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 8.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 9.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 9.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 10.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 10.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 11.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 11.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 11.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 1 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 7.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 7.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 8.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 8.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 8.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 8.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 8.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 8.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 9.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 9.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 9.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 9.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 7.7 && weight <= 8.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 7.9 && weight <= 8.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 8.1 && weight <= 9.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 8.3 && weight <= 9.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 8.4 && weight <= 9.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 8.6 && weight <= 9.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 8.8 && weight <= 9.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 8.9 && weight <= 10.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 9.1 && weight <= 10.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 9.2 && weight <= 10.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 9.4 && weight <= 10.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 9.5 && weight <= 10.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 8.6 && weight < 10.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 8.8 && weight < 11.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 9.0 && weight < 11.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 9.2 && weight < 11.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 9.4 && weight < 11.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 9.6 && weight < 12.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 9.8 && weight < 12.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 10.0 && weight < 12.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 10.1 && weight < 12.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 10.3 && weight < 12.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 10.5 && weight < 13.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 10.7 && weight < 13.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 10.8 && weight < 12.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 11.0 && weight < 12.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 11.3 && weight < 12.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 11.5 && weight < 12.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 11.7 && weight < 13.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 12.0 && weight < 13.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 12.2 && weight < 13.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 12.5 && weight < 13.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 12.7 && weight < 14.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 12.9 && weight < 14.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 13.2 && weight < 14.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 13.4 && weight < 15.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 12.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 12.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 12.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 12.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 13.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 13.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 13.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 13.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 14.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 14.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 14.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 15.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 2 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 9.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 9.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 10.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 10.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 10.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 10.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 10.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 10.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 10.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 10.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 11.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 11.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 9.7 && weight <= 10.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 9.8 && weight <= 11.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 10.0 && weight <= 11.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 10.1 && weight <= 11.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 10.2 && weight <= 11.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 10.4 && weight <= 11.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 10.5 && weight <= 11.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 10.7 && weight <= 12.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 10.8 && weight <= 12.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 10.9 && weight <= 12.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 11.0 && weight <= 12.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 11.2 && weight <= 12.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 10.8 && weight < 13.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 11.0 && weight < 13.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 11.2 && weight < 14.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 11.3 && weight < 14.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 11.5 && weight < 14.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 11.7 && weight < 14.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 11.8 && weight < 15.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 12.0 && weight < 15.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 12.1 && weight < 15.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 12.3 && weight < 15.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 12.4 && weight < 15.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 12.6 && weight < 16.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 13.6 && weight < 15.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 13.9 && weight < 15.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 14.1 && weight < 15.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 14.3 && weight < 16.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 14.5 && weight < 16.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 14.8 && weight < 16.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 15.0 && weight < 16.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 15.2 && weight < 17.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 15.4 && weight < 17.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 15.6 && weight < 17.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 15.8 && weight < 17.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 16.0 && weight < 18.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 15.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 15.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 15.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 16.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 16.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 16.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 16.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 17.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 17.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 17.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 17.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 18.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 3 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 11.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 11.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 11.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 11.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 11.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 11.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 12.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 12.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 12.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 12.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 12.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 12.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 11.3 && weight <= 12.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 11.4 && weight <= 12.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 11.5 && weight <= 13.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 11.6 && weight <= 13.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 11.8 && weight <= 13.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 11.9 && weight <= 13.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 12.0 && weight <= 13.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 12.1 && weight <= 13.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 12.2 && weight <= 13.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 12.4 && weight <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 12.5 && weight <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 12.6 && weight <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 12.2 && weight < 16.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 12.4 && weight < 16.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 12.5 && weight < 16.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 12.7 && weight < 16.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 12.8 && weight < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 13.0 && weight < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 13.1 && weight < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 13.3 && weight < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 13.4 && weight < 17.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 13.6 && weight < 18.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 13.7 && weight < 18.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 13.9 && weight < 18.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 16.2 && weight < 18.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 16.4 && weight < 18.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 16.6 && weight < 18.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 16.8 && weight < 19.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 17.0 && weight < 19.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 17.2 && weight < 19.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 17.4 && weight < 19.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 17.6 && weight < 20.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 17.8 && weight < 20.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 18.0 && weight < 20.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 18.2 && weight < 20.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 18.4 && weight < 20.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 18.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 18.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 18.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 19.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 19.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 19.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 19.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 20.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 20.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 20.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 20.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 20.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 4 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 14.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 12.7 && weight <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 12.8 && weight <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 12.9 && weight <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 13.1 && weight <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 13.2 && weight <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 13.3 && weight <= 15.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 13.4 && weight <= 15.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 13.5 && weight <= 15.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 13.6 && weight <= 15.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 13.7 && weight <= 15.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 13.8 && weight <= 15.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 14.0 && weight <= 15.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 14.4 && weight < 18.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 14.5 && weight < 18.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 14.7 && weight < 19.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 14.8 && weight < 19.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 15.0 && weight < 19.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 15.1 && weight < 19.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 15.2 && weight < 19.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 15.4 && weight < 20.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 15.5 && weight < 20.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 15.6 && weight < 20.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 15.8 && weight < 20.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 15.9 && weight < 20.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 18.6 && weight < 21.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 18.8 && weight < 21.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 19.0 && weight < 21.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 19.2 && weight < 21.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 19.4 && weight < 22.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 19.6 && weight < 22.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 19.8 && weight < 22.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 20.0 && weight < 22.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 20.2 && weight < 23.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 20.4 && weight < 23.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 20.6 && weight < 23.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 20.8 && weight < 23.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 21.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 21.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 21.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 21.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 22.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 22.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 22.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 22.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 23.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 23.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 23.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 23.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 5 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 14.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 14.1 && weight <= 16.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 16.0 && weight < 21.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 21.0 && weight < 24.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 24.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

    }

    const girlsPEfrom0to5 = () => {

        if ( age.y === 0 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 2.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 3.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 3.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 4.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 5.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 5.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 5.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 6.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 6.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 6.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 6.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 6.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 2.4 && weight <= 2.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 3.2 && weight <= 3.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 3.9 && weight <= 4.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 4.5 && weight <= 5.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 5.0 && weight <= 5.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 5.4 && weight <= 6.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 5.7 && weight <= 6.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 6.0 && weight <= 6.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 6.3 && weight <= 7.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 6.5 && weight <= 7.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 6.7 && weight <= 7.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 6.9 && weight <= 7.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 2.8 && weight < 3.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 3.6 && weight < 4.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 4.5 && weight < 5.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 5.2 && weight < 6.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 5.7 && weight < 7.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 6.1 && weight < 7.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 6.5 && weight < 8.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 6.8 && weight < 8.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 7.0 && weight < 9.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 7.3 && weight < 9.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 7.5 && weight < 9.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 7.7 && weight < 9.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 3.7 && weight < 4.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 4.8 && weight < 5.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 5.8 && weight < 6.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 6.6 && weight < 7.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 7.3 && weight < 8.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 7.8 && weight < 8.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 8.2 && weight < 9.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 8.6 && weight < 9.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 9.0 && weight < 10.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 9.3 && weight < 10.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 9.6 && weight < 10.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 9.9 && weight < 11.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 4.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 5.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 6.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 7.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 8.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 8.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 9.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 9.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 10.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 10.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 10.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 11.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 1 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 7.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 7.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 7.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 7.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 7.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 7.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 8.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 8.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 8.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 8.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 8.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 8.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 7.0 && weight <= 2.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 7.2 && weight <= 3.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 7.4 && weight <= 4.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 7.6 && weight <= 5.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 7.7 && weight <= 5.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 7.9 && weight <= 6.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 8.1 && weight <= 6.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 8.2 && weight <= 6.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 8.4 && weight <= 7.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 8.6 && weight <= 7.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 8.7 && weight <= 7.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 8.9 && weight <= 7.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 7.9 && weight < 10.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 8.1 && weight < 10.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 8.3 && weight < 10.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 8.5 && weight < 10.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 8.7 && weight < 11.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 8.9 && weight < 11.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 9.1 && weight < 11.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 9.2 && weight < 11.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 9.4 && weight < 12.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 9.6 && weight < 12.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 9.8 && weight < 12.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 10.0 && weight < 12.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 10.1 && weight < 11.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 10.4 && weight < 11.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 10.6 && weight < 12.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 10.9 && weight < 12.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 11.1 && weight < 12.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 11.4 && weight < 12.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 11.6 && weight < 13.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 11.8 && weight < 13.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 12.1 && weight < 13.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 12.3 && weight < 14.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 12.5 && weight < 14.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 12.8 && weight < 14.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 11.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 11.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 12.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 12.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 12.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 12.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 13.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 13.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 13.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 14.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 14.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 14.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 2 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 9.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 9.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 9.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 9.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 9.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 9.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 10.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 10.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 10.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 10.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 10.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 10.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 9.0 && weight <= 10.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 9.2 && weight <= 10.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 9.4 && weight <= 10.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 9.5 && weight <= 10.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 9.7 && weight <= 10.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 9.8 && weight <= 11.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 10.0 && weight <= 11.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 10.1 && weight <= 11.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 10.3 && weight <= 11.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 10.4 && weight <= 11.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 10.5 && weight <= 11.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 10.7 && weight <= 12.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 10.2 && weight < 13.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 10.3 && weight < 13.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 10.5 && weight < 13.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 10.7 && weight < 13.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 10.9 && weight < 14.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 11.1 && weight < 14.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 11.2 && weight < 14.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 11.4 && weight < 14.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 11.6 && weight < 14.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 11.7 && weight < 15.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 11.9 && weight < 15.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 12.0 && weight < 15.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 13.0 && weight < 14.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 13.3 && weight < 15.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 13.5 && weight < 15.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 13.7 && weight < 15.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 14.0 && weight < 16.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 14.2 && weight < 16.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 14.4 && weight < 16.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 14.7 && weight < 16.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 14.9 && weight < 17.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 15.1 && weight < 17.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 15.4 && weight < 17.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 15.6 && weight < 17.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 14.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 15.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 15.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 15.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 16.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 16.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 16.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 16.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 17.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 17.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 17.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 17.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 3 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 10.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 10.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 11.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 11.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 11.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 11.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 11.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 11.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 11.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 12.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 12.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 12.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 10.8 && weight <= 12.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 10.9 && weight <= 12.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 11.1 && weight <= 12.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 11.2 && weight <= 12.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 11.3 && weight <= 12.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 11.5 && weight <= 13.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 11.6 && weight <= 13.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 11.7 && weight <= 13.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 11.8 && weight <= 13.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 12.0 && weight <= 13.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 12.1 && weight <= 13.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 12.2 && weight <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 12.2 && weight < 15.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 12.4 && weight < 16.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 12.5 && weight < 16.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 12.7 && weight < 16.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 12.8 && weight < 16.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 13.0 && weight < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 13.1 && weight < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 13.3 && weight < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 13.4 && weight < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 13.6 && weight < 17.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 13.7 && weight < 18.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 13.9 && weight < 18.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 15.8 && weight < 18.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 16.0 && weight < 18.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 16.3 && weight < 18.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 16.5 && weight < 19.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 16.7 && weight < 19.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 16.9 && weight < 19.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 17.2 && weight < 19.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 17.4 && weight < 20.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 17.6 && weight < 20.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 17.8 && weight < 20.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 18.1 && weight < 20.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 18.3 && weight < 21.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 18.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 18.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 18.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 19.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 19.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 19.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 19.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 20.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 20.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 20.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 20.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 21.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 4 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 12.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && weight <= 12.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && weight <= 12.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && weight <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && weight <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && weight <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && weight <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && weight <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && weight <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && weight <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && weight <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && weight <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 12.3 && weight <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && weight > 12.4 && weight <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && weight > 12.6 && weight <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && weight > 12.7 && weight <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && weight > 12.8 && weight <= 14.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && weight > 12.9 && weight <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && weight > 13.0 && weight <= 14.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && weight > 13.2 && weight <= 15.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && weight > 13.3 && weight <= 15.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && weight > 13.4 && weight <= 15.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && weight > 13.5 && weight <= 15.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && weight > 13.6 && weight <= 15.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 14.0 && weight < 18.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && weight > 14.2 && weight < 18.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && weight > 14.3 && weight < 19.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && weight > 14.5 && weight < 19.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && weight > 14.6 && weight < 19.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && weight > 14.8 && weight < 19.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && weight > 14.9 && weight < 19.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && weight > 15.1 && weight < 20.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && weight > 15.2 && weight < 20.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && weight > 15.3 && weight < 20.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && weight > 15.5 && weight < 20.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && weight > 15.6 && weight < 21.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 18.5 && weight < 21.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 18.8 && weight < 21.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 19.0 && weight < 22.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 19.2 && weight < 22.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 19.4 && weight < 22.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 19.7 && weight < 22.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 19.9 && weight < 23.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 20.1 && weight < 23.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 20.3 && weight < 23.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 20.6 && weight < 24.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 20.8 && weight < 24.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 21.0 && weight < 24.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 21.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && weight >= 21.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && weight >= 22.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && weight >= 22.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && weight >= 22.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && weight >= 22.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && weight >= 23.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && weight >= 23.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && weight >= 23.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && weight >= 24.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && weight >= 24.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && weight >= 24.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

        if ( age.y === 5 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && weight <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && weight > 13.7 && weight <= 15.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && weight > 15.8 && weight < 21.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && weight >= 21.2 && weight < 24.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***
    
            // *** Obesidad ***
    
            if( age.m === 0 && weight >= 24.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
        }

    }

    const boysPTfrom0to1 = () => {

        // *** Sobrepeso ***
        if( stature >= 45.0 && stature < 45.5 && weight >= 2.7 && weight < 3.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 2.8 && weight < 3.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 2.9 && weight < 3.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.0 && weight < 3.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.0 && weight < 3.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.1 && weight < 3.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.2 && weight < 3.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.3 && weight < 3.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.4 && weight < 3.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.5 && weight < 3.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 3.6 && weight < 4.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 3.8 && weight < 4.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 3.9 && weight < 4.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.0 && weight < 4.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.1 && weight < 4.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.2 && weight < 4.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.4 && weight < 4.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 4.5 && weight < 4.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 4.7 && weight < 5.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 4.8 && weight < 5.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.0 && weight < 5.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.1 && weight < 5.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.3 && weight < 5.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 5.4 && weight < 5.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 5.6 && weight < 6.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 5.7 && weight < 6.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 5.9 && weight < 6.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.1 && weight < 6.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.2 && weight < 6.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 6.4 && weight < 7.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 6.5 && weight < 7.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 6.7 && weight < 7.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 6.8 && weight < 7.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 7.0 && weight < 7.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.1 && weight < 7.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.2 && weight < 7.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 7.4 && weight < 8.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 7.5 && weight < 8.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 7.6 && weight < 8.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 7.8 && weight < 8.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 7.9 && weight < 8.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.0 && weight < 8.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.2 && weight < 8.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 8.3 && weight < 9.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 8.4 && weight < 9.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 8.5 && weight < 9.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 8.7 && weight < 9.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 8.8 && weight < 9.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 8.9 && weight < 9.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.0 && weight < 9.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.2 && weight < 10.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 9.3 && weight < 10.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 9.4 && weight < 10.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 9.5 && weight < 10.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 9.6 && weight < 10.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 9.8 && weight < 10.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 9.9 && weight < 10.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.0 && weight < 10.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 10.1 && weight < 11.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 10.2 && weight < 11.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 10.3 && weight < 11.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 10.4 && weight < 11.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 10.6 && weight < 11.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 10.7 && weight < 11.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 10.8 && weight < 11.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 10.9 && weight < 11.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 11.0 && weight < 12.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 11.1 && weight < 12.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 11.2 && weight < 12.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 11.3 && weight < 12.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 11.4 && weight < 12.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 11.5 && weight < 12.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 11.6 && weight < 12.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 11.7 && weight < 12.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 11.8 && weight < 12.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 11.9 && weight < 13.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 12.0 && weight < 13.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 12.1 && weight < 13.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 12.2 && weight < 13.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 12.4 && weight < 13.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 12.5 && weight < 13.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 12.6 && weight < 13.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 12.8 && weight < 13.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 12.9 && weight < 14.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 13.0 && weight < 14.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 13.2 && weight < 14.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 13.3 && weight < 14.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 13.4 && weight < 14.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 13.5 && weight < 14.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 13.7 && weight < 14.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 13.8 && weight < 15.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 13.9 && weight < 15.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 14.1 && weight < 15.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 14.2 && weight < 15.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 14.3 && weight < 15.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 14.4 && weight < 15.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 14.6 && weight < 15.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 14.7 && weight < 16.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 14.8 && weight < 16.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 14.9 && weight < 16.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 15.1 && weight < 16.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 15.2 && weight < 16.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 15.3 && weight < 16.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 15.5 && weight < 16.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 15.6 && weight < 17.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 15.7 && weight < 17.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 15.9 && weight < 17.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 16.0 && weight < 17.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 16.2 && weight < 17.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.5 && stature > 100.5 && weight >= 16.3 && weight < 17.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 16.5 && weight < 18.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 16.6 && weight < 18.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 16.8 && weight < 18.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 16.9 && weight < 18.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 17.1 && weight < 18.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 17.3 && weight < 18.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 17.4 && weight < 19.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 17.6 && weight < 19.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 17.8 && weight < 19.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 17.9 && weight < 19.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 18.1 && weight < 19.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 18.3 && weight < 20.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 18.5 && weight < 20.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 18.6 && weight < 20.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 18.8 && weight < 20.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 19.0 && weight < 20.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 19.2 && weight < 21.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 19.4 && weight < 21.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 19.6 && weight < 21.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 19.8 && weight < 21.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 20.0 && weight < 21.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }

        // *** Sobrepeso ***

        // *** Obesidad ***

        if( stature >= 45.0 && stature < 45.5 && weight >= 3.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 3.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 3.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 4.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 4.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 4.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 4.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 5.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 5.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 5.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 6.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 6.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 6.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 7.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 7.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 7.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 7.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 7.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 8.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 8.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 8.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 8.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 8.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 9.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 9.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 9.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 9.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 9.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 9.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 10.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 10.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 10.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 10.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 10.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 10.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 10.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 11.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 11.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 11.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 11.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 11.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 11.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 11.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 11.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 12.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 12.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 12.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 12.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 12.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 12.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 12.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 12.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 12.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 13.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 13.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 13.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 13.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 13.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 13.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 13.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 13.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 14.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 14.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 14.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 14.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 14.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 14.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 14.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 15.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 15.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 15.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 15.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 15.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 15.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 15.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 16.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 16.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 16.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 16.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 16.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 16.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 16.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 17.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 17.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 17.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 17.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 17.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 17.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 18.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 18.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 18.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 18.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 18.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 18.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 19.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 19.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 19.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 19.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 19.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 20.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 20.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 20.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 20.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 20.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 21.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 21.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 21.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 21.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 21.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }

    }

    const girlsPTfrom0to1 = () => {

        // *** Sobrepeso ***
        if( stature >= 45.0 && stature < 45.5 && weight >= 2.7 && weight < 3.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 2.8 && weight < 3.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 2.9 && weight < 3.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.0 && weight < 3.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.1 && weight < 3.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.2 && weight < 3.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.3 && weight < 3.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.4 && weight < 3.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.5 && weight < 3.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.6 && weight < 3.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 3.7 && weight < 4.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 3.8 && weight < 4.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 3.9 && weight < 4.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.0 && weight < 4.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.2 && weight < 4.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.3 && weight < 4.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.4 && weight < 4.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 4.6 && weight < 5.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 4.7 && weight < 5.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 4.8 && weight < 5.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.0 && weight < 5.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.1 && weight < 5.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.3 && weight < 5.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 5.4 && weight < 6.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 5.6 && weight < 6.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 5.7 && weight < 6.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 5.9 && weight < 6.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.0 && weight < 6.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.2 && weight < 6.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 6.3 && weight < 6.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 6.4 && weight < 7.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 6.6 && weight < 7.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 6.7 && weight < 7.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 6.9 && weight < 7.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.0 && weight < 7.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.1 && weight < 7.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 7.3 && weight < 8.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 7.4 && weight < 8.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 7.5 && weight < 8.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 7.6 && weight < 8.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 7.8 && weight < 8.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 7.9 && weight < 8.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.0 && weight < 8.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 8.1 && weight < 9.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 8.3 && weight < 9.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 8.4 && weight < 9.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 8.5 && weight < 9.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 8.6 && weight < 9.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 8.7 && weight < 9.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 8.8 && weight < 9.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.0 && weight < 9.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 9.1 && weight < 10.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 9.2 && weight < 10.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 9.3 && weight < 10.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 9.4 && weight < 10.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 9.5 && weight < 10.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 9.6 && weight < 10.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 9.7 && weight < 10.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 9.8 && weight < 10.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 9.9 && weight < 10.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 10.0 && weight < 11.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 10.1 && weight < 11.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 10.2 && weight < 11.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 10.3 && weight < 11.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 10.4 && weight < 11.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 10.5 && weight < 11.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 10.6 && weight < 11.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 10.7 && weight < 11.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 10.8 && weight < 11.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 10.9 && weight < 12.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 11.0 && weight < 12.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 11.2 && weight < 12.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 11.3 && weight < 12.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 11.4 && weight < 12.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 11.5 && weight < 12.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 11.6 && weight < 12.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 11.8 && weight < 12.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 11.9 && weight < 13.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 12.0 && weight < 13.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 12.1 && weight < 13.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 12.3 && weight < 13.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 12.4 && weight < 13.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 12.6 && weight < 13.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 12.7 && weight < 13.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 12.8 && weight < 14.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 13.0 && weight < 14.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 13.1 && weight < 14.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 13.2 && weight < 14.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 13.4 && weight < 14.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 13.5 && weight < 14.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 13.7 && weight < 15.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 13.8 && weight < 15.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 13.9 && weight < 15.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 14.1 && weight < 15.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 14.2 && weight < 15.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 14.3 && weight < 15.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 14.5 && weight < 15.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 14.6 && weight < 16.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 14.7 && weight < 16.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 14.9 && weight < 16.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 15.0 && weight < 16.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 15.2 && weight < 16.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 15.3 && weight < 16.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 15.4 && weight < 17.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 15.6 && weight < 17.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 15.7 && weight < 17.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 15.9 && weight < 17.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 16.0 && weight < 17.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 16.2 && weight < 17.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.5 && stature > 100.5 && weight >= 16.3 && weight < 18.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 16.5 && weight < 18.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 16.6 && weight < 18.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 16.8 && weight < 18.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 17.0 && weight < 18.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 17.1 && weight < 18.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 17.3 && weight < 19.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 17.5 && weight < 19.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 17.6 && weight < 19.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 17.8 && weight < 19.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 18.0 && weight < 19.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 18.2 && weight < 20.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 18.4 && weight < 20.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 18.5 && weight < 20.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 18.7 && weight < 20.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 18.9 && weight < 20.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 19.1 && weight < 21.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 19.3 && weight < 21.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 19.5 && weight < 21.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 19.7 && weight < 21.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 20.0 && weight < 22.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 20.2 && weight < 22.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }

        // *** Sobrepeso ***

        // *** Obesidad ***

        if( stature >= 45.0 && stature < 45.5 && weight >= 3.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 3.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 3.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 4.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 4.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 4.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 5.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 5.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 5.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 6.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 6.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 6.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 6.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 6.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 7.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 7.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 7.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 7.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 8.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 8.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 8.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 8.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 8.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 9.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 9.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 9.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 9.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 9.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 9.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 10.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 10.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 10.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 10.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 10.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 10.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 10.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 10.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 11.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 11.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 11.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 11.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 11.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 11.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 11.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 11.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 11.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 12.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 12.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 12.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 12.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 12.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 12.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 12.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 12.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 13.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 13.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 13.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 13.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 13.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 13.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 13.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 14.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 14.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 14.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 14.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 14.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 14.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 15.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 15.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 15.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 15.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 15.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 15.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 15.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 16.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 16.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 16.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 16.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 16.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 16.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 17.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 17.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 17.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 17.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 17.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 17.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 18.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 18.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 18.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 18.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 18.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 18.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 19.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 19.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 19.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 19.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 19.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 20.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 20.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 20.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 20.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 20.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 21.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 21.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 21.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 21.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 22.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 22.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }

    }

    const boysPTfrom0to2 = () => {

        // *** Desnutricion ***

        if( stature >= 45.0 && stature < 45.5 && weight <= 2.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight <= 2.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight <= 2.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight <= 2.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight <= 2.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight <= 2.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight <= 2.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight <= 2.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight <= 2.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight <= 2.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight <= 2.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight <= 2.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight <= 3.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight <= 3.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight <= 3.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight <= 3.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight <= 3.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight <= 3.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight <= 3.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight <= 3.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight <= 3.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight <= 4.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight <= 4.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight <= 4.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight <= 4.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight <= 4.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight <= 4.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight <= 4.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight <= 4.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight <= 5.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight <= 5.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight <= 5.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight <= 5.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight <= 5.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight <= 5.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight <= 5.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight <= 5.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight <= 5.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight <= 6.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight <= 6.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight <= 6.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight <= 6.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight <= 6.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight <= 6.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight <= 6.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight <= 6.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight <= 6.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight <= 6.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight <= 7.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight <= 7.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight <= 7.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight <= 7.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight <= 7.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight <= 7.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight <= 7.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight <= 7.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight <= 7.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight <= 7.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight <= 7.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight <= 8.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight <= 8.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight <= 8.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight <= 8.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight <= 8.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight <= 8.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight <= 8.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight <= 8.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight <= 8.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight <= 8.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight <= 8.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight <= 8.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight <= 9.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight <= 9.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight <= 9.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight <= 9.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight <= 9.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight <= 9.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight <= 9.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight <= 9.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight <= 9.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight <= 9.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight <= 9.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight <= 10.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight <= 10.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight <= 10.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight <= 10.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight <= 10.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight <= 10.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight <= 10.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight <= 10.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight <= 10.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight <= 11.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight <= 11.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight <= 11.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight <= 11.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight <= 11.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight <= 11.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight <= 11.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight <= 11.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight <= 11.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight <= 11.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight <= 12.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight <= 12.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight <= 12.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight <= 12.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight <= 12.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight <= 12.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight <= 12.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight <= 12.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight <= 12.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight <= 12.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight <= 13.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight <= 13.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight <= 13.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight <= 13.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight <= 13.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight <= 13.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight <= 13.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight <= 13.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight <= 14.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight <= 14.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight <= 14.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight <= 14.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight <= 14.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight <= 14.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight <= 14.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight <= 14.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight <= 15.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight <= 15.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight <= 15.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 110.0 && weight <= 15.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }

        // *** Desnutricion ***

        // *** Riesgo de Desnutrir ***

        if( stature >= 45.0 && stature < 45.5 && weight > 2.0 && weight <= 2.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight > 2.1 && weight <= 2.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight > 2.2 && weight <= 2.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight > 2.3 && weight <= 2.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight > 2.3 && weight <= 2.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight > 2.4 && weight <= 2.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight > 2.5 && weight <= 2.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight > 2.6 && weight <= 2.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight > 2.6 && weight <= 2.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight > 2.7 && weight <= 3.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight > 2.8 && weight <= 3.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight > 2.9 && weight <= 3.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight > 3.0 && weight <= 3.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight > 3.1 && weight <= 3.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight > 3.2 && weight <= 3.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight > 3.3 && weight <= 3.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight > 3.4 && weight <= 3.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight > 3.5 && weight <= 3.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight > 3.6 && weight <= 3.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight > 3.7 && weight <= 4.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight > 3.8 && weight <= 4.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight > 4.0 && weight <= 4.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight > 4.1 && weight <= 4.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight > 4.2 && weight <= 4.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight > 4.3 && weight <= 4.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight > 4.5 && weight <= 4.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight > 4.6 && weight <= 5.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight > 4.7 && weight <= 5.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight > 4.8 && weight <= 5.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight > 5.0 && weight <= 5.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight > 5.1 && weight <= 5.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight > 5.2 && weight <= 5.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight > 5.3 && weight <= 5.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight > 5.4 && weight <= 5.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight > 5.6 && weight <= 6.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight > 5.7 && weight <= 6.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight > 5.8 && weight <= 6.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight > 5.9 && weight <= 6.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight > 6.0 && weight <= 6.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight > 6.1 && weight <= 6.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight > 6.2 && weight <= 6.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 6.3 && weight <= 6.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 6.4 && weight <= 6.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 6.5 && weight <= 7.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 6.6 && weight <= 7.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 6.7 && weight <= 7.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 6.8 && weight <= 7.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 6.9 && weight <= 7.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 7.0 && weight <= 7.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 7.1 && weight <= 7.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 7.2 && weight <= 7.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 7.3 && weight <= 7.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 7.4 && weight <= 8.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 7.5 && weight <= 8.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 7.6 && weight <= 8.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 7.6 && weight <= 8.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 7.7 && weight <= 8.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 7.8 && weight <= 8.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 7.9 && weight <= 8.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 8.0 && weight <= 8.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 8.1 && weight <= 8.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 8.2 && weight <= 8.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 8.3 && weight <= 8.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 8.3 && weight <= 9.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 8.4 && weight <= 9.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 8.5 && weight <= 9.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 8.6 && weight <= 9.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 8.7 && weight <= 9.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 8.7 && weight <= 9.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 8.8 && weight <= 9.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 8.9 && weight <= 9.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 9.0 && weight <= 9.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 9.1 && weight <= 9.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 9.1 && weight <= 9.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 9.2 && weight <= 10.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 9.3 && weight <= 10.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 9.4 && weight <= 10.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 9.5 && weight <= 10.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 9.6 && weight <= 10.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 9.7 && weight <= 10.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 9.8 && weight <= 10.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 9.9 && weight <= 10.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 10.0 && weight <= 10.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 10.1 && weight <= 11.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 10.2 && weight <= 11.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 10.4 && weight <= 11.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 10.5 && weight <= 11.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 10.6 && weight <= 11.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 10.7 && weight <= 11.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 10.8 && weight <= 11.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 10.9 && weight <= 11.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 11.0 && weight <= 11.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 11.1 && weight <= 12.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 11.2 && weight <= 12.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 11.3 && weight <= 12.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 11.4 && weight <= 12.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 11.5 && weight <= 12.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 11.6 && weight <= 12.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 11.7 && weight <= 12.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 11.8 && weight <= 12.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 11.9 && weight <= 12.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 12.0 && weight <= 12.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 12.1 && weight <= 13.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 12.2 && weight <= 13.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 12.3 && weight <= 13.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 12.4 && weight <= 13.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 12.5 && weight <= 13.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 12.6 && weight <= 13.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 12.7 && weight <= 13.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 12.8 && weight <= 13.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 12.9 && weight <= 14.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 13.0 && weight <= 14.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 13.2 && weight <= 14.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 13.3 && weight <= 14.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 13.4 && weight <= 14.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 13.5 && weight <= 14.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 13.6 && weight <= 14.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 13.7 && weight <= 14.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 13.9 && weight <= 15.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 14.0 && weight <= 15.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 14.1 && weight <= 15.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 14.2 && weight <= 15.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 14.4 && weight <= 15.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 14.5 && weight <= 15.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 14.6 && weight <= 15.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 14.7 && weight <= 16.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 14.9 && weight <= 16.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 15.0 && weight <= 16.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 15.1 && weight <= 16.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 15.3 && weight <= 16.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 110.0 && weight > 15.4 && weight <= 16.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }

        // *** Riesgo de Desnutrir ***

        // *** Normal o Eutrófico ***

        if( stature >= 45.0 && stature < 45.5 && weight > 2.2 && weight < 2.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight > 2.3 && weight < 2.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight > 2.4 && weight < 2.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight > 2.5 && weight < 3.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight > 2.5 && weight < 3.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight > 2.6 && weight < 3.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight > 2.7 && weight < 3.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight > 2.8 && weight < 3.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight > 2.9 && weight < 3.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight > 3.0 && weight < 3.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight > 3.0 && weight < 3.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight > 3.1 && weight < 3.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight > 3.2 && weight < 3.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight > 3.3 && weight < 4.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight > 3.5 && weight < 4.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight > 3.6 && weight < 4.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight > 3.7 && weight < 4.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight > 3.8 && weight < 4.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight > 3.9 && weight < 4.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight > 4.0 && weight < 4.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight > 4.2 && weight < 5.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight > 4.3 && weight < 5.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight > 4.4 && weight < 5.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight > 4.6 && weight < 5.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight > 4.7 && weight < 5.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight > 4.9 && weight < 5.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight > 5.0 && weight < 5.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight > 5.1 && weight < 6.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight > 5.3 && weight < 6.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight > 5.4 && weight < 6.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight > 5.5 && weight < 6.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight > 5.6 && weight < 6.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight > 5.8 && weight < 6.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight > 5.9 && weight < 7.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight > 6.0 && weight < 7.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight > 6.1 && weight < 7.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight > 6.2 && weight < 7.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight > 6.4 && weight < 7.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight > 6.5 && weight < 7.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight > 6.6 && weight < 7.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight > 6.7 && weight < 7.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 6.8 && weight < 8.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 6.9 && weight < 8.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 7.0 && weight < 8.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 7.1 && weight < 8.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 7.2 && weight < 8.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 7.3 && weight < 8.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 7.5 && weight < 8.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 7.6 && weight < 8.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 7.7 && weight < 9.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 7.8 && weight < 9.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 7.9 && weight < 9.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 8.0 && weight < 9.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 8.1 && weight < 9.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 8.2 && weight < 9.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 8.3 && weight < 9.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 8.4 && weight < 9.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 8.5 && weight < 10.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 8.6 && weight < 10.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 8.7 && weight < 10.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 8.8 && weight < 10.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 8.8 && weight < 10.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 8.9 && weight < 10.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 9.0 && weight < 10.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 9.1 && weight < 10.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 9.2 && weight < 10.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 9.3 && weight < 11.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 9.4 && weight < 11.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 9.5 && weight < 11.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 9.5 && weight < 11.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 9.6 && weight < 11.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 9.7 && weight < 11.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 9.8 && weight < 11.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 9.9 && weight < 11.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 10.0 && weight < 11.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 10.1 && weight < 11.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 10.2 && weight < 12.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 10.3 && weight < 12.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 10.4 && weight < 12.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 10.5 && weight < 12.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 10.6 && weight < 12.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 10.7 && weight < 12.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 10.8 && weight < 12.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 11.0 && weight < 12.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 11.1 && weight < 13.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 11.2 && weight < 13.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 11.3 && weight < 13.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 11.4 && weight < 13.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 11.5 && weight < 13.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 11.6 && weight < 13.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 11.8 && weight < 13.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 11.9 && weight < 13.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 12.0 && weight < 14.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 12.1 && weight < 14.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 12.2 && weight < 14.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 12.3 && weight < 14.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 12.4 && weight < 14.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 12.5 && weight < 14.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 12.6 && weight < 14.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 12.7 && weight < 14.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 12.8 && weight < 15.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 12.9 && weight < 15.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 13.1 && weight < 15.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 13.2 && weight < 15.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 13.3 && weight < 15.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 13.4 && weight < 15.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 13.5 && weight < 15.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 13.6 && weight < 16.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 13.7 && weight < 16.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 13.9 && weight < 16.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 14.0 && weight < 16.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 14.1 && weight < 16.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 14.2 && weight < 16.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 14.4 && weight < 16.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 14.5 && weight < 17.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 14.6 && weight < 17.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 14.8 && weight < 17.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 14.9 && weight < 17.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 15.0 && weight < 17.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 15.2 && weight < 17.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 15.3 && weight < 18.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 15.4 && weight < 18.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 15.6 && weight < 18.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 15.7 && weight < 18.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 15.9 && weight < 18.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 16.0 && weight < 19.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 16.2 && weight < 19.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 16.3 && weight < 19.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 16.5 && weight < 19.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 16.6 && weight < 19.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 110.0 && weight > 16.8 && weight < 20.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }

        // *** Normal o Eutrófico ***

        // *** Sobrepeso ***
        if( stature >= 45.0 && stature < 45.5 && weight >= 2.7 && weight < 3.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 2.8 && weight < 3.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 2.9 && weight < 3.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.0 && weight < 3.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.0 && weight < 3.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.1 && weight < 3.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.2 && weight < 3.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.3 && weight < 3.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.4 && weight < 3.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.5 && weight < 3.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 3.6 && weight < 4.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 3.8 && weight < 4.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 3.9 && weight < 4.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.0 && weight < 4.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.1 && weight < 4.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.2 && weight < 4.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.4 && weight < 4.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 4.5 && weight < 4.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 4.7 && weight < 5.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 4.8 && weight < 5.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.0 && weight < 5.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.1 && weight < 5.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.3 && weight < 5.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 5.4 && weight < 5.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 5.6 && weight < 6.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 5.7 && weight < 6.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 5.9 && weight < 6.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.1 && weight < 6.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.2 && weight < 6.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 6.4 && weight < 7.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 6.5 && weight < 7.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 6.7 && weight < 7.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 6.8 && weight < 7.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 7.0 && weight < 7.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.1 && weight < 7.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.2 && weight < 7.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 7.4 && weight < 8.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 7.5 && weight < 8.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 7.6 && weight < 8.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 7.8 && weight < 8.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 7.9 && weight < 8.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.0 && weight < 8.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.2 && weight < 8.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 8.3 && weight < 9.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 8.4 && weight < 9.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 8.5 && weight < 9.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 8.7 && weight < 9.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 8.8 && weight < 9.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 8.9 && weight < 9.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.0 && weight < 9.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.2 && weight < 10.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 9.3 && weight < 10.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 9.4 && weight < 10.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 9.5 && weight < 10.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 9.6 && weight < 10.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 9.8 && weight < 10.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 9.9 && weight < 10.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.0 && weight < 10.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 10.1 && weight < 11.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 10.2 && weight < 11.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 10.3 && weight < 11.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 10.4 && weight < 11.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 10.6 && weight < 11.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 10.7 && weight < 11.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 10.8 && weight < 11.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 10.9 && weight < 11.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 11.0 && weight < 12.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 11.1 && weight < 12.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 11.2 && weight < 12.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 11.3 && weight < 12.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 11.4 && weight < 12.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 11.5 && weight < 12.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 11.6 && weight < 12.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 11.7 && weight < 12.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 11.8 && weight < 12.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 11.9 && weight < 13.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 12.0 && weight < 13.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 12.1 && weight < 13.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 12.2 && weight < 13.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 12.4 && weight < 13.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 12.5 && weight < 13.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 12.6 && weight < 13.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 12.8 && weight < 13.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 12.9 && weight < 14.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 13.0 && weight < 14.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 13.2 && weight < 14.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 13.3 && weight < 14.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 13.4 && weight < 14.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 13.5 && weight < 14.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 13.7 && weight < 14.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 13.8 && weight < 15.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 13.9 && weight < 15.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 14.1 && weight < 15.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 14.2 && weight < 15.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 14.3 && weight < 15.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 14.4 && weight < 15.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 14.6 && weight < 15.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 14.7 && weight < 16.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 14.8 && weight < 16.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 14.9 && weight < 16.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 15.1 && weight < 16.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 15.2 && weight < 16.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 15.3 && weight < 16.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 15.5 && weight < 16.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 15.6 && weight < 17.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 15.7 && weight < 17.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 15.9 && weight < 17.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 16.0 && weight < 17.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 16.2 && weight < 17.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 16.3 && weight < 17.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 16.5 && weight < 18.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 16.6 && weight < 18.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 16.8 && weight < 18.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 16.9 && weight < 18.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 17.1 && weight < 18.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 17.3 && weight < 18.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 17.4 && weight < 19.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 17.6 && weight < 19.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 17.8 && weight < 19.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 17.9 && weight < 19.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 18.1 && weight < 19.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 18.3 && weight < 20.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 18.5 && weight < 20.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 18.6 && weight < 20.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 18.8 && weight < 20.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 19.0 && weight < 20.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 19.2 && weight < 21.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 19.4 && weight < 21.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 19.6 && weight < 21.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 19.8 && weight < 21.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 20.0 && weight < 21.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }

        // *** Sobrepeso ***

        // *** Obesidad ***

        if( stature >= 45.0 && stature < 45.5 && weight >= 3.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 3.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 3.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 4.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 4.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 4.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 4.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 5.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 5.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 5.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 6.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 6.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 6.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 7.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 7.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 7.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 7.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 7.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 8.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 8.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 8.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 8.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 8.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 9.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 9.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 9.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 9.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 9.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 9.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 10.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 10.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 10.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 10.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 10.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 10.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 10.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 11.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 11.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 11.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 11.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 11.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 11.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 11.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 11.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 12.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 12.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 12.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 12.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 12.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 12.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 12.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 12.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 12.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 13.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 13.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 13.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 13.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 13.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 13.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 13.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 13.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 14.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 14.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 14.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 14.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 14.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 14.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 14.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 15.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 15.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 15.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 15.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 15.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 15.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 15.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 16.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 16.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 16.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 16.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 16.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 16.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 16.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 17.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 17.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 17.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 17.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 17.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 17.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 18.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 18.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 18.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 18.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 18.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 18.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 19.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 19.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 19.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 19.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 19.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 20.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 20.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 20.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 20.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 20.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 21.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 21.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 21.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 21.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 21.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }

    }

    const girlsPTfrom0to2 = () => {

        // *** Desnutricion ***

        if( stature >= 45.0 && stature < 45.5 && weight <= 2.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight <= 2.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight <= 2.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight <= 2.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight <= 2.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight <= 2.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight <= 2.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight <= 2.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight <= 2.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight <= 2.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight <= 2.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight <= 2.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight <= 3.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight <= 3.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight <= 3.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight <= 3.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight <= 3.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight <= 3.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight <= 3.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight <= 3.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight <= 3.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight <= 3.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight <= 4.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight <= 4.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight <= 4.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight <= 4.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight <= 4.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight <= 4.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight <= 4.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight <= 4.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight <= 4.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight <= 5.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight <= 5.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight <= 5.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight <= 5.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight <= 5.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight <= 5.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight <= 5.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight <= 5.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight <= 5.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight <= 5.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight <= 6.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight <= 6.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight <= 6.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight <= 6.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight <= 6.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight <= 6.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight <= 6.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight <= 6.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight <= 6.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight <= 6.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight <= 6.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight <= 7.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight <= 7.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight <= 7.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight <= 7.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight <= 7.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight <= 7.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight <= 7.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight <= 7.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight <= 7.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight <= 7.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight <= 7.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight <= 7.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight <= 8.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight <= 8.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight <= 8.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight <= 8.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight <= 8.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight <= 8.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight <= 8.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight <= 8.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight <= 8.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight <= 8.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight <= 8.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight <= 8.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight <= 9.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight <= 9.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight <= 9.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight <= 9.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight <= 9.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight <= 9.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight <= 9.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight <= 9.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight <= 9.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight <= 10.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight <= 10.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight <= 10.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight <= 10.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight <= 10.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight <= 10.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight <= 10.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight <= 10.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight <= 10.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight <= 10.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight <= 11.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight <= 11.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight <= 11.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight <= 11.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight <= 11.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight <= 11.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight <= 11.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight <= 11.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight <= 11.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight <= 12.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight <= 12.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight <= 12.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight <= 12.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight <= 12.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight <= 12.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight <= 12.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight <= 12.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight <= 12.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight <= 13.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight <= 13.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight <= 13.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight <= 13.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight <= 13.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight <= 13.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight <= 13.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight <= 13.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight <= 14.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight <= 14.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight <= 14.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight <= 14.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight <= 14.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight <= 14.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight <= 14.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight <= 15.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight <= 15.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 110.0 && weight <= 15.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }

        // *** Desnutricion ***

        // *** Riesgo de Desnutrir ***

        if( stature >= 45.0 && stature < 45.5 && weight > 2.1 && weight <= 2.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight > 2.1 && weight <= 2.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight > 2.2 && weight <= 2.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight > 2.3 && weight <= 2.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight > 2.4 && weight <= 2.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight > 2.4 && weight <= 2.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight > 2.5 && weight <= 2.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight > 2.6 && weight <= 2.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight > 2.6 && weight <= 2.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight > 2.7 && weight <= 3.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight > 2.8 && weight <= 3.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight > 2.9 && weight <= 3.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight > 3.0 && weight <= 3.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight > 3.1 && weight <= 3.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight > 3.2 && weight <= 3.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight > 3.3 && weight <= 3.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight > 3.4 && weight <= 3.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight > 3.5 && weight <= 3.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight > 3.6 && weight <= 3.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight > 3.7 && weight <= 4.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight > 3.8 && weight <= 4.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight > 3.9 && weight <= 4.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight > 4.0 && weight <= 4.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight > 4.1 && weight <= 4.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight > 4.3 && weight <= 4.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight > 4.4 && weight <= 4.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight > 4.5 && weight <= 4.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight > 4.6 && weight <= 5.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight > 4.7 && weight <= 5.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight > 4.8 && weight <= 5.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight > 4.9 && weight <= 5.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight > 5.0 && weight <= 5.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight > 5.1 && weight <= 5.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight > 5.2 && weight <= 5.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight > 5.3 && weight <= 5.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight > 5.4 && weight <= 5.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight > 5.5 && weight <= 6.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight > 5.6 && weight <= 6.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight > 5.7 && weight <= 6.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight > 5.8 && weight <= 6.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight > 5.9 && weight <= 6.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 6.0 && weight <= 6.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 6.1 && weight <= 6.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 6.2 && weight <= 6.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 6.3 && weight <= 6.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 6.4 && weight <= 7.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 6.5 && weight <= 7.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 6.6 && weight <= 7.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 6.7 && weight <= 7.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 6.8 && weight <= 7.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 6.9 && weight <= 7.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 6.9 && weight <= 7.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 7.0 && weight <= 7.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 7.1 && weight <= 7.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 7.2 && weight <= 7.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 7.3 && weight <= 7.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 7.4 && weight <= 8.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 7.4 && weight <= 8.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 7.5 && weight <= 8.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 7.6 && weight <= 8.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 7.7 && weight <= 8.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 7.8 && weight <= 8.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 7.8 && weight <= 8.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 7.9 && weight <= 8.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 8.0 && weight <= 8.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 8.1 && weight <= 8.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 8.2 && weight <= 8.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 8.2 && weight <= 9.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 8.3 && weight <= 9.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 8.4 && weight <= 9.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 8.5 && weight <= 9.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 8.6 && weight <= 9.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 8.7 && weight <= 9.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 8.8 && weight <= 9.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 8.8 && weight <= 9.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 8.9 && weight <= 9.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 9.0 && weight <= 9.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 9.1 && weight <= 9.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 9.2 && weight <= 10.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 9.3 && weight <= 10.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 9.4 && weight <= 10.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 9.5 && weight <= 10.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 9.7 && weight <= 10.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 9.8 && weight <= 10.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 9.9 && weight <= 10.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 10.0 && weight <= 10.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 10.1 && weight <= 11.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 10.2 && weight <= 11.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 10.3 && weight <= 11.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 10.4 && weight <= 11.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 10.5 && weight <= 11.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 10.6 && weight <= 11.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 10.7 && weight <= 11.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 10.8 && weight <= 11.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 10.9 && weight <= 11.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 11.0 && weight <= 12.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 11.1 && weight <= 12.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 11.2 && weight <= 12.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 11.3 && weight <= 12.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 11.4 && weight <= 12.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 11.5 && weight <= 12.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 11.6 && weight <= 12.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 11.7 && weight <= 12.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 11.8 && weight <= 12.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 12.0 && weight <= 13.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 12.1 && weight <= 13.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 12.2 && weight <= 13.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 12.3 && weight <= 13.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 12.4 && weight <= 13.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 12.5 && weight <= 13.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 12.6 && weight <= 13.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 12.7 && weight <= 13.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 12.8 && weight <= 14.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 13.0 && weight <= 14.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 13.1 && weight <= 14.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 13.2 && weight <= 14.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 13.3 && weight <= 14.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 13.5 && weight <= 14.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 13.6 && weight <= 14.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 13.7 && weight <= 15.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 13.8 && weight <= 15.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 14.0 && weight <= 15.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 14.1 && weight <= 15.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 14.3 && weight <= 15.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 14.4 && weight <= 15.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 14.5 && weight <= 15.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 14.7 && weight <= 16.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 14.8 && weight <= 16.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 15.0 && weight <= 16.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 15.1 && weight <= 16.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 110.0 && weight > 15.3 && weight <= 16.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }

        // *** Riesgo de Desnutrir ***

        // *** Normal o Eutrófico ***

        if( stature >= 45.0 && stature < 45.5 && weight > 2.3 && weight < 2.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight > 2.3 && weight < 2.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight > 2.4 && weight < 2.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight > 2.5 && weight < 3.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight > 2.6 && weight < 3.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight > 2.6 && weight < 3.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight > 2.7 && weight < 3.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight > 2.8 && weight < 3.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight > 2.9 && weight < 3.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight > 3.0 && weight < 3.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight > 3.1 && weight < 3.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight > 3.2 && weight < 3.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight > 3.3 && weight < 3.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight > 3.4 && weight < 4.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight > 3.5 && weight < 4.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight > 3.6 && weight < 4.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight > 3.7 && weight < 4.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight > 3.8 && weight < 4.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight > 3.9 && weight < 4.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight > 4.0 && weight < 4.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight > 4.2 && weight < 5.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight > 4.3 && weight < 5.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight > 4.4 && weight < 5.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight > 4.5 && weight < 5.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight > 4.6 && weight < 5.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight > 4.8 && weight < 5.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight > 4.9 && weight < 5.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight > 5.0 && weight < 6.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight > 5.1 && weight < 6.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight > 5.3 && weight < 6.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight > 5.4 && weight < 6.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight > 5.5 && weight < 6.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight > 5.6 && weight < 6.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight > 5.7 && weight < 6.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight > 5.8 && weight < 7.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight > 5.9 && weight < 7.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight > 6.0 && weight < 7.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight > 6.2 && weight < 7.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight > 6.3 && weight < 7.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight > 6.4 && weight < 7.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight > 6.5 && weight < 7.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 6.6 && weight < 7.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 6.7 && weight < 8.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 6.8 && weight < 8.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 6.9 && weight < 8.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 7.0 && weight < 8.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 7.1 && weight < 8.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 7.2 && weight < 8.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 7.3 && weight < 8.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 7.4 && weight < 8.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 7.5 && weight < 9.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 7.6 && weight < 9.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 7.7 && weight < 9.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 7.7 && weight < 9.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 7.8 && weight < 9.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 7.9 && weight < 9.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 8.0 && weight < 9.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 8.1 && weight < 9.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 8.2 && weight < 9.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 8.3 && weight < 9.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 8.4 && weight < 10.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 8.5 && weight < 10.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 8.5 && weight < 10.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 8.6 && weight < 10.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 8.7 && weight < 10.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 8.8 && weight < 10.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 8.9 && weight < 10.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 9.0 && weight < 10.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 9.1 && weight < 10.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 9.1 && weight < 10.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 9.2 && weight < 11.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 9.3 && weight < 11.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 9.4 && weight < 11.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 9.5 && weight < 11.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 9.6 && weight < 11.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 9.7 && weight < 11.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 9.8 && weight < 11.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 9.9 && weight < 11.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 10.1 && weight < 12.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 10.2 && weight < 12.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 10.3 && weight < 12.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 10.4 && weight < 12.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 10.5 && weight < 12.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 10.6 && weight < 12.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 10.7 && weight < 12.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 10.9 && weight < 13.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 11.0 && weight < 13.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 11.1 && weight < 13.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 11.2 && weight < 13.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 11.3 && weight < 13.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 11.4 && weight < 13.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 11.5 && weight < 13.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 11.7 && weight < 13.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 11.8 && weight < 14.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 11.9 && weight < 14.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 12.0 && weight < 14.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 12.1 && weight < 14.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 12.2 && weight < 14.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 12.3 && weight < 14.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 12.4 && weight < 14.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 12.6 && weight < 15.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 12.7 && weight < 15.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 12.8 && weight < 15.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 12.9 && weight < 15.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 13.0 && weight < 15.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 13.1 && weight < 15.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 13.3 && weight < 15.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 13.4 && weight < 16.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 13.5 && weight < 16.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 13.6 && weight < 16.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 13.7 && weight < 16.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 13.9 && weight < 16.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 14.0 && weight < 16.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 14.1 && weight < 17.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 14.3 && weight < 17.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 14.4 && weight < 17.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 14.5 && weight < 17.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 14.7 && weight < 17.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 14.8 && weight < 17.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 15.0 && weight < 18.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 15.1 && weight < 18.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 15.3 && weight < 18.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 15.4 && weight < 18.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 15.6 && weight < 18.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 15.7 && weight < 18.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 15.9 && weight < 19.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 16.0 && weight < 19.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 16.2 && weight < 19.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 16.4 && weight < 19.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 16.5 && weight < 20.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 110.0 && weight > 16.7 && weight < 20.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }

        // *** Normal o Eutrófico ***

        // *** Sobrepeso ***
        if( stature >= 45.0 && stature < 45.5 && weight >= 2.7 && weight < 3.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 2.8 && weight < 3.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 2.9 && weight < 3.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.0 && weight < 3.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.1 && weight < 3.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.2 && weight < 3.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.3 && weight < 3.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.4 && weight < 3.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.5 && weight < 3.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.6 && weight < 3.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 3.7 && weight < 4.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 3.8 && weight < 4.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 3.9 && weight < 4.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.0 && weight < 4.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.2 && weight < 4.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.3 && weight < 4.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.4 && weight < 4.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 4.6 && weight < 5.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 4.7 && weight < 5.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 4.8 && weight < 5.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.0 && weight < 5.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.1 && weight < 5.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.3 && weight < 5.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 5.4 && weight < 6.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 5.6 && weight < 6.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 5.7 && weight < 6.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 5.9 && weight < 6.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.0 && weight < 6.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.2 && weight < 6.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 6.3 && weight < 6.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 6.4 && weight < 7.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 6.6 && weight < 7.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 6.7 && weight < 7.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 6.9 && weight < 7.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.0 && weight < 7.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.1 && weight < 7.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 7.3 && weight < 8.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 7.4 && weight < 8.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 7.5 && weight < 8.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 7.6 && weight < 8.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 7.8 && weight < 8.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 7.9 && weight < 8.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.0 && weight < 8.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 8.1 && weight < 9.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 8.3 && weight < 9.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 8.4 && weight < 9.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 8.5 && weight < 9.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 8.6 && weight < 9.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 8.7 && weight < 9.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 8.8 && weight < 9.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.0 && weight < 9.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 9.1 && weight < 10.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 9.2 && weight < 10.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 9.3 && weight < 10.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 9.4 && weight < 10.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 9.5 && weight < 10.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 9.6 && weight < 10.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 9.7 && weight < 10.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 9.8 && weight < 10.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 9.9 && weight < 10.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 10.0 && weight < 11.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 10.1 && weight < 11.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 10.2 && weight < 11.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 10.3 && weight < 11.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 10.4 && weight < 11.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 10.5 && weight < 11.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 10.6 && weight < 11.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 10.7 && weight < 11.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 10.8 && weight < 11.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 10.9 && weight < 12.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 11.0 && weight < 12.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 11.2 && weight < 12.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 11.3 && weight < 12.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 11.4 && weight < 12.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 11.5 && weight < 12.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 11.6 && weight < 12.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 11.8 && weight < 12.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 11.9 && weight < 13.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 12.0 && weight < 13.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 12.1 && weight < 13.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 12.3 && weight < 13.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 12.4 && weight < 13.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 12.6 && weight < 13.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 12.7 && weight < 13.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 12.8 && weight < 14.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 13.0 && weight < 14.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 13.1 && weight < 14.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 13.2 && weight < 14.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 13.4 && weight < 14.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 13.5 && weight < 14.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 13.7 && weight < 15.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 13.8 && weight < 15.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 13.9 && weight < 15.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 14.1 && weight < 15.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 14.2 && weight < 15.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 14.3 && weight < 15.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 14.5 && weight < 15.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 14.6 && weight < 16.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 14.7 && weight < 16.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 14.9 && weight < 16.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 15.0 && weight < 16.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 15.2 && weight < 16.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 15.3 && weight < 16.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 15.4 && weight < 17.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 15.6 && weight < 17.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 15.7 && weight < 17.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 15.9 && weight < 17.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 16.0 && weight < 17.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 16.2 && weight < 17.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 16.3 && weight < 18.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 16.5 && weight < 18.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 16.6 && weight < 18.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 16.8 && weight < 18.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 17.0 && weight < 18.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 17.1 && weight < 18.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 17.3 && weight < 19.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 17.5 && weight < 19.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 17.6 && weight < 19.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 17.8 && weight < 19.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 18.0 && weight < 19.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 18.2 && weight < 20.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 18.4 && weight < 20.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 18.5 && weight < 20.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 18.7 && weight < 20.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 18.9 && weight < 20.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 19.1 && weight < 21.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 19.3 && weight < 21.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 19.5 && weight < 21.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 19.7 && weight < 21.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 20.0 && weight < 22.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 20.2 && weight < 22.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }

        // *** Sobrepeso ***

        // *** Obesidad ***

        if( stature >= 45.0 && stature < 45.5 && weight >= 3.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 45.5 && stature < 46.0 && weight >= 3.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.0 && stature < 46.5 && weight >= 3.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 46.5 && stature < 47.0 && weight >= 3.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.0 && stature < 47.5 && weight >= 3.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 47.5 && stature < 48.0 && weight >= 3.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.0 && stature < 48.5 && weight >= 3.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 48.5 && stature < 49.0 && weight >= 3.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.0 && stature < 49.5 && weight >= 3.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 49.5 && stature < 50.0 && weight >= 3.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.0 && stature < 50.5 && weight >= 4.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 50.5 && stature < 51.0 && weight >= 4.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.0 && stature < 51.5 && weight >= 4.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 51.5 && stature < 52.0 && weight >= 4.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.0 && stature < 52.5 && weight >= 4.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 52.5 && stature < 53.0 && weight >= 4.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.0 && stature < 53.5 && weight >= 4.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 53.5 && stature < 54.0 && weight >= 5.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.0 && stature < 54.5 && weight >= 5.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 54.5 && stature < 55.0 && weight >= 5.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.0 && stature < 55.5 && weight >= 5.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 55.5 && stature < 56.0 && weight >= 5.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.0 && stature < 56.5 && weight >= 5.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 56.5 && stature < 57.0 && weight >= 6.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.0 && stature < 57.5 && weight >= 6.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 57.5 && stature < 58.0 && weight >= 6.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.0 && stature < 58.5 && weight >= 6.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 58.5 && stature < 59.0 && weight >= 6.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.0 && stature < 59.5 && weight >= 6.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 59.5 && stature < 60.0 && weight >= 6.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.0 && stature < 60.5 && weight >= 7.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 60.5 && stature < 61.0 && weight >= 7.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.0 && stature < 61.5 && weight >= 7.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 61.5 && stature < 62.0 && weight >= 7.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.0 && stature < 62.5 && weight >= 7.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 62.5 && stature < 63.0 && weight >= 7.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.0 && stature < 63.5 && weight >= 8.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 63.5 && stature < 64.0 && weight >= 8.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.0 && stature < 64.5 && weight >= 8.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 64.5 && stature < 65.0 && weight >= 8.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.0 && stature < 65.5 && weight >= 8.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 9.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 9.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 9.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 9.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 9.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 9.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 10.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 10.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 10.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 10.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 10.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 10.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 10.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 10.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 11.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 11.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 11.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 11.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 11.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 11.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 11.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 11.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 11.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 12.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 12.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 12.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 12.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 12.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 12.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 12.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 12.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 13.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 13.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 13.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 13.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 13.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 13.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 13.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 14.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 14.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 14.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 14.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 14.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 14.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 15.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 15.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 15.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 15.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 15.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 15.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 15.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 16.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 16.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 16.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 16.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 16.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 16.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 17.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 17.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 17.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 17.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 17.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 17.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 18.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 18.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 18.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 18.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 18.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 18.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 19.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 19.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 19.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 19.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 19.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 20.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 20.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 20.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 20.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 20.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 21.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 21.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 21.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 21.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 22.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.0 && weight >= 22.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }

    }
    
    const boysPTfrom2to5 = () => {

        // *** Desnutricion ***

        if( stature >= 65.0 && stature < 65.5 && weight <= 6.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight <= 6.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight <= 6.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight <= 6.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight <= 6.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight <= 6.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight <= 6.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight <= 7.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight <= 7.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight <= 7.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight <= 7.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight <= 7.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight <= 7.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight <= 7.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight <= 7.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight <= 7.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight <= 7.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight <= 7.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight <= 8.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight <= 8.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight <= 8.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight <= 8.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight <= 8.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight <= 8.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight <= 8.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight <= 8.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight <= 8.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight <= 8.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight <= 8.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight <= 8.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight <= 9.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight <= 9.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight <= 9.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight <= 9.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight <= 9.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight <= 9.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight <= 9.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight <= 9.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight <= 9.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight <= 9.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight <= 10.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight <= 10.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight <= 10.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight <= 10.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight <= 10.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight <= 10.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight <= 10.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight <= 10.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight <= 10.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight <= 10.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight <= 11.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight <= 11.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight <= 11.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight <= 11.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight <= 11.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight <= 11.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight <= 11.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight <= 11.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight <= 11.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight <= 11.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight <= 12.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight <= 12.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight <= 12.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight <= 12.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight <= 12.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight <= 12.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight <= 12.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight <= 12.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight <= 12.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight <= 13.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight <= 13.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight <= 13.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight <= 13.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight <= 13.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight <= 13.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight <= 13.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight <= 13.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight <= 13.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight <= 14.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight <= 14.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight <= 14.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight <= 14.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight <= 14.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight <= 14.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight <= 14.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight <= 14.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight <= 15.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight <= 15.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight <= 15.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight <= 15.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight <= 15.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight <= 15.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight <= 15.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight <= 16.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight <= 16.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight <= 16.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight <= 16.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight <= 16.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight <= 16.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight <= 16.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight <= 17.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight <= 17.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight <= 17.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight <= 17.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight <= 17.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight <= 17.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight <= 18.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight <= 18.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight <= 18.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight <= 18.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 120.0 && weight <= 18.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }        

        // *** Desnutricion ***

        // *** Riesgo de Desnutrir ***

        if( stature >= 65.0 && stature < 65.5 && weight > 6.3 && weight <= 6.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 6.4 && weight <= 7.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 6.5 && weight <= 7.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 6.6 && weight <= 7.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 6.7 && weight <= 7.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 6.8 && weight <= 7.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 6.9 && weight <= 7.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 7.0 && weight <= 7.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 7.1 && weight <= 7.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 7.2 && weight <= 7.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 7.3 && weight <= 7.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 7.4 && weight <= 8.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 7.5 && weight <= 8.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 7.6 && weight <= 8.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 7.7 && weight <= 8.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 7.8 && weight <= 8.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 7.9 && weight <= 8.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 7.9 && weight <= 8.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 8.0 && weight <= 8.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 8.1 && weight <= 8.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 8.2 && weight <= 8.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 8.3 && weight <= 9.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 8.4 && weight <= 9.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 8.5 && weight <= 9.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 8.5 && weight <= 9.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 8.6 && weight <= 9.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 8.7 && weight <= 9.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 8.8 && weight <= 9.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 8.8 && weight <= 9.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 8.9 && weight <= 9.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 9.0 && weight <= 9.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 9.1 && weight <= 9.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 9.2 && weight <= 9.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 9.3 && weight <= 10.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 9.3 && weight <= 10.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 9.4 && weight <= 10.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 9.5 && weight <= 10.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 9.6 && weight <= 10.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 9.7 && weight <= 10.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 9.9 && weight <= 10.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 10.0 && weight <= 10.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 10.1 && weight <= 10.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 10.2 && weight <= 11.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 10.3 && weight <= 11.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 10.4 && weight <= 11.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 10.5 && weight <= 11.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 10.6 && weight <= 11.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 10.7 && weight <= 11.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 10.8 && weight <= 11.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 10.9 && weight <= 11.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 11.0 && weight <= 11.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 11.1 && weight <= 12.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 11.2 && weight <= 12.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 11.3 && weight <= 12.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 11.4 && weight <= 12.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 11.5 && weight <= 12.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 11.6 && weight <= 12.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 11.7 && weight <= 12.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 11.8 && weight <= 12.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 11.9 && weight <= 12.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 12.0 && weight <= 13.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 12.1 && weight <= 13.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 12.2 && weight <= 13.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 12.3 && weight <= 13.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 12.4 && weight <= 13.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 12.5 && weight <= 13.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 12.6 && weight <= 13.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 12.8 && weight <= 13.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 12.9 && weight <= 13.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 13.0 && weight <= 14.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 13.1 && weight <= 14.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 13.2 && weight <= 14.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 13.3 && weight <= 14.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 13.4 && weight <= 14.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 13.6 && weight <= 14.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 13.7 && weight <= 14.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 13.8 && weight <= 14.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 13.9 && weight <= 15.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 14.0 && weight <= 15.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 14.2 && weight <= 15.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 14.3 && weight <= 15.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 14.4 && weight <= 15.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 14.5 && weight <= 15.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 14.7 && weight <= 15.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 14.8 && weight <= 16.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 14.9 && weight <= 16.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 15.1 && weight <= 16.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 15.2 && weight <= 16.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 15.3 && weight <= 16.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 15.5 && weight <= 16.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight > 15.6 && weight <= 17.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight > 15.8 && weight <= 17.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight > 15.9 && weight <= 17.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight > 16.0 && weight <= 17.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight > 16.2 && weight <= 17.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight > 16.3 && weight <= 17.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight > 16.5 && weight <= 18.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight > 16.6 && weight <= 18.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight > 16.8 && weight <= 18.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight > 16.9 && weight <= 18.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight > 17.1 && weight <= 18.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight > 17.2 && weight <= 18.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight > 17.4 && weight <= 19.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight > 17.5 && weight <= 19.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight > 17.7 && weight <= 19.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight > 17.9 && weight <= 19.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight > 18.0 && weight <= 19.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight > 18.2 && weight <= 19.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight > 18.3 && weight <= 20.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight > 18.5 && weight <= 20.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 120.0 && weight > 18.6 && weight <= 20.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        
        // *** Riesgo de Desnutrir ***

        // *** Normal o Eutrófico ***

        if( stature >= 65.0 && stature < 65.5 && weight > 6.9 && weight < 8.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 7.0 && weight < 8.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 7.1 && weight < 8.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 7.2 && weight < 8.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 7.3 && weight < 8.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 7.4 && weight < 8.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 7.5 && weight < 8.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 7.6 && weight < 9.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 7.7 && weight < 9.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 7.8 && weight < 9.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 7.9 && weight < 9.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 8.0 && weight < 9.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 8.1 && weight < 9.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 8.2 && weight < 9.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 8.3 && weight < 9.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 8.4 && weight < 9.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 8.5 && weight < 10.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 8.6 && weight < 10.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 8.7 && weight < 10.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 8.8 && weight < 10.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 8.9 && weight < 10.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 9.0 && weight < 10.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 9.1 && weight < 10.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 9.2 && weight < 10.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 9.2 && weight < 10.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 9.3 && weight < 11.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 9.4 && weight < 11.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 9.5 && weight < 11.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 9.6 && weight < 11.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 9.7 && weight < 11.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 9.7 && weight < 11.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 9.8 && weight < 11.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 9.9 && weight < 11.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 10.0 && weight < 11.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 10.1 && weight < 11.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 10.2 && weight < 12.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 10.3 && weight < 12.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 10.4 && weight < 12.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 10.5 && weight < 12.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 10.7 && weight < 12.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 10.8 && weight < 12.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 10.9 && weight < 12.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 11.0 && weight < 12.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 11.1 && weight < 13.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 11.2 && weight < 13.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 11.3 && weight < 13.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 11.5 && weight < 13.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 11.6 && weight < 13.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 11.7 && weight < 13.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 11.8 && weight < 13.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 11.9 && weight < 14.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 12.0 && weight < 14.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 12.1 && weight < 14.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 12.2 && weight < 14.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 12.3 && weight < 14.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 12.4 && weight < 14.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 12.6 && weight < 14.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 12.7 && weight < 14.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 12.8 && weight < 15.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 12.9 && weight < 15.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 13.0 && weight < 15.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 13.1 && weight < 15.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 13.2 && weight < 15.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 13.3 && weight < 15.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 13.4 && weight < 15.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 13.6 && weight < 15.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 13.7 && weight < 16.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 13.8 && weight < 16.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 13.9 && weight < 16.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 14.0 && weight < 16.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 14.2 && weight < 16.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 14.3 && weight < 16.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 14.4 && weight < 17.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 14.5 && weight < 17.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 14.7 && weight < 17.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 14.8 && weight < 17.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 14.9 && weight < 17.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 15.1 && weight < 17.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 15.2 && weight < 18.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 15.4 && weight < 18.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 15.5 && weight < 18.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 15.6 && weight < 18.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 15.8 && weight < 18.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 15.9 && weight < 18.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 16.1 && weight < 19.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 16.2 && weight < 19.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 16.4 && weight < 19.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 16.5 && weight < 19.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 16.7 && weight < 19.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 16.8 && weight < 20.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight > 17.0 && weight < 20.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight > 17.1 && weight < 20.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight > 17.3 && weight < 20.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight > 17.5 && weight < 20.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight > 17.6 && weight < 21.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight > 17.8 && weight < 21.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight > 18.0 && weight < 21.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight > 18.1 && weight < 21.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight > 18.3 && weight < 21.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight > 18.5 && weight < 22.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight > 18.6 && weight < 22.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight > 18.8 && weight < 22.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight > 19.0 && weight < 22.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight > 19.2 && weight < 23.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight > 19.3 && weight < 23.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight > 19.5 && weight < 23.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight > 19.7 && weight < 23.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight > 19.9 && weight < 23.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight > 20.0 && weight < 24.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight > 20.2 && weight < 24.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 120.0 && weight > 20.4 && weight < 24.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        
        // *** Normal o Eutrófico ***

        // *** Sobrepeso ***
        if( stature >= 65.0 && stature < 65.5 && weight >= 8.1 && weight < 8.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.2 && weight < 8.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.3 && weight < 9.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 8.5 && weight < 9.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 8.6 && weight < 9.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 8.7 && weight < 9.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 8.8 && weight < 9.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 9.0 && weight < 9.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 9.1 && weight < 9.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.2 && weight < 10.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.3 && weight < 10.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 9.5 && weight < 10.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 9.6 && weight < 10.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 9.7 && weight < 10.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 9.8 && weight < 10.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 9.9 && weight < 10.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 10.0 && weight < 11.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.2 && weight < 11.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 10.3 && weight < 11.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 10.4 && weight < 11.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 10.5 && weight < 11.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 10.6 && weight < 11.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 10.7 && weight < 11.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 10.8 && weight < 11.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 10.9 && weight < 11.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 11.0 && weight < 12.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 11.1 && weight < 12.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 11.2 && weight < 12.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 11.3 && weight < 12.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 11.4 && weight < 12.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 11.5 && weight < 12.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 11.6 && weight < 12.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 11.7 && weight < 12.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 11.8 && weight < 12.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 11.9 && weight < 13.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 12.1 && weight < 13.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 12.2 && weight < 13.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 12.3 && weight < 13.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 12.4 && weight < 13.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 12.5 && weight < 13.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 12.7 && weight < 13.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 12.8 && weight < 13.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 12.9 && weight < 14.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 13.1 && weight < 14.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 13.2 && weight < 14.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 13.3 && weight < 14.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 13.5 && weight < 14.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 13.6 && weight < 14.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 13.7 && weight < 14.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 13.9 && weight < 15.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 14.0 && weight < 15.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 14.1 && weight < 15.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 14.2 && weight < 15.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 14.4 && weight < 15.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 14.5 && weight < 15.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 14.6 && weight < 15.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 14.7 && weight < 16.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 14.9 && weight < 16.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 15.0 && weight < 16.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 15.1 && weight < 16.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 15.3 && weight < 16.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 15.4 && weight < 16.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 15.5 && weight < 16.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 15.7 && weight < 17.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 15.8 && weight < 17.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 15.9 && weight < 17.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 16.1 && weight < 17.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 16.2 && weight < 17.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 16.4 && weight < 17.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 16.5 && weight < 18.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 16.7 && weight < 18.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 16.9 && weight < 18.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 17.0 && weight < 18.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 17.2 && weight < 18.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 17.3 && weight < 18.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 17.5 && weight < 19.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 17.7 && weight < 19.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 17.8 && weight < 19.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 18.0 && weight < 19.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 18.2 && weight < 19.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 18.4 && weight < 20.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 18.5 && weight < 20.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 18.7 && weight < 20.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 18.9 && weight < 20.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 19.1 && weight < 20.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 19.3 && weight < 21.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 19.5 && weight < 21.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 19.7 && weight < 21.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 19.8 && weight < 21.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 20.0 && weight < 22.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight >= 20.2 && weight < 22.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight >= 20.4 && weight < 22.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight >= 20.7 && weight < 22.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight >= 20.9 && weight < 22.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight >= 21.1 && weight < 23.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight >= 21.3 && weight < 23.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight >= 21.5 && weight < 23.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight >= 21.7 && weight < 23.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight >= 21.9 && weight < 24.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight >= 22.1 && weight < 24.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight >= 22.4 && weight < 24.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight >= 22.6 && weight < 24.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight >= 22.8 && weight < 25.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight >= 23.0 && weight < 25.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight >= 23.3 && weight < 25.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight >= 23.5 && weight < 25.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight >= 23.7 && weight < 26.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight >= 23.9 && weight < 26.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight >= 24.1 && weight < 26.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight >= 24.4 && weight < 26.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 120.0 && weight >= 24.6 && weight < 27.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        
        // *** Sobrepeso ***

        // *** Obesidad ***

        if( stature >= 65.0 && stature < 65.5 && weight >= 8.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 9.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 9.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 9.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 9.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 9.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 9.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 9.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 10.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 10.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 10.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 10.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 10.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 10.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 10.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 11.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 11.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 11.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 11.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 11.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 11.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 11.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 11.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 11.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 12.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 12.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 12.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 12.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 12.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 12.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 12.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 12.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 12.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 13.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 13.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 13.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 13.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 13.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 13.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 13.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 13.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 14.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 14.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 14.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 14.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 14.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 14.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 14.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 15.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 15.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 15.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 15.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 15.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 15.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 15.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 16.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 16.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 16.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 16.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 16.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 16.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 16.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 17.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 17.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 17.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 17.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 17.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 17.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 18.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 18.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 18.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 18.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 18.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 18.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 19.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 19.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 19.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 19.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 19.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 20.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 20.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 20.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 20.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 20.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 21.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 21.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 21.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 21.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 22.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight >= 22.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight >= 22.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight >= 22.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight >= 22.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight >= 23.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight >= 23.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight >= 23.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight >= 23.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight >= 24.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight >= 24.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight >= 24.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight >= 24.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight >= 25.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight >= 25.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight >= 25.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight >= 25.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight >= 26.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight >= 26.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight >= 26.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight >= 26.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 120.0 && weight >= 27.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        

    }
    
    const girlsPTfrom2to5 = () => {

        // *** Desnutricion ***

        if( stature >= 65.0 && stature < 65.5 && weight <= 6.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight <= 6.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight <= 6.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight <= 6.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight <= 6.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight <= 6.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight <= 6.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight <= 6.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight <= 6.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight <= 6.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight <= 7.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight <= 7.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight <= 7.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight <= 7.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight <= 7.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight <= 7.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight <= 7.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight <= 7.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight <= 7.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight <= 7.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight <= 7.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight <= 7.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight <= 8.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight <= 8.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight <= 8.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight <= 8.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight <= 8.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight <= 8.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight <= 8.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight <= 8.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight <= 8.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight <= 8.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight <= 8.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight <= 8.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight <= 9.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight <= 9.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight <= 9.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight <= 9.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight <= 9.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight <= 9.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight <= 9.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight <= 9.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight <= 9.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight <= 9.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight <= 10.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight <= 10.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight <= 10.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight <= 10.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight <= 10.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight <= 10.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight <= 10.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight <= 10.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight <= 10.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight <= 11.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight <= 11.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight <= 11.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight <= 11.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight <= 11.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight <= 11.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight <= 11.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight <= 11.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight <= 11.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight <= 11.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight <= 12.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight <= 12.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight <= 12.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight <= 12.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight <= 12.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight <= 12.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight <= 12.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight <= 12.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight <= 12.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight <= 13.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight <= 13.1 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight <= 13.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight <= 13.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight <= 13.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight <= 13.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight <= 13.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight <= 13.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight <= 14.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight <= 14.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight <= 14.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight <= 14.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight <= 14.6 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight <= 14.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight <= 14.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight <= 15.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight <= 15.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight <= 15.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight <= 15.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight <= 15.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight <= 15.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight <= 16.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight <= 16.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight <= 16.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight <= 16.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight <= 16.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight <= 16.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight <= 17.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight <= 17.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight <= 17.3 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight <= 17.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight <= 17.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight <= 17.8 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight <= 18.0 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight <= 18.2 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight <= 18.4 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight <= 18.5 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight <= 18.7 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }
        if( stature >= 120.0 && weight <= 18.9 ){
            result.msg = 'Desnutricion';
            result.ok = true;
        }        

        // *** Desnutricion ***

        // *** Riesgo de Desnutrir ***

        if( stature >= 65.0 && stature < 65.5 && weight > 6.1 && weight <= 6.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 6.2 && weight <= 6.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 6.3 && weight <= 6.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 6.4 && weight <= 6.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 6.4 && weight <= 7.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 6.5 && weight <= 7.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 6.6 && weight <= 7.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 6.7 && weight <= 7.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 6.8 && weight <= 7.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 6.9 && weight <= 7.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 7.0 && weight <= 7.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 7.1 && weight <= 7.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 7.1 && weight <= 7.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 7.2 && weight <= 7.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 7.3 && weight <= 8.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 7.4 && weight <= 8.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 7.5 && weight <= 8.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 7.6 && weight <= 8.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 7.6 && weight <= 8.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 7.7 && weight <= 8.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 7.8 && weight <= 8.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 7.9 && weight <= 8.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 8.0 && weight <= 8.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 8.0 && weight <= 8.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 8.1 && weight <= 8.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 8.2 && weight <= 8.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 8.3 && weight <= 9.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 8.4 && weight <= 9.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 8.4 && weight <= 9.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 8.5 && weight <= 9.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 8.6 && weight <= 9.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 8.7 && weight <= 9.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 8.8 && weight <= 9.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 8.9 && weight <= 9.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 9.0 && weight <= 9.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 9.1 && weight <= 9.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 9.2 && weight <= 10.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 9.3 && weight <= 10.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 9.4 && weight <= 10.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 9.5 && weight <= 10.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 9.6 && weight <= 10.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 9.7 && weight <= 10.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 9.8 && weight <= 10.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 9.9 && weight <= 10.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 10.0 && weight <= 10.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 10.1 && weight <= 11.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 10.2 && weight <= 11.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 10.3 && weight <= 11.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 10.4 && weight <= 11.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 10.5 && weight <= 11.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 10.6 && weight <= 11.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 10.7 && weight <= 11.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 10.9 && weight <= 11.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 11.0 && weight <= 11.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 11.1 && weight <= 12.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 11.2 && weight <= 12.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 11.3 && weight <= 12.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 11.4 && weight <= 12.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 11.5 && weight <= 12.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 11.6 && weight <= 12.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 11.7 && weight <= 12.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 11.8 && weight <= 12.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 11.9 && weight <= 12.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 12.0 && weight <= 13.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 12.1 && weight <= 13.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 12.2 && weight <= 13.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 12.3 && weight <= 13.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 12.4 && weight <= 13.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 12.5 && weight <= 13.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 12.7 && weight <= 13.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 12.8 && weight <= 13.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 12.9 && weight <= 14.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 13.0 && weight <= 14.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 13.1 && weight <= 14.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 13.3 && weight <= 14.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 13.4 && weight <= 14.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 13.5 && weight <= 14.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 13.6 && weight <= 14.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 13.8 && weight <= 15.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 13.9 && weight <= 15.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 14.0 && weight <= 15.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 14.2 && weight <= 15.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 14.3 && weight <= 15.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 14.5 && weight <= 15.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 14.6 && weight <= 15.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 14.7 && weight <= 16.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 14.9 && weight <= 16.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 15.0 && weight <= 16.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 15.2 && weight <= 16.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 15.4 && weight <= 16.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight > 15.5 && weight <= 17.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight > 15.7 && weight <= 17.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight > 15.8 && weight <= 17.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight > 16.0 && weight <= 17.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight > 16.2 && weight <= 17.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight > 16.3 && weight <= 17.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight > 16.5 && weight <= 18.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight > 16.7 && weight <= 18.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight > 16.8 && weight <= 18.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight > 17.0 && weight <= 18.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight > 17.2 && weight <= 18.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight > 17.3 && weight <= 19.0 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight > 17.5 && weight <= 19.2 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight > 17.7 && weight <= 19.4 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight > 17.8 && weight <= 19.6 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight > 18.0 && weight <= 19.8 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight > 18.2 && weight <= 19.9 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight > 18.4 && weight <= 20.1 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight > 18.5 && weight <= 20.3 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight > 18.7 && weight <= 20.5 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        if( stature >= 120.0 && weight > 18.9 && weight <= 20.7 ){
            result.msg = 'Riesgo de Desnutrir';
            result.ok = true;
        }
        
        // *** Riesgo de Desnutrir ***

        // *** Normal o Eutrófico ***

        if( stature >= 65.0 && stature < 65.5 && weight > 6.6 && weight < 7.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight > 6.7 && weight < 8.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight > 6.8 && weight < 8.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight > 6.9 && weight < 8.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight > 7.0 && weight < 8.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight > 7.1 && weight < 8.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight > 7.2 && weight < 8.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight > 7.3 && weight < 8.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight > 7.4 && weight < 8.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight > 7.5 && weight < 9.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight > 7.6 && weight < 9.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight > 7.7 && weight < 9.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight > 7.8 && weight < 9.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight > 7.9 && weight < 9.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight > 8.0 && weight < 9.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight > 8.1 && weight < 9.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight > 8.1 && weight < 9.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight > 8.2 && weight < 9.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight > 8.3 && weight < 10.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight > 8.4 && weight < 10.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight > 8.5 && weight < 10.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight > 8.6 && weight < 10.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight > 8.7 && weight < 10.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight > 8.7 && weight < 10.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight > 8.8 && weight < 10.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight > 8.9 && weight < 10.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight > 9.0 && weight < 10.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight > 9.1 && weight < 10.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight > 9.2 && weight < 11.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight > 9.3 && weight < 11.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight > 9.4 && weight < 11.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight > 9.5 && weight < 11.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight > 9.6 && weight < 11.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight > 9.7 && weight < 11.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight > 9.8 && weight < 11.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight > 9.9 && weight < 11.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight > 10.0 && weight < 11.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight > 10.1 && weight < 12.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight > 10.2 && weight < 12.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight > 10.3 && weight < 12.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight > 10.4 && weight < 12.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight > 10.6 && weight < 12.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight > 10.7 && weight < 12.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight > 10.8 && weight < 12.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight > 10.9 && weight < 13.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight > 11.0 && weight < 13.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight > 11.1 && weight < 13.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight > 11.2 && weight < 13.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight > 11.4 && weight < 13.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight > 11.5 && weight < 13.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight > 11.6 && weight < 13.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight > 11.7 && weight < 14.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight > 11.8 && weight < 14.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight > 11.9 && weight < 14.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight > 12.0 && weight < 14.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight > 12.1 && weight < 14.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight > 12.3 && weight < 14.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight > 12.4 && weight < 14.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight > 12.5 && weight < 14.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight > 12.6 && weight < 15.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight > 12.7 && weight < 15.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight > 12.8 && weight < 15.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight > 12.9 && weight < 15.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight > 13.1 && weight < 15.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight > 13.2 && weight < 15.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight > 13.3 && weight < 15.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight > 13.4 && weight < 16.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight > 13.5 && weight < 16.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight > 13.7 && weight < 16.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight > 13.8 && weight < 16.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight > 13.9 && weight < 16.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight > 14.1 && weight < 16.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight > 14.2 && weight < 17.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight > 14.3 && weight < 17.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight > 14.5 && weight < 17.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight > 14.6 && weight < 17.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight > 14.7 && weight < 17.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight > 14.9 && weight < 17.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight > 15.0 && weight < 18.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight > 15.2 && weight < 18.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight > 15.3 && weight < 18.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight > 15.5 && weight < 18.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight > 15.6 && weight < 18.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight > 15.8 && weight < 19.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight > 15.9 && weight < 19.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight > 16.1 && weight < 19.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight > 16.3 && weight < 19.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight > 16.4 && weight < 19.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight > 16.6 && weight < 20.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight > 16.8 && weight < 20.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight > 17.0 && weight < 20.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight > 17.1 && weight < 20.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight > 17.3 && weight < 20.9 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight > 17.5 && weight < 21.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight > 17.7 && weight < 21.4 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight > 17.9 && weight < 21.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight > 18.0 && weight < 21.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight > 18.2 && weight < 22.1 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight > 18.4 && weight < 22.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight > 18.6 && weight < 22.6 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight > 18.8 && weight < 22.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight > 19.0 && weight < 23.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight > 19.2 && weight < 23.3 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight > 19.4 && weight < 23.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight > 19.6 && weight < 23.8 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight > 19.8 && weight < 24.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight > 19.9 && weight < 24.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight > 20.1 && weight < 24.5 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight > 20.3 && weight < 24.7 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight > 20.5 && weight < 25.0 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        if( stature >= 120.0 && weight > 20.7 && weight < 25.2 ){
            result.msg = 'Normal o Eutrófico';
            result.ok = true;
        }
        
        // *** Normal o Eutrófico ***

        // *** Sobrepeso ***
        if( stature >= 65.0 && stature < 65.5 && weight >= 7.9 && weight < 8.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.1 && weight < 8.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 8.2 && weight < 9.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 8.3 && weight < 9.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 8.4 && weight < 9.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 8.5 && weight < 9.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 8.7 && weight < 9.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 8.8 && weight < 9.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 8.9 && weight < 9.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.0 && weight < 9.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 9.1 && weight < 10.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 9.2 && weight < 10.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 9.3 && weight < 10.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 9.4 && weight < 10.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 9.5 && weight < 10.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 9.7 && weight < 10.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 9.8 && weight < 10.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 9.9 && weight < 10.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 10.0 && weight < 11.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 10.1 && weight < 11.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 10.2 && weight < 11.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 10.3 && weight < 11.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 10.4 && weight < 11.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 10.5 && weight < 11.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 10.6 && weight < 11.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 10.7 && weight < 11.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 10.8 && weight < 11.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 10.9 && weight < 12.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 11.0 && weight < 12.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 11.1 && weight < 12.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 11.2 && weight < 12.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 11.3 && weight < 12.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 11.4 && weight < 12.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 11.6 && weight < 12.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 11.7 && weight < 12.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 11.8 && weight < 13.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 11.9 && weight < 13.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 12.1 && weight < 13.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 12.2 && weight < 13.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 12.3 && weight < 13.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 12.5 && weight < 13.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 12.6 && weight < 13.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 12.7 && weight < 14.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 12.9 && weight < 14.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 13.0 && weight < 14.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 13.2 && weight < 14.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 13.3 && weight < 14.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 13.4 && weight < 14.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 13.6 && weight < 14.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 13.7 && weight < 15.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 13.8 && weight < 15.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 14.0 && weight < 15.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 14.1 && weight < 15.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 14.3 && weight < 15.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 14.4 && weight < 15.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 14.5 && weight < 16.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 14.7 && weight < 16.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 14.8 && weight < 16.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 14.9 && weight < 16.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 15.1 && weight < 16.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 15.2 && weight < 16.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 15.4 && weight < 16.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 15.5 && weight < 17.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 15.6 && weight < 17.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 15.8 && weight < 17.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 15.9 && weight < 17.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 16.1 && weight < 17.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 16.2 && weight < 17.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 16.4 && weight < 18.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 16.5 && weight < 18.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 16.7 && weight < 18.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 16.9 && weight < 18.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 17.0 && weight < 18.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 17.2 && weight < 18.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 17.4 && weight < 19.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 17.5 && weight < 19.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 17.7 && weight < 19.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 17.9 && weight < 19.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 18.1 && weight < 19.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 18.2 && weight < 20.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 18.4 && weight < 20.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 18.6 && weight < 20.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 18.8 && weight < 20.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 19.0 && weight < 21.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 19.2 && weight < 21.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 19.4 && weight < 21.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 19.6 && weight < 21.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 19.8 && weight < 21.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 20.0 && weight < 22.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 20.3 && weight < 22.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight >= 20.5 && weight < 22.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight >= 20.7 && weight < 22.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight >= 20.9 && weight < 23.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight >= 21.2 && weight < 23.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight >= 21.4 && weight < 23.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight >= 21.6 && weight < 23.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight >= 21.8 && weight < 24.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight >= 22.1 && weight < 24.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight >= 22.3 && weight < 24.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight >= 22.6 && weight < 25.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight >= 22.8 && weight < 25.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight >= 23.0 && weight < 25.5 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight >= 23.3 && weight < 25.8 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight >= 23.5 && weight < 26.1 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight >= 23.8 && weight < 26.3 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight >= 24.0 && weight < 26.6 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight >= 24.2 && weight < 26.9 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight >= 24.5 && weight < 27.2 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight >= 24.7 && weight < 27.4 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight >= 25.0 && weight < 27.7 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        if( stature >= 120.0 && weight >= 25.2 && weight < 28.0 ){
            result.msg = 'Sobrepeso';
            result.ok = true;
        }
        
        // *** Sobrepeso ***

        // *** Obesidad ***

        if( stature >= 65.0 && stature < 65.5 && weight >= 8.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 65.5 && stature < 66.0 && weight >= 8.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.0 && stature < 66.5 && weight >= 9.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 66.5 && stature < 67.0 && weight >= 9.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.0 && stature < 67.5 && weight >= 9.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 67.5 && stature < 68.0 && weight >= 9.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.0 && stature < 68.5 && weight >= 9.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 68.5 && stature < 69.0 && weight >= 9.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.0 && stature < 69.5 && weight >= 9.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 69.5 && stature < 70.0 && weight >= 9.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.0 && stature < 70.5 && weight >= 10.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 70.5 && stature < 71.0 && weight >= 10.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.0 && stature < 71.5 && weight >= 10.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 71.5 && stature < 72.0 && weight >= 10.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.0 && stature < 72.5 && weight >= 10.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 72.5 && stature < 73.0 && weight >= 10.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.0 && stature < 73.5 && weight >= 10.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 73.5 && stature < 74.0 && weight >= 10.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.0 && stature < 74.5 && weight >= 11.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 74.5 && stature < 75.0 && weight >= 11.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.0 && stature < 75.5 && weight >= 11.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 75.5 && stature < 76.0 && weight >= 11.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.0 && stature < 76.5 && weight >= 11.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 76.5 && stature < 77.0 && weight >= 11.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.0 && stature < 77.5 && weight >= 11.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 77.5 && stature < 78.0 && weight >= 11.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.0 && stature < 78.5 && weight >= 11.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 78.5 && stature < 79.0 && weight >= 12.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.0 && stature < 79.5 && weight >= 12.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 79.5 && stature < 80.0 && weight >= 12.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.0 && stature < 80.5 && weight >= 12.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 80.5 && stature < 81.0 && weight >= 12.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.0 && stature < 81.5 && weight >= 12.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 81.5 && stature < 82.0 && weight >= 12.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.0 && stature < 82.5 && weight >= 12.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 82.5 && stature < 83.0 && weight >= 13.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.0 && stature < 83.5 && weight >= 13.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 83.5 && stature < 84.0 && weight >= 13.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.0 && stature < 84.5 && weight >= 13.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 84.5 && stature < 85.0 && weight >= 13.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.0 && stature < 85.5 && weight >= 13.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 85.5 && stature < 86.0 && weight >= 13.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.0 && stature < 86.5 && weight >= 14.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 86.5 && stature < 87.0 && weight >= 14.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.0 && stature < 87.5 && weight >= 14.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 87.5 && stature < 88.0 && weight >= 14.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.0 && stature < 88.5 && weight >= 14.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 88.5 && stature < 89.0 && weight >= 14.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.0 && stature < 89.5 && weight >= 14.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 89.5 && stature < 90.0 && weight >= 15.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.0 && stature < 90.5 && weight >= 15.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 90.5 && stature < 91.0 && weight >= 15.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.0 && stature < 91.5 && weight >= 15.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 91.5 && stature < 92.0 && weight >= 15.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.0 && stature < 92.5 && weight >= 15.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 92.5 && stature < 93.0 && weight >= 16.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.0 && stature < 93.5 && weight >= 16.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 93.5 && stature < 94.0 && weight >= 16.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.0 && stature < 94.5 && weight >= 16.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 94.5 && stature < 95.0 && weight >= 16.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.0 && stature < 95.5 && weight >= 16.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 95.5 && stature < 96.0 && weight >= 16.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.0 && stature < 96.5 && weight >= 17.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 96.5 && stature < 97.0 && weight >= 17.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.0 && stature < 97.5 && weight >= 17.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 97.5 && stature < 98.0 && weight >= 17.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.0 && stature < 98.5 && weight >= 17.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 98.5 && stature < 99.0 && weight >= 17.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.0 && stature < 99.5 && weight >= 18.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 99.5 && stature < 100.0 && weight >= 18.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.0 && stature < 100.5 && weight >= 18.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 100.5 && stature < 101.0 && weight >= 18.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.0 && stature < 101.5 && weight >= 18.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 101.5 && stature < 102.0 && weight >= 18.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.0 && stature < 102.5 && weight >= 19.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 102.5 && stature < 103.0 && weight >= 19.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.0 && stature < 103.5 && weight >= 19.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 103.5 && stature < 104.0 && weight >= 19.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.0 && stature < 104.5 && weight >= 19.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 104.5 && stature < 105.0 && weight >= 20.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.0 && stature < 105.5 && weight >= 20.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 105.5 && stature < 106.0 && weight >= 20.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.0 && stature < 106.5 && weight >= 20.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 106.5 && stature < 107.0 && weight >= 21.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.0 && stature < 107.5 && weight >= 21.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 107.5 && stature < 108.0 && weight >= 21.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.0 && stature < 108.5 && weight >= 21.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 108.5 && stature < 109.0 && weight >= 21.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.0 && stature < 109.5 && weight >= 22.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 109.5 && stature < 110.0 && weight >= 22.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.0 && stature < 110.5 && weight >= 22.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 110.5 && stature < 111.0 && weight >= 22.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 111.0 && stature < 111.5 && weight >= 23.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 111.5 && stature < 112.0 && weight >= 23.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 112.0 && stature < 112.5 && weight >= 23.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 112.5 && stature < 113.0 && weight >= 23.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 113.0 && stature < 113.5 && weight >= 24.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 113.5 && stature < 114.0 && weight >= 24.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 114.0 && stature < 114.5 && weight >= 24.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 114.5 && stature < 115.0 && weight >= 25.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 115.0 && stature < 115.5 && weight >= 25.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 115.5 && stature < 116.0 && weight >= 25.5 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 116.0 && stature < 116.5 && weight >= 25.8 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 116.5 && stature < 117.0 && weight >= 26.1 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 117.0 && stature < 117.5 && weight >= 26.3 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 117.5 && stature < 118.0 && weight >= 26.6 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 118.0 && stature < 118.5 && weight >= 26.9 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 118.5 && stature < 119.0 && weight >= 27.2 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 119.0 && stature < 119.5 && weight >= 27.4 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 119.5 && stature < 120.0 && weight >= 27.7 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        if( stature >= 120.0 && weight >= 28.0 ){
            result.msg = 'Obesidad';
            result.ok = true;
        }
        

    }

    const boysIMCEfrom5to19 = () => {

        const IMC = weight / (stature/100)**2

        if ( age.y === 5 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo 14.1';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.1 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.1 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.1 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.1 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.1 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 16.6 && IMC < 18.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 16.6 && IMC < 18.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 16.6 && IMC < 18.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 16.7 && IMC < 18.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 16.7 && IMC < 18.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 16.7 && IMC < 18.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 16.7 && IMC < 18.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 16.7 && IMC < 18.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 16.7 && IMC < 18.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 16.7 && IMC < 18.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 16.7 && IMC < 18.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 16.7 && IMC < 18.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 18.3 && IMC < 20.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 18.3 && IMC < 20.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 18.3 && IMC < 20.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 18.3 && IMC < 20.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 18.3 && IMC < 20.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 18.3 && IMC < 20.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 18.4 && IMC < 20.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 18.4 && IMC < 20.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 18.4 && IMC < 20.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 18.4 && IMC < 20.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 18.5 && IMC < 20.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 18.5 && IMC < 20.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 20.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 20.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 20.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 20.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 20.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 20.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 20.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 20.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 20.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 20.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 20.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 20.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 6 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.0 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.1 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.1 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.1 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.1 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.1 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.1 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.1 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.1 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.1 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.1 && IMC <= 14.2 ){
                result.msg = 'Riesgo 14.2';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.1 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.1 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.1 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.1 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.1 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.1 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.1 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.1 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.2 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.2 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.2 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.2 && IMC < 17.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 16.8 && IMC < 18.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 16.8 && IMC < 18.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 16.8 && IMC < 18.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 16.8 && IMC < 18.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 16.8 && IMC < 18.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 16.9 && IMC < 18.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 16.9 && IMC < 18.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 16.9 && IMC < 18.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 16.9 && IMC < 18.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 17.0 && IMC < 18.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 17.0 && IMC < 18.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 17.0 && IMC < 19.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 18.5 && IMC < 20.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 18.6 && IMC < 20.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 18.6 && IMC < 20.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 18.6 && IMC < 20.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 18.7 && IMC < 21.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 18.7 && IMC < 21.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 18.7 && IMC < 21.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 18.8 && IMC < 21.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 18.8 && IMC < 21.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 18.9 && IMC < 21.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 18.9 && IMC < 21.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.0 && IMC < 21.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 20.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 20.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 20.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 20.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 21.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 21.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 21.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 21.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 21.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 21.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 21.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 21.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 7 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.2 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.2 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.2 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.2 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.2 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.2 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.2 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.2 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.3 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.3 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.3 && IMC <= 14.4 ){
                result.msg = 'Riesgo 14.4';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.2 && IMC < 17.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.2 && IMC < 17.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.2 && IMC < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.3 && IMC < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.3 && IMC < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.3 && IMC < 17.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.3 && IMC < 17.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.3 && IMC < 17.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.3 && IMC < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.3 && IMC < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.4 && IMC < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.4 && IMC < 17.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 17.0 && IMC < 19.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 17.1 && IMC < 19.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 17.1 && IMC < 19.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 17.1 && IMC < 19.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 17.2 && IMC < 19.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 17.2 && IMC < 19.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 17.2 && IMC < 19.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 17.3 && IMC < 19.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 17.3 && IMC < 19.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 17.3 && IMC < 19.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 17.4 && IMC < 19.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 17.4 && IMC < 19.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 19.0 && IMC < 21.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 19.1 && IMC < 21.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 19.1 && IMC < 21.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 19.2 && IMC < 21.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 19.2 && IMC < 22.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 19.3 && IMC < 22.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 19.3 && IMC < 22.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 19.4 && IMC < 22.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 19.4 && IMC < 22.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 19.5 && IMC < 22.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 19.6 && IMC < 22.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.6 && IMC < 22.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 21.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 21.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 21.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 21.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 22.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 22.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 22.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 22.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 22.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 22.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 22.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 22.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 8 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 12.9 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.3 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.3 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.3 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.4 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.4 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.4 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.4 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.4 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.4 && IMC <= 14.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.5 && IMC <= 14.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.5 && IMC <= 14.6 ){
                result.msg = 'Riesgo 14.6';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.4 && IMC < 17.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.4 && IMC < 17.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.4 && IMC < 17.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.4 && IMC < 17.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.5 && IMC < 17.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.5 && IMC < 18.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.5 && IMC < 18.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.5 && IMC < 18.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.5 && IMC < 18.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.6 && IMC < 18.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.6 && IMC < 18.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.6 && IMC < 18.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 17.4 && IMC < 19.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 17.5 && IMC < 19.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 17.5 && IMC < 19.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 17.5 && IMC < 19.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 17.6 && IMC < 19.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 17.6 && IMC < 20.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 17.7 && IMC < 20.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 17.7 && IMC < 20.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 17.7 && IMC < 20.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 17.8 && IMC < 20.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 17.8 && IMC < 20.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 17.9 && IMC < 20.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 19.7 && IMC < 22.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 19.7 && IMC < 22.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 19.8 && IMC < 23.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 19.9 && IMC < 23.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 19.9 && IMC < 23.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 20.0 && IMC < 23.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 20.1 && IMC < 23.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 20.1 && IMC < 23.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 20.2 && IMC < 23.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 20.3 && IMC < 23.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 20.3 && IMC < 24.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 20.4 && IMC < 24.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 22.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 22.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 23.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 23.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 23.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 23.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 23.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 23.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 23.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 23.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 9 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 13.1 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.5 && IMC <= 14.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.5 && IMC <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.5 && IMC <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.6 && IMC <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.6 && IMC <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.6 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.6 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.6 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.7 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.7 && IMC <= 14.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.7 && IMC <= 14.9 ){
                result.msg = 'Riesgo 14.9';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.6 && IMC < 18.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.6 && IMC < 18.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.7 && IMC < 18.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.7 && IMC < 18.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.7 && IMC < 18.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.7 && IMC < 18.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.8 && IMC < 18.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.8 && IMC < 18.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.8 && IMC < 18.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.8 && IMC < 18.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.9 && IMC < 18.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.9 && IMC < 19.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 17.9 && IMC < 20.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 18.0 && IMC < 20.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 18.0 && IMC < 20.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 18.0 && IMC < 20.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 18.1 && IMC < 20.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 18.1 && IMC < 20.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 18.2 && IMC < 20.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 18.2 && IMC < 21.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 18.3 && IMC < 21.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 18.3 && IMC < 21.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 18.4 && IMC < 21.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 18.4 && IMC < 21.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 20.5 && IMC < 24.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 20.5 && IMC < 24.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 20.6 && IMC < 24.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 20.7 && IMC < 24.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 20.8 && IMC < 24.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 20.8 && IMC < 25.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 20.9 && IMC < 25.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 21.0 && IMC < 25.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 21.1 && IMC < 25.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 21.2 && IMC < 25.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 21.2 && IMC < 25.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 21.3 && IMC < 25.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 24.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 24.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 24.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 24.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 24.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 25.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 25.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 25.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 25.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 25.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 25.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 25.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 10 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 14.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 14.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 14.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 13.5 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.8 && IMC <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.8 && IMC <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.8 && IMC <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.8 && IMC <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.9 && IMC <= 15.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.9 && IMC <= 15.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.9 && IMC <= 15.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.9 && IMC <= 15.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.0 && IMC <= 15.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.0 && IMC <= 15.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.0 && IMC <= 15.3 ){
                result.msg = 'Riesgo 15.3';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.9 && IMC < 19.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.0 && IMC < 19.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.0 && IMC < 19.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.0 && IMC < 19.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.0 && IMC < 19.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.1 && IMC < 19.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.1 && IMC < 19.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.1 && IMC < 19.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.2 && IMC < 19.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.2 && IMC < 19.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.2 && IMC < 19.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 15.3 && IMC < 19.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 18.5 && IMC < 21.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 18.5 && IMC < 21.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 18.6 && IMC < 21.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 18.6 && IMC < 21.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 18.7 && IMC < 21.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 18.8 && IMC < 21.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 18.8 && IMC < 21.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 18.9 && IMC < 22.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 18.9 && IMC < 22.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 19.0 && IMC < 22.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 19.0 && IMC < 22.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.1 && IMC < 22.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 21.4 && IMC < 26.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 21.5 && IMC < 26.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 21.6 && IMC < 26.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 21.7 && IMC < 26.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 21.7 && IMC < 26.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 21.8 && IMC < 26.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 21.9 && IMC < 27.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 22.0 && IMC < 27.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 22.1 && IMC < 27.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 22.2 && IMC < 27.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 22.3 && IMC < 27.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 22.4 && IMC < 27.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 26.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 26.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 26.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 26.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 26.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 26.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 27.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 27.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 27.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 27.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 27.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 27.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 11 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 14.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 14.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 14.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 14.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 14.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 14.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 14.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 14.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 14.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 14.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 14.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 14.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 13.9 && IMC <= 15.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.1 && IMC <= 15.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.1 && IMC <= 15.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.1 && IMC <= 15.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.2 && IMC <= 15.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.2 && IMC <= 15.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.2 && IMC <= 15.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.3 && IMC <= 15.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.3 && IMC <= 15.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.3 && IMC <= 15.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.4 && IMC <= 15.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.4 && IMC <= 15.7 ){
                result.msg = 'Riesgo 15.8';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 15.3 && IMC < 19.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.3 && IMC < 19.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.4 && IMC < 20.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.4 && IMC < 20.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.5 && IMC < 20.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.5 && IMC < 20.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.5 && IMC < 20.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.6 && IMC < 20.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.6 && IMC < 20.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.7 && IMC < 20.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.7 && IMC < 20.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 15.7 && IMC < 20.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 19.2 && IMC < 22.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 19.2 && IMC < 22.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 19.3 && IMC < 22.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 19.3 && IMC < 22.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 19.4 && IMC < 22.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 19.5 && IMC < 22.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 19.5 && IMC < 23.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 19.6 && IMC < 23.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 19.7 && IMC < 23.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 19.7 && IMC < 23.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 19.8 && IMC < 23.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.9 && IMC < 23.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 22.5 && IMC < 28.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 22.5 && IMC < 28.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 22.6 && IMC < 28.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 22.7 && IMC < 28.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 22.8 && IMC < 28.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 22.9 && IMC < 28.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 23.0 && IMC < 29.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 23.1 && IMC < 29.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 23.2 && IMC < 29.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 23.3 && IMC < 29.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 23.4 && IMC < 29.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 23.5 && IMC < 29.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 28.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 28.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 28.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 28.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 28.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 28.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 29.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 29.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 29.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 29.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 29.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 29.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 12 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 14.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 14.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 14.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 14.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 14.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 14.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 14.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 14.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 14.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 14.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 14.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 14.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 14.4 && IMC <= 16.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.5 && IMC <= 15.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.5 && IMC <= 15.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.6 && IMC <= 15.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.6 && IMC <= 16.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.6 && IMC <= 16.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.7 && IMC <= 16.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.7 && IMC <= 16.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.8 && IMC <= 16.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.8 && IMC <= 16.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.8 && IMC <= 16.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.9 && IMC <= 16.3 ){
                result.msg = 'Riesgo 16.4';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 15.8 && IMC < 20.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.8 && IMC < 20.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.9 && IMC < 21.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.9 && IMC < 21.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.0 && IMC < 21.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.0 && IMC < 21.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.1 && IMC < 21.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.1 && IMC < 21.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.2 && IMC < 21.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.2 && IMC < 21.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.3 && IMC < 21.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.3 && IMC < 21.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 19.9 && IMC < 23.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 20.0 && IMC < 23.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 20.1 && IMC < 23.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 20.2 && IMC < 23.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 20.2 && IMC < 24.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 20.3 && IMC < 24.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 20.4 && IMC < 24.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 20.4 && IMC < 24.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 20.5 && IMC < 24.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 20.6 && IMC < 24.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 20.7 && IMC < 24.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 20.8 && IMC < 24.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 23.6 && IMC < 30.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 23.7 && IMC < 30.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 23.8 && IMC < 30.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 23.9 && IMC < 30.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 24.0 && IMC < 30.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 24.1 && IMC < 30.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 24.2 && IMC < 30.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.3 && IMC < 31.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.4 && IMC < 31.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.5 && IMC < 31.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.6 && IMC < 31.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.7 && IMC < 31.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 30.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 30.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 30.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 30.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 30.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 30.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 30.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 31.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 31.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 31.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 31.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 31.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 13 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 14.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 15.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 15.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 15.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 15.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 15.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 15.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 15.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 15.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 15.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 15.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 15.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 14.9 && IMC <= 16.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.0 && IMC <= 16.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.0 && IMC <= 16.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.1 && IMC <= 16.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.1 && IMC <= 16.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.2 && IMC <= 16.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.2 && IMC <= 16.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.2 && IMC <= 16.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.3 && IMC <= 16.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.3 && IMC <= 16.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.4 && IMC <= 16.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 15.4 && IMC <= 17.0 ){
                result.msg = 'Riesgo 17.0';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 16.4 && IMC < 21.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.4 && IMC < 21.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.5 && IMC < 22.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.5 && IMC < 22.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.6 && IMC < 22.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.6 && IMC < 22.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.7 && IMC < 22.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.7 && IMC < 22.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.8 && IMC < 22.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.8 && IMC < 22.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.9 && IMC < 22.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 17.0 && IMC < 22.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 20.8 && IMC < 24.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 20.9 && IMC < 24.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 21.0 && IMC < 25.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 21.1 && IMC < 25.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 21.1 && IMC < 25.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 21.2 && IMC < 25.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 21.3 && IMC < 25.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 21.4 && IMC < 25.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 21.5 && IMC < 25.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 21.5 && IMC < 25.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 21.6 && IMC < 25.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 21.7 && IMC < 25.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 24.8 && IMC < 31.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 24.9 && IMC < 31.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 25.0 && IMC < 31.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 25.1 && IMC < 32.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 25.2 && IMC < 32.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 25.2 && IMC < 32.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 25.3 && IMC < 32.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 25.4 && IMC < 32.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 25.5 && IMC < 32.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 25.6 && IMC < 32.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 25.7 && IMC < 32.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 25.8 && IMC < 33.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 31.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 31.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 31.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 32.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 32.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 32.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 32.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 32.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 32.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 32.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 32.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 33.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 14 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 15.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 15.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 15.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 15.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 15.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 15.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 15.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 15.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 15.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 15.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 15.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 16.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 15.4 && IMC <= 17.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.5 && IMC <= 17.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.6 && IMC <= 17.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.6 && IMC <= 17.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.7 && IMC <= 17.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.7 && IMC <= 17.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.7 && IMC <= 17.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.8 && IMC <= 17.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.8 && IMC <= 17.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.9 && IMC <= 17.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.9 && IMC <= 17.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.0 && IMC <= 17.6 ){
                result.msg = 'Riesgo 17.6';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 17.0 && IMC < 22.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 17.1 && IMC < 22.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 17.1 && IMC < 22.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 17.2 && IMC < 22.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 17.2 && IMC < 23.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 17.3 && IMC < 23.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 17.3 && IMC < 23.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 17.4 && IMC < 23.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 17.4 && IMC < 23.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 17.5 && IMC < 23.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 17.5 && IMC < 23.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 17.6 && IMC < 23.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 21.8 && IMC < 25.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 21.8 && IMC < 26.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 21.9 && IMC < 26.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 22.0 && IMC < 26.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 22.1 && IMC < 26.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 22.2 && IMC < 26.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 22.2 && IMC < 26.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 22.3 && IMC < 26.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 22.4 && IMC < 26.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 22.5 && IMC < 26.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 22.5 && IMC < 26.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 22.6 && IMC < 26.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 25.9 && IMC < 33.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 26.0 && IMC < 33.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 26.1 && IMC < 33.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 26.2 && IMC < 33.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 26.3 && IMC < 33.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 26.4 && IMC < 33.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 26.5 && IMC < 33.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 26.5 && IMC < 33.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 26.6 && IMC < 33.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 26.7 && IMC < 33.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 26.8 && IMC < 33.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 26.9 && IMC < 34.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 33.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 33.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 33.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 33.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 33.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 33.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 33.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 33.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 33.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 33.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 33.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 34.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 15 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 16.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 16.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 16.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 16.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 15.9 && IMC <= 17.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.1 && IMC <= 17.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.1 && IMC <= 17.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.1 && IMC <= 17.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.2 && IMC <= 17.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.2 && IMC <= 17.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.3 && IMC <= 18.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.3 && IMC <= 18.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.3 && IMC <= 18.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.4 && IMC <= 18.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.4 && IMC <= 18.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.5 && IMC <= 18.2 ){
                result.msg = 'Riesgo 18.2';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 17.6 && IMC < 23.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 17.7 && IMC < 23.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 17.8 && IMC < 23.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 17.8 && IMC < 23.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 17.9 && IMC < 23.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 17.9 && IMC < 23.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 18.0 && IMC < 23.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 18.0 && IMC < 23.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 18.1 && IMC < 23.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 18.1 && IMC < 24.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 18.2 && IMC < 24.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 18.2 && IMC < 24.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 22.7 && IMC < 27.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 22.8 && IMC < 27.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 22.8 && IMC < 27.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 22.9 && IMC < 27.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 23.0 && IMC < 27.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 23.0 && IMC < 27.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 23.1 && IMC < 27.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 23.2 && IMC < 27.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 23.3 && IMC < 27.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 23.3 && IMC < 27.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 23.4 && IMC < 27.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 23.5 && IMC < 27.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 27.0 && IMC < 34.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 27.1 && IMC < 34.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 27.1 && IMC < 34.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 27.2 && IMC < 34.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 27.3 && IMC < 34.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 27.4 && IMC < 34.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 27.4 && IMC < 34.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 27.5 && IMC < 34.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 27.6 && IMC < 34.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 27.7 && IMC < 34.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 27.7 && IMC < 34.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 27.8 && IMC < 34.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 34.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 34.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 34.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 34.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 34.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 34.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 34.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 34.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 34.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 34.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 34.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 34.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 16 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 16.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 16.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 16.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 16.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 16.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 16.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 16.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 16.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 16.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 16.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 16.2 && IMC <= 18.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.5 && IMC <= 18.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.6 && IMC <= 18.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.6 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.7 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.7 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.7 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.8 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.8 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.8 && IMC <= 18.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.9 && IMC <= 18.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.9 && IMC <= 18.7 ){
                result.msg = 'Riesgo 18.8';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 18.2 && IMC < 24.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 18.3 && IMC < 24.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 18.3 && IMC < 24.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 18.4 && IMC < 24.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 18.4 && IMC < 24.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 18.5 && IMC < 24.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 18.5 && IMC < 24.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 18.6 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 18.6 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 18.7 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 18.7 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 18.7 && IMC < 24.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 23.5 && IMC < 27.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 23.6 && IMC < 27.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 23.7 && IMC < 28.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 23.7 && IMC < 28.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 23.8 && IMC < 28.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 23.8 && IMC < 28.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 23.9 && IMC < 28.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.0 && IMC < 28.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.0 && IMC < 28.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.1 && IMC < 28.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.2 && IMC < 28.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.2 && IMC < 28.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 27.9 && IMC < 34.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 27.9 && IMC < 34.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 28.0 && IMC < 34.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 28.1 && IMC < 34.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 28.1 && IMC < 34.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 28.2 && IMC < 35.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 28.3 && IMC < 35.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 28.3 && IMC < 35.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 28.4 && IMC < 35.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 28.5 && IMC < 35.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 28.5 && IMC < 35.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 28.6 && IMC < 35.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 34.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 34.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 34.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 34.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 34.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 35.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 35.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 35.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 35.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 35.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 35.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 35.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 17 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 16.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 17.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 17.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 17.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 17.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 17.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 17.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 17.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 17.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 17.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 17.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 17.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 16.4 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 17.0 && IMC <= 18.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 17.0 && IMC <= 18.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 17.0 && IMC <= 18.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 17.1 && IMC <= 18.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 17.1 && IMC <= 19.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 17.1 && IMC <= 19.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 17.1 && IMC <= 19.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 17.2 && IMC <= 19.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 17.2 && IMC <= 19.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 17.2 && IMC <= 19.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 17.3 && IMC <= 19.2 ){
                result.msg = 'Riesgo 19.2';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 18.8 && IMC < 24.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 18.8 && IMC < 24.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 18.9 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 18.9 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 18.9 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 19.0 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 19.0 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 19.1 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 19.1 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 19.1 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 19.2 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 19.2 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 24.3 && IMC < 28.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 24.3 && IMC < 28.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 24.4 && IMC < 28.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 24.4 && IMC < 28.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 24.5 && IMC < 28.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 24.5 && IMC < 28.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 24.6 && IMC < 29.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.7 && IMC < 29.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.7 && IMC < 29.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.8 && IMC < 29.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.8 && IMC < 29.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.9 && IMC < 29.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 28.6 && IMC < 35.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 28.7 && IMC < 35.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 28.7 && IMC < 35.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 28.8 && IMC < 35.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 28.9 && IMC < 35.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 28.9 && IMC < 35.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 29.0 && IMC < 35.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 29.0 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 29.1 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 29.1 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 29.2 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 29.2 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 35.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 35.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 35.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 35.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 35.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 35.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 35.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 18 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 17.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 17.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 17.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 17.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 17.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 17.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 17.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 17.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 17.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 17.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 17.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 17.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 16.4 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 17.3 && IMC <= 19.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 17.3 && IMC <= 19.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 17.4 && IMC <= 19.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 17.4 && IMC <= 19.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 17.4 && IMC <= 19.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 17.4 && IMC <= 19.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 17.5 && IMC <= 19.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 17.5 && IMC <= 19.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 17.5 && IMC <= 19.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 17.5 && IMC <= 19.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 17.5 && IMC <= 19.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 19.2 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 19.3 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 19.3 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 19.3 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 19.4 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 19.4 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 19.4 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 19.5 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 19.5 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 19.5 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 19.6 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 19.6 && IMC < 25.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 24.9 && IMC < 29.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 25.0 && IMC < 29.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 25.0 && IMC < 29.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 25.1 && IMC < 29.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 25.1 && IMC < 29.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 25.1 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 25.2 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 25.2 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 25.3 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 25.3 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 25.4 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 25.4 && IMC < 29.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 29.2 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 29.3 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 29.3 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 29.4 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 29.4 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 29.5 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 29.5 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 29.5 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 29.6 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 29.6 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 29.6 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 29.7 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 19 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 17.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 17.6 && IMC <= 19.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 19.6 && IMC < 25.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 25.4 && IMC < 29.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 29.7 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }

    }

    const girlsIMCEfrom5to19 = () => {

        const IMC = weight / (stature/100)**2

        console.log(IMC)

        if ( age.y === 5 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.9 && IMC < 16.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.9 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.9 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.9 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.9 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 16.9 && IMC < 18.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 16.9 && IMC < 18.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 16.9 && IMC < 18.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 16.9 && IMC < 18.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 16.9 && IMC < 18.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 16.9 && IMC < 19.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 16.9 && IMC < 19.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 16.9 && IMC < 19.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 17.0 && IMC < 19.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 17.0 && IMC < 19.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 17.0 && IMC < 19.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 17.0 && IMC < 19.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 18.9 && IMC < 21.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 18.9 && IMC < 21.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 18.9 && IMC < 21.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 18.9 && IMC < 21.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 18.9 && IMC < 21.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 19.0 && IMC < 21.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 19.0 && IMC < 21.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 19.0 && IMC < 21.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 19.1 && IMC < 21.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 19.1 && IMC < 21.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 19.1 && IMC < 22.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.2 && IMC < 22.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 21.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 21.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 21.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 21.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 21.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 21.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 21.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 21.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 21.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 21.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 22.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 22.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 6 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 13.9 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.9 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.9 && IMC < 17.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.9 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.9 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.9 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.9 && IMC < 17.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.9 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.9 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.9 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.9 && IMC < 17.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.9 && IMC < 17.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 17.0 && IMC < 19.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 17.0 && IMC < 19.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 17.0 && IMC < 19.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 17.1 && IMC < 19.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 17.1 && IMC < 19.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 17.1 && IMC < 19.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 17.1 && IMC < 19.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 17.2 && IMC < 19.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 17.2 && IMC < 19.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 17.2 && IMC < 19.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 17.2 && IMC < 19.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 17.3 && IMC < 19.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 19.2 && IMC < 22.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 19.3 && IMC < 22.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 19.3 && IMC < 22.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 19.3 && IMC < 22.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 19.4 && IMC < 22.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 19.4 && IMC < 22.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 19.5 && IMC < 22.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 19.5 && IMC < 22.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 19.6 && IMC < 22.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 19.6 && IMC < 23.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 19.7 && IMC < 23.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.7 && IMC < 23.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 22.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 22.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 22.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 22.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 22.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 22.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 22.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 22.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 22.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 23.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 23.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 23.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 7 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 12.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 12.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 12.7 && IMC <= 13.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 12.8 && IMC <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 12.8 && IMC <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 12.8 && IMC <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 12.8 && IMC <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 12.8 && IMC <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 12.8 && IMC <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 12.8 && IMC <= 14.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 12.8 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 12.9 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 12.9 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 13.9 && IMC < 17.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.9 && IMC < 17.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.0 && IMC < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.0 && IMC < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.0 && IMC < 17.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.0 && IMC < 17.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.0 && IMC < 17.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.0 && IMC < 17.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.0 && IMC < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.1 && IMC < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.1 && IMC < 17.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.1 && IMC < 17.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 17.3 && IMC < 19.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 17.3 && IMC < 19.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 17.4 && IMC < 19.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 17.4 && IMC < 20.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 17.4 && IMC < 20.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 17.5 && IMC < 20.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 17.5 && IMC < 20.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 17.5 && IMC < 20.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 17.6 && IMC < 20.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 17.6 && IMC < 20.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 17.6 && IMC < 20.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 17.7 && IMC < 20.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 19.8 && IMC < 23.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 19.8 && IMC < 23.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 19.9 && IMC < 23.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 20.0 && IMC < 23.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 20.0 && IMC < 23.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 20.1 && IMC < 23.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 20.1 && IMC < 24.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 20.2 && IMC < 24.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 20.3 && IMC < 24.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 20.3 && IMC < 24.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 20.4 && IMC < 24.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 20.5 && IMC < 24.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 23.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 23.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 23.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 23.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 23.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 23.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 24.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 8 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 12.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 12.9 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 12.9 && IMC <= 14.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 12.9 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 12.9 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.0 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.0 && IMC <= 14.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.0 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.0 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.0 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.1 && IMC <= 14.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.1 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.1 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.1 && IMC < 17.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.1 && IMC < 17.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.2 && IMC < 17.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.2 && IMC < 17.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.2 && IMC < 17.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.2 && IMC < 18.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.3 && IMC < 18.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.3 && IMC < 18.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.3 && IMC < 18.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.3 && IMC < 18.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.4 && IMC < 18.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.4 && IMC < 18.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 17.7 && IMC < 20.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 17.8 && IMC < 20.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 17.8 && IMC < 20.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 17.9 && IMC < 20.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 17.9 && IMC < 20.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 18.0 && IMC < 20.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 18.0 && IMC < 21.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 18.1 && IMC < 21.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 18.1 && IMC < 21.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 18.2 && IMC < 21.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 18.2 && IMC < 21.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 18.3 && IMC < 21.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 20.6 && IMC < 24.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 20.6 && IMC < 24.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 20.7 && IMC < 25.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 20.8 && IMC < 25.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 20.9 && IMC < 25.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 20.9 && IMC < 25.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 21.0 && IMC < 25.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 21.1 && IMC < 25.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 21.2 && IMC < 25.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 21.3 && IMC < 26.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 21.3 && IMC < 26.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 21.4 && IMC < 26.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 24.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 24.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 25.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 25.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 25.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 25.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 25.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 25.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 25.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 26.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 26.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 26.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 9 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 13.1 && IMC <= 14.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.2 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.2 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.2 && IMC <= 14.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.2 && IMC <= 14.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.3 && IMC <= 14.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.3 && IMC <= 14.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.3 && IMC <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.4 && IMC <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.4 && IMC <= 14.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.4 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.4 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.4 && IMC < 18.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.5 && IMC < 18.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.5 && IMC < 18.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.5 && IMC < 18.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.6 && IMC < 18.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.6 && IMC < 18.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.6 && IMC < 18.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.7 && IMC < 18.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.7 && IMC < 18.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.7 && IMC < 18.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.8 && IMC < 18.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.8 && IMC < 19.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 18.3 && IMC < 21.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 18.4 && IMC < 21.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 18.4 && IMC < 21.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 18.5 && IMC < 21.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 18.6 && IMC < 21.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 18.6 && IMC < 21.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 18.7 && IMC < 22.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 18.7 && IMC < 22.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 18.8 && IMC < 22.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 18.8 && IMC < 22.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 18.9 && IMC < 22.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.0 && IMC < 22.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 21.5 && IMC < 26.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 21.6 && IMC < 26.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 21.7 && IMC < 26.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 21.8 && IMC < 27.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 21.9 && IMC < 27.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 21.9 && IMC < 27.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 22.0 && IMC < 27.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 22.1 && IMC < 27.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 22.2 && IMC < 27.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 22.3 && IMC < 27.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 22.4 && IMC < 28.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 22.5 && IMC < 28.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 26.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 26.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 26.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 27.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 27.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 27.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 27.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 27.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 27.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 27.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 28.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 28.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 10 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 13.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 13.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 13.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 13.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 13.5 && IMC <= 14.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.5 && IMC <= 14.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 13.5 && IMC <= 14.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 13.6 && IMC <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 13.6 && IMC <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 13.6 && IMC <= 15.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 13.7 && IMC <= 15.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 13.7 && IMC <= 15.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 13.7 && IMC <= 15.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 13.8 && IMC <= 15.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 13.8 && IMC <= 15.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 13.8 && IMC <= 15.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 14.8 && IMC < 19.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.9 && IMC < 19.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.9 && IMC < 19.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.0 && IMC < 19.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.0 && IMC < 19.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.0 && IMC < 19.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.1 && IMC < 19.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.1 && IMC < 19.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.2 && IMC < 19.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.2 && IMC < 19.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.3 && IMC < 19.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 15.3 && IMC < 19.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 19.0 && IMC < 22.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 19.1 && IMC < 22.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 19.2 && IMC < 22.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 19.2 && IMC < 22.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 19.3 && IMC < 22.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 19.4 && IMC < 23.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 19.4 && IMC < 23.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 19.5 && IMC < 23.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 19.6 && IMC < 23.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 19.6 && IMC < 23.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 19.7 && IMC < 23.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 19.8 && IMC < 23.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 22.6 && IMC < 28.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 22.7 && IMC < 28.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 22.8 && IMC < 28.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 22.8 && IMC < 28.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 22.9 && IMC < 29.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 23.0 && IMC < 29.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 23.1 && IMC < 29.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 23.2 && IMC < 29.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 23.3 && IMC < 29.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 23.4 && IMC < 29.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 23.5 && IMC < 29.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 23.6 && IMC < 30.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 28.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 28.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 28.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 28.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 29.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 29.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 29.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 29.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 29.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 29.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 29.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 30.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 11 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 13.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 13.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 14.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 14.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 14.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 14.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 14.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 14.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 14.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 14.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 14.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 14.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 13.9 && IMC <= 15.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 13.9 && IMC <= 15.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.0 && IMC <= 15.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.0 && IMC <= 15.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.0 && IMC <= 15.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.1 && IMC <= 15.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.1 && IMC <= 15.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.2 && IMC <= 15.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.2 && IMC <= 15.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.3 && IMC <= 15.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.3 && IMC <= 15.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.3 && IMC <= 15.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 15.3 && IMC < 19.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.4 && IMC < 19.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.4 && IMC < 20.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.5 && IMC < 20.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.5 && IMC < 20.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.6 && IMC < 20.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.6 && IMC < 20.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.7 && IMC < 20.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.7 && IMC < 20.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.8 && IMC < 20.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.8 && IMC < 20.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 15.9 && IMC < 20.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 19.9 && IMC < 23.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 19.9 && IMC < 23.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 20.0 && IMC < 23.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 20.1 && IMC < 24.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 20.2 && IMC < 24.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 20.2 && IMC < 24.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 20.3 && IMC < 24.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 20.4 && IMC < 24.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 20.5 && IMC < 24.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 20.6 && IMC < 24.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 20.6 && IMC < 24.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 20.7 && IMC < 24.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 23.7 && IMC < 30.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 23.8 && IMC < 30.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 23.9 && IMC < 30.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 24.0 && IMC < 30.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 24.1 && IMC < 30.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 24.2 && IMC < 30.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 24.3 && IMC < 31.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.4 && IMC < 31.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.5 && IMC < 31.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.7 && IMC < 31.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.8 && IMC < 31.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.9 && IMC < 31.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 30.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 30.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 30.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 30.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 30.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 30.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 31.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 31.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 31.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 31.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 31.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 31.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 12 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 14.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 14.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 14.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 14.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 14.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 14.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 14.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 14.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 14.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 14.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 14.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 14.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 14.4 && IMC <= 16.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 14.4 && IMC <= 16.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 14.5 && IMC <= 16.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 14.5 && IMC <= 16.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 14.6 && IMC <= 16.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 14.6 && IMC <= 16.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 14.7 && IMC <= 16.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 14.7 && IMC <= 16.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 14.8 && IMC <= 16.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 14.8 && IMC <= 16.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 14.8 && IMC <= 16.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 14.9 && IMC <= 16.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 16.0 && IMC < 20.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.0 && IMC < 20.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.1 && IMC < 21.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.1 && IMC < 21.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.2 && IMC < 21.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.2 && IMC < 21.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.3 && IMC < 21.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.3 && IMC < 21.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.4 && IMC < 21.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.4 && IMC < 21.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.5 && IMC < 21.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.6 && IMC < 21.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 20.8 && IMC < 25.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 20.9 && IMC < 25.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 21.0 && IMC < 25.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 21.1 && IMC < 25.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 21.1 && IMC < 25.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 21.2 && IMC < 25.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 21.3 && IMC < 25.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 21.4 && IMC < 25.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 21.5 && IMC < 25.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 21.6 && IMC < 25.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 21.6 && IMC < 26.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 21.7 && IMC < 26.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 25.0 && IMC < 31.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 25.1 && IMC < 32.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 25.2 && IMC < 32.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 25.3 && IMC < 32.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 25.4 && IMC < 32.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 25.5 && IMC < 32.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 25.6 && IMC < 32.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 25.7 && IMC < 32.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 25.8 && IMC < 33.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 25.9 && IMC < 33.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 26.0 && IMC < 33.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 26.1 && IMC < 33.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 31.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 32.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 32.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 32.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 32.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 32.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 32.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 32.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 33.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 33.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 33.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 33.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 13 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 14.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 15.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 15.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 15.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 15.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 15.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 15.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 15.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 15.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 15.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 15.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 15.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 14.9 && IMC <= 16.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.0 && IMC <= 16.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.0 && IMC <= 16.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.1 && IMC <= 16.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.1 && IMC <= 16.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.2 && IMC <= 16.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.2 && IMC <= 16.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.2 && IMC <= 17.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.3 && IMC <= 17.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.3 && IMC <= 17.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.4 && IMC <= 17.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 15.4 && IMC <= 17.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 16.6 && IMC < 21.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.7 && IMC < 21.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.7 && IMC < 22.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.8 && IMC < 22.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.8 && IMC < 22.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.9 && IMC < 22.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.9 && IMC < 22.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 17.0 && IMC < 22.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 17.0 && IMC < 22.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 17.1 && IMC < 22.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 17.1 && IMC < 22.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 17.2 && IMC < 22.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 21.8 && IMC < 26.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 21.9 && IMC < 26.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 22.0 && IMC < 26.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 22.0 && IMC < 26.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 22.1 && IMC < 26.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 22.2 && IMC < 26.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 22.3 && IMC < 26.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 22.4 && IMC < 26.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 22.4 && IMC < 27.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 22.5 && IMC < 27.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 22.6 && IMC < 27.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 22.7 && IMC < 27.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 26.2 && IMC < 33.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 26.3 && IMC < 33.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 26.4 && IMC < 33.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 26.5 && IMC < 33.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 26.6 && IMC < 33.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 26.7 && IMC < 34.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 26.8 && IMC < 34.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 26.9 && IMC < 34.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 27.0 && IMC < 34.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 27.1 && IMC < 34.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 27.1 && IMC < 34.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 27.2 && IMC < 34.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 33.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 33.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 33.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 33.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 33.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 34.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 34.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 34.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 34.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 34.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 34.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 34.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 14 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 15.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 15.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 15.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 15.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 15.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 15.6 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 15.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 15.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 15.7 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 15.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 15.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 15.8 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 15.4 && IMC <= 17.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.5 && IMC <= 17.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.5 && IMC <= 17.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 15.6 && IMC <= 17.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 15.6 && IMC <= 17.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 15.6 && IMC <= 17.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 15.7 && IMC <= 17.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 15.7 && IMC <= 17.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 15.7 && IMC <= 17.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 15.8 && IMC <= 17.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 15.8 && IMC <= 17.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 15.8 && IMC <= 17.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 17.2 && IMC < 22.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 17.3 && IMC < 22.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 17.3 && IMC < 22.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 17.4 && IMC < 22.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 17.4 && IMC < 23.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 17.5 && IMC < 23.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 17.5 && IMC < 23.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 17.6 && IMC < 23.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 17.6 && IMC < 23.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 17.6 && IMC < 23.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 17.7 && IMC < 23.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 17.7 && IMC < 23.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 22.7 && IMC < 27.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 22.8 && IMC < 27.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 22.9 && IMC < 27.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 22.9 && IMC < 27.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 23.0 && IMC < 27.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 23.1 && IMC < 27.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 23.1 && IMC < 27.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 23.2 && IMC < 27.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 23.3 && IMC < 28.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 23.3 && IMC < 28.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 23.4 && IMC < 28.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 23.5 && IMC < 28.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 27.3 && IMC < 34.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 27.4 && IMC < 34.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 27.5 && IMC < 34.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 27.6 && IMC < 34.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 27.7 && IMC < 35.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 27.7 && IMC < 35.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 27.8 && IMC < 35.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 27.9 && IMC < 35.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 28.0 && IMC < 35.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 28.0 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 28.1 && IMC < 35.4 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 28.2 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 34.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 34.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 34.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 34.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 35.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 35.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 35.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 35.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 35.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 35.4 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 15 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 15.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 15.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 15.9 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 16.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 16.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 16.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 16.0 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 16.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 16.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 16.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 16.1 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 15.9 && IMC <= 17.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 15.9 && IMC <= 17.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 15.9 && IMC <= 17.8 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.0 && IMC <= 17.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.0 && IMC <= 17.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.0 && IMC <= 17.9 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.0 && IMC <= 18.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.1 && IMC <= 18.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.1 && IMC <= 18.0 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.1 && IMC <= 18.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.1 && IMC <= 18.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.2 && IMC <= 18.1 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 17.8 && IMC < 23.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 17.8 && IMC < 23.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 17.8 && IMC < 23.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 17.9 && IMC < 23.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 17.9 && IMC < 23.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 17.9 && IMC < 23.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 18.0 && IMC < 23.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 18.0 && IMC < 23.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 18.0 && IMC < 23.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 18.1 && IMC < 24.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 18.1 && IMC < 24.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 18.1 && IMC < 24.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 23.5 && IMC < 28.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 23.6 && IMC < 28.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 23.6 && IMC < 28.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 23.7 && IMC < 28.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 23.7 && IMC < 28.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 23.8 && IMC < 28.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 23.8 && IMC < 28.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 23.9 && IMC < 28.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 23.9 && IMC < 28.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.0 && IMC < 28.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.0 && IMC < 28.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.1 && IMC < 28.8 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 28.2 && IMC < 35.5 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 28.3 && IMC < 35.6 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 28.4 && IMC < 35.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 28.4 && IMC < 35.7 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 28.5 && IMC < 35.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 28.5 && IMC < 35.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 28.6 && IMC < 35.8 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 28.6 && IMC < 35.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 28.7 && IMC < 35.9 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 28.7 && IMC < 36.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 28.8 && IMC < 36.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 28.8 && IMC < 36.0 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 35.5 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 35.6 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 35.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 35.7 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 35.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 35.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 35.8 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 35.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 35.9 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 36.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 36.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 36.0 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 16 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 16.2 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 16.3 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 16.2 && IMC <= 18.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.2 && IMC <= 18.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.2 && IMC <= 18.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.2 && IMC <= 18.2 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.2 && IMC <= 18.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.3 && IMC <= 18.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.3 && IMC <= 18.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.3 && IMC <= 18.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.3 && IMC <= 18.3 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.3 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.3 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.3 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 18.2 && IMC < 24.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 18.2 && IMC < 24.1 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 18.2 && IMC < 24.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 18.2 && IMC < 24.2 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 18.3 && IMC < 24.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 18.3 && IMC < 24.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 18.3 && IMC < 24.3 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 18.3 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 18.3 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 18.4 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 18.4 && IMC < 24.4 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 18.4 && IMC < 24.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 24.1 && IMC < 28.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 24.1 && IMC < 28.9 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 24.2 && IMC < 29.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 24.2 && IMC < 29.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 24.3 && IMC < 29.0 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 24.3 && IMC < 29.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 24.3 && IMC < 29.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.4 && IMC < 29.1 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.4 && IMC < 29.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.4 && IMC < 29.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.4 && IMC < 29.2 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.5 && IMC < 29.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 28.9 && IMC < 36.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 28.9 && IMC < 36.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 29.0 && IMC < 36.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 29.0 && IMC < 36.1 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 29.0 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 29.1 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 29.1 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 29.1 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 29.2 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 29.2 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 29.2 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 29.3 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 36.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 36.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 36.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 36.1 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 17 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 16.4 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.4 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.4 && IMC <= 18.4 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.4 && IMC <= 18.5 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.4 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 18.4 && IMC < 24.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 18.4 && IMC < 24.5 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 18.4 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 18.5 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 18.5 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 18.5 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 18.5 && IMC < 24.6 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 18.5 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 18.5 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 18.5 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 18.5 && IMC < 24.7 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 18.6 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 24.5 && IMC < 29.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 24.5 && IMC < 29.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 24.6 && IMC < 29.3 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 24.6 && IMC < 29.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 24.6 && IMC < 29.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 24.6 && IMC < 29.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 24.6 && IMC < 29.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.7 && IMC < 29.4 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.7 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.7 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.7 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 24.8 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 29.3 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 29.3 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 29.3 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 29.4 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 29.4 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 29.4 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 29.4 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 29.4 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 29.5 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 29.5 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 29.5 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 29.5 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 18 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 16.4 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 1 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 2 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 3 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 4 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 5 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 6 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 7 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 8 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 9 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 10 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
            if( age.m === 11 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 16.4 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 16.5 && IMC <= 18.6 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 16.5 && IMC <= 18.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 16.5 && IMC <= 18.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 16.5 && IMC <= 18.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 18.6 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 1 && IMC > 18.6 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 2 && IMC > 18.6 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 3 && IMC > 18.6 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 4 && IMC > 18.6 && IMC < 24.8 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 5 && IMC > 18.6 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 6 && IMC > 18.6 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 7 && IMC > 18.6 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 8 && IMC > 18.6 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 9 && IMC > 18.7 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 10 && IMC > 18.7 && IMC < 24.9 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
            if( age.m === 11 && IMC > 18.7 && IMC < 25.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 24.8 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 24.8 && IMC < 29.5 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 24.8 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 24.8 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 24.8 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 24.9 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 24.9 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 24.9 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 24.9 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 24.9 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 24.9 && IMC < 29.6 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 25.0 && IMC < 29.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 29.5 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 29.5 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 29.6 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 29.6 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 29.6 && IMC < 36.3 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 29.6 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 29.6 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 29.6 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 29.6 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 29.6 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 29.6 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 29.7 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 1 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 2 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 3 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 4 && IMC >= 36.3 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 5 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 6 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 7 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 8 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 9 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 10 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
            if( age.m === 11 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }
        if ( age.y === 19 ){

            // *** Desnutricion ***
                
            if( age.m === 0 && IMC <= 16.5 ){
                result.msg = 'Desnutrición';
                result.ok = true;
            }
    
            // *** Desnutricion ***
    
            // *** Riesgo de desnutrir ***
    
            if( age.m === 0 && IMC > 16.5 && IMC <= 18.7 ){
                result.msg = 'Riesgo de Desnutrir';
                result.ok = true;
            }
    
            // *** Riesgo de desnutrir ***
    
            // *** Normal o Eutrófico ***
    
            if( age.m === 0 && IMC > 18.7 && IMC < 25.0 ){
                result.msg = 'Normal o Eutrófico';
                result.ok = true;
            }
    
            // *** Normal o Eutrófico ***
    
            // *** Sobrepeso ***
    
            if( age.m === 0 && IMC >= 25.0 && IMC < 29.7 ){
                result.msg = 'Sobrepeso';
                result.ok = true;
            }
    
            // *** Sobrepeso ***

            // *** Obesidad ***
    
            if( age.m === 0 && IMC >= 29.7 && IMC < 36.2 ){
                result.msg = 'Obesidad';
                result.ok = true;
            }
    
            // *** Obesidad ***
    
            // *** Obesidad Severa ***
    
            if( age.m === 0 && IMC >= 36.2 ){
                result.msg = 'Obesidad Severa';
                result.ok = true;
            }
    
            // *** Obesidad Severa ***
        }

    }
    
    if( gender === 'Femenino' ){
        console.log( 'edad: ', age, 'estatura: ', stature, 'peso: ', weight )
        console.log(result.ok)

        if ( age.y < 1 ){
            result.ageMsg = 'tengo menos de 1 año'
            
            // *** P/T para evaluar que no sea mayor a +1DE ***
            
            girlsPTfrom0to1();

            console.log(result.ok)
        
            if( result.ok === true ){
                console.log(result)
                return result;
            }
            
            // *** P/E luego de confirmar que no hay P/T mayor a +1DE

            girlsPEfrom0to5();

            console.log(result.ok)
            
            if( result.ok === true ){
                console.log(result)
                return result;
            }else{
                result.msg = 'Error'
                console.log(result)
                return result;
            }
            
    
            // *** Edad === 1 año y más ***
    
        }
        if ( age.y >= 1 && age.y <= 5 ){
            if( age.y < 5 ){

                console.log('tengo igual o más de 1 año y menos de 5 años')

                if( age.y < 2 ){

                    girlsPTfrom0to2();

                    console.log(result.ok)
                    
                    if( result.ok === true ){
                        console.log(result)
                        return result;
                    }else{
                        result.msg = 'Error'
                        console.log(result)
                        return result;
                    }
                }else{

                    girlsPTfrom2to5();

                    console.log(result.ok)
                    
                    if( result.ok === true ){
                        console.log(result)
                        return result;
                    }else{
                        result.msg = 'Error'
                        console.log(result)
                        return result;
                    }
                }
                
            }
            if( age.y === 5 && age.m === 0 ){
                console.log('tengo entre 5 años y 5 años 29 dias', age)

                girlsPTfrom2to5();

                console.log(result.ok)
                
                if( result.ok === true ){
                    console.log(result)
                    return result;
                }else{
                    result.msg = 'Error'
                    console.log(result)
                    return result;
                }

            }
            if( age.y === 5 && age.m >= 1){
                console.log('tengo más de 5 años 1 mes', age)

                girlsIMCEfrom5to19();

                console.log(result.ok)
                
                if( result.ok === true ){
                    console.log(result)
                    return result;
                }else{
                    result.msg = 'Error'
                    console.log(result)
                    return result;
                }
            }
        }
        if ( age.y > 5 && age.y < 19 ){
            console.log('tengo más de 5 años y menos de 19 años', age)

            girlsIMCEfrom5to19();

            console.log(result.ok)
            
            if( result.ok === true ){
                console.log(result)
                return result;
            }else{
                result.msg = 'Error'
                console.log(result)
                return result;
            }
        }
    }
    if( gender === 'Masculino'){
        console.log( 'edad: ', age, 'estatura: ', stature, 'peso: ', weight )
        console.log(result.ok)

        if ( age.y < 1 ){
            result.ageMsg = 'tengo menos de 1 año'
            
            // *** P/T para evaluar que no sea mayor a +1DE ***
            
            boysPTfrom0to1();

            console.log(result.ok)
        
            if( result.ok === true ){
                console.log(result)
                return result;
            }
            
            // *** P/E luego de confirmar que no hay P/T mayor a +1DE

            boysPEfrom0to5();

            console.log(result.ok)
            
            if( result.ok === true ){
                console.log(result)
                return result;
            }else{
                result.msg = 'Error'
                console.log(result)
                return result;
            }
            
    
            // *** Edad === 1 año y más ***
    
        }
        if ( age.y >= 1 && age.y <= 5 ){
            if( age.y < 5 ){

                console.log('tengo igual o más de 1 año y menos de 5 años')

                if( age.y < 2 ){

                    boysPTfrom0to2();

                    console.log(result.ok)
                    
                    if( result.ok === true ){
                        console.log(result)
                        return result;
                    }else{
                        result.msg = 'Error'
                        console.log(result)
                        return result;
                    }
                }else{

                    boysPTfrom2to5();

                    console.log(result.ok)
                    
                    if( result.ok === true ){
                        console.log(result)
                        return result;
                    }else{
                        result.msg = 'Error'
                        console.log(result)
                        return result;
                    }
                }
                
            }
            if( age.y === 5 && age.m === 0 ){
                console.log('tengo entre 5 años y 5 años 29 dias', age)

                boysPTfrom2to5();

                console.log(result.ok)
                
                if( result.ok === true ){
                    console.log(result)
                    return result;
                }else{
                    result.msg = 'Error'
                    console.log(result)
                    return result;
                }

            }
            if( age.y === 5 && age.m >= 1){
                console.log('tengo más de 5 años 1 mes', age)

                boysIMCEfrom5to19();

                console.log(result.ok)
                
                if( result.ok === true ){
                    console.log(result)
                    return result;
                }else{
                    result.msg = 'Error'
                    console.log(result)
                    return result;
                }
            }
        }
        if ( age.y > 5 && age.y < 19 ){
            console.log('tengo más de 5 años y menos de 19 años', age)

            boysIMCEfrom5to19();

            console.log(result.ok)
            
            if( result.ok === true ){
                console.log(result)
                return result;
            }else{
                result.msg = 'Error'
                console.log(result)
                return result;
            }
        }
    }
        

    return {
        result
    }
}
