import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseAuth, FirebaseDB } from "../../firebase/config";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login, isRegisteringPatient } from "./";

export const checkingAuthentication = ( email, password ) => {
    
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn = ( isNutritionist ) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        const completeResult = { ...result, isNutritionist };
        
        if( !completeResult.ok ) return dispatch( logout( result ) );

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
        }

        const { uid, ok, errorMessage } = await registerUserWithEmailPassword( displayName, email, password );

        if ( !ok ) return dispatch( logout({ errorMessage }) );

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/userData` ) );

        await setDoc( newDoc, newUser );

        dispatch( login({ uid, displayName }))

        
    }
}

export const startCreatingPatient = ({ displayName, rawRut, unixBirthday, email, password, region, city, address, phone, gender }) => {
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
        }

        const uid = FirebaseAuth.currentUser.uid;

        const newDoc = doc( collection( FirebaseDB, `users/${ uid }/patients` ) );

        await setDoc( newDoc, newUser );

        dispatch( isRegisteringPatient( false ) );
        
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password })

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ))
    }

}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout() );
    }
}