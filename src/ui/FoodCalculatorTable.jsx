import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCaloriesContributionValue,
  setCarbsContributionValue,
  setLipidsContributionValue,
  setProteinsContributionValue
} from "../store/calculator";
import { useForm } from '../hooks';

export const FoodCalculatorTable = () => {
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
        cereal_portion = "0",
        gen_veg_portion = "0",
        free_veg_portion = "0",
        fruit_portion = "0",
        hi_fat_meat = "0",
        low_fat_meat = "0",
        legumes_portion = "0",
        hi_fat_dairy_portion = "0",
        mid_fat_dairy_portion = "0",
        low_fat_dairy_portion = "0",
        oil_portion = "0",
        hi_lipid_portion = "0",
        sugar_portion = "0",
        calories_requirement = "Infinity",
        carbs_requirement = "Infinity",
        lipids_requirement = "Infinity",
        proteins_requirement = "Infinity",
        onInputChange,
        formState
    } = useForm();

    const handleContributionValues = () => {
        
        const result = {
            calories:   (cereal_portion * 140)
                        + (gen_veg_portion * 30)
                        + (free_veg_portion * 10)
                        + (fruit_portion * 65)
                        + (hi_fat_meat * 120)
                        + (low_fat_meat * 65)
                        + (legumes_portion * 170)
                        + (hi_fat_dairy_portion * 110)
                        + (mid_fat_dairy_portion * 85)
                        + (low_fat_dairy_portion * 70)
                        + (oil_portion * 180)
                        + (hi_lipid_portion * 175)
                        + (sugar_portion * 20),
            carbs:      (cereal_portion * 30.0)
                        + (gen_veg_portion * 5.0)
                        + (free_veg_portion * 2.5)
                        + (fruit_portion * 15.0)
                        + (hi_fat_meat * 1.0)
                        + (low_fat_meat * 1.0)
                        + (legumes_portion * 30.0)
                        + (hi_fat_dairy_portion * 9.0)
                        + (mid_fat_dairy_portion * 9.0)
                        + (low_fat_dairy_portion * 10.0)
                        + (oil_portion * 0.0)
                        + (hi_lipid_portion * 5.0)
                        + (sugar_portion * 5.0),
            lipids:     (cereal_portion * 1.0)
                        + (gen_veg_portion * 0)
                        + (free_veg_portion * 0)
                        + (fruit_portion * 0)
                        + (hi_fat_meat * 8.0)
                        + (low_fat_meat * 2.0)
                        + (legumes_portion * 1.0)
                        + (hi_fat_dairy_portion * 6.0)
                        + (mid_fat_dairy_portion * 3.0)
                        + (low_fat_dairy_portion * 0.0)
                        + (oil_portion * 20.0)
                        + (hi_lipid_portion * 15.0)
                        + (sugar_portion * 0),
            proteins:   (cereal_portion * 3.0)
                        + (gen_veg_portion * 2.0)
                        + (free_veg_portion * 0)
                        + (fruit_portion * 1.0)
                        + (hi_fat_meat * 11.0)
                        + (low_fat_meat * 11.0)
                        + (legumes_portion * 11.0)
                        + (hi_fat_dairy_portion * 5.0)
                        + (mid_fat_dairy_portion * 5.0)
                        + (low_fat_dairy_portion * 7.0)
                        + (oil_portion * 0)
                        + (hi_lipid_portion * 5.0)
                        + (sugar_portion * 0),
        }

        dispatch( setCaloriesContributionValue( result.calories ) )
        dispatch( setCarbsContributionValue( result.carbs ) )
        dispatch( setLipidsContributionValue( result.lipids ) )
        dispatch( setProteinsContributionValue( result.proteins ) )

        setCalories_adequacy_value( parseFloat(((result.calories * 100) / calories_requirement)).toFixed(2) )
        setCarbs_adequacy_value( parseFloat(((result.carbs * 100) / carbs_requirement)).toFixed(2) )
        setLipids_adequacy_value( parseFloat(((result.lipids * 100) / lipids_requirement)).toFixed(2) )
        setProteins_adequacy_value( parseFloat(((result.proteins * 100) / proteins_requirement)).toFixed(2) )
    }
    
    useEffect(() => {
        // setCereal_portion_value( cereal_portion )
        handleContributionValues()
    }, [formState])
    
  // Retorna la tabla
  return (
    <div className="calculator-content-wrapper">
        <div className="calculator-main-container">
        <div className="calculator-wrapper">
            <p className="calculator-item-title">Calculadora de alimentos</p>
            <div className="calculator-container calculator-container-border-radius">
                <table className="calculator-table">
                    <tbody>

                        <tr>
                            <th colSpan="2">Grupo de alimentos</th>
                            <th>Porciones</th>
                            <th>Calorías</th>
                            <th>Carbohidratos</th>
                            <th>Lípidos</th>
                            <th>Proteínas</th>
                        </tr>
                        <tr>
                            <th colSpan="2">Cereales, papas y legumbres frescas</th>
                            <td className="portion-input-container">
                                <input name="cereal_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (cereal_portion == 0)
                                        ?   '140'
                                        :   cereal_portion * 140
                                }
                            </td>
                            <td>
                                {
                                    (cereal_portion == 0)
                                        ?   '30'
                                        :   cereal_portion * 30
                                }
                            </td>
                            <td>
                                {
                                    (cereal_portion == 0)
                                        ?   '1,0'
                                        :   cereal_portion * 1.0
                                }
                            </td>
                            <td>
                                {
                                    (cereal_portion == 0)
                                        ?   '3,0'
                                        :   cereal_portion * 3.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Verduras</th>
                            <td>En general</td>
                            <td className="portion-input-container">
                                <input name="gen_veg_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (gen_veg_portion == 0)
                                        ?   '30'
                                        :   gen_veg_portion * 30
                                }
                            </td>
                            <td>
                                {
                                    (gen_veg_portion == 0)
                                        ?   '5,0'
                                        :   gen_veg_portion * 5.0
                                }
                            </td>
                            <td>
                                {
                                    (gen_veg_portion == 0)
                                        ?   '0,0'
                                        :   gen_veg_portion * 0.0
                                }
                            </td>
                            <td>
                                {
                                    (gen_veg_portion == 0)
                                        ?   '2,0'
                                        :   gen_veg_portion * 2.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Libre consumo</td>
                            <td className="portion-input-container">
                                <input name="free_veg_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (free_veg_portion == 0)
                                        ?   '10'
                                        :   free_veg_portion * 10
                                }
                            </td>
                            <td>
                                {
                                    (free_veg_portion == 0)
                                        ?   '2,5'
                                        :   free_veg_portion * 2.5
                                }
                            </td>
                            <td>
                                {
                                    (free_veg_portion == 0)
                                        ?   '0,0'
                                        :   free_veg_portion * 0.0
                                }
                            </td>
                            <td>
                                {
                                    (free_veg_portion == 0)
                                        ?   '0,0'
                                        :   free_veg_portion * 0.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">Frutas</th>
                            <td className="portion-input-container">
                                <input name="fruit_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (fruit_portion == 0)
                                        ?   '65'
                                        :   fruit_portion * 65
                                }
                            </td>
                            <td>
                                {
                                    (fruit_portion == 0)
                                        ?   '15,0'
                                        :   fruit_portion * 15.0
                                }
                            </td>
                            <td>
                                {
                                    (fruit_portion == 0)
                                        ?   '0,0'
                                        :   fruit_portion * 0.0
                                }
                            </td>
                            <td>
                                {
                                    (fruit_portion == 0)
                                        ?   '1,0'
                                        :   fruit_portion * 1.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3">Carnes, huevos, y legumbres secas</th>
                            <td>Alta en grasas</td>
                            <td className="portion-input-container">
                                <input name="hi_fat_meat" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (hi_fat_meat == 0)
                                        ?   '120'
                                        :   hi_fat_meat * 120
                                }
                            </td>
                            <td>
                                {
                                    (hi_fat_meat == 0)
                                        ?   '1,0'
                                        :   hi_fat_meat * 1.0
                                }
                            </td>
                            <td>
                                {
                                    (hi_fat_meat == 0)
                                        ?   '8,0'
                                        :   hi_fat_meat * 8.0
                                }
                            </td>
                            <td>
                                {
                                    (hi_fat_meat == 0)
                                        ?   '11,0'
                                        :   hi_fat_meat * 11.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Baja en grasas</td>
                            <td className="portion-input-container">
                                <input name="low_fat_meat" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (low_fat_meat == 0)
                                        ?   '65'
                                        :   low_fat_meat * 65
                                }
                            </td>
                            <td>
                                {
                                    (low_fat_meat == 0)
                                        ?   '1,0'
                                        :   low_fat_meat * 1.0
                                }
                            </td>
                            <td>
                                {
                                    (low_fat_meat == 0)
                                        ?   '2,0'
                                        :   low_fat_meat * 2.0
                                }
                            </td>
                            <td>
                                {
                                    (low_fat_meat == 0)
                                        ?   '11,0'
                                        :   low_fat_meat * 11.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Leguminosas</td>
                            <td className="portion-input-container">
                                <input name="legumes_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (legumes_portion == 0)
                                        ?   '170'
                                        :   legumes_portion * 170
                                }
                            </td>
                            <td>
                                {
                                    (legumes_portion == 0)
                                        ?   '30,0'
                                        :   legumes_portion * 30.0
                                }
                            </td>
                            <td>
                                {
                                    (legumes_portion == 0)
                                        ?   '1,0'
                                        :   legumes_portion * 1.0
                                }
                            </td>
                            <td>
                                {
                                    (legumes_portion == 0)
                                        ?   '11,0'
                                        :   legumes_portion * 11.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3">Lácteos</th>
                            <td>Altos en grasas</td>
                            <td className="portion-input-container">
                                <input name="hi_fat_dairy_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (hi_fat_dairy_portion == 0)
                                        ?   '110'
                                        :   hi_fat_dairy_portion * 110
                                }
                            </td>
                            <td>
                                {
                                    (hi_fat_dairy_portion == 0)
                                        ?   '9,0'
                                        :   hi_fat_dairy_portion * 9.0
                                }
                            </td>
                            <td>
                                {
                                    (hi_fat_dairy_portion == 0)
                                        ?   '6,0'
                                        :   hi_fat_dairy_portion * 6.0
                                }
                            </td>
                            <td>
                                {
                                    (hi_fat_dairy_portion == 0)
                                        ?   '5,0'
                                        :   hi_fat_dairy_portion * 5.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Medios en grasas</td>
                            <td className="portion-input-container">
                                <input name="mid_fat_dairy_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (mid_fat_dairy_portion == 0)
                                        ?   '85'
                                        :   mid_fat_dairy_portion * 85
                                }
                            </td>
                            <td>
                                {
                                    (mid_fat_dairy_portion == 0)
                                        ?   '9,0'
                                        :   mid_fat_dairy_portion * 9.0
                                }
                            </td>
                            <td>
                                {
                                    (mid_fat_dairy_portion == 0)
                                        ?   '3,0'
                                        :   mid_fat_dairy_portion * 3.0
                                }
                            </td>
                            <td>
                                {
                                    (mid_fat_dairy_portion == 0)
                                        ?   '5,0'
                                        :   mid_fat_dairy_portion * 5.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Bajos en grasas</td>
                            <td className="portion-input-container">
                                <input name="low_fat_dairy_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (low_fat_dairy_portion == 0)
                                        ?   '70'
                                        :   low_fat_dairy_portion * 70
                                }
                            </td>
                            <td>
                                {
                                    (low_fat_dairy_portion == 0)
                                        ?   '10,0'
                                        :   low_fat_dairy_portion * 10.0
                                }
                            </td>
                            <td>
                                {
                                    (low_fat_dairy_portion == 0)
                                        ?   '0,0'
                                        :   low_fat_dairy_portion * 0.0
                                }
                            </td>
                            <td>
                                {
                                    (low_fat_dairy_portion == 0)
                                        ?   '7,0'
                                        :   low_fat_dairy_portion * 7.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2">Aceites y grasas</th>
                            <td>Aceites y grasas</td>
                            <td className="portion-input-container">
                                <input name="oil_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (oil_portion == 0)
                                        ?   '180'
                                        :   oil_portion * 180
                                }
                            </td>
                            <td>
                                {
                                    (oil_portion == 0)
                                        ?   '0,0'
                                        :   oil_portion * 0.0
                                }
                            </td>
                            <td>
                                {
                                    (oil_portion == 0)
                                        ?   '20,0'
                                        :   oil_portion * 20.0
                                }
                            </td>
                            <td>
                                {
                                    (oil_portion == 0)
                                        ?   '0,0'
                                        :   oil_portion * 0.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Alimentos altos en lípidos</td>
                            <td className="portion-input-container">
                                <input name="hi_lipid_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (hi_lipid_portion == 0)
                                        ?   '175'
                                        :   hi_lipid_portion * 175
                                }
                            </td>
                            <td>
                                {
                                    (hi_lipid_portion == 0)
                                        ?   '5,0'
                                        :   hi_lipid_portion * 5.0
                                }
                            </td>
                            <td>
                                {
                                    (hi_lipid_portion == 0)
                                        ?   '15,0'
                                        :   hi_lipid_portion * 15.0
                                }
                            </td>
                            <td>
                                {
                                    (hi_lipid_portion == 0)
                                        ?   '5,0'
                                        :   hi_lipid_portion * 5.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">Azúcares y otros</th>
                            <td className="portion-input-container">
                                <input name="sugar_portion" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td>
                                {
                                    (sugar_portion == 0)
                                        ?   '20'
                                        :   sugar_portion * 20
                                }
                            </td>
                            <td>
                                {
                                    (sugar_portion == 0)
                                        ?   '5,0'
                                        :   sugar_portion * 5.0
                                }
                            </td>
                            <td>
                                {
                                    (sugar_portion == 0)
                                        ?   '0,0'
                                        :   sugar_portion * 0.0
                                }
                            </td>
                            <td>
                                {
                                    (sugar_portion == 0)
                                        ?   '0,0'
                                        :   sugar_portion * 0.0
                                }
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">Aportes</th>
                            <td></td>
                            <td className="result-input-container">
                                <input name="calories_contribution" type="text" value={ calories_contribution_value } readOnly/>
                            </td>
                            <td className="result-input-container">
                                <input name="carbs_contribution" type="text" value={ carbs_contribution_value } readOnly/>
                            </td>
                            <td className="result-input-container">
                                <input name="lipids_contribution" type="text" value={ lipids_contribution_value } placeholder="0" readOnly/>
                            </td>
                            <td className="result-input-container">
                                <input name="proteins_contribution" type="text" value={ proteins_contribution_value } placeholder="0" readOnly/>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">Requerimientos</th>
                            <td></td>
                            <td className="result-input-container">
                                <input name="calories_requirement" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td className="result-input-container">
                                <input name="carbs_requirement" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td className="result-input-container">
                                <input name="lipids_requirement" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                            <td className="result-input-container">
                                <input name="proteins_requirement" type="number" placeholder="0" onChange={ onInputChange }/>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">% Adecuación</th>
                            <td></td>
                            <td className="result-input-container">
                                <input name="calories_adequacy" type="text" placeholder="0" value={ calories_adequacy_value } readOnly/>
                            </td>
                            <td className="result-input-container">
                                <input name="carbs_adequacy" type="text" placeholder="0" value={ carbs_adequacy_value } readOnly/>
                            </td>
                            <td className="result-input-container">
                                <input name="lipids_adequacy" type="text" placeholder="0" value={ lipids_adequacy_value } readOnly/>
                            </td>
                            <td className="result-input-container">
                                <input name="proteins_adequacy" type="text" placeholder="0" value={ proteins_adequacy_value } readOnly/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
  );
};
