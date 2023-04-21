import { createSlice } from '@reduxjs/toolkit';

export const loginHelperSlice = createSlice({
    name: 'loginHelper',
    initialState: {
        isNutritionistSelector: true,
    },
    reducers: {
        switchIsNutritionistSelector: (state,{ payload }) => {
            console.log(payload)
            state.isNutritionistSelector = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { switchIsNutritionistSelector } = loginHelperSlice.actions;