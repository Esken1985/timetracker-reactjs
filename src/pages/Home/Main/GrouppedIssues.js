import React from "react";
import styled from "styled-components";
import Issue from "./Issue/Issue";

const SingleAccordion = styled.div``;
const Tab = styled.div``;
const Content = styled.div`
  height: 0;
  overflow: hidden;
  & .showContent {
    height: 86px;
  }
`;

const GrouppedIssues = ({issue}) => {
  return (
    <SingleAccordion>
      <Tab>
          Accordion Header
      </Tab>
      <Content>
        <Issue issue={issue}/>
      </Content>
    </SingleAccordion>
  );
};

export default GrouppedIssues;
