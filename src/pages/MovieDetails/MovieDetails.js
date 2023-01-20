import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../../features/modal/modalSlice';
import { notify } from '../../features/notification/notificationSlice';
import { requests } from '../../utils/requests';
import { useIsMovieLiked } from 'src/hooks/useIsMovieLiked';
import * as movieService from '../../services/movieService';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

import Spinner from '../../components/common/Spinner/Spinner';
import MoreDetails from '../../components/MoreDetails/MoreDetails';
import MoreLikeThis from '../../components/MoreLikeThis/MoreLikeThis';

function MovieDetails() {
    const { movieId } = useParams();
    const { id, username, sessionToken, isAuth } = useSelector(
        (state) => state.auth
    );
    const dispatch = useDispatch();

    const {
        isLoading,
        error,
        data: movie,
    } = useQuery(['movieDetails', movieId], () => {
        return fetch(requests.requestMovieById(movieId)).then((res) =>
            res.json()
        );
    });

    const movieCredits = useQuery('movieCredits', () => {
        return fetch(requests.requestMovieCredits(movieId)).then((res) =>
            res.json()
        );
    });

    const recomemndedMovies = useQuery(['recomemndedMovies', movieId], () => {
        return fetch(requests.requestRecomendedMovies(movieId)).then((res) =>
            res.json()
        );
    });

    const isLiked = useIsMovieLiked(id, sessionToken, movieId);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [movieId]);

    const handleOpenModal = () => {
        dispatch(show({ videos: movie?.videos }));
    };

    const handleAddToWatchlist = () => {
        movieService
            .addToWatchlist(id, sessionToken, movieId)
            .then((result) => {
                if (result.success) {
                    dispatch(
                        notify({
                            message: 'Successfully added to My List.',
                            type: 'success',
                        })
                    );
                }
            });
    };

    const handleMarkAsFavourite = () => {
        movieService
            .markAsFavourite(id, sessionToken, movieId)
            .then((result) => {
                if (result.success) {
                    dispatch(
                        notify({
                            message: 'Successfully added to Favourites.',
                            type: 'success',
                        })
                    );
                }
            });
    };

    if (isLoading && movieCredits.isLoading && recomemndedMovies.isLoading) {
        return <Spinner />;
    }

    if (error && movieCredits.error && recomemndedMovies.error) {
        dispatch(notify({ message: 'Something went wrong.', type: 'error' }));
        return <Navigate to="/" />;
    }

    return (
        <Container>
            <Helmet>
                <title>
                    {movie?.title || movie?.original_title || 'Movie'} | Netflix
                </title>
            </Helmet>
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
                            {movie?.release_date?.substring(0, 4)}
                        </InfoText>
                        <Spacer></Spacer>
                        <InfoText rating>
                            {Math.floor(movie?.vote_average)}+
                        </InfoText>
                        <Spacer></Spacer>
                        <InfoText>{movie?.runtime}m</InfoText>
                        <Spacer></Spacer>
                        <InfoText>
                            {movie?.genres?.map((g) => g.name).join(' ')}
                        </InfoText>
                    </InfoWrapper>
                    <Actions>
                        <Button primary>
                            <i className="fa-solid fa-play"></i> Play
                        </Button>
                        <Button secondary onClick={handleOpenModal}>
                            <i className="fa-solid fa-circle-play"></i> Trailer
                        </Button>
                        {isAuth && (
                            <>
                                <Button
                                    action="true"
                                    onClick={handleAddToWatchlist}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                                {!isLiked ? (
                                    <Button
                                        action="true"
                                        onClick={handleMarkAsFavourite}
                                    >
                                        <i className="fa-regular fa-thumbs-up"></i>
                                    </Button>
                                ) : (
                                    <Button action="true">
                                        <i className="fa-regular fa-thumbs-down"></i>
                                    </Button>
                                )}
                            </>
                        )}
                    </Actions>
                    <Overview>{movie?.overview}</Overview>
                    {!movieCredits.isLoading && (
                        <Starring>
                            <StarringText>Starring</StarringText>:{' '}
                            {movieCredits?.data?.cast
                                .slice(0, 3)
                                .map((c) => c?.name)
                                .join(', ')}
                        </Starring>
                    )}
                </Content>
            </Preview>
            <Tagline>
                <TaglineText>{movie?.tagline}</TaglineText>
            </Tagline>
            <MoreDetails
                item={movie}
                cast={movieCredits.data?.cast}
                recomended={recomemndedMovies.data?.results}
            />
            <MoreLikeThis
                recomended={recomemndedMovies.data?.results}
                title={movie?.title || movie?.original_title}
            />
        </Container>
    );
}

export default MovieDetails;

const Container = styled.section`
    color: #fff;
    margin-bottom: 10px;
`;

const Preview = styled.section`
    position: relative;
    height: 700px;
    margin-bottom: 25px;

    @media screen and (max-width: 400px) {
        height: 900px;
    }
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

    @media screen and (max-width: 400px) {
        top: unset;
        left: unset;
        bottom: 0px;
        background-color: rgba(0, 0, 0, 0.6);
        transform: unset;
    }
`;

const Title = styled.h1`
    width: 45%;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: default;

    @media screen and (max-width: 900px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const InfoWrapper = styled.div`
    width: 70%;
    color: #c3bfbf;
    margin-bottom: 15px;

    @media screen and (max-width: 900px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
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

const Actions = styled.div`
    width: 70%;
    margin-bottom: 25px;

    @media screen and (max-width: 900px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Button = styled.button`
    background-color: ${(props) =>
        props.primary ? '#fff' : props.action ? 'transparent' : '#505050'};
    font-size: ${(props) => (props.action ? '18px' : '')};
    padding: ${(props) =>
        props.primary || props.secondary ? '8px 25px' : '7px 14px'};
    color: ${(props) => (props.secondary || props.action ? '#fff' : '#000')};
    border: ${(props) => (props.action ? '1px solid #fff' : 'none')};
    outline: none;
    border-radius: ${(props) =>
        props.primary || props.secondary ? '7px' : '50%'};
    font-weight: bold;
    cursor: pointer;

    &:not(:first-child) {
        margin-left: 10px;
    }
`;

const Overview = styled.p`
    width: 45%;
    margin-bottom: 25px;
    cursor: default;

    @media screen and (max-width: 900px) {
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
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
