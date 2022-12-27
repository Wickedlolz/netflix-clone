import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        open: false,
        type: 'success',
        message: '',
    },
    reducers: {
        notify: (state, action) => {
            state.open = true;
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        clearNotify: (state) => {
            state.open = false;
            state.type = '';
            state.message = '';
        },
    },
});

export const { notify, clearNotify } = notificationSlice.actions;

export default notificationSlice.reducer;
