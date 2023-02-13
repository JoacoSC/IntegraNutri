import { fromUnixTime } from "date-fns";

export const useCalificationIndicator = ( weight, stature, unixBirthday ) => {

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
        age: 0,
        stature: 0,
        weight: 0
    }

    console.log( 'edad: ', age, 'estatura: ', stature, 'peso: ', weight )
    console.log(result.ok)
        
        if ( age.y < 1 ){
            result.ageMsg = 'tengo menos de 1 año'
            result.age = age
            if(age.m === 0){
                // *** EDAD 0 AÑOS 0 MESES ***
                result.ageMsg = 'tengo 0 años 0 meses'
                result.age = age
                // *** P/T para evaluar que no sea mayor a +1DE ***

                // *** Sobrepeso ***
                if( stature > 45.0 && weight >= 2.7 && weight < 3.0 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 45.5 && weight >= 2.8 && weight < 3.1 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 46.0 && weight >= 2.9 && weight < 3.2 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 46.5 && weight >= 3.0 && weight < 3.3 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 47.0 && weight >= 3.1 && weight < 3.4 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 47.5 && weight >= 3.2 && weight < 3.5 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 48.0 && weight >= 3.3 && weight < 3.6 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 48.5 && weight >= 3.4 && weight < 3.7 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 49.0 && weight >= 3.5 && weight < 3.8 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 49.5 && weight >= 3.6 && weight < 3.9 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 50.0 && weight >= 3.7 && weight < 4.0 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 50.5 && weight >= 3.8 && weight < 4.2 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 51.0 && weight >= 3.9 && weight < 4.3 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 51.5 && weight >= 4.0 && weight < 4.4 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 52.0 && weight >= 4.2 && weight < 4.6 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 52.5 && weight >= 4.3 && weight < 4.7 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 53.0 && weight >= 4.4 && weight < 4.9 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 53.5 && weight >= 4.6 && weight < 5.0 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 54.0 && weight >= 4.7 && weight < 5.2 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 54.5 && weight >= 4.8 && weight < 5.3 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 55.0 && weight >= 5.0 && weight < 5.5 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 55.5 && weight >= 5.1 && weight < 5.7 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 56.0 && weight >= 5.3 && weight < 5.8 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 56.5 && weight >= 5.4 && weight < 6.0 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 57.0 && weight >= 5.6 && weight < 6.1 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 57.5 && weight >= 5.7 && weight < 6.3 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 58.0 && weight >= 5.9 && weight < 6.5 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 58.5 && weight >= 6.0 && weight < 6.6 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 59.0 && weight >= 6.2 && weight < 6.8 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 59.5 && weight >= 6.3 && weight < 6.9 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 60.0 && weight >= 6.4 && weight < 7.1 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 60.5 && weight >= 6.6 && weight < 7.3 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 61.0 && weight >= 6.7 && weight < 7.4 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 61.5 && weight >= 6.9 && weight < 7.6 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 62.0 && weight >= 7.0 && weight < 7.7 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 62.5 && weight >= 7.1 && weight < 7.8 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 63.0 && weight >= 7.3 && weight < 8.0 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 63.5 && weight >= 7.4 && weight < 8.1 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 64.0 && weight >= 7.5 && weight < 8.3 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 64.5 && weight >= 7.6 && weight < 8.4 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 65.0 && weight >= 7.8 && weight < 8.6 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 65.5 && weight >= 7.9 && weight < 8.7 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 66.0 && weight >= 8.0 && weight < 8.8 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 66.5 && weight >= 8.1 && weight < 9.0 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 67.0 && weight >= 8.3 && weight < 9.1 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 67.5 && weight >= 8.4 && weight < 9.2 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 68.0 && weight >= 8.5 && weight < 9.4 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 68.5 && weight >= 8.6 && weight < 9.5 ){
                    result.msg = 'Sobrepeso';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }

                // *** Obesidad ***

                if( stature > 45.0 && weight >= 3.0 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 45.5 && weight >= 3.1 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 46.0 && weight >= 3.2 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 46.5 && weight >= 3.3 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 47.0 && weight >= 3.4 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 47.5 && weight >= 3.5 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 48.0 && weight >= 3.6 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 48.5 && weight >= 3.7 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 49.0 && weight >= 3.8 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 49.5 && weight >= 3.9 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 50.0 && weight >= 4.0 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 50.5 && weight >= 4.2 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 51.0 && weight >= 4.3 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 51.5 && weight >= 4.4 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 52.0 && weight >= 4.6 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 52.5 && weight >= 4.7 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 53.0 && weight >= 4.9 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 53.5 && weight >= 5.0 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 54.0 && weight >= 5.2 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 54.5 && weight >= 5.3 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 55.0 && weight >= 5.5 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 55.5 && weight >= 5.7 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 56.0 && weight >= 5.8 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 56.5 && weight >= 6.0 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 57.0 && weight >= 6.1 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 57.5 && weight >= 6.3 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 58.0 && weight >= 6.5 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 58.5 && weight >= 6.6 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 59.0 && weight >= 6.8 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 59.5 && weight >= 6.9 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 60.0 && weight >= 7.1 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 60.5 && weight >= 7.3 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 61.0 && weight >= 7.4 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 61.5 && weight >= 7.6 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 62.0 && weight >= 7.7 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 62.5 && weight >= 7.8 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 63.0 && weight >= 8.0 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 63.5 && weight >= 8.1 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 64.0 && weight >= 8.3 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 64.5 && weight >= 8.4 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 65.0 && weight >= 8.6 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 65.5 && weight >= 8.7 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 66.0 && weight >= 8.8 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 66.5 && weight >= 9.0 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 67.0 && weight >= 9.1 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 67.5 && weight >= 9.2 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 68.0 && weight >= 9.4 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
                    result.ok = true;
                }
                if( stature > 68.5 && weight >= 9.5 ){
                    result.msg = 'Obesidad';
                    result.age = age;
                    result.stature = stature;
                    result.weight = weight;
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

    return {
        result
    }
}
