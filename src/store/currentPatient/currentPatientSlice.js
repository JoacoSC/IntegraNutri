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
        biologicalSex: null,
        genderIdentity: null,
        nextConsultation: null,
        phone: null,
        region: null,
        rut: null,
        unixBirthday: null,
        unixCorrectedBirthday: null,
        unixBiologicalBirthday: null,
        anamnesis: null,
        physical_exam: null,
        diagnosis: null,
        indications: null,
        weight: null,
        stature: null,
        imc: null,
        imcPregnant: [],
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
        biologicalAge: {
            d: 0,
            m: 0,
            y: 0,
          },
        biologicalAgeIsSet: false,
        estadioTanner: null,
        tallaDiana: null,
        perimetroCefalico: null,
        perimetroCintura: null,
        presionArterial: null,
        examsHistory: [],
        actualExamIndex: null,
        portionDistribution: null,
        patientExams : { 
            examRequest: null,
            nutritionalIndications: null
        },
        anthropometry : null
    },
    reducers: {
        setCurrentPatient: (state,{ payload }) => {
            // console.log('payload: ', payload)
            // console.log('payload: ', payload.examRequest)
            state.id = payload.id;
            state.address = payload.address;
            state.city = payload.city;
            state.patientName = payload.displayName;
            state.email = payload.email;
            state.emailActivated = payload.emailActivated;
            state.biologicalSex = payload.gender;
            state.genderIdentity = payload.genderIdentity;
            state.nextConsultation = payload.nextConsultation;
            state.phone = payload.phone;
            state.region = payload.region;
            state.rut = payload.rut;
            state.unixBirthday = payload.unixBirthday;
            state.unixCorrectedBirthday = payload.unixCorrectedBirthday;
            state.unixBiologicalBirthday = payload.unixBiologicalBirthday;
            state.anamnesis = payload.anamnesis;
            state.physical_exam = payload.physical_exam;
            state.diagnosis = payload.diagnosis;
            state.indications = payload.indications;
            state.weight = payload.weight;
            state.stature = payload.stature;
            state.imc = payload.imc;
            state.imcPregnant = payload.imcPregnant;
            // state.correctedAge = payload.correctedAge;
            // state.biologicalAge = payload.biologicalAge;
            state.estadioTanner = payload.estadioTanner;
            state.correctedAgeIsSet = payload.correctedAgeIsSet;
            state.biologicalAgeIsSet = payload.biologicalAgeIsSet;
            state.tallaDiana = payload.tallaDiana;
            state.perimetroCefalico = payload.perimetroCefalico;
            state.perimetroCintura = payload.perimetroCintura;
            state.presionArterial = payload.presionArterial;
            state.examsHistory = payload.examsHistory;
            state.actualExamIndex = payload.actualExamIndex;
            state.portionDistribution = payload.portionDistribution;
            state.patientExams = { 
                examRequest: payload.patientExams?.examRequest,
                nutritionalIndications: payload.patientExams?.nutritionalIndications
            };
            if (payload.anthropometry) {
                state.anthropometry = {
                    BrazoRelajadoCorregido: payload.anthropometry.BrazoRelajadoCorregido !== undefined ? payload.anthropometry.BrazoRelajadoCorregido : null,
                    CCMINSALResult: payload.anthropometry.CCMINSALResult !== undefined ? payload.anthropometry.CCMINSALResult : null,
                    CCMINSALRating: payload.anthropometry.CCMINSALRating !== undefined ? payload.anthropometry.CCMINSALRating : null,
                    CircunferenciaCadera: payload.anthropometry.CircunferenciaCadera !== undefined ? payload.anthropometry.CircunferenciaCadera : null,
                    CircunferenciaCintura: payload.anthropometry.CircunferenciaCintura !== undefined ? payload.anthropometry.CircunferenciaCintura : null,
                    Ectomorfia: payload.anthropometry.Ectomorfia !== undefined ? payload.anthropometry.Ectomorfia : null,
                    Endomorfia: payload.anthropometry.Endomorfia !== undefined ? payload.anthropometry.Endomorfia : null,
                    ICCResult: payload.anthropometry.ICCResult !== undefined ? payload.anthropometry.ICCResult : null,
                    ICCRating: payload.anthropometry.ICCRating !== undefined ? payload.anthropometry.ICCRating : null,
                    ICAResult: payload.anthropometry.ICAResult !== undefined ? payload.anthropometry.ICAResult : null,
                    ICARating: payload.anthropometry.ICARating !== undefined ? payload.anthropometry.ICARating : null,
                    InputDiametroFemur: payload.anthropometry.InputDiametroFemur !== undefined ? payload.anthropometry.InputDiametroFemur : null,
                    InputEtnia: payload.anthropometry.InputEtnia !== undefined ? payload.anthropometry.InputEtnia : null,
                    InputPliegueTricipital: payload.anthropometry.InputPliegueTricipital !== undefined ? payload.anthropometry.InputPliegueTricipital : null,
                    InputPliegueSubescapular: payload.anthropometry.InputPliegueSubescapular !== undefined ? payload.anthropometry.InputPliegueSubescapular : null,
                    InputPliegueCrestailiaca: payload.anthropometry.InputPliegueCrestailiaca !== undefined ? payload.anthropometry.InputPliegueCrestailiaca : null,
                    InputPliegueBicipital: payload.anthropometry.InputPliegueBicipital !== undefined ? payload.anthropometry.InputPliegueBicipital : null,
                    InputPliegueSupraespinal: payload.anthropometry.InputPliegueSupraespinal !== undefined ? payload.anthropometry.InputPliegueSupraespinal : null,
                    InputPliegueAbdominal: payload.anthropometry.InputPliegueAbdominal !== undefined ? payload.anthropometry.InputPliegueAbdominal : null,
                    InputPliegueMuslo: payload.anthropometry.InputPliegueMuslo !== undefined ? payload.anthropometry.InputPliegueMuslo : null,
                    InputPlieguePierna: payload.anthropometry.InputPlieguePierna !== undefined ? payload.anthropometry.InputPlieguePierna : null,
                    InputPerimetroBrazoRelajado: payload.anthropometry.InputPerimetroBrazoRelajado !== undefined ? payload.anthropometry.InputPerimetroBrazoRelajado : null,
                    InputPerimetroBrazoContraido: payload.anthropometry.InputPerimetroBrazoContraido !== undefined ? payload.anthropometry.InputPerimetroBrazoContraido : null,
                    InputPerimetroPierna: payload.anthropometry.InputPerimetroPierna !== undefined ? payload.anthropometry.InputPerimetroPierna : null,
                    InputPerimetroMuslo: payload.anthropometry.InputPerimetroMuslo !== undefined ? payload.anthropometry.InputPerimetroMuslo : null,
                    InputDiametroMuneca: payload.anthropometry.InputDiametroMuneca !== undefined ? payload.anthropometry.InputDiametroMuneca : null,
                    InputDiametroHumero: payload.anthropometry.InputDiametroHumero !== undefined ? payload.anthropometry.InputDiametroHumero : null,
                    InputPerimetroCintura: payload.anthropometry.InputPerimetroCintura !== undefined ? payload.anthropometry.InputPerimetroCintura : null,
                    InputPerimetroCadera: payload.anthropometry.InputPerimetroCadera !== undefined ? payload.anthropometry.InputPerimetroCadera : null,
                    SomatocartaX: payload.anthropometry.SomatocartaX !== undefined ? payload.anthropometry.SomatocartaX : null,
                    SomatocartaY: payload.anthropometry.SomatocartaY !== undefined ? payload.anthropometry.SomatocartaY : null,
                    SomatocartaIP: payload.anthropometry.SomatocartaIP !== undefined ? payload.anthropometry.SomatocartaIP : null,
                    Mesomorfia: payload.anthropometry.Mesomorfia !== undefined ? payload.anthropometry.Mesomorfia : null,
                    MusloCorregido: payload.anthropometry.MusloCorregido !== undefined ? payload.anthropometry.MusloCorregido : null,
                    PiernaCorregido: payload.anthropometry.PiernaCorregido !== undefined ? payload.anthropometry.PiernaCorregido : null,
                    MGCarterKG: payload.anthropometry.MGCarterKG !== undefined ? payload.anthropometry.MGCarterKG : null,
                    MGCarterPercent: payload.anthropometry.MGCarterPercent !== undefined ? payload.anthropometry.MGCarterPercent : null,
                    MGFaulknerKG: payload.anthropometry.MGFaulknerKG !== undefined ? payload.anthropometry.MGFaulknerKG : null,
                    MGFaulknerPercent: payload.anthropometry.MGFaulknerPercent !== undefined ? payload.anthropometry.MGFaulknerPercent : null,
                    MMLeeKG: payload.anthropometry.MMLeeKG !== undefined ? payload.anthropometry.MMLeeKG : null,
                    MMLeePercent: payload.anthropometry.MMLeePercent !== undefined ? payload.anthropometry.MMLeePercent : null,
                    MRKG: payload.anthropometry.MRKG !== undefined ? payload.anthropometry.MRKG : null,
                    MRPercent: payload.anthropometry.MRPercent !== undefined ? payload.anthropometry.MRPercent : null,
                    MRV2KG: payload.anthropometry.MRV2KG !== undefined ? payload.anthropometry.MRV2KG : null,
                    MRV2Percent: payload.anthropometry.MRV2Percent !== undefined ? payload.anthropometry.MRV2Percent : null,
                    MOKG: payload.anthropometry.MOKG !== undefined ? payload.anthropometry.MOKG : null,
                    MOPercent: payload.anthropometry.MOPercent !== undefined ? payload.anthropometry.MOPercent : null,
                    Fecha: payload.anthropometry.Fecha !== undefined ? payload.anthropometry.Fecha : null,
                    Edad: payload.anthropometry.Edad !== undefined ? payload.anthropometry.Edad : null,
                };
            } else {
                state.anthropometry = {};
            }
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
        updateCurrentPatientIMCPregnant: (state,{ payload }) => {
            state.imcPregnant = payload;
        },

        updateCurrentPatientAge: (state,{ payload }) => {
            state.age = payload;
        },

        updateCurrentPatientCorrectedAge: (state, { payload } ) => {
            // console.log('payload: ', payload)
            // console.log('payload.correctedAge: ', payload)
            state.correctedAge = payload;
        },

        updateCurrentPatientUnixCorrectedBirthday: (state,{ payload }) => {
            // console.log('payload.unixCorrectedBirthday: ', payload.unixCorrectedBirthday)
            // console.log('payload.correctedAgeIsSet: ', payload.correctedAgeIsSet)
            state.unixCorrectedBirthday = payload.unixCorrectedBirthday;
            state.correctedAgeIsSet = payload.correctedAgeIsSet;
        },

        updateCurrentPatientEstadioTanner: (state,{ payload }) => {
            // console.log('payload: ', payload)
            // console.log('payload.biologicalAge: ', payload.biologicalAge)
            state.estadioTanner = payload;
        },

        updateCurrentPatientBiologicalAge: (state,{ payload }) => {
            // console.log('payload: ', payload)
            // console.log('payload.biologicalAge: ', payload.biologicalAge)
            state.biologicalAge = payload;
        },

        updateCurrentPatientUnixBiologicalBirthday: (state,{ payload }) => {
            // console.log('payload: ', payload)
            // console.log('payload.biologicalAge: ', payload.biologicalAge)
            state.unixBiologicalBirthday = payload.unixBiologicalBirthday;
            state.biologicalAgeIsSet = payload.biologicalAgeIsSet;
        },

        updateCurrentPatientTallaDiana: (state,{ payload }) => {
            state.tallaDiana = payload;
        },

        updateCurrentPatientPerimetroCefalico: (state,{ payload }) => {
            state.perimetroCefalico = payload;
        },

        updateCurrentPatientPerimetroCintura: (state,{ payload }) => {
            state.perimetroCintura = payload;
        },

        updateCurrentPatientPresionArterial: (state,{ payload }) => {
            state.presionArterial = payload;
        },

        updateCurrentPatientExamsHistory: (state,{ payload }) => {
            state.examsHistory = payload;
        },

        updateCurrentPatientActualExamIndex: (state,{ payload }) => {
            state.actualExamIndex = payload;
        },
        updateCurrentPatientAnthropometry: (state,{ payload }) => {
            state.anthropometry = { 
                CCMINSALResult: payload.CCMINSALResult,
                CCMINSALRating: payload.CCMINSALRating,
                ICCResult: payload.ICCResult,
                ICCRating: payload.ICCRating,
                ICAResult: payload.ICAResult,
                ICARating: payload.ICARating,
                BrazoRelajadoCorregido: payload.BrazoRelajadoCorregido,
                CircunferenciaCadera: payload.CircunferenciaCadera,
                CircunferenciaCintura: payload.CircunferenciaCintura,
                Ectomorfia: payload.Ectomorfia,
                Endomorfia: payload.Endomorfia,
                InputDiametroFemur: payload.InputDiametroFemur,
                InputEtnia: payload.InputEtnia,
                InputPliegueTricipital: payload.InputPliegueTricipital,
                InputPliegueSubescapular: payload.InputPliegueSubescapular,
                InputPliegueCrestailiaca: payload.InputPliegueCrestailiaca,
                InputPliegueBicipital: payload.InputPliegueBicipital,
                InputPliegueSupraespinal: payload.InputPliegueSupraespinal,
                InputPliegueAbdominal: payload.InputPliegueAbdominal,
                InputPliegueMuslo: payload.InputPliegueMuslo,
                InputPlieguePierna: payload.InputPlieguePierna,
                InputPerimetroBrazoRelajado: payload.InputPerimetroBrazoRelajado,
                InputPerimetroBrazoContraido: payload.InputPerimetroBrazoContraido,
                InputPerimetroPierna: payload.InputPerimetroPierna,
                InputPerimetroMuslo: payload.InputPerimetroMuslo,
                InputDiametroMuneca: payload.InputDiametroMuneca,
                InputDiametroHumero: payload.InputDiametroHumero,
                InputPerimetroCintura: payload.InputPerimetroCintura,
                InputPerimetroCadera: payload.InputPerimetroCadera,
                SomatocartaX: payload.SomatocartaX,
                SomatocartaY: payload.SomatocartaY,
                SomatocartaIP: payload.SomatocartaIP,
                Mesomorfia: payload.Mesomorfia,
                MusloCorregido: payload.MusloCorregido,
                PiernaCorregido: payload.PiernaCorregido,
                MGCarterKG: payload.MGCarterKG,
                MGCarterPercent: payload.MGCarterPercent,
                MGFaulknerKG: payload.MGFaulknerKG,
                MGFaulknerPercent: payload.MGFaulknerPercent,
                MMLeeKG: payload.MMLeeKG,
                MMLeePercent: payload.MMLeePercent,
                MRKG: payload.MRKG,
                MRPercent: payload.MRPercent,
                MRV2KG: payload.MRV2KG,
                MRV2Percent: payload.MRV2Percent,
                MOKG: payload.MOKG,
                MOPercent: payload.MOPercent,
                Fecha: payload.Fecha,
                Edad: payload.Edad,
            }
        },

        clearCurrentPatient: ( state ) => {
            state.id = null;
            state.address = null;
            state.city = null;
            state.patientName = "Paciente";
            state.email = null;
            state.emailActivated = null;
            state.biologicalSex = null;
            state.genderIdentity = null;
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
            state.imcPregnant = [];
            state.age = {
                d: 0,
                m: 0,
                y: 0,
              };
            state.biologicalAge = {
                d: 0,
                m: 0,
                y: 0,
              };
            state.correctedAge = {
                d: 0,
                m: 0,
                y: 0,
              };
            state.estadioTanner = null;
            state.correctedAgeIsSet = false;
            state.tallaDiana = null;
            state.perimetroCefalico = null;
            state.perimetroCintura = null;
            state.presionArterial = null;
            state.examsHistory = [];
            state.actualExamIndex = null;
            state.portionDistribution = null;
            state.patientExams = { 
                examRequest: null,
                nutritionalIndications: null
            };
            state.anthropometry = null
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
    updateCurrentPatientIMCPregnant,
    updateCurrentPatientAge,
    updateCurrentPatientCorrectedAge,
    updateCurrentPatientUnixCorrectedBirthday,
    updateCurrentPatientEstadioTanner,
    updateCurrentPatientBiologicalAge,
    updateCurrentPatientUnixBiologicalBirthday,
    updateCurrentPatientTallaDiana,
    updateCurrentPatientPerimetroCefalico,
    updateCurrentPatientPerimetroCintura,
    updateCurrentPatientPresionArterial,
    updateCurrentPatientExamsHistory,
    updateCurrentPatientActualExamIndex,
    updateCurrentPatientAnthropometry,
    clearCurrentPatient,

} = currentPatientSlice.actions;