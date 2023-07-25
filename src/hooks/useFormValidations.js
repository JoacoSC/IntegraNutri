import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setErrorCode, switchError } from "../store/loginHelper";

export const useFormValidations = ({ password, confirm_password }) => {
    
    const dispatch = useDispatch();

    const validations = {
        isPasswordValid: null,
    }

    if ( password !== confirm_password ){

        dispatch( setErrorCode( 'password-dont-match' ) );
        dispatch( switchError( true ) );
        validations.isPasswordValid = false;
    }
    if ( password === confirm_password ){

        dispatch( setErrorCode( null ) );
        dispatch( switchError( false ) );
        validations.isPasswordValid = true;
    }
    // NO SE POR QUE PERO SI PONGO ESTO LA APLICACION NO PARA DE RE-RENDERIZARSE

    // if ( rutValidation !== true ){
    //     dispatch( setErrorCode( 'invalid-rut' ) );
    //     dispatch( switchError( true ) );
    // }

    const result = {
        isFormValid: Object.values(validations).every(item => item),
        ...validations
    }

    return result;
}