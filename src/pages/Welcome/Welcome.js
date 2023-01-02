import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Welcome() {
    const navigation = useNavigate();
    const [questions, setQuestions] = useState({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
    });

    const toggleQuestion = (question) => {
        setQuestions((state) => ({ ...state, [question]: !state[question] }));
    };

    const navigateToHome = () => {
        navigation('/sign-in');
    };

    return (
        <Container>
            <HeroContainer>
                <HeroImage
                    loading="lazy"
                    src="/assets/bg-img.jpg"
                    alt="Netflix banner"
                ></HeroImage>
                <HeroLayout></HeroLayout>
                <HeroContent>
                    <Title>Unlimited movies, TV shows, and more.</Title>
                    <HeroSubTitle>Watch anywhere. Cancel anytime.</HeroSubTitle>
                    <Question>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </Question>
                    <Input type="email" placeholder="Email address"></Input>
                    <Button onClick={navigateToHome}>
                        Get Started <i className="fa-solid fa-angle-right"></i>
                    </Button>
                </HeroContent>
            </HeroContainer>
            <FeatureContainer>
                <FeatureContent primary>
                    <FeatureTitle>Enjoy on your TV.</FeatureTitle>
                    <FeatureText>
                        Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple
                        TV, Blu-ray players, and more.
                    </FeatureText>
                </FeatureContent>
                <FeatureImage
                    loading="lazy"
                    resize
                    mright
                    src="/assets/enjoy-tv.png"
                    alt="Enjoy on your TV"
                ></FeatureImage>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureImage
                    loading="lazy"
                    resize
                    mleft
                    src="/assets/shows.png"
                    alt="Download your shows to watch offline"
                ></FeatureImage>

                <FeatureContent secondary>
                    <FeatureTitle>
                        Download your shows to watch offline.
                    </FeatureTitle>
                    <FeatureText>
                        Save your favorites easily and always have something to
                        watch.
                    </FeatureText>
                </FeatureContent>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureContent primary>
                    <FeatureTitle>Watch everywhere.</FeatureTitle>
                    <FeatureText>
                        Stream unlimited movies and TV shows on your phone,
                        tablet, laptop, and TV without paying more.
                    </FeatureText>
                </FeatureContent>
                <FeatureImage
                    loading="lazy"
                    resize
                    mright
                    src="/assets/watch-everywhere.png"
                    alt="Watch everywhere"
                ></FeatureImage>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureImage
                    loading="lazy"
                    resize
                    mleft
                    src="/assets/kids.png"
                    alt="Create profiles for kids"
                ></FeatureImage>

                <FeatureContent secondary>
                    <FeatureTitle>Create profiles for kids.</FeatureTitle>
                    <FeatureText>
                        Send kids on adventures with their favorite characters
                        in a space made just for them—free with your membership.
                    </FeatureText>
                </FeatureContent>
            </FeatureContainer>
            <FaqContainer>
                <Title center>Frequently Asked Questions</Title>
                <FaqList>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('q1')}>
                            <FaqButtonText>What is Netflix?</FaqButtonText>{' '}
                            {questions.q1 ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.q1 && (
                            <FaqAnswer>
                                Netflix is a streaming service that offers a
                                wide variety of award-winning TV shows, movies,
                                anime, documentaries, and more on thousands of
                                internet-connected devices. <br /> <br />
                                You can watch as much as you want, whenever you
                                want without a single commercial - all for one
                                low monthly price. There's always something new
                                to discover and new TV shows and movies are
                                added every week!
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('q2')}>
                            <FaqButtonText>
                                How much does Netflix cost?
                            </FaqButtonText>{' '}
                            {questions.q2 ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.q2 && (
                            <FaqAnswer>
                                Watch Netflix on your smartphone, tablet, Smart
                                TV, laptop, or streaming device, all for one
                                fixed monthly fee. Plans range from EUR7.99 to
                                EUR11.99 a month. No extra costs, no contracts.
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('q3')}>
                            <FaqButtonText>Where can i watch?</FaqButtonText>{' '}
                            {questions.q3 ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.q3 && (
                            <FaqAnswer>
                                Watch anywhere, anytime. Sign in with your
                                Netflix account to watch instantly on the web at
                                netflix.com from your personal computer or on
                                any internet-connected device that offers the
                                Netflix app, including smart TVs, smartphones,
                                tablets, streaming media players and game
                                consoles. <br /> <br />
                                You can also download your favorite shows with
                                the iOS, Android, or Windows 10 app. Use
                                downloads to watch while you're on the go and
                                without an internet connection. Take Netflix
                                with you anywhere.
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('q4')}>
                            <FaqButtonText>How do i cancel?</FaqButtonText>{' '}
                            {questions.q4 ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.q4 && (
                            <FaqAnswer>
                                Netflix is flexible. There are no pesky
                                contracts and no commitments. You can easily
                                cancel your account online in two clicks. There
                                are no cancellation fees - start or stop your
                                account anytime.
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('q5')}>
                            <FaqButtonText>
                                What can i watch on Netflix?
                            </FaqButtonText>{' '}
                            {questions.q5 ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.q5 && (
                            <FaqAnswer>
                                Netflix has an extensive library of feature
                                films, documentaries, TV shows, anime,
                                award-winning Netflix originals, and more. Watch
                                as much as you want, anytime you want.
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('q6')}>
                            <FaqButtonText>
                                Is Netflix good for kids?
                            </FaqButtonText>{' '}
                            {questions.q6 ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.q6 && (
                            <FaqAnswer>
                                The Netflix Kids experience is included in your
                                membership to give parents control while kids
                                enjoy family-friendly TV shows and movies in
                                their own space.
                                <br /> <br />
                                Kids profiles come with PIN-protected parental
                                controls that let you restrict the maturity
                                rating of content kids can watch and block
                                specific titles you don't want kids to see.
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                </FaqList>
                <Question>
                    Ready to watch? Enter your email to create or restart your
                    membership.
                </Question>
                <InputContainer>
                    <Input type="email" placeholder="Email address"></Input>
                    <Button>
                        Get Started <i className="fa-solid fa-angle-right"></i>
                    </Button>
                </InputContainer>
            </FaqContainer>
        </Container>
    );
}

export default Welcome;

const Container = styled.div`
    background-color: #222;
    margin-bottom: 10px;
`;

const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    height: 800px;
    margin-bottom: 12px;

    @media screen and (max-width: 400px) {
        height: 550px;
    }
`;

const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HeroLayout = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1600px) {
        width: 80%;
        text-align: center;
    }

    @media screen and (max-width: 1024px) {
        width: 80%;
        text-align: center;
    }

    @media screen and (max-width: 700px) {
        width: 80%;
        text-align: center;
    }

    @media screen and (max-width: 400px) {
        width: 80%;
        text-align: center;
    }
`;

const Title = styled.h1`
    color: #fff;
    font-size: 42px;
    text-align: ${(props) => (props.center ? 'center' : '')};
    padding-top: ${(props) => (props.center ? '25px' : '')};
    margin-bottom: ${(props) => (props.center ? '25px' : '')};

    @media screen and (max-width: 400px) {
        font-size: 22px;
    }
`;

const HeroSubTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 400px) {
        font-size: 18px;
    }
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
    outline: none;
    padding: 0px 5px;
    caret-color: blue;

    &:focus {
        border: 1px solid #158cba;
        box-shadow: -1px -1px 22px 2px #158cba;
        -webkit-box-shadow: -1px -1px 22px 2px #158cba;
        -moz-box-shadow: -1px -1px 22px 2px #158cba;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        margin-bottom: 25px;
    }
`;

const Button = styled.button`
    width: 20%;
    height: 60px;
    background-color: #e50914;
    color: #fff;
    border-color: #e50914;
    font-size: 18px;
    vertical-align: middle;
    cursor: pointer;

    @media screen and (max-width: 700px) {
        width: 50%;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    @media screen and (max-width: 400px) {
        width: 50%;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
`;

const FeatureContainer = styled.section`
    background-color: #000;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    @media screen and (max-width: 700px) {
        flex-direction: column;
    }

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

const FeatureContent = styled.div`
    color: #fff;
    margin-left: ${(props) => (props.primary ? '5%' : '')};
    margin-right: ${(props) => (props.secondary ? '5%' : '')};
    text-align: center;
    margin-top: 5%;
    width: 50%;

    @media screen and (max-width: 700px) {
        width: 100%;
        margin: unset;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        margin: unset;
    }
`;

const FeatureTitle = styled.h2`
    font-size: 42px;

    @media screen and (max-width: 700px) {
        font-size: 32px;
    }

    @media screen and (max-width: 400px) {
        font-size: 32px;
    }
`;

const FeatureText = styled.p`
    font-size: 22px;

    @media screen and (max-width: 700px) {
        font-size: 18px;
    }

    @media screen and (max-width: 400px) {
        font-size: 18px;
    }
`;

const FeatureImage = styled.img`
    width: 50%;
    width: ${(props) => (props.resize ? '30%' : '')};
    margin-top: ${(props) => (props.resize ? '20px' : '')};
    margin-left: ${(props) => (props.mleft ? '100px' : '')};
    margin-right: ${(props) => (props.mright ? '100px' : '')};
    height: 400px;
    object-fit: cover;

    @media screen and (max-width: 1024px) {
        width: 50%;
        margin-left: auto;
        margin-right: 20px;
    }

    @media screen and (max-width: 700px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (max-width: 400px) {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

const FaqContainer = styled.section`
    background-color: #000;
    margin-bottom: 12px;
`;

const FaqList = styled.ul`
    width: 55%;
    margin: 0 auto 52px auto;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 700px) {
        width: 90%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const FaqListItem = styled.li`
    background-color: #303030;
    margin-bottom: 8px;
`;

const FaqQuestion = styled.button`
    width: 100%;
    color: #fff;
    background-color: #303030;
    border: none;
    border-bottom: 2px solid #222;
    outline: none;
    padding: 0.8em 2.2em 0.8em 1.2em;
    cursor: pointer;
    margin-bottom: 5px;

    display: flex;
    justify-content: space-between;
`;

const FaqButtonText = styled.p``;

const FaqAnswer = styled.div`
    color: #fff;
    padding: 5px 15px;
`;

const InputContainer = styled.div`
    width: 45%;
    margin: 0 auto;
    padding-bottom: 60px;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 700px) {
        width: 90%;
    }

    @media screen and (max-width: 400px) {
        width: 90%;
    }
`;
