import './components';
import Logo from "../../assets/imgs/auth/Logo_Vertical.svg"
import { Link } from 'react-router-dom';

export const LandingFooter = () => {

    return (
    <>
        
        <div className='footer margin-left-0'>
            <div className='footer-section'>
                <p className='footer-title'>Ayuda</p>
                <Link to='../terms' className='footer-link'>
                    <p className='footer-text'>Términos y condiciones</p>
                </Link>
                <Link to='../privacy' className='footer-link'>
                    <p className='footer-text'>Política de Privacidad</p>
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
                <br/>
                <a
                    href="https://youtube.com/@IntegraNutri_cl?si=73a9e70LU0IDoIhJ/"
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='YouTube'
                    >
                    <p className='footer-text'>YouTube</p>
                </a>
                <br/>
                <a
                    href="https://www.linkedin.com/company/integranutri/"
                    target='_blank'
                    rel="noopener noreferrer"
                    aria-label='LinkedIn'
                    >
                    <p className='footer-text'>LinkedIn</p>
                </a>
                
            </div>
        </div>
        <div className='footer-bottom margin-left-0 pl-0'>
            <img className="footer-logo" src={ Logo } alt="Logo de App_Nutricionista"/>
            <p className='footer-text-bold'>IntegraNutri v1.2.0</p>
            <br/>
            <br/>
            <p className='footer-text'>Desarrollado por Joaquín Salinas ☕</p>
            <br/>
            <a
                href="https://www.instagram.com/_joaco.sc_/"
                target='_blank'
                rel="noopener noreferrer"
                aria-label='Instagram'
                >
                <p className='footer-text'>_joaco.sc_</p>
            </a>
            <br/>
            <p className='footer-text'>salinascastillojoaquin@gmail.com</p>
            
        </div>

    </>
    )
}


