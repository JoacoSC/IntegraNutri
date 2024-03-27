import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../hooks';
import { startUploadingMealTimePortionDistribution } from '../store/mealTimePortionDistribution/thunks';
import { ConfirmationMessage } from '../common';

export const MealTimePortionDistribution = () => {
    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);
    const { patients } = useSelector(state => state.patients);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState({ text: '', type: '' });

    const {
        cerealBreakfastPortion = 0,
        cerealFirstSnackPortion = 0,
        cerealLunchPortion = 0,
        cerealSecondSnackPortion = 0,
        cerealOncePortion = 0,
        cerealDinnerPortion = 0,
        cerealThirdSnackPortion = 0,
        generalVeggieBreakfastPortion = 0,
        generalVeggieFirstSnackPortion = 0,
        generalVeggieLunchPortion = 0,
        generalVeggieSecondSnackPortion = 0,
        generalVeggieOncePortion = 0,
        generalVeggieDinnerPortion = 0,
        generalVeggieThirdSnackPortion = 0,
        freeVeggieBreakfastPortion = 0,
        freeVeggieFirstSnackPortion = 0,
        freeVeggieLunchPortion = 0,
        freeVeggieSecondSnackPortion = 0,
        freeVeggieOncePortion = 0,
        freeVeggieDinnerPortion = 0,
        freeVeggieThirdSnackPortion = 0,
        fruitBreakfastPortion = 0,
        fruitFirstSnackPortion = 0,
        fruitLunchPortion = 0,
        fruitSecondSnackPortion = 0,
        fruitOncePortion = 0,
        fruitDinnerPortion = 0,
        fruitThirdSnackPortion = 0,
        highFatMeatBreakfastPortion = 0,
        highFatMeatFirstSnackPortion = 0,
        highFatMeatLunchPortion = 0,
        highFatMeatSecondSnackPortion = 0,
        highFatMeatOncePortion = 0,
        highFatMeatDinnerPortion = 0,
        highFatMeatThirdSnackPortion = 0,
        lowFatMeatBreakfastPortion = 0,
        lowFatMeatFirstSnackPortion = 0,
        lowFatMeatLunchPortion = 0,
        lowFatMeatSecondSnackPortion = 0,
        lowFatMeatOncePortion = 0,
        lowFatMeatDinnerPortion = 0,
        lowFatMeatThirdSnackPortion = 0,
        legumeMeatBreakfastPortion = 0,
        legumeMeatFirstSnackPortion = 0,
        legumeMeatLunchPortion = 0,
        legumeMeatSecondSnackPortion = 0,
        legumeMeatOncePortion = 0,
        legumeMeatDinnerPortion = 0,
        legumeMeatThirdSnackPortion = 0,
        highFatDairyBreakfastPortion = 0,
        highFatDairyFirstSnackPortion = 0,
        highFatDairyLunchPortion = 0,
        highFatDairySecondSnackPortion = 0,
        highFatDairyOncePortion = 0,
        highFatDairyDinnerPortion = 0,
        highFatDairyThirdSnackPortion = 0,
        midFatDairyBreakfastPortion = 0,
        midFatDairyFirstSnackPortion = 0,
        midFatDairyLunchPortion = 0,
        midFatDairySecondSnackPortion = 0,
        midFatDairyOncePortion = 0,
        midFatDairyDinnerPortion = 0,
        midFatDairyThirdSnackPortion = 0,
        lowFatDairyBreakfastPortion = 0,
        lowFatDairyFirstSnackPortion = 0,
        lowFatDairyLunchPortion = 0,
        lowFatDairySecondSnackPortion = 0,
        lowFatDairyOncePortion = 0,
        lowFatDairyDinnerPortion = 0,
        lowFatDairyThirdSnackPortion = 0,
        oilAndFatBreakfastPortion = 0,
        oilAndFatFirstSnackPortion = 0,
        oilAndFatLunchPortion = 0,
        oilAndFatSecondSnackPortion = 0,
        oilAndFatOncePortion = 0,
        oilAndFatDinnerPortion = 0,
        oilAndFatThirdSnackPortion = 0,
        lipidRichFoodBreakfastPortion = 0,
        lipidRichFoodFirstSnackPortion = 0,
        lipidRichFoodLunchPortion = 0,
        lipidRichFoodSecondSnackPortion = 0,
        lipidRichFoodOncePortion = 0,
        lipidRichFoodDinnerPortion = 0,
        lipidRichFoodThirdSnackPortion = 0,
        sugarAndOthersBreakfastPortion = 0,
        sugarAndOthersFirstSnackPortion = 0,
        sugarAndOthersLunchPortion = 0,
        sugarAndOthersSecondSnackPortion = 0,
        sugarAndOthersOncePortion = 0,
        sugarAndOthersDinnerPortion = 0,
        sugarAndOthersThirdSnackPortion = 0,
        onInputChange,
        formState
    } = useForm();

    const handlePatientChange = (e) => {
        setSelectedPatient(e.target.value);
    };

    const handleAttachTable = async () => {
        const mealTimePortionDistribution = formState;
        const patientID = selectedPatient;
        console.log('mealTimePortionDistribution: ', mealTimePortionDistribution);
    
        const message = await dispatch(startUploadingMealTimePortionDistribution( uid, patientID, mealTimePortionDistribution ));
        const messageType = message === "Ocurrió un error." ? 'error' : 'success';
        setConfirmationMessage({ text: message, type: messageType });
      };

    const calculateTotalPortions = (portionNames) => {
        return portionNames.reduce((total, portionName) => total + Number(formState[portionName] || 0), 0);
      };

      const handleBlur = (e) => {
        e.target.value = parseFloat(e.target.value).toFixed(1)
        e.target.value = e.target.value ? e.target.value.replace(',', '.') : '0';
        const { name, value } = e.target;
        const newValue = value ? value.replace(',', '.') : '0';
        if (!isNaN(newValue)) {
          onInputChange({
            target: {
              name,
              value: parseFloat(newValue).toFixed(1),
            },
          });
        }
      };

    return (
        <div className="calculator-main-container">
            <div className="calculator-wrapper">
                <p className="calculator-item-title">Distribución de porciones por tiempo de comida</p>
                <div className="calculator-container">
                    <table className="calculator-table">
                        <tbody>

                            <tr>
                                <th colSpan="2">Grupo de alimentos</th>
                                <th>Total Porciones</th>
                                <th>Desayuno</th>
                                <th>Colación</th>
                                <th>Almuerzo</th>
                                <th>Colación</th>
                                <th>Once</th>
                                <th>Cena</th>
                                <th>Colación</th>
                            </tr>
                            <tr>
                                <th colSpan="2">Cereales, papas y legumbres frescas</th>
                                <td>
                                    {calculateTotalPortions([
                                        'cerealBreakfastPortion',
                                        'cerealFirstSnackPortion',
                                        'cerealLunchPortion',
                                        'cerealSecondSnackPortion',
                                        'cerealOncePortion',
                                        'cerealDinnerPortion',
                                        'cerealThirdSnackPortion'
                                    ])}
                                </td>

                                <td className="portion-input-container">
                                    <input name="cerealBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="cerealFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="cerealLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="cerealSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="cerealOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="cerealDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="cerealThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Verduras</th>
                                <td>En general</td>
                                <td>
                                    {calculateTotalPortions([
                                        'generalVeggieBreakfastPortion',
                                        'generalVeggieFirstSnackPortion',
                                        'generalVeggieLunchPortion',
                                        'generalVeggieSecondSnackPortion',
                                        'generalVeggieOncePortion',
                                        'generalVeggieDinnerPortion',
                                        'generalVeggieThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="generalVeggieBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="generalVeggieFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="generalVeggieLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="generalVeggieSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="generalVeggieOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="generalVeggieDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="generalVeggieThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Libre consumo</td>
                                <td>
                                    {calculateTotalPortions([
                                        'freeVeggieBreakfastPortion',
                                        'freeVeggieFirstSnackPortion',
                                        'freeVeggieLunchPortion',
                                        'freeVeggieSecondSnackPortion',
                                        'freeVeggieOncePortion',
                                        'freeVeggieDinnerPortion',
                                        'freeVeggieThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="freeVeggieBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="freeVeggieFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="freeVeggieLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="freeVeggieSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="freeVeggieOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="freeVeggieDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="freeVeggieThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">Frutas</th>
                                <td>
                                    {calculateTotalPortions([
                                        'fruitBreakfastPortion',
                                        'fruitFirstSnackPortion',
                                        'fruitLunchPortion',
                                        'fruitSecondSnackPortion',
                                        'fruitOncePortion',
                                        'fruitDinnerPortion',
                                        'fruitThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="fruitBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="fruitFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="fruitLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="fruitSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="fruitOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="fruitDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="fruitThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="3">Carnes, huevos, y legumbres secas</th>
                                <td>Alta en grasas</td>
                                <td>
                                    {calculateTotalPortions([
                                        'highFatMeatBreakfastPortion',
                                        'highFatMeatFirstSnackPortion',
                                        'highFatMeatLunchPortion',
                                        'highFatMeatSecondSnackPortion',
                                        'highFatMeatOncePortion',
                                        'highFatMeatDinnerPortion',
                                        'highFatMeatThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatMeatBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatMeatFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatMeatLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatMeatSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatMeatOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatMeatDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatMeatThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Baja en grasas</td>
                                <td>
                                    {calculateTotalPortions([
                                        'lowFatMeatBreakfastPortion',
                                        'lowFatMeatFirstSnackPortion',
                                        'lowFatMeatLunchPortion',
                                        'lowFatMeatSecondSnackPortion',
                                        'lowFatMeatOncePortion',
                                        'lowFatMeatDinnerPortion',
                                        'lowFatMeatThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatMeatBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatMeatFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatMeatLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatMeatSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatMeatOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatMeatDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatMeatThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Leguminosas</td>
                                <td>
                                    {calculateTotalPortions([
                                        'legumeMeatBreakfastPortion',
                                        'legumeMeatFirstSnackPortion',
                                        'legumeMeatLunchPortion',
                                        'legumeMeatSecondSnackPortion',
                                        'legumeMeatOncePortion',
                                        'legumeMeatDinnerPortion',
                                        'legumeMeatThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="legumeMeatBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="legumeMeatFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="legumeMeatLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="legumeMeatSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="legumeMeatOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="legumeMeatDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="legumeMeatThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="3">Lácteos</th>
                                <td>Altos en grasas</td>
                                <td>
                                    {calculateTotalPortions([
                                        'highFatDairyBreakfastPortion',
                                        'highFatDairyFirstSnackPortion',
                                        'highFatDairyLunchPortion',
                                        'highFatDairySecondSnackPortion',
                                        'highFatDairyOncePortion',
                                        'highFatDairyDinnerPortion',
                                        'highFatDairyThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatDairyBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatDairyFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatDairyLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatDairySecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatDairyOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatDairyDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="highFatDairyThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Medios en grasas</td>
                                <td>
                                    {calculateTotalPortions([
                                        'midFatDairyBreakfastPortion',
                                        'midFatDairyFirstSnackPortion',
                                        'midFatDairyLunchPortion',
                                        'midFatDairySecondSnackPortion',
                                        'midFatDairyOncePortion',
                                        'midFatDairyDinnerPortion',
                                        'midFatDairyThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="midFatDairyBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="midFatDairyFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="midFatDairyLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="midFatDairySecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="midFatDairyOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="midFatDairyDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="midFatDairyThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Bajos en grasas</td>
                                <td>
                                    {calculateTotalPortions([
                                        'lowFatDairyBreakfastPortion',
                                        'lowFatDairyFirstSnackPortion',
                                        'lowFatDairyLunchPortion',
                                        'lowFatDairySecondSnackPortion',
                                        'lowFatDairyOncePortion',
                                        'lowFatDairyDinnerPortion',
                                        'lowFatDairyThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatDairyBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatDairyFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatDairyLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatDairySecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatDairyOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatDairyDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lowFatDairyThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <th rowSpan="2">Aceites y grasas</th>
                                <td>Aceites y grasas</td>
                                <td>
                                    {calculateTotalPortions([
                                        'oilAndFatBreakfastPortion',
                                        'oilAndFatFirstSnackPortion',
                                        'oilAndFatLunchPortion',
                                        'oilAndFatSecondSnackPortion',
                                        'oilAndFatOncePortion',
                                        'oilAndFatDinnerPortion',
                                        'oilAndFatThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="oilAndFatBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="oilAndFatFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="oilAndFatLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="oilAndFatSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="oilAndFatOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="oilAndFatDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="oilAndFatThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Alimentos altos en lípidos</td>
                                <td>
                                    {calculateTotalPortions([
                                        'lipidRichFoodBreakfastPortion',
                                        'lipidRichFoodFirstSnackPortion',
                                        'lipidRichFoodLunchPortion',
                                        'lipidRichFoodSecondSnackPortion',
                                        'lipidRichFoodOncePortion',
                                        'lipidRichFoodDinnerPortion',
                                        'lipidRichFoodThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="lipidRichFoodBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lipidRichFoodFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lipidRichFoodLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lipidRichFoodSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lipidRichFoodOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lipidRichFoodDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="lipidRichFoodThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="2">Azúcares y otros</th>
                                <td>
                                    {calculateTotalPortions([
                                        'sugarAndOthersBreakfastPortion',
                                        'sugarAndOthersFirstSnackPortion',
                                        'sugarAndOthersLunchPortion',
                                        'sugarAndOthersSecondSnackPortion',
                                        'sugarAndOthersOncePortion',
                                        'sugarAndOthersDinnerPortion',
                                        'sugarAndOthersThirdSnackPortion'
                                    ])}
                                </td>
                                <td className="portion-input-container">
                                    <input name="sugarAndOthersBreakfastPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="sugarAndOthersFirstSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="sugarAndOthersLunchPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="sugarAndOthersSecondSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="sugarAndOthersOncePortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="sugarAndOthersDinnerPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                                <td className="portion-input-container">
                                    <input name="sugarAndOthersThirdSnackPortion" type="number" placeholder="0" onChange={ onInputChange } step="0.1" onBlur={handleBlur}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='patient-table-attachment-container'>
                    <div className='flex-row gap-1'>
                        <select className='input-select' onChange={handlePatientChange}>
                        {patients.map((patient) => (
                            <option key={patient.id} value={patient.id}>
                            {patient.displayName}
                            </option>
                        ))}
                        </select>
                        <button className='btn-sm' onClick={handleAttachTable}>Adjuntar tabla al paciente seleccionado</button>
                    </div>
                    <ConfirmationMessage message={confirmationMessage} />
                </div>
            </div>
        </div>
  );
};
