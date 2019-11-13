import React, { memo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 15px 40px;
  border: 2px solid #ffc80a;
  border-radius: 28px;
  display: block;
  text-decoration: none;
  background-color: ${props => props.theme.colors.yellow};
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: black;
  outline: 0;
`;

const Button = ({ onClick, children, className }) => {
  const handleOnClick = e => {
    e.stopPropagation();
    onClick();
  };

  return (
    <StyledButton className={className} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  onClick: () => {},
  className: null
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default memo(Button);
