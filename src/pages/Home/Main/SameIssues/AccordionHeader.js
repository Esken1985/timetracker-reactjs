import React from "react";
import styled from "styled-components";
import moment from "moment";
import { MainContainer } from "../../../../styled/sharedStyled";

const HeaderContainer = styled.div`
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
    & .quantity {
      background-color: #e9ecf2;
    }
  }
`;
const IssuesQuantity = styled.div`
  display: flex;
  padding-right: 32px;
  min-width: 121px;
  justify-content: center;
  & div {
    width: 38px;
    height: 38px;
    font-weight: 700;
    border-radius: 50%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    cursor: pointer;
  }
`;
const IssueState = styled.div`
  height: 95%;
  width: 4px;
  border-radius: 5px;
  background-color: yellow;
`;
const IssueInfo = styled.div`
  max-width: 600px;
  word-wrap: break-word;
  padding-left: 27px;
  line-height: 144.2%;
`;
const JiraName = styled.div`
  color: #828282;
  font-size: 18px;
`;
const WorklogName = styled.div`
  color: #1e1e1e;
  font-size: 20px;
  font-weight: 700;
`;
const IssueDuration = styled.div`
  margin-left: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 144.2%;
  color: #bbbbbb;
  padding-right: 40px;
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  padding-left: 32px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const AccordionHeader = ({
  isExpanded,
  setIsExpanded,
  title,
  jira,
  quantity,
}) => {
  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderRight>
          <IssuesQuantity>
            {isExpanded ? (
              <div
                className="quantity"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {quantity}
              </div>
            ) : (
              <div className="quantity" onClick={() => setIsExpanded(title)}>
                &#8743;
              </div>
            )}
          </IssuesQuantity>
          <IssueState />
          <IssueInfo>
            <JiraName>{jira}</JiraName>
            <WorklogName>{title}</WorklogName>
          </IssueInfo>
        </HeaderRight>

        <HeaderLeft></HeaderLeft>
      </HeaderContainer>
    </MainContainer>
  );
};

export default AccordionHeader;
