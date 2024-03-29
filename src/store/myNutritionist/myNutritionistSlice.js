
import { createSlice } from '@reduxjs/toolkit';

export const myNutritionistSlice = createSlice({
    name: 'myNutritionist',
    initialState: {
        nutritionistData: {},
    },
    reducers: {
        setMyNutritionist: (state,{ payload }) => {    
            state.nutritionistData = payload.nutritionistData[0];
        },
        clearMyNutritionist: (state) => {
            state.nutritionistData = {};
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setMyNutritionist,
    clearMyNutritionist,
} = myNutritionistSlice.actions;