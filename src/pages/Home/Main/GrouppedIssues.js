import React from "react";
import styled from "styled-components";
import Issue from "./Issue";

const SingleAccordion = styled.div``;
const Tab = styled.div``;
const Content = styled.div`
  height: 0;
  overflow: hidden;
  & .showContent {
    height: 86px;
  }
`;

const GrouppedIssues = () => {
  return (
    <SingleAccordion>
      <Tab>
          
      </Tab>
      <Content>
        <Issue />
      </Content>
    </SingleAccordion>
  );
};

export default GrouppedIssues;
