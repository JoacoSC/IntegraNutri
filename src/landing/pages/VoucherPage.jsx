import { Link } from 'react-router-dom'
import IntegraNutri_ellipse from '../../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import IntegraNutri_texto from '../../../assets/imgs/auth/IntegraNutri_Texto.svg'
import Menu_icon from '../../../assets/imgs/landing/menu_icon.svg'
import { useEffect, useRef, useState } from 'react'
import { LandingFooter } from '../../ui/LandingFooter'

import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useDispatch, useSelector } from 'react-redux'
import { ModalLoginCart } from '../../ui/ModalLoginCart'
import { useFetch } from '../../hooks'
import { startSetBuyOrder } from '../../store/buyOrder'

export const VoucherPage = () => {

    const location = useLocation();

    const dispatch = useDispatch();

    const companyName = 'IntegraNutri'

    const { status = '', buyOrder = '' } = queryString.parse( location.search );

    const { isLogged } = useSelector( state => state.auth );
    const { 
        transaction_date= '2024-02-06T02:50:00.314Z',
        amount= 0,
        response_code= 0,
        authorization_code= '1234',
        session_id= 'S-00000',
        payment_type_code= 'VN',
        installments_number= 0,
        vci= 'TSY',
        buy_order= 'O-1-123456',
        card_detail= { card_number: '123' },
        accounting_date= '0101',
        status: result = 'CHECKING',
    } = useSelector( state => state.buyOrder );

    const topRef = useRef();
    const menuCheckbox = useRef();

    const [formattedTransactionDate, setFormattedTransactionDate] = useState(false)
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

    const formatTransactionDate = ( transaction_date ) => {
        // Fecha en formato ISO 8601
        const isoDateString = transaction_date;

        // Crear un objeto Date a partir de la cadena ISO 8601
        const fechaISO8601 = new Date(isoDateString);

        // Configurar la zona horaria a Santiago de Chile (GMT-3)
        const options = { timeZone: 'America/Santiago' };

        // Formatear la fecha con la zona horaria de Santiago de Chile
        setFormattedTransactionDate( fechaISO8601.toLocaleString('es-CL', options) )

    }

    const formatPaymentTypeCode = ( payment_type_code ) => {
        
        if( payment_type_code ){
            // TODO: Consultar por tipos de pago en Slack
        }
    }

    useEffect(() => {
        handleScrollToTop();
    }, [])

    useEffect(() => {

        if( buyOrder !== '0' || buyOrder !== undefined ){

            dispatch( startSetBuyOrder( buyOrder ) )
        }
    }, [buyOrder])

    useEffect(() => {

        formatTransactionDate( transaction_date );

    }, [transaction_date])

    useEffect(() => {

        formatPaymentTypeCode( payment_type_code );

    }, [payment_type_code])
    
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
                          <h1>Comprobante de pago</h1>
                          <br/>
                          <div className='voucher-details'>
                            <strong>Nombre del comercio:</strong>
                            <p>{ companyName }</p>
                          </div>
                          <div className='voucher-details'>
                            <strong>Orden de compra:</strong>
                            <p>{ buyOrder }</p>
                          </div>
                          <div className='voucher-details'>
                            <strong>Fecha y hora:</strong>
                            <p>{ formattedTransactionDate }</p>
                          </div>
                          <div className='voucher-details'>
                            <strong>Monto:</strong>
                            <p>${ amount } CLP</p>
                          </div>
                          <div className='voucher-details'>
                            <strong>Código de autorización:</strong>
                            <p>{ authorization_code }</p>
                          </div>
                          <div className='voucher-details'>
                            <strong>Tipo de pago:</strong>
                            <p>{ payment_type_code }</p>
                          </div>
                          <div className='voucher-details'>
                            <strong>Cuatro últimos dígitos de la tarjeta:</strong>
                            <p>{ card_detail.card_number }</p>
                          </div>
                          <div className='voucher-details'>
                            <strong>Descripción de la suscripción:</strong>
                            {/* TODO: Encontrar una forma de guardar la info
                            de la suscripción seleccionada y mostrar la info acá */}
                            <p>{ card_detail.card_number }</p>
                          </div>
                          <div className='voucher-details'>
                            <strong></strong>
                            <p>{ result }</p>
                          </div>
                          <br/>
                          
                      </div>
                  </div>
                  

              </div>
          </div>
          <LandingFooter/>
      </div>
  )
}
