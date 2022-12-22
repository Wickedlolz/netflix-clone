import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, delectus?
            </Text>
        </Container>
    );
}

export default Footer;

const Container = styled.footer`
    background-color: #000;
`;

const Text = styled.p`
    color: white;
`;
