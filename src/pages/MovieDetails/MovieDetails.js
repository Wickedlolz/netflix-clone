import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../../components/common/Spinner/Spinner';
import MoreDetails from '../../components/MoreDetails/MoreDetails';
import TrailerModal from '../../components/TrailerModal/TrailerModal';
import { requests } from '../../utils/requests';

function MovieDetails() {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const {
        isLoading,
        error,
        data: movie,
    } = useQuery('movieDetails', () => {
        return fetch(requests.requestMovieById(movieId)).then((res) =>
            res.json()
        );
    });

    const movieCredits = useQuery('movieCredits', () => {
        return fetch(requests.requestMovieCredits(movieId)).then((res) =>
            res.json()
        );
    });

    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    if (isLoading) {
        return <Spinner />;
    }

    if (error) {
        // TODO!: Show notification for this error.
        navigate('/home');
    }

    return (
        <Container>
            <TrailerModal
                open={open}
                handleCloseModal={handleCloseModal}
                videos={movie?.videos}
            />
            <Preview>
                <Image
                    loading="lazy"
                    src={
                        'https://image.tmdb.org/t/p/original' +
                            movie?.backdrop_path || movie?.poster_path
                    }
                    alt={movie?.title || movie?.original_title}
                ></Image>
                <Layout></Layout>
                <Content>
                    <Title>{movie?.title || movie?.original_title}</Title>
                    <InfoWrapper>
                        <InfoText>
                            {movie?.release_date.substring(0, 4)}
                        </InfoText>
                        <Spacer></Spacer>
                        <InfoText rating>
                            {Math.floor(movie?.vote_average)}+
                        </InfoText>
                        <Spacer></Spacer>
                        <InfoText>{movie?.runtime}m</InfoText>
                        <Spacer></Spacer>
                        <InfoText>
                            {movie?.genres.map((g) => g.name).join(' ')}
                        </InfoText>
                    </InfoWrapper>
                    <Overview>{movie?.overview}</Overview>
                    {!movieCredits.isLoading && (
                        <Starring>
                            <StarringText>Starring</StarringText>:{' '}
                            {movieCredits.data.cast
                                .slice(0, 3)
                                .map((c) => c.name)
                                .join(', ')}
                        </Starring>
                    )}
                </Content>
            </Preview>
            <Tagline>
                <TaglineText>{movie.tagline}</TaglineText>
            </Tagline>
            <MoreDetails movie={movie} cast={movieCredits.data.cast} />
            <Btn onClick={handleOpenModal}>Play Trailer</Btn>
        </Container>
    );
}

export default MovieDetails;

const Container = styled.section`
    color: #fff;
`;

const Preview = styled.section`
    position: relative;
    height: 700px;
    margin-bottom: 25px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

const Layout = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    background: rgb(0, 0, 0);
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.4) 37%,
        rgba(0, 0, 0, 0) 100%
    );
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 2%;

    transform: translateY(-50%);
`;

const Title = styled.h1`
    width: 45%;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: default;
`;

const InfoWrapper = styled.div`
    width: 45%;
    color: #c3bfbf;
    margin-bottom: 15px;
`;

const Spacer = styled.span`
    padding: 0px 1px;
    background-color: #c3bfbf;
    margin: 0 8px;
`;

const InfoText = styled.span`
    border: ${(props) => (props.rating ? '1px solid #c3bfbf' : '')};
    padding: ${(props) => (props.rating ? '0px 8px' : '')};
`;

const Overview = styled.p`
    width: 45%;
    margin-bottom: 25px;
    cursor: default;
`;

const Starring = styled.p``;

const StarringText = styled.span`
    color: #c3bfbf;
`;

const Tagline = styled.div`
    width: 95%;
    margin: 0px auto;
    padding: 20px 0px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`;

const TaglineText = styled.p`
    text-align: center;
    color: #a3a3a3;
`;

const Btn = styled.button`
    background-color: white;
    margin-top: 150px;
`;
