import { Link } from "react-router-dom"
import '../components/AuthLayoutStyles.css';
import Logo from "../../../assets/imgs/auth/Logo_horizontal.svg"

export const AuthLayout = ({ children, title, btnTitle, url}) => {

    return (
    <>
        <section className="wrapper-main">
            <div id="background" className="background">
                <h1 className="background-title">
                    Bienvenido al portal de consulta nutricional                
                </h1>
            </div>
            <div id="container" className="container">
                <div className="container-top">
                    <ul>
                        <li>
                            
                            <img className="logo" src={ Logo } alt="Logo de App_Nutricionista"/>

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
