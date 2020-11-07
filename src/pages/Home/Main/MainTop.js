import React from "react";
import styled from "styled-components";
import { Container } from "../../../styled/sharedStyled";
import datepicker from "../../../assets/datepicker.svg";

const MainTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 96px;
`;
const Datepicker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 197px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.light_grey};
`;
const Date = styled.p`
  padding: 17px 0 23px 3px;
  margin-right: 18px;
  color: ${(props) => props.theme.colors.accent1};
  font-family: Roboto;
  font-style: normal;
  font-size: 18px;
`;
const PickerImg = styled.img`
padding-bottom: 6px;
padding-left: 3px;
`;
const SortingLinks = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SortingLink = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  min-width: 39px;
  padding: 10px 18px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 18px;
  color: #bbbbbb;
  &:first-child {
    margin-right: 20px;
  }
  &:last-child{
    margin-right: 131px;
  }
  &.active {
    color: ${(props) => props.theme.colors.gray2};
    background-color: ${(props) => props.theme.colors.light_grey};
  }
`;

const MainTop = () => {
  return (
    <MainTopContainer>
      <Datepicker>
        <Date>10 June 2020</Date>
        <PickerImg src={datepicker} />
      </Datepicker>
      <SortingLinks>
        <SortingLink className="active">All</SortingLink>
        <SortingLink>Favorites</SortingLink>
      </SortingLinks>
    </MainTopContainer>
  );
};

export default MainTop;
