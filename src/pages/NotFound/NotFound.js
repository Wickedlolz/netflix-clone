import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
    return (
        <Container>
            <Image
                src="/assets/bg-lost-in-space.png"
                alt="Lost in Space"
                loading="lazy"
            ></Image>
            <Content>
                <Title>Lost your way?</Title>
                <Text>
                    Sorry, we can't find that page. You'll find lots to explore
                    on the home page.
                </Text>
                <StyledLink to="/home">Netflix Home</StyledLink>
                <ErrorStatus>Error Code NSES-404</ErrorStatus>
            </Content>
        </Container>
    );
}

export default NotFound;

const Container = styled.section`
    position: relative;
    width: 100%;
    height: 800px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Content = styled.div`
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: #fff;
`;

const Title = styled.h1`
    font-size: 52px;
    text-align: center;
    margin-bottom: 10px;
`;

const Text = styled.p`
    font-size: 22px;
    margin-bottom: 50px;
    text-align: center;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    background-color: #fff;
    text-decoration: none;
    color: #000;
    padding: 8px 15px;
    font-weight: bold;
    border-radius: 7px;
    margin-bottom: 80px;
    margin-left: 40%;
`;

const ErrorStatus = styled.h2`
    border-left: 2px solid #e50914;
    padding-left: 20px;
    margin-left: 30%;
`;
