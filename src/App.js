import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';
import useLocalStorage from './hooks/useLocalStorage';

import Layout from './components/common/Layout/Layout';
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';

import './App.css';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

function App() {
    const dispatch = useDispatch();
    const [state, setItem] = useLocalStorage('session_id', undefined);

    if (state) {
        dispatch(setUser({ user: { ...state } }));
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
