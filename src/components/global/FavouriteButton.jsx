import React, { useContext, memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Context } from "../../utils";
import heart from "../../assets/heart solid@2x.png";
import heartOutline from "../../assets/heart outline@2x.png";

const HeartImg = styled.img`
  height: 12px;
  cursor: pointer;
  width: auto;
  z-index: 1;
`;

const Button = styled.button`
  position: absolute;
  top: 8px;
  left: 8px;
  outline: 0;
  border: 0;
  padding: 4px;
  background: transparent;
`;

const FavouriteButton = ({ id, className }) => {
  const { favourites, setFavourites } = useContext(Context);

  const onFavouriteClick = e => {
    e.stopPropagation();
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
    <Button onClick={onFavouriteClick} className={className}>
      <HeartImg src={favourites.includes(id) ? heart : heartOutline} />
    </Button>
  );
};

FavouriteButton.defaultProps = {
  className: null
};

FavouriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default memo(FavouriteButton);
