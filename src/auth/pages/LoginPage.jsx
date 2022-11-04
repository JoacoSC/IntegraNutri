import { useState } from 'react';
import { useForm } from '../../hooks'

import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm();

    const [isChecked, setIsChecked] = useState( true );

    // const isChecked = true;

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ email, password, isChecked });
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
                </div>
            </form>

        </AuthLayout>  
    </>
  )
}
