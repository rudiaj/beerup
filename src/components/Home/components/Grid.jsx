import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Context } from "../../../utils";
import Card from "./Card";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

const Grid = ({ data }) => {
  const { setShow, setBeer } = useContext(Context);

  const onCardClick = beer => {
    setShow(true);
    setBeer(beer);
  };

  return (
    <StyledGrid>
      {data.map(item => {
        return (
          <Card key={item.id} item={item} onClick={() => onCardClick(item)} />
        );
      })}
    </StyledGrid>
  );
};
Grid.defaultProps = {};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Grid;
