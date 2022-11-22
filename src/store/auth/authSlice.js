import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'not-authenticated', 'authenticated', 'checking'
        isLogged: false,
        isRegisteringPatient: false,
        registeredPatientUID: null,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload }) => {

            state.status = 'authenticated'; //'not-authenticated', 'authenticated', 'checking'
            state.isLogged = true,
            state.isRegisteringPatient = false,
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: ( state, { payload }) => {
            
            state.status = 'not-authenticated'; //'not-authenticated', 'authenticated', 'checking'
            state.isLogged = false,
            state.isRegisteringPatient = false,
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        },
        isRegisteringPatient: ( state, {payload} ) => {
            state.isRegisteringPatient = payload;
        },
        registeredPatientUID: ( state, {payload} ) => {
            state.registeredPatientUID = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    login,
    logout,
    checkingCredentials,
    isRegisteringPatient,
    registeredPatientUID,

} = authSlice.actions;