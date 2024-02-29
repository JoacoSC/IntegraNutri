import { createSlice } from '@reduxjs/toolkit';

export const reminder24HoursSlice = createSlice({
    name: 'reminder24Hours',
    initialState: {
        reminderTables: [],
    },
    reducers: {
        setReminder24Hours: (state, { payload }) => {
            state.reminderTables = payload;
        },
        clearReminder24Hours: (state) => {
            state.reminderTables = [];
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setReminder24Hours,
    clearReminder24Hours,
} = reminder24HoursSlice.actions;