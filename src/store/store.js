import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice';
import notificationReducer from './slices/notificationSlice';

export default configureStore({
    reducer: {
        modal: modalReducer,
        notify: notificationReducer,
    },
});
