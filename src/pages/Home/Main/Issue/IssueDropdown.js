import React from "react";
import styled from "styled-components";
import Dropdown from "../../../../shared_components/Dropdown";

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 5;
  top: 89px;
  right: -37px;
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
  .hovered {
    background-color: #ffffff;
    box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
    border-radius: 10px;
  }
  & .hoveredDropbox {
    display: block;
  }
`;

const IssueDropdown = ({
  isDropped,
  isHovered,
  setIsDropped,
  setIsHovered,
  handleDeleteIssue,
  handleAddFavorite,
}) => {
  return (
    <>
      <DropdownContainer
        className="dropdown"
        onMouseLeave={() => setIsDropped(false) & setIsHovered(false)}
        onMouseOver={() => setIsDropped(true) & setIsHovered(true)}
      >
        <Dropdown
          isDropped={isDropped}
          deleteIssue={handleDeleteIssue}
          addFavorite={handleAddFavorite}
        />
      </DropdownContainer>
      <DropboxBlock className={`dropBox ${isHovered ? "hoveredDropbox" : ""}`}>
        <div className="dots">:</div>
      </DropboxBlock>
    </>
  );
};

export default IssueDropdown;
