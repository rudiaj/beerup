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
`;

const Wrapper = styled.div`
  width: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
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
  max-width: 50%;
  margin-bottom: 65px;
  transition: all 0.2s ease-in-out;
  transform: translateY(${props => (props.isFavourites ? "-130px" : 0)});
`;

const Header = ({ location: { pathname } }) => {
  const isFavourites = pathname === paths.routes.FAVOURITES;

  return (
    <StyledContainer>
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
