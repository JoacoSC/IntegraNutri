import { createSlice } from '@reduxjs/toolkit';

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        isActive: false,
        subStart: null,
        subEnd: null,
        membership: null,
    },
    reducers: {
        setSubscriptionActive: (state, { payload }) => {
            state.isActive = payload;
        },
        setSubscriptionStart: (state, { payload }) => {
            state.subStart = payload;
        },
        setSubscriptionEnd: (state, { payload }) => {
            state.subEnd = payload;
        },
        setMembership: (state, { payload }) => {
            state.membership = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setSubscriptionActive,
    setSubscriptionStart,
    setSubscriptionEnd,
    setMembership,
} = subscriptionSlice.actions;