import { Link } from 'react-router-dom'
import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import IntegraNutri_texto from '../../../assets/imgs/auth/IntegraNutri_Texto.svg'
import Webapp_example_1 from '../../../assets/imgs/landing/webapp_example_1.svg'
import Webapp_example_2 from '../../../assets/imgs/landing/webapp_example_2.svg'
import Nutri_face_scarf from '../../../assets/imgs/navbar/Nutri_face_scarf.svg'
import Logo from "../../../assets/imgs/auth/Logo_Vertical.svg"

export const LandingPage = () => {

    return (
        <div className="landing-main-container">
            <div className="landing-header">
                <div className="landing-logo-container">
                    <img src={ IntegraNutri_ellipse } className="landing-logo-img" alt="Icono IntegraNutri"/>
                    <img src={ IntegraNutri_texto } className="landing-logo-text" alt="Icono IntegraNutri"/>
                </div>
                <div className="landing-nav">
                    <li className="landing-nav-item" data-tooltip="Inicio">
                        <Link to="../home">
                            Inicio
                        </Link>
                    </li>
                    <li className="landing-nav-item" data-tooltip="Inicio">
                        <Link to="../home">
                            Info
                        </Link>
                    </li>
                    <li className="landing-nav-item" data-tooltip="Inicio">
                        <Link to="../home">
                            Beneficios
                        </Link>
                    </li>
                    <li className="landing-nav-item" data-tooltip="Inicio">
                        <Link to="../home">
                            Membresías
                        </Link>
                    </li>
                    <li className="landing-nav-item" data-tooltip="Inicio">
                        <Link to="../auth/login" className="link-no-decoration">
                            <div className="landing-btn-login">
                                    Iniciar Sesión

                            </div>
                        </Link>
                    </li>
                </div>
            </div>
            <div className="landing-section">
            </div>
            <div className="landing-section">
                <div className="landing-img-container">
                    <div className="landing-title-container">
                        <h1 className='landing-title'>Bienvenido a IntegraNutri!</h1>
                        <p className='landing-description'>Potencia tu atención nutricional con IntegraNutri: Una herramienta integral para nutricionistas modernos.</p>
                        <button className='btn-action'>Suscribirme</button>
                    </div>
                    <div className="landing-img-stack">
                        <div className="landing-img-1">
                            <img src={ Webapp_example_1 } className="" alt="Icono IntegraNutri"/>
                        </div>
                        <div className="landing-img-2">
                            <img src={ Webapp_example_2 } className="" alt="Icono IntegraNutri"/>
                        </div>

                    </div>

                </div>
            </div>
            <div className="curveArea">
                <div className="mainBox">
                    <div className="curveSection"></div>
                </div>
            </div>
            <div className="landing-section">
                <div className="landing-info">
                    <h1 className='landing-title'>Información sobre IntegraNutri</h1>
                    <div className='info-card-container'>
                        <div className='info-card'>
                            <p>Consectetur in qui enim proident. Eu dolor id quis sit consectetur magna sint quis veniam sint eiusmod veniam labore id. Cillum aliquip sint sint ad duis consequat incididunt eu voluptate duis sit sit tempor. Esse laborum adipisicing esse id consectetur velit in labore irure. Elit consectetur minim enim ex commodo voluptate sint ut labore elit fugiat sint cillum deserunt. Dolor minim proident fugiat consequat labore.</p>
                        </div>
                        <div className='info-card'>
                            <p>Consectetur in qui enim proident. Eu dolor id quis sit consectetur magna sint quis veniam sint eiusmod veniam labore id. Cillum aliquip sint sint ad duis consequat incididunt eu voluptate duis sit sit tempor. Esse laborum adipisicing esse id consectetur velit in labore irure. Elit consectetur minim enim ex commodo voluptate sint ut labore elit fugiat sint cillum deserunt. Dolor minim proident fugiat consequat labore.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curveArea-2">
                <div className="mainBox-2">
                    <div className="curveSection-2"></div>
                </div>
            </div>
            <div className="landing-section">
                <div className="landing-benefits">
                <h1 className='landing-title'>Beneficios</h1>
                    <div className='info-card-container'>
                        <div className='info-card'>
                            <img src={ IntegraNutri_ellipse } className="info-card-img" alt="Icono IntegraNutri"/>
                            <p>Consectetur in qui enim proident. Eu dolor id quis sit consectetur magna sint quis veniam sint eiusmod veniam labore id. Cillum aliquip sint sint ad duis consequat incididunt eu voluptate duis sit sit tempor. Esse laborum adipisicing esse id consectetur velit in labore irure. Elit consectetur minim enim ex commodo voluptate sint ut labore elit fugiat sint cillum deserunt. Dolor minim proident fugiat consequat labore.</p>
                        </div>
                        <div className='info-card'>
                            <img src={ IntegraNutri_ellipse } className="info-card-img" alt="Icono IntegraNutri"/>
                            <p>Consectetur in qui enim proident. Eu dolor id quis sit consectetur magna sint quis veniam sint eiusmod veniam labore id. Cillum aliquip sint sint ad duis consequat incididunt eu voluptate duis sit sit tempor. Esse laborum adipisicing esse id consectetur velit in labore irure. Elit consectetur minim enim ex commodo voluptate sint ut labore elit fugiat sint cillum deserunt. Dolor minim proident fugiat consequat labore.</p>
                        </div>
                        <div className='info-card'>
                            <img src={ IntegraNutri_ellipse } className="info-card-img" alt="Icono IntegraNutri"/>
                            <p>Consectetur in qui enim proident. Eu dolor id quis sit consectetur magna sint quis veniam sint eiusmod veniam labore id. Cillum aliquip sint sint ad duis consequat incididunt eu voluptate duis sit sit tempor. Esse laborum adipisicing esse id consectetur velit in labore irure. Elit consectetur minim enim ex commodo voluptate sint ut labore elit fugiat sint cillum deserunt. Dolor minim proident fugiat consequat labore.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curveArea">
                <div className="mainBox">
                    <div className="curveSection"></div>
                </div>
            </div>
            <div className="landing-section">
                <div className="landing-memberships">
                    <h1 className='landing-title'>Membresías</h1>
                    <div className='memberships-card-container'>
                        <div className='memberships-card'>
                            <img src={ IntegraNutri_ellipse } className="memberships-card-img" alt="Icono IntegraNutri"/>
                            <p>Elit quis commodo cillum excepteur. Sint nostrud enim do officia mollit nisi exercitation Lorem. Laboris ullamco irure enim eu culpa consequat sint cillum. Sunt nulla nisi eu duis reprehenderit proident excepteur exercitation adipisicing consequat esse commodo irure. Occaecat ad incididunt excepteur exercitation minim eu ipsum commodo officia aliquip. Nisi est pariatur labore consequat occaecat et incididunt in et sit dolore anim. Do ut aute culpa sint deserunt laboris consequat sunt.</p>
                            <p>Ea velit dolore magna reprehenderit deserunt aliqua officia. Veniam aliquip exercitation eiusmod in eiusmod aliqua quis reprehenderit sint duis ex nulla quis. Nostrud duis est ad enim anim id nulla. Mollit ut consequat cillum anim nostrud ut nulla ipsum velit reprehenderit. Magna duis velit adipisicing non sit exercitation duis commodo labore laborum. Consequat aute duis mollit cillum et exercitation esse.</p>
                            <button className='btn-action-memberships-card'>Suscribirme</button>
                        </div>
                        <div className='memberships-card'>
                            <img src={ IntegraNutri_ellipse } className="memberships-card-img" alt="Icono IntegraNutri"/>
                            <p>Elit duis deserunt ex adipisicing nulla mollit. Consequat aute velit proident labore ullamco. Nisi ut fugiat duis ullamco voluptate adipisicing fugiat sit et. Esse culpa occaecat proident tempor. Laboris culpa culpa qui Lorem esse Lorem non ad anim excepteur aliqua magna.</p>
                            <p>Ullamco deserunt pariatur incididunt cillum minim reprehenderit do. Pariatur aliqua enim labore consequat sint ad exercitation esse amet pariatur. Eiusmod qui sunt in mollit quis qui ex. Adipisicing consequat anim cupidatat laboris non amet elit commodo eiusmod aute. Non cupidatat ipsum cillum elit esse. Nostrud aute sunt culpa cillum non et aute eu dolore aliquip. Veniam sunt nostrud fugiat dolor elit nulla nulla ad anim esse.</p>
                            <button className='btn-action-memberships-card'>Suscribirme</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curveArea-3">
                <div className="mainBox-3">
                    <div className="curveSection-3"></div>
                </div>
            </div>
            <div className='footer margin-left-0'>
                <div className='footer-section'>
                    <p className='footer-title'>Mapa del sitio</p>
                        
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
            </div>
    )
}
