import React, { memo, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Button } from "../global";
import logo from "../../assets/logo.svg";
import { Container } from "../styles";
import { paths } from "../../constants";
import pattern from "../../assets/pattern.png";
import beers from "../../assets/illustration.svg";
import close from "../../assets/Close icon@2x.png";

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
  border-bottom: 3px solid transparent;
  &.active {
    border-bottom: 3px solid ${props => props.theme.colors.yellow};
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 65px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledButton = styled.button`
  border: 0;
  outline:0;
  background transparent;
  font-size: 1rem;
  cursor:pointer;
  display: none;
  @media (max-width: 768px) {
    display:initial;
  }
`;

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  background-image: url(${pattern});
  background-repeat: repeat;
  background-attachment: fixed;
  z-index: 100;
  transition: all 0.2s ease-in-out;
  transform: translateX(${props => (props.showOverlay ? 0 : "-100vw")});
  display: none;
  @media (max-width: 768px) {
    display: initial;
  }
`;

const OverlayStyledContainer = styled(Container)`
  flex-direction: column;
`;

const OverlayHeader = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: flex-end;
`;

const OverlayList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OverlayStyledNavLink = styled(StyledNavLink)`
  font-size: 1.375rem;
  margin-bottom: 38px;
  &:last-of-type {
    margin-bottom: 48px;
  }
`;

const StyledImg = styled.img`
  width: 180px;
  height: auto;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OverlayButton = styled(Button)`
  transform: translateY(-20px);
  width: 110%;
`;

const Navigation = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const onClick = (e, value) => {
    e.stopPropagation();
    setShowOverlay(value);
  };

  return (
    <nav>
      <StyledContainer>
        <img src={logo} alt="logo" />
        <Overlay showOverlay={showOverlay}>
          <OverlayStyledContainer>
            <OverlayHeader>
              <StyledButton onClick={e => onClick(e, false)}>
                <img src={close} alt="close" />
              </StyledButton>
            </OverlayHeader>
            <OverlayList>
              <OverlayStyledNavLink
                exact
                activeClassName="active"
                to={paths.routes.BASE}
              >
                Home
              </OverlayStyledNavLink>
              <OverlayStyledNavLink
                exact
                activeClassName="active"
                to={paths.routes.FAVOURITES}
              >
                Favourites
              </OverlayStyledNavLink>
              <ImgWrapper>
                <StyledImg src={beers} alt="beers" />
                <OverlayButton>Join beerup</OverlayButton>
              </ImgWrapper>
            </OverlayList>
          </OverlayStyledContainer>
        </Overlay>
        <StyledButton onClick={e => onClick(e, !showOverlay)}>
          Menu
        </StyledButton>
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
              to={paths.routes.BASE}
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
