import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCaloriesContributionValue,
  setCarbsContributionValue,
  setLipidsContributionValue,
  setProteinsContributionValue
} from "../store/calculator";
import { useForm } from '../hooks';
import { ConfirmationMessage } from '../common';
import { format, fromUnixTime } from 'date-fns';
import { startUpdatingNutritionalIndications } from '../store/currentPatient';

export const NutritionalIndications = () => {
  const dispatch = useDispatch();
  const [calories_adequacy_value, setCalories_adequacy_value] = useState(0)
    const [carbs_adequacy_value, setCarbs_adequacy_value] = useState(0)
    const [lipids_adequacy_value, setLipids_adequacy_value] = useState(0)
    const [proteins_adequacy_value, setProteins_adequacy_value] = useState(0)
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState({ text: '', type: '' });
    const [displayName, setDisplayName] = useState('No ha seleccionado un paciente')
    const [rut, setRut] = useState('xx.xxx.xxx-x')
    const [birthday, setBirthday] = useState('dd/MM/yyyy')

    const textareaRef = useRef(null);

    const {
        calories_contribution_value,
        carbs_contribution_value,
        lipids_contribution_value,
        proteins_contribution_value,
    } = useSelector( state => state.calculator )

    const { uid } = useSelector(state => state.auth);

    const { patients } = useSelector(state => state.patients);

    const {
        nutritionalDiagnosis,
        nutritionalIndications,
        onInputChange,
        formState
    } = useForm();

    const handlePatientChange = (e) => {
        setSelectedPatient(e.target.value);
    };

    const handleAttachTable = async () => {
        const nutritionalIndications = {
            ...formState,
            indicationsDate: {
                d: new Date().getDate().toString(),
                m: (new Date().getMonth() + 1).toString().padStart(2, '0'),
                y: new Date().getFullYear().toString(),
            }
        }
        const patientID = selectedPatient;
        // console.log('nutritionalIndications: ', nutritionalIndications);
        // console.log('patientID: ', patientID);
    
        const message = await dispatch(startUpdatingNutritionalIndications( uid, patientID, nutritionalIndications ));
        const messageType = message === "Ocurrió un error." ? 'error' : 'success';
        setConfirmationMessage({ text: message, type: messageType });
      };

    const handleSelectPatient = () => {
      // Suponiendo que selectedPatient es el id del paciente seleccionado
      const patient = patients.find(p => p.id === selectedPatient);
      if (patient) {
          const { displayName, rut: { formatted }, unixBirthday } = patient;
          setDisplayName(displayName)
          setRut(formatted)
          setBirthday(format( fromUnixTime(unixBirthday), 'dd/MM/yyyy' ))
      } else {
          console.log('Paciente no encontrado');
      }
    };

    const handleContributionValues = () => {
        
        const result = {}

        // dispatch( setCaloriesContributionValue( result.calories ) )
        // dispatch( setCarbsContributionValue( result.carbs ) )
        // dispatch( setLipidsContributionValue( result.lipids ) )
        // dispatch( setProteinsContributionValue( result.proteins ) )

        // setCalories_adequacy_value( parseFloat(((result.calories * 100) / calories_requirement)).toFixed(2) )
        // setCarbs_adequacy_value( parseFloat(((result.carbs * 100) / carbs_requirement)).toFixed(2) )
        // setLipids_adequacy_value( parseFloat(((result.lipids * 100) / lipids_requirement)).toFixed(2) )
        // setProteins_adequacy_value( parseFloat(((result.proteins * 100) / proteins_requirement)).toFixed(2) )
    }
    
    useEffect(() => {
        // setCereal_portion_value( cereal_portion )
        handleContributionValues()
    }, [formState])

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'; // Restablece la altura a automático
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Establece la altura según el contenido
      }
    }, [nutritionalIndications]);

    useEffect(() => {
      if (patients.length > 0) {
          setSelectedPatient(patients[0].id);
      }
  }, [patients]);
    
    
  // Retorna la tabla
  return (
    <div className="calculator-main-container" style={{ borderRadius: '18px' }}>
      <div className="calculator-wrapper">
        <p className="calculator-item-title">Indicaciones nutricionales</p>
        <div className="calculator-container calculator-container-border-radius" style={{ padding: '0 7rem' }}>
            <form className='form-container custom-w-100 custom-flex-row custom-flex-justify-center'>
                <div className='form-section-container custom-w-100 custom-flex-row custom-flex-justify-center'>
                    <div className='form-section custom-w-max-none custom-w-100 custom-gap-1 custom-px-2 custom-py-1'>
                        <h2>Diagnóstico Nutricional</h2>
                        <label className='custom-flex-row custom-w-100'>
                        <input
                            className='form-section-input-text'
                            type='text'
                            name="nutritionalDiagnosis"
                            placeholder=""
                            onChange={onInputChange}
                        ></input>
                        </label>
                        <h2>Indicaciones</h2>
                        <label className='custom-flex-row custom-w-100'>
                        <textarea
                            className='form-section-input-text'
                            ref={textareaRef}
                            name="nutritionalIndications"
                            placeholder="Mis indicaciones nutricionales"
                            onChange={onInputChange}
                            style={{
                              padding: '8px 10px',
                              textAlign: 'justify',
                              resize: 'none', // Evita que el usuario redimensione manualmente el textarea
                              overflow: 'hidden', // Oculta el desbordamiento del contenido
                              height: 'auto', // Establece la altura inicial en automático
                            }}
                        ></textarea>
                        </label>
                    </div>
                </div>

            </form>
        </div>
        <div className='patient-table-attachment-container'>
            <div className='custom-w-100'>
                <div className='custom-flex-row custom-gap-1'>
                    <select className='input-select' onChange={handlePatientChange}>
                    {patients.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                        {patient.displayName}
                        </option>
                    ))}
                    </select>
                    <button className='btn-sm' onClick={handleSelectPatient}>Seleccionar paciente</button>
                </div>
            </div>
            <div className='custom-flex-row custom-w-100 custom-pt-1 custom-gap-2'>
                <div className='custom-flex-column custom-gap-1 custom-w-100 custom-pt-1'>
                    <h3 className='custom-color-white'>Nombre del paciente</h3>
                    <label className='custom-flex-row custom-gap-05 custom-w-100'>
                        <input type='text' className='input-select custom-w-100 custom-cursor-pointer-auto' value={ displayName } readOnly/>
                    </label>
                </div>
            </div>
            <div className='custom-flex-row custom-w-100 custom-pt-1 custom-gap-2'>
                <div className='custom-flex-column custom-gap-1 w-50 custom-pt-1'>
                    <h3 className='custom-color-white'>RUT</h3>
                    <label className='custom-flex-row custom-gap-05 custom-w-100'>
                        <input type='text' className='input-select custom-w-100 custom-cursor-pointer-auto' value={ rut } readOnly/>
                    </label>
                </div>
                <div className='custom-flex-column custom-gap-1 w-50 custom-pt-1'>
                    <h3 className='custom-color-white'>Fecha de nacimiento</h3>
                    <label className='custom-flex-row custom-gap-05 custom-w-100'>
                        <input type='text' className='input-select custom-w-100 custom-cursor-pointer-auto' value={ birthday } readOnly/>
                    </label>
                </div>
            </div>
            <div className='custom-flex-row custom-w-100 custom-pt-2'>
                <button className='btn-sm' onClick={handleAttachTable}>Adjuntar examen al paciente seleccionado</button>
            </div>
            <ConfirmationMessage message={confirmationMessage} />
        </div>
      </div>
    </div>
  );
};
