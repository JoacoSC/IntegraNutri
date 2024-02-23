import { useEffect, useRef, useState } from "react";
import { ErrorManager } from "../ErrorManager";
import { ComunasSelect } from "../ComunasSelect";
import { regiones } from "../../helpers";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { useRut } from "react-rut-formatter";

export const PatientForm = ({ patientFormProps }) => {

    const form = useRef(null);

    const { 
        onSubmit,
        prefix,
        disableConfirmBtn,
        onInputChange,
        rutValidation,
        regionSeleccionada,
        setRegionSeleccionada,
        comunaSeleccionada,
        setComunaSeleccionada,
        rut,
        updateRut
    } = patientFormProps;

    const [comunas, setComunas] = useState([]);
    const { error, errorCode } = useSelector( state => state.loginHelper );

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
        console.log(`Comuna seleccionada: ${comuna}`);
    };

    return (
        <form ref={ form } onSubmit={ onSubmit }>
            <div className="container-form" onSubmit={ onSubmit }>
                <div className="form-item">
                    <div className='input-label-container'>
                        <label className="input-label">Nombre</label>
                        <label className="input-label-required">*</label>
                        <label className="input-label-required-text">* Campos obligatorios</label>
                    </div>
                    <input className="input-text-style" type="text" name="name" onChange={ onInputChange } required/>
                    {/* <input
                        className="input-text-style"
                        type="text"
                        name='name'
                        value={formValues.name}
                        onChange={onInputChange}
                        required
                    /> */}
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
                    <div className='input-label-container'>
                        <label className="input-label">Sexo Biológico</label>
                        <label className="input-label-required">*</label>
                    </div>
                    <select className="select-style" name="biologicalSex" onChange={ onInputChange } required>
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
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
                    <button className="btn-modal-submit" type="submit" disabled={ disableConfirmBtn }>
                        {prefix === 'sp' ? 'Registrar' : 'Registrarse'}
                    </button>
                </div>
            </div>
        </form>
    );
};
