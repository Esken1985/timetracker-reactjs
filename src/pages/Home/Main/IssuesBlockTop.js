import React from "react";
import styled from "styled-components";
import moment from "moment";
import _ from "lodash";
import { msToTime } from "../../../utils/utils.js";
import { MainContainer } from "../../../styled/sharedStyled";
import download from "../../../assets/dwnldBtn.svg";
import ProgressBar from "../../../shared_components/ProgressBar";

const IssuesBlockTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9ecf2;
  padding-bottom: 31px;
`;
const DateInfoDisplay = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding-left: 24px;
`;
const DurationInfoDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Day = styled.div`
  font-weight: bold;
`;
const Date = styled.div`
  font-weight: normal;
`;
const Duration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 44px;
`;
const DurationTime = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #bbbbbb;
  line-height: 35px;
  margin-bottom: 8px;
`;
const DurationProgressBar = styled.div`
  width: 100px;
  height: 6px;
`;
const DwnldBtn = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.stroke};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 35px;
  &:hover{
    background-color: #ffffff;
    transition: all 0.3s;
  }
`;

const IssuesBlockTop = ({ issuesByDate }) => {
  const day = moment().format("ddd");
  const date = moment().format("DD MMMM");
  // *****summing up the total duration time****
  const issuesDurationArr = issuesByDate.map((issue) => issue.duration);
  const totalDuration = msToTime(_.sum(issuesDurationArr));
  // ********************************************
  return (
    <MainContainer>
      <IssuesBlockTopContainer>
        <DateInfoDisplay>
          <Day>{day},</Day>
          <Date>{date}</Date>
        </DateInfoDisplay>
        <DurationInfoDisplay>
          <Duration>
            <DurationTime>{totalDuration}</DurationTime>
            <DurationProgressBar>
              <ProgressBar percentage={42} color="#FFCC40" />
            </DurationProgressBar>
          </Duration>
          <DwnldBtn>
            <img src={download} alt="download" />
          </DwnldBtn>
        </DurationInfoDisplay>
      </IssuesBlockTopContainer>
    </MainContainer>
  );
};

export default IssuesBlockTop;
