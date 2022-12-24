import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false,
        videos: [],
    },
    reducers: {
        show: (state, action) => {
            state.open = true;
            state.videos = action.payload.videos;
        },
        hide: (state) => {
            state.open = false;
        },
    },
});

export const { show, hide } = modalSlice.actions;

export default modalSlice.reducer;
