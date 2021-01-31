import React from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import styled from "styled-components";

const StyledJobItemCard = styled.div`
  background-color: #e9e9e9;
  border: solid 1px transparent;
  border-radius: 5px;
  box-shadow: 10px 10px 8px #888888;
  margin: 20px 10%;
  padding: 20px;
`;

const StyledJobTitle = styled.h2`
  font-size: 1.5rem;
`;

const StyledJobType = styled.strong`
  display: block;
`;

const StyledButton = styled.button`
  color: whitesmoke;
  background-color: coral;
  font-size: 18px;
  padding: 5px;
  border: solid 1px transparent;
  border-radius: 5px;
  box-shadow: 5px 5px 3px #888888;
`;

export default function JobItem({
  id,
  company_logo,
  title,
  type,
  company_url,
  description,
}) {
  const shortDescription = description.substring(0, 200);

  function createMarkup() {
    return { __html: `${shortDescription}...` };
  }

  return (
    <StyledJobItemCard>
      <Image imageURL={company_logo} />
      <StyledJobTitle className="title">Job title: {title}</StyledJobTitle>
      <StyledJobType className="type">Job type: {type}</StyledJobType>
      <a className="company_url" href={company_url}>
        Company Link: {company_url}
      </a>

      <div className="description" dangerouslySetInnerHTML={createMarkup()} />

      <Link to={`/jobs/${id}`}>
        <StyledButton>Read more</StyledButton>
      </Link>
    </StyledJobItemCard>
  );
}
