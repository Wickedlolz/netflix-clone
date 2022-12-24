import { useNavigate } from 'react-router-dom';
import { requests } from '../../utils/requests';

import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Spinner from '../../components/common/Spinner/Spinner';
import MovieCollection from '../../components/MovieCollection/MovieCollection';

function Home() {
    const navigate = useNavigate();
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
        // TODO!: Show notifaction for this error then redirect to home page.
        return navigate('/');
    }

    return (
        <Container>
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
