import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import IntegraNutri_texto from '../../../assets/imgs/auth/IntegraNutri_Texto.svg'
import Up_icon from '../../../assets/imgs/landing/up_icon.svg'
import Logo from "../../../assets/imgs/auth/Logo_Vertical.svg"
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const PrivacyPage = () => {

    const topRef = useRef();
    const [visible, setVisible] = useState(false)

    const handleScrollToTop = (  ) => {
        topRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
    };

    useEffect(() => {
        handleScrollToTop();
    }, [])
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="landing-main-container">
            <button className='btn-scroll-to-top' style={{display: visible ? 'inline' : 'none'}} onClick={ handleScrollToTop }>
                <img src={ Up_icon } alt="Icono IntegraNutri"/>
            </button>
            <div ref={ topRef } className="landing-header">
                <div className="landing-logo-container">
                    <Link to='../home'>
                        <img src={ IntegraNutri_ellipse } className="landing-logo-img" alt="Icono IntegraNutri"/>
                        <img src={ IntegraNutri_texto } className="landing-logo-text" alt="Icono IntegraNutri"/>
                    </Link>
                </div>
                <div className="landing-nav">
                    <li className="landing-nav-item" data-tooltip="Inicio">
                        <p>
                        Centro de ayuda de IntegraNutri
                        </p>
                    </li>

                </div>
            </div>
            <div className="landing-section">
                <div className="terms-background">
                    <div className='terms-card-container'>
                        <div className='terms-card'>
                            {/* TODO: */}
                            {/* TODO: */}
                            {/* TODO: */}
                            {/* TODO: REVISAR ESTO */}
                            <h1>Política de Privacidad de IntegraNutri</h1>

                            <p><strong>Fecha de última actualización:</strong> 27 de Diciembre de 2023</p>

                            <p><strong>Introducción:</strong> IntegraNutri SPA ("IntegraNutri" o "nosotros") se compromete a proteger la privacidad de sus usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, utilizamos, divulgamos y protegemos la información personal que obtenemos a través de la plataforma web, aplicaciones móviles y otros servicios relacionados (en adelante, "Plataforma"). Al utilizar la Plataforma, usted acepta las prácticas descritas en esta política.</p>

                            <h2>1. Información que Recopilamos:</h2>

                            <ul>
                                <li>
                                    <h3>a. Información de Registro:</h3>
                                    <p>Al registrarse en la Plataforma, recopilamos información como nombre de usuario, contraseña, dirección de correo electrónico y detalles del perfil. Esta información es esencial para identificar a nuestros usuarios y personalizar su experiencia.</p>
                                </li>
                                <li>
                                    <h3>b. Información de Pacientes:</h3>
                                    <p>Al crear perfiles de pacientes, recopilamos datos necesarios para la prestación de servicios de salud, incluyendo nombre, RUT verificado y detalles clínicos. Garantizamos la confidencialidad y seguridad de esta información sensible.</p>
                                </li>
                                <li>
                                    <h3>c. Información de Pago:</h3>
                                    <p>Si elige contratar servicios pagos, recopilamos la información necesaria para procesar pagos, como datos de tarjetas de crédito. Nos comprometemos a garantizar la seguridad de los datos financieros de nuestros usuarios.</p>
                                </li>
                                <li>
                                    <h3>d. Información de Uso:</h3>
                                    <p>Recopilamos datos sobre su uso de la Plataforma, incluyendo interacciones, consultas y preferencias. Esta información nos ayuda a mejorar la usabilidad y personalizar la experiencia del usuario.</p>
                                </li>
                                <li>
                                    <h3>e. Información Automática:</h3>
                                    <p>IntegraNutri no recopila ni utiliza información relacionada con el dispositivo del usuario. A diferencia de algunas aplicaciones, no utilizamos cookies ni registramos detalles técnicos sobre su dispositivo. Nuestra plataforma se centra exclusivamente en la recopilación de información relevante para la prestación de servicios de salud, como datos de registro y detalles clínicos de los pacientes.</p>
                                </li>
                            </ul>

                            <h2>2. Uso de la Información:</h2>

                            <ul>
                                <li>
                                    <h3>a. Prestación de Servicios:</h3>
                                    <p>Utilizamos la información para ofrecer y mejorar nuestros servicios, incluyendo la gestión de pacientes, automatización de agendas y análisis nutricional. Nuestra prioridad es proporcionar una plataforma eficiente y personalizada.</p>
                                </li>
                                <li>
                                    <h3>b. Comunicación:</h3>
                                    <p>Utilizamos la información para enviar notificaciones, actualizaciones y comunicaciones relevantes. Mantenemos a nuestros usuarios informados sobre nuevas características y eventos relacionados con la Plataforma.</p>
                                </li>
                                <li>
                                    <h3>c. Personalización:</h3>
                                    <p>Personalizamos la experiencia del usuario y el contenido en función de la información recopilada. Esto garantiza que nuestros usuarios reciban información relevante y adaptada a sus necesidades.</p>
                                </li>
                                <li>
                                    <h3>d. Procesamiento de Pagos:</h3>
                                    <p>Utilizamos la información de pago para procesar transacciones y administrar suscripciones. Nos aseguramos de cumplir con los estándares de seguridad en el manejo de información financiera.</p>
                                </li>
                                <li>
                                    <h3>e. Seguridad:</h3>
                                    <p>Utilizamos la información para proteger la seguridad y la integridad de la Plataforma y de nuestros usuarios. Implementamos medidas de seguridad avanzadas para prevenir accesos no autorizados.</p>
                                </li>
                            </ul>

                            <h2>3. Compartir Información:</h2>

                            <ul>
                                <li>
                                    <h3>a. Profesionales de Nutrición:</h3>
                                    <p>Compartimos información entre profesionales de nutrición y pacientes para facilitar la prestación de servicios de salud. La comunicación segura entre todas las partes es esencial para el correcto funcionamiento de la Plataforma.</p>
                                </li>
                                <li>
                                    <h3>b. Terceros Proveedores de Servicios:</h3>
                                    <p>Podemos compartir información con proveedores de servicios externos que nos ayudan en funciones como procesamiento de pagos, análisis de datos y servicios técnicos. Nos aseguramos de que estos terceros cumplan con estándares de privacidad y seguridad.</p>
                                </li>
                                <li>
                                    <h3>c. Cumplimiento Legal:</h3>
                                    <p>Divulgamos información cuando sea necesario para cumplir con las leyes, regulaciones o solicitudes gubernamentales aplicables. Garantizamos la transparencia y el cumplimiento normativo.</p>
                                </li>
                            </ul>

                            <h2>4. Seguridad de la Información:</h2>

                            <p>Implementamos medidas de seguridad para proteger la información contra accesos no autorizados, divulgación, alteración o destrucción. Utilizamos tecnologías avanzadas y protocolos de seguridad para garantizar la confidencialidad de los datos.</p>

                            <h2>5. Base de Datos y Almacenamiento de Información:</h2>

                            <p>IntegraNutri utiliza los servicios de Firebase, una plataforma de desarrollo de aplicaciones respaldada por Google, como su principal base de datos para almacenar y gestionar la información de nuestros usuarios. Firebase ofrece un entorno seguro y confiable para la gestión de datos, implementando medidas avanzadas de seguridad para proteger la confidencialidad y la integridad de la información almacenada. La información del usuario, que incluye detalles de registro, perfiles de pacientes, información de pago y datos de uso, se almacena de manera segura en servidores de Firebase.</p>

                            <h2>6. Derechos de Acceso y Control:</h2>

                            <ul>
                                <li>
                                    <h3>a. Acceso a la Información:</h3>
                                    <p>Puede acceder a la información personal proporcionada y corregirla en la configuración de su cuenta. Brindamos a los usuarios control sobre su información personal.</p>
                                </li>
                                <li>
                                    <h3>b. Derecho a Borrar:</h3>
                                    <p>Puede solicitar la eliminación de su cuenta y la información asociada. Nos comprometemos a procesar estas solicitudes de manera oportuna.</p>
                                </li>
                            </ul>

                            <h2>7. Cambios en la Política de Privacidad:</h2>

                            <p>Nos reservamos el derecho de actualizar esta política en cualquier momento. Se le notificarán cambios significativos. Recomendamos revisar periódicamente la política para mantenerse informado sobre nuestras prácticas de privacidad.</p>

                            <h2>8. Menores de Edad:</h2>

                            <p>La Plataforma no está destinada a menores de 18 años. No recopilamos intencionalmente información de menores. Instamos a los padres o tutores a supervisar la actividad en línea de los menores.</p>

                            <h2>9. Contacto:</h2>

                            <p>Si tiene preguntas sobre esta Política de Privacidad, contáctenos en <a href="mailto:integranutricion.cl@gmail.com">integranutricion.cl@gmail.com</a>. Estamos comprometidos a abordar cualquier inquietud o pregunta relacionada con la privacidad.</p>

                            <p>Al utilizar nuestra Plataforma, usted acepta cumplir con esta Política de Privacidad. Gracias por elegir IntegraNutri SPA.</p>

                        </div>
                    </div>
                </div>
            </div>
            <div>
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
            </div>
        </div>
    )
}
