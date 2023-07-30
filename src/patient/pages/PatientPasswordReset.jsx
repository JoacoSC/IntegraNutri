import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from '../../auth/layout/AuthLayout';
import { useForm, useFormValidations } from '../../hooks';
import { resetPassword, setNewPassword } from '../../store/auth';

import passwordVisible from "../../../assets/imgs/auth/show_password.svg"
import passwordHidden from "../../../assets/imgs/auth/hide_password.svg"
import { ErrorManager } from '../../ui';

export const PatientPasswordReset = () => {

    const dispatch = useDispatch();

    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] = useState(false)
    const [newPasswordIsVisible, setNewPasswordIsVisible] = useState(false)
    const [passwordInputType, setPasswordInputType] = useState('password')
    const [confirmPasswordInputType, setConfirmPasswordInputType] = useState('password')
    const [newPasswordInputType, setNewPasswordInputType] = useState('password')

    const { patientPasswordChangedSuccesfully, disableConfirmBtn, error, errorCode } = useSelector( state => state.loginHelper )

    const { password, confirm_password, newPassword, onInputChange } = useForm();

    const { isFormValid, isPasswordValid } = useFormValidations({ password, confirm_password });

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log('newPassword: ', newPassword );
        console.log('password: ', password );
        console.log('confirm_password: ', confirm_password );
        console.log('isFormValid: ', isFormValid)

        if ( isFormValid === true ){
            console.log('isFormValid222: ', isFormValid)
            dispatch( setNewPassword( password, newPassword ) )
            
        }

        // dispatch( setNewPassword( newPassword ) );
    }

    const switchPasswordVisibility = () => {
        setPasswordIsVisible( !passwordIsVisible )
        if(passwordIsVisible){
            setPasswordInputType('password')
        }else{
            setPasswordInputType('text')
        }
    }

    const switchConfirmPasswordVisibility = () => {
        setConfirmPasswordIsVisible( !confirmPasswordIsVisible )
        if(confirmPasswordIsVisible){
            setConfirmPasswordInputType('password')
        }else{
            setConfirmPasswordInputType('text')
        }
    }

    const switchNewPasswordVisibility = () => {
        setNewPasswordIsVisible( !newPasswordIsVisible )
        if(newPasswordIsVisible){
            setNewPasswordInputType('password')
        }else{
            setNewPasswordInputType('text')
        }
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
                            <div className='input-label-container'>
                                <label className="input-label">Contraseña actual</label>
                                <label className="input-label-required">*</label>
                            </div>
                            <div className='input-password-container'>
                                <input className="input-password-style" type={ passwordInputType } name="password" minLength="6" onChange={ onInputChange } required/>
                                <div className='input-password-visibility-style' onClick={ switchPasswordVisibility }>
                                    {
                                        (passwordIsVisible)
                                        ?   <img src={ passwordHidden }/>
                                        :   <img src={ passwordVisible }/>
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Confirmar contraseña</label>
                                <label className="input-label-required">*</label>
                            </div>
                            <div className='input-password-container'>
                                <input className="input-password-style" type={ confirmPasswordInputType } name="confirm_password" minLength="6" onChange={ onInputChange } required/>
                                <div className='input-password-visibility-style' onClick={ switchConfirmPasswordVisibility }>
                                    {
                                        (confirmPasswordIsVisible)
                                        ?   <img src={ passwordHidden }/>
                                        :   <img src={ passwordVisible }/>
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Nueva contraseña</label>
                                <label className="input-label-required">*</label>
                            </div>
                            <div className='input-password-container'>
                                <input className="input-password-style" type={ newPasswordInputType } name="newPassword" minLength="6" onChange={ onInputChange } required/>
                                <div className='input-password-visibility-style' onClick={ switchNewPasswordVisibility }>
                                    {
                                        (newPasswordIsVisible)
                                        ?   <img src={ passwordHidden }/>
                                        :   <img src={ passwordVisible }/>
                                    }
                                </div>

                            </div>
                        </div>

                        {
                            ( patientPasswordChangedSuccesfully )
                            ?   <div className="password-change-successful-message">
                                    Contraseña actualizada correctamente
                                </div>
                            : null
                        }

                        {
                            ( error )
                            ?   <ErrorManager errorCode= { errorCode }/>
                            :   null
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
