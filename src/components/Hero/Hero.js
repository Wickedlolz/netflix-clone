import { Link } from 'react-router-dom';

import styled from 'styled-components';

function Hero({ movie }) {
    const handlePlay = () => {};

    return (
        <Container>
            <Image
                loading="lazy"
                src={
                    'https://image.tmdb.org/t/p/original' +
                        movie?.backdrop_path || movie?.poster_path
                }
                alt={movie?.title || movie?.original_title}
            ></Image>
            <Layout></Layout>
            <Content>
                <Title>{movie?.title || movie?.original_title}</Title>
                <Overview>{movie?.overview}</Overview>
                <Play onClick={handlePlay}>
                    <i className="fa-solid fa-play"></i> Play
                </Play>
                <MoreInfo to={'/movie/' + movie.id}>
                    <i className="fa-solid fa-circle-info"></i> More Info
                </MoreInfo>
            </Content>
        </Container>
    );
}

export default Hero;

const Container = styled.article`
    position: relative;
    width: 100%;
    height: 550px;
    margin-bottom: 12px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
`;

const Layout = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    background: rgb(0, 0, 0);
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.7721463585434174) 37%,
        rgba(0, 0, 0, 0) 100%
    );
`;

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 2%;

    transform: translateY(-50%);
`;

const Title = styled.h1`
    width: 45%;
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: default;

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Overview = styled.p`
    width: 45%;
    margin-bottom: 25px;
    cursor: default;

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Play = styled.button`
    padding: 5px 30px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`;

const MoreInfo = styled(Link)`
    background-color: #515451;
    padding: 7px 25px;
    margin-left: 15px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
`;
