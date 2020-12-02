import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { MainContainer } from "../../../styled/sharedStyled";
import Issue from "./Issue/Issue";
import IssuesBlockTop from "./IssuesBlockTop";
import IssuesTimeline from "./IssuesTimeline";
import GrouppedIssues from "./GrouppedIssues";

const IssuesBlockContainer = styled.div`
  padding-top: 47px;
`;

const IssuesBlock = ({ issuesByDate }) => {
  // const issueHashMap = {};
  // let uniqueIssues = issuesByDate.filter((item, _) => {
  //   let alreadyExists = issueHashMap.hasOwnProperty(item.issue || item.worklog)

  //   return alreadyExists ? false : issueHashMap[item.issue || item.worklog] = 1;
  // })
  let issuesByValue = issuesByDate.reduce(function (hash, issue) {
    if (!hash.hasOwnProperty(issue.issue && issue.worklog))
      hash[issue.issue && issue.worklog] = [];
    hash[issue.issue && issue.worklog].push(issue);
    return hash;
  }, {});

  let groupedByValue = Object.keys(issuesByValue).map(function (key) {
    return issuesByValue[key];
  });

  return (
    <MainContainer>
      <IssuesBlockContainer>
        <IssuesBlockTop issuesByDate={issuesByDate} />
        {groupedByValue.map((nested) => (
          nested.length === 1
            ? nested.map((issue) => <Issue key={issue.id} issue={issue} />)
            : null
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
