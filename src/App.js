import React from "react";
import { Switch, Route } from "react-router-dom";
import FilterPage from "./pages/Filter/FilterPage";
import HomePage from "./pages/Home/HomePage";
import IssuesPage from "./pages/Issues/IssuesPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Header from "./shared_components/Header";
import { AppWrapper } from "./styled/sharedStyled";

const App = () => {
  return (
    <>
      <Header />
      <AppWrapper>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/issues">
            <IssuesPage />
          </Route>
          <Route exact path="/filter">
            <FilterPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
        </Switch>
      </AppWrapper>
    </>
  );
};

export default App;
