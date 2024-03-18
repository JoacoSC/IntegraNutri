import { createSlice } from '@reduxjs/toolkit';

export const frequencyOfConsumptionSlice = createSlice({
    name: 'frequencyOfConsumption',
    initialState: {
        frequencyTables: [],
    },
    reducers: {
        setFrequencyOfConsumption: (state, { payload }) => {
            state.frequencyTables = payload;
        },
        clearFrequencyOfConsumption: (state) => {
            state.frequencyTables = [];
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setFrequencyOfConsumption,
    clearFrequencyOfConsumption,
} = frequencyOfConsumptionSlice.actions;