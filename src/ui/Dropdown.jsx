import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Modal from 'react-modal';
import './components';
import { Link } from 'react-router-dom';
import { ModalUpdatePatientValues } from './ModalUpdatePatientValues';
import { ModalUpdateCorrectedAge } from './ModalUpdateCorrectedAge';
import { ModalTallaDiana } from './ModalTallaDiana';

export const Dropdown = ({ patientObject }) => {

    const [openDropdown, setOpenDropdown] = useState(false);

    const dropdownMenu = useRef();

    // console.log('gender: ',gender)
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
                    ?   <>
                            <div className='dropdown-menu-container'>
                                <div className='dropdown-item-container'>
                                    <ModalUpdatePatientValues patientObject={ patientObject } />
                                    
                                </div>
                                <div className='dropdown-item-container'>
                                    <ModalUpdateCorrectedAge patientObject={ patientObject } />
                                </div>
                                <div className='dropdown-item-container'>
                                    <ModalTallaDiana patientObject={ patientObject } />
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