import { Link } from "react-router-dom"
import '../components/AuthLayoutStyles.css';

export const AuthLayout = ({ children, title, btnTitle, url}) => {

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
                            <Link to={ url } className="link-no-decoration">
                                <div className="btn-title">
                                        { btnTitle }

                                </div>
                            </Link>

                        </li>
                    </ul>
                </div>
                <div className="header">
                    <h1 className="">{ title }</h1>
                </div>

                { children }
                
            </div>
        </section>
    </>
    )
}
