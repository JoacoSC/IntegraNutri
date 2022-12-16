import { createSlice } from '@reduxjs/toolkit';

export const currentPatientSlice = createSlice({
    name: 'currentPatient',
    initialState: {
        id: null,
        address: null,
        city: null,
        displayName: 'Paciente',
        email: null,
        emailActivated: null,
        gender: null,
        nextConsultation: null,
        phone: null,
        region: null,
        rut: null,
        unixBirthday: null,
    },
    reducers: {
        setCurrentPatient: (state,{ payload }) => {
            state.id = payload.id;
            state.address = payload.address;
            state.city = payload.city;
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.emailActivated = payload.emailActivated;
            state.gender = payload.gender;
            state.nextConsultation = payload.nextConsultation;
            state.phone = payload.phone;
            state.region = payload.region;
            state.rut = payload.rut;
            state.unixBirthday = payload.unixBirthday;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setCurrentPatient } = currentPatientSlice.actions;