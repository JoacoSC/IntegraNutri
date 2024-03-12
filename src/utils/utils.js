// utils.js
import { fromUnixTime } from 'date-fns';

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

export const calculateAgeForCalcsObject = ( age, biologicalAge, correctedAge, unixBirthday, unixBiologicalBirthday, unixCorrectedBirthday, biologicalAgeIsSet, correctedAgeIsSet ) => {
    
    let utilsAgeForCalcs = {
        d: 0,
        m: 0,
        y: 0
    }
    let utilsUnixBirthdayForCalcs = 0;

    let utilsAgeText = '';

    if( biologicalAgeIsSet){
        // console.log('correctedAge: ', correctedAge)

        if(biologicalAge.d > 15){
            if(biologicalAge.m == 11){
                
                utilsAgeForCalcs = {
                    d: 0,
                    m: 0,
                    y: biologicalAge.y + 1,
                }
            }else{

                // console.log('biologicalAge.m: ', biologicalAge.m)
                // console.log('biologicalAge.m + 1: ', biologicalAge.m + 1)

                utilsAgeForCalcs = {
                    d: 0,
                    m: biologicalAge.m + 1,
                    y: biologicalAge.y,
                }
                // console.log('corrected_ageForCalcs11: ', utilsAgeForCalcs)
            }
        }else{
            utilsAgeForCalcs = {
                d: 0,
                m: biologicalAge.m,
                y: biologicalAge.y,
            }
        }
        utilsUnixBirthdayForCalcs = unixBiologicalBirthday;
        utilsAgeText = generateAgeText( unixBiologicalBirthday );
        
        
    }else if( correctedAgeIsSet ) {

        if(correctedAge.d > 15){
            if(correctedAge.m == 11){
                
                utilsAgeForCalcs = {
                    d: 0,
                    m: 0,
                    y: correctedAge.y + 1,
                }
            }else{

                // console.log('correctedAge.m: ', correctedAge.m)
                // console.log('correctedAge.m + 1: ', correctedAge.m + 1)

                utilsAgeForCalcs = {
                    d: 0,
                    m: correctedAge.m + 1,
                    y: correctedAge.y,
                }
                // console.log('corrected_ageForCalcs11: ', utilsAgeForCalcs)
            }
        }else{
            utilsAgeForCalcs = {
                d: 0,
                m: correctedAge.m,
                y: correctedAge.y,
            }
        }
        utilsUnixBirthdayForCalcs = unixCorrectedBirthday;
        utilsAgeText = generateAgeText( unixCorrectedBirthday );
        
        // console.log('corrected_ageForCalcs: ', utilsAgeForCalcs)

    }else{

        if(age.d > 15){
            if(age.m == 11){
                
                utilsAgeForCalcs = {
                    d: 0,
                    m: 0,
                    y: age.y + 1,
                }
            }else{

                utilsAgeForCalcs = {
                    d: 0,
                    m: age.m + 1,
                    y: age.y,
                }
            }
        }else{
            utilsAgeForCalcs = {
                d: 0,
                m: age.m,
                y: age.y,
            }
        }
        utilsUnixBirthdayForCalcs = unixBirthday;
        utilsAgeText = generateAgeText( unixBirthday ) ;
        
    }

    return {
        utilsAgeForCalcs,
        utilsUnixBirthdayForCalcs,
        utilsAgeText,
    }
    
    // console.log('utilsAgeForCalcs: ', utilsAgeForCalcs)
};
 

export const calculateAgeObject = (unixValue) => {
    let d1 = fromUnixTime(unixValue).getDate();
    let m1 = fromUnixTime(unixValue).getMonth();
    let y1 = fromUnixTime(unixValue).getFullYear();
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

    return { y, m, d };
};
