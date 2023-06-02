import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../../auth/layout/AuthLayout';
import { useForm } from '../../hooks';
import { resetPassword, setNewPassword } from '../../store/auth';

export const PatientPasswordReset = () => {

    const dispatch = useDispatch();

    const { patientPasswordChangedSuccesfully, disableConfirmBtn, error, errorCode } = useSelector( state => state.loginHelper )

    const { actualPassword, newPassword, onInputChange } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log('newPassword: ', newPassword );
        console.log('actualPassword: ', actualPassword );

        dispatch( setNewPassword( actualPassword, newPassword ) )

        // dispatch( setNewPassword( newPassword ) );
    }

    return (
        <>
            <AuthLayout title="Cambiar contraseña" btnTitle="Volver" url="../patient">

                <form onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="password-reset-text">
                            A continuación, ingrese su contraseña actual, y luego su nueva contraseña.
                        </div>
                        
                        <div className="form-item">
                            <label className="input-label">Contraseña actual</label>
                            <input className="input-text-style" type="password" name="actualPassword" onChange={ onInputChange }/>
                        </div>

                        <div className="form-item">
                            <label className="input-label">Nueva contraseña</label>
                            <input className="input-text-style" type="password" name="newPassword" onChange={ onInputChange }/>
                        </div>

                        {
                            ( patientPasswordChangedSuccesfully )
                            ?   <div className="passwrod-change-successful-message">
                                    Contraseña actualizada correctamente
                                </div>
                            : null
                        }

                        {
                            ( error )
                            ? <div className="login-error-message">
                            {
                                (errorCode === 'auth/wrong-password')
                                ?   'Contraseña incorrecta'
                                :   (errorCode === 'auth/too-many-requests')
                                    ?   'Demasiados intentos fallidos, intente nuevamente más tarde'
                                    :   null
                            }
                            </div>
                            : null
                        }
                        
                        <div className="form-btn">
                            <button
                                className="btn-submit"
                                type="submit"
                                disabled={ disableConfirmBtn }
                            >
                                Confirmar
                            </button>
                        </div>
                        
                        {/* {
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
                        } */}
                    </div>
                </form>
            </AuthLayout>
            
        </>
    )
}
