import { Component } from 'react';
import styled from 'styled-components';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            message: '',
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error) {
        this.setState({ message: error.toString() });
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <Image
                        src="/assets/bg-lost-in-space.png"
                        alt="Lost in Space"
                        loading="lazy"
                    ></Image>
                    <Content>
                        <Title>Something went wrong!</Title>
                        <Text>
                            Sorry, we trying to resolve this promble, try to
                            reload page or try again later.
                        </Text>
                        <ErrorStatus>
                            Error Code: {this.state.message}
                        </ErrorStatus>
                    </Content>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

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

const ErrorStatus = styled.h2`
    border-left: 2px solid #e50914;
    padding-left: 20px;
    margin-left: 30%;
`;
