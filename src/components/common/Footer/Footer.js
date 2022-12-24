import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <Wrapper>
                <Questions>Questions? Contact us.</Questions>
            </Wrapper>
        </Container>
    );
}

export default Footer;

const Container = styled.footer`
    background-color: #000;
    padding: 20px 0px;
`;

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Questions = styled.p`
    display: inline-block;
    color: #c3bfbf;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
