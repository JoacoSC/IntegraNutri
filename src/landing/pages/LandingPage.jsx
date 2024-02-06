import { Link } from 'react-router-dom'
import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import IntegraNutri_texto from '../../../assets/imgs/auth/IntegraNutri_Texto.svg'
import Webapp_example_1 from '../../../assets/imgs/landing/webapp_example_1.svg'
import Webapp_example_2 from '../../../assets/imgs/landing/webapp_example_2.svg'
import Cloud_icon from '../../../assets/imgs/landing/cloud_icon.svg'
import Up_icon from '../../../assets/imgs/landing/up_icon.svg'
import Precision_icon from '../../../assets/imgs/landing/precision_icon.svg'
import Transformation_icon from '../../../assets/imgs/landing/transformation_icon.svg'
import Safe_icon from '../../../assets/imgs/landing/safe_icon.svg'
import Organized_icon from '../../../assets/imgs/landing/organized_icon.svg'
import Patient_icon from '../../../assets/imgs/landing/patient_icon.svg'
import Time_icon from '../../../assets/imgs/landing/time_icon.svg'
import Chart_icon from '../../../assets/imgs/landing/chart_icon.svg'
import Refresh_icon from '../../../assets/imgs/landing/refresh_icon.svg'
import Journal_icon from '../../../assets/imgs/landing/journal_icon.svg'
import Bar_chart_icon from '../../../assets/imgs/landing/bar_chart_icon.svg'
import Like_icon from '../../../assets/imgs/landing/like_icon.svg'
import Gear_icon from '../../../assets/imgs/landing/gear_icon.svg'
import Menu_icon from '../../../assets/imgs/landing/menu_icon.svg'
import { useEffect, useRef, useState } from 'react'
import { LandingFooter } from '../../ui/LandingFooter'
import { useDispatch, useSelector } from 'react-redux'

