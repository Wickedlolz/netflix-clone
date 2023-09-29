import { Link } from 'react-router-dom';
import { SMALL_IMAGE_URL } from 'src/utils/constants';
import styled from 'styled-components';

function ShowItem({ show }) {
    return (
        <Container to={'/show/' + show.id}>
            <Image
                loading="lazy"
                src={`${SMALL_IMAGE_URL}${
                    show?.backdrop_path || show?.poster_path
                }`}
                alt={show?.name || show?.original_name}
            ></Image>
            <Title>{show?.name || show?.original_name}</Title>
        </Container>
    );
}

export default ShowItem;

const Container = styled(Link)`
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
    height: 70%;
    object-fit: cover;
`;

const Title = styled.h3`
    text-align: center;
    font-size: 1rem;
    overflow: hidden;
`;
