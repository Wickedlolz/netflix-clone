import styled from 'styled-components';

function Header() {
    return (
        <HeaderContainer>
            <HeaderLogoLink href="#/">
                <HeaderLogo src="/assets/logo.png"></HeaderLogo>
            </HeaderLogoLink>
            <SignInButton href="#/">Sign In</SignInButton>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.header`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 80px;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
`;

const HeaderLogoLink = styled.a`
    text-decoration: none;
    display: inline-block;
`;

const HeaderLogo = styled.img`
    width: 180px;
`;

const SignInButton = styled.a`
    margin-right: 20px;
    text-decoration: none;
    color: #fff;
    background-color: #e50914;
    padding: 5px 20px;
    border-radius: 5px;
`;
