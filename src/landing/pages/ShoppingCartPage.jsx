import { Link } from 'react-router-dom'
import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import IntegraNutri_texto from '../../../assets/imgs/auth/IntegraNutri_Texto.svg'
import Menu_icon from '../../../assets/imgs/landing/menu_icon.svg'
import { useEffect, useRef, useState } from 'react'
import { LandingFooter } from '../../ui/LandingFooter'

import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from 'react-redux'
import { ModalLoginCard } from '../../ui/ModalLoginCard'
import { useFetch } from '../../hooks'
import { setSelectedSubscription, startSetSubscriptions } from '../../store/shoppingCart'

export const ShoppingCartPage = () => {

    const dispatch = useDispatch();

    const location = useLocation();

    const { item = '' } = queryString.parse( location.search );

    const { isLogged, uid } = useSelector( state => state.auth );

    const { data } = useFetch(`http://localhost:4200/api/create?item=${ item }&uid=${ uid }`);

    const { subscriptions = [], selectedSubscription = {} } = useSelector( state => state.shoppingCart );

    const topRef = useRef();
    const menuCheckbox = useRef();

    const [totalAmount, setTotalAmount] = useState(0);
    const [subtotalAmount, setSubtotalAmount] = useState(0);
    const [monthlyPrice, setMonthlyPrice] = useState(0);
    const [subscriptionDiscount, setSubscriptionDiscount] = useState(0);
    const [subscriptionMonths, setSubscriptionMonths] = useState(0);

    const [visible, setVisible] = useState(false)
    const [menuChecked, setMenuChecked] = useState(false);

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
    }; 

    const handleScrollToTop = (  ) => {
        topRef.current?.scrollIntoView({behavior: 'smooth'});
    }

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

    const payment = () => {

        const { url, token } = data.data;
        window.location.href = `${url}?token_ws=${token}`;
        
    }

    function formatearNumero(numero){
        return new Intl.NumberFormat("es-CL").format(numero);
    }

    useEffect(() => {
        handleScrollToTop();
        dispatch( startSetSubscriptions() );
    }, [])

    useEffect(() => {
        // console.log('subscriptions.length:',subscriptions.length)
        if( subscriptions.length > 0 ){
            if ( item == 0) {
                dispatch( setSelectedSubscription( subscriptions[0] ) )
            }
            if ( item == 1) {
                dispatch( setSelectedSubscription( subscriptions[1] ) )
            }
            if ( item == 2) {
                dispatch( setSelectedSubscription( subscriptions[2] ) )
            }
        }
    }, [ subscriptions ])

    useEffect(() => {
        if( data !== null ){

            setTotalAmount( data.subscriptionData.amount )
            setSubtotalAmount( data.subscriptionData.subtotalAmount )
            setMonthlyPrice( data.subscriptionData.monthlyPrice )
            setSubscriptionDiscount( data.subscriptionData.subscriptionDiscount )
            setSubscriptionMonths( data.subscriptionData.subscriptionMonths )
        }
    }, [data])
    
    
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="landing-main-container">
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
                            <Link to="../home">
                                Inicio
                            </Link>
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
            <div className="landing-section">
                <div className="landing-img-container">
                    
                    <div className='cart-container'>
                        <div className='cart-detail'>
                            {/* <h1>Resumen de tu suscripción: { ( item === '1' ) ? '1 Mes' : ( item === '2' ) ? '3 Meses' : ( item === '3' ) ? '6 Meses' : 'N/A'}</h1> */}
                            <h1>Resumen de tu suscripción</h1>
                            <br/>
                            <div className='cart-subscription-details'>
                                <h3>{ selectedSubscription.subscriptionDescription }</h3>
                                <h3>${ formatearNumero( monthlyPrice ) }/mes</h3>
                            </div>
                            {
                                ( subscriptionDiscount > 0 )
                                ?   <div className='cart-subscription-details'>
                                        <h3>Descuento:</h3>
                                        <h3>{ formatearNumero( 100 * subscriptionDiscount ) }%</h3>
                                    </div>
                                :   null
                            }

                            <div className='cart-subscription-details'>
                                <h3>Duración de la suscripción:</h3>
                                <h3>
                                    {
                                        ( subscriptionMonths > 1 )
                                        ?   `${ subscriptionMonths } meses`
                                        :   `${ subscriptionMonths } mes`
                                    }
                                </h3>
                            </div>
                            <br/>
                            <div className='cart-subscription-details'>
                                <h3>Subtotal:</h3>
                                <h3>${ formatearNumero(subtotalAmount) }</h3>
                            </div>
                            {
                                ( subscriptionDiscount > 0 )
                                ?   <div className='cart-subscription-details'>
                                        <h3>Total descuento:</h3>
                                        <h3>-${ formatearNumero(subscriptionDiscount * subscriptionMonths * monthlyPrice ) }</h3>
                                    </div>
                                :   null
                            }
                            <br/>
                            <div className='cart-subscription-hr'></div>
                            <div className='cart-subscription-details'>
                                <h3>Total:</h3>
                                <h3>${ formatearNumero(totalAmount) }</h3>
                                
                            </div>
                            <br/>
                            {
                                ( isLogged === true )
                                ?   <div className='cart-subscription-actions'>
                                        <Link to="../home" className='btn-action-alt'>Volver</Link>
                                        <button onClick={ payment } className='btn-action'>Continuar</button>
                                    </div>
                                :   <>
                                        <div className='cart-subscription-actions'>
                                            <Link to="../home" className='btn-action-alt'>Volver</Link>
                                            <ModalLoginCard/>

                                        </div>
                                        <h5>¿No tienes una cuenta? <Link to='../auth/register' className="login-link">Registrarme</Link></h5>
                                    </>
                            }
                            
                        </div>
                    </div>
                    

                </div>
            </div>
            <LandingFooter/>
        </div>
    )
}
