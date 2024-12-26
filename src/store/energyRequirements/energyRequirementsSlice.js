import { createSlice } from '@reduxjs/toolkit';

export const energyRequirementsSlice = createSlice({
    name: 'energyRequirements',
    initialState: {
        pediatricEnergyRequirements: {},
        adultEnergyRequirements: {},
    },
    reducers: {
        setPediatricEnergyRequirements: (state, { payload }) => {
            state.pediatricEnergyRequirements = payload;
        },
        clearPediatricEnergyRequirements: (state) => {
            state.pediatricEnergyRequirements = [];
        },
        setAdultEnergyRequirements: (state, { payload }) => {
            state.adultEnergyRequirements = payload;
        },
        clearAdultEnergyRequirements: (state) => {
            state.adultEnergyRequirements = [];
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setPediatricEnergyRequirements,
    clearPediatricEnergyRequirements,
    setAdultEnergyRequirements,
    clearAdultEnergyRequirements,
} = energyRequirementsSlice.actions;