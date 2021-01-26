import React from "react";
import { Switch, Route } from "react-router-dom";
import JobDetailPage from "./pages/JobDetailPage";
import JobListPage from "./pages/JobListPage";
import SearchPage from "./pages/SearchPage";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 30px;
`;

function App() {
  return (
    <StyledContainer className="app-container">
      <Switch>
        <Route path="/jobs/:id" component={JobDetailPage} />
        <Route path="/jobs/" component={JobListPage} />
        <Route path="/" component={SearchPage} />
      </Switch>
    </StyledContainer>
  );
}

export default App;
