import { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

import { AuthLayout } from '../layout/AuthLayout';
import { unsetJournal } from '../../store/journal';
import { switchIsNutritionistSelector } from '../../store/loginHelper';
import passwordVisible from "../../../assets/imgs/auth/show_password.svg"
import passwordHidden from "../../../assets/imgs/auth/hide_password.svg"

export const LoginPage = () => {

    const { status } = useSelector( state => state.auth )

    const [isNutritionist, setIsNutritionist] = useState( true );
    const [error, setError] = useState(false);
    const [errorCode, setErrorCode] = useState('')
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [passwordInputType, setPasswordInputType] = useState('password')

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm();

    const isAuthenticating = useMemo( () => status === 'checking', [ status ]);

    // const isNutritionist = true;

    const onCheckBox = () => {
        setIsNutritionist(isNutritionist => !isNutritionist);
        dispatch( switchIsNutritionistSelector(!isNutritionist) );
    }

    const onSubmit = async ( event ) => {
        event.preventDefault();

        // console.log({ email, password });
        const result = await dispatch( startLoginWithEmailPassword({ email, password, isNutritionist }) ) ;
        
        if( result?.ok === false ){
            // console.log('Codigo de error: ', result.errorCode);
            setErrorCode(result.errorCode)
            setError(true);
        }
    }

    const switchPasswordVisibility = () => {
        setPasswordIsVisible( !passwordIsVisible )
        if(passwordIsVisible){
            setPasswordInputType('password')
        }else{
            setPasswordInputType('text')
        }
    }

    const onGoogleSingIn = () => {
        dispatch( startGoogleSignIn( isNutritionist ) );
    }

  return (
    <>
        <AuthLayout title="Iniciar Sesión" btnTitle="Registrarse" url="/auth/register">
            <form onSubmit={ onSubmit }>
                <div className="container-form">

                    <div className="form-switch-item">
                        <div className="form-switch-item-icon"></div>
                        <div className="switch-container">

                            <input type="checkbox" id="switch" name="user_type" onChange={ onInputChange } onClick={ onCheckBox } />
                            <div className="switch-color"></div>
                            <label htmlFor="switch">
                                <div className="label-icon"></div>
                                <i className="switch-off"></i>
                                <i className="switch-on"></i>
                            </label>
                            


                        </div>
                    </div>
                    <div className="form-item">
                        <label className="input-label">Email</label>
                        <input className="input-text-style" type="email" name="email" onChange={ onInputChange } required/>
                    </div>
                    <div className="form-item">
                        <label className="input-label">Contraseña</label>
                        <div className='input-password-container'>
                            <input className="input-password-style" type={ passwordInputType } name="password" onChange={ onInputChange } required/>
                            <div className='input-password-visibility-style' onClick={ switchPasswordVisibility }>
                                {
                                    (passwordIsVisible)
                                    ?   <img src={ passwordHidden }/>
                                    :   <img src={ passwordVisible }/>
                                }
                            </div>

                        </div>
                    </div>
                    {
                        ( error )
                        ? <div className="login-error-message">
                        {
                            (errorCode === 'auth/wrong-password')
                            ?   'Contraseña incorrecta'
                            :   (errorCode === 'auth/too-many-requests')
                                ?   'Demasiados intentos fallidos, intente nuevamente más tarde'
                                :   (errorCode === 'auth/user-not-found')
                                ?   'Usuario no encontrado, por favor registrese o active su cuenta a través del link enviado a su correo'
                                :   null
                        }
                        </div>
                        : null
                    }
                    <div className="form-btn">
                        <button
                            className="btn-submit"
                            type="submit"
                            disabled={ isAuthenticating }
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                    <Link to="/auth/passwordReset" className="link-no-decoration">
                        <div className="form-link">
                                Olvidé mi contraseña
                        </div>
                    </Link>
                    {/* <div className="form-btn">
                        <button
                            className="btn-google-login"
                            onClick={ onGoogleSignIn }
                            disabled={ isAuthenticating }
                        >
                            <img className="btn-google-login-img" src="../../../assets/imgs/auth/google_logo.svg" alt="Logo de Google" />
                            Ingresar con Gmail
                        </button>
                    </div> */}
                </div>
            </form>

        </AuthLayout>  
    </>
  )
}
