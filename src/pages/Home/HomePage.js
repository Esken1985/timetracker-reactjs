import React from "react";
import styled from "styled-components";
import { Container } from "../../styled/sharedStyled";
import MainTop from "./Main/MainTop";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1296px 624px;
  padding-top: 52px;
`;
const Main = styled.main`
    border-right: 1px solid #E9ECF2;
`;
const Aside = styled.aside``;

const HomePage = () => {
  return (
    <Container>
      <Grid>
        <Main>
            <MainTop />
        </Main>
        <Aside></Aside>
      </Grid>
    </Container>
  );
};

export default HomePage;
