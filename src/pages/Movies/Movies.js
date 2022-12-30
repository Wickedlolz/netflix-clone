import { requests } from '../../utils/requests';
import MovieCollection from '../../components/MovieCollection/MovieCollection';
import styled from 'styled-components';

function Movies() {
    return (
        <Container>
            <Header>
                <Content>
                    <Title>Movies</Title>
                    <Text>
                        Movies move us like nothing else can, whether they're
                        scary, funny, dramatic, romantic or anywhere in-between.
                        So many titles, so much to experience.
                    </Text>
                </Content>
            </Header>
            <MovieCollection
                title="Popular on Netflix"
                fetchUrl={requests.requestPopular}
            />
            <MovieCollection
                title="Action Movies"
                fetchUrl={requests.requestMarvel}
            />
            <MovieCollection
                title="Heartfelt Movies"
                fetchUrl={requests.requestDisney}
            />
            <MovieCollection
                title="Suspenseful Movies"
                fetchUrl={requests.requestUnexpectedHeroes}
            />
            <MovieCollection
                title="Action & Adventure"
                fetchUrl={requests.requestUpcoming}
            />
        </Container>
    );
}

export default Movies;

const Container = styled.section`
    color: #fff;
`;

const Header = styled.section`
    position: relative;
    height: 250px;
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 30px;
`;

const Title = styled.h2`
    font-size: 52px;
    font-weight: bold;
    cursor: default;
`;

const Text = styled.p`
    width: 600px;
    font-weight: bold;
    font-size: 18px;
    cursor: default;
`;
