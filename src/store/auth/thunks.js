import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { loginWithEmailPassword, logoutFirebase, registerPatientFromEmail, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import emailjs from "@emailjs/browser";

import { checkingCredentials, logout, login, isRegisteringPatient, registeredPatientUID, setIsNutritionistStatus } from "./";
import { loadUserInfo } from "../../helpers/loadUserInfo";
import { wipeUserInfo } from "../userInfo";

export const checkingAuthentication = ( email, password ) => {
    
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = ( isNutritionist ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const newUser = {
            rut: rawRut,
            displayName,
            unixBirthday,
            region,
            city,
            address,
            phone,
            gender,
            isNutritionist: true,
        }

        const result = await signInWithGoogle();
        const completeResult = { ...result, isNutritionist };
        
        if( !completeResult.ok ) return dispatch( logout( result ) );

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/userData` ) );

        await setDoc( newDoc, newUser );

        dispatch( login( result ) )
    }
}

export const startCreatingUserWithEmailPassword = ({ displayName, rawRut, unixBirthday, email, password, region, city, address, phone, gender }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
        const newUser = {
            rut: rawRut,
            displayName,
            unixBirthday,
            region,
            city,
            address,
            phone,
            gender,
            isNutritionist: true,
        }

        const { uid, ok, errorMessage } = await registerUserWithEmailPassword( displayName, email, password );

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/userData` ) );

        await setDoc( newDoc, newUser );

        dispatch( login({ uid, displayName }))

        
    }
}

export const startCreatingPatient = ({ displayName, rawRut, unixBirthday, email, password, region, city, address, phone, gender, nextConsultation }) => {
    return async( dispatch ) => {

        // dispatch( checkingCredentials() );
        dispatch( isRegisteringPatient( true ) );

        
        const newUser = {
            rut: rawRut,
            displayName,
            unixBirthday,
            email,
            password,
            region,
            city,
            address,
            phone,
            gender,
            isNutritionist: false,
            emailActivated: false,
            nextConsultation,
        }

        console.log(newUser)

        const uid = FirebaseAuth.currentUser.uid;

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/patients` ) );

        await setDoc( newDoc, newUser );

        const patientUID = newDoc._key.path.segments[3];
        
        dispatch( registeredPatientUID( patientUID ) );

        const templateParams = {
            displayName,
            email,
            password,
            uid,
            patientUID,

        }

        console.log( templateParams )

        emailjs.send('service_xueiflu', 'template_lf0jvcb', templateParams, '41EFlO3aJuRq71GVI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        dispatch( isRegisteringPatient( false ) );
        
    }
}

export const startCreatingPatientFromEmail = ( email, password, uid, patientUID ) => {
    return async( dispatch ) => {

        console.log( email, password )
        
        const { result_uid, ok, errorMessage, displayName, photoURL } = await registerPatientFromEmail( patientUID, email, password, uid );

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        console.log( `Usuario creado con exito: Authentication-UID:${ uid } - patientUID: ${ displayName } - NutriUID: ${ photoURL }` )

        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        // TODO: Aquí debo hacer un dispatch para cambiar el estado de emailActivated a TRUE en FireStore
        
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password })

        // if ( !result.ok ) return dispatch( logout( result ) );
        // dispatch( login( result ))
    }

}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout() );
        dispatch( wipeUserInfo() );

    }
}

export const redirectNutritionistOrPatient = ( uid ) => {
    return async( dispatch ) => {

        const collectionRef = collection( FirebaseDB, `users/${ uid }/userData` );
        const docs = await getDocs( collectionRef );

        let nutriBoolean = undefined;

        docs.forEach( doc => {
            nutriBoolean = doc.data().isNutritionist ;
        })

        // console.log(nutriBoolean)

        if (nutriBoolean === undefined || nutriBoolean === false){
            nutriBoolean = false;
            dispatch( setIsNutritionistStatus(nutriBoolean) )
            
        }else{
            dispatch( setIsNutritionistStatus(nutriBoolean) )
        }

    }
}

