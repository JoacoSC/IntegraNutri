import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        subscriptions: [],
        selectedSubscription: {},
    },
    reducers: {
        setSubscriptions: (state, { payload }) => {
            state.subscriptions = payload;
        },
        setSelectedSubscription: (state, { payload }) => {
            state.selectedSubscription = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setSubscriptions,
    setSelectedSubscription,
} = shoppingCartSlice.actions;