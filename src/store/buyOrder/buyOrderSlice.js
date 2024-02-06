import { createSlice } from '@reduxjs/toolkit';

export const buyOrderSlice = createSlice({
    name: 'buyOrder',
    initialState: {
        transaction_date: '2024-02-06T02:50:00.314Z',
        amount: 0,
        response_code: 0,
        authorization_code: '0',
        session_id: 'S-00000',
        payment_type_code: 'VN',
        installments_number: 0,
        vci: 'TSY',
        buy_order: 'O-1-123456',
        card_detail: { card_number: '1234' },
        accounting_date: '0205',
        status: 'CHECKING'
    },
    reducers: {
        setBuyOrder: (state, { payload }) => {
            state.transaction_date = payload.transaction_date;
            state.amount = payload.amount;
            state.response_code = payload.response_code;
            state.authorization_code = payload.authorization_code;
            state.session_id = payload.session_id;
            state.payment_type_code = payload.payment_type_code;
            state.installments_number = payload.installments_number;
            state.vci = payload.vci;
            state.buy_order = payload.buy_order;
            state.card_detail = payload.card_detail;
            state.accounting_date = payload.accounting_date;
            state.status = payload.status;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setBuyOrder,
} = buyOrderSlice.actions;