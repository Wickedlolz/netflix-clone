import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';
import styled from 'styled-components';
import useLocalStorage from '../../../hooks/useLocalStorage';

function Header() {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const [state, setItem, removeItem] = useLocalStorage(
        'session_id',
        undefined
    );

    const handleSignOut = (event) => {
        event.preventDefault();
        removeItem();
        dispatch(logout());
        navigation('/');
    };

    return (
        <HeaderContainer>
            <HeaderLogoLink to="/">
                <HeaderLogo src="/assets/logo.png"></HeaderLogo>
            </HeaderLogoLink>
            {!isAuth && <SignInButton to="/sign-in">Sign In</SignInButton>}
            {isAuth && (
                <>
                    <Navigation>
                        <List>
                            <ItemLink to="/home">Home</ItemLink>
                            <ItemLink to="/shows">TV Shows</ItemLink>
                            <ItemLink to="/movies">Movies</ItemLink>
                            <ItemLink to="/latest">Latest</ItemLink>
                            <ItemLink to="/my-list">My List</ItemLink>
                        </List>
                        <StyledProfileLink
                            to="/profile"
                            // onClick={handleSignOut}
                        >
                            <Avatar
                                src="/assets/netflix-avatar.png"
                                loading="lazy"
                            ></Avatar>
                        </StyledProfileLink>
                    </Navigation>
                </>
            )}
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    position: sticky;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 70px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
`;

const HeaderLogoLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    width: 160px;
    height: 70px;
`;

const Navigation = styled.nav`
    width: calc(100% - 170px);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const List = styled.ul`
    display: flex;
    gap: 15px;
`;

const ItemLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;

    &:hover {
        text-decoration: underline;
    }
`;

const HeaderLogo = styled.img`
    width: 180px;
    height: 70px;
    object-fit: cover;
`;

const StyledProfileLink = styled(Link)`
    margin-right: 20px;
`;

const Avatar = styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;

    margin-right: 20px;
`;

const SignInButton = styled(Link)`
    margin-right: 20px;
    text-decoration: none;
    color: #fff;
    background-color: #e50914;
    padding: 5px 20px;
    border-radius: 5px;
`;
