import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks'
import { checkingAuthentication } from '../../store/auth';

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {

    const [isChecked, setIsChecked] = useState( true );

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm();


    // const isChecked = true;

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ email, password, isChecked });
        dispatch( checkingAuthentication() ) ;
    }

    const onCheckBox = () => {
        setIsChecked(isChecked => !isChecked);
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
                        <button className="btn-submit" type="submit">
                            Iniciar Sesión
                        </button>
                    </div>
                    <div className="form-btn">
                        <button className="btn-google-login">
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
