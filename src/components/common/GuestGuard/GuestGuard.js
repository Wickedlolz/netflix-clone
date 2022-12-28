import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function GuestGuard({ children }) {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (isAuth) {
        return <Navigate to="/home" replace />;
    }

    return children ? children : <Outlet />;
}

export default GuestGuard;
