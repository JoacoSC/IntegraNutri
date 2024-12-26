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
        anthropometry: [],
        energyRequirements: null,
        adultEnergyRequirements: null,
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

            const { anthropometry } = payload;

            // Asegurarse de que anthropometry sea un array
            state.anthropometry = Array.isArray(anthropometry) ? anthropometry : [];
            
            if (state.anthropometry) {
                state.anthropometry = state.anthropometry.map(item => ({
                    BrazoRelajadoCorregido: item.BrazoRelajadoCorregido !== undefined ? item.BrazoRelajadoCorregido : null,
                    BrazoRelajadoCorregido: item.BrazoRelajadoCorregido !== undefined ? item.BrazoRelajadoCorregido : null,
                    CCMINSALResult: item.CCMINSALResult !== undefined ? item.CCMINSALResult : null,
                    CCMINSALRating: item.CCMINSALRating !== undefined ? item.CCMINSALRating : null,
                    CircunferenciaCadera: item.CircunferenciaCadera !== undefined ? item.CircunferenciaCadera : null,
                    CircunferenciaCintura: item.CircunferenciaCintura !== undefined ? item.CircunferenciaCintura : null,
                    Ectomorfia: item.Ectomorfia !== undefined ? item.Ectomorfia : null,
                    Endomorfia: item.Endomorfia !== undefined ? item.Endomorfia : null,
                    ICCResult: item.ICCResult !== undefined ? item.ICCResult : null,
                    ICCRating: item.ICCRating !== undefined ? item.ICCRating : null,
                    ICAResult: item.ICAResult !== undefined ? item.ICAResult : null,
                    ICARating: item.ICARating !== undefined ? item.ICARating : null,
                    InputDiametroFemur: item.InputDiametroFemur !== undefined ? item.InputDiametroFemur : null,
                    InputEtnia: item.InputEtnia !== undefined ? item.InputEtnia : null,
                    InputPliegueTricipital: item.InputPliegueTricipital !== undefined ? item.InputPliegueTricipital : null,
                    InputPliegueSubescapular: item.InputPliegueSubescapular !== undefined ? item.InputPliegueSubescapular : null,
                    InputPliegueCrestailiaca: item.InputPliegueCrestailiaca !== undefined ? item.InputPliegueCrestailiaca : null,
                    InputPliegueBicipital: item.InputPliegueBicipital !== undefined ? item.InputPliegueBicipital : null,
                    InputPliegueSupraespinal: item.InputPliegueSupraespinal !== undefined ? item.InputPliegueSupraespinal : null,
                    InputPliegueAbdominal: item.InputPliegueAbdominal !== undefined ? item.InputPliegueAbdominal : null,
                    InputPliegueMuslo: item.InputPliegueMuslo !== undefined ? item.InputPliegueMuslo : null,
                    InputPlieguePierna: item.InputPlieguePierna !== undefined ? item.InputPlieguePierna : null,
                    InputPerimetroBrazoRelajado: item.InputPerimetroBrazoRelajado !== undefined ? item.InputPerimetroBrazoRelajado : null,
                    InputPerimetroBrazoContraido: item.InputPerimetroBrazoContraido !== undefined ? item.InputPerimetroBrazoContraido : null,
                    InputPerimetroPierna: item.InputPerimetroPierna !== undefined ? item.InputPerimetroPierna : null,
                    InputPerimetroMuslo: item.InputPerimetroMuslo !== undefined ? item.InputPerimetroMuslo : null,
                    InputDiametroMuneca: item.InputDiametroMuneca !== undefined ? item.InputDiametroMuneca : null,
                    InputDiametroHumero: item.InputDiametroHumero !== undefined ? item.InputDiametroHumero : null,
                    InputPerimetroCintura: item.InputPerimetroCintura !== undefined ? item.InputPerimetroCintura : null,
                    InputPerimetroCadera: item.InputPerimetroCadera !== undefined ? item.InputPerimetroCadera : null,
                    SomatocartaX: item.SomatocartaX !== undefined ? item.SomatocartaX : null,
                    SomatocartaY: item.SomatocartaY !== undefined ? item.SomatocartaY : null,
                    SomatocartaIP: item.SomatocartaIP !== undefined ? item.SomatocartaIP : null,
                    Mesomorfia: item.Mesomorfia !== undefined ? item.Mesomorfia : null,
                    MusloCorregido: item.MusloCorregido !== undefined ? item.MusloCorregido : null,
                    PiernaCorregido: item.PiernaCorregido !== undefined ? item.PiernaCorregido : null,
                    MGCarterKG: item.MGCarterKG !== undefined ? item.MGCarterKG : null,
                    MGCarterPercent: item.MGCarterPercent !== undefined ? item.MGCarterPercent : null,
                    MGFaulknerKG: item.MGFaulknerKG !== undefined ? item.MGFaulknerKG : null,
                    MGFaulknerPercent: item.MGFaulknerPercent !== undefined ? item.MGFaulknerPercent : null,
                    MMLeeKG: item.MMLeeKG !== undefined ? item.MMLeeKG : null,
                    MMLeePercent: item.MMLeePercent !== undefined ? item.MMLeePercent : null,
                    MRKG: item.MRKG !== undefined ? item.MRKG : null,
                    MRPercent: item.MRPercent !== undefined ? item.MRPercent : null,
                    MRV2KG: item.MRV2KG !== undefined ? item.MRV2KG : null,
                    MRV2Percent: item.MRV2Percent !== undefined ? item.MRV2Percent : null,
                    MOKG: item.MOKG !== undefined ? item.MOKG : null,
                    MOPercent: item.MOPercent !== undefined ? item.MOPercent : null,
                    Fecha: item.Fecha !== undefined ? item.Fecha : null,
                    Edad: item.Edad !== undefined ? item.Edad : null,
                }));
            }

            state.energyRequirements = payload.energyRequirements;
            state.adultEnergyRequirements = payload.adultEnergyRequirements;
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
        updateCurrentPatientAnthropometry: (state, { payload }) => {
            state.anthropometry = payload;
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
            state.energyRequirements = null
            state.adultEnergyRequirements = null
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