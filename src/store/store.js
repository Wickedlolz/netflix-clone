import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import modalReducer from '../features/modal/modalSlice';
import notificationReducer from '../features/notification/notificationSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer,
        notify: notificationReducer,
    },
});
