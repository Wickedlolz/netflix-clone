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
    },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
