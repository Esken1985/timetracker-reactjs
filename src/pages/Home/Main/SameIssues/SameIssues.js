import React, { useState } from "react";
import styled from "styled-components";
import Issue from "../Issue/Issue";
import AccordionHeader from "./AccordionHeader";

const Accordion = styled.div`
  & .shown {
    transition: all 600ms ease-in-out;
    height: 100%;
    opacity: 1;
  }
`;
const Content = styled.div`
    transition: all 300ms;
    height: 0;
    opacity: 0;
`;

const SameIssues = ({ issues }) => {
  /*************** info for accordion header ****************/
  let groupTitle = issues.map(issue => issue.worklog)[0]
  let groupJira = issues.map(issue => issue.issue)[0]
  let quantity = issues.length
  /**********************************************************/
  const [isExpanded, setIsExpanded] = useState(groupTitle);
  console.log(groupTitle);
  return (
    <Accordion>
      <AccordionHeader isExpanded={isExpanded} setIsExpanded={setIsExpanded} title={groupTitle} jira={groupJira} quantity={quantity}/>
      <Content className={(isExpanded === groupTitle ? "" : "shown")}>
        {issues.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </Content>
    </Accordion>
  );
};

export default SameIssues;
