import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'not-authenticated', 'authenticated', 'checking'
        isLogged: false,
        isNutritionistStatus: null,
        isRegisteringPatient: false,
        registeredPatientUID: null,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorCode: null,
    },
    reducers: {
        login: ( state, { payload }) => {

            // console.log(payload)

            state.status = 'authenticated'; //'not-authenticated', 'authenticated', 'checking'
            state.isLogged = true,
            state.isRegisteringPatient = false,
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorCode = null;
        },
        logout: ( state, { payload }) => {
            
            state.status = 'not-authenticated'; //'not-authenticated', 'authenticated', 'checking'
            state.isLogged = false,
            state.isRegisteringPatient = false,
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorCode = payload?.errorCode;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
        isRegisteringPatient: ( state, {payload} ) => {
            state.isRegisteringPatient = payload;
        },
        registeredPatientUID: ( state, {payload} ) => {
            state.registeredPatientUID = payload;
        },
        setIsNutritionistStatus: ( state, {payload} ) => {
            state.isNutritionistStatus = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    login,
    logout,
    checkingCredentials,
    isRegisteringPatient,
    registeredPatientUID,
    setIsNutritionistStatus,

} = authSlice.actions;