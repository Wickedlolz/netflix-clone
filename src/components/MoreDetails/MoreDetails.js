import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MoreDetails({ movie, cast, recomended }) {
    return (
        <Container>
            <Title>More Details</Title>
            <ContentList>
                <ListItem>
                    <SubTitle>Genres</SubTitle>
                    <Text>{movie?.genres.map((g) => g.name).join(' ')}</Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Languages</SubTitle>
                    <Text>
                        {movie?.spoken_languages.map((g) => g.name).join(' ')}
                    </Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Released</SubTitle>
                    <Text>{movie?.release_date}</Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Status</SubTitle>
                    <Text>{movie?.status}</Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Production Companies</SubTitle>
                    <Text>{movie?.production_companies[0].name}</Text>
                </ListItem>
            </ContentList>
            <SubTitle>Cast</SubTitle>
            <ContentList cast>
                {cast?.map((person, i) => (
                    <ListItem key={i}>{person.name}</ListItem>
                ))}
            </ContentList>
            <Title>More Like This</Title>
            <MoreLikeThis>
                {recomended?.length > 0 &&
                    recomended?.slice(0, 12).map((s, i) => (
                        <StyledLink key={i} to={'/movie/' + s.id}>
                            <Image
                                loading="lazy"
                                src={
                                    'https://image.tmdb.org/t/p/w500' +
                                        s?.backdrop_path || s?.poster_path
                                }
                                alt={s?.title || s?.original_title}
                            ></Image>
                        </StyledLink>
                    ))}

                {recomended?.length === 0 && (
                    <Text sp>
                        We don't have enough data to suggest any movies based on{' '}
                        {movie.title}
                    </Text>
                )}
            </MoreLikeThis>
        </Container>
    );
}

export default MoreDetails;

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
`;

const Title = styled.h2`
    font-weight: bold;
    margin-bottom: 20px;
    cursor: default;
`;

const ContentList = styled.ul`
    display: grid;
    grid-template-columns: 33.333% 33.333% 33.333%;
    row-gap: ${(props) => (props.cast ? '2px' : '20px')};
`;

const ListItem = styled.li``;

const SubTitle = styled.h4`
    color: #c3bfbf;
`;

const Text = styled.p`
    grid-column: ${(props) => (props.sp ? 'span 2' : '')};
`;

const MoreLikeThis = styled.div`
    display: grid;
    /* grid-template-columns: 33.333% 33.333% 33.333%; */
    grid-template-columns: 25% 25% 25% 25%;
    gap: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
