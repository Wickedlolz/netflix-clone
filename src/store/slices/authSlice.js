import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: '',
        username: '',
        sessionToken: '',
        isAuth: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.user.id;
            state.username = action.payload.user.username;
            state.sessionToken = action.payload.user.sessionToken;
            state.isAuth = true;
        },
        logout: (state) => {
            state.id = '';
            state.username = '';
            state.sessionToken = '';
            state.isAuth = false;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
