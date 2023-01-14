import styled from 'styled-components';
import { requests } from 'src/utils/requests';

import Billboard from 'src/components/Billboard/Billboard';
import MovieCollection from 'src/components/MovieCollection/MovieCollection';

function Latest() {
    return (
        <Container>
            <Billboard
                title="Only on Netflix"
                text="Netflix is the home of amazing original programming that you can't find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you."
            />
            <MovieCollection
                title="Upcoming"
                fetchUrl={requests.requestUpcoming}
            />
            <MovieCollection
                title="Now Playing"
                fetchUrl={requests.requestNowPlaying}
            />
            <MovieCollection
                title="Unexpected Heroes"
                fetchUrl={requests.requestUnexpectedHeroes}
            />
            <MovieCollection title="Pixar" fetchUrl={requests.requestPixar} />
            <MovieCollection title="Cars" fetchUrl={requests.requestCars} />
        </Container>
    );
}

export default Latest;

const Container = styled.div`
    color: #fff;
`;
