import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks'
import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth';

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {

    const { status } = useSelector( state => state.auth )

    const [isNutritionist, setIsNutritionist] = useState( true );

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm();

    const isAuthenticating = useMemo( () => status === 'checking', [ status ]);

    // const isNutritionist = true;

    const onCheckBox = () => {
        setIsNutritionist(isNutritionist => !isNutritionist);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        // console.log({ email, password, isNutritionist });
        dispatch( startLoginWithEmailPassword({ email, password }) ) ;
    }

    const onGoogleSingIn = () => {
        dispatch( startGoogleSingIn( isNutritionist ) );
    }

  return (
    <>
        <AuthLayout title="Login" btnTitle="Registrarse" url="/auth/register">
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
                        <input className="input-text-style" type="email" name="email" onChange={ onInputChange }/>
                    </div>
                    <div className="form-item">
                        <label className="input-label">Contraseña</label>
                        <input className="input-text-style" type="password" name="password" onChange={ onInputChange }/>
                    </div>
                    <div className="form-btn">
                        <button
                            className="btn-submit"
                            type="submit"
                            disabled={ isAuthenticating }
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                    <div className="form-btn">
                        <button
                            className="btn-google-login"
                            onClick={ onGoogleSingIn }
                            disabled={ isAuthenticating }
                        >
                            <img className="btn-google-login-img" src="../../../assets/imgs/auth/google_logo.svg" alt="Logo de Google" />
                            Ingresar con Gmail
                        </button>
                    </div>
                </div>
            </form>

        </AuthLayout>  
    </>
  )
}
