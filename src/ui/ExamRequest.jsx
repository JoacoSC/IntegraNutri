import React, { useEffect, useState } from 'react';
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

    const {
        calories_contribution_value,
        carbs_contribution_value,
        lipids_contribution_value,
        proteins_contribution_value,
    } = useSelector( state => state.calculator )

    const {
        hemogramaCompleto = false,
        hematocrito = false,
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
    
  // Retorna la tabla
  return (
    <div className="calculator-main-container">
      <div className="calculator-wrapper">
        <p className="calculator-item-title">Solicitud de exámenes</p>
        <div className="calculator-container calculator-container-border-radius">
            <form>
                <h2>Hematológicos</h2>
                <label>
                    <input type="checkbox" name="hemogramaCompleto" />
                    Hemograma completo 301046
                </label>
                <label>
                    <input type="checkbox" name="hematocrito" />
                    Hematocrito 301036
                </label>
                {/* Agrega otros exámenes hematológicos aquí */}

                <h2>Hormonales</h2>
                {/* Agrega exámenes hormonales aquí */}

                <h2>Orina</h2>
                {/* Agrega exámenes de orina aquí */}

                <h2>Bioquímicos</h2>
                {/* Agrega exámenes bioquímicos aquí */}

                <h2>Glucosa Oral (PTG)</h2>
                {/* Agrega prueba de tolerancia a la glucosa aquí */}
                
                {/* ... Otras secciones ... */}
                
                <textarea name="otherExams" placeholder="Otros exámenes no incluidos en la lista"></textarea>

                {/* Botón de envío u otros elementos que necesites */}
            </form>
        </div>
      </div>
    </div>
  );
};
