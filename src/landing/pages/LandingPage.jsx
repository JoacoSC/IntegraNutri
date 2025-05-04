// Librerías externas
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Componentes
import { LandingFooter } from '../../ui/LandingFooter';

// Imágenes y estilos
import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg';
import IntegraNutri_texto from '../../../assets/imgs/auth/IntegraNutri_Texto.svg';
import * as Landing_images from '../../../assets/imgs/landing/';
import { texts } from './';
import { AlertBox } from '../../ui/AlertBox';
import { ModalLoginCard, ModalSubscription } from '../../ui';
import { startLogout } from '../../store/auth';
import { ModalInfo } from '../../ui/components';

// Definición del componente SubscriptionLink
const SubscriptionLink = ({ to, className, isSubscribed, children }) => {
    if (isSubscribed) {
      return <strong>Ya tienes una suscripción activa con esta membresía.</strong>;
    } else {
      return <Link to={to} className={className}>{children}</Link>;
    }
};

// Componente de Beneficio
const BenefitItem = ({imgSrc, title, description}) => (
    <div className='benefits-item'>
        <div className="benefits-card-img">
            <img src={ imgSrc } alt={ title }/>
        </div>
        <h3>{ title }</h3>
        <p>{ description }</p>
    </div>
);

// Componente InfoCard
const InfoCard = ({imgSrc, description}) => (
    <div className='info-card'>
        <div className="info-card-img">
            <img src={ imgSrc } alt="Icono IntegraNutri"/>
        </div>
        <p>{ description }</p>
    </div>
);

