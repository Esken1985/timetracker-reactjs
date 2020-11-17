import React, { useState, useEffect } from "react";
import styled from "styled-components";
import datepicker from "../../../assets/datepicker.svg";
import CustomDatepicker from "../../../shared_components/Datepicker/CustomDatepicker";

const MainTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 96px;
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
  cursor: pointer;
  &:first-child {
    margin-right: 20px;
  }
  &:last-child {
    margin-right: 131px;
  }
  &.active {
    color: ${(props) => props.theme.colors.gray2};
    background-color: ${(props) => props.theme.colors.light_grey};
  }
`;

const MainTop = ({setShowFavorite}) => {
  const [linkState, setState] = useState({
    activeLink: "",
    links: [{ text: "All" }, { text: "Favorites" }],
  });

  useEffect(() => {
    setState({ ...linkState, activeLink: linkState.links[0] });
  }, []);

  function toggleActive(index) {
    setState({ ...linkState, activeLink: linkState.links[index] });
  }
  function toggleActiveClass(index) {
    if (linkState.links[index] === linkState.activeLink) {
      return "active";
    } else {
      return "inactive";
    }
  }
  function toggleFavorite(index){
    if (linkState.links[1] === linkState.activeLink) {
      setShowFavorite(false)
    } else {
      setShowFavorite(true)
    }
  }

  return (
    <MainTopContainer>
    <CustomDatepicker />
      <SortingLinks>
        {linkState.links.map((link, index) => (
          <SortingLink
            key={index}
            className={toggleActiveClass(index)}
            onClick={() => {
              toggleActive(index);
              toggleFavorite(index);
            }}
          >
            {link.text}
          </SortingLink>
        ))}
      </SortingLinks>
    </MainTopContainer>
  );
};

export default MainTop;
