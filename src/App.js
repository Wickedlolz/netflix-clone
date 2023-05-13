import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';
import { HelmetProvider } from 'react-helmet-async';
import useLocalStorage from './hooks/useLocalStorage';
import AppRoutes from './routes/AppRoutes';

import Layout from './components/common/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    const dispatch = useDispatch();
    const [state] = useLocalStorage('session_id', undefined);

    if (state) {
        dispatch(setUser({ user: { ...state } }));
    }

    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <Layout>
                    <ErrorBoundary>
                        <AppRoutes />
                    </ErrorBoundary>
                </Layout>
            </HelmetProvider>
        </QueryClientProvider>
    );
}

export default App;
