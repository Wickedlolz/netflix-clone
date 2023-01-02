import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MoreDetails({ item, cast, recomended }) {
    return (
        <Container>
            <Title>More Details</Title>
            <ContentList>
                <ListItem>
                    <SubTitle>Genres</SubTitle>
                    <Text>{item?.genres.map((g) => g.name).join(' ')}</Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Languages</SubTitle>
                    <Text>
                        {item?.spoken_languages.map((g) => g.name).join(' ')}
                    </Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Released</SubTitle>
                    <Text>{item?.release_date || item?.first_air_date}</Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Status</SubTitle>
                    <Text>{item?.status}</Text>
                </ListItem>
                <ListItem>
                    <SubTitle>Production Companies</SubTitle>
                    <Text>{item?.production_companies[0].name}</Text>
                </ListItem>
            </ContentList>
            <SubTitle>Cast</SubTitle>
            <ContentList cast>
                {cast?.map((person, i) => (
                    <ListItem key={i}>{person.name}</ListItem>
                ))}
            </ContentList>
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

const Text = styled.p``;
