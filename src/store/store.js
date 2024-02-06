import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { currentPatientSlice } from './currentPatient';
import { journalSlice } from './journal';
import { patientsSlice } from './patients';
import { userInfoSlice } from './userInfo';
import { loginHelperSlice } from './loginHelper';
import { calculatorSlice } from './calculator';
import { shoppingCartSlice } from './shoppingCart';
import { subscriptionSlice } from './subscription';
import { buyOrderSlice } from './buyOrder';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: journalSlice.reducer,
        userInfo: userInfoSlice.reducer,
        patients: patientsSlice.reducer,
        currentPatient: currentPatientSlice.reducer,
        loginHelper: loginHelperSlice.reducer,
        calculator: calculatorSlice.reducer,
        subscription: subscriptionSlice.reducer,
        shoppingCart: shoppingCartSlice.reducer,
        buyOrder: buyOrderSlice.reducer,
    },
})