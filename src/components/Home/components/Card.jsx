import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Table, FavouriteButton } from "../../global";

const StyledCard = styled.article`
  position: relative;
  display: flex;
  cursor: pointer;
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 170px;
  align-items: flex-start;
  box-shadow: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

const StyledImg = styled.img`
  height: auto;
  width: 30px;
  margin-right: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.span`
  margin-bottom: 15px;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
`;

const Card = ({ item: { name, image_url, id, ibu, abv }, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <FavouriteButton id={id} />
      <StyledImg src={image_url} />
      <TextContainer>
        <StyledTitle>{name}</StyledTitle>
        <Table ibu={ibu} abv={abv} />
      </TextContainer>
    </StyledCard>
  );
};

Card.defaultProps = {};

Card.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    id: PropTypes.number,
    abv: PropTypes.number,
    ibu: PropTypes.number
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default memo(Card);
