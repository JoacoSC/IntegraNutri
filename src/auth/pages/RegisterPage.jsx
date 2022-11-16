import { useDispatch } from 'react-redux';
import { useRut } from 'react-rut-formatter';
import { addDays, fromUnixTime, getUnixTime, set } from 'date-fns'

import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const { name, fatherName, motherName, birthday, email, password, confirm_password, region, city, address, phone, gender, onInputChange, formState } = useForm();
    // const {  onInputChange, formState } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const onSubmit = ( event ) => {
        event.preventDefault();

        const rawRut = rut.raw;

        const displayName = name + " " + fatherName + " " + motherName;

        const formattedBirthday = addDays( set( new Date( birthday ), { hours: 0, minutes: 0, seconds: 0, miliseconds: 0} ), 1 );

        const unixBirthday = getUnixTime( formattedBirthday );

        if ( !isValid ) return;

        dispatch ( startCreatingUserWithEmailPassword({ displayName, rawRut, unixBirthday, email, password, region, city, address, phone, gender }) )
    }
    
    return (
        <>
            <AuthLayout title="Registro" btnTitle="Iniciar Sesión" url="/auth/login">

                <form onSubmit={ onSubmit }>
                    <div className="container-form" onSubmit={ onSubmit }>

                        <div className="form-item">
                            <label className="input-label">Nombre</label>
                            <input className="input-text-style" type="text" name="name" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Apellido Paterno</label>
                                <input className="input-text-style" type="text" name="fatherName" onChange={ onInputChange }/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Apellido Materno</label>
                                <input className="input-text-style" type="text" name="motherName" onChange={ onInputChange }/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">RUT</label>
                                <input className="input-text-style" type="text" name="rut" value={ rut.formatted } onChange={ (e) => updateRut(e.target.value) }/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Fecha de Nacimiento</label>
                                <input className="input-text-style input-date" type="date" name="birthday" onChange={ onInputChange }/>
                                <span className="input-date-icon"></span>
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
                        <div className="form-item">
                            <label className="input-label">Confirmar contraseña</label>
                            <input className="input-text-style" type="password" name="confirm_password" onChange={ onInputChange }/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Región</label>
                                <select className="select-style" name="region" onChange={ onInputChange }>
                                    <option value="Region de Valparaiso">Region de Valparaiso</option>
                                    <option value="Region Metropolitana">Region Metropolitana</option>
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Comuna</label>
                                <select className="select-style" name="city" onChange={ onInputChange }>
                                    <option value="Llay llay">Llay llay</option>
                                    <option value="San Felipe">San felipe</option>
                                </select>
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
                            <select className="select-style" name="gender" onChange={ onInputChange }>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="No binario">No binario</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-btn">
                            <button className="btn-submit" type="submit">
                                Registrarse
                            </button>
                        </div>
                    </div>
                </form>
            </AuthLayout>
            
        </>
    )
}
