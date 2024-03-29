import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDebounce } from 'src/hooks/useDebounce';
import { useFirebaseContext } from 'src/context/FirebaseContext';

function Header() {
    const { user } = useFirebaseContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const [toggleMenuOpen, setToggleMenuOpen] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const debounceValue = useDebounce(searchQuery, 500);

    window.onscroll = () => {
        setIsScrolled(!(window.pageYOffset === 0));

        return () => (window.onscroll = null);
    };

    useEffect(() => {
        // if (debounceValue.length === 0) {
        //     navigate('/home');
        // }

        if (debounceValue.length > 0) {
            navigate('/search?t=' + decodeURIComponent(debounceValue));
        }
    }, [debounceValue, navigate]);

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <HeaderContainer isScrolled={isScrolled}>
            <HeaderLogoLink to="/">
                <HeaderLogo src="/assets/logo.png"></HeaderLogo>
                <HeaderSmallLogo src="/assets/Netflix_Symbol_RGB.png"></HeaderSmallLogo>
            </HeaderLogoLink>
            {!user && <SignInButton to="/sign-in">Sign In</SignInButton>}
            {user && (
                <>
                    <Navigation>
                        <List>
                            <ItemLink to="/home">Home</ItemLink>
                            <ItemLink to="/tv-shows">TV Shows</ItemLink>
                            <ItemLink to="/movies">Movies</ItemLink>
                            <ItemLink to="/latest">Latest</ItemLink>
                            <ItemLink to="/my-list">My List</ItemLink>
                        </List>
                        <StyledContainerWithSearch>
                            <SearchButton
                                onClick={() =>
                                    setToggleSearch((state) => !state)
                                }
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </SearchButton>
                            {toggleSearch && (
                                <SearchInput
                                    placeholder="Search..."
                                    type="search"
                                    name="search"
                                    value={searchQuery}
                                    onChange={handleSearchQueryChange}
                                />
                            )}
                            <StyledProfileLink to="/profile">
                                <Avatar
                                    src="/assets/netflix-avatar.png"
                                    loading="lazy"
                                ></Avatar>
                            </StyledProfileLink>
                        </StyledContainerWithSearch>
                        <ToggleMenu
                            onClick={() => setToggleMenuOpen((state) => !state)}
                        >
                            {!toggleMenuOpen && (
                                <i className="fa-solid fa-caret-down"></i>
                            )}
                            {toggleMenuOpen && (
                                <>
                                    <i className="fa-solid fa-caret-up"></i>
                                    <ToggleMenuList>
                                        <ToggleMenuItem>
                                            <ItemLink to="/home">Home</ItemLink>
                                        </ToggleMenuItem>
                                        <ToggleMenuItem>
                                            <ItemLink to="/tv-shows">
                                                TV Shows
                                            </ItemLink>
                                        </ToggleMenuItem>
                                        <ToggleMenuItem>
                                            <ItemLink to="/movies">
                                                Movies
                                            </ItemLink>
                                        </ToggleMenuItem>
                                        <ToggleMenuItem>
                                            <ItemLink to="/latest">
                                                Latest
                                            </ItemLink>
                                        </ToggleMenuItem>
                                        <ToggleMenuItem>
                                            <ItemLink to="/my-list">
                                                My List
                                            </ItemLink>
                                        </ToggleMenuItem>
                                    </ToggleMenuList>
                                </>
                            )}
                        </ToggleMenu>
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
    background-color: ${(props) =>
        props.isScrolled ? 'rgba(0,0,0,0.4)' : '#000'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2000;
`;

const HeaderLogoLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    width: 160px;
    height: 70px;

    @media screen and (max-width: 400px) {
        width: 80px;
        height: 100px;
    }
`;

const Navigation = styled.nav`
    width: calc(100% - 170px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        justify-content: flex-end;
    }

    @media screen and (max-width: 400px) {
        justify-content: flex-end;
    }
`;

const List = styled.ul`
    display: flex;
    gap: 15px;

    @media screen and (max-width: 600px) {
        display: none;
    }

    @media screen and (max-width: 400px) {
        display: none;
    }
`;

const ItemLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
    }
`;

const HeaderLogo = styled.img`
    width: 180px;
    height: 70px;
    object-fit: cover;

    @media screen and (max-width: 400px) {
        display: none;
    }
`;

const HeaderSmallLogo = styled.img`
    width: 100%;
    height: 100%;
    display: none;

    @media screen and (max-width: 400px) {
        display: block;
    }
`;

const StyledProfileLink = styled(Link)`
    margin-right: 20px;

    @media screen and (max-width: 600px) {
        margin-right: unset;
    }

    @media screen and (max-width: 400px) {
        margin-right: unset;
    }
`;

const Avatar = styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;

    margin-right: 10px;
`;

const SignInButton = styled(Link)`
    margin-right: 20px;
    text-decoration: none;
    color: #fff;
    background-color: #e50914;
    padding: 5px 20px;
    border-radius: 5px;
`;

const ToggleMenu = styled.div`
    display: none;
    color: #fff;
    margin-right: 25px;

    @media screen and (max-width: 600px) {
        display: inline-block;
    }

    @media screen and (max-width: 400px) {
        display: inline-block;
    }
`;

const ToggleMenuList = styled.ul`
    position: absolute;
    right: 0px;
    border-radius: 6px;
    background-color: #000;
    margin: 20px 0px 0px 0px;
    width: 120px;
    padding: 5px 10px;
`;

const ToggleMenuItem = styled.li``;

const StyledContainerWithSearch = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
`;

const SearchButton = styled.p`
    cursor: pointer;
    color: #fff;
`;

const SearchInput = styled.input`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
    caret-color: #e63631;

    &::placeholder {
        color: #fff;
        padding-left: 5px;
    }

    @media screen and (max-width: 800px) {
        position: absolute;
        top: 70px;
        right: 25px;
        background-color: #000;
    }
`;
