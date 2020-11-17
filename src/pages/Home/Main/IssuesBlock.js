import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../../styled/sharedStyled";
import Issue from "./Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline";

const IssuesBlockContainer = styled.div`
  padding-top: 47px;
`;

const IssuesBlock = ({ issuesByDate }) => {
  return (
    <MainContainer>
      <IssuesBlockContainer>
        <IssuesBlockTop issuesByDate={issuesByDate} />
        {issuesByDate.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
        <IssuesTimeline />
      </IssuesBlockContainer>
    </MainContainer>
  );
};

export default IssuesBlock;
