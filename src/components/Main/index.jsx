import React, { memo, useState, useMemo } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { paths } from "../../constants";
import { Container } from "../styles";
import { ModalContext } from "../../utils";
import { Modal } from "../global";

const StyledMain = styled.main`
  background-color: ${props => props.theme.colors.gray};
  min-height: 960px;
  transition: all 0.2s ease-in-out;
  padding: 90px 0;
  transform: translateY(
    ${props => (props.pathname === paths.routes.FAVOURITES ? "-260px" : 0)}
  );
  margin-bottom: ${props =>
    props.pathname === paths.routes.FAVOURITES ? "-260px" : 0};
`;

const Main = ({ children, location: { pathname } }) => {
  const [show, setShow] = useState(false);
  const [beer, setBeer] = useState({});
  const providerShow = useMemo(() => ({ show, setShow, beer, setBeer }), [
    show,
    setShow,
    beer,
    setBeer
  ]);

  return (
    <ModalContext.Provider value={providerShow}>
      <Modal />
      <StyledMain pathname={pathname}>
        <Container>{children}</Container>
      </StyledMain>
    </ModalContext.Provider>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default memo(withRouter(Main));
