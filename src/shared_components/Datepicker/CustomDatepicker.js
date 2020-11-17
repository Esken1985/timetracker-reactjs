import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import CustomInput from "./CustomInput";
import "react-datepicker/dist/react-datepicker.css"
import moment from "moment"
import DateStatesInfo from "./DateStatesInfo";
import styleable from 'react-styleable'
import css from './datepicker.css'

const DatePickerContainer = styled.div`
  position: relative;
  z-index: 5;
`;
const StateInfoContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
margin-bottom: 35px;
`;

const CustomDatepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const inputDate = moment(startDate).format("D MMMM")
  return (
    <DatePickerContainer>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput inputDate={inputDate}/>}
      >
        <StateInfoContainer>
          <DateStatesInfo />
        </StateInfoContainer>
      </DatePicker>
    </DatePickerContainer>
  );
};

export default styleable(css)(CustomDatepicker);
