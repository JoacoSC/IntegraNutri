import { createSlice } from '@reduxjs/toolkit';

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        isActive: false,
        subStart: null,
        subEnd: null,
        membership: {},
        message: '',
        message2: '',
    },
    reducers: {
        setSubscription: (state, { payload }) => {
            state.isActive = payload.isActive;
            state.subStart = payload.subStart;
            state.subEnd = payload.subEnd;
            state.membership = payload.membership;
            state.message = payload.message;
            state.message2 = payload.message2;
        },
        unsetSubscription: (state) => {
            state.isActive = false;
            state.subStart = null;
            state.subEnd = null;
            state.membership = {};
            state.message = '';
            state.message2 = '';
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setSubscription,
    unsetSubscription
} = subscriptionSlice.actions;