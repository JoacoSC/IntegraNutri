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
import { startUpdatingExamRequest } from '../store/currentPatient';

export const ExamRequest = () => {
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
        hemograma,
        hematocrito,
        hemoglobina,
        leucocitos,
        plaquetas,
        protrombina,
        ferritina,
        fierroSérico,
        transferrina,
        vitaminaD,
        vitaminaB12,
        acidoFolico,
        glicemia,
        acidoUrico,
        albumina,
        bilirrubina,
        colesterolTotal,
        creatinina,
        curvaGlicemia,
        electrolitos,
        fosforo,
        glucosaOral,
        curvaInsulina,
        Insulina,
        TSH,
        T3,
        T4,
        T4libre,
        orinaCompleta,
        urocultivo,
        proteinuria,
        RPR,
        VDRL,
        hemoglobinaGlicosilada,
        nitrógenoUreico,
        perfilBioquímico,
        perfilLipídico,
        perfilHepático,
        uremia,
        transaminasas,
        RAC,
        otherExams,
        onInputChange,
        formState
    } = useForm();

    const handlePatientChange = (e) => {
        setSelectedPatient(e.target.value);
    };

    const handleAttachTable = async () => {
        const examRequest = {
                ...formState,
                examDate: {
                    d: new Date().getDate().toString(),
                    m: (new Date().getMonth() + 1).toString().padStart(2, '0'),
                    y: new Date().getFullYear().toString(),
                }
            }
        // const examRequest = formState;
        const patientID = selectedPatient;
        // console.log('examRequest: ', examRequest);
        // console.log('patientID: ', patientID);
    
        const message = await dispatch(startUpdatingExamRequest( uid, patientID, examRequest ));
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
    }, [otherExams]);

    useEffect(() => {
        if (patients.length > 0) {
            setSelectedPatient(patients[0].id);
        }
    }, [patients]);
    
    
  // Retorna la tabla
  return (
    <div className="calculator-main-container">
      <div className="calculator-wrapper">
        <p className="calculator-item-title">Solicitud de exámenes</p>
        <div className="calculator-container calculator-container-border-radius">
            <form className='form-container'>
                <div className='form-section-container'>
                    <div className='form-section'>
                        <h2>Hematológicos</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="hemograma" onChange={onInputChange}/>
                            <p>Hemograma completo 301046</p>
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="hematocrito" onChange={onInputChange}/>
                            Hematocrito 301036
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="hemoglobina" onChange={onInputChange}/>
                            Hemoglobina 301038
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="leucocitos" onChange={onInputChange}/>
                            Recuento de leucocitos 301065
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="plaquetas" onChange={onInputChange}/>
                            Recuento de plaquetas 301067
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="protrombina" onChange={onInputChange}/>
                            Tiempo de protrombina 301059
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="ferritina" onChange={onInputChange}/>
                            Ferritina 301026
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="fierroSérico" onChange={onInputChange}/>
                            Fierro Sérico 301028
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="transferrina" onChange={onInputChange}/>
                            Transferrina 201082
                        </label>
                    </div>
                    <div className='form-section'>
                        <h2>Otros</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="vitaminaD" onChange={onInputChange}/>
                            Vitamina D 302078
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="vitaminaB12" onChange={onInputChange}/>
                            Vitamina B12 301087
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="acidoFolico" onChange={onInputChange}/>
                            Ácido fólico 302078
                        </label>

                    </div>
                    <div className='form-section'>
                        <h2>Bioquímicos</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="glicemia" onChange={onInputChange}/>
                            Glicemia 302047
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="acidoUrico" onChange={onInputChange}/>
                            Ácido úrico 302005
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="albumina" onChange={onInputChange}/>
                            Albúmina 302060
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="bilirrubina" onChange={onInputChange}/>
                            Bilirrubina total 302013
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="colesterolTotal" onChange={onInputChange}/>
                            Colesterol total 302067
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="creatinina" onChange={onInputChange}/>
                            Creatinina 302023
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="curvaGlicemia" onChange={onInputChange}/>
                            Curva de glicemia 302048
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="electrolitos" onChange={onInputChange}/>
                            Electrolitos plasmáticos 302032
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="fosforo" onChange={onInputChange}/>
                            Fósforo 302042
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="glucosaOral" onChange={onInputChange}/>
                            Prueba De Tolerancia A La Glucosa Oral (Ptgo) 0302048
                        </label>

                    </div>
                </div>
                <div className='form-section-container'>
                    <div className='form-section'>

                    <h2>Hormonales</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="curvaInsulina" onChange={onInputChange}/>
                            Curva de insulina 303031
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="Insulina" onChange={onInputChange}/>
                            Insulina 303017
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="TSH" onChange={onInputChange}/>
                            TSH 303024
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="T3" onChange={onInputChange}/>
                            T3 303028
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="T4" onChange={onInputChange}/>
                            T4 303027
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="T4libre" onChange={onInputChange}/>
                            T4 libre 303026
                        </label>
                    </div>

                    <div className='form-section'>
                        <h2>Orina</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="orinaCompleta" onChange={onInputChange}/>
                            Orina completa 309022
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="urocultivo" onChange={onInputChange}/>
                            Urocultivo 309011
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="proteinuria" onChange={onInputChange}/>
                            Proteinuria 24 hrs 309028
                        </label>

                    </div>
                    <div className='form-section'>
                        <h2>Serológicos</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="RPR" onChange={onInputChange}/>
                            RPR 305038
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="VDRL" onChange={onInputChange}/>
                            VDRL 305042
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="hemoglobinaGlicosilada" onChange={onInputChange}/>
                            Hemoglobina glicosilada 301041
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="nitrógenoUreico" onChange={onInputChange}/>
                            Nitrógeno ureico 302057
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="perfilBioquímico" onChange={onInputChange}/>
                            Perfil bioquímico 302075
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="perfilLipídico" onChange={onInputChange}/>
                            Perfil lipídico 302034
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="perfilHepático" onChange={onInputChange}/>
                            Perfil hepático 302076
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="uremia" onChange={onInputChange}/>
                            Uremia 302057
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="transaminasas" onChange={onInputChange}/>
                            Transaminasas (GOT, GPT) 302063
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="RAC" onChange={onInputChange}/>
                            RAC 309010
                        </label>
                    </div>
                    <div className='form-section'>
                    <textarea
                        className='form-section-input-text'
                        ref={textareaRef}
                        name="otherExams"
                        placeholder="Otros exámenes no incluidos en la lista"
                        onChange={onInputChange}
                        style={{
                          padding: '8px 10px',
                          textAlign: 'justify',
                          resize: 'none', // Evita que el usuario redimensione manualmente el textarea
                          overflow: 'hidden', // Oculta el desbordamiento del contenido
                          height: 'auto', // Establece la altura inicial en automático
                        }}
                    ></textarea>


                    </div>

                </div>
                

                {/* Botón de envío u otros elementos que necesites */}
            </form>
        </div>
        <div className='patient-table-attachment-container'>
            <div className='w-100'>
                <div className='flex-row gap-1'>
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
            <div className='flex-row w-100 pt-1 gap-2'>
                <div className='flex-column gap-1 w-100 pt-1'>
                    <h3 className='color-white'>Nombre del paciente</h3>
                    <label className='flex-row gap-05 w-100'>
                        <input type='text' className='input-select w-100 cursor-pointer-auto' value={ displayName } readOnly/>
                    </label>
                </div>
            </div>
            <div className='flex-row w-100 pt-1 gap-2'>
                <div className='flex-column gap-1 w-50 pt-1'>
                    <h3 className='color-white'>RUT</h3>
                    <label className='flex-row gap-05 w-100'>
                        <input type='text' className='input-select w-100 cursor-pointer-auto' value={ rut } readOnly/>
                    </label>
                </div>
                <div className='flex-column gap-1 w-50 pt-1'>
                    <h3 className='color-white'>Fecha de nacimiento</h3>
                    <label className='flex-row gap-05 w-100'>
                        <input type='text' className='input-select w-100 cursor-pointer-auto' value={ birthday } readOnly/>
                    </label>
                </div>
            </div>
            <div className='flex-row w-100 pt-2'>
                <button className='btn-sm' onClick={handleAttachTable}>Adjuntar examen al paciente seleccionado</button>
            </div>
            <ConfirmationMessage message={confirmationMessage} />
        </div>
      </div>
    </div>
  );
};
