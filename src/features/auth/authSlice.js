import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: null,
    },
    reducers: {
        setUser: (state, action) => {
            state = {
                email: action.payload.email,
            };
        },
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
