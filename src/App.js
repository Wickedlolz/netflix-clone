import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from './components/common/Layout/Layout';
import Welcome from './pages/Welcome/Welcome';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';

import './App.css';
import SignIn from './pages/SignIn/SignIn';

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
            <Layout>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                    <Route path="/sign-in" element={<SignIn />} />
                </Routes>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;
