import { Navigate, Outlet } from 'react-router-dom';
import { useFirebaseContext } from 'src/context/FirebaseContext';

function GuestGuard({ children }) {
    const { user } = useFirebaseContext();

    if (user) {
        return <Navigate to="/home" replace />;
    }

    return children ? children : <Outlet />;
}

export default GuestGuard;
