import React, { useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../../../styled/sharedStyled";
import ProgressBar from "../../../shared_components/ProgressBar";
import play from "../../../assets/grayPlayBtn.svg";
import moment from "moment";
import { msToTime } from "../../../utils/utils.js";
import { connect } from "react-redux";
import { deleteIssue } from "../../../redux/actions/actionCreators";
import Dropdown from "../../../shared_components/Dropdown";

const StyledMainContainer = styled(MainContainer)`
  position: relative;
`;
const IssueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #e9ecf2;
  min-height: 88px;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: #ffffff;
    box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
    border-radius: 10px;
  }
  &:hover ~ .dropBox {
    display: block;
  }
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
  & img {
    width: 100%;
  }
`;
const DropboxBlock = styled.div`
  width: 56px;
  height: 88px;
  position: absolute;
  top: 0;
  right: -38px;
  background-color: ${(props) => props.theme.colors.accent1};
  display: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  color: #ffffff;
  & .dots {
    padding-left: 19px;
    padding-top: 21px;
    font-size: 36px;
  }
`;
const DotsBox = styled.div`
  position: absolute;
  background-color: transparent;
  width: 40px;
  height: 100%;
  right: -37px;
`;
const DropdownContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 90px;
  right: -37px;
`;

const Issue = ({ issue, deleteIssue }) => {
  const [isDropped, setIsDropped] = useState(false);
  const timeFrom = moment(issue.startedAt).format("HH:mm");
  const timeTo = moment(issue.finishedAt).format("HH:mm");
  const duration = msToTime(issue.duration);

  const handleDeleteIssue = () => {
    deleteIssue(issue.id);
  };
  return (
    <StyledMainContainer>
      <IssueContainer className="container">
        <IssueLeft>
          <IssueTime>
            <TimeFrom>{timeFrom}</TimeFrom>
            <TimeTo>-{timeTo}</TimeTo>
          </IssueTime>
          <IssueState />
          <IssueInfo>
            <JiraName>{issue.issue}</JiraName>
            <WorklogName>{issue.worklog}</WorklogName>
          </IssueInfo>
        </IssueLeft>
        <IssueRight>
          <IssueProgressBar>
            <ProgressBar percentage={90} color="#62D2B1" />
          </IssueProgressBar>
          <IssueDuration>{duration}</IssueDuration>
          <IssueButton>
            <img src={play} alt="play" />
          </IssueButton>
        </IssueRight>
        <DotsBox onClick={() => setIsDropped(!isDropped)} />
      </IssueContainer>
      <DropdownContainer>
        <Dropdown isDropped={isDropped}/>
      </DropdownContainer>
      <DropboxBlock className="dropBox">
        <div className="dots">:</div>
      </DropboxBlock>
    </StyledMainContainer>
  );
};

const mapDispatchToProps = {
  deleteIssue,
};

export default connect(null, mapDispatchToProps)(Issue);
