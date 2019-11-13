import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ModalContext } from "../../../utils";
import Card from "./Card";

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
`;

const Grid = ({ data }) => {
  const { setShow, setBeer } = useContext(ModalContext);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favorites"))
      ? JSON.parse(localStorage.getItem("favorites"))
      : []
  );

  useEffect(() => {
    if (!localStorage.getItem("favorites")) {
      localStorage.setItem("favorites", "[]");
    }
  }, []);

  const onCardClick = beer => {
    setShow(true);
    setBeer(beer);
  };

  const onFavouriteClick = id => {
    const favoritesList = JSON.parse(localStorage.getItem("favorites"));

    if (favoritesList.includes(id)) {
      const omitted = favoritesList.filter(favorite => favorite !== id);
      localStorage.setItem("favorites", JSON.stringify(omitted));
      setFavourites(omitted);
    } else {
      favoritesList.push(id);
      localStorage.setItem("favorites", JSON.stringify(favoritesList));
      setFavourites(favoritesList);
    }
  };

  return (
    <StyledGrid>
      {data.map(item => {
        return (
          <Card
            key={item.id}
            item={item}
            onFavouriteClick={onFavouriteClick}
            favourites={favourites}
            onClick={() => onCardClick(item)}
          />
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
