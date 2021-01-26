import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../contexts/SearchContextProvider";
import JobItem from "./JobItem";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 3px #888888;
`;

export default function JobList() {
  const {
    searchString,
    jobList,
    setJobList,
    searchList,
    setSearchList,
  } = useContext(SearchContext);
  const url =
    "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=";

  function fetchJobList() {
    const searchURL = `${url}${searchString}`;
    fetch(searchURL)
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }

  function renderJobsFound() {
    return (
      <div>
        <h4>Found {jobList.length} job(s)</h4>
        {jobList && //redundant check?
          jobList.map((job, index) => {
            return (
              <JobItem
                key={index}
                id={job.id}
                type={job.type}
                title={job.title}
                company_url={job.company_url}
                description={job.description}
                company_logo={job.company_logo}
              />
            );
          })}
      </div>
    );
  }

  function renderNoJobsFound() {
    return (
      <div>
        <h4>No jobs found</h4>
      </div>
    );
  }

  useEffect(() => {
    // if searchList has key searchString then setJobList to value
    if (searchList.hasOwnProperty(searchString)) {
      console.log("no fetch");
      setJobList(searchList[searchString]);
    } else {
      fetchJobList();
    }
  }, []);

  useEffect(() => {
    setSearchList({ ...searchList, [searchString]: jobList });
  }, [jobList]);

  return (
    <div>
      <Link to="/">
        <StyledButton type="button">Back to search page</StyledButton>
      </Link>
      {jobList.length !== 0 ? renderJobsFound() : renderNoJobsFound()}
    </div>
  );
}
