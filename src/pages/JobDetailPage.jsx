import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import JobItemDetail from "../components/JobItemDetail";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 20px 5px;
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 3px #888888;
`;

export default function JobDetailPage() {
  const { id } = useParams();
  const history = useHistory();

  function goBackToResults() {
    history.push("/jobs");
  }

  return (
    <div>
      <Link to="/">
        <StyledButton type="button">Back to search page</StyledButton>
      </Link>
      <StyledButton type="button" onClick={goBackToResults}>
        Back to search results
      </StyledButton>
      <JobItemDetail id={id} />
    </div>
  );
}
