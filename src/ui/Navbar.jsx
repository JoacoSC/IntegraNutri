import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './components';

import IntegraNutri_ellipse from '../../assets/imgs/navbar/IntegraNutri_ellipse.svg'
import Home_sm from '../../assets/imgs/navbar/Home_sm.svg'
import Patients from '../../assets/imgs/navbar/Patients.svg'
import Calendar_sm from '../../assets/imgs/navbar/Calendar_sm.svg'
import Stats_sm from '../../assets/imgs/navbar/Stats_sm.svg'
import Chat_sm from '../../assets/imgs/navbar/Chat_sm.svg'
import Notes_sm from '../../assets/imgs/navbar/Notes_sm.svg'
import Communities_sm from '../../assets/imgs/navbar/Communities_sm.svg'
import Medical_exams_sm from '../../assets/imgs/navbar/Medical_exams_sm.svg'
import Calc_sm from '../../assets/imgs/navbar/Calc_sm.svg'
import Files_sm from '../../assets/imgs/navbar/Files_sm.svg'
import Dishes_sm from '../../assets/imgs/navbar/Dishes_sm.svg'
import Settings_sm from '../../assets/imgs/navbar/Settings_sm.svg'
import Lock from '../../assets/imgs/navbar/Lock.svg'

import Logout from '../../assets/imgs/navbar/Log_out.svg'

import { startLogout } from '../store/auth';

export const Navbar = () => {

    const { isNutritionistStatus } = useSelector( state => state.auth)

    const dispatch = useDispatch();

    const onLogout = () => {
        
        dispatch( startLogout() );

    }

    return(
        <div className="navbar">
            <ul className="nav__list">
                <li className="nav__item__logo" data-tooltip="NutritionistApp">
                    <a href="#">
                        <img src={ IntegraNutri_ellipse } className="logo-item" alt="Icono IntegraNutri"/>                    
                    </a>
                </li>
                {   (isNutritionistStatus)
                    ?   <>
                            <li className="nav__item" data-tooltip="Inicio">
                            <Link to="../">
                                <img src={ Home_sm } className="filter-clr" alt="Icono Inicio"/>
                                <div className="btn-ellipse"></div>
                            </Link>
                            </li>
                            <li className="nav__item" data-tooltip="Pacientes">
                                    <Link to="../myPatients">
                                    <img src={ Patients } className="filter-clr" alt="Icono Pacientes"/>
                                    <div className="btn-ellipse"></div>
                                    </Link>
                            </li>
                            <li className="nav__item" data-tooltip="Calendario">
                                <a href="#">
                                    <img src={ Calendar_sm } className="filter-clr" alt="Icono Calendario"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Estadísticas">
                                <a href="#">
                                    <img src={ Stats_sm } className="filter-clr" alt="Icono Estadísticas"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Mensajes">
                                <a href="#">
                                    <img src={ Chat_sm } className="filter-clr" alt="Icono Mensajes"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Notas">
                                <a href="#">
                                    <img src={ Notes_sm } className="filter-clr" alt="Icono Notas"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Comunidad">
                                <a href="#">
                                    <img src={ Communities_sm } className="filter-clr" alt="Icono Comunidad"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Exámenes">
                                <a href="#">
                                    <img src={ Medical_exams_sm } className="filter-clr" alt="Icono Exámenes"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Calculadora">
                                <a href="#">
                                    <img src={ Calc_sm } className="filter-clr" alt="Icono Calculadora"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Archivos">
                                <a href="#">
                                    <img src={ Files_sm } className="filter-clr" alt="Icono Archivos"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Comidas">
                                <a href="#">
                                    <img src={ Dishes_sm } className="filter-clr" alt="Icono Comidas"/>
                                    <div className="btn-ellipse"></div>
                                </a>
                            </li>
                            <li className="nav__item" data-tooltip="Configuración">
                                <Link to="../settings">
                                    <img src={ Settings_sm } className="filter-clr" alt="Icono Ajustes"/>
                                    <div className="btn-ellipse"></div>
                                </Link>
                                
                            </li>
                            <li className="nav__item" data-tooltip="Cerrar Sesión">
                                <Link onClick={ onLogout }>
                                    <img src={ Logout } className="filter-clr" alt="Icono Cerrar Sesión"/>
                                    <div className="btn-ellipse"></div>
                                </Link>
                            </li>
                        </>
                    :   <>
                            <li className="nav__item" data-tooltip="Inicio">
                                <Link to="#">
                                    <img src={ Home_sm } className="filter-clr" alt="Icono Inicio"/>
                                    <div className="btn-ellipse"></div>
                                </Link>
                            </li>
                            <li className="nav__item" data-tooltip="Cambiar contraseña">
                                <Link to="../passwordReset">
                                    <img src={ Lock } className="filter-clr" alt="Icono Contraseña"/>
                                    <div className="btn-ellipse"></div>
                                </Link>
                            </li>
                            <li className="nav__item" data-tooltip="Cerrar Sesión">
                                <Link onClick={ onLogout }>
                                    <img src={ Logout } className="filter-clr" alt="Icono Cerrar Sesión"/>
                                    <div className="btn-ellipse"></div>
                                </Link>
                            </li>
                        </>
                }
                
                
            </ul>
        </div> 
    )
}
