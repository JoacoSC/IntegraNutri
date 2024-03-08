import { createSlice } from '@reduxjs/toolkit';

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        isActive: false,
        subStart: null,
        subEnd: null,
        membership: {},
        message: '',
    },
    reducers: {
        setSubscription: (state, { payload }) => {
            state.isActive = payload.isActive;
            state.subStart = payload.subStart;
            state.subEnd = payload.subEnd;
            state.membership = payload.membership;
            state.message = payload.message;
        },
        unsetSubscription: (state) => {
            state.isActive = false;
            state.subStart = null;
            state.subEnd = null;
            state.membership = {};
            state.message = '';
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setSubscription,
    unsetSubscription
} = subscriptionSlice.actions;