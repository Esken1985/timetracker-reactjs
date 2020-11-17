import React from "react";
import styled from "styled-components";

const DatesState = styled.div`
  width: 20px;
  height: 6px;
  background-color: red;
  background-color: ${(props) => props.stateColor};
  border: 1px solid #ffffff;
  border-radius: 48px;
  margin-right: 5px;
`;
const StateContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StateText = styled.p`
  font-size: 11px;
  line-height: 13px;
  color: #898989;
  margin-right: 15px;
`;
const DateStatesInfo = () => {
  return (
    <StateContainer>
      <DatesState stateColor="#62D2B1" />
      <StateText>Done</StateText>
      <DatesState stateColor="#FFCC40" />
      <StateText>In Progress</StateText>
      <DatesState stateColor="#E34040" />
      <StateText>Missed</StateText>
    </StateContainer>
  );
};

export default DateStatesInfo;
