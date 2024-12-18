import { createSlice } from '@reduxjs/toolkit';

export const energyRequirementsSlice = createSlice({
    name: 'energyRequirements',
    initialState: {
        pediatricEnergyRequirements: {},
    },
    reducers: {
        setPediatricEnergyRequirements: (state, { payload }) => {
            state.pediatricEnergyRequirements = payload;
        },
        clearPediatricEnergyRequirements: (state) => {
            state.pediatricEnergyRequirements = [];
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setPediatricEnergyRequirements,
    clearPediatricEnergyRequirements,
} = energyRequirementsSlice.actions;