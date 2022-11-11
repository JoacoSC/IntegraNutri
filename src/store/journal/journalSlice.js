import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        workingDayStartHours: 8,
        workingDayStartMinutes: 0,
        consultationHours: 0,
        consultationMinutes: 30,
        consultationsPerDay: 14,

    },
    reducers: {
        editJournal: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { editJournal } = journalSlice.actions;