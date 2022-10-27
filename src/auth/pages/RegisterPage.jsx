import '../components/RegisterPageStyles.css';

export const RegisterPage = () => {

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
                                <button className="btn-login" type="button">Iniciar Sesión</button>

                            </li>
                        </ul>
                    </div>
                    <div className="header">
                        <h1 className="">Registro</h1>
                    </div>
                    <div className="container-form">
                        <div className="form-item">
                            <label className="input-label">Nombre</label>
                            <input className="input-text-style" type="text"/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Apellido Paterno</label>
                                <input className="input-text-style" type="text"/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Apellido Paterno</label>
                                <input className="input-text-style" type="text"/>
                            </div>                
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">RUT</label>
                                <input className="input-text-style" type="text"/>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Fecha de Nacimiento</label>
                                <input className="input-text-style input-date" type="date"/>
                                <span className="input-date-icon"></span>
                            </div>                
                        </div>
                        <div className="form-item">
                            <label className="input-label">Email</label>
                            <input className="input-text-style" type="email"/>
                        </div>
                        <div className="form-item">
                            <label className="input-label">Contraseña</label>
                            <input className="input-text-style" type="password"/>
                        </div>
                        <div className="form-item">
                            <label className="input-label">Confirmar contraseña</label>
                            <input className="input-text-style" type="password"/>
                        </div>
                        <div className="form-group">
                            <div className="form-item w-50 pr-8">
                                <label className="input-label">Región</label>
                                <select className="select-style" name="region" id="">
                                    <option value="">Region de Valparaiso</option>
                                </select>
                            </div>
                            <div className="form-item w-50 pl-8">
                                <label className="input-label">Comuna</label>
                                <select className="select-style" name="comuna" id="">
                                    <option value="">Llay llay</option>
                                    <option value="">San felipe</option>
                                </select>
                            </div>      
                        </div>
                        <div className="form-item">
                            <label className="input-label">Dirección</label>
                            <input className="input-text-style" type="text"/>
                        </div>
                        <div className="form-item phone-code">
                            <label className="input-label">Teléfono</label>
                            <input className="input-text-style phone-code-padding" type="text" maxLength="8"/>
                        </div>
                        <div className="form-item">
                            <label className="input-label">Género</label>
                            <select className="select-style" name="genero" id="">
                                <option value="">Femenino</option>
                                <option value="">Masculino</option>
                                <option value="">No binario</option>
                                <option value="">Otro</option>
                            </select>
                        </div>
                        <div className="form-btn">
                            <button className="btn-register">
                                Registrarse
                            </button>
                        </div>
                    </div>

                </div>
                
            </section>
        </>
    )
}
