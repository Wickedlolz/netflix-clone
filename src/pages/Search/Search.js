import { useSearchParams } from 'react-router-dom';
import { requests } from 'src/utils/requests';
import styled from 'styled-components';
import MovieCollection from 'src/components/MovieCollection/MovieCollection';
import Billboard from 'src/components/Billboard/Billboard';

function Search() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('t');

    return (
        <Container>
            <Billboard
                title="Explore titles related to"
                text={searchQuery.split(' ').join(' | ')}
            />
            <MovieCollection
                fetchUrl={requests.requestSearchMovies(searchQuery)}
                title={'Results from ' + searchQuery}
            />
        </Container>
    );
}

export default Search;

const Container = styled.article`
    color: #fff;
`;
