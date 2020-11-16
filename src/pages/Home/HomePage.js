import React from "react";
import _ from "lodash";
// import moment from "moment";
import styled from "styled-components";
import { connect } from "react-redux";
import { Container } from "../../styled/sharedStyled";
import { deleteIssue } from "../../redux/actions/actionCreators";
import Aside from "./Aside/Aside";
import IssuesBlock from "./Main/IssuesBlock";
import MainTop from "./Main/MainTop";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1296px 624px;
  padding-top: 142px;
`;
const Main = styled.main`
  border-right: 1px solid #ffffff;
`;
const AsideContainer = styled.aside``;

const HomePage = ({ issues, deleteIssue }) => {
  const handleDeleteIssue = () => {
    
  };
  const reversedIssues = [...issues].reverse();
  const issuesByDate = _.groupBy(reversedIssues, "date");
  console.log(issuesByDate);
  return (
    <Container>
      <Grid>
        <Main>
          <MainTop />
          {!issues.length ? (
            <h1>No worklogs have been added</h1>
          ) : (
            Object.entries(issuesByDate).map(([key, value]) => (
              <IssuesBlock
                key={key}
                issuesByDate={value}
                deleteIssue={handleDeleteIssue}
              />
            ))
          )}
          {/* <IssuesBlock issues={issues} /> */}
        </Main>
        <AsideContainer>
          <Aside />
        </AsideContainer>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.issues.issues,
  };
};
const mapDispatchToProps = {
  deleteIssue,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
