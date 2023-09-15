import './components';
import Logo from "../../assets/imgs/auth/Logo_Vertical.svg"
import { Link } from 'react-router-dom';

export const Footer = () => {

    return (
    <>
        <div className='footer'>
            <div className='footer-section'>
                <p className='footer-title'>Mapa del sitio</p>
                    <Link to="../" className='footer-link'>
                        <p className='footer-text'>Inicio</p>
                    </Link>
                    <Link to="../myPatients" className='footer-link'>
                        <p className='footer-text'>Mis Pacientes</p>
                    </Link>
                    <Link to="../settings" className='footer-link'>
                        <p className='footer-text'>Configuración de la cuenta</p>
                    </Link>
            </div>            
            <div className='footer-section'>
                <p className='footer-title'>Contacto</p>
                <p className='footer-text'>Puedes ponerte en contacto con nosotros en: integranutricion.cl@gmail.com.</p>
            </div>            
            <div className='footer-section'>
                <p className='footer-title'>Redes Sociales</p>
                {/* <Link  to={{ pathname: "https://www.instagram.com/integranutri_cl/" }} target="_blank" className='footer-link'>
                    <p className='footer-text'>Instagram</p>
                </Link> */}
                <a
                    href="https://www.instagram.com/integranutri_cl/"
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='Instagram'
                    >
                    <p className='footer-text'>Instagram</p>
                </a>
                
            </div>
        </div>
        <div className='footer-bottom'>
            <img className="footer-logo" src={ Logo } alt="Logo de App_Nutricionista"/>
            <p className='footer-text-bold'>IntegraNutri v1.1.2</p>
            <br/>
            <br/>
            <p className='footer-text'>Desarrollado por Joaquín Salinas ☕</p>
            <br/>
            <p className='footer-text'>salinascastillojoaquin@gmail.com</p>
            
        </div>

    </>
    )
}
