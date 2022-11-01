import { useForm } from '../../hooks'
import '../components'

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm({
        email: '',
        password: '',
    });

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ email, password });
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
                        <button className="btn-register" type="button">Registrarse</button>

                    </li>
                </ul>
            </div>
            <div className="header">
                <h1 className="">Login</h1>
            </div>
            <div className="container-form">
            <form onSubmit={ onSubmit }>

                <div className="form-switch-item">
                    <div className="form-switch-item-icon"></div>
                    <div className="switch-container">

                        <input type="checkbox" id="switch"/>
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
                    <input className="input-text-style" type="email" name="email" value={ email } onChange={ onInputChange }/>
                </div>
                <div className="form-item">
                    <label className="input-label">Contraseña</label>
                    <input className="input-text-style" type="password" name="password" value={ password } onChange={ onInputChange }/>
                </div>
                <div className="form-btn">
                    <button className="btn-login" type="submit">
                        Iniciar Sesión
                    </button>
                </div>
            </form>                
            </div>

        </div>
        
    </section>
    </>
  )
}
