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

    
    if( gender === 'Femenino' ){
        console.log( 'edad: ', age, 'estatura: ', stature, 'peso: ', weight )
        console.log(result.ok)

        if ( age.y < 1 ){
            result.ageMsg = 'tengo menos de 1 año'
            if(age.m === 0){
                // *** EDAD 0 AÑOS 0 MESES ***
                result.ageMsg = 'tengo 0 años 0 meses'
                // *** P/T para evaluar que no sea mayor a +1DE ***
    
                // *** Sobrepeso ***
                if( stature > 45.0 && weight >= 2.7 && weight < 3.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 45.5 && weight >= 2.8 && weight < 3.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 46.0 && weight >= 2.9 && weight < 3.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 46.5 && weight >= 3.0 && weight < 3.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 47.0 && weight >= 3.1 && weight < 3.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 47.5 && weight >= 3.2 && weight < 3.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 48.0 && weight >= 3.3 && weight < 3.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 48.5 && weight >= 3.4 && weight < 3.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 49.0 && weight >= 3.5 && weight < 3.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 49.5 && weight >= 3.6 && weight < 3.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 50.0 && weight >= 3.7 && weight < 4.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 50.5 && weight >= 3.8 && weight < 4.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 51.0 && weight >= 3.9 && weight < 4.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 51.5 && weight >= 4.0 && weight < 4.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 52.0 && weight >= 4.2 && weight < 4.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 52.5 && weight >= 4.3 && weight < 4.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 53.0 && weight >= 4.4 && weight < 4.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 53.5 && weight >= 4.6 && weight < 5.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 54.0 && weight >= 4.7 && weight < 5.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 54.5 && weight >= 4.8 && weight < 5.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 55.0 && weight >= 5.0 && weight < 5.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 55.5 && weight >= 5.1 && weight < 5.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 56.0 && weight >= 5.3 && weight < 5.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 56.5 && weight >= 5.4 && weight < 6.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 57.0 && weight >= 5.6 && weight < 6.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 57.5 && weight >= 5.7 && weight < 6.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 58.0 && weight >= 5.9 && weight < 6.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 58.5 && weight >= 6.0 && weight < 6.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 59.0 && weight >= 6.2 && weight < 6.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 59.5 && weight >= 6.3 && weight < 6.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 60.0 && weight >= 6.4 && weight < 7.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 60.5 && weight >= 6.6 && weight < 7.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 61.0 && weight >= 6.7 && weight < 7.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 61.5 && weight >= 6.9 && weight < 7.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 62.0 && weight >= 7.0 && weight < 7.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 62.5 && weight >= 7.1 && weight < 7.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 63.0 && weight >= 7.3 && weight < 8.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 63.5 && weight >= 7.4 && weight < 8.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 64.0 && weight >= 7.5 && weight < 8.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 64.5 && weight >= 7.6 && weight < 8.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 65.0 && weight >= 7.8 && weight < 8.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 65.5 && weight >= 7.9 && weight < 8.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 66.0 && weight >= 8.0 && weight < 8.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 66.5 && weight >= 8.1 && weight < 9.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 67.0 && weight >= 8.3 && weight < 9.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 67.5 && weight >= 8.4 && weight < 9.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 68.0 && weight >= 8.5 && weight < 9.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 68.5 && weight >= 8.6 && weight < 9.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 69.0 && weight >= 8.7 && weight < 9.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 69.5 && weight >= 8.8 && weight < 9.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 70.0 && weight >= 9.0 && weight < 9.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 70.5 && weight >= 9.1 && weight < 10.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 71.0 && weight >= 9.2 && weight < 10.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 71.5 && weight >= 9.3 && weight < 10.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 72.0 && weight >= 9.4 && weight < 10.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 72.5 && weight >= 9.5 && weight < 10.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 73.0 && weight >= 9.6 && weight < 10.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 73.5 && weight >= 9.7 && weight < 10.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 74.0 && weight >= 9.8 && weight < 10.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 74.5 && weight >= 9.9 && weight < 10.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 75.0 && weight >= 10.0 && weight < 11.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 75.5 && weight >= 10.1 && weight < 11.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 76.0 && weight >= 10.2 && weight < 11.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 76.5 && weight >= 10.3 && weight < 11.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 77.0 && weight >= 10.4 && weight < 11.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 77.5 && weight >= 10.5 && weight < 11.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 78.0 && weight >= 10.6 && weight < 11.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 78.5 && weight >= 10.7 && weight < 11.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 79.0 && weight >= 10.8 && weight < 11.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 79.5 && weight >= 10.9 && weight < 12.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 80.0 && weight >= 11.0 && weight < 12.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 80.5 && weight >= 11.2 && weight < 12.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 81.0 && weight >= 11.3 && weight < 12.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 81.5 && weight >= 11.4 && weight < 12.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 82.0 && weight >= 11.5 && weight < 12.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 82.5 && weight >= 11.6 && weight < 12.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 83.0 && weight >= 11.8 && weight < 12.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 83.5 && weight >= 11.9 && weight < 13.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 84.0 && weight >= 12.0 && weight < 13.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 84.5 && weight >= 12.1 && weight < 13.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 85.0 && weight >= 12.3 && weight < 13.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 85.5 && weight >= 12.4 && weight < 13.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 86.0 && weight >= 12.6 && weight < 13.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 86.5 && weight >= 12.7 && weight < 13.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 87.0 && weight >= 12.8 && weight < 14.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 87.5 && weight >= 13.0 && weight < 14.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 88.0 && weight >= 13.1 && weight < 14.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 88.5 && weight >= 13.2 && weight < 14.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 89.0 && weight >= 13.4 && weight < 14.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 89.5 && weight >= 13.5 && weight < 14.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 90.0 && weight >= 13.7 && weight < 15.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 90.5 && weight >= 13.8 && weight < 15.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 91.0 && weight >= 13.9 && weight < 15.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 91.5 && weight >= 14.1 && weight < 15.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 92.0 && weight >= 14.2 && weight < 15.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 92.5 && weight >= 14.3 && weight < 15.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 93.0 && weight >= 14.5 && weight < 15.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 93.5 && weight >= 14.6 && weight < 16.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 94.0 && weight >= 14.7 && weight < 16.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 94.5 && weight >= 14.9 && weight < 16.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 95.0 && weight >= 15.0 && weight < 16.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 95.5 && weight >= 15.2 && weight < 16.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 96.0 && weight >= 15.3 && weight < 16.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 96.5 && weight >= 15.4 && weight < 17.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 97.0 && weight >= 15.6 && weight < 17.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 97.5 && weight >= 15.7 && weight < 17.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 98.0 && weight >= 15.9 && weight < 17.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 98.5 && weight >= 16.0 && weight < 17.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 99.0 && weight >= 16.2 && weight < 17.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 99.5 && weight >= 16.3 && weight < 18.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 100.0 && weight >= 16.5 && weight < 18.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 100.5 && weight >= 16.6 && weight < 18.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 101.0 && weight >= 16.8 && weight < 18.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 101.5 && weight >= 17.0 && weight < 18.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 102.0 && weight >= 17.1 && weight < 18.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 102.5 && weight >= 17.3 && weight < 19.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 103.0 && weight >= 17.5 && weight < 19.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 103.5 && weight >= 17.6 && weight < 19.4 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 104.0 && weight >= 17.8 && weight < 19.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 104.5 && weight >= 18.0 && weight < 19.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 105.0 && weight >= 18.2 && weight < 20.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 105.5 && weight >= 18.4 && weight < 20.2 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 106.0 && weight >= 18.5 && weight < 20.5 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 106.5 && weight >= 18.7 && weight < 20.7 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 107.0 && weight >= 18.9 && weight < 20.9 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 107.5 && weight >= 19.1 && weight < 21.1 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 108.0 && weight >= 19.3 && weight < 21.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 108.5 && weight >= 19.5 && weight < 21.6 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 109.0 && weight >= 19.7 && weight < 21.8 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 109.5 && weight >= 20.0 && weight < 22.0 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
                if( stature > 110.0 && weight >= 20.2 && weight < 22.3 ){
                    result.msg = 'Sobrepeso';
                    result.ok = true;
                }
    
                // *** Obesidad ***

                if( stature > 45.0 && weight >= 3.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 45.5 && weight >= 3.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 46.0 && weight >= 3.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 46.5 && weight >= 3.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 47.0 && weight >= 3.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 47.5 && weight >= 3.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 48.0 && weight >= 3.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 48.5 && weight >= 3.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 49.0 && weight >= 3.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 49.5 && weight >= 3.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 50.0 && weight >= 4.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 50.5 && weight >= 4.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 51.0 && weight >= 4.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 51.5 && weight >= 4.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 52.0 && weight >= 4.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 52.5 && weight >= 4.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 53.0 && weight >= 4.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 53.5 && weight >= 5.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 54.0 && weight >= 5.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 54.5 && weight >= 5.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 55.0 && weight >= 5.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 55.5 && weight >= 5.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 56.0 && weight >= 5.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 56.5 && weight >= 6.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 57.0 && weight >= 6.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 57.5 && weight >= 6.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 58.0 && weight >= 6.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 58.5 && weight >= 6.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 59.0 && weight >= 6.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 59.5 && weight >= 6.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 60.0 && weight >= 7.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 60.5 && weight >= 7.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 61.0 && weight >= 7.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 61.5 && weight >= 7.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 62.0 && weight >= 7.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 62.5 && weight >= 7.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 63.0 && weight >= 8.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 63.5 && weight >= 8.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 64.0 && weight >= 8.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 64.5 && weight >= 8.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 65.0 && weight >= 8.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 65.5 && weight >= 8.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 66.0 && weight >= 8.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 66.5 && weight >= 9.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 67.0 && weight >= 9.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 67.5 && weight >= 9.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 68.0 && weight >= 9.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 68.5 && weight >= 9.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 69.0 && weight >= 9.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 69.5 && weight >= 9.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 70.0 && weight >= 9.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 70.5 && weight >= 10.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 71.0 && weight >= 10.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 71.5 && weight >= 10.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 72.0 && weight >= 10.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 72.5 && weight >= 10.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 73.0 && weight >= 10.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 73.5 && weight >= 10.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 74.0 && weight >= 10.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 74.5 && weight >= 10.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 75.0 && weight >= 11.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 75.5 && weight >= 11.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 76.0 && weight >= 11.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 76.5 && weight >= 11.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 77.0 && weight >= 11.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 77.5 && weight >= 11.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 78.0 && weight >= 11.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 78.5 && weight >= 11.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 79.0 && weight >= 11.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 79.5 && weight >= 12.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 80.0 && weight >= 12.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 80.5 && weight >= 12.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 81.0 && weight >= 12.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 81.5 && weight >= 12.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 82.0 && weight >= 12.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 82.5 && weight >= 12.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 83.0 && weight >= 12.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 83.5 && weight >= 13.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 84.0 && weight >= 13.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 84.5 && weight >= 13.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 85.0 && weight >= 13.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 85.5 && weight >= 13.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 86.0 && weight >= 13.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 86.5 && weight >= 13.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 87.0 && weight >= 14.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 87.5 && weight >= 14.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 88.0 && weight >= 14.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 88.5 && weight >= 14.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 89.0 && weight >= 14.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 89.5 && weight >= 14.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 90.0 && weight >= 15.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 90.5 && weight >= 15.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 91.0 && weight >= 15.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 91.5 && weight >= 15.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 92.0 && weight >= 15.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 92.5 && weight >= 15.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 93.0 && weight >= 15.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 93.5 && weight >= 16.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 94.0 && weight >= 16.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 94.5 && weight >= 16.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 95.0 && weight >= 16.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 95.5 && weight >= 16.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 96.0 && weight >= 16.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 96.5 && weight >= 17.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 97.0 && weight >= 17.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 97.5 && weight >= 17.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 98.0 && weight >= 17.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 98.5 && weight >= 17.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 99.0 && weight >= 17.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 99.5 && weight >= 18.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 100.0 && weight >= 18.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 100.5 && weight >= 18.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 101.0 && weight >= 18.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 101.5 && weight >= 18.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 102.0 && weight >= 18.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 102.5 && weight >= 19.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 103.0 && weight >= 19.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 103.5 && weight >= 19.4 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 104.0 && weight >= 19.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 104.5 && weight >= 19.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 105.0 && weight >= 20.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 105.5 && weight >= 20.2 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 106.0 && weight >= 20.5 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 106.5 && weight >= 20.7 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 107.0 && weight >= 20.9 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 107.5 && weight >= 21.1 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 108.0 && weight >= 21.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 108.5 && weight >= 21.6 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 109.0 && weight >= 21.8 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 109.5 && weight >= 22.0 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
                if( stature > 110.0 && weight >= 22.3 ){
                    result.msg = 'Obesidad';
                    result.ok = true;
                }
    
                console.log(result.ok)
                
                if( result.ok === true ){
                    console.log(result)
                    return result;
                }
                
                // *** P/E luego de confirmar que no hay P/T mayor a +1DE
    
                if( weight <= 2.4 ){
                    console.log('Desnutrición: ', age, weight)
                }
                if( weight > 2.4 && weight <= 2.8 ){
                    console.log('Riesgo de desnutrir: ', age, weight)
                }
                if( weight > 2.8 && weight < 3.7 ){
                    console.log('Normal o Eutrófico: ', age, weight)
                }
            }
    
            // *** Edad === 1 año y más ***
    
        }
        if ( age.y >= 1 && age.y <= 5 ){
            if( age.y < 5 ){
                console.log('tengo más de 1 años y menos de 5 años', age)
            }
            if( age.y === 5 && age.m < 1 ){
                console.log('tengo entre 1 año y 5 años 29 dias', age)
            }
            if( age.y === 5 && age.m >= 1){
                console.log('tengo más de 5 años 1 mes', age)
            }
        }
        if ( age.y > 5 && age.y < 19 ){
            console.log('tengo más de 5 años y menos de 19 años', age)
        }
    }
        

    return {
        result
    }
}
