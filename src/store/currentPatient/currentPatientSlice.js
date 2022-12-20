import { createSlice } from '@reduxjs/toolkit';

export const currentPatientSlice = createSlice({
    name: 'currentPatient',
    initialState: {
        id: null,
        address: null,
        city: null,
        patientName: 'Paciente',
        email: null,
        emailActivated: null,
        gender: null,
        nextConsultation: null,
        phone: null,
        region: null,
        rut: null,
        unixBirthday: null,
        anamnesis: null,
        physical_exam: null,
        diagnosis: null,
        indications: null,
    },
    reducers: {
        setCurrentPatient: (state,{ payload }) => {
            state.id = payload.id;
            state.address = payload.address;
            state.city = payload.city;
            state.patientName = payload.displayName;
            state.email = payload.email;
            state.emailActivated = payload.emailActivated;
            state.gender = payload.gender;
            state.nextConsultation = payload.nextConsultation;
            state.phone = payload.phone;
            state.region = payload.region;
            state.rut = payload.rut;
            state.unixBirthday = payload.unixBirthday;
        },

        updateCurrentPatient: (state,{ payload }) => {
            state.anamnesis = payload.anamnesis;
            state.physical_exam = payload.physical_exam;
            state.diagnosis = payload.diagnosis;
            state.indications = payload.indications;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    setCurrentPatient,
    updateCurrentPatient
} = currentPatientSlice.actions;