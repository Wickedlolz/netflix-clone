import { useDispatch } from 'react-redux';
import { useFirebaseContext } from 'src/context/FirebaseContext';
import { notify } from 'src/store/slices/notificationSlice';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

function Profile() {
    const { user, logOut } = useFirebaseContext();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            dispatch(
                notify({
                    message: error.message,
                    type: 'error',
                })
            );
        }
    };

    return (
        <Container>
            <Helmet>
                <title>Profile | Netflix</title>
            </Helmet>
            <Title>Profile</Title>
            <Box>
                <ProfilePic
                    src="/assets/netflix-avatar.png"
                    alt="Avatar"
                    loading="lazy"
                ></ProfilePic>
                <ProfileInfo>
                    <EmailField
                        type="text"
                        disabled
                        defaultValue={user.email}
                    ></EmailField>
                    <SubTitle>Plans</SubTitle>
                    <PlansList>
                        <PlansItem>
                            <PlanName>Premium 4k + HDR</PlanName>
                            <Button>Subscribe</Button>
                        </PlansItem>
                        <PlansItem>
                            <PlanName>Basic 720p</PlanName>
                            <Button>Subscribe</Button>
                        </PlansItem>
                        <PlansItem>
                            <PlanName>Standard 1080p</PlanName>
                            <Button>Subscribe</Button>
                        </PlansItem>
                    </PlansList>
                    <Button lg onClick={handleSignOut}>
                        Sign Out
                    </Button>
                </ProfileInfo>
            </Box>
        </Container>
    );
}

export default Profile;

const Container = styled.section`
    width: 30%;
    height: 550px;
    margin: 0 auto;
    color: #fff;

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    font-size: 42px;
    margin-bottom: 20px;
`;

const Box = styled.div`
    display: flex;
    gap: 35px;
`;

const ProfilePic = styled.img`
    width: 120px;
    height: 120px;
`;

const ProfileInfo = styled.div``;

const EmailField = styled.input`
    padding: 10px 15px;
    color: #fff;
    margin-bottom: 20px;
`;

const SubTitle = styled.h3`
    margin-bottom: 10px;
`;

const PlansList = styled.ul``;

const PlansItem = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px;
    margin-bottom: 20px;
    transition: background-color 300ms ease-in-out;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const PlanName = styled.p`
    width: 100px;
    font-weight: bold;
`;

const Button = styled.button`
    border: none;
    border-radius: 4px;
    outline: none;
    padding: 5px 10px;
    background-color: #e50914;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    width: ${(props) => (props.lg ? '100%' : '')};
`;