export const LandingPage = () => {

    const dispatch = useDispatch();

    const { isLogged, uid } = useSelector( state => state.auth );

    const topRef = useRef();
    const homeRef = useRef();
    const infoRef = useRef();
    const benefitsRef = useRef();
    const membershipsRef = useRef();
    const menuCheckbox = useRef();

    const [visible, setVisible] = useState(false)
    const [menuChecked, setMenuChecked] = useState(false);

    const handleScrollToTop = (  ) => {
        topRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handleHomeClick = (  ) => {
        homeRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handleInfoClick = (  ) => {
        infoRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handleBenefitsClick = (  ) => {
        benefitsRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    const handleMembershipsClick = (  ) => {
        membershipsRef.current?.scrollIntoView({behavior: 'smooth'});
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

    const handleMenu = () => {

        // menuCheckbox.current.checked = !menuCheckbox.current.checked;

        // const isChecked = menuCheckbox.current.checked;

        // // Realiza las acciones que necesitas con el estado del checkbox
        // if (isChecked) {
        // // El checkbox está marcado
        // console.log('El menú está activado');
        // // Agrega aquí lógica adicional según tus necesidades
        // } else {
        // // El checkbox está desmarcado
        // console.log('El menú está desactivado');
        // // Agrega aquí lógica adicional según tus necesidades
        // }

        setMenuChecked(!menuChecked);
        
    }

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
                    <div className="menu-icon-container">
                        <input ref={menuCheckbox} type="checkbox" checked={ menuChecked } hidden readOnly/>
                        <img src={Menu_icon} alt="Menú" onClick={handleMenu} />
                    </div>
                    <ul className={` ${menuChecked ? 'landing-nav-list-active' : 'landing-nav-list'}`}>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={ handleHomeClick }>
                                Inicio
                            </a>
                        </li>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={ handleInfoClick }>
                                Info
                            </a>
                        </li>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={ handleBenefitsClick }>
                                Beneficios
                            </a>
                        </li>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={ handleMembershipsClick }>
                                Membresías
                            </a>
                        </li>
                        {
                            ( isLogged === true )
                            ?   <li className="landing-nav-item-login" data-tooltip="Inicio">
                                    <Link to="../nutritionist" className="link-no-decoration">
                                        <div className="landing-btn-login">
                                                Ir a IntegraNutri
                                        </div>
                                    </Link>
                                </li>
                            :   <li className="landing-nav-item-login" data-tooltip="Inicio">
                                    <Link to="../auth/login" className="link-no-decoration">
                                        <div className="landing-btn-login">
                                                Iniciar Sesión
                                        </div>
                                    </Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
            <div ref={ homeRef } className="landing-section">
                <div className="landing-img-container">
                    <div className="landing-title-container">
                        <h1 className='landing-title'>Bienvenido a IntegraNutri!</h1>
                        <p className='landing-description'>Potencia tu atención nutricional con IntegraNutri: Una herramienta integral para nutricionistas modernos.</p>
                        <button className='btn-action' onClick={ handleMembershipsClick }>Suscribirme</button>
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
            <div ref={ infoRef } className="landing-section">
                <div className="landing-info">
                    <h1 className='landing-title'>Información sobre IntegraNutri</h1>
                    <div className='info-card-container'>
                        <div className='info-card'>
                            <div className="info-card-img">
                                <img src={ Cloud_icon } alt="Icono IntegraNutri"/>
                            </div>
                            <p>IntegraNutri ha sido concebida como una plataforma web exclusiva para profesionales de la nutrición,
                             con el propósito de proporcionar herramientas y recursos que simplifiquen sus labores cotidianas. <br/><br/>
                             La singularidad de IntegraNutri radica en su base de datos en la nube, asegurando así la disponibilidad
                              constante de la información desde cualquier dispositivo con conexión a internet.<br/><br/> Adiós al uso de Excel;
                               sumérgete en la experiencia única que ofrece IntegraNutri.</p>
                        </div>
                        <div className='info-card'>
                            <div className="info-card-img">
                                <img src={ Precision_icon } alt="Icono IntegraNutri"/>
                            </div>
                        <p>Esta plataforma ha sido meticulosamente diseñada, tomando como referencia los Patrones de Crecimiento
                             para la evaluación nutricional de niños, niñas y adolescentes desde el nacimiento hasta los 19 años de edad,
                              según las directrices establecidas por el Ministerio de Salud (MINSAL).<br/><br/>
                               De esta manera, IntegraNutri se alinea con los estándares más actualizados y confiables en el ámbito
                                de la evaluación nutricional pediátrica.</p>
                        </div>
                        <div className='info-card'>
                            <div className="info-card-img">
                                <img src={ Transformation_icon } alt="Icono IntegraNutri"/>
                            </div>
                        <p>La versatilidad de IntegraNutri no solo reside en su acceso a través de múltiples dispositivos,
                             sino también en su capacidad para transformar la gestión de información nutricional,
                              reemplazando las metodologías obsoletas por un enfoque moderno y eficaz.<br/><br/>
                               Vive la revolución en el cuidado nutricional con IntegraNutri.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curveArea-2">
                <div className="mainBox-2">
                    <div className="curveSection-2"></div>
                </div>
            </div>
            <div ref={ benefitsRef } className="landing-section">
                <div className="landing-benefits">
                <h1 className='landing-title'>Beneficios</h1>
                    <div className='benefits-card-container'>
                        <div className='benefits-card'>
                            <div className='benefits-item'>
                                <div className="benefits-card-img">
                                    <img src={ Safe_icon } alt="Icono IntegraNutri"/>
                                </div>
                                <h3>
                                    Seguro
                                </h3>
                                <p>IntegraNutri proporciona un acceso seguro y fiable a su plataforma, 
                                garantizando la privacidad de los datos del profesional nutricionista.</p>
                            </div>
                            <div className='benefits-item'>
                                <div className="benefits-card-img">
                                    <img src={ Organized_icon } alt="Icono IntegraNutri"/>
                                </div>
                                <h3>
                                    Organizado
                                </h3>
                                <p>Facilita la gestión eficiente de la información del paciente, 
                                permitiendo un seguimiento preciso de historiales clínicos y progresos de manera organizada.</p>
                            </div>
                            <div className='benefits-item'>
                                <div className="benefits-card-img">
                                    <img src={ Patient_icon } alt="Icono IntegraNutri"/>
                                </div>
                                <h3>
                                    Individualizado
                                </h3>
                                <p>Los pacientes están conectados mediante su perfil propio, 
                                donde podrán visualizar antecedentes relevantes en su atención.</p>
                            </div>
                            <div className='benefits-item'>
                                <div className="benefits-card-img">
                                    <img src={ Time_icon } alt="Icono IntegraNutri"/>
                                </div>
                                <h3>
                                    Eficiente
                                </h3>
                                <p>La plataforma integra funciones de recordatorio de citas y seguimientos, 
                                optimizando la organización del profesional y mejorando la puntualidad en el cumplimiento
                                de compromisos.</p>
                                </div>
                            <div className='benefits-item'>
                                <div className="benefits-card-img">
                                    <img src={ Chart_icon } alt="Icono IntegraNutri"/>
                                </div>
                                <h3>
                                    Ilustrativo
                                </h3>
                                <p>Ofrece curvas de evolución para sus indicadores.</p>
                            </div>
                        </div>
                            <div className='benefits-card'>
                                <div className='benefits-item'>
                                    <div className="benefits-card-img">
                                        <img src={ Gear_icon } alt="Icono IntegraNutri"/>
                                    </div>
                                    <h3>
                                    Automatizada
                                    </h3>
                                    <p>La plataforma es automatizada, lo que permite la clasificación automática de datos 
                                    ingresados según indicadores, mediciones, etc., optimizando los tiempos de atención.</p>
                                    </div>
                                <div className='benefits-item'>
                                    <div className="benefits-card-img">
                                        <img src={ Journal_icon } alt="Icono IntegraNutri"/>
                                    </div>
                                    <h3>
                                        Personalizable
                                    </h3>
                                    <p>Cuenta con una agenda personalizable y enlace con redirección a su agenda, 
                                    permitiendo que los pacientes agenden de manera automática.</p>
                                    </div>
                                <div className='benefits-item'>
                                    <div className="benefits-card-img">
                                        <img src={ Bar_chart_icon } alt="Icono IntegraNutri"/>
                                    </div>
                                    <h3>
                                        Racional
                                    </h3>
                                    <p>Proporciona herramientas analíticas para evaluar estadísticas y tendencias, 
                                    facilitando la toma de decisiones informadas en el proceso de tratamiento nutricional.</p>
                                    </div>
                                <div className='benefits-item'>
                                    <div className="benefits-card-img">
                                        <img src={ Like_icon } alt="Icono IntegraNutri"/>
                                    </div>
                                    <h3>
                                    Accesible
                                    </h3>
                                    <p>IntegraNutri se destaca por su interfaz intuitiva y amigable, facilitando su uso 
                                    tanto para profesionales como para pacientes, promoviendo una experiencia positiva.</p>
                                    </div>
                                <div className='benefits-item'>
                                    <div className="benefits-card-img">
                                        <img src={ Refresh_icon } alt="Icono IntegraNutri"/>
                                    </div>
                                    <h3>
                                        Adaptativo
                                    </h3>
                                    <p>Ofrece actualizaciones regulares y mejoras continuas, demostrando un compromiso 
                                    constante con la excelencia y la satisfacción tanto de profesionales como de pacientes.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="curveArea">
                <div className="mainBox">
                    <div className="curveSection"></div>
                </div>
            </div>
            <div ref={ membershipsRef } className="landing-section">
                <div className="landing-memberships">
                    <h1 className='landing-title'>Membresías</h1>
                    <div className='memberships-card-container'>
                        <div className='memberships-card text-align-center'>
                            <img src={ IntegraNutri_ellipse } className="memberships-card-img" alt="Icono Paquete Infanto Juvenil"/>
                            <h1>Paquete Infanto Juvenil</h1>
                            <p>Te damos la bienvenida a Integranutri, la plataforma líder en apoyo nutricional profesional. Con nuestro paquete "Infanto Juvenil", brindamos opciones flexibles para que puedas aprovechar al máximo nuestros servicios.
                            <br/><br/>Para hacer aún más accesible la excelencia en nutrición, ofrecemos un <b>descuento del 50% en todas las membresías</b>. Este descuento se aplicará automáticamente al realizar la compra.
                            </p>
                            <ul className='text-align-left w-90'>
                                <b><h3 className='text-align-center'>Beneficios Incluidos:</h3></b>
                                <br/>
                                <li>
                                    Pacientes activos ilimitados
                                </li>	
                                <li>Almacenamiento ilimitado</li>
                                <li>Conexión paciente nutricionista</li>
                                <li>No más Excel</li>
                                <li>Automatización de resultados</li>
                                <li>Link de agenda para RRSS</li>
                                <li>Historial de atenciones</li>
                                <li>Progreso mediante curvas</li>
                                <li>Descuento Exclusivo: 50% en Todas las Membresías</li>
                                <li>Mucho más</li>
                            </ul>
                                <b><h3 className='text-align-center'>Opciones de Membresía:</h3></b>
                            <div className='subscriptions-container'>
                                <div className='subscription'>
                                    <p className='text-align-center'>
                                        <b>Mensual</b>:<br/><br/><br/> $15,900/mes<br/><br/>(<b>$7,950/mes</b> descuento incluido)
                                    </p>
                                    <Link to='../cart?item=0' className='btn-action-memberships-card'>Suscribirme</Link>
                                </div>
                                <div className='subscription'>
                                    <p className='text-align-center'>
                                        <b>Trimestral<br/> (3 meses)</b>:<br/><br/> $13,900/mes<br/><br/>(<b>$6,950/mes</b> descuento incluido)
                                    </p>
                                    <Link to='../cart?item=1' className='btn-action-memberships-card'>Suscribirme</Link>
                                </div>
                                <div className='subscription'>
                                    <p className='text-align-center'>
                                        <b>Semestral<br/> (6 meses)</b>:<br/><br/> $12,900/mes<br/><br/>(<b>$6,450/mes</b> descuento incluido)
                                    </p>
                                    <Link to='../cart?item=2' className='btn-action-memberships-card'>Suscribirme</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curveArea-3">
                <div className="mainBox-3">
                    <div className="curveSection-3"></div>
                </div>
            </div>
            <LandingFooter/>
            </div>
    )
}
