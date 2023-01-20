import styled from 'styled-components';
import { requests } from '../../utils/requests';
import { Helmet } from 'react-helmet-async';

import MovieCollection from '../../components/MovieCollection/MovieCollection';
import Billboard from '../../components/Billboard/Billboard';

function Movies() {
    return (
        <Container>
            <Helmet>
                <title>Movies | Netflix</title>
            </Helmet>
            <Billboard
                title="Movies"
                text="Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience."
            />
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
