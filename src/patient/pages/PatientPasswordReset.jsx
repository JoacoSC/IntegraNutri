import { useDispatch } from 'react-redux';
import { AuthLayout } from '../../auth/layout/AuthLayout';
import { useForm } from '../../hooks';
import { resetPassword, setNewPassword } from '../../store/auth';

export const PatientPasswordReset = () => {

    const dispatch = useDispatch();

    const { newPassword, onInputChange } = useForm();

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log('first: ', newPassword );
        dispatch( setNewPassword( newPassword ) );
    }

    return (
        <>
            <AuthLayout title="Cambiar contraseña" btnTitle="Volver" url="../patient">

                <form onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="password-reset-text">
                            A continuación, ingrese su nueva contraseña.
                        </div>
                        
                        <div className="form-item">
                            <label className="input-label">Contraseña</label>
                            <input className="input-text-style" type="text" name="newPassword" onChange={ onInputChange }/>
                        </div>
                        
                        <div className="form-btn">
                            <button className="btn-submit" type="submit">
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
