import { createSlice } from '@reduxjs/toolkit';

export const estimationsSlice = createSlice({
    name: 'estimations',
    initialState: {
        heightEstimations: {},
    },
    reducers: {
        setHeightEstimation: (state, action) => {
            const { patientID, heightEstimation } = action.payload;
            state.heightEstimations[patientID] = heightEstimation;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    setHeightEstimation,
} = estimationsSlice.actions;