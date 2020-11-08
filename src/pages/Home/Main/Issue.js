import React from "react";
import styled from "styled-components";
import { MainContainer } from "../../../styled/sharedStyled";
import ProgressBar from "../../../shared_components/ProgressBar";
import play from "../../../assets/playBtn.svg";

const StyledMainContainer = styled(MainContainer)`
  position: relative;
`;
const IssueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #e9ecf2;
  min-height: 88px;
  position: relative;
  z-index: 5;
  &:hover {
    background-color: #ffffff;
    box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
    border-radius: 10px;
  }
  &:hover ~ .dropBox {
    display: block;
  }
  /* &:hover:after{
      content: ":";
      width: 58px;
      height: 86px;
      background-color: blue;
      position: absolute;
      right: -25px;
      z-index: 0;
  } */
`;
const IssueLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
`;
const IssueRight = styled.div`
  display: flex;
  align-items: center;
`;
const IssueTime = styled.div`
  display: flex;
  padding-right: 32px;
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
  background-color: ${(props) => props.theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 35px;
  margin-left: 36px;
`;
const DropboxBlock = styled.div`
  width: 56px;
  height: 88px;
  position: absolute;
  top: 0;
  right: -38px;
  background-color: blue;
  display: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  color: #ffffff;
  & .dots{
    padding-left: 19px;
    padding-top: 21px;
    font-size: 36px;
  }
`;
const DropBox = styled.div`
  position: absolute;
  background-color: transparent;
  width: 40px;
  height: 100%;
  right: -37px;
`;

const Issue = () => {
  return (
    <StyledMainContainer>
      <IssueContainer className="container">
        <IssueLeft>
          <IssueTime>
            <TimeFrom>09:00 </TimeFrom>
            <TimeTo>-10:00</TimeTo>
          </IssueTime>
          <IssueState />
          <IssueInfo>
            <JiraName>JRM-320</JiraName>
            <WorklogName>Team Standup</WorklogName>
          </IssueInfo>
        </IssueLeft>
        <IssueRight>
          <IssueProgressBar>
            <ProgressBar percentage={90} color="#62D2B1" />
          </IssueProgressBar>
          <IssueDuration>01:00:00</IssueDuration>
          <IssueButton>
            <img src={play} alt="play" />
          </IssueButton>
        </IssueRight>
        <DropBox />
      </IssueContainer>
      <DropboxBlock className="dropBox" ><div className="dots">:</div></DropboxBlock>
    </StyledMainContainer>
  );
};

export default Issue;
