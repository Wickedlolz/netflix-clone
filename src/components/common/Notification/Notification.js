import { useSelector, useDispatch } from 'react-redux';
import { clearNotify } from '../../../store/slices/notificationSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Notification() {
    const { open, type, message } = useSelector((state) => state.notify);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(clearNotify());
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

export default Notification;
