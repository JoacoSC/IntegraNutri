import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Modal from 'react-modal';
import './components';
import { Link } from 'react-router-dom';
import { ModalUpdatePatientValues, ModalUpdateCorrectedAge, ModalPerimetroCefalico, ModalPerimetroCintura, ModalPresionArterial, ModalUpdateEstadioTanner, ModalPresionArterialAdultos } from './';
import { ModalTallaDiana } from './ModalTallaDiana';
import { useSelector } from 'react-redux';

export const Dropdown = ({ patientObject }) => {

    const [openDropdown, setOpenDropdown] = useState(false);

    const dropdownMenu = useRef();

    const { membership } = useSelector(state => state.subscription);
    const { age, biologicalSex } = useSelector( state => state.currentPatient )
    const { ageForCalcs } = patientObject;

    const buttonTest = () => {
        console.log('first')
    }

    return (
        <>
            <div className='dropdown-container' ref={ dropdownMenu }>
                
                <button className="dropdown-btn" type="button" onClick={() => setOpenDropdown(!openDropdown)}>
                    Evaluaciones
                </button>
                
                {
                    ( openDropdown )
                    ?   ( ageForCalcs.y < 19 || (ageForCalcs.y === 19 && ageForCalcs.m <= 1) ) // Pacientes no adultos
                        ?   <>
                                <div className='dropdown-menu-container'>
                                    <div className='dropdown-item-container'>
                                        <ModalUpdatePatientValues patientObject={ patientObject } />
                                    </div>
                                    <div className='dropdown-item-container'>
                                        <ModalUpdateCorrectedAge patientObject={ patientObject } />
                                    </div>
                                    {
                                        ( biologicalSex === 'Femenino' )
                                        ?   ( ageForCalcs.y >= 8 && ageForCalcs.y <= 14 )
                                            ?   <div className='dropdown-item-container'>
                                                    <ModalUpdateEstadioTanner patientObject={ patientObject } />
                                                </div>
                                            :   null
                                        :   null
                                    }
                                    {
                                        ( biologicalSex === 'Masculino' )
                                        ?   ( ageForCalcs.y >= 10 && ageForCalcs.y <= 15 )
                                            ?   <div className='dropdown-item-container'>
                                                    <ModalUpdateEstadioTanner patientObject={ patientObject } />
                                                </div>
                                            :   null
                                        :   null

                                    }
                                    
                                    <div className='dropdown-item-container'>
                                        <ModalTallaDiana patientObject={ patientObject } />
                                    </div>
                                    {
                                        ( ageForCalcs.y < 3 )
                                        ?   <div className='dropdown-item-container'>
                                                <ModalPerimetroCefalico patientObject={ patientObject } />
                                            </div>
                                        :   null
                                    }
                                    {
                                        ( ageForCalcs.y > 5 && ageForCalcs.y < 20 )
                                        ?   <div className='dropdown-item-container'>
                                                <ModalPerimetroCintura patientObject={ patientObject } />
                                            </div>
                                        :   null
                                    }
                                    {
                                        ( ageForCalcs.y > 0 && ageForCalcs.y < 18 )
                                        ?   <div className='dropdown-item-container'>
                                                <ModalPresionArterial patientObject={ patientObject } />
                                            </div>
                                        :   null
                                    }
                                    {/* <div className='dropdown-item-container'>
                                        <button onClick={ buttonTest } className='dropdown-item-btn'>
                                            Soy un item
                                        </button>
                                    </div> */}
                                </div>
                            </>
                        :   <>  
                                {/* Pacientes adultos */}
                                <div className='dropdown-menu-container'>
                                    <div className='dropdown-item-container'>
                                        <ModalUpdatePatientValues patientObject={ patientObject } />
                                        
                                    </div>
                                    {
                                        ( ageForCalcs.y >= 18 )
                                        ?   <div className='dropdown-item-container'>
                                                <ModalPresionArterialAdultos patientObject={ patientObject } />
                                            </div>
                                        :   null
                                    }
                                    {/* <div className='dropdown-item-container'>
                                        <button onClick={ buttonTest } className='dropdown-item-btn'>
                                            Soy un item
                                        </button>
                                    </div> */}
                                </div>
                            </> 
                        
                    :   null
                }

            </div>
        </>
    )
}