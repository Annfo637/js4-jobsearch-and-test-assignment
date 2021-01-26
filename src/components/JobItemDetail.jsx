import React, { useEffect, useState } from "react";
import Image from "./Image";
import styled from "styled-components";

const StyledJobTitle = styled.h2`
  font-size: 1.5rem;
`;

const StyledStrong = styled.strong`
  display: block;
`;

const StyledDescription = styled.div`
  border: solid #b8b8b8 1px;
  border-radius: 5px;
  box-shadow: 10px 10px 8px #888888;
  margin-top: 15px;
  padding: 10px;
`;

export default function JobItemDetail({ id }) {
  const jobIDURL = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${id}`;

  const [jobDetail, setJobDetail] = useState({});

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
    <div>
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
    </div>
  );
}
