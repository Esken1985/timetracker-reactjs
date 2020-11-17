import React from "react";
import styled from "styled-components";
import datepicker from "../../assets/datepicker.svg";

const DatepickerInput = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 197px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.light_grey};
  &:hover {
    background-color: #ffffff;
  }
`;
const Date = styled.p`
  padding: 20px 0 20px 3px;
  margin-right: 18px;
  color: ${(props) => props.theme.colors.accent1};
  font-family: Roboto;
  font-style: normal;
  font-size: 18px;
`;
const PickerImg = styled.img`
  padding-left: 3px;
`;

const CustomInput = ({ inputDate, onClick }) => {
  return (
    <DatepickerInput onClick={onClick}>
      <Date>{inputDate}</Date>
      <PickerImg src={datepicker} alt="datepicker" />
    </DatepickerInput>
  );
};

export default CustomInput;
