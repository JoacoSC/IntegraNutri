import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRut } from 'react-rut-formatter';
import { addDays, fromUnixTime, getUnixTime, set } from 'date-fns'

import { useForm, useFormValidations } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

import { AuthLayout } from '../layout/AuthLayout';
import { regiones } from '../../helpers';
import { ComunasSelect, ErrorManager } from '../../ui';

import passwordVisible from "../../../assets/imgs/auth/show_password.svg"
import passwordHidden from "../../../assets/imgs/auth/hide_password.svg"
import { setErrorCode, switchError } from '../../store/loginHelper';

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [regionSeleccionada, setRegionSeleccionada] = useState('');
    const [comunaSeleccionada, setComunaSeleccionada] = useState('');
    const [comunas, setComunas] = useState([]);
    const [rutValidation, setRutValidation] = useState(true)
    const [passwordIsVisible, setPasswordIsVisible] = useState(false)
    const [confirmPasswordIsVisible, setConfirmPasswordIsVisible] = useState(false)
    const [passwordInputType, setPasswordInputType] = useState('password')
    const [confirmPasswordInputType, setConfirmPasswordInputType] = useState('password')
    // const [error, setError] = useState(null);
    // const [errorCode, setErrorCode] = useState('')

    const { disableConfirmBtn, error, errorCode } = useSelector( state => state.loginHelper );

    const { name, fatherName, motherName, birthday, email, password, confirm_password, region, city, address = '', phone = '', biologicalSex = 'No especificado', onInputChange, formState } = useForm();
    // const {  onInputChange, formState } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const { isFormValid, isPasswordValid } = useFormValidations({ password, confirm_password });
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        
        const displayName = name + ' ' + fatherName + ' ' + motherName;
        
        const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );
        
        const unixBirthday = getUnixTime( formattedBirthday );

        setRutValidation( isValid )
        // console.log('isFormValid: ', isFormValid)
        // console.log('isValid: ', isValid)
        if ( isFormValid === true && isValid ){
            dispatch( startCreatingUserWithEmailPassword({ displayName, rut, unixBirthday, email, password, regionSeleccionada, comunaSeleccionada, address, phone, biologicalSex }) )
            
        }
        
    }
    
    const handleRegionSeleccionada = (event) => {
        const region = event.target.value;
        const comunas = regiones.find((r) => r.nombre === region).comunas;
        setRegionSeleccionada(region);
        setComunas(comunas);
        setComunaSeleccionada(comunas[0])
    };

    const handleComunaSeleccionada = (event) => {
        const comuna = event.target.value;
        setComunaSeleccionada(comuna)
    };

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

    return (
        <>
            <AuthLayout title="Registro" btnTitle="Iniciar Sesión" url="/auth/login">

                <form onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Nombre</label>
                                <label className="input-label-required">*</label>
                                <label className="input-label-required-text">* Campos obligatorios</label>
                            </div>
                            <input className="input-text-style" type="text" name="name" onChange={ onInputChange } required/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Apellido Paterno</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style" type="text" name="fatherName" onChange={ onInputChange } required/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Apellido Materno</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style" type="text" name="motherName" onChange={ onInputChange } required/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <div className='input-label-container'>
                                    <label className="input-label">RUT</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style" type="text" name="rut" maxLength="12" value={ rut.formatted } onChange={ (e) => updateRut(e.target.value) } required/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Fecha de Nacimiento</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <input className="input-text-style input-date" type="date" name="birthday" onChange={ onInputChange } required/>
                                <span className="input-date-icon"></span>
                            </div>                
                        </div>
                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Email</label>
                                <label className="input-label-required">*</label>
                            </div>
                            <input className="input-text-style" type="email" name="email" onChange={ onInputChange } required/>
                        </div>
                        <div className="form-item">
                            <div className='input-label-container'>
                                <label className="input-label">Contraseña</label>
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
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Región</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                <select className="select-style" name="region" value={regionSeleccionada} onChange={handleRegionSeleccionada} required>
                                    <option value="Seleccione una región">Seleccione una región</option>
                                    {regiones.map((region) => (
                                    <option key={region.nombre} value={region.nombre}>
                                        {region.nombre}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <div className='input-label-container'>
                                    <label className="input-label">Comuna</label>
                                    <label className="input-label-required">*</label>
                                </div>
                                {
                                    <ComunasSelect
                                    comunaSeleccionada={comunaSeleccionada}
                                    comunas={comunas}
                                    handleComunaSeleccionada={handleComunaSeleccionada}
                                    />
                                }
                            </div>      
                        </div>
                        <div className="form-item">
                            <label className="input-label">Dirección</label>
                            <input className="input-text-style" type="text" name="address" onChange={ onInputChange }/>
                        </div>
                        <div className="form-item phone-code">
                            <label className="input-label">Teléfono</label>
                            <input className="input-text-style phone-code-padding" type="text" maxLength="8" name="phone" onChange={ onInputChange }/>
                        </div>
                        <div className="form-item">
                            <label className="input-label">Género</label>
                            <select className="select-style" name="biologicalSex" onChange={ onInputChange }>
                                <option value="No especificado">Seleccione una opción</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="No binario">No binario</option>
                            </select>
                        </div>
                        {
                            ( error )
                            ?   <ErrorManager errorCode= { errorCode }/>
                            :   null
                        }
                        {
                            ( !rutValidation )
                            ?   <div className="login-error-message">
                                    El RUT ingresado no es un RUT válido, revíselo e intente nuevamente
                                </div>
                            :   null
                        }
                        <div className="form-btn">
                            <button className="btn-submit" type="submit" disabled={ disableConfirmBtn }>
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
            </AuthLayout>
            
        </>
    )
}
