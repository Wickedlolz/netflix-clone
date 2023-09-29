import { Link } from 'react-router-dom';
import { SMALL_IMAGE_URL } from 'src/utils/constants';
import styled from 'styled-components';

function MovieItem({ movie }) {
    return (
        <Container to={'/movie/' + movie.id}>
            <Image
                loading="lazy"
                src={`${SMALL_IMAGE_URL}${
                    movie?.backdrop_path || movie?.poster_path
                }`}
                alt={movie?.title || movie?.original_title}
            ></Image>
            <Title>{movie?.title || movie?.original_title}</Title>
        </Container>
    );
}

export default MovieItem;

const Container = styled(Link)`
    color: #fff;
    text-decoration: none;
    width: 100%;

    &:hover {
        div,
        h3 {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
`;

const Title = styled.h3`
    text-align: center;
    font-size: 1rem;
    overflow: hidden;
`;
