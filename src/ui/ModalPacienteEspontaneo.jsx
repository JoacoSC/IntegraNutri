import { useState } from "react";
import Modal from 'react-modal';
import { useRut } from "react-rut-formatter";
import { CSSTransition } from "react-transition-group";

import { useForm } from "../hooks";

import './components';

export const ModalPacienteEspontaneo = () => {

    const [openModal, setOpenModal] = useState(false);

    const { name, fatherName, motherName, date, email, region, comuna, address, phone, genero, onInputChange } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log({ name, fatherName, motherName, rut, isValid, date, email, region, comuna, address, phone, genero });
    }

    return (
        <>
            <button className="btn-spontaneous" type="button" onClick={() => setOpenModal(true)}>
                Agregar espontaneo
            </button>
            <CSSTransition
                timeout={300}
                classNames="overlay"
            >
                <Modal
                closeTimeoutMS={500}
                isOpen={ openModal }
                ariaHideApp={false}
                className="modal-container"
                >
                <div className="btn-modal-close" onClick={ () => setOpenModal(false) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6 6 18M6 6l12 12"/>
                    </svg>
                </div>
                <h1 className="modal-header">
                    Agregar paciente espontáneo
                </h1>

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
                                <input className="input-text-style input-date" type="date" name="date" onChange={ onInputChange }/>
                                <span className="input-date-icon"></span>
                            </div>                
                        </div>
                        <div className="form-item">
                            <label className="input-label">Email</label>
                            <input className="input-text-style" type="email" name="email" onChange={ onInputChange }/>
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
                                <select className="select-style" name="comuna" onChange={ onInputChange }>
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
                            <select className="select-style" name="genero" onChange={ onInputChange }>
                                <option value="Femenino">Femenino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="No binario">No binario</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div className="form-btn">
                            <button className="btn-modal-submit" type="submit" onClick={ () => setOpenModal(false) }>
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>
                </Modal>
            </CSSTransition>
        </>
    )
}
