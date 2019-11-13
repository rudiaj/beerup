import React, { memo } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { Container } from "../styles";
import { paths } from "../../constants";

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 0;
  font-size: 1rem;
  border-bottom: 2px solid transparent;
  &.active {
    border-bottom: 2px solid ${props => props.theme.colors.yellow};
  }
`;

const StyledButtonLink = styled(NavLink)`
  padding: 15px 40px;
  border: 2px solid #ffc80a;
  border-radius: 28px;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 65px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <StyledContainer>
        <img src={logo} alt="logo" />
        <List>
          <ListItem>
            <StyledNavLink
              exact
              activeClassName="active"
              to={paths.routes.BASE}
            >
              Home
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink
              exact
              activeClassName="active"
              to={paths.routes.FAVOURITES}
            >
              Favourites
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledButtonLink
              exact
              activeClassName="active"
              to={paths.routes.JOIN}
            >
              Join
            </StyledButtonLink>
          </ListItem>
        </List>
      </StyledContainer>
    </nav>
  );
};

Navigation.propTypes = {};

export default memo(Navigation);
