import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <Wrapper>
                <Questions>Questions? Contact us.</Questions>
                <List>
                    <ListItem>FAQ</ListItem>
                    <ListItem>Investor Relations</ListItem>
                    <ListItem>Privacy</ListItem>
                    <ListItem>Speed Test</ListItem>
                    <ListItem>Help Center</ListItem>
                    <ListItem>Jobs</ListItem>
                    <ListItem>Cookie Preferences</ListItem>
                    <ListItem>Legal Guarantee</ListItem>
                    <ListItem>Account</ListItem>
                    <ListItem>Ways to Watch</ListItem>
                    <ListItem>Corporate Information</ListItem>
                    <ListItem>Legal Notices</ListItem>
                    <ListItem>Media Center</ListItem>
                    <ListItem>Terms of Use</ListItem>
                    <ListItem>Contact Us</ListItem>
                    <ListItem>Only on Netflix</ListItem>
                </List>
                <Country>Netflix Bulgaria</Country>
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
    color: #c3bfbf;
`;

const Questions = styled.p`
    display: inline-block;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 10px;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const ListItem = styled.li`
    font-size: 13px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const Country = styled.p`
    font-size: 14px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
