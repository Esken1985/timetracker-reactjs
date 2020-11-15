import React from "react";
import styled from "styled-components";
import { MainContainer } from "../styled/sharedStyled";

const FooterWrapper = styled.div`
  background-color: #3744bd;
  display: flex;
  justify-content: start;
`;
const Content = styled.div`
  color: #ffffff;
  padding: 20px 0px 20px 72px;
`;

const Footer = () => {
  return (
      <FooterWrapper>
        <Content>All rights reserved </Content>
      </FooterWrapper>
  );
};

export default Footer;
