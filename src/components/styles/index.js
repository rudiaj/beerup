import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledH1 = styled.h1`
  font-size: 2.125rem;
  color: ${props => props.theme.colors.black};
  margin-bottom: 30px;
`;

export { Container, StyledH1 };
