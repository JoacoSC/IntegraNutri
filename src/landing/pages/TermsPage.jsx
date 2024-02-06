import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import IntegraNutri_texto from '../../../assets/imgs/auth/IntegraNutri_Texto.svg'
import Up_icon from '../../../assets/imgs/landing/up_icon.svg'
import Logo from "../../../assets/imgs/auth/Logo_Vertical.svg"
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const TermsPage = () => {

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
                        <h1>TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA WEB</h1>

                        <p><strong>Fecha de última actualización:</strong> 27 de Diciembre de 2023</p>

                        <p>Antes de acceder y utilizar los servicios disponibles en la aplicación web, a través del dominio <a href="http://www.integranutri.cl">www.integranutri.cl</a> y/o sus subdominios, lea atentamente estos Términos y Condiciones de Uso (en adelante, "Términos y Condiciones" o "Términos"), que estipulan los términos en que se utiliza el servicio de IntegraNutri.</p>

                        <h2>¿Quiénes somos?</h2>

                        <p><strong>INTEGRANUTRI SPA</strong> - (en adelante, "IntegraNutri") es una plataforma Chilena que se dedica al desarrollo de un software en la nube, destinado exclusivamente a profesionales de Nutrición (nutricionista) y a sus pacientes. IntegraNutri es una herramienta automatizada que simplifica el trabajo para el profesional nutricionista.</p>

                        <h2>1. Definiciones</h2>

                        <ul>
                            <li><strong>"Plataforma"</strong> se refiere a IntegraNutri, englobando su sitio web <a href="http://www.integranutri.cl">www.integranutri.cl</a>, aplicaciones móviles y cualquier otro servicio relacionado.</li>
                            <li>Este documento establece las condiciones que rigen su acceso y uso de los servicios proporcionados por IntegraNutri SPA a través del sitio web <a href="http://www.integranutri.cl">www.integranutri.cl</a>, incluyendo su página web, aplicaciones móviles y otros servicios relacionados. Al utilizar este sitio, podrá beneficiarse de los servicios de IntegraNutri mediante una suscripción mensual, trimestral o semestral, permitiéndole gestionar ingresos y controles de pacientes, automatizar su agenda, interpretar resultados según indicadores y mantener registros de pacientes, entre otras funciones.</li>
                        </ul>

                        <h2>2. Uso de la Plataforma</h2>

                        <h3>2.1. Requisitos de Registro:</h3>

                        <ul>
                            <li><strong>Nombre de Usuario:</strong> Identificación única elegida por el usuario.</li>
                            <li><strong>Contraseña:</strong> Esencial para la seguridad de la cuenta, debe ser segura.</li>
                            <li><strong>Dirección de Correo Electrónico:</strong> Utilizada para la verificación de la cuenta y la comunicación con el usuario, además de ser útil para recuperar la cuenta en caso de olvido de la contraseña.</li>
                            <li><strong>Información de Perfil:</strong> Detalles personales como nombre completo, fecha de nacimiento, género, ubicación, número de teléfono, etc.</li>
                            <li>Usted acepta proporcionar información precisa y completa durante el proceso de registro.</li>
                        </ul>

                        <h3>2.2. Cuentas de Usuario:</h3>

                        <ul>
                            <li>Cuando crea una cuenta con nosotros, garantiza que es mayor de 18 años y que la información que nos proporciona es precisa, completa y actualizada en todo momento. La información inexacta, incompleta u obsoleta puede resultar en la cancelación inmediata de su cuenta en el Servicio.</li>
                            <li>El titular de la cuenta debe ser una persona.</li>
                            <li>No puede usar como nombre de usuario el nombre de otra persona o entidad o que no esté legalmente disponible para su uso, un nombre o marca comercial que esté sujeta a cualquier derecho de otra persona o entidad que no sea usted, sin la debida autorización. No puede utilizar como nombre de usuario ningún nombre que sea ofensivo, vulgar u obsceno.</li>
                            <li>La plataforma IntegraNutri y sus contenidos son para uso personal, no se pueden compartir con terceros. La suscripción otorga un derecho limitado para uso personal, no permitiendo compartir la cuenta entre varios usuarios ni cuentas.</li>
                            <li>El nombre de usuario debe ser el nombre de la persona titular de la cuenta.</li>
                        </ul>

                        <h3>2.3. Cuenta de Paciente:</h3>

                        <ul>
                            <li>El paciente es la persona a la que usted le realiza su prestación de salud.</li>
                            <li>Debe ser una persona con RUT verificado.</li>
                            <li>El perfil del paciente es gratuito, esto quiere decir que no tiene ningún cargo de por medio.</li>
                            <li>El paciente tiene la posibilidad de visualizar su ficha clínica, siempre y cuando realice la creación de su perfil.</li>
                        </ul>

                        <h3>2.4. Uso Aceptable:</h3>

                        <ol>
                            <p>Usted se compromete a utilizar la Plataforma de manera legal y ética. Se espera que cumpla con las siguientes pautas de uso aceptable:</p>
                            <li>No publique, comparta o transmita contenido ilegal, difamatorio, obsceno, abusivo, discriminatorio o amenazante.</li>
                            <li>No interfiera con el funcionamiento normal de la Plataforma ni realice intentos de acceso no autorizado a sistemas o datos.</li>
                            <li>No utilice la Plataforma para promover o distribuir spam, malware, virus u otros programas maliciosos.</li>
                            <li>No viole los derechos de propiedad intelectual de terceros, incluyendo derechos de autor, marcas registradas o patentes.</li>
                            <li>No realice actividades que perjudiquen la reputación de IntegraNutri SPA o causen daño a otros usuarios de la Plataforma.</li>
                            <li>No utilice la Plataforma con fines comerciales o de marketing sin previa autorización por escrito de IntegraNutri SPA.</li>
                            <li>No realice actividades que violen la privacidad de otros usuarios o recopilen información personal sin su consentimiento.</li>
                        </ol>

                        <h3>2.5. Contratar:</h3>

                        <ol>
                            <p>Para contratar servicios en este sitio, siga estos pasos:</p>
                            <li>Inicie el proceso de contratación confirmando haber leído y aceptado estos Términos y Condiciones.</li>
                            <li>Cree una cuenta en IntegraNutri.</li>
                            <li>Seleccione el plan que desea contratar.</li>
                            <li>Para realizar el pago de la membresía, debe inscribir una tarjeta de crédito/débito, confirme el monto y pago.</li>
                        </ol>

                        <h3>2.6. Medios de Pago:</h3>

                        <ul>
                            <li>Los productos y servicios informados en este sitio solo podrán pagarse mediante tarjetas de crédito bancarias Visa, Mastercard, Dinners Club International o American Express, siempre que mantengan un contrato vigente con IntegraNutri. El pago con tarjetas de débito se realizará a través de Transbank (pasarela de pago).</li>
                        </ul>

                        <h2>3. Propiedad Intelectual</h2>

                        <h3>3.1. Derechos de Autor:</h3>

                        <ul>
                            <li>Todos los contenidos de la Plataforma, como textos, gráficos, logotipos, imágenes y videos, están protegidos por derechos de autor y son propiedad de IntegraNutri SPA o sus licenciatarios. Esto incluye textos informativos y educativos, el diseño y la estructura de la Plataforma, así como los logotipos, marcas comerciales y nombres de la Plataforma. Los usuarios tienen derecho a acceder y utilizar estos contenidos únicamente en el contexto de su uso personal de la Plataforma, según se describe en estos Términos y Condiciones.</li>
                        </ul>

                        <h3>3.2. Licencia de Uso:</h3>

                        <ul>
                            <li>IntegraNutri SPA otorga a los usuarios una licencia limitada, no exclusiva y revocable para acceder y utilizar la Plataforma para fines personales y no comerciales. Esta licencia permite a los usuarios ver y navegar por los contenidos, crear copias temporales en la memoria caché del dispositivo y imprimir copias para uso personal y no comercial. No se permite la reproducción, distribución o modificación no autorizada de los contenidos, el uso no autorizado de logotipos o marcas, ni el uso comercial o de marketing sin autorización por escrito.</li>
                            <li>Cualquier uso no autorizado constituye una violación de los derechos de propiedad intelectual y puede dar lugar a medidas legales.</li>
                            <li>IntegraNutri SPA se reserva todos los derechos no expresamente otorgados en estos Términos y Condiciones.</li>
                        </ul>

                        <h2>4. Privacidad</h2>

                        <h3>4.1. Política de Privacidad:</h3>

                        <ul>
                            <li>La recopilación y el uso de su información personal se rigen por nuestra <a href="[Enlace a la política de privacidad]">Política de Privacidad</a>. Respetamos su privacidad y tomamos medidas para proteger sus datos personales. Al utilizar la Plataforma, usted acepta las prácticas de privacidad descritas en nuestra Política de Privacidad.</li>
                        </ul>

                        <h2>5. Periodo de prueba</h2>

                        <ul>
                            <li>IntegraNutri podrá ofrecer una Suscripción con un periodo de prueba gratis por un tiempo limitado de 7 días. A cualquier momento y sin aviso previo, IntegraNutri se reserva el derecho a modificar los Términos del Servicio del Periodo de Prueba o cancelar dicha oferta de Periodo de Prueba.</li>
                        </ul>

                        <h2>6. Reembolso y garantías</h2>

                        <h3>6.1 Reembolsos</h3>

                        <ul>
                            <li>Todos los cargos son no reembolsables salvo que se estipule expresamente lo contrario, como un reembolso elegible.</li>
                        </ul>

                        <h3>6.1.2 Reembolso Elegible</h3>

                        <ul>
                            <li>Se entiende cuando ocurre una falla en la plataforma que persiste igual o más de 30 días, y no se ha proporcionado ninguna solución para tratar los problemas técnicos del software. En este caso, IntegraNutri reembolsará la compra si el cliente lo solicita.</li>
                        </ul>

                        <h3>6.2. Sin Garantías:</h3>

                        <ul>
                            <li>La Plataforma se proporciona "tal cual" e IntegraNutri SPA no ofrece garantías de ningún tipo, ya sean explícitas o implícitas, incluyendo, pero sin limitarse a, garantías de comerciabilidad, idoneidad para un propósito particular o no infracción. IntegraNutri ofrece un periodo de prueba gratuita de 7 días, esto con la finalidad de probar antes de realizar su compra, los reembolsos se aprobarán dentro.</li>
                        </ul>

                        <h2>7. Ley Aplicable y Jurisdicción</h2>

                        <h3>7.1. Ley Aplicable y Jurisdicción en Chile:</h3>

                        <ul>
                            <li>Estos Términos se regirán e interpretarán según las leyes de Chile, específicamente bajo la Ley 19.496 de Protección de los Derechos de los Consumidores. Cualquier disputa estará sujeta a la jurisdicción exclusiva de los tribunales de Chile.</li>
                        </ul>

                        <h2>8. Contacto</h2>

                        <ul>
                            <li>Si tiene alguna pregunta o comentario sobre estos Términos, contáctenos en <a href="mailto:integranutricion.cl@gmail.com">integranutricion.cl@gmail.com</a>.</li>
                            <li>Al utilizar nuestra Plataforma, usted acepta cumplir con estos Términos y Condiciones de Uso. Gracias por elegir IntegraNutri SPA.</li>
                        </ul>
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
