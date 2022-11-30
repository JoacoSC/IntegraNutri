import { createSlice } from '@reduxjs/toolkit';

export const patientsSlice = createSlice({
    name: 'patients',
    initialState: {
        patients: [],
    },
    reducers: {
        setMyPatients: (state, action ) => {
            console.log(action)
            state.patients = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setMyPatients } = patientsSlice.actions;