import styled from 'styled-components';

function SignIn() {
    return (
        <Container>
            <Image src="/assets/bg-img.jpg"></Image>
            <Layout></Layout>
            <FormWrapper>
                <Title>Sign In</Title>
                <Form></Form>
            </FormWrapper>
        </Container>
    );
}

export default SignIn;

const Container = styled.section`
    position: relative;
    width: 100%;
    height: 750px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Layout = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;

    background-color: rgba(0, 0, 0, 0.5);
`;

const FormWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 500px;
    height: 650px;
    padding: 60px 68px 40px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
`;

const Title = styled.h1`
    font-size: 32px;
`;

const Form = styled.form``;
