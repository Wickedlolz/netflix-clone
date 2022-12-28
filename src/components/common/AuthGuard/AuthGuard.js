import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function AuthGuard({ children }) {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (!isAuth) {
        return <Navigate to={'/'} replace={true} />;
    }

    return children ? children : <Outlet />;
}

export default AuthGuard;
