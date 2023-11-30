import { createSlice } from '@reduxjs/toolkit';

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        userdataID: null,
        address: null,
        city: null,
        displayName: null,
        gender: null,
        isNutritionist: null,
        phone: null,
        region: null,
        rut: null,
        unixBirthday: null,
    },
    reducers: {
        setUserInfo: (state, { payload } ) => {
            state.userdataID = payload.id;
            state.address = payload.address;
            state.city = payload.city;
            state.displayName = payload.displayName;
            state.gender = payload.gender;
            state.isNutritionist = payload.isNutritionist;
            state.phone = payload.phone;
            state.region = payload.region;
            state.rut = payload.rut;
            state.unixBirthday = payload.unixBirthday;
        },
        setUserDisplayName: (state, { payload } ) => {
            
            state.displayName = payload;
            
        },
        wipeUserInfo: (state ) => {
            state.userdataID = null;
            state.address = null;
            state.city = null;
            state.displayName = null;
            state.gender = null;
            state.isNutritionist = null;
            state.phone = null;
            state.region = null;
            state.rut = null;
            state.unixBirthday = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const {
    setUserInfo,
    setUserDisplayName,
    wipeUserInfo,
} = userInfoSlice.actions;