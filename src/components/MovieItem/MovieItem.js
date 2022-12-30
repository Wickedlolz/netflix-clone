import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MovieItem({ movie }) {
    return (
        <Container to={'/movie/' + movie.id}>
            <Image
                loading="lazy"
                src={
                    'https://image.tmdb.org/t/p/w500' + movie?.backdrop_path ||
                    movie?.poster_path
                }
                alt={movie?.title || movie?.original_title}
            ></Image>
            <Layout></Layout>
            <Title>{movie?.title || movie?.original_title}</Title>
        </Container>
    );
}

export default MovieItem;

const Container = styled(Link)`
    position: relative;
    color: #fff;
    text-decoration: none;

    &:hover {
        div,
        h3,
        i {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Layout = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0;

    transition: opacity 300ms ease-in-out;

    background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    text-align: center;

    transition: opacity 300ms ease-in-out;

    transform: translate(-50%, -50%);
`;
