import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        journalID: null,
        workingDayStartHours: 8,
        workingDayStartMinutes: 0,
        consultationHours: 1,
        consultationMinutes: 0,
        consultationsPerDay: 11,
        journalIsSet: false,
        isEditingJournal: false,
        isAddingNewConsultation: false,

    },
    reducers: {
        editJournal: (state, { payload } ) => {
            
            state.journalID = payload.journalID;
            state.workingDayStartHours = payload.workingDayStartHours;
            state.workingDayStartMinutes = payload.workingDayStartMinutes;
            state.consultationHours = payload.consultationHours;
            state.consultationMinutes = payload.consultationMinutes;
            state.consultationsPerDay = payload.consultationsPerDay;
            state.journalIsSet = payload.journalIsSet;
        },
        setMyJournal: (state, { payload } ) => {

            state.journalID = payload.journalID;
            state.workingDayStartHours = payload.workingDayStartHours;
            state.workingDayStartMinutes = payload.workingDayStartMinutes;
            state.consultationHours = payload.consultationHours;
            state.consultationMinutes = payload.consultationMinutes;
            state.consultationsPerDay = payload.consultationsPerDay;
            state.journalIsSet = payload.journalIsSet;
        },
        updateJournalID: (state, { payload }) => {

            state.journalID = payload;
        },
        isEditingJournal: (state, { payload }) => {

            state.isEditingJournal = payload;
        },
        unsetJournal: (state) => {

            state.journalID = null;
            state.workingDayStartHours = 8;
            state.workingDayStartMinutes = 0;
            state.consultationHours = 1;
            state.consultationMinutes = 0;
            state.consultationsPerDay = 11;
            state.journalIsSet = false;
            state.isEditingJournal = false;
        },
        isAddingNewConsultation: (state, { payload }) => {

            state.isAddingNewConsultation = payload;
        }
        
    }
});


// Action creators are generated for each case reducer function
export const {
    editJournal,
    setMyJournal,
    updateJournalID,
    isEditingJournal,
    unsetJournal,
    isAddingNewConsultation,
    } = journalSlice.actions;