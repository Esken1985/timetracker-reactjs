import React from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
`;
const TimeContainer = styled.div`
  display: flex;
  padding-right: 32px;
  min-width: 121px;
  justify-content: center;
`;
const TimeFrom = styled.p`
  color: #1e1e1e;
  font-weight: 700;
  font-size: 18px;
`;
const TimeTo = styled.p`
  color: #bbbbbb;
  font-weight: 500;
  font-size: 18px;
`;
const IssueState = styled.div`
  height: 95%;
  width: 4px;
  border-radius: 5px;
  background-color: red;
`;
const IssueInfo = styled.div`
  max-width: 600px;
  word-wrap: break-word;
  padding-left: 27px;
  line-height: 144.2%;
`;
const JiraName = styled.div`
  color: #828282;
  font-size: 18px;
`;
const WorklogName = styled.div`
  color: #1e1e1e;
  font-size: 20px;
  font-weight: 700;
`;

const IssueLeft = ({issue}) => {
  const timeFrom = moment(issue.startedAt).format("HH:mm");
  const timeTo = moment(issue.finishedAt).format("HH:mm");
  return (
    <Container>
      <TimeContainer>
        <TimeFrom>{timeFrom}</TimeFrom>
        <TimeTo> - {timeTo}</TimeTo>
      </TimeContainer>
      <IssueState />
      <IssueInfo>
        <JiraName>{issue.issue}</JiraName>
        <WorklogName>{issue.worklog}</WorklogName>
      </IssueInfo>
    </Container>
  );
};

export default IssueLeft;
