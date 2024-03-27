import { createSlice } from '@reduxjs/toolkit';

export const mealTimePortionDistributionSlice = createSlice({
    name: 'mealTimePortionDistribution',
    initialState: {
        patientID: null,
        portionDistribution: {},
    },
    reducers: {
        setMealTimePortionDistribution: (state, { payload }) => {
            state.patientID = payload.patientID;
            state.portionDistribution = payload.mealTimePortionDistribution;
        },
        clearMealTimePortionDistribution: (state) => {
            state.patientID = null;
            state.portionDistribution = {};
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setMealTimePortionDistribution,
    clearMealTimePortionDistribution,
} = mealTimePortionDistributionSlice.actions;