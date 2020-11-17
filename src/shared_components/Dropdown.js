import React from "react";
import styled from "styled-components";

const DropdownBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(216, 226, 232, 0.12);
  border-radius: 10px;
  display: none;
  transition: all 0.2s;
  &.dropped {
    display: block;
  }
`;
const DropdownContainer = styled.div`
  width: 172px;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 144.2%;
  color: #4f4f4f;
`;
const DropdownItem = styled.div`
  width: 62%;
  text-align: center;
  cursor: pointer;
  padding: 11px 33px 10px 32px;
  transition: 0.2s;
  &:hover {
    background: #e3f3ff;
  }
`;
const Link = styled.a`
  color: #4f4f4f;
  margin-bottom: 18px;
  text-decoration: none;
`;

const Dropdown = ({ isDropped, deleteIssue, addFavorite }) => {
  return (
    <DropdownBox className={isDropped ? "dropped" : ""}>
      <DropdownContainer>
        <DropdownItem>
          <Link href="#">Jira link</Link>
        </DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownItem onClick={addFavorite} >Add to favorite</DropdownItem>
        <DropdownItem onClick={deleteIssue}>Delete</DropdownItem>
      </DropdownContainer>
    </DropdownBox>
  );
};

export default Dropdown;
