import { useNavigate } from 'react-router-dom';
import { requests } from '../../utils/requests';

import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Spinner from '../../components/common/Spinner/Spinner';
import MovieCollection from '../../components/MovieCollection/MovieCollection';
import TrailerModal from '../../components/TrailerModal/TrailerModal';
import { useState } from 'react';

function Home() {
    const navigation = useNavigate();
    const { isLoading, error, data } = useQuery('randomMovie', () => {
        return fetch(requests.requestUpcoming)
            .then((res) => res.json())
            .then((data) => {
                return data.results[
                    Math.floor(Math.random() * data.results?.length)
                ];
            });
    });
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    if (error) {
        // TODO!: Show notifaction for this error then redirect to home page.
        return navigation('/');
    }

    return (
        <Container>
            <TrailerModal open={open} handleCloseModal={handleCloseModal} />
            {isLoading && <Spinner />}
            {!isLoading && (
                <Hero
                    movie={data}
                    openModal={handleOpenModal}
                    closeModal={handleCloseModal}
                />
            )}
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
