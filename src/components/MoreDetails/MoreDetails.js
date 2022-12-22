import styled from 'styled-components';

function MoreDetails({ movie, cast }) {
    console.log(cast);
    return (
        <Container>
            <Title>More Details</Title>
        </Container>
    );
}

export default MoreDetails;

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    padding-top: 20px;
`;

const Title = styled.h2`
    font-weight: bold;
    margin-bottom: 20px;
    cursor: default;
`;
