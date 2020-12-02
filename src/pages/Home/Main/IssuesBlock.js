import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { MainContainer } from "../../../styled/sharedStyled";
import Issue from "./Issue/Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline";
import SameIssues from "./SameIssues/SameIssues";

const IssuesBlockContainer = styled.div`
  padding-top: 47px;
`;

const IssuesBlock = ({ issuesByDate }) => {

  /********* Grouping The Issues by the same issue name and worklog name*********/
  let issuesByValue = issuesByDate.reduce(function (hash, issue) {
    if (!hash.hasOwnProperty(issue.issue && issue.worklog))
      hash[issue.issue && issue.worklog] = [];
    hash[issue.issue && issue.worklog].push(issue);
    return hash;
  }, {});

  let groupedByValue = Object.keys(issuesByValue).map(function (key) {
    return issuesByValue[key];
  });
  /******************************************************************************/

  return (
    <MainContainer>
      <IssuesBlockContainer>
        <IssuesBlockTop issuesByDate={issuesByDate} />
        {groupedByValue.map((nested) => (
          nested.length === 1
            ? nested.map((issue) => <Issue key={issue.id} issue={issue} />)
            : <SameIssues issues={nested}/>
        ))}
        {/* {issuesByDate.map((issue) => (
          <Issue key={issue.id} issue={issue} />
        ))} */}
        {/* {
          accItems.map((accItem) => (
            <GrouppedIssues accItem={accItem} key={accItem.id} />
          ))
        } */}
        <IssuesTimeline />
      </IssuesBlockContainer>
    </MainContainer>
  );
};

export default IssuesBlock;
