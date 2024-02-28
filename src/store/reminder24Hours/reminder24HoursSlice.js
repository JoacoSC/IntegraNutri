import { createSlice } from '@reduxjs/toolkit';

export const reminder24HoursSlice = createSlice({
    name: 'reminder24Hours',
    initialState: {
        reminderTable: null,
    },
    reducers: {
        setReminder24Hours: (state, { payload }) => {
            state.reminderTable = payload;
        },
        clearReminder24Hours: (state) => {
            state.reminderTable = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setReminder24Hours,
    clearReminder24Hours,
} = reminder24HoursSlice.actions;