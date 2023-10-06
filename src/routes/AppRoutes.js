import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Welcome from 'src/pages/Welcome/Welcome';
import SignIn from 'src/pages/SignIn/SignIn';
import NotFound from 'src/pages/NotFound/NotFound';
import AuthGuard from 'src/components/common/AuthGuard/AuthGuard';
import GuestGuard from 'src/components/common/GuestGuard/GuestGuard';
import Spinner from 'src/components/common/Spinner/Spinner';
import Search from 'src/pages/Search/Search';
import SignUp from 'src/pages/SignUp/SignUp';
const Home = lazy(() => import('src/pages/Home/Home'));
const Movies = lazy(() => import('src/pages/Movies/Movies'));
const MovieDetails = lazy(() => import('src/pages/MovieDetails/MovieDetails'));
const ShowDetails = lazy(() => import('src/pages/ShowDetails/ShowDetails'));
const Profile = lazy(() => import('src/pages/Profile/Profile'));
const MyList = lazy(() => import('src/pages/MyList/MyList'));
const Shows = lazy(() => import('src/pages/Shows/Shows'));
const Latest = lazy(() => import('src/pages/Latest/Latest'));

function AppRoutes() {
    return (
        <Routes>
            <Route element={<GuestGuard />}>
                <Route path="/" element={<Welcome />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
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