export const LandingPage = () => {

    // Declaraciones de estado
    const [visible, setVisible] = useState(false);
    const [menuChecked, setMenuChecked] = useState(false);

    // Declaraciones de referencias
    const benefitsRef = useRef();
    const homeRef = useRef();
    const infoRef = useRef();
    const membershipsRef = useRef();
    const menuCheckbox = useRef();
    const topRef = useRef();


    // Declaraciones de Redux
    const dispatch = useDispatch();
    const { isLogged, uid } = useSelector( state => state.auth );
    const subscription = useSelector( state => state.subscription );
    const isSubscribed = subscription.isActive;
    const message = subscription.message;

    // Funciones manejadoras
    const handleScrollTo = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const handleMenu = useCallback(() => {
        setMenuChecked((prevMenuChecked) => !prevMenuChecked);
    }, []);

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    // Efectos
    useEffect(() => {

        const toggleVisible = () => { 
            const scrolled = document.documentElement.scrollTop; 
            if (scrolled > 300){ 
                setVisible(true) 
            }  
            else if (scrolled <= 300){ 
                setVisible(false) 
            } 
        };

        window.addEventListener('scroll', toggleVisible);

        return () => {
        window.removeEventListener('scroll', toggleVisible);
        };

    }, []);

    return (
        <div className="landing-main-container">
            {
                <ModalSubscription/>
            }
            {
                <ModalInfo message={
                    <>
                        <p>¡Bienvenido a nuestra aplicación!</p>
                        <p>¿Quieres probar todas nuestras funciones premium? ¡Regístrate ahora y obtén <strong>7 días de prueba gratis</strong>! 🎉</p>
                        <p>¡Esperamos que disfrutes de la experiencia! 😊</p>
                    </>
                } />
            }
            <button className='btn-scroll-to-top' style={{display: visible ? 'inline' : 'none'}} onClick={() => handleScrollTo(topRef)}>
                <img src={ Landing_images.Up_icon } style={{marginLeft: 'auto', marginRight: 'auto'}} alt="Icono IntegraNutri"/>
            </button>
            <div ref={ topRef } className="landing-header">
                <div className="landing-logo-container" style={{  }}>
                    <Link className='flex flex-row items-center' to='../home'>
                        <img src={ IntegraNutri_ellipse } className="landing-logo-img" alt="Icono IntegraNutri"/>
                        <img src={ IntegraNutri_texto } className="landing-logo-text" style={{ marginTop: '1rem'}} alt="Icono IntegraNutri"/>
                    </Link>
                </div>
                <div className="landing-nav">
                    <div className="menu-icon-container">
                        <input ref={menuCheckbox} type="checkbox" checked={ menuChecked } hidden readOnly/>
                        <img src={Landing_images.Menu_icon} alt="Menú" onClick={handleMenu} />
                    </div>
                    <ul className={` ${menuChecked ? 'landing-nav-list-active' : 'landing-nav-list'}`}>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={() => handleScrollTo(homeRef)}>
                                Inicio
                            </a>
                        </li>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={() => handleScrollTo(infoRef)}>
                                Info
                            </a>
                        </li>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={() => handleScrollTo(benefitsRef)}>
                                Beneficios
                            </a>
                        </li>
                        <li className="landing-nav-item" data-tooltip="Inicio">
                            <a onClick={() => handleScrollTo(membershipsRef)}>
                                Membresías
                            </a>
                        </li>
                        {
                            ( isLogged === true )
                            ?   <>
                                    <li className="landing-nav-item-login" data-tooltip="Inicio">
                                        <Link to="../nutritionist" className="link-no-decoration">
                                            <div className="landing-btn-login" style={{}}>
                                                    Ir a IntegraNutri
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="landing-nav-item-login" data-tooltip="Inicio">
                                        <button className="landing-btn-logout" type="button" onClick={ onLogout }>
                                            Cerrar sesión
                                        </button>
                                    </li>
                            </>
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
                        {/* { message && <AlertBox message={ message }/> } */}
                        <h1 className='landing-title text-4xl font-bold leading-tight my-4'>Bienvenido a IntegraNutri!</h1>
                        <p className='landing-description'>Potencia tu atención nutricional con IntegraNutri: Una herramienta integral para nutricionistas modernos.</p>
                        <button className='btn-action' onClick={() => handleScrollTo(membershipsRef)}>Suscribirme</button>
                    </div>
                    <div className="landing-img-stack">
                        <div className="landing-img-1">
                            <img src={ Landing_images.Webapp_example_1 } style={{width: '100%'}} className="" alt="Icono IntegraNutri"/>
                        </div>
                        <div className="landing-img-2">
                            <img src={ Landing_images.Webapp_example_2 } style={{width: '100%'}} className="" alt="Icono IntegraNutri"/>
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
                    <h1 className='landing-title text-4xl font-bold leading-tight my-4'>Información sobre IntegraNutri</h1>
                    <div className='info-card-container'>
                        {texts.infoCards.map((card, index) => (
                            <InfoCard 
                                key={index}
                                imgSrc={card.imgSrc}
                                description={card.description}
                            />
                        ))}
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
                <h1 className='landing-title text-4xl font-bold leading-tight my-4'>Beneficios</h1>
                    <div className='benefits-card-container'>
                        <div className='benefits-card'>
                            {texts.benefitItems_1.map((item, index) => (
                                <BenefitItem 
                                    key={index}
                                    imgSrc={item.imgSrc}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                        <div className='benefits-card'>
                            {texts.benefitItems_2.map((item, index) => (
                                <BenefitItem 
                                    key={index}
                                    imgSrc={item.imgSrc}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
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
                    <h1 className='landing-title text-4xl font-bold leading-tight my-4'>Membresías</h1>
                    <div className='memberships-card-container'>
                        <div className='memberships-card text-align-center'>
                            <img src={ IntegraNutri_ellipse } className="memberships-card-img" alt="Icono Paquete Infanto Juvenil"/>
                            <h1 className='text-4xl font-bold leading-tight my-4'>Paquete Infanto Juvenil</h1>
                            <p>Te damos la bienvenida a Integranutri, la plataforma líder en apoyo nutricional profesional. Con nuestro paquete "Infanto Juvenil", brindamos opciones flexibles para que puedas aprovechar al máximo nuestros servicios.
                            <br/><br/>Para hacer aún más accesible la excelencia en nutrición, ofrecemos un <b>descuento del 50% en todas las membresías</b>. Este descuento se aplicará automáticamente al realizar la compra.
                            </p>
                            <ul className='text-align-left custom-w-90'>
                                <b><h3 className='text-align-center text-2xl'>Beneficios Incluidos:</h3></b>
                                <br/>
                                <li>
                                    - Pacientes activos ilimitados
                                </li>	
                                <li>- Almacenamiento ilimitado</li>
                                <li>- Conexión paciente nutricionista</li>
                                <li>- No más Excel</li>
                                <li>- Automatización de resultados</li>
                                <li>- Link de agenda para RRSS</li>
                                <li>- Historial de atenciones</li>
                                <li>- Progreso mediante curvas</li>
                                <li>- Descuento Exclusivo: 50% en Todas las Membresías</li>
                                <li>- Mucho más</li>
                            </ul>
                                <b><h3 className='text-align-center'>Opciones de Membresía:</h3></b>
                            <div className='subscriptions-container'>
                                <div className='subscription'>
                                    <p className='text-align-center'>
                                        <b>Mensual</b>:<br/><br/><br/> $15,900/mes<br/><br/>(<b>$7,950/mes</b> descuento incluido)
                                    </p>
                                    
                                    {
                                        ( isLogged === true )
                                        ?   <SubscriptionLink
                                                to='../cart?item=0'
                                                className='btn-action-memberships-card'
                                                isSubscribed={isSubscribed}  // Asegúrate de que isSubscribed sea un booleano
                                                >
                                                Suscribirme
                                            </SubscriptionLink>
                                        :   <>
                                                <div className='cart-subscription-actions'>
                                                    <ModalLoginCard/>

                                                </div>
                                            </>
                                    }
                                </div>
                                <div className='subscription'>
                                    <p className='text-align-center'>
                                        <b>Trimestral<br/> (3 meses)</b>:<br/><br/> $13,900/mes<br/><br/>(<b>$6,950/mes</b> descuento incluido)
                                    </p>
                                    {
                                        ( isLogged === true )
                                        ?   <SubscriptionLink
                                                to='../cart?item=1'
                                                className='btn-action-memberships-card'
                                                isSubscribed={isSubscribed}  // Asegúrate de que isSubscribed sea un booleano
                                                >
                                                Suscribirme
                                            </SubscriptionLink>
                                        :   <>
                                                <div className='cart-subscription-actions'>
                                                    <ModalLoginCard/>

                                                </div>
                                            </>
                                    }
                                </div>
                                <div className='subscription'>
                                    <p className='text-align-center'>
                                        <b>Semestral<br/> (6 meses)</b>:<br/><br/> $12,900/mes<br/><br/>(<b>$6,450/mes</b> descuento incluido)
                                    </p>
                                    {
                                        ( isLogged === true )
                                        ?   <SubscriptionLink
                                                to='../cart?item=2'
                                                className='btn-action-memberships-card'
                                                isSubscribed={isSubscribed}  // Asegúrate de que isSubscribed sea un booleano
                                                >
                                                Suscribirme
                                            </SubscriptionLink>
                                        :   <>
                                                <div className='cart-subscription-actions'>
                                                    <ModalLoginCard/>

                                                </div>
                                            </>
                                    }
                                </div>
                            </div>
                                {
                                    ( isLogged === true )
                                    ?   null
                                    :   <h5>¿No tienes una cuenta? <Link to='../auth/register' className="login-link">Registrarme</Link></h5>
                                }
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
