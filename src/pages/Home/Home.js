import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { notify } from '../../features/notification/notificationSlice';
import { requests } from '../../utils/requests';
import { Helmet } from 'react-helmet-async';

import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Spinner from '../../components/common/Spinner/Spinner';
import MovieCollection from '../../components/MovieCollection/MovieCollection';

function Home() {
    const dispatch = useDispatch();
    const { isLoading, error, data } = useQuery('randomMovie', () => {
        return fetch(requests.requestUpcoming)
            .then((res) => res.json())
            .then((data) => {
                return data.results[
                    Math.floor(Math.random() * data.results?.length)
                ];
            });
    });

    if (error) {
        dispatch(
            notify({
                message: error.status_message,
                type: 'error',
            })
        );
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <Helmet>
                <title>Home | Netflix</title>
            </Helmet>
            {isLoading && <Spinner />}
            {!isLoading && <Hero movie={data} />}
            <MovieCollection
                title="Upcoming"
                fetchUrl={requests.requestUpcoming}
            />
            <MovieCollection
                title="Now Playing"
                fetchUrl={requests.requestNowPlaying}
            />
            <MovieCollection
                title="Trending"
                fetchUrl={requests.requestTrending}
            />

            <MovieCollection
                title="Popular"
                fetchUrl={requests.requestPopular}
            />
            <MovieCollection
                title="Top Rated"
                fetchUrl={requests.requestTopRated}
            />
        </Container>
    );
}

export default Home;

const Container = styled.section`
    width: 100%;
    color: #fff;
`;
