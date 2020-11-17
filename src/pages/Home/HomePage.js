import React, { useState } from "react";
import _ from "lodash";
// import moment from "moment";
import styled from "styled-components";
import { connect } from "react-redux";
import { Container } from "../../styled/sharedStyled";
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

const HomePage = ({ issues }) => {
  const [showFavoriteOnly, setShowFavoriteOnly] = useState(false);
  const reversedIssues = [...issues].reverse();
  const issuesByDate = _.groupBy(reversedIssues, "date");
  // const favoriteIssues = _.filter(reversedIssues, function (obj) {
  //   return obj.favorite === true;
  // });
  return (
    <Container>
      <Grid>
        <Main>
          <MainTop setShowFavorite={setShowFavoriteOnly} />
          {Object.entries(issuesByDate).map(([key, value]) => (
            <IssuesBlock key={key} issuesByDate={value} />
          ))}
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
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
