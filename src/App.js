import React from "react";
import { Switch, Route } from "react-router-dom";
import JobDetailPage from "./pages/JobDetailPage";
import JobListPage from "./pages/JobListPage";
import SearchPage from "./pages/SearchPage";
import styled from "styled-components";
import BackgroundImage from "./images/yellowflowers-unsplash.jpg";

const StyledContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: lightgray url(${BackgroundImage}) repeat;
  background-blend-mode: overlay;
  background-size: cover;
  background-attachment: scroll;
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
