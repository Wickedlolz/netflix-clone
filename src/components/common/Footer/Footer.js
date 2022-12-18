import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <p style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat, delectus?
            </p>
        </Container>
    );
}

export default Footer;

const Container = styled.footer`
    margin-top: 10px;
    background-color: #000;
`;
