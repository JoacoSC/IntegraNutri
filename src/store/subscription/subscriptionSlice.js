import { createSlice } from '@reduxjs/toolkit';

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState: {
        isActive: false,
        subStart: null,
        subEnd: null,
        membership: {},
    },
    reducers: {
        setSubscription: (state, { payload }) => {
            state.isActive = payload.isActive;
            state.subStart = payload.subStart;
            state.subEnd = payload.subEnd;
            state.membership = payload.membership;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setSubscription,
} = subscriptionSlice.actions;