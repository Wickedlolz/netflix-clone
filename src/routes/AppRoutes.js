import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Welcome from '../pages/Welcome/Welcome';
import SignIn from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import AuthGuard from '../components/common/AuthGuard/AuthGuard';
import GuestGuard from '../components/common/GuestGuard/GuestGuard';
import Spinner from '../components/common/Spinner/Spinner';
import Search from '../pages/Search/Search';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const ShowDetails = lazy(() => import('../pages/ShowDetails/ShowDetails'));
const Profile = lazy(() => import('../pages/Profile/Profile'));
const MyList = lazy(() => import('../pages/MyList/MyList'));
const Shows = lazy(() => import('../pages/Shows/Shows'));
const Latest = lazy(() => import('../pages/Latest/Latest'));

function AppRoutes() {
    return (
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

                <Route
                    path="/movies"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <Movies />
                        </Suspense>
                    }
                />
                <Route
                    path="/tv-shows"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <Shows />
                        </Suspense>
                    }
                />
                <Route
                    path="/movie/:movieId"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <MovieDetails />
                        </Suspense>
                    }
                />
                <Route
                    path="/show/:showId"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <ShowDetails />
                        </Suspense>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <Profile />
                        </Suspense>
                    }
                />
                <Route
                    path="/my-list"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <MyList />
                        </Suspense>
                    }
                />
                <Route
                    path="/latest"
                    element={
                        <Suspense fallback={<Spinner />}>
                            <Latest />
                        </Suspense>
                    }
                />
                <Route path="/search" element={<Search />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;
