import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Modal from 'react-modal';
import './components';
import { Link } from 'react-router-dom';
import { ModalUpdatePatientValues, ModalUpdateCorrectedAge, ModalPerimetroCefalico, ModalPerimetroCintura, ModalPresionArterial, ModalUpdateEstadioTanner } from './';
import { ModalTallaDiana } from './ModalTallaDiana';
import { useSelector } from 'react-redux';

export const Dropdown = ({ patientObject }) => {

    const [openDropdown, setOpenDropdown] = useState(false);

    const dropdownMenu = useRef();

    const { membership } = useSelector(state => state.subscription);
    const { age, biologicalSex } = useSelector( state => state.currentPatient )
    const { ageForCalcs } = patientObject;

    // console.log('biologicalSex: ',biologicalSex)
    // console.log('age: ',age)

    // const {
    //     type,
    //     age,
    //     uid,
    //     patientID,
    //     weight,
    //     lastWeight,
    //     stature,
    //     lastStature,
    //     imc,
    // } = updatePatientValuesObject;

    const buttonTest = () => {
        console.log('first')
    }

    // useEffect(() => {
    //     document.addEventListener('mousedown', ( event ) => {
    //         if( !dropdownMenu.current.contains( event.target ) ){
    //             setOpenDropdown(false)

    //         }
    //     });
    // })

    // console.log('openDropdown: ',openDropdown)
    // console.log('updatePatientValuesObject: ',updatePatientValuesObject)
    // console.log('openDropdown',openDropdown)


    return (
        <>
            <div className='dropdown-container' ref={ dropdownMenu }>
                
                <button className="dropdown-btn" type="button" onClick={() => setOpenDropdown(!openDropdown)}>
                    Evaluaciones
                    {/* <label className='select_arrow'></label> */}
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
                                        ?   ( age.y >= 8 && age.y <= 14 )
                                            ?   <div className='dropdown-item-container'>
                                                    <ModalUpdateEstadioTanner patientObject={ patientObject } />
                                                </div>
                                            :   null
                                        :   null
                                    }
                                    {
                                        ( biologicalSex === 'Masculino' )
                                        ?   ( age.y >= 10 && age.y <= 15 )
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
                                        ( age.y < 3 )
                                        ?   <div className='dropdown-item-container'>
                                                <ModalPerimetroCefalico patientObject={ patientObject } />
                                            </div>
                                        :   null
                                    }
                                    {
                                        ( age.y > 5 && age.y < 20 )
                                        ?   <div className='dropdown-item-container'>
                                                <ModalPerimetroCintura patientObject={ patientObject } />
                                            </div>
                                        :   null
                                    }
                                    {
                                        ( age.y > 0 && age.y < 18 )
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
                                <div className='dropdown-menu-container'>
                                    <div className='dropdown-item-container'>
                                        <ModalUpdatePatientValues patientObject={ patientObject } />
                                        
                                    </div>
                                    
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