import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { journalSlice } from './journal';
import { patientsSlice } from './patients';
import { userInfoSlice } from './userInfo';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
        userInfo: userInfoSlice.reducer,
        patients: patientsSlice.reducer,
    },
})