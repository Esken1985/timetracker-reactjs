import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../../styled/sharedStyled";
import GrouppedIssues from "./GrouppedIssues";
import Issue from "./Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline";

const IssuesBlockContainer = styled.div`
  padding-top: 47px;
`;

const IssuesBlock = ({ issuesByDate }) => {
  console.log(issuesByDate.date);
  return (
    <MainContainer>
      <IssuesBlockContainer>
        <IssuesBlockTop issuesByDate={issuesByDate} />
        {issuesByDate.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
        {/* <GrouppedIssues /> */}
        <IssuesTimeline />
      </IssuesBlockContainer>
    </MainContainer>
  );
};

export default IssuesBlock;
