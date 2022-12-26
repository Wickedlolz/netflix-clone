import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

function SignIn() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <Container>
            <Image src="/assets/bg-img.jpg"></Image>
            <Layout></Layout>
            <FormWrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input type="email" placeholder="Email"></Input>
                    <ErrorField>Please enter a valid email.</ErrorField>
                    <Input type="password" placeholder="Password"></Input>
                    <ErrorField>
                        Your password must contain between 4 and 60 characters.
                    </ErrorField>
                    <Button>Sign In</Button>
                </Form>
                <Box>
                    <CheckboxInput
                        id="rememberMe"
                        type="checkbox"
                    ></CheckboxInput>
                    <Label htmlFor="rememberMe">Remember me</Label>
                    <StyledLink to={'/'}>Need help?</StyledLink>
                </Box>
                <Text>
                    New to Netflix?{' '}
                    <StyledLink signup to={'/sign-up'}>
                        Sign up now
                    </StyledLink>
                </Text>
                <Text sm>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                </Text>
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
    margin-bottom: 18px;
`;

const Form = styled.form`
    margin-bottom: 15px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    outline: none;
    margin-bottom: 4px;
    padding: 12px 10px;
    background-color: #333;
    caret-color: #e50914;

    border-bottom: 2px solid #e87c03;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 8px;
    outline: none;
    padding: 8px 0px;
    background-color: #e50914;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`;

const ErrorField = styled.p`
    color: #e87c03;
    font-size: 13px;
    margin-bottom: 15px;
`;

const Box = styled.div`
    color: #b3b3b3;
    margin-bottom: 15px;
`;

const CheckboxInput = styled.input`
    width: 15px;
    height: 15px;
    vertical-align: middle;
`;

const Label = styled.label`
    display: inline-block;
    font-size: 14px;
    vertical-align: middle;
    width: 70%;
`;

const StyledLink = styled(Link)`
    width: 20%;
    vertical-align: ${(props) => (props.signup ? '' : 'middle')};
    font-size: ${(props) => (props.signup ? '20px' : '14px')};
    color: ${(props) => (props.signup ? '#fff' : 'inherit')};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Text = styled.p`
    vertical-align: middle;
    color: #b3b3b3;
    font-size: ${(props) => (props.sm ? '13px' : '')};
    margin-bottom: 15px;
`;
