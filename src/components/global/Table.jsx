import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTable = styled.table`
  color: ${props => props.theme.colors.black};
  width: 80px;
`;

const StyledTD = styled.td`
  padding: 6px;
  color: ${props => props.theme.colors.black};
  font-weight: 400;
  font-size: 0.875rem;
  text-transform: uppercase;
  &:first-of-type {
    padding-left: 0;
    color: rgba(0, 0, 0, 0.3);
  }
  &:last-of-type {
    text-align: right;
    padding-right: 0;
  }
`;

const Table = ({ ibu, abv, className }) => {
  return (
    <StyledTable className={className}>
      <tbody>
        <tr>
          <StyledTD>ibu</StyledTD>
          <StyledTD>{ibu}</StyledTD>
        </tr>
        <tr>
          <StyledTD>ibu</StyledTD>
          <StyledTD>{abv}</StyledTD>
        </tr>
      </tbody>
    </StyledTable>
  );
};

Table.defaultProps = {
  className: null
};

Table.propTypes = {
  className: PropTypes.string,
  ibu: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired
};

export default Table;
