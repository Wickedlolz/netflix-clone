import { lazy, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDispatch } from 'react-redux';
import { setUser } from './features/auth/authSlice';
import useLocalStorage from './hooks/useLocalStorage';

import Layout from './components/common/Layout/Layout';
import Welcome from './pages/Welcome/Welcome';
// import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import AuthGuard from './components/common/AuthGuard/AuthGuard';
import GuestGuard from './components/common/GuestGuard/GuestGuard';
import Movies from './pages/Movies/Movies';
import Shows from './pages/Shows/Shows';
import ShowDetails from './pages/ShowDetails/ShowDetails';
import MyList from './pages/MyList/MyList';
import Spinner from './components/common/Spinner/Spinner';
const Home = lazy(() => import('./pages/Home/Home'));

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
                    <Route element={<GuestGuard />}>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/sign-in" element={<SignIn />} />
                    </Route>
                    <Route element={<AuthGuard />}>
                        <Route
                            path="/home"
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <Home />
                                </Suspense>
                            }
                        />

                        <Route path="/movies" element={<Movies />} />
                        <Route path="/tv-shows" element={<Shows />} />
                        <Route
                            path="/movie/:movieId"
                            element={<MovieDetails />}
                        />
                        <Route path="/show/:showId" element={<ShowDetails />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/my-list" element={<MyList />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
