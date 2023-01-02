import { requests } from '../../utils/requests';
import ShowColletion from '../../components/ShowColletion/ShowColletion';
import styled from 'styled-components';
import Billboard from '../../components/Billboard/Billboard';

function Shows() {
    return (
        <Container>
            <Billboard
                title="TV Shows"
                text="These days, the small screen has some very big things to
                        offer. From sitcoms to dramas to travel and talk shows,
                        these are all the best programs on TV."
            />
            <ShowColletion
                title="Popular on Netflix"
                fetchUrl={requests.requestPopularTvShows}
            />
            <ShowColletion
                title="Bingeworthy TV Shows"
                fetchUrl={requests.requestTopRatedTvShows}
            />
            <ShowColletion
                title="Exciting TV Shows"
                fetchUrl={requests.requestOnTheAirTvShows}
            />
            <ShowColletion
                title="New Releases"
                fetchUrl={requests.requestAiringTodayTvShows}
            />
        </Container>
    );
}

export default Shows;

const Container = styled.section`
    color: #fff;
`;
