import React from "react";
import styled from "styled-components";
import { colors } from "../../../configs";

const Container = styled.div`
  transition: all 0.2s ease-in-out;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-transform: capitalize;
  color: ${colors.black};
  background: ${colors.lightWhite};
  padding: 14px 20px;
  border-radius: 12px;
  cursor: pointer;
  max-height: 48px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${colors.main};
  }
`;

const SecondaryButton = ({ children }) => {
  return <Container>{children}</Container>;
};

export { SecondaryButton };
