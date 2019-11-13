import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import heart from "../../../assets/heart solid@2x.png";
import heartOutline from "../../../assets/heart outline@2x.png";

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

const FavouriteButton = ({ onClick, favourite, id }) => {
  const handleOnClick = e => {
    e.stopPropagation();
    onClick(id);
  };

  return (
    <Button onClick={handleOnClick}>
      <HeartImg src={favourite ? heart : heartOutline} />
    </Button>
  );
};
FavouriteButton.defaultProps = {};

FavouriteButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  favourite: PropTypes.bool.isRequired
};

export default FavouriteButton;
