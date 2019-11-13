import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { helpers } from "../../utils";
import { Grid } from "./components";
import { paths } from "../../constants";
import { StyledH1 } from "../styles";
import crate from "../../assets/crate.svg";

const LeftColumn = styled.div`
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 25px;
    overflow: auto;
  }
`;

const RightColumn = styled.div`
  flex: 0 0 265px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

const Tab = styled.button`
  outline: 0;
  border: 0;
  font-size: 0.75rem;
  background: transparent;
  margin-right: 30px;
  text-transform: uppercase;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  color: ${props =>
    props.active ? props.theme.colors.black : "rgba(0,0,0,0.3)"};
  padding: 5px 0;

  border-bottom: ${props =>
    props.active ? `3px solid ${props.theme.colors.orange}` : "0"};
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 265px;
  height: auto;
  @media (max-width: 768px) {
    transform: rotate(90deg);
    max-width: 100%;
    width: auto;
    margin: 0 15px;
  }
`;

const Home = ({ location: { pathname } }) => {
  const isFavourites = pathname === paths.routes.FAVOURITES;
  const ids = helpers.generateIds();
  const [{ data, loading, error }, refetch] = useAxios(
    isFavourites
      ? `${paths.api.GET_BEERS}?page=1&per_page=20&ids=${ids}`
      : `${paths.api.GET_BEERS}?page=1&per_page=20`
  );

  useEffect(() => {
    if (isFavourites) {
      refetch({
        url: `${paths.api.GET_BEERS}?page=1&per_page=20&ids=${ids}`
      });
    }
    if (!isFavourites) {
      refetch({
        url: `${paths.api.GET_BEERS}?page=1&per_page=20`
      });
    }
  }, [ids, isFavourites, pathname, refetch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ColumnWrapper>
      <LeftColumn>
        <StyledH1>{isFavourites ? "My favourite bears" : "Beers"}</StyledH1>
        <Grid data={data} />
      </LeftColumn>
      <RightColumn>
        <StyledH1>Crate</StyledH1>
        <Tabs>
          <Tab active onClick={() => {}}>
            One
          </Tab>
          <Tab onClick={() => {}}>Two</Tab>
          <Tab onClick={() => {}}>Three</Tab>
        </Tabs>
        <StyledImg src={crate} alt="beer crate" />
      </RightColumn>
    </ColumnWrapper>
  );
};

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default memo(withRouter(Home));
