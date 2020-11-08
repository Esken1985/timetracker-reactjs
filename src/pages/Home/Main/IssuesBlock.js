import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../../styled/sharedStyled";
import Issue from "./Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline";

const IssuesBlockContainer = styled.div`
  padding-top: 47px;
`;
const IssuesContainer = styled.div``;

const IssuesBlock = () => {
  return (
    <MainContainer>
      <IssuesBlockContainer>
        <IssuesBlockTop />
        <IssuesContainer>
            <Issue />
        </IssuesContainer>
        <IssuesTimeline />
      </IssuesBlockContainer>
    </MainContainer>
  );
};

export default IssuesBlock;
