import { requests } from '../../utils/requests';
import ShowColletion from '../../components/ShowColletion/ShowColletion';
import styled from 'styled-components';

function Shows() {
    return (
        <Container>
            <Header>
                <Content>
                    <Title>TV Shows</Title>
                    <Text>
                        These days, the small screen has some very big things to
                        offer. From sitcoms to dramas to travel and talk shows,
                        these are all the best programs on TV.
                    </Text>
                </Content>
            </Header>
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
