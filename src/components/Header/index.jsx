import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Container } from "../styles";
import { Button } from "../global";

import { paths } from "../../constants";
import beers from "../../assets/illustration.svg";

const StyledContainer = styled(Container)`
  min-height: 565px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${beers});
  background-position: bottom -80px right 15px;
  background-repeat: no-repeat;
  @media (max-width: 1060px) {
    background-position: ${props =>
      props.isFavourites ? "bottom 130px center" : " bottom -20% center"};
    background-size: 300px;
  }
  @media (max-width: 768px) {
    background-size: 50%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  @media (max-width: 1060px) {
    align-items: center;
    text-align: center;
  }
`;

const StyledSpan = styled.span`
  font-size: 1rem;
  display: block;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const Heading = styled.h1`
  font-size: 4.0625rem;
  text-transform: uppercase;
  margin-bottom: 65px;
  max-width: 50%;
  transition: all 0.2s ease-in-out;
  transform: translateY(${props => (props.isFavourites ? "-130px" : 0)});
  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: initial;
  }
`;

const Header = ({ location: { pathname } }) => {
  const isFavourites = pathname === paths.routes.FAVOURITES;

  return (
    <StyledContainer isFavourites={isFavourites}>
      <Wrapper>
        {!isFavourites && <StyledSpan>The beerster pro 2.0</StyledSpan>}
        <Heading isFavourites={isFavourites}>
          {isFavourites ? "Favourites" : "Join our famous beerup!"}
        </Heading>
        {!isFavourites && <Button>Join beerup</Button>}
      </Wrapper>
    </StyledContainer>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default memo(withRouter(Header));
