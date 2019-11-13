import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import useAxios from "axios-hooks";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { helpers } from "../../utils";
import { Grid } from "./components";
import { paths } from "../../constants";
import { StyledH1 } from "../styles";

const LeftColumn = styled.div`
  margin-rigth: 15px;
`;

const RightColumn = styled.div`
  flex: 0 0 265px;
  background: red;
`;

const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
