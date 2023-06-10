import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MoreLikeThis({ recomended, title }) {
    return (
        <>
            <Title>More Like This</Title>
            <Container>
                {recomended?.length > 0 &&
                    recomended?.slice(0, 12).map((s, i) => (
                        <StyledLink
                            key={i}
                            to={
                                s?.first_air_date
                                    ? '/show/' + s.id
                                    : '/movie/' + s.id
                            }
                        >
                            <Image
                                loading="lazy"
                                src={
                                    'https://image.tmdb.org/t/p/w500' +
                                        s?.backdrop_path || s?.poster_path
                                }
                                alt={s?.title || s?.original_title}
                            ></Image>
                            <MovieTitle>
                                {s.title || s.original_title}
                            </MovieTitle>
                        </StyledLink>
                    ))}

                {recomended?.length === 0 && (
                    <Text sp>
                        We don't have enough data to suggest any movies based on{' '}
                        {title}
                    </Text>
                )}
            </Container>
        </>
    );
}

export default MoreLikeThis;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;

    display: grid;
    /* grid-template-columns: 33.333% 33.333% 33.333%; */
    grid-template-columns: 25% 25% 25% 25%;
    gap: 10px;

    @media screen and (max-width: 400px) {
        grid-template-columns: 50% 50%;
    }
`;

const Title = styled.h2`
    font-weight: bold;
    margin-bottom: 20px;
    cursor: default;
    width: 90%;
    margin: 0 auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Image = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
`;

const Text = styled.p`
    grid-column: ${(props) => (props.sp ? 'span 2' : '')};
`;

const MovieTitle = styled.h3`
    text-align: center;
    font-size: 1rem;
    overflow: hidden;
`;
