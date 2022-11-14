import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./";

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