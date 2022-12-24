import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import modalReducer from '../features/modal/modalSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer,
    },
});
