import React from "react";
import styled from 'styled-components';
import plus from "../../../../assets/plusWorklog.svg"

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ButtonIcon = styled.div`
    padding: 25px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3744BD;
    font-size: 24px;
    cursor: pointer;
`;
const ButtonText = styled.h3`
    font-size: 18px;
    text-align: center;
    color: #C4CACB;
    padding: 22px 0px 125px 0px;
`;

const AddWorklogBtn = ({startStopwatch}) => {
  return (
    <ButtonWrapper onClick={startStopwatch}>
      <ButtonIcon><img src={plus} alt="plus" /></ButtonIcon>
      <ButtonText>New Worklog</ButtonText>
    </ButtonWrapper>
  );
};

export default AddWorklogBtn;