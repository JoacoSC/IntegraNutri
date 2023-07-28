import { useRef, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import Modal from 'react-modal';
import './components';
import { Link } from 'react-router-dom';
import { ModalUpdatePatientValues } from './ModalUpdatePatientValues';

export const Dropdown = ({ updatePatientValuesObject }) => {

    const [openDropdown, setOpenDropdown] = useState(false);

    const form = useRef();

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

    // console.log('openDropdown: ',openDropdown)
    console.log('updatePatientValuesObject: ',updatePatientValuesObject)
    console.log('openDropdown',openDropdown)


    return (
        <>
            <div className='dropdown-container'>
                
                
                {
                    ( openDropdown )
                    ?   <>
                            <div className='dropdown-menu-container'>
                                <div className='dropdown-item-container'>
                                    <ModalUpdatePatientValues updatePatientValuesObject = { updatePatientValuesObject } />
                                    
                                </div>
                                <div className='dropdown-item-container'>
                                    <button onClick={ buttonTest } className='dropdown-item-btn'>
                                        Soy un item
                                    </button>
                                </div>
                                <div className='dropdown-item-container'>
                                    <button onClick={ buttonTest } className='dropdown-item-btn'>
                                        Soy un item
                                    </button>
                                </div>
                                <div className='dropdown-item-container'>
                                    <button onClick={ buttonTest } className='dropdown-item-btn'>
                                        Soy un item
                                    </button>
                                </div>
                                <div className='dropdown-item-container'>
                                    <button onClick={ buttonTest } className='dropdown-item-btn'>
                                        Soy un item
                                    </button>
                                </div>
                            </div>
                        </>
                    :   null
                }
                <button className="dropdown-btn" type="button" onClick={() => setOpenDropdown(!openDropdown)}>
                    Evaluaciones
                    <label className='select_arrow'></label>
                </button>

            </div>
        </>
    )
}