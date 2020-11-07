import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Container } from "../styled/sharedStyled";
import settings from "../assets/settings.svg";
import info from "../assets/info.svg";
import login from "../assets/login.svg";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.accent1};
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavList = styled.ul`
  display: flex;
`;
const StyledNavLink = styled(NavLink)`
  margin-right: 73px;
  width: 77px;
  text-align: center;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  text-decoration: none;
  &:first-child {
    margin-left: 92px;
  }
  &.isActive {
    margin-bottom: -37px;
    padding-bottom: 36px;
    border-bottom: 3px solid white;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  padding: 23px 0;
`;
const LinkItem = styled(Link)`
  width: 20px;
  height: 20px;
  margin-right: 51px;
`;
const ProfilePic = styled.div`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin-right: 61px;
  background-color: ${(props) => props.theme.colors.white};
`;

const Header = () => {
  return (
    <Container>
      <Flex>
        <Left>
          <NavList>
            <StyledNavLink exact to="/" activeClassName="isActive">
              Home
            </StyledNavLink>
            <StyledNavLink exact to="/issues" activeClassName="isActive">
              Issues
            </StyledNavLink>
            <StyledNavLink exact to="/filter" activeClassName="isActive">
              Filter
            </StyledNavLink>
            <StyledNavLink exact to="/projects" activeClassName="isActive">
              Projects
            </StyledNavLink>
          </NavList>
        </Left>
        <Right>
          <Links>
            <LinkItem>
              <img src={settings} alt="settings" />
            </LinkItem>
            <LinkItem>
              <img src={info} alt="info" />
            </LinkItem>
            <LinkItem>
              <img src={login} alt="login" />
            </LinkItem>
            <ProfilePic />
          </Links>
        </Right>
      </Flex>
    </Container>
  );
};

export default Header;
