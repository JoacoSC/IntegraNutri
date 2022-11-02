import { Link } from 'react-router-dom';
import { useRut } from 'react-rut-formatter';
import { useForm } from '../../hooks';
import '../components/RegisterPageStyles.css';

export const RegisterPage = () => {

    const { name, fatherName, motherName, date, email, password, confirm_password, region, comuna, address, phone, genero, onInputChange } = useForm();

    const { isValid, rut, updateRut } = useRut();

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ name, fatherName, motherName, rut, isValid, date, email, password, confirm_password, region, comuna, address, phone, genero });
    }

    const logo = "../../../assets/imgs/auth/Logo.svg"
    
    return (
        <>
            <section className="wrapper-main">
                <div id="background" className="background">
                    <h1 className="background-title">
                        Portal de consulta nutricional                
                    </h1>
                </div>
                <div id="container" className="container">
                    <div className="container-top">
                        <ul>
                            <li>
                                <img className="logo" src={ logo } alt="Logo de App_Nutricionista"/>

                            </li>
                            <li>
                                {/* <button className="btn-login" type="button">Iniciar Sesión</button> */}
                                <Link to="/auth/login" className="link-no-decoration">
                                    <div className="btn-link-login">
                                            Iniciar Sesión

                                    </div>
                                </Link>

                            </li>
                        </ul>
                    </div>
                    <div className="header">
                        <h1 className="">Registro</h1>
                    </div>
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
                                    <button className="btn-register" type="submit">
                                        Registrarse
                                    </button>
                                </div>
                            </div>
                        </form>

                </div>
                
            </section>
        </>
    )
}
