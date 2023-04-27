import { createSlice } from '@reduxjs/toolkit';

export const loginHelperSlice = createSlice({
    name: 'loginHelper',
    initialState: {
        isNutritionistSelector: true,
        patientPasswordChangedSuccesfully: false,
        disableConfirmBtn: false,
        error: false,
        errorCode: null,
    },
    reducers: {
        switchIsNutritionistSelector: (state,{ payload }) => {
            console.log(payload)
            state.isNutritionistSelector = payload;
        },
        switchPatientPasswordChangedSuccesfully: (state,{ payload }) => {
            console.log(payload)
            state.patientPasswordChangedSuccesfully = payload;
        },
        disableConfirmBtn: (state,{ payload }) => {
            console.log(payload)
            state.disableConfirmBtn = payload;
        },
        switchError: (state,{ payload }) => {
            console.log(payload)
            state.error = payload;
        },
        setErrorCode: (state,{ payload }) => {
            console.log(payload)
            state.errorCode = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    switchIsNutritionistSelector,
    switchPatientPasswordChangedSuccesfully,
    disableConfirmBtn,
    switchError,
    setErrorCode,
} = loginHelperSlice.actions;