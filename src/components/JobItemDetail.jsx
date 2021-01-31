import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Image from "./Image";
import styled from "styled-components";

const StyledJobContainer = styled.div`
  margin: 20px 10%;
  padding: 20px;
`;

const StyledButton = styled.button`
  color: whitesmoke;
  background-color: #e6b854;
  font-size: 18px;
  margin-right: 10px;
  margin-bottom: 40px;
  padding: 5px;
  border: solid 1px transparent;
  border-radius: 5px;
  box-shadow: 5px 5px 3px #888888;
`;

const StyledJobTitle = styled.h2`
  font-size: 1.5rem;
`;

const StyledStrong = styled.strong`
  display: block;
`;

const StyledDescription = styled.div`
  background-color: #e9e9e9;
  border: solid 1px transparent;
  border-radius: 5px;
  box-shadow: 10px 10px 8px #888888;
  margin-top: 15px;
  padding: 10px;
`;

export default function JobItemDetail({ id }) {
  const jobIDURL = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;

  const [jobDetail, setJobDetail] = useState({});

  const history = useHistory();

  function goBackToResults() {
    history.push("/jobs");
  }

  function fetchJobDetail() {
    fetch(jobIDURL)
      .then((res) => res.json())
      .then((data) => setJobDetail(data));
  }

  useEffect(() => {
    fetchJobDetail();
  }, []);

  function createMarkup() {
    return { __html: jobDetail.description };
  }

  return (
    <StyledJobContainer>
      <Link to="/">
        <StyledButton type="button">Back to search page</StyledButton>
      </Link>
      <StyledButton type="button" onClick={goBackToResults}>
        Back to search results
      </StyledButton>
      <br />
      <Image imageURL={jobDetail.company_logo} />
      <h1>{jobDetail.company}</h1>
      <StyledJobTitle className="title">
        Job title: {jobDetail.title}
      </StyledJobTitle>
      <h4>Created: {jobDetail.created_at}</h4>
      <StyledStrong className="location type">
        {jobDetail.location}, {jobDetail.type}
      </StyledStrong>
      <br />
      <a className="company_url" href={jobDetail.company_url}>
        Company Link: {jobDetail.company_url}
      </a>
      <StyledDescription
        className="description"
        dangerouslySetInnerHTML={createMarkup()}
      />
    </StyledJobContainer>
  );
}
