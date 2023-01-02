import styled from 'styled-components';

function Billboard({ title, text }) {
    return (
        <Container>
            <Content>
                <Title>{title}</Title>
                {text && <Text>{text}</Text>}
            </Content>
        </Container>
    );
}

export default Billboard;

const Container = styled.section`
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
