import { useSelector } from 'react-redux';
import { requests } from '../../utils/requests';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

import Billboard from '../../components/Billboard/Billboard';
import MovieCollection from '../../components/MovieCollection/MovieCollection';
import ShowColletion from '../../components/ShowColletion/ShowColletion';

function MyList() {
    const { id, username, sessionToken } = useSelector((state) => state.auth);

    return (
        <Container>
            <Helmet>
                <title>My List | Netflix</title>
            </Helmet>
            <Billboard title="My List" />
            <MovieCollection
                title="Movies"
                fetchUrl={requests.requestMovieWatchlist(id, sessionToken)}
            />
            <ShowColletion
                title="Shows"
                fetchUrl={requests.requestShowWatchlist(id, sessionToken)}
            />
        </Container>
    );
}

export default MyList;

const Container = styled.section`
    color: #fff;
`;
