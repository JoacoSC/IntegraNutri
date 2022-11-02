import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks'
import '../components'

export const LoginPage = () => {

    const { email, password, onInputChange } = useForm();

    const [isChecked, setIsChecked] = useState( true );

    // const isChecked = true;

    const onSubmit = ( event ) => {
        event.preventDefault();

        console.log({ email, password, isChecked });
    }

    const onCheckBox = () => {
        setIsChecked(isChecked => !isChecked);
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
                        {/* <Link className="btn-register" type="button" onClick={ onButtonRegister }>
                            Registrarse
                        </Link> */}
                        <Link to="/auth/register" className="link-no-decoration">
                            <div className="btn-link-register">
                                    Registrarse

                            </div>
                        </Link>

                    </li>
                </ul>
            </div>
            <div className="header">
                <h1 className="">Login</h1>
            </div>
            <form onSubmit={ onSubmit }>
                <div className="container-form">

                    <div className="form-switch-item">
                        <div className="form-switch-item-icon"></div>
                        <div className="switch-container">

                            <input type="checkbox" id="switch" name="user_type" onChange={ onInputChange } onClick={ onCheckBox } />
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
                        <input className="input-text-style" type="email" name="email" onChange={ onInputChange }/>
                    </div>
                    <div className="form-item">
                        <label className="input-label">Contraseña</label>
                        <input className="input-text-style" type="password" name="password" onChange={ onInputChange }/>
                    </div>
                    <div className="form-btn">
                        <button className="btn-login" type="submit">
                            Iniciar Sesión
                        </button>
                    </div>
                </div>
            </form>                

        </div>
        
    </section>
    </>
  )
}
