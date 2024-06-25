export const useRatingIndicatorAdult = ( weight, stature, ageForCalcs, unixBirthdayForCalcs, biologicalSex ) => {
    
    const age = ageForCalcs;

    // console.log('useRatingIndicator age: ', age);

    const result = {
        ok: {
            statureRating: false,
            weightRating: false,
        },
        ageMsg: 'first',
        statureRatingResult: 'first',
        weightRatingResult: 'first',
        age: age,
        stature: stature,
        weight: weight,
        imc: null,
        imcRatingResult: 'first',
        isAdult: true,
    }

    const adultIMCRanking = (imc) => {
        if (imc <= 18.49) {
            return 'Bajo peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            return 'Normal/eutrófico';
        } else if (imc >= 25 && imc <= 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            return 'Obesidad Grado I';
        } else if (imc >= 35 && imc <= 39.9) {
            return 'Obesidad Grado II';
        } else if (imc >= 40 ){
            return 'Obesidad Grado III';
        } else {
            return 'No hay datos'
        }
    }

    // Función para clasificar el IMC de adultos mayores
    function elderlyIMCRanking(imc) {
        if (imc <= 22.9) {
            return 'Bajo peso';
        } else if (imc >= 23 && imc <= 27.9) {
            return 'Normal/eutrófico';
        } else if (imc >= 28 && imc <= 31.9) {
            return 'Sobrepeso';
        } else if (imc >= 32 ){
            return 'Obesidad Grado 1';
        } else {
            return 'No hay datos'
        }
    }
    
    if( age.y === 19 && age.m > 1 || age.y > 19 && age.y < 65 ){

        const IMC = weight / (stature/100)**2

        result.imc = parseFloat(IMC.toFixed(1));
        result.imcRatingResult = adultIMCRanking(result.imc);
        result.weightRatingResult = result.imcRatingResult;

        return result
    }

    if( age.y >= 65 ){

        const IMC = weight / (stature/100)**2

        // console.log(IMC)

        result.imc = parseFloat(IMC.toFixed(1));
        result.imcRatingResult = elderlyIMCRanking(result.imc);
        result.weightRatingResult = result.imcRatingResult;

        return result
    }
        

    return {
        result
    }
}