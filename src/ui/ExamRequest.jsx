import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCaloriesContributionValue,
  setCarbsContributionValue,
  setLipidsContributionValue,
  setProteinsContributionValue
} from "../store/calculator";
import { useForm } from '../hooks';

export const ExamRequest = () => {
  const dispatch = useDispatch();
  const [calories_adequacy_value, setCalories_adequacy_value] = useState(0)
    const [carbs_adequacy_value, setCarbs_adequacy_value] = useState(0)
    const [lipids_adequacy_value, setLipids_adequacy_value] = useState(0)
    const [proteins_adequacy_value, setProteins_adequacy_value] = useState(0)

    const textareaRef = useRef(null);

    const {
        calories_contribution_value,
        carbs_contribution_value,
        lipids_contribution_value,
        proteins_contribution_value,
    } = useSelector( state => state.calculator )

    const {
        hemogramaCompleto = false,
        hematocrito = false,
        otherExams,
        onInputChange,
        formState
    } = useForm();

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
                            <input type="checkbox" name="hemograma" />
                            <p>Hemograma completo 301046</p>
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="hematocrito" />
                            Hematocrito 301036
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="hemoglobina" />
                            Hemoglobina 301038
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="leucocitos" />
                            Recuento de leucocitos 301065
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="plaquetas" />
                            Recuento de plaquetas 301067
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="protrombina" />
                            Tiempo de protrombina 301059
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="ferritina" />
                            Ferritina 301026
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="transferrina" />
                            Transferrina 201082
                        </label>
                    </div>
                    <div className='form-section'>
                        <h2>Otros</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="vitaminaD" />
                            Vitamina D 302078
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="vitaminaB12" />
                            Vitamina B12 301087
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="acidoFolico" />
                            Ácido fólico 302078
                        </label>

                    </div>
                    <div className='form-section'>
                        <h2>Bioquímicos</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="glicemia" />
                            Glicemia 302047
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="acidoUrico" />
                            Ácido úrico 302005
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="albumina" />
                            Albúmina 302060
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="bilirrubina" />
                            Bilirrubina total 302013
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="colesterolTotal" />
                            Colesterol total 302067
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="creatinina" />
                            Creatinina 302023
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="curvaGlicemia" />
                            Curva de glicemia 302048
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="electrolitos" />
                            Electrolitos plasmáticos 302032
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="fosforo" />
                            Fósforo 302042
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="glucosaOral" />
                            Prueba De Tolerancia A La Glucosa Oral (Ptgo) 0302048
                        </label>

                    </div>
                </div>
                <div className='form-section-container'>
                    <div className='form-section'>

                    <h2>Hormonales</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="curvaInsulina" />
                            Curva de insulina 303031
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="Insulina" />
                            Insulina 303017
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="TSH" />
                            TSH 303024
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="T3" />
                            T3 303028
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="T4" />
                            T4 303027
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="T4libre" />
                            T4 libre 303026
                        </label>
                    </div>

                    <div className='form-section'>
                        <h2>Orina</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="orinaCompleta" />
                            Orina completa 309022
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="urocultivo" />
                            Urocultivo 309011
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="proteinuria" />
                            Proteinuria 24 hrs 309028
                        </label>

                    </div>
                    <div className='form-section'>
                        <h2>Serológicos</h2>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="RPR" />
                            RPR 305038
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="VDRL" />
                            VDRL 305042
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="hemoglobinaGlicosilada" />
                            Hemoglobina glicosilada 301041
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="nitrógenoUreico" />
                            Nitrógeno ureico 302057
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="perfilBioquímico" />
                            Perfil bioquímico 302075
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="perfilLipídico" />
                            Perfil lipídico 302034
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="perfilHepático" />
                            Perfil hepático 302076
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="uremia" />
                            Uremia 302057
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="transaminasas" />
                            Transaminasas (GOT, GPT) 302063
                        </label>
                        <label className='flex-row gap-05'>
                            <input type="checkbox" name="RAC" />
                            RAC 309010
                        </label>
                    </div>
                    <div className='form-section'>
                    <textarea
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
      </div>
    </div>
  );
};
