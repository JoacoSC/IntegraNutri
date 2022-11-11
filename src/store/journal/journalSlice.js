import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        workingDayStartHours: 8,
        workingDayStartMinutes: 0,
        consultationHours: 1,
        consultationMinutes: 0,
        consultationsPerDay: 11,

    },
    reducers: {
        editJournal: (state, { payload } ) => {
            
            state.workingDayStartHours = payload.workingDayStartHours;
            state.workingDayStartMinutes = payload.workingDayStartMinutes;
            state.consultationHours = payload.consultationHours;
            state.consultationMinutes = payload.consultationMinutes;
            state.consultationsPerDay = payload.consultationsPerDay;
        },
    }
});


// Action creators are generated for each case reducer function
export const { editJournal } = journalSlice.actions;