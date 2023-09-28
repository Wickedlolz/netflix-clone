import { QueryClient, QueryClientProvider } from 'react-query';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';

import Layout from './components/common/Layout/Layout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { FirebaseContextProvider } from './context/FirebaseContext';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <FirebaseContextProvider>
                    <Layout>
                        <ErrorBoundary>
                            <AppRoutes />
                        </ErrorBoundary>
                    </Layout>
                </FirebaseContextProvider>
            </HelmetProvider>
        </QueryClientProvider>
    );
}

export default App;
