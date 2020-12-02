import React from "react";
import styled from "styled-components";
import play from "../../../../assets/grayPlayBtn.svg"
import { msToTime } from "../../../../utils/utils.js";
import ProgressBar from "../../../../shared_components/ProgressBar";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const IssueProgressBar = styled.div`
  width: 108px;
  height: 4px;
`;
const IssueDuration = styled.div`
  margin-left: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.2%;
  color: #bbbbbb;
`;
const IssueButton = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: #f0f3f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 35px;
  margin-left: 36px;
  & img {
    width: 100%;
  }
`;

const IssueRight = ({issue}) => {
    const duration = msToTime(issue.duration);
  return (
    <Container>
      <IssueProgressBar>
        <ProgressBar percentage={90} color="#62D2B1" />
      </IssueProgressBar>
      <IssueDuration>{duration}</IssueDuration>
      <IssueButton>
        <img src={play} alt="play" />
      </IssueButton>
    </Container>
  );
};

export default IssueRight;
