import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        calories_contribution_value: 0,
        carbs_contribution_value: 0,
        lipids_contribution_value: 0,
        proteins_contribution_value: 0,
    },
    reducers: {
        setCaloriesContributionValue: (state,{ payload }) => {
            // console.log(payload)
            state.calories_contribution_value = payload;
        },
        setCarbsContributionValue: (state,{ payload }) => {
            // console.log(payload)
            state.carbs_contribution_value = payload;
        },
        setLipidsContributionValue: (state,{ payload }) => {
            // console.log(payload)
            state.lipids_contribution_value = payload;
        },
        setProteinsContributionValue: (state,{ payload }) => {
            // console.log(payload)
            state.proteins_contribution_value = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    setCaloriesContributionValue,
    setCarbsContributionValue,
    setLipidsContributionValue,
    setProteinsContributionValue
} = calculatorSlice.actions;