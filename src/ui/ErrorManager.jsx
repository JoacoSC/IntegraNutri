import { useEffect, useState } from "react"

export const ErrorManager = ({ errorCode }) => {

    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if(errorCode === 'invalid-rut'){
            setErrorMsg('El RUT ingresado no es un RUT válido')
        }
        if(errorCode === 'password-dont-match'){
            setErrorMsg('Las contraseñas ingresadas no son iguales')
        }
        if(errorCode === 'auth/too-many-requests'){
            setErrorMsg('Demasiados intentos fallidos, intente nuevamente más tarde')
        }
        if(errorCode === 'auth/user-not-found'){
            setErrorMsg('Usuario no encontrado, por favor registrese o active su cuenta a través del link enviado a su correo')
        }
        if(errorCode === 'auth/email-already-in-use'){
            setErrorMsg('Este email ya tiene una cuenta en IntegraNutri, utilice otra dirección de correo o solicite ayuda en: integranutricion.cl@gmail.com')
        }
    }, [errorCode])

    return (
        <div className="login-error-message">
        { errorMsg }
        
        </div>
    )
}
