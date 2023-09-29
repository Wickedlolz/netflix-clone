import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { notify } from '../../store/slices/notificationSlice';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

import Spinner from '../../components/common/Spinner/Spinner';
import { useFirebaseContext } from 'src/context/FirebaseContext';

function SignIn() {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const { signIn } = useFirebaseContext();
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        const { email, password } = formData;
        setIsLoading(true);
        try {
            await signIn(email, password);

            navigation('/home');
        } catch (error) {
            dispatch(notify({ message: error.toString(), type: 'error' }));
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <Container>
            <Helmet>
                <title>Sign In | Netflix</title>
            </Helmet>
            <Image src="/assets/bg-img.jpg"></Image>
            <Layout></Layout>
            <FormWrapper>
                <Title>Sign In</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type="email"
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[A-Za-z0-9]{2,}@[a-z]+\.[a-z]{2,3}$/,
                                message:
                                    'Invalid email. Email format must be (example@yahoo.com)',
                            },
                        })}
                        placeholder="Email"
                        hasError={errors.email}
                    ></Input>
                    {errors.email?.type === 'required' && (
                        <ErrorField>Email is required.</ErrorField>
                    )}
                    {errors.email?.type === 'pattern' && (
                        <ErrorField>{errors.email?.message}</ErrorField>
                    )}
                    <Input
                        type="password"
                        {...register('password', {
                            required: true,
                            minLength: 4,
                            maxLength: 60,
                        })}
                        hasError={errors.password}
                        placeholder="Password"
                    ></Input>
                    {errors.password?.type === 'required' && (
                        <ErrorField>Password is required.</ErrorField>
                    )}
                    {(errors.password?.type === 'minLength' ||
                        errors.password?.type === 'maxLength') && (
                        <ErrorField>
                            Your password must contain between 4 and 60
                            characters.
                        </ErrorField>
                    )}
                    <Button disabled={errors.email || errors.password}>
                        Sign In
                    </Button>
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
                    <SignUpLink to="/sign-up">Sign up now</SignUpLink>
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

    @media screen and (max-width: 400px) {
        background-color: rgba(0, 0, 0, 1);
    }
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
    color: #fff;
    caret-color: #e50914;

    margin-bottom: ${(props) => (props.hasError ? '' : '20px')};
    border-bottom: ${(props) => (props.hasError ? '2px solid #e87c03' : '')};
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
    vertical-align: middle;
    font-size: 14px;
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const SignUpLink = styled(Link)`
    font-size: 20px;
    color: #fff;
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
