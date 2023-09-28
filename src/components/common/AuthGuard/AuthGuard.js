import { Navigate, Outlet } from 'react-router-dom';
import { useFirebaseContext } from 'src/context/FirebaseContext';

function AuthGuard({ children }) {
    const { user } = useFirebaseContext();

    if (!user) {
        return <Navigate to={'/'} replace={true} />;
    }

    return children ? children : <Outlet />;
}

export default AuthGuard;
