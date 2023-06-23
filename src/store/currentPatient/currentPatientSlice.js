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
        unixCorrectedBirthday: null,
        anamnesis: null,
        physical_exam: null,
        diagnosis: null,
        indications: null,
        weight: null,
        stature: null,
        imc: null,
        age: {
            d: 0,
            m: 0,
            y: 0,
          },
        correctedAge: {
            d: 0,
            m: 0,
            y: 0,
          },
        correctedAgeIsSet: false,
        tallaDiana: null,
        perimetroCefalico: null,
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
            state.unixCorrectedBirthday = payload.unixCorrectedBirthday;
            state.anamnesis = payload.anamnesis;
            state.physical_exam = payload.physical_exam;
            state.diagnosis = payload.diagnosis;
            state.indications = payload.indications;
            state.weight = payload.weight;
            state.stature = payload.stature;
            state.imc = payload.imc;
            state.correctedAge = payload.correctedAge;
            state.correctedAgeIsSet = payload.correctedAgeIsSet;
            state.tallaDiana = payload.tallaDiana;
            state.perimetroCefalico = payload.perimetroCefalico;
        },

        updateCurrentPatientAnamnesis: (state,{ payload }) => {
            state.anamnesis = payload.formAnamnesis;
        },

        updateCurrentPatientPhysical_exam: (state,{ payload }) => {
            state.physical_exam = payload.formPhysical_exam;
        },

        updateCurrentPatientDiagnosis: (state,{ payload }) => {
            state.diagnosis = payload.formDiagnosis;
        },

        updateCurrentPatientIndications: (state,{ payload }) => {
            state.indications = payload.formIndications;
        },

        updateCurrentPatientWeight: (state,{ payload }) => {
            state.weight = payload;
        },

        updateCurrentPatientStature: (state,{ payload }) => {
            state.stature = payload;
        },

        updateCurrentPatientIMC: (state,{ payload }) => {
            state.imc = payload;
        },

        updateCurrentPatientAge: (state,{ payload }) => {
            state.age = payload;
        },

        updateCurrentPatientCorrectedAge: (state,{ payload }) => {
            // console.log('payload: ', payload)
            // console.log('payload.correctedAge: ', payload.correctedAge)
            state.correctedAge = payload.correctedAge;
            state.correctedAgeIsSet = payload.correctedAgeIsSet;
        },

        updateCurrentPatientUnixCorrectedBirthday: (state,{ payload }) => {
            // console.log('payload: ', payload)
            // console.log('payload.correctedAge: ', payload.correctedAge)
            state.unixCorrectedBirthday = payload.unixCorrectedBirthday;
            state.correctedAgeIsSet = payload.correctedAgeIsSet;
        },

        updateCurrentPatientTallaDiana: (state,{ payload }) => {
            state.tallaDiana = payload;
        },

        updateCurrentPatientPerimetroCefalico: (state,{ payload }) => {
            state.perimetroCefalico = payload;
        },

        clearCurrentPatient: ( state ) => {
            state.id = null;
            state.address = null;
            state.city = null;
            state.patientName = "Paciente";
            state.email = null;
            state.emailActivated = null;
            state.gender = null;
            state.nextConsultation = null;
            state.phone = null;
            state.region = null;
            state.rut = null;
            state.unixBirthday = null;
            state.unixCorrectedBirthday = null;
            state.anamnesis = null;
            state.physical_exam = null;
            state.diagnosis = null;
            state.indications = null;
            state.weight = null;
            state.stature = null;
            state.imc = null;
            state.age = {
                d: 0,
                m: 0,
                y: 0,
              };
            state.correctedAge = {
                d: 0,
                m: 0,
                y: 0,
              };
            state.correctedAgeIsSet = false;
            state.tallaDiana = null;
            state.perimetroCefalico = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    setCurrentPatient,
    updateCurrentPatientAnamnesis,
    updateCurrentPatientPhysical_exam,
    updateCurrentPatientDiagnosis,
    updateCurrentPatientIndications,
    updateCurrentPatientWeight,
    updateCurrentPatientStature,
    updateCurrentPatientIMC,
    updateCurrentPatientAge,
    updateCurrentPatientCorrectedAge,
    updateCurrentPatientUnixCorrectedBirthday,
    updateCurrentPatientTallaDiana,
    updateCurrentPatientPerimetroCefalico,
    clearCurrentPatient,

} = currentPatientSlice.actions;