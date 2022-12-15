import styled from 'styled-components';

function Hero() {
    return (
        <Container>
            <Image src="/assets/bg-img.jpg"></Image>
            <Layout></Layout>
            <Content>
                <Title>Unlimited movies, TV shows, and more.</Title>
                <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
                <Question>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </Question>
                <Input type="email" placeholder="Email address"></Input>
                <Button>
                    Get Started <i class="fa-solid fa-angle-right"></i>
                </Button>
            </Content>
        </Container>
    );
}

export default Hero;

const Container = styled.section`
    position: relative;
    width: 100%;
    height: 800px;
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

const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h1`
    color: #fff;
    font-size: 42px;
`;

const SubTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
`;

const Question = styled.p`
    color: #fff;
    text-align: center;
    margin-bottom: 15px;
`;

const Input = styled.input`
    width: 80%;
    height: 60px;
    vertical-align: middle;
`;

const Button = styled.button`
    width: 20%;
    height: 60px;
    background-color: #e50914;
    color: #fff;
    border-color: #e50914;
    font-size: 18px;
    vertical-align: middle;
`;
