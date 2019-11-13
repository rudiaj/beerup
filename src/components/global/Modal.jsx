import React, { useContext } from "react";
import styled from "styled-components";
import { isEmpty } from "lodash";
import pattern from "../../assets/pattern.png";
import close from "../../assets/Close icon@2x.png";

import { ModalContext } from "../../utils";
import Table from "./Table";
import Button from "./Button";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  background-image: url(${pattern});
  background-repeat: repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const StyledModal = styled.div`
  max-width: 700px;
  background-color: white;
  padding:40px
  max-height: calc(100vh - 200px);
  position: relative;
  border-radius: 4px;
  margin: 0 15px;
  width:100%;
`;

const ModalHeader = styled.div``;

const ModalBody = styled.div``;

const FlexWrapper = styled.div`
  display: flex;
  padding: 40px 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

const StyledCloseButton = styled.button`
  cursor: pointer;
  background: transparent;
  outline: 0;
  border: 0;
`;

const StyledImg = styled.img`
  width: 115px;
  margin-right: 100px;
  height: auto;
  @media (max-width: 768px) {
    margin-right: 0;
    width: 70px;
    transform: translateY(-90px);
    margin-bottom: -70px;
  }
`;

const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.black};
`;

const StyledTable = styled(Table)`
  margin-bottom: 40px;
`;

const StyledParagraphWrapper = styled.div`
  margin-bottom: 40px;
  max-height: 140px;
  overflow-y: auto;
  overscroll-behavior: contain;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledParagraph = styled.p`
  color: rgba(0, 0, 0, 0.3);
  font-weight: 400;
  line-height: 1.6;
  font-size: 0.875rem;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 40px;
  @media (max-width: 768px) {
    position: absolute;
    margin-bottom: 0;
    bottom: -24px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Modal = () => {
  const {
    show,
    setShow,
    beer,
    beer: { name, image_url, ibu, abv, description }
  } = useContext(ModalContext);

  if (!show) return null;

  return (
    <ModalOverlay>
      {isEmpty(beer) ? null : (
        <StyledModal>
          <ModalHeader>
            <StyledCloseButton type="button" onClick={() => setShow(false)}>
              <img src={close} alt="close" />
            </StyledCloseButton>
          </ModalHeader>
          <ModalBody>
            <FlexWrapper>
              <StyledImg src={image_url} alt="beer" />
              <Info>
                <StyledH2>{name}</StyledH2>
                <StyledTable ibu={ibu} abv={abv} />
                <StyledParagraphWrapper>
                  <StyledParagraph>{description}</StyledParagraph>
                </StyledParagraphWrapper>
                <StyledButton onClick={() => {}}>Add to crate</StyledButton>
              </Info>
            </FlexWrapper>
          </ModalBody>
        </StyledModal>
      )}
    </ModalOverlay>
  );
};
Modal.defaultProps = {};

Modal.propTypes = {};

export default Modal;
