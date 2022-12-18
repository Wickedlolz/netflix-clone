import { useState } from 'react';
import styled from 'styled-components';

function Welcome() {
    const [questions, setQuestion] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        five: false,
        six: false,
    });

    const toggleQuestion = (question) => {
        setQuestion((state) => ({ ...state, [question]: !state[question] }));
    };

    return (
        <Container>
            <HeroContainer>
                <HeroImage src="/assets/bg-img.jpg"></HeroImage>
                <HeroLayout></HeroLayout>
                <HeroContent>
                    <Title>Unlimited movies, TV shows, and more.</Title>
                    <HeroSubTitle>Watch anywhere. Cancel anytime.</HeroSubTitle>
                    <Question>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </Question>
                    <Input type="email" placeholder="Email address"></Input>
                    <Button>
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
                    resize
                    mright
                    src="/assets/enjoy-tv.png"
                ></FeatureImage>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureImage
                    resize
                    mleft
                    src="/assets/shows.png"
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
                    resize
                    mright
                    src="/assets/watch-everywhere.png"
                ></FeatureImage>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureImage
                    resize
                    mleft
                    src="/assets/kids.png"
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
                        <FaqQuestion onClick={() => toggleQuestion('first')}>
                            <FaqButtonText>What is Netflix?</FaqButtonText>{' '}
                            {questions.first ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.first && (
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
                        <FaqQuestion onClick={() => toggleQuestion('second')}>
                            <FaqButtonText>
                                How much does Netflix cost?
                            </FaqButtonText>{' '}
                            {questions.second ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.second && (
                            <FaqAnswer>
                                Watch Netflix on your smartphone, tablet, Smart
                                TV, laptop, or streaming device, all for one
                                fixed monthly fee. Plans range from EUR7.99 to
                                EUR11.99 a month. No extra costs, no contracts.
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('third')}>
                            <FaqButtonText>Where can i watch?</FaqButtonText>{' '}
                            {questions.third ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.third && (
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
                        <FaqQuestion onClick={() => toggleQuestion('fourth')}>
                            <FaqButtonText>How do i cancel?</FaqButtonText>{' '}
                            {questions.fourth ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.fourth && (
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
                        <FaqQuestion onClick={() => toggleQuestion('five')}>
                            <FaqButtonText>
                                What can i watch on Netflix?
                            </FaqButtonText>{' '}
                            {questions.five ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.five && (
                            <FaqAnswer>
                                Netflix has an extensive library of feature
                                films, documentaries, TV shows, anime,
                                award-winning Netflix originals, and more. Watch
                                as much as you want, anytime you want.
                            </FaqAnswer>
                        )}
                    </FaqListItem>
                    <FaqListItem>
                        <FaqQuestion onClick={() => toggleQuestion('six')}>
                            <FaqButtonText>
                                Is Netflix good for kids?
                            </FaqButtonText>{' '}
                            {questions.six ? (
                                <i className="fa-solid fa-xmark"></i>
                            ) : (
                                <i className="fa-solid fa-plus"></i>
                            )}
                        </FaqQuestion>
                        {questions.six && (
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
`;

const HeroContainer = styled.section`
    position: relative;
    width: 100%;
    height: 800px;
    margin-bottom: 12px;
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
`;

const Title = styled.h1`
    color: #fff;
    font-size: 42px;
    text-align: ${(props) => (props.center ? 'center' : '')};
    padding-top: ${(props) => (props.center ? '25px' : '')};
    margin-bottom: ${(props) => (props.center ? '25px' : '')};
`;

const HeroSubTitle = styled.h3`
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
    outline: none;
    padding: 0px 5px;
    caret-color: blue;

    &:focus {
        border: 1px solid #158cba;
        box-shadow: -1px -1px 22px 2px #158cba;
        -webkit-box-shadow: -1px -1px 22px 2px #158cba;
        -moz-box-shadow: -1px -1px 22px 2px #158cba;
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
`;

const FeatureContainer = styled.section`
    background-color: #000;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
`;

const FeatureContent = styled.div`
    color: #fff;
    margin-left: ${(props) => (props.primary ? '5%' : '')};
    margin-right: ${(props) => (props.secondary ? '5%' : '')};
    text-align: center;
    margin-top: 5%;
    width: 50%;
`;

const FeatureTitle = styled.h2`
    font-size: 42px;
`;

const FeatureText = styled.p`
    font-size: 22px;
`;

const FeatureImage = styled.img`
    width: 50%;
    width: ${(props) => (props.resize ? '30%' : '')};
    margin-top: ${(props) => (props.resize ? '20px' : '')};
    margin-left: ${(props) => (props.mleft ? '100px' : '')};
    margin-right: ${(props) => (props.mright ? '100px' : '')};
    height: 400px;
    object-fit: cover;
`;

const FaqContainer = styled.section`
    background-color: #000;
    margin-bottom: 12px;
`;

const FaqList = styled.ul`
    width: 55%;
    margin: 0 auto 52px auto;
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
`;
