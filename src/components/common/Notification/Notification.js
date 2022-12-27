import { useSelector, useDispatch } from 'react-redux';
import { clearNotify } from '../../../features/notification/notificationSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Notification() {
    const open = useSelector((state) => state.notify.open);
    const type = useSelector((state) => state.notify.type);
    const message = useSelector((state) => state.notify.message);
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
