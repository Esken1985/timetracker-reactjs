import React, { useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../../../../styled/sharedStyled";
import {deleteIssue, addFavorite} from "../../../../redux/actions/actionCreators";
import { connect } from "react-redux";
import Dropdown from "../../../../shared_components/Dropdown";
import IssueLeft from "./IssueLeft";
import IssueRight from "./IssueRight";

const StyledMainContainer = styled(MainContainer)`
  position: relative;
  .hovered {
    background-color: #ffffff;
    box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
    border-radius: 10px;
  }
  & .hoveredDropbox {
    display: block;
  }
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
  top: 89px;
  right: -37px;
`;

const Issue = ({ issue, deleteIssue, addFavorite }) => {
  const [isDropped, setIsDropped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleDeleteIssue = () => {
    deleteIssue(issue.id);
  };
  const handleAddFavorite = () => {
    addFavorite(issue.id);
  };
  const addHoverEffect = () => {
    setIsHovered(true);
    setIsDropped(!isDropped);
  };

  return (
    <StyledMainContainer>
      <IssueContainer
        className={isHovered ? "hovered" : null}
        onMouseLeave={() => setIsDropped(false) || setIsHovered(false)}
      >
        <IssueLeft issue={issue}/>
        <IssueRight issue={issue}/>
        <DotsBox onClick={() => addHoverEffect(issue.id)} />
      </IssueContainer>
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
      <DropboxBlock
        className={`dropBox ${isHovered ? "hoveredDropbox" : ""}`}
      >
        <div className="dots">:</div>
      </DropboxBlock>
    </StyledMainContainer>
  );
};

const mapDispatchToProps = {
  deleteIssue,
  addFavorite,
};

export default connect(null, mapDispatchToProps)(Issue);
