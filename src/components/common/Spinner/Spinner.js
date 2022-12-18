import styled from 'styled-components';

function Spinner() {
    return (
        <Container>
            <StyledSpinner></StyledSpinner>
        </Container>
    );
}

export default Spinner;

const Container = styled.section`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3000;
`;

const StyledSpinner = styled.div`
    position: absolute;
    top: 40%;
    left: 45%;
    transform: translate(-50%, -50%);

    border: 5px solid #f3f3f3;
    border-top: 5px solid #e50914;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
